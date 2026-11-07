"""Integração opcional com Gemini via Google Gen AI SDK."""

from __future__ import annotations

import logging
from typing import Any, NoReturn, TypeVar

from google import genai
from google.genai import errors, types
from pydantic import ValidationError

from app.core.config import Settings
from app.ingestion.base import DocumentoNormalizado
from app.providers.base import ErroProvedor, LLMProvider
from app.providers.prompts import INSTRUCAO_SISTEMA, PROMPT_CLASSIFICACAO, PROMPT_EXTRACAO
from app.schemas.classification import ClassificacaoDocumento
from app.schemas.enums import CodigoErro
from app.schemas.extraction import DadosExtraidos
from app.schemas.output import OrigemAnalise

ModeloSaida = TypeVar("ModeloSaida", ClassificacaoDocumento, DadosExtraidos)
logger = logging.getLogger(__name__)

# JSON Schema subset accepted by Gemini's response_json_schema. Pydantic adds defaults and
# string-length constraints that aren't part of this endpoint's supported subset.
_CHAVES_SCHEMA_GEMINI = frozenset(
    {
        "$id",
        "$defs",
        "$ref",
        "$anchor",
        "type",
        "format",
        "title",
        "description",
        "enum",
        "items",
        "prefixItems",
        "minItems",
        "minimum",
        "maximum",
        "anyOf",
        "oneOf",
        "properties",
        "additionalProperties",
        "required",
        "propertyOrdering",
    }
)


def _schema_json_gemini(modelo: type[ModeloSaida]) -> dict[str, Any]:
    """Converte o JSON Schema Pydantic no subconjunto compatível com Gemini."""
    schema = modelo.model_json_schema()

    def filtrar_schema(no: dict[str, Any]) -> dict[str, Any]:
        resultado: dict[str, Any] = {}
        for chave, valor in no.items():
            if chave not in _CHAVES_SCHEMA_GEMINI:
                continue
            if chave in {"properties", "$defs"} and isinstance(valor, dict):
                # Estes mapas têm nomes definidos pelo contrato, não keywords JSON Schema.
                resultado[chave] = {
                    nome: filtrar_schema(subschema) for nome, subschema in valor.items()
                }
            elif chave in {"items", "additionalProperties"} and isinstance(valor, dict):
                resultado[chave] = filtrar_schema(valor)
            elif chave in {"anyOf", "oneOf", "prefixItems"} and isinstance(valor, list):
                resultado[chave] = [
                    filtrar_schema(item) if isinstance(item, dict) else item for item in valor
                ]
            else:
                resultado[chave] = valor

        # Structured output expects each object property to be accounted for in `required`.
        # Pydantic omits fields with defaults from this list, although the application contract
        # still expects them. Nullable fields can be emitted as null and then validated normally.
        propriedades = resultado.get("properties")
        if isinstance(propriedades, dict):
            resultado["required"] = list(propriedades)
        return resultado

    return filtrar_schema(schema)


class GeminiProvider(LLMProvider):
    """Faz duas chamadas separadas: classificação e extração estruturadas pelo schema."""

    def __init__(self, configuracao: Settings, client: Any | None = None) -> None:
        if configuracao.llm_provider != "gemini":
            raise ValueError("GeminiProvider exige LLM_PROVIDER=gemini")
        if not configuracao.llm_model or configuracao.llm_api_key is None:
            raise ValueError("GeminiProvider exige LLM_MODEL e LLM_API_KEY")
        self.modelo = configuracao.llm_model
        self._timeout_ms = int(configuracao.llm_timeout_seconds * 1000)
        self._client = client or genai.Client(
            api_key=configuracao.llm_api_key.get_secret_value(),
            http_options=types.HttpOptions(
                timeout=self._timeout_ms,
                retry_options=types.HttpRetryOptions(attempts=2),
            ),
        )

    @property
    def origem_analise(self) -> OrigemAnalise:
        return OrigemAnalise(provedor="gemini", modelo=self.modelo, dados_de_teste=False)

    def classificar(self, documento: DocumentoNormalizado) -> ClassificacaoDocumento:
        return self._gerar(
            documento, PROMPT_CLASSIFICACAO, ClassificacaoDocumento, etapa="classificacao"
        )

    def extrair(
        self, documento: DocumentoNormalizado, classificacao: ClassificacaoDocumento
    ) -> DadosExtraidos:
        contexto = (
            f"Categoria previamente classificada: {classificacao.tipo_documento.value}. "
            "Use essa categoria apenas como contexto; não infira campos sem evidência.\n\n"
        )
        return self._gerar(
            documento, contexto + PROMPT_EXTRACAO, DadosExtraidos, etapa="extracao"
        )

    def _gerar(
        self,
        documento: DocumentoNormalizado,
        instrucao: str,
        modelo_saida: type[ModeloSaida],
        *,
        etapa: str,
    ) -> ModeloSaida:
        partes: list[Any] = [types.Part.from_text(text=instrucao)]
        if documento.texto:
            partes.append(
                types.Part.from_text(text="Conteúdo textual do documento:\n" + documento.texto)
            )
        for imagem in documento.imagens_png:
            partes.append(types.Part.from_bytes(data=imagem, mime_type="image/png"))
        if len(partes) == 1:
            raise ErroProvedor(CodigoErro.ARQUIVO_INVALIDO, "O documento normalizado está vazio.")

        schema_resposta = _schema_json_gemini(modelo_saida)
        try:
            resposta = self._client.models.generate_content(
                model=self.modelo,
                contents=partes,
                config=types.GenerateContentConfig(
                    system_instruction=INSTRUCAO_SISTEMA,
                    response_mime_type="application/json",
                    response_json_schema=schema_resposta,
                    temperature=0,
                    max_output_tokens=4096,
                ),
            )
        except errors.APIError as exc:
            logger.exception(
                "Falha na API Gemini (etapa=%s, modelo=%s). "
                "Argumentos relevantes: response_mime_type=application/json, temperature=0, "
                "max_output_tokens=4096, schema=%r. Conteúdo do documento omitido. "
                "Detalhes completos retornados pela API: %r",
                etapa,
                self.modelo,
                schema_resposta,
                getattr(exc, "details", None),
            )
            self._traduzir_erro_api(exc)
        except Exception as exc:
            nome_erro = type(exc).__name__.lower()
            if "timeout" in nome_erro:
                raise ErroProvedor(
                    CodigoErro.PROVEDOR_TIMEOUT, "O provedor de IA excedeu o tempo limite."
                ) from exc
            raise ErroProvedor(
                CodigoErro.PROVEDOR_INDISPONIVEL, "Não foi possível acessar o provedor de IA."
            ) from exc

        try:
            dados = getattr(resposta, "parsed", None)
            if dados is not None:
                return modelo_saida.model_validate(dados)
            texto = getattr(resposta, "text", None)
            if texto:
                return modelo_saida.model_validate_json(texto)
        except (ValidationError, ValueError, TypeError) as exc:
            raise ErroProvedor(
                CodigoErro.RESPOSTA_INVALIDA_PROVEDOR,
                "O provedor retornou dados incompatíveis com o contrato.",
            ) from exc
        raise ErroProvedor(
            CodigoErro.RESPOSTA_INVALIDA_PROVEDOR, "O provedor não retornou conteúdo estruturado."
        )

    @staticmethod
    def _traduzir_erro_api(exc: errors.APIError) -> NoReturn:
        codigo = getattr(exc, "code", None)
        if codigo in {408, 504}:
            raise ErroProvedor(
                CodigoErro.PROVEDOR_TIMEOUT, "O provedor de IA excedeu o tempo limite."
            ) from exc
        raise ErroProvedor(
            CodigoErro.PROVEDOR_INDISPONIVEL,
            "O provedor de IA recusou ou não pôde atender à solicitação.",
        ) from exc

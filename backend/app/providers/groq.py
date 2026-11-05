"""Integração com Groq usando saídas JSON Schema estritas."""

from __future__ import annotations

import base64
import json
import logging
from typing import Any

from groq import APIError, APITimeoutError, Groq
from pydantic import ValidationError

from app.core.config import Settings
from app.ingestion.base import DocumentoNormalizado
from app.providers.base import ErroProvedor, LLMProvider
from app.providers.prompts import INSTRUCAO_SISTEMA, PROMPT_CLASSIFICACAO, PROMPT_EXTRACAO
from app.schemas.classification import ClassificacaoDocumento
from app.schemas.enums import CodigoErro, SituacaoCampo
from app.schemas.extraction import DadosExtraidos, Exame
from app.schemas.output import OrigemAnalise

logger = logging.getLogger(__name__)
_MODELO_VISAO = "qwen/qwen3.8-27b"
_MAX_IMAGENS_POR_REQUISICAO = 3
_MODELOS_JSON_SCHEMA_ESTRITO = frozenset(
    {"openai/gpt-oss-20b", "openai/gpt-oss-120b", _MODELO_VISAO}
)

# Subconjunto aceito pelo modo JSON Schema estrito da API Groq/OpenAI.
_CHAVES_SCHEMA_GROQ = frozenset(
    {
        "$defs",
        "$ref",
        "type",
        "format",
        "title",
        "description",
        "enum",
        "items",
        "minimum",
        "maximum",
        "anyOf",
        "properties",
        "additionalProperties",
        "required",
    }
)


def _schema_json_groq(
    modelo: type[ClassificacaoDocumento] | type[DadosExtraidos],
) -> dict[str, Any]:
    """Filtra o schema Pydantic e aplica requisitos do modo estrito do Groq."""
    schema = modelo.model_json_schema()
    definicoes = schema.get("$defs", {})

    def filtrar(no: dict[str, Any]) -> dict[str, Any]:
        resultado: dict[str, Any] = {}
        for chave, valor in no.items():
            if chave not in _CHAVES_SCHEMA_GROQ:
                continue
            if chave in {"properties", "$defs"} and isinstance(valor, dict):
                resultado[chave] = {nome: filtrar(item) for nome, item in valor.items()}
            elif chave == "items" and isinstance(valor, dict):
                resultado[chave] = filtrar(valor)
            elif chave == "anyOf" and isinstance(valor, list):
                alternativas = []
                for item in valor:
                    referencia = item.get("$ref") if isinstance(item, dict) else None
                    if isinstance(referencia, str) and referencia.startswith("#/$defs/"):
                        nome = referencia.removeprefix("#/$defs/")
                        definicao = definicoes.get(nome)
                        # Groq strict precisa ver o enum diretamente para distinguir a união
                        # enum/null; uma referência opaca dentro de anyOf não é discriminador.
                        alternativas.append(
                            filtrar(definicao) if isinstance(definicao, dict) else filtrar(item)
                        )
                    else:
                        alternativas.append(filtrar(item) if isinstance(item, dict) else item)
                resultado[chave] = alternativas
            else:
                resultado[chave] = valor

        propriedades = resultado.get("properties")
        if isinstance(propriedades, dict):
            resultado["required"] = list(propriedades)
            resultado["additionalProperties"] = False
        return resultado

    return filtrar(schema)


class GroqProvider(LLMProvider):
    """Faz classificação e extração com modelos Groq de saída JSON Schema estrita."""

    def __init__(self, configuracao: Settings, client: Any | None = None) -> None:
        if configuracao.llm_provider != "groq":
            raise ValueError("GroqProvider exige LLM_PROVIDER=groq")
        if not configuracao.llm_model or configuracao.groq_api_key is None:
            raise ValueError("GroqProvider exige LLM_MODEL e GROQ_API_KEY")
        if configuracao.llm_model not in _MODELOS_JSON_SCHEMA_ESTRITO:
            raise ValueError(
                "LLM_MODEL precisa suportar JSON Schema estrito no Groq: "
                + ", ".join(sorted(_MODELOS_JSON_SCHEMA_ESTRITO))
            )
        self.modelo = configuracao.llm_model
        self._client = client or Groq(
            api_key=configuracao.groq_api_key.get_secret_value(),
            timeout=configuracao.llm_timeout_seconds,
            max_retries=2,
        )

    @property
    def origem_analise(self) -> OrigemAnalise:
        return OrigemAnalise(provedor="groq", modelo=self.modelo, dados_de_teste=False)

    def classificar(self, documento: DocumentoNormalizado) -> ClassificacaoDocumento:
        return self._gerar(documento, PROMPT_CLASSIFICACAO, ClassificacaoDocumento, "classificacao")

    def extrair(
        self, documento: DocumentoNormalizado, classificacao: ClassificacaoDocumento
    ) -> DadosExtraidos:
        contexto = (
            f"Categoria previamente classificada: {classificacao.tipo_documento.value}. "
            "Use essa categoria apenas como contexto; não infira campos sem evidência.\n\n"
        )
        return self._gerar(documento, contexto + PROMPT_EXTRACAO, DadosExtraidos, "extracao")

    def _gerar(
        self,
        documento: DocumentoNormalizado,
        instrucao: str,
        modelo_saida: type[ClassificacaoDocumento] | type[DadosExtraidos],
        etapa: str,
    ) -> Any:
        if not documento.texto and not documento.imagens_png:
            raise ErroProvedor(CodigoErro.ARQUIVO_INVALIDO, "O documento normalizado está vazio.")
        if documento.imagens_png and self.modelo != _MODELO_VISAO:
            raise ErroProvedor(
                CodigoErro.FORMATO_NAO_SUPORTADO,
                f"O modelo {self.modelo} não está configurado para processar imagens pelo Groq.",
            )
        if len(documento.imagens_png) > _MAX_IMAGENS_POR_REQUISICAO:
            raise ErroProvedor(
                CodigoErro.FORMATO_NAO_SUPORTADO,
                "O modelo Groq aceita no máximo 3 imagens por solicitação.",
            )

        conteudo_usuario: list[dict[str, Any]] = []
        if documento.texto:
            conteudo_usuario.append(
                {"type": "text", "text": "Conteúdo textual do documento:\n" + documento.texto}
            )
        for imagem in documento.imagens_png:
            codificada = base64.b64encode(imagem).decode("ascii")
            conteudo_usuario.append(
                {
                    "type": "image_url",
                    "image_url": {"url": f"data:image/png;base64,{codificada}"},
                }
            )

        schema = _schema_json_groq(modelo_saida)
        nome_schema = (
            "classificacao_documento"
            if modelo_saida is ClassificacaoDocumento
            else "dados_extraidos"
        )
        try:
            resposta = self._client.chat.completions.create(
                model=self.modelo,
                messages=[
                    {"role": "system", "content": f"{INSTRUCAO_SISTEMA}\n\n{instrucao}"},
                    {"role": "user", "content": conteudo_usuario},
                ],
                response_format={
                    "type": "json_schema",
                    "json_schema": {"name": nome_schema, "strict": True, "schema": schema},
                },
                temperature=0,
                max_completion_tokens=4096,
            )
        except APITimeoutError as exc:
            raise ErroProvedor(
                CodigoErro.PROVEDOR_TIMEOUT, "O provedor de IA excedeu o tempo limite."
            ) from exc
        except APIError as exc:
            logger.exception(
                "Falha na API Groq (etapa=%s, modelo=%s, status=%s): %s",
                etapa,
                self.modelo,
                getattr(exc, "status_code", None),
                str(exc),
            )
            if getattr(exc, "status_code", None) in {408, 504}:
                raise ErroProvedor(
                    CodigoErro.PROVEDOR_TIMEOUT, "O provedor de IA excedeu o tempo limite."
                ) from exc
            raise ErroProvedor(
                CodigoErro.PROVEDOR_INDISPONIVEL,
                "O provedor de IA recusou ou não pôde atender à solicitação.",
            ) from exc

        try:
            texto = resposta.choices[0].message.content
            if not texto:
                raise ValueError("resposta vazia")
            dados = json.loads(texto)
            resultado = modelo_saida.model_validate(dados)
            if isinstance(resultado, DadosExtraidos):
                resultado.exames = self._reter_exames_com_evidencia(resultado, documento)
            return resultado
        except (
            IndexError,
            AttributeError,
            ValidationError,
            TypeError,
            ValueError,
        ) as exc:
            raise ErroProvedor(
                CodigoErro.RESPOSTA_INVALIDA_PROVEDOR,
                "O provedor retornou dados incompatíveis com o contrato.",
            ) from exc

    @staticmethod
    def _reter_exames_com_evidencia(
        dados: DadosExtraidos, documento: DocumentoNormalizado
    ) -> list[Exame]:
        """Descarta exames sem nome específico e evidência verificável no texto disponível."""
        termos_genericos = {"exame", "exames", "laudo", "teste", "procedimento"}
        texto_documento = " ".join((documento.texto or "").casefold().split())
        exames_validos: list[Exame] = []
        for exame in dados.exames:
            nome = exame.nome.valor
            evidencia = exame.nome.evidencia
            if (
                exame.nome.situacao is not SituacaoCampo.PRESENTE
                or not isinstance(nome, str)
                or not nome.strip()
                or nome.casefold().strip() in termos_genericos
                or not evidencia
            ):
                continue
            if texto_documento:
                evidencia_normalizada = " ".join(evidencia.casefold().split())
                if evidencia_normalizada not in texto_documento:
                    continue
            exames_validos.append(exame)
        return exames_validos

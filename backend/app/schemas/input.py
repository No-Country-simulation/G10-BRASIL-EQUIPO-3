"""Contratos de entrada.

- `EntradaTriagem`: corpo JSON (texto já extraído). Uploads de arquivo usam multipart/form-data
  na API e são convertidos em `DocumentoRecebido`.
- `DocumentoRecebido`: representação interna normalizada, usada pelo pipeline.
"""

from __future__ import annotations

from typing import Annotated, Any, Self
from uuid import uuid4

from pydantic import Field, field_validator, model_validator

from app.schemas.base import ModeloContrato
from app.schemas.enums import CANAL_ORIGEM_ALIASES, CanalOrigem, TipoArquivo

# Começa com alfanumérico e só usa caracteres seguros: o id compõe chaves de objeto e nomes de
# arquivo, então não pode conter separadores de caminho nem ser "." ou "..".
PADRAO_DOCUMENTO_ID = r"^[A-Za-z0-9][A-Za-z0-9._-]{0,63}$"
DocumentoId = Annotated[str, Field(pattern=PADRAO_DOCUMENTO_ID)]

_FORMATOS_BINARIOS_OBRIGATORIOS = {TipoArquivo.PNG, TipoArquivo.JPEG}


def gerar_documento_id() -> str:
    """Gera um identificador único quando o cliente não informa `documento_id`."""
    return f"DOC-{uuid4().hex[:12].upper()}"


def _aceitar_alias_canal(valor: Any) -> Any:
    if isinstance(valor, str) and valor in CANAL_ORIGEM_ALIASES:
        return CANAL_ORIGEM_ALIASES[valor]
    return valor


class EntradaTriagem(ModeloContrato):
    """Entrada JSON: o texto do documento já extraído.

    `tipo_arquivo` registra o formato de origem do conteúdo (ex.: PDF cujo texto já foi extraído).
    """

    documento_id: DocumentoId | None = None
    tipo_arquivo: TipoArquivo
    documento_texto: str = Field(min_length=1, repr=False)
    canal_origem: CanalOrigem

    _alias_canal = field_validator("canal_origem", mode="before")(_aceitar_alias_canal)


class DocumentoRecebido(ModeloContrato):
    """Documento aceito pela API, pronto para o pipeline (exatamente uma forma de conteúdo)."""

    documento_id: DocumentoId
    tipo_arquivo: TipoArquivo
    canal_origem: CanalOrigem
    # Conteúdo clínico: fora do repr (logs) e, no caso dos bytes, fora de qualquer serialização.
    texto: str | None = Field(default=None, min_length=1, repr=False)
    conteudo: bytes | None = Field(default=None, min_length=1, repr=False, exclude=True)
    nome_arquivo: str | None = Field(default=None, min_length=1, max_length=255)

    _alias_canal = field_validator("canal_origem", mode="before")(_aceitar_alias_canal)

    @field_validator("nome_arquivo")
    @classmethod
    def _nome_sem_caminho(cls, valor: str | None) -> str | None:
        if valor is not None and any(c in valor for c in ("/", "\\", "\x00")):
            raise ValueError("nome_arquivo não pode conter separadores de caminho")
        return valor

    @model_validator(mode="after")
    def _conteudo_coerente(self) -> Self:
        tem_texto = self.texto is not None
        tem_bytes = self.conteudo is not None
        if tem_texto == tem_bytes:
            raise ValueError("informe exatamente um entre `texto` e `conteudo`")
        if self.tipo_arquivo in _FORMATOS_BINARIOS_OBRIGATORIOS and not tem_bytes:
            raise ValueError(f"{self.tipo_arquivo.value} exige o arquivo (`conteudo`)")
        return self

    @classmethod
    def de_entrada(cls, entrada: EntradaTriagem) -> Self:
        """Converte a entrada JSON, gerando o `documento_id` quando ausente."""
        return cls(
            documento_id=entrada.documento_id or gerar_documento_id(),
            tipo_arquivo=entrada.tipo_arquivo,
            canal_origem=entrada.canal_origem,
            texto=entrada.documento_texto,
        )

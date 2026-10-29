"""Contrato dos achados de validação (ausência, ilegibilidade, formato, contradição...)."""

from __future__ import annotations

import re

from pydantic import Field, field_validator

from app.schemas.base import ModeloContrato
from app.schemas.enums import CodigoValidacao, GravidadeValidacao
from app.schemas.extraction import CHAVE_PADRAO_REGEX


class AchadoValidacao(ModeloContrato):
    """Um achado verificável. Validar o formato do CRM não comprova o registro profissional."""

    codigo: CodigoValidacao
    descricao: str = Field(min_length=1, max_length=1000)
    gravidade: GravidadeValidacao
    # Chaves de campo (ver `extraction.CHAVE_PADRAO_REGEX`); vazio para achados do documento todo.
    campos_afetados: list[str] = Field(default_factory=list, max_length=50)
    evidencia: str | None = Field(default=None, max_length=1000)
    acao_sugerida: str | None = Field(default=None, max_length=500)

    @field_validator("campos_afetados")
    @classmethod
    def _chaves_validas(cls, chaves: list[str]) -> list[str]:
        for chave in chaves:
            if not re.fullmatch(CHAVE_PADRAO_REGEX, chave):
                raise ValueError(f"chave de campo inválida: {chave!r}")
        return chaves

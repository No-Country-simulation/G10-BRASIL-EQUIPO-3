"""Contrato de classificação documental."""

from __future__ import annotations

from typing import Self

from pydantic import Field, model_validator

from app.schemas.base import ModeloContrato, Score
from app.schemas.enums import OrigemSinal, Prioridade, TipoDocumento


class SinalUrgencia(ModeloContrato):
    """Sinal que sustenta a sinalização de possível urgência (LLM ou regra determinística)."""

    origem: OrigemSinal
    descricao: str = Field(min_length=1, max_length=500)
    evidencia: str | None = Field(default=None, max_length=1000)


class ClassificacaoDocumento(ModeloContrato):
    tipo_documento: TipoDocumento
    especialidade: str | None = Field(default=None, min_length=1, max_length=120)
    prioridade: Prioridade
    urgente: bool
    score_confianca_classificacao: Score
    sinais_urgencia: list[SinalUrgencia] = Field(default_factory=list, max_length=20)

    @model_validator(mode="after")
    def _prioridade_coerente(self) -> Self:
        if self.urgente != (self.prioridade is Prioridade.URGENTE):
            raise ValueError("`urgente` e `prioridade` são inconsistentes")
        return self

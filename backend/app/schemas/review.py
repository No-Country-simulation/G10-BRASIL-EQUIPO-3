"""Contratos da revisão humana e do histórico auditável.

Não há autenticação no MVP: o identificador do revisor é apenas INFORMADO e fica registrado
com `identidade_verificada = False`. Ele não é prova de identidade.
"""

from __future__ import annotations

from typing import Self

from pydantic import AwareDatetime, Field, JsonValue, model_validator

from app.schemas.base import ModeloContrato
from app.schemas.enums import DecisaoRevisao
from app.schemas.extraction import CHAVE_CAMPO_REGEX
from app.schemas.input import DocumentoId


def _checar_justificativa(
    decisao: DecisaoRevisao, justificativa: str | None, tem_correcoes: bool
) -> None:
    if decisao is DecisaoRevisao.REJEITAR and not justificativa:
        raise ValueError("a rejeição exige justificativa")
    if decisao is DecisaoRevisao.REJEITAR and tem_correcoes:
        raise ValueError("a rejeição não aceita correções de campos")
    if decisao is DecisaoRevisao.APROVAR and tem_correcoes and not justificativa:
        raise ValueError("aprovação com correções exige justificativa")


class CorrecaoCampoEntrada(ModeloContrato):
    """Correção enviada pelo revisor; o valor anterior é preenchido pelo backend."""

    campo: str = Field(pattern=CHAVE_CAMPO_REGEX)
    valor_posterior: JsonValue


class CorrecaoCampo(ModeloContrato):
    """Correção registrada, com valor anterior e posterior."""

    campo: str = Field(pattern=CHAVE_CAMPO_REGEX)
    valor_anterior: JsonValue
    valor_posterior: JsonValue

    @model_validator(mode="after")
    def _houve_mudanca(self) -> Self:
        if self.valor_anterior == self.valor_posterior:
            raise ValueError("a correção não altera o valor do campo")
        return self


class RequisicaoRevisao(ModeloContrato):
    decisao: DecisaoRevisao
    justificativa: str | None = Field(default=None, min_length=1, max_length=2000)
    correcoes: list[CorrecaoCampoEntrada] = Field(default_factory=list, max_length=100)
    # Identificador informado pelo cliente; NÃO é verificado.
    revisor: str | None = Field(default=None, min_length=1, max_length=120)
    # Versão do resultado que o revisor viu (evita revisar uma versão já substituída).
    versao_resultado_base: int = Field(ge=1)

    @model_validator(mode="after")
    def _regras(self) -> Self:
        _checar_justificativa(self.decisao, self.justificativa, bool(self.correcoes))
        campos = [c.campo for c in self.correcoes]
        if len(campos) != len(set(campos)):
            raise ValueError("há mais de uma correção para o mesmo campo")
        return self


class RegistroRevisao(ModeloContrato):
    documento_id: DocumentoId
    revisor: str | None = Field(default=None, min_length=1, max_length=120)
    identidade_verificada: bool = False
    data_hora: AwareDatetime
    decisao: DecisaoRevisao
    justificativa: str | None = Field(default=None, min_length=1, max_length=2000)
    correcoes: list[CorrecaoCampo] = Field(default_factory=list, max_length=100)
    versao_resultado_anterior: int = Field(ge=1)
    versao_resultado_revisado: int = Field(ge=1)

    @model_validator(mode="after")
    def _regras(self) -> Self:
        _checar_justificativa(self.decisao, self.justificativa, bool(self.correcoes))
        if self.versao_resultado_revisado <= self.versao_resultado_anterior:
            raise ValueError("a versão revisada deve ser posterior à versão anterior")
        return self

"""Contrato de extração de dados.

Cada campo extraído é um `Campo*` com valor, confiança individual, evidência textual e situação
(presente, ausente ou ilegível). Nada é inventado: ausente/ilegível têm `valor = None`.

A confiança por campo mora SOMENTE aqui; `scores_por_campo` da resposta é derivado destes campos.
Os esquemas são permissivos quanto a formato (ex.: CRM): a validação de formato é determinística
e gera achados de validação (Fase 4), em vez de recusar a resposta inteira.
"""

from __future__ import annotations

import re
from datetime import date
from typing import Any, Final, Self

from pydantic import Field, model_validator

from app.schemas.base import ModeloContrato, Score
from app.schemas.enums import SituacaoCampo, TipoExame

# Chave canônica de um campo: "paciente.nome", "medicamentos[0].dosagem".
# `[*]` aparece apenas em padrões (políticas de campos obrigatórios), nunca em chaves concretas.
CHAVE_CAMPO_REGEX: Final = r"^[a-z0-9_]+(\[\d+\])?(\.[a-z0-9_]+(\[\d+\])?)*$"
CHAVE_PADRAO_REGEX: Final = r"^[a-z0-9_]+(\[(\d+|\*)\])?(\.[a-z0-9_]+(\[(\d+|\*)\])?)*$"


def padrao_da_chave(chave: str) -> str:
    """Troca índices concretos por `[*]` (ex.: `medicamentos[2].nome` -> `medicamentos[*].nome`)."""
    return re.sub(r"\[\d+\]", "[*]", chave)


class _CampoBase(ModeloContrato):
    valor: Any = None
    confianca: Score | None = None
    evidencia: str | None = Field(default=None, max_length=1000)
    situacao: SituacaoCampo = SituacaoCampo.PRESENTE
    # Valor confirmado ou corrigido por uma pessoa: a confiança da IA deixa de se aplicar.
    revisado_por_humano: bool = False

    @model_validator(mode="after")
    def _coerencia(self) -> Self:
        if self.situacao is SituacaoCampo.PRESENTE:
            if self.valor is None:
                raise ValueError("campo presente exige `valor`")
        elif self.valor is not None:
            raise ValueError(f"campo {self.situacao.value} não pode ter `valor`")
        if self.revisado_por_humano and self.confianca is not None:
            raise ValueError("campo revisado por humano não carrega confiança da IA")
        return self

    @classmethod
    def ausente(cls) -> Self:
        return cls(situacao=SituacaoCampo.AUSENTE)

    @classmethod
    def ilegivel(cls, evidencia: str | None = None) -> Self:
        return cls(situacao=SituacaoCampo.ILEGIVEL, evidencia=evidencia)


class CampoTexto(_CampoBase):
    valor: str | None = Field(default=None, min_length=1, max_length=2000)


class CampoInteiro(_CampoBase):
    valor: int | None = None


class CampoData(_CampoBase):
    valor: date | None = None


def _ausente(tipo: type[_CampoBase]):
    return Field(default_factory=tipo.ausente)


class Paciente(ModeloContrato):
    nome: CampoTexto = _ausente(CampoTexto)
    idade: CampoInteiro = _ausente(CampoInteiro)


class ProfissionalSolicitante(ModeloContrato):
    nome: CampoTexto = _ausente(CampoTexto)
    crm: CampoTexto = _ausente(CampoTexto)
    uf_crm: CampoTexto = _ausente(CampoTexto)


class Medicamento(ModeloContrato):
    nome: CampoTexto = _ausente(CampoTexto)
    dosagem: CampoTexto = _ausente(CampoTexto)
    posologia: CampoTexto = _ausente(CampoTexto)


class Exame(ModeloContrato):
    nome: CampoTexto = _ausente(CampoTexto)
    tipo: TipoExame | None = None


class DatasRelevantes(ModeloContrato):
    emissao: CampoData = _ausente(CampoData)
    realizacao_exame: CampoData = _ausente(CampoData)
    admissao: CampoData = _ausente(CampoData)
    alta: CampoData = _ausente(CampoData)


# Todos os padrões de chave que `DadosExtraidos.campos_planos()` pode produzir.
CHAVES_CAMPOS: Final = frozenset(
    {
        "paciente.nome",
        "paciente.idade",
        "medico_solicitante.nome",
        "medico_solicitante.crm",
        "medico_solicitante.uf_crm",
        "diagnostico_principal",
        "cid10_documentado",
        "cid10_sugerido",
        "conclusao",
        "procedimento_solicitado",
        "medicamentos[*].nome",
        "medicamentos[*].dosagem",
        "medicamentos[*].posologia",
        "exames[*].nome",
        "datas.emissao",
        "datas.realizacao_exame",
        "datas.admissao",
        "datas.alta",
    }
)


class DadosExtraidos(ModeloContrato):
    paciente: Paciente = Field(default_factory=Paciente)
    medico_solicitante: ProfissionalSolicitante = Field(default_factory=ProfissionalSolicitante)
    diagnostico_principal: CampoTexto = _ausente(CampoTexto)
    # CID-10 explicitamente escrito no documento.
    cid10_documentado: CampoTexto = _ausente(CampoTexto)
    # CID-10 sugerido pela IA: hipótese, NUNCA diagnóstico confirmado.
    cid10_sugerido: CampoTexto = _ausente(CampoTexto)
    conclusao: CampoTexto = _ausente(CampoTexto)
    procedimento_solicitado: CampoTexto = _ausente(CampoTexto)
    medicamentos: list[Medicamento] = Field(default_factory=list, max_length=100)
    exames: list[Exame] = Field(default_factory=list, max_length=100)
    datas: DatasRelevantes = Field(default_factory=DatasRelevantes)
    # Avaliação geral informada pela IA/regras; informativa, não decide o destino sozinha.
    score_confianca_extracao: Score | None = None

    def campos_planos(self) -> dict[str, _CampoBase]:
        """Todos os campos extraídos, indexados por chave canônica (ordem estável)."""
        campos: dict[str, _CampoBase] = {
            "paciente.nome": self.paciente.nome,
            "paciente.idade": self.paciente.idade,
            "medico_solicitante.nome": self.medico_solicitante.nome,
            "medico_solicitante.crm": self.medico_solicitante.crm,
            "medico_solicitante.uf_crm": self.medico_solicitante.uf_crm,
            "diagnostico_principal": self.diagnostico_principal,
            "cid10_documentado": self.cid10_documentado,
            "cid10_sugerido": self.cid10_sugerido,
            "conclusao": self.conclusao,
            "procedimento_solicitado": self.procedimento_solicitado,
        }
        for i, med in enumerate(self.medicamentos):
            campos[f"medicamentos[{i}].nome"] = med.nome
            campos[f"medicamentos[{i}].dosagem"] = med.dosagem
            campos[f"medicamentos[{i}].posologia"] = med.posologia
        for i, exame in enumerate(self.exames):
            campos[f"exames[{i}].nome"] = exame.nome
        campos["datas.emissao"] = self.datas.emissao
        campos["datas.realizacao_exame"] = self.datas.realizacao_exame
        campos["datas.admissao"] = self.datas.admissao
        campos["datas.alta"] = self.datas.alta
        return campos

    def scores_por_campo(self) -> dict[str, float]:
        """Confiança individual dos campos em que ela é avaliável (fonte única dos scores)."""
        return {k: c.confianca for k, c in self.campos_planos().items() if c.confianca is not None}

    def campos_ausentes(self) -> list[str]:
        return [k for k, c in self.campos_planos().items() if c.situacao is SituacaoCampo.AUSENTE]

    def campos_ilegiveis(self) -> list[str]:
        return [k for k, c in self.campos_planos().items() if c.situacao is SituacaoCampo.ILEGIVEL]

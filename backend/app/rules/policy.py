"""Política por categoria: campos obrigatórios e destino do roteamento automático.

Valores PADRÃO definidos na Fase 0 (a tabela de campos obrigatórios é uma proposta aprovada pela
equipe e deve ser validada clinicamente). Ficam em código, tipados e testados; a externalização
para arquivo de configuração é uma evolução opcional.

Uma exigência pode ter alternativas: é satisfeita quando QUALQUER uma das chaves estiver
presente e confiável (ex.: data do exame OU data de emissão). Padrões com `[*]` exigem ao menos
um item na lista e todos os itens confiáveis.
"""

from __future__ import annotations

from dataclasses import dataclass
from types import MappingProxyType
from typing import Final

from app.schemas.enums import Destino, TipoDocumento


@dataclass(frozen=True, slots=True)
class CampoObrigatorio:
    rotulo: str
    alternativas: tuple[str, ...]

    def __post_init__(self) -> None:
        if not self.alternativas:
            raise ValueError("um campo obrigatório precisa de ao menos uma chave")


@dataclass(frozen=True, slots=True)
class PoliticaCategoria:
    campos_obrigatorios: tuple[CampoObrigatorio, ...]
    # None: a categoria nunca é roteada automaticamente (sempre passa por revisão humana).
    destino_automatico: Destino | None


def _obr(rotulo: str, *chaves: str) -> CampoObrigatorio:
    return CampoObrigatorio(rotulo=rotulo, alternativas=chaves)


_PACIENTE = _obr("Nome do paciente", "paciente.nome")
_PROFISSIONAL = _obr("Nome do profissional", "medico_solicitante.nome")
_CRM = _obr("CRM do profissional", "medico_solicitante.crm")
_UF_CRM = _obr("UF do CRM", "medico_solicitante.uf_crm")

POLITICA_POR_CATEGORIA: Final = MappingProxyType(
    {
        TipoDocumento.RECEITA_MEDICA: PoliticaCategoria(
            campos_obrigatorios=(
                _PACIENTE,
                _PROFISSIONAL,
                _CRM,
                _UF_CRM,
                _obr("Medicamento", "medicamentos[*].nome"),
                _obr("Dosagem", "medicamentos[*].dosagem"),
                _obr("Posologia", "medicamentos[*].posologia"),
                _obr("Data de emissão", "datas.emissao"),
            ),
            destino_automatico=Destino.FARMACIA_HOSPITALAR,
        ),
        TipoDocumento.LAUDO_EXAME: PoliticaCategoria(
            campos_obrigatorios=(
                _PACIENTE,
                _obr("Exame", "exames[*].nome"),
                _obr("Conclusão", "conclusao"),
                _obr("Data do exame ou do laudo", "datas.realizacao_exame", "datas.emissao"),
            ),
            destino_automatico=Destino.PRONTUARIO_ELETRONICO,
        ),
        TipoDocumento.GUIA_SOLICITACAO_PROCEDIMENTO: PoliticaCategoria(
            campos_obrigatorios=(
                _PACIENTE,
                _obr("Procedimento solicitado", "procedimento_solicitado", "exames[*].nome"),
                _PROFISSIONAL,
                _CRM,
                _UF_CRM,
            ),
            destino_automatico=Destino.AUDITORIA_AUTORIZACOES,
        ),
        TipoDocumento.RELATORIO_ALTA_INTERNACAO: PoliticaCategoria(
            campos_obrigatorios=(
                _PACIENTE,
                _obr("Diagnóstico", "diagnostico_principal"),
                _obr("Data de admissão", "datas.admissao"),
                _obr("Data de alta", "datas.alta"),
                _PROFISSIONAL,
            ),
            destino_automatico=Destino.PRONTUARIO_ELETRONICO,
        ),
        TipoDocumento.ATESTADO_MEDICO: PoliticaCategoria(
            campos_obrigatorios=(
                _PACIENTE,
                _PROFISSIONAL,
                _CRM,
                _UF_CRM,
                _obr("Data de emissão", "datas.emissao"),
            ),
            destino_automatico=Destino.PRONTUARIO_ELETRONICO,
        ),
        TipoDocumento.OUTRO: PoliticaCategoria(campos_obrigatorios=(), destino_automatico=None),
        TipoDocumento.INDETERMINADO: PoliticaCategoria(
            campos_obrigatorios=(), destino_automatico=None
        ),
    }
)

# Campo crítico para o despacho direto de um urgente à emergência. Além dele, é exigida a
# evidência textual do achado (ver `ClassificacaoDocumento.sinais_urgencia`).
CAMPOS_CRITICOS_URGENCIA: Final = ("paciente.nome",)


def politica_para(tipo: TipoDocumento) -> PoliticaCategoria:
    return POLITICA_POR_CATEGORIA[tipo]

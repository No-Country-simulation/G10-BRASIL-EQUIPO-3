"""Contrato da decisão de roteamento.

Prioridade, confiança, status e destino são independentes. Este modelo valida apenas
invariantes estruturais que NUNCA podem ser violadas; a lógica que escolhe o destino fica em
`rules/` (Fase 4).
"""

from __future__ import annotations

from types import MappingProxyType
from typing import Final, Self

from pydantic import Field, model_validator

from app.schemas.base import ModeloContrato
from app.schemas.enums import (
    DESTINOS_FILA_REVISAO,
    DESTINOS_POR_CATEGORIA,
    DESTINOS_URGENCIA,
    Destino,
    MotivoRoteamento,
    Prioridade,
    StatusRevisao,
)
from app.schemas.events import NotificacaoAlerta

# Destinos admitidos para cada código de motivo "determinístico" (aprovação/rejeição humana
# podem levar a qualquer destino e por isso não aparecem aqui).
DESTINOS_POR_MOTIVO: Final = MappingProxyType(
    {
        MotivoRoteamento.URGENCIA_CONFIAVEL: frozenset({Destino.FILA_EMERGENCIA_MEDICA}),
        MotivoRoteamento.URGENCIA_DADO_CRITICO_INSUFICIENTE: frozenset(
            {Destino.FILA_REVISAO_HUMANA_PRIORITARIA}
        ),
        MotivoRoteamento.CONTEUDO_ILEGIVEL: frozenset({Destino.FILA_REVISAO_HUMANA}),
        MotivoRoteamento.CONTEUDO_ILEGIVEL_PRONTO_SOCORRO: frozenset(
            {Destino.FILA_REVISAO_HUMANA_PRIORITARIA}
        ),
        MotivoRoteamento.MEDICAMENTO_ALTO_RISCO: frozenset({Destino.FILA_REVISAO_HUMANA}),
        MotivoRoteamento.BAIXA_CONFIANCA_CAMPO_OBRIGATORIO: frozenset(
            {Destino.FILA_REVISAO_HUMANA}
        ),
        MotivoRoteamento.CAMPO_OBRIGATORIO_AUSENTE: frozenset({Destino.FILA_REVISAO_HUMANA}),
        MotivoRoteamento.CATEGORIA_SEM_ROTEAMENTO_AUTOMATICO: frozenset(
            {Destino.FILA_REVISAO_HUMANA}
        ),
        MotivoRoteamento.CRITERIOS_ATENDIDOS: DESTINOS_POR_CATEGORIA,
    }
)


class DecisaoRoteamento(ModeloContrato):
    destino: Destino
    prioridade: Prioridade
    urgente: bool
    # Verdadeiro somente enquanto a revisão humana está PENDENTE.
    requer_auditoria_humana: bool
    motivo: str = Field(min_length=1, max_length=500)
    codigo_motivo: MotivoRoteamento
    justificativa_roteamento: str = Field(min_length=1, max_length=2000)
    status_revisao: StatusRevisao
    notificacao_gerada: NotificacaoAlerta | None = None

    @model_validator(mode="after")
    def _invariantes(self) -> Self:
        if self.urgente != (self.prioridade is Prioridade.URGENTE):
            raise ValueError("`urgente` e `prioridade` são inconsistentes")

        if self.requer_auditoria_humana != (self.status_revisao is StatusRevisao.PENDENTE):
            raise ValueError("`requer_auditoria_humana` só é verdadeiro com revisão pendente")

        em_fila = self.destino in DESTINOS_FILA_REVISAO
        if em_fila and self.status_revisao is StatusRevisao.NAO_NECESSARIA:
            raise ValueError("destino em fila de revisão humana não pode ter revisão desnecessária")
        if not em_fila and self.status_revisao in {StatusRevisao.PENDENTE, StatusRevisao.REJEITADA}:
            raise ValueError("revisão pendente ou rejeitada só ocorre em fila de revisão humana")

        # Urgência nunca é rebaixada: só a fila prioritária ou a emergência recebem urgentes.
        if self.urgente and self.destino not in DESTINOS_URGENCIA:
            raise ValueError("documento urgente só pode ir para fila prioritária ou emergência")
        if self.destino is Destino.FILA_EMERGENCIA_MEDICA and not self.urgente:
            raise ValueError("fila de emergência exige documento sinalizado como urgente")
        # Única exceção documentada: conteúdo ilegível originado no Pronto-Socorro.
        if (
            self.destino is Destino.FILA_REVISAO_HUMANA_PRIORITARIA
            and not self.urgente
            and self.codigo_motivo is not MotivoRoteamento.CONTEUDO_ILEGIVEL_PRONTO_SOCORRO
        ):
            raise ValueError("fila prioritária sem urgência exige motivo de ilegível no PS")

        if self.destino is Destino.FILA_EMERGENCIA_MEDICA and self.notificacao_gerada is None:
            raise ValueError("encaminhamento à emergência exige o evento de alerta")
        if self.notificacao_gerada is not None and not self.urgente:
            raise ValueError("alerta só pode ser gerado para documento urgente")

        if (self.codigo_motivo is MotivoRoteamento.APROVACAO_HUMANA) != (
            self.status_revisao is StatusRevisao.APROVADA
        ):
            raise ValueError("motivo de aprovação humana e status da revisão são inconsistentes")
        if (self.codigo_motivo is MotivoRoteamento.REJEICAO_HUMANA) != (
            self.status_revisao is StatusRevisao.REJEITADA
        ):
            raise ValueError("motivo de rejeição humana e status da revisão são inconsistentes")

        permitidos = DESTINOS_POR_MOTIVO.get(self.codigo_motivo)
        if permitidos is not None and self.destino not in permitidos:
            raise ValueError(f"destino incompatível com o motivo {self.codigo_motivo.value}")
        return self

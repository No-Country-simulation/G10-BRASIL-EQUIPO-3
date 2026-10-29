"""Transições permitidas do status de processamento.

Reprocessamento por IA e reroteamento (`/reroute`) são ações explícitas, definidas na Fase 4;
por isso não há transições de saída a partir de estados finais neste núcleo.
"""

from __future__ import annotations

from types import MappingProxyType
from typing import Final

from app.schemas.enums import StatusProcessamento as S

TRANSICOES_PERMITIDAS: Final = MappingProxyType(
    {
        S.RECEBIDO: frozenset({S.PROCESSANDO, S.ERRO}),
        S.PROCESSANDO: frozenset({S.PROCESSADO, S.EM_AUDITORIA, S.ERRO}),
        S.PROCESSADO: frozenset(),
        S.EM_AUDITORIA: frozenset({S.APROVADO_AUDITORIA, S.REJEITADO}),
        S.APROVADO_AUDITORIA: frozenset(),
        S.REJEITADO: frozenset(),
        S.ERRO: frozenset(),
    }
)


def transicao_permitida(origem: S, destino: S) -> bool:
    return destino in TRANSICOES_PERMITIDAS[origem]

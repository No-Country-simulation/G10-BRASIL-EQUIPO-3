"""Rotas condicionais do workflow; erro técnico encerra o caminho clínico."""

from __future__ import annotations

from typing import Literal

from app.graph.state import MediFlowState


def apos_etapa_ou_erro(state: MediFlowState) -> Literal["erro", "continuar"]:
    return "erro" if state.get("erro") is not None else "continuar"


def resultado_ou_erro(state: MediFlowState) -> Literal["erro", "decidir"]:
    return "erro" if state.get("erro") is not None else "decidir"

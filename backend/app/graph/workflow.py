"""Construção e execução do workflow LangGraph de triagem."""

from __future__ import annotations

from langgraph.graph import END, START, StateGraph

from app.core.config import Settings
from app.graph.conditions import apos_etapa_ou_erro
from app.graph.nodes import construir_nos
from app.graph.state import MediFlowState
from app.providers import LLMProvider, criar_provedor


def criar_grafo(
    configuracao: Settings | None = None,
    provedor: LLMProvider | None = None,
):
    """Compila o grafo com provedor/configuração injetáveis para execução e testes offline."""
    config = configuracao or Settings()
    llm = provedor or criar_provedor(config)
    nos = construir_nos(llm, config)

    grafo = StateGraph(MediFlowState)
    for nome, funcao in nos.items():
        grafo.add_node(nome, funcao)

    grafo.add_edge(START, "normalizar_documento")
    grafo.add_conditional_edges(
        "normalizar_documento",
        apos_etapa_ou_erro,
        {"erro": "finalizar_resposta", "continuar": "classificar_documento"},
    )
    grafo.add_conditional_edges(
        "classificar_documento",
        apos_etapa_ou_erro,
        {"erro": "finalizar_resposta", "continuar": "extrair_dados"},
    )
    grafo.add_conditional_edges(
        "extrair_dados",
        apos_etapa_ou_erro,
        {"erro": "finalizar_resposta", "continuar": "validar_dados"},
    )
    grafo.add_edge("validar_dados", "calcular_confianca")
    grafo.add_edge("calcular_confianca", "avaliar_urgencia")
    grafo.add_edge("avaliar_urgencia", "decidir_roteamento")
    grafo.add_edge("decidir_roteamento", "finalizar_resposta")
    grafo.add_edge("finalizar_resposta", END)
    return grafo.compile()

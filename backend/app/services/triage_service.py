"""Entrada de serviço para executar o grafo sobre um documento recebido."""

from __future__ import annotations

from app.core.config import Settings
from app.graph.workflow import criar_grafo
from app.providers import LLMProvider
from app.schemas.input import DocumentoRecebido
from app.schemas.output import RespostaTriagem


class TriageService:
    def __init__(
        self,
        configuracao: Settings | None = None,
        provedor: LLMProvider | None = None,
    ) -> None:
        self._grafo = criar_grafo(configuracao, provedor)

    def processar(self, documento: DocumentoRecebido) -> RespostaTriagem:
        estado = self._grafo.invoke({"documento": documento})
        return estado["resposta"]


def processar_documento(
    documento: DocumentoRecebido,
    configuracao: Settings | None = None,
    provedor: LLMProvider | None = None,
) -> RespostaTriagem:
    """Atalho stateless; para múltiplos documentos, reutilize `TriageService`."""
    return TriageService(configuracao, provedor).processar(documento)

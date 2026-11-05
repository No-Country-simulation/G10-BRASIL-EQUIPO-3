"""Contrato comum dos provedores de classificação e extração."""

from __future__ import annotations

from abc import ABC, abstractmethod

from app.ingestion.base import DocumentoNormalizado
from app.schemas.classification import ClassificacaoDocumento
from app.schemas.enums import CodigoErro
from app.schemas.extraction import DadosExtraidos
from app.schemas.output import OrigemAnalise


class ErroProvedor(Exception):
    """Falha segura de provedor, sem incluir texto clínico ou credenciais na mensagem."""

    def __init__(self, codigo: CodigoErro, descricao: str) -> None:
        self.codigo = codigo
        self.descricao = descricao
        super().__init__(descricao)


class LLMProvider(ABC):
    """Interface síncrona; regras de urgência e roteamento ficam fora do provedor."""

    @property
    @abstractmethod
    def origem_analise(self) -> OrigemAnalise:
        """Metadados que identificam a origem dos resultados."""

    @abstractmethod
    def classificar(self, documento: DocumentoNormalizado) -> ClassificacaoDocumento:
        """Classifica categoria e sinais de possível urgência."""

    @abstractmethod
    def extrair(
        self, documento: DocumentoNormalizado, classificacao: ClassificacaoDocumento
    ) -> DadosExtraidos:
        """Extrai dados, representando ausência e ilegibilidade sem inventar valores."""

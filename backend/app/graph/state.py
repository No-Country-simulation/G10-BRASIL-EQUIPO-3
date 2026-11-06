"""Estado tipado compartilhado entre os nós do grafo de triagem."""

from __future__ import annotations

from typing import TypedDict

from app.ingestion.base import DocumentoNormalizado
from app.schemas.classification import ClassificacaoDocumento
from app.schemas.extraction import DadosExtraidos
from app.schemas.input import DocumentoRecebido
from app.schemas.output import DecisaoRoteamento, ErroProcessamento, OrigemAnalise, RespostaTriagem
from app.schemas.validation import AchadoValidacao


class MediFlowState(TypedDict, total=False):
    documento: DocumentoRecebido
    documento_normalizado: DocumentoNormalizado
    classificacao: ClassificacaoDocumento
    dados_extraidos: DadosExtraidos
    validacoes: list[AchadoValidacao]
    decisao_roteamento: DecisaoRoteamento
    origem_analise: OrigemAnalise
    erro: ErroProcessamento
    etapa: str
    resposta: RespostaTriagem

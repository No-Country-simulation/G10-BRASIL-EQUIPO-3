"""Contratos Pydantic do MediFlow (fonte de verdade para API, grafo, serviços e persistência)."""

from app.schemas.classification import ClassificacaoDocumento, SinalUrgencia
from app.schemas.events import NotificacaoAlerta
from app.schemas.extraction import DadosExtraidos
from app.schemas.input import DocumentoRecebido, EntradaTriagem
from app.schemas.output import ErroProcessamento, OrigemAnalise, RespostaTriagem
from app.schemas.review import RegistroRevisao, RequisicaoRevisao
from app.schemas.routing import DecisaoRoteamento
from app.schemas.storage import ArmazenamentoOCI
from app.schemas.validation import AchadoValidacao

__all__ = [
    "AchadoValidacao",
    "ArmazenamentoOCI",
    "ClassificacaoDocumento",
    "DadosExtraidos",
    "DecisaoRoteamento",
    "DocumentoRecebido",
    "EntradaTriagem",
    "ErroProcessamento",
    "NotificacaoAlerta",
    "OrigemAnalise",
    "RegistroRevisao",
    "RequisicaoRevisao",
    "RespostaTriagem",
    "SinalUrgencia",
]

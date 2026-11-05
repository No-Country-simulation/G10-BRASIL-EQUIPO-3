"""Provedor determinístico de teste; não interpreta documentos nem simula avaliação clínica."""

from app.ingestion.base import DocumentoNormalizado
from app.providers.base import LLMProvider
from app.schemas.classification import ClassificacaoDocumento
from app.schemas.enums import Prioridade, TipoDocumento
from app.schemas.extraction import DadosExtraidos
from app.schemas.output import OrigemAnalise


class MockLLMProvider(LLMProvider):
    """Retorna valores sintéticos configuráveis e sempre identificados como dados de teste."""

    def __init__(
        self,
        classificacao: ClassificacaoDocumento | None = None,
        dados_extraidos: DadosExtraidos | None = None,
    ) -> None:
        self._classificacao = classificacao or ClassificacaoDocumento(
            tipo_documento=TipoDocumento.INDETERMINADO,
            prioridade=Prioridade.ROTINA,
            urgente=False,
            score_confianca_classificacao=0.0,
        )
        self._dados_extraidos = dados_extraidos or DadosExtraidos()

    @property
    def origem_analise(self) -> OrigemAnalise:
        return OrigemAnalise(provedor="mock", modelo=None, dados_de_teste=True)

    def classificar(self, documento: DocumentoNormalizado) -> ClassificacaoDocumento:
        del documento  # conteúdo não é lido nem interpretado pelo mock
        return self._classificacao.model_copy(deep=True)

    def extrair(
        self, documento: DocumentoNormalizado, classificacao: ClassificacaoDocumento
    ) -> DadosExtraidos:
        del documento, classificacao
        return self._dados_extraidos.model_copy(deep=True)

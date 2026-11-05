"""Envelope da resposta de triagem (também usado como conteúdo persistido do resultado)."""

from __future__ import annotations

from typing import Self

from pydantic import AwareDatetime, Field, model_validator

from app.schemas.base import ModeloContrato, Score
from app.schemas.classification import ClassificacaoDocumento
from app.schemas.enums import (
    STATUS_COM_DECISAO,
    CanalOrigem,
    CodigoErro,
    DecisaoRevisao,
    StatusProcessamento,
    StatusRevisao,
)
from app.schemas.extraction import DadosExtraidos
from app.schemas.input import DocumentoId
from app.schemas.review import RegistroRevisao
from app.schemas.routing import DecisaoRoteamento
from app.schemas.storage import ArmazenamentoOCI
from app.schemas.validation import AchadoValidacao

_STATUS_REVISAO_ESPERADO = {
    StatusProcessamento.PROCESSADO: StatusRevisao.NAO_NECESSARIA,
    StatusProcessamento.EM_AUDITORIA: StatusRevisao.PENDENTE,
    StatusProcessamento.APROVADO_AUDITORIA: StatusRevisao.APROVADA,
    StatusProcessamento.REJEITADO: StatusRevisao.REJEITADA,
}


class ErroProcessamento(ModeloContrato):
    """Falha TÉCNICA (não é baixa confiança nem ambiguidade). Sem dados clínicos na descrição."""

    codigo: CodigoErro
    descricao: str = Field(min_length=1, max_length=500)
    etapa: str | None = Field(default=None, min_length=1, max_length=100)
    ocorrido_em: AwareDatetime


class OrigemAnalise(ModeloContrato):
    """Quem produziu a análise. `provedor = "mock"` indica dados de teste, não avaliação clínica."""

    provedor: str = Field(min_length=1, max_length=50)
    modelo: str | None = Field(default=None, min_length=1, max_length=100)
    dados_de_teste: bool

    @model_validator(mode="after")
    def _mock_e_teste(self) -> Self:
        if self.provedor == "mock" and not self.dados_de_teste:
            raise ValueError("resultados do provedor simulado devem ser dados de teste")
        return self


class RespostaTriagem(ModeloContrato):
    documento_id: DocumentoId
    status: StatusProcessamento
    versao_resultado: int = Field(default=1, ge=1)
    canal_origem: CanalOrigem | None = None
    classificacao: ClassificacaoDocumento | None = None
    dados_extraidos: DadosExtraidos | None = None
    # Derivado de `dados_extraidos` (fonte única); se informado, precisa coincidir.
    scores_por_campo: dict[str, Score] | None = None
    validacoes: list[AchadoValidacao] = Field(default_factory=list, max_length=200)
    decisao_roteamento: DecisaoRoteamento | None = None
    # Ausente no snapshot gravado: só é preenchido após a confirmação da gravação.
    armazenamento_oci: ArmazenamentoOCI | None = None
    historico_revisao: list[RegistroRevisao] = Field(default_factory=list, max_length=500)
    erro: ErroProcessamento | None = None
    origem_analise: OrigemAnalise | None = None

    @model_validator(mode="after")
    def _scores_derivados(self) -> Self:
        if self.dados_extraidos is None:
            if self.scores_por_campo:
                raise ValueError("scores_por_campo exige dados_extraidos")
            return self
        derivados = self.dados_extraidos.scores_por_campo()
        if self.scores_por_campo is not None and self.scores_por_campo != derivados:
            raise ValueError("scores_por_campo diverge dos scores dos campos extraídos")
        self.scores_por_campo = derivados
        return self

    @model_validator(mode="after")
    def _estado_coerente(self) -> Self:
        if self.status is StatusProcessamento.ERRO:
            self._validar_erro()
        elif self.erro is not None:
            raise ValueError("`erro` só é permitido com status erro")

        em_andamento = self.status in {
            StatusProcessamento.RECEBIDO,
            StatusProcessamento.PROCESSANDO,
        }
        if em_andamento and (self.decisao_roteamento is not None or self.historico_revisao):
            raise ValueError("documento ainda em processamento não tem decisão nem revisão")

        if self.status in STATUS_COM_DECISAO:
            self._validar_com_decisao()

        nao_persistido = (
            self.armazenamento_oci is not None and not self.armazenamento_oci.persistido
        )
        if nao_persistido and self.status in STATUS_COM_DECISAO:
            raise ValueError("estado de sucesso não pode acompanhar persistência não confirmada")
        return self

    def _validar_erro(self) -> None:
        if self.erro is None:
            raise ValueError("status erro exige o registro da falha em `erro`")
        if (
            self.classificacao is not None
            or self.dados_extraidos is not None
            or self.decisao_roteamento is not None
            or self.validacoes
        ):
            raise ValueError("falha técnica não produz resultado clínico nem destino")

    def _validar_com_decisao(self) -> None:
        if (
            self.classificacao is None
            or self.dados_extraidos is None
            or self.decisao_roteamento is None
        ):
            raise ValueError(f"status {self.status.value} exige classificação, dados e decisão")
        decisao = self.decisao_roteamento
        if decisao.status_revisao is not _STATUS_REVISAO_ESPERADO[self.status]:
            raise ValueError("status do processamento e status da revisão são inconsistentes")
        if decisao.urgente != self.classificacao.urgente:
            raise ValueError("urgência da classificação e da decisão são inconsistentes")
        alerta = decisao.notificacao_gerada
        if alerta is not None and alerta.documento_id != self.documento_id:
            raise ValueError("alerta pertence a outro documento")
        if any(r.documento_id != self.documento_id for r in self.historico_revisao):
            raise ValueError("histórico de revisão contém registro de outro documento")
        if self.status in {StatusProcessamento.APROVADO_AUDITORIA, StatusProcessamento.REJEITADO}:
            if not self.historico_revisao:
                raise ValueError("aprovação ou rejeição exige registro no histórico de revisão")
            ultimo = self.historico_revisao[-1]
            esperado = (
                DecisaoRevisao.APROVAR
                if self.status is StatusProcessamento.APROVADO_AUDITORIA
                else DecisaoRevisao.REJEITAR
            )
            if ultimo.decisao is not esperado:
                raise ValueError("a última revisão não corresponde ao status")
            if ultimo.versao_resultado_revisado != self.versao_resultado:
                raise ValueError("versão do resultado diverge da versão revisada no histórico")

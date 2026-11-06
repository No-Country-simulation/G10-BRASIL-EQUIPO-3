"""Roteamento determinístico, alerta urgente e transição após aprovação humana."""

from __future__ import annotations

from datetime import UTC, datetime

from app.rules.confidence import classificacao_confiavel, normalizar_texto_evidencia
from app.rules.consistency import conteudo_obrigatorio_ilegivel
from app.rules.policy import politica_para
from app.rules.urgency import urgencia_confiavel
from app.schemas.classification import ClassificacaoDocumento
from app.schemas.enums import (
    DESTINOS_FILA_REVISAO,
    CanalNotificacao,
    CanalOrigem,
    CodigoValidacao,
    Destino,
    GravidadeValidacao,
    MotivoRoteamento,
    StatusRevisao,
    TipoDocumento,
)
from app.schemas.events import NotificacaoAlerta
from app.schemas.extraction import DadosExtraidos
from app.schemas.input import DocumentoId
from app.schemas.output import DecisaoRoteamento
from app.schemas.validation import AchadoValidacao


def achados_medicamentos_alto_risco(
    dados: DadosExtraidos, medicamentos_alto_risco: list[str]
) -> list[AchadoValidacao]:
    lista = {normalizar_texto_evidencia(item) for item in medicamentos_alto_risco if item.strip()}
    if not lista:
        return []
    achados: list[AchadoValidacao] = []
    for indice, medicamento in enumerate(dados.medicamentos):
        nome = medicamento.nome.valor
        if isinstance(nome, str) and normalizar_texto_evidencia(nome) in lista:
            achados.append(
                AchadoValidacao(
                    codigo=CodigoValidacao.MEDICAMENTO_ALTO_RISCO,
                    descricao="A receita contém um medicamento configurado para revisão humana.",
                    gravidade=GravidadeValidacao.ALTA,
                    campos_afetados=[f"medicamentos[{indice}].nome"],
                    evidencia=nome,
                    acao_sugerida="Encaminhar a receita para conferência humana.",
                )
            )
    return achados


def _notificacao_urgente(
    documento_id: str, classificacao: ClassificacaoDocumento
) -> NotificacaoAlerta:
    evidencias = [
        sinal.evidencia for sinal in classificacao.sinais_urgencia if sinal.evidencia is not None
    ][:20]
    descricoes = [sinal.descricao for sinal in classificacao.sinais_urgencia][:3]
    detalhe = "; ".join(descricoes) or "sinalização urgente registrada"
    return NotificacaoAlerta(
        canal=CanalNotificacao.ALERTA_PLANTAO_MEDICO,
        mensagem=f"ALERTA DE TRIAGEM: documento com possível urgência; {detalhe}.",
        gerada_em=datetime.now(UTC),
        documento_id=documento_id,
        evidencias=evidencias,
    )


def _decisao(
    *,
    destino: Destino,
    classificacao: ClassificacaoDocumento,
    motivo: MotivoRoteamento,
    justificativa: str,
    status_revisao: StatusRevisao,
    documento_id: str,
    notificacao: NotificacaoAlerta | None = None,
) -> DecisaoRoteamento:
    return DecisaoRoteamento(
        destino=destino,
        prioridade=classificacao.prioridade,
        urgente=classificacao.urgente,
        requer_auditoria_humana=status_revisao is StatusRevisao.PENDENTE,
        motivo=justificativa,
        codigo_motivo=motivo,
        justificativa_roteamento=justificativa,
        status_revisao=status_revisao,
        notificacao_gerada=notificacao,
    )


def decidir_roteamento(
    *,
    documento_id: DocumentoId,
    canal_origem: CanalOrigem,
    classificacao: ClassificacaoDocumento,
    dados: DadosExtraidos,
    validacoes: list[AchadoValidacao],
    texto_documento: str | None,
    limiar_confianca: float,
) -> DecisaoRoteamento:
    """Aplica a ordem de decisão clínica definida no plano; não usa inferências probabilísticas."""
    ilegivel = conteudo_obrigatorio_ilegivel(classificacao.tipo_documento, dados)
    if ilegivel:
        prioritario = classificacao.urgente or canal_origem is CanalOrigem.PRONTO_SOCORRO
        destino = (
            Destino.FILA_REVISAO_HUMANA_PRIORITARIA if prioritario else Destino.FILA_REVISAO_HUMANA
        )
        if classificacao.urgente:
            codigo = MotivoRoteamento.URGENCIA_DADO_CRITICO_INSUFICIENTE
            texto = "Conteúdo obrigatório ilegível e possível urgência: revisão humana prioritária."
        elif canal_origem is CanalOrigem.PRONTO_SOCORRO:
            codigo = MotivoRoteamento.CONTEUDO_ILEGIVEL_PRONTO_SOCORRO
            texto = "Conteúdo obrigatório ilegível recebido no Pronto-Socorro."
        else:
            codigo = MotivoRoteamento.CONTEUDO_ILEGIVEL
            texto = "Conteúdo obrigatório ilegível; revisão humana necessária."
        return _decisao(
            destino=destino,
            classificacao=classificacao,
            motivo=codigo,
            justificativa=texto,
            status_revisao=StatusRevisao.PENDENTE,
            documento_id=documento_id,
        )

    if classificacao.urgente:
        if urgencia_confiavel(classificacao, dados, texto_documento, limiar_confianca):
            return _decisao(
                destino=Destino.FILA_EMERGENCIA_MEDICA,
                classificacao=classificacao,
                motivo=MotivoRoteamento.URGENCIA_CONFIAVEL,
                justificativa=(
                    "Possível urgência com confiança de classificação, identificação do paciente "
                    "e evidência verificável acima do limiar."
                ),
                status_revisao=StatusRevisao.NAO_NECESSARIA,
                documento_id=documento_id,
                notificacao=_notificacao_urgente(documento_id, classificacao),
            )
        return _decisao(
            destino=Destino.FILA_REVISAO_HUMANA_PRIORITARIA,
            classificacao=classificacao,
            motivo=MotivoRoteamento.URGENCIA_DADO_CRITICO_INSUFICIENTE,
            justificativa=(
                "Possível urgência sem confiança suficiente nos dados críticos; "
                "prioridade preservada para revisão humana."
            ),
            status_revisao=StatusRevisao.PENDENTE,
            documento_id=documento_id,
        )

    if classificacao.tipo_documento in {TipoDocumento.OUTRO, TipoDocumento.INDETERMINADO}:
        return _decisao(
            destino=Destino.FILA_REVISAO_HUMANA,
            classificacao=classificacao,
            motivo=MotivoRoteamento.CATEGORIA_SEM_ROTEAMENTO_AUTOMATICO,
            justificativa="A categoria documental exige revisão humana.",
            status_revisao=StatusRevisao.PENDENTE,
            documento_id=documento_id,
        )

    medicamento_alto_risco = any(
        achado.codigo is CodigoValidacao.MEDICAMENTO_ALTO_RISCO for achado in validacoes
    )
    if medicamento_alto_risco:
        return _decisao(
            destino=Destino.FILA_REVISAO_HUMANA,
            classificacao=classificacao,
            motivo=MotivoRoteamento.MEDICAMENTO_ALTO_RISCO,
            justificativa="Medicamento configurado como alto risco exige revisão humana.",
            status_revisao=StatusRevisao.PENDENTE,
            documento_id=documento_id,
        )

    if not classificacao_confiavel(classificacao, limiar_confianca):
        return _decisao(
            destino=Destino.FILA_REVISAO_HUMANA,
            classificacao=classificacao,
            motivo=MotivoRoteamento.BAIXA_CONFIANCA_CAMPO_OBRIGATORIO,
            justificativa="Confiança da classificação abaixo do limiar configurado.",
            status_revisao=StatusRevisao.PENDENTE,
            documento_id=documento_id,
        )

    if validacoes:
        codigo = (
            MotivoRoteamento.BAIXA_CONFIANCA_CAMPO_OBRIGATORIO
            if any(achado.codigo is CodigoValidacao.BAIXA_CONFIANCA for achado in validacoes)
            else MotivoRoteamento.CAMPO_OBRIGATORIO_AUSENTE
        )
        return _decisao(
            destino=Destino.FILA_REVISAO_HUMANA,
            classificacao=classificacao,
            motivo=codigo,
            justificativa="Há achados de validação que exigem conferência humana.",
            status_revisao=StatusRevisao.PENDENTE,
            documento_id=documento_id,
        )

    destino = politica_para(classificacao.tipo_documento).destino_automatico
    if destino is None:
        destino = Destino.FILA_REVISAO_HUMANA
        codigo = MotivoRoteamento.CATEGORIA_SEM_ROTEAMENTO_AUTOMATICO
        texto = "A categoria documental exige revisão humana."
        status = StatusRevisao.PENDENTE
    else:
        codigo = MotivoRoteamento.CRITERIOS_ATENDIDOS
        texto = "Classificação e campos obrigatórios confiáveis; critérios de roteamento atendidos."
        status = StatusRevisao.NAO_NECESSARIA
    return _decisao(
        destino=destino,
        classificacao=classificacao,
        motivo=codigo,
        justificativa=texto,
        status_revisao=status,
        documento_id=documento_id,
    )


def decidir_apos_aprovacao(
    *,
    documento_id: DocumentoId,
    classificacao: ClassificacaoDocumento,
) -> DecisaoRoteamento:
    """Aplica a regra pós-aprovação sem chamar novamente a IA."""
    if classificacao.urgente:
        return _decisao(
            destino=Destino.FILA_EMERGENCIA_MEDICA,
            classificacao=classificacao,
            motivo=MotivoRoteamento.APROVACAO_HUMANA,
            justificativa=(
                "Documento urgente aprovado por revisor humano; encaminhado à emergência."
            ),
            status_revisao=StatusRevisao.APROVADA,
            documento_id=documento_id,
            notificacao=_notificacao_urgente(documento_id, classificacao),
        )
    destino = politica_para(classificacao.tipo_documento).destino_automatico
    return _decisao(
        destino=destino or Destino.FILA_REVISAO_HUMANA,
        classificacao=classificacao,
        motivo=MotivoRoteamento.APROVACAO_HUMANA,
        justificativa=(
            "Documento aprovado por revisor humano; "
            + (
                "categoria sem roteamento automático, permanece na fila humana."
                if destino is None
                else "encaminhado ao destino determinístico da categoria."
            )
        ),
        status_revisao=StatusRevisao.APROVADA,
        documento_id=documento_id,
    )


def decidir_apos_rejeicao(
    *,
    documento_id: DocumentoId,
    classificacao: ClassificacaoDocumento,
    destino_atual: Destino,
) -> DecisaoRoteamento:
    if destino_atual not in DESTINOS_FILA_REVISAO:
        raise ValueError("somente documentos na fila humana podem ser rejeitados")
    return _decisao(
        destino=destino_atual,
        classificacao=classificacao,
        motivo=MotivoRoteamento.REJEICAO_HUMANA,
        justificativa="Documento rejeitado pelo revisor humano.",
        status_revisao=StatusRevisao.REJEITADA,
        documento_id=documento_id,
    )

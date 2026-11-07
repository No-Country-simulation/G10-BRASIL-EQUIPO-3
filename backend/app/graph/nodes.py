"""Implementação dos nós determinísticos e de integração com o provedor de IA."""

from __future__ import annotations

import logging
from collections.abc import Callable
from datetime import UTC, datetime
from typing import Any

from app.core.config import Settings
from app.graph.state import MediFlowState
from app.ingestion import ErroIngestao, ingerir_documento
from app.providers import ErroProvedor, LLMProvider
from app.rules.confidence import calcular_confianca_extracao
from app.rules.consistency import validar_resultado
from app.rules.routing import achados_medicamentos_alto_risco, decidir_roteamento
from app.rules.urgency import aplicar_regras_urgencia
from app.schemas.enums import CodigoErro, StatusProcessamento, StatusRevisao
from app.schemas.output import ErroProcessamento, RespostaTriagem

logger = logging.getLogger(__name__)


def _erro_processamento(etapa: str, exc: Exception) -> ErroProcessamento:
    valor_codigo = getattr(exc, "codigo", CodigoErro.ERRO_INTERNO)
    try:
        codigo = CodigoErro(valor_codigo)
    except ValueError:
        codigo = CodigoErro.ERRO_INTERNO
    descricao = getattr(exc, "descricao", "Falha técnica durante o processamento.")
    return ErroProcessamento(
        codigo=codigo,
        descricao=str(descricao)[:500],
        etapa=etapa,
        ocorrido_em=datetime.now(UTC),
    )


def construir_nos(
    provedor: LLMProvider, configuracao: Settings
) -> dict[str, Callable[[MediFlowState], dict[str, Any]]]:
    def normalizar(state: MediFlowState) -> dict[str, Any]:
        etapa = "normalizar_documento"
        try:
            resultado = ingerir_documento(state["documento"], configuracao)
            return {"documento_normalizado": resultado, "etapa": etapa}
        except ErroIngestao as exc:
            return {"erro": _erro_processamento(etapa, exc), "etapa": etapa}
        except Exception as exc:
            logger.exception("Falha inesperada na ingestão (etapa=%s).", etapa)
            return {"erro": _erro_processamento(etapa, exc), "etapa": etapa}

    def classificar(state: MediFlowState) -> dict[str, Any]:
        etapa = "classificar_documento"
        try:
            classificacao = provedor.classificar(state["documento_normalizado"])
            return {
                "classificacao": classificacao,
                "origem_analise": provedor.origem_analise,
                "etapa": etapa,
            }
        except ErroProvedor as exc:
            return {"erro": _erro_processamento(etapa, exc), "etapa": etapa}
        except Exception as exc:
            logger.exception("Falha inesperada na classificação (etapa=%s).", etapa)
            return {"erro": _erro_processamento(etapa, exc), "etapa": etapa}

    def extrair(state: MediFlowState) -> dict[str, Any]:
        etapa = "extrair_dados"
        try:
            dados = provedor.extrair(state["documento_normalizado"], state["classificacao"])
            return {"dados_extraidos": dados, "etapa": etapa}
        except ErroProvedor as exc:
            return {"erro": _erro_processamento(etapa, exc), "etapa": etapa}
        except Exception as exc:
            logger.exception("Falha inesperada na extração (etapa=%s).", etapa)
            return {"erro": _erro_processamento(etapa, exc), "etapa": etapa}

    def validar(state: MediFlowState) -> dict[str, Any]:
        etapa = "validar_dados"
        classificacao = state["classificacao"]
        dados = state["dados_extraidos"]
        texto = state["documento_normalizado"].texto
        achados = validar_resultado(classificacao, dados, texto, configuracao.confidence_threshold)
        achados.extend(achados_medicamentos_alto_risco(dados, configuracao.high_risk_medications))
        return {"validacoes": achados, "etapa": etapa}

    def calcular_confianca(state: MediFlowState) -> dict[str, Any]:
        return {
            "dados_extraidos": calcular_confianca_extracao(state["dados_extraidos"]),
            "etapa": "calcular_confianca",
        }

    def avaliar_urgencia(state: MediFlowState) -> dict[str, Any]:
        return {
            "classificacao": aplicar_regras_urgencia(
                state["classificacao"],
                state["documento_normalizado"].texto,
                configuracao.urgency_terms,
            ),
            "etapa": "avaliar_urgencia",
        }

    def rotear(state: MediFlowState) -> dict[str, Any]:
        documento = state["documento"]
        decisao = decidir_roteamento(
            documento_id=documento.documento_id,
            canal_origem=documento.canal_origem,
            classificacao=state["classificacao"],
            dados=state["dados_extraidos"],
            validacoes=state.get("validacoes", []),
            texto_documento=state["documento_normalizado"].texto,
            limiar_confianca=configuracao.confidence_threshold,
        )
        return {"decisao_roteamento": decisao, "etapa": "decidir_roteamento"}

    def finalizar(state: MediFlowState) -> dict[str, Any]:
        documento = state["documento"]
        erro = state.get("erro")
        if erro is not None:
            resposta = RespostaTriagem(
                documento_id=documento.documento_id,
                canal_origem=documento.canal_origem,
                status=StatusProcessamento.ERRO,
                erro=erro,
                origem_analise=state.get("origem_analise"),
            )
        else:
            classificacao = state["classificacao"]
            dados = state["dados_extraidos"]
            decisao = state["decisao_roteamento"]
            status = (
                StatusProcessamento.EM_AUDITORIA
                if decisao.status_revisao is StatusRevisao.PENDENTE
                else StatusProcessamento.PROCESSADO
            )
            resposta = RespostaTriagem(
                documento_id=documento.documento_id,
                canal_origem=documento.canal_origem,
                status=status,
                classificacao=classificacao,
                dados_extraidos=dados,
                validacoes=state.get("validacoes", []),
                decisao_roteamento=decisao,
                origem_analise=state.get("origem_analise"),
            )
        return {"resposta": resposta, "etapa": "finalizar_resposta"}

    return {
        "normalizar_documento": normalizar,
        "classificar_documento": classificar,
        "extrair_dados": extrair,
        "validar_dados": validar,
        "calcular_confianca": calcular_confianca,
        "avaliar_urgencia": avaliar_urgencia,
        "decidir_roteamento": rotear,
        "finalizar_resposta": finalizar,
    }

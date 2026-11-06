"""Sinais determinísticos de urgência e evidências para roteamento seguro."""

from __future__ import annotations

import re
import unicodedata

from app.rules.confidence import campo_confiavel, evidencia_verificavel
from app.schemas.classification import ClassificacaoDocumento, SinalUrgencia
from app.schemas.enums import OrigemSinal, Prioridade
from app.schemas.extraction import DadosExtraidos

_NEGACOES_EXPLICITAS = re.compile(
    r"\b(?:sem(?: sinais| evidencia| evidencias)?(?: de)?|ausencia de|nega|negado|negada|"
    r"negativo para|descartado|descartada|excluido|excluida)\b"
)


def _normalizar_com_mapa(texto: str) -> tuple[str, list[int]]:
    normalizado: list[str] = []
    mapa: list[int] = []
    for indice, caractere in enumerate(texto.casefold()):
        decomposicao = unicodedata.normalize("NFD", caractere)
        for resultado in decomposicao:
            if not unicodedata.combining(resultado):
                normalizado.append(resultado)
                mapa.append(indice)
    return "".join(normalizado), mapa


def _evidencias_termo(texto: str, termo: str) -> list[str]:
    fonte_normalizada, mapa = _normalizar_com_mapa(texto)
    termo_normalizado, _ = _normalizar_com_mapa(termo.strip())
    if not termo_normalizado:
        return []
    evidencias: list[str] = []
    inicio = 0
    while (posicao := fonte_normalizada.find(termo_normalizado, inicio)) >= 0:
        fim = posicao + len(termo_normalizado)
        esquerda = mapa[posicao]
        direita = mapa[fim - 1] + 1
        clausula = (
            texto[:esquerda]
            .rsplit(".", 1)[-1]
            .rsplit(";", 1)[-1]
            .rsplit(",", 1)[-1]
            .rsplit(":", 1)[-1]
            .rsplit("\n", 1)[-1]
        )
        contexto = _normalizar_com_mapa(clausula[-80:])[0]
        nao_descarta = re.search(r"\bnao\s+(?:descarta|exclui|afasta)\b", contexto)
        if not _NEGACOES_EXPLICITAS.search(contexto) or nao_descarta:
            evidencias.append(texto[esquerda:direita].strip())
        inicio = fim
    return evidencias


def aplicar_regras_urgencia(
    classificacao: ClassificacaoDocumento,
    texto_documento: str | None,
    termos_urgencia: list[str],
) -> ClassificacaoDocumento:
    """Acrescenta sinais apenas quando um termo configurado aparece sem negação explícita."""
    if not texto_documento:
        return classificacao
    sinais = list(classificacao.sinais_urgencia)
    evidencias_existentes = {
        sinal.evidencia.casefold() for sinal in sinais if sinal.evidencia is not None
    }
    for termo in sorted(termos_urgencia, key=len, reverse=True):
        for evidencia in _evidencias_termo(texto_documento, termo):
            if evidencia.casefold() in evidencias_existentes:
                continue
            sinais.append(
                SinalUrgencia(
                    origem=OrigemSinal.REGRA,
                    descricao=f"Termo de urgência configurado encontrado: {termo}.",
                    evidencia=evidencia,
                )
            )
            evidencias_existentes.add(evidencia.casefold())
            if len(sinais) == 20:
                break
        if len(sinais) == 20:
            break
    urgente = classificacao.urgente or any(sinal.origem is OrigemSinal.REGRA for sinal in sinais)
    if urgente == classificacao.urgente and sinais == classificacao.sinais_urgencia:
        return classificacao
    return ClassificacaoDocumento.model_validate(
        classificacao.model_dump()
        | {
            "urgente": urgente,
            "prioridade": Prioridade.URGENTE if urgente else Prioridade.ROTINA,
            "sinais_urgencia": [sinal.model_dump() for sinal in sinais],
        }
    )


def urgencia_confiavel(
    classificacao: ClassificacaoDocumento,
    dados: DadosExtraidos,
    texto_documento: str | None,
    limiar: float,
) -> bool:
    """Reúne limiar da classificação, paciente crítico e evidência verificável do sinal."""
    paciente_confiavel = campo_confiavel(dados.paciente.nome, texto_documento, limiar)
    evidencia_sinal = any(
        evidencia_verificavel(sinal.evidencia, texto_documento)
        for sinal in classificacao.sinais_urgencia
    )
    return (
        classificacao.urgente
        and classificacao.score_confianca_classificacao >= limiar
        and paciente_confiavel
        and evidencia_sinal
    )

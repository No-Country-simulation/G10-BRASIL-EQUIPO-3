"""Serviço em memória para aprovação/rejeição auditável sem nova chamada à IA."""

from __future__ import annotations

import re
from datetime import UTC, datetime
from typing import Any

from pydantic import ValidationError

from app.rules.routing import decidir_apos_aprovacao, decidir_apos_rejeicao
from app.rules.status import transicao_permitida
from app.schemas.enums import DecisaoRevisao, StatusProcessamento
from app.schemas.extraction import DadosExtraidos, padrao_da_chave
from app.schemas.output import RespostaTriagem
from app.schemas.review import CorrecaoCampo, RequisicaoRevisao

_PARTE_CAMPO = re.compile(r"^([a-z0-9_]+)(?:\[(\d+)\])?$")


def _campo_para_correcao(dados: DadosExtraidos, caminho: str) -> tuple[Any, str, Any]:
    partes = caminho.split(".")
    objeto: Any = dados
    for parte in partes[:-1]:
        correspondencia = _PARTE_CAMPO.fullmatch(parte)
        if correspondencia is None:
            raise ValueError(f"caminho de correção inválido: {caminho}")
        atributo, indice = correspondencia.groups()
        valor = getattr(objeto, atributo, None)
        if indice is not None:
            if not isinstance(valor, list) or int(indice) >= len(valor):
                raise ValueError(f"campo de correção inexistente: {caminho}")
            valor = valor[int(indice)]
        if valor is None:
            raise ValueError(f"campo de correção inexistente: {caminho}")
        objeto = valor

    final = _PARTE_CAMPO.fullmatch(partes[-1])
    if final is None:
        raise ValueError(f"caminho de correção inválido: {caminho}")
    atributo, indice = final.groups()
    alvo = getattr(objeto, atributo, None)
    if indice is not None:
        if not isinstance(alvo, list) or int(indice) >= len(alvo):
            raise ValueError(f"campo de correção inexistente: {caminho}")
        alvo = alvo[int(indice)]
        return alvo, "__item__", getattr(objeto, atributo)
    if alvo is None or not hasattr(alvo, "valor"):
        raise ValueError(f"campo de extração não corrigível: {caminho}")
    return objeto, atributo, alvo


def _aplicar_correcao(
    dados: DadosExtraidos, caminho: str, valor_posterior: Any
) -> tuple[DadosExtraidos, CorrecaoCampo]:
    pai, atributo, campo = _campo_para_correcao(dados, caminho)
    if atributo == "__item__":
        raise ValueError(
            "correção precisa apontar para um campo extraído, não para um item inteiro"
        )
    valor_anterior = campo.model_dump(mode="json")["valor"]
    atualizacao = campo.model_dump()
    atualizacao.update(
        {
            "valor": valor_posterior,
            "confianca": None,
            "evidencia": None,
            "situacao": "presente" if valor_posterior is not None else "ausente",
            "revisado_por_humano": True,
        }
    )
    try:
        campo_corrigido = type(campo).model_validate(atualizacao)
    except ValidationError as exc:
        raise ValueError(f"valor incompatível para o campo {caminho}") from exc
    valor_corrigido = campo_corrigido.model_dump(mode="json")["valor"]
    atualizado = pai.model_copy(update={atributo: campo_corrigido})
    if pai is dados:
        dados_atualizados = atualizado
    else:
        # `pai` pode ser um item de lista; ele já é referenciado em `dados`.
        dados_atualizados = dados.model_copy(deep=True)
        pai_clonado, atributo_clonado, _ = _campo_para_correcao(dados_atualizados, caminho)
        setattr(pai_clonado, atributo_clonado, campo_corrigido)
    registro = CorrecaoCampo(
        campo=caminho,
        valor_anterior=valor_anterior,
        valor_posterior=valor_corrigido,
    )
    return dados_atualizados, registro


def registrar_revisao(
    resposta: RespostaTriagem,
    requisicao: RequisicaoRevisao,
) -> RespostaTriagem:
    """Registra revisão com controle otimista de versão e histórico imutável por cópia."""
    if resposta.status is not StatusProcessamento.EM_AUDITORIA:
        raise ValueError("somente resultados em_auditoria podem ser revisados")
    if resposta.decisao_roteamento is None or resposta.classificacao is None:
        raise ValueError("resultado sem decisão ou classificação não pode ser revisado")
    if requisicao.versao_resultado_base != resposta.versao_resultado:
        raise ValueError(
            "versao_resultado_base desatualizada; recarregue o resultado antes de revisar"
        )

    destino_status = (
        StatusProcessamento.APROVADO_AUDITORIA
        if requisicao.decisao is DecisaoRevisao.APROVAR
        else StatusProcessamento.REJEITADO
    )
    if not transicao_permitida(resposta.status, destino_status):
        raise ValueError("transição de revisão não permitida")

    if resposta.dados_extraidos is None:
        raise ValueError("resultado sem dados extraídos não pode ser revisado")
    dados = resposta.dados_extraidos.model_copy(deep=True)
    correcoes: list[CorrecaoCampo] = []
    for correcao in requisicao.correcoes:
        dados, registro_correcao = _aplicar_correcao(
            dados, correcao.campo, correcao.valor_posterior
        )
        correcoes.append(registro_correcao)

    if requisicao.decisao is DecisaoRevisao.APROVAR:
        nova_decisao = decidir_apos_aprovacao(
            documento_id=resposta.documento_id,
            classificacao=resposta.classificacao,
        )
    else:
        nova_decisao = decidir_apos_rejeicao(
            documento_id=resposta.documento_id,
            classificacao=resposta.classificacao,
            destino_atual=resposta.decisao_roteamento.destino,
        )

    chaves_corrigidas = {padrao_da_chave(correcao.campo) for correcao in correcoes}
    validacoes = [
        achado
        for achado in resposta.validacoes
        if not chaves_corrigidas.intersection(
            {padrao_da_chave(chave) for chave in achado.campos_afetados}
        )
    ]
    versao_nova = resposta.versao_resultado + 1
    registro = {
        "documento_id": resposta.documento_id,
        "revisor": requisicao.revisor,
        "identidade_verificada": False,
        "data_hora": datetime.now(UTC),
        "decisao": requisicao.decisao,
        "justificativa": requisicao.justificativa,
        "correcoes": correcoes,
        "versao_resultado_anterior": resposta.versao_resultado,
        "versao_resultado_revisado": versao_nova,
    }
    dados_resposta = resposta.model_dump()
    dados_resposta.update(
        {
            "status": destino_status,
            "versao_resultado": versao_nova,
            "dados_extraidos": dados,
            "scores_por_campo": None,
            "validacoes": validacoes,
            "decisao_roteamento": nova_decisao,
            "historico_revisao": [*resposta.historico_revisao, registro],
        }
    )
    return RespostaTriagem.model_validate(dados_resposta)

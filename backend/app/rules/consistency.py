"""Validações determinísticas de formato e coerência entre campos extraídos."""

from __future__ import annotations

import re

from app.rules.confidence import (
    expandir_chave_obrigatoria,
    validar_campos_obrigatorios,
)
from app.rules.policy import politica_para
from app.schemas.classification import ClassificacaoDocumento
from app.schemas.enums import CodigoValidacao, GravidadeValidacao, SituacaoCampo, TipoDocumento
from app.schemas.extraction import DadosExtraidos
from app.schemas.validation import AchadoValidacao

_PADRAO_CRM = re.compile(r"^\d{4,10}$")
_PADRAO_UF = re.compile(
    r"^(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO)$"
)
_PADRAO_CID10 = re.compile(r"^[A-Z][0-9]{2}(?:\.[A-Z0-9]{1,4})?$", re.IGNORECASE)


def _achado_formato(rotulo: str, chave: str, valor: str, esperado: str) -> AchadoValidacao:
    return AchadoValidacao(
        codigo=CodigoValidacao.FORMATO_INVALIDO,
        descricao=f"O formato do campo '{rotulo}' não corresponde ao padrão esperado ({esperado}).",
        gravidade=GravidadeValidacao.MEDIA,
        campos_afetados=[chave],
        evidencia=valor,
        acao_sugerida="Conferir o conteúdo literal do campo no documento original.",
    )


def validar_formatos(dados: DadosExtraidos) -> list[AchadoValidacao]:
    campos = dados.campos_planos()
    achados: list[AchadoValidacao] = []
    regras = (
        ("medico_solicitante.crm", "CRM", _PADRAO_CRM, "4 a 10 dígitos"),
        ("medico_solicitante.uf_crm", "UF do CRM", _PADRAO_UF, "UF brasileira"),
        ("cid10_documentado", "CID-10 documentado", _PADRAO_CID10, "código CID-10"),
        ("cid10_sugerido", "CID-10 sugerido", _PADRAO_CID10, "código CID-10"),
    )
    for chave, rotulo, padrao, esperado in regras:
        campo = campos[chave]
        valor = campo.valor
        if (
            campo.situacao is SituacaoCampo.PRESENTE
            and isinstance(valor, str)
            and not padrao.fullmatch(valor.strip())
        ):
            achados.append(_achado_formato(rotulo, chave, valor, esperado))
    return achados


def validar_coerencia_temporal(dados: DadosExtraidos) -> list[AchadoValidacao]:
    admissao = dados.datas.admissao.valor
    alta = dados.datas.alta.valor
    if admissao is None or alta is None or alta >= admissao:
        return []
    return [
        AchadoValidacao(
            codigo=CodigoValidacao.CONTRADICAO,
            descricao="A data de alta é anterior à data de admissão.",
            gravidade=GravidadeValidacao.ALTA,
            campos_afetados=["datas.admissao", "datas.alta"],
            evidencia=f"admissão={admissao.isoformat()}, alta={alta.isoformat()}",
            acao_sugerida="Conferir ambas as datas no documento original.",
        )
    ]


def validar_resultado(
    classificacao: ClassificacaoDocumento,
    dados: DadosExtraidos,
    texto_documento: str | None,
    limiar: float,
) -> list[AchadoValidacao]:
    achados = validar_campos_obrigatorios(
        classificacao.tipo_documento, dados, texto_documento, limiar
    )
    achados.extend(validar_formatos(dados))
    achados.extend(validar_coerencia_temporal(dados))
    if classificacao.score_confianca_classificacao < limiar:
        achados.append(
            AchadoValidacao(
                codigo=CodigoValidacao.CLASSIFICACAO_INCERTA,
                descricao="A confiança da classificação está abaixo do limiar configurado.",
                gravidade=GravidadeValidacao.ALTA,
                campos_afetados=["tipo_documento"],
                acao_sugerida="Solicitar revisão humana da categoria documental.",
            )
        )
    return achados


def conteudo_obrigatorio_ilegivel(tipo: TipoDocumento, dados: DadosExtraidos) -> bool:
    """True apenas quando todas as exigências da categoria têm conteúdo explicitamente ilegível."""
    obrigatorios = politica_para(tipo).campos_obrigatorios
    if not obrigatorios:
        return False
    campos = dados.campos_planos()
    for obrigatorio in obrigatorios:
        alternativas = [
            chave
            for padrao in obrigatorio.alternativas
            for chave in expandir_chave_obrigatoria(padrao, dados)
        ]
        if not alternativas or not all(
            campos.get(chave) is not None and campos[chave].situacao is SituacaoCampo.ILEGIVEL
            for chave in alternativas
        ):
            return False
    return True

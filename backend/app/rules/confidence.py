"""Cálculos determinísticos de confiança e validação dos campos obrigatórios."""

from __future__ import annotations

import unicodedata
from statistics import fmean

from app.rules.policy import politica_para
from app.schemas.classification import ClassificacaoDocumento
from app.schemas.enums import CodigoValidacao, GravidadeValidacao, SituacaoCampo, TipoDocumento
from app.schemas.extraction import DadosExtraidos, _CampoBase
from app.schemas.validation import AchadoValidacao


def normalizar_texto_evidencia(texto: str) -> str:
    """Normaliza acentos, caixa e espaços para comparar evidência sem alterar a fonte."""
    sem_acentos = "".join(
        caractere
        for caractere in unicodedata.normalize("NFD", texto.casefold())
        if not unicodedata.combining(caractere)
    )
    return " ".join(sem_acentos.split())


def evidencia_verificavel(evidencia: str | None, texto_documento: str | None) -> bool:
    """Imagem sem texto OCR exige evidência; texto exige ocorrência literal normalizada."""
    if not evidencia or not evidencia.strip():
        return False
    if not texto_documento:
        return True
    return normalizar_texto_evidencia(evidencia) in normalizar_texto_evidencia(texto_documento)


def expandir_chave_obrigatoria(chave: str, dados: DadosExtraidos) -> list[str]:
    """Expande um padrão `[*]`; lista vazia permanece como ausência verificável."""
    if "[*]" not in chave:
        return [chave]
    raiz, restante = chave.split("[*]", maxsplit=1)
    colecao = getattr(dados, raiz.rstrip("."), [])
    prefixo = raiz.rstrip(".")
    chaves = [f"{prefixo}[{indice}]{restante}" for indice in range(len(colecao))]
    return chaves or [chave]


def campo_confiavel(
    campo: _CampoBase | None,
    texto_documento: str | None,
    limiar: float,
) -> bool:
    """Campo presente, com valor, score suficiente e evidência disponível/verificável."""
    return bool(
        campo is not None
        and campo.situacao is SituacaoCampo.PRESENTE
        and campo.valor is not None
        and campo.confianca is not None
        and campo.confianca >= limiar
        and evidencia_verificavel(campo.evidencia, texto_documento)
    )


def calcular_confianca_extracao(dados: DadosExtraidos) -> DadosExtraidos:
    """Deriva score geral da média disponível, sem usá-lo isoladamente para rotear."""
    if dados.score_confianca_extracao is not None:
        return dados
    scores = list(dados.scores_por_campo().values())
    if not scores:
        return dados
    return dados.model_copy(update={"score_confianca_extracao": fmean(scores)})


def validar_campos_obrigatorios(
    tipo: TipoDocumento,
    dados: DadosExtraidos,
    texto_documento: str | None,
    limiar: float,
) -> list[AchadoValidacao]:
    """Gera um achado por exigência não satisfeita na política da categoria."""
    campos = dados.campos_planos()
    achados: list[AchadoValidacao] = []
    for obrigatorio in politica_para(tipo).campos_obrigatorios:
        alternativas = [
            chave
            for padrao in obrigatorio.alternativas
            for chave in expandir_chave_obrigatoria(padrao, dados)
        ]
        encontrados = [campos.get(chave) for chave in alternativas]
        if any(campo_confiavel(campo, texto_documento, limiar) for campo in encontrados):
            continue

        if any(
            campo is not None and campo.situacao is SituacaoCampo.ILEGIVEL for campo in encontrados
        ):
            codigo = CodigoValidacao.CAMPO_ILEGIVEL
            descricao = f"O campo obrigatório '{obrigatorio.rotulo}' está ilegível."
            acao = "Solicitar conferência humana do documento original."
        elif any(
            campo is not None and campo.situacao is SituacaoCampo.PRESENTE for campo in encontrados
        ):
            codigo = CodigoValidacao.BAIXA_CONFIANCA
            descricao = (
                f"O campo obrigatório '{obrigatorio.rotulo}' não tem confiança ou evidência "
                "suficiente."
            )
            acao = "Conferir o valor e sua evidência no documento original."
        else:
            codigo = CodigoValidacao.CAMPO_AUSENTE
            descricao = f"O campo obrigatório '{obrigatorio.rotulo}' não foi encontrado."
            acao = "Solicitar complemento ou revisão humana."
        achados.append(
            AchadoValidacao(
                codigo=codigo,
                descricao=descricao,
                gravidade=GravidadeValidacao.ALTA,
                campos_afetados=alternativas,
                acao_sugerida=acao,
            )
        )
    return achados


def classificacao_confiavel(classificacao: ClassificacaoDocumento, limiar: float) -> bool:
    return classificacao.score_confianca_classificacao >= limiar

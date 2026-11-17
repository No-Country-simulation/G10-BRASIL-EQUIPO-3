
"""Leitura e validação do catálogo ISMP hospitalar do MediFlow."""

import json
from pathlib import Path
from typing import Any
import re
import unicodedata

from app.schemas.enums import CodigoValidacao, GravidadeValidacao
from app.schemas.extraction import DadosExtraidos
from app.schemas.validation import AchadoValidacao


CAMINHO_CATALOGO = (
    Path(__file__).resolve().parents[2]
    / "docs"
    / "MediFlow_Lista_ISMP_Hospitalar_2019.json"
)

CAMPOS_OBRIGATORIOS = {
    "id",
    "tipo",
    "nome",
    "exemplos",
    "criterio_de_enquadramento",
    "requer_contexto",
    "escopo",
    "fonte_ano",
    "validacao_clinica",
    "fonte_url",
}


def carregar_catalogo_ismp(
    caminho: Path | None = None,
) -> list[dict[str, Any]]:
    """Carrega o catálogo e verifica a estrutura básica dos itens."""

    arquivo = caminho if caminho is not None else CAMINHO_CATALOGO

    with arquivo.open("r", encoding="utf-8") as f:
        catalogo = json.load(f)

    if not isinstance(catalogo, dict):
        raise ValueError("O catálogo ISMP deve ser um objeto JSON.")

    itens = catalogo.get("itens")

    if not isinstance(itens, list):
        raise ValueError("O catálogo ISMP deve conter uma lista de itens.")

    if not itens:
        raise ValueError("O catálogo ISMP está vazio.")

    ids_encontrados = set()

    for indice, item in enumerate(itens):
        if not isinstance(item, dict):
            raise ValueError(f"Item {indice} não é um objeto válido.")

        campos_faltantes = CAMPOS_OBRIGATORIOS - item.keys()

        if campos_faltantes:
            raise ValueError(
                f"Item {indice} possui campos ausentes: "
                f"{sorted(campos_faltantes)}"
            )

        if not isinstance(item["id"], str) or not item["id"].strip():
            raise ValueError(f"Item {indice} possui ID inválido.")

        if item["id"] in ids_encontrados:
            raise ValueError(f"ID duplicado no catálogo: {item['id']}")

        ids_encontrados.add(item["id"])

        if not isinstance(item["nome"], str) or not item["nome"].strip():
            raise ValueError(f"Item {indice} possui nome inválido.")

        if not isinstance(item["exemplos"], list) or not all(
            isinstance(exemplo, str) for exemplo in item["exemplos"]
        ):
            raise ValueError(f"Item {indice} possui exemplos inválidos.")

        if not isinstance(item["requer_contexto"], bool):
            raise ValueError(f"Item {indice} possui requer_contexto inválido.")

        if not isinstance(item["criterio_de_enquadramento"], str):
            raise ValueError(f"Item {indice} possui critério inválido.")

    return itens





def normalizar_nome(nome: str) -> str:
    """Remove diferenças de acentuação e espaços na comparação."""
    texto = unicodedata.normalize("NFKD", nome.casefold())
    texto = "".join(
        caractere
        for caractere in texto
        if not unicodedata.combining(caractere)
    )
    return " ".join(texto.split())


def buscar_itens_ismp(
    nome_medicamento: str,
    itens: list[dict[str, Any]],
) -> list[dict[str, Any]]:
    """Localiza correspondências exatas com nomes ou exemplos do catálogo."""
    nome_normalizado = normalizar_nome(nome_medicamento)

    if not nome_normalizado:
        return []

    encontrados = []

    for item in itens:
        nomes = [item["nome"], *item["exemplos"]]

        if any(
            normalizar_nome(nome) == nome_normalizado
            for nome in nomes
        ):
            encontrados.append(item)

    return encontrados






def avaliar_glicose_hipertonica(
    nome: str,
    dosagem: str | None,
    itens: list[dict[str, Any]],
) -> str:
    """
    Avalia o critério ISMP de glicose hipertônica (>= 20%).

    Considera a concentração no nome ou na dosagem.
    Não decide quando há valores conflitantes ou ambíguos.
    """

    padrao_percentual = r"(?<![\d.,])(\d+(?:[.,]\d+)?)\s*%"

    # Retira apenas os percentuais do nome para buscar
    # o medicamento no catálogo.
    nome_base = re.sub(padrao_percentual, " ", nome)
    nome_base = " ".join(nome_base.split())

    correspondencias = buscar_itens_ismp(nome_base, itens)

    if not any(
        item["id"] == "ISMP-HOSP-011"
        for item in correspondencias
    ):
        return "nao_corresponde"

    # Coleta percentuais encontrados em cada campo.
    percentuais_nome = re.findall(padrao_percentual, nome)
    percentuais_dosagem = re.findall(
        padrao_percentual,
        dosagem or "",
    )

    # Não decidir se houver mais de um percentual
    # no mesmo campo.
    if len(percentuais_nome) > 1 or len(percentuais_dosagem) > 1:
        return "dados_insuficientes"

    valores = [
        float(valor.replace(",", "."))
        for valor in percentuais_nome + percentuais_dosagem
    ]

    # Nenhuma concentração explícita encontrada.
    if not valores:
        return "dados_insuficientes"

    # Valores contraditórios entre nome e dosagem.
    if len(valores) == 2 and valores[0] != valores[1]:
        return "dados_insuficientes"

    concentracao = valores[0]

    if concentracao >= 20:
        return "criterio_atendido"

    return "criterio_nao_atendido"




def gerar_achados_ismp(
    dados: DadosExtraidos,
    itens: list[dict[str, Any]],
) -> list[AchadoValidacao]:
    """Gera achados técnicos para o critério de glicose hipertônica."""

    achados = []

    for indice, medicamento in enumerate(dados.medicamentos):
        nome = medicamento.nome.valor
        dosagem = medicamento.dosagem.valor

        if not isinstance(nome, str):
            continue

        resultado = avaliar_glicose_hipertonica(
            nome,
            dosagem if isinstance(dosagem, str) else None,
            itens,
        )

        if resultado == "criterio_atendido":
            achados.append(
                AchadoValidacao(
                    codigo=CodigoValidacao.MEDICAMENTO_ALTO_RISCO,
                    descricao=(
                        "Possível enquadramento no critério ISMP "
                        "de glicose hipertônica."
                    ),
                    gravidade=GravidadeValidacao.ALTA,
                    campos_afetados=[
                        f"medicamentos[{indice}].nome",
                        f"medicamentos[{indice}].dosagem",
                    ],
                    evidencia=f"{nome} - {dosagem}",
                    acao_sugerida=(
                        "Encaminhar para conferência humana "
                        "dos critérios de enquadramento."
                    ),
                )
            )

        elif resultado == "dados_insuficientes":
            achados.append(
                AchadoValidacao(
                    codigo=CodigoValidacao.MEDICAMENTO_ALTO_RISCO,
                    descricao=(
                        "Possível correspondência com glicose "
                        "hipertônica, mas faltam dados para "
                        "confirmar o critério ISMP."
                    ),
                    gravidade=GravidadeValidacao.ALTA,
                    campos_afetados=[
                        f"medicamentos[{indice}].nome",
                        f"medicamentos[{indice}].dosagem",
                    ],
                    evidencia=f"{nome} - {dosagem}",
                    acao_sugerida=(
                        "Encaminhar para revisão humana "
                        "sem confirmar automaticamente o risco."
                    ),
                )
            )

    return achados

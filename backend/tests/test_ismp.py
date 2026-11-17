
"""Testes da leitura e validação do catálogo ISMP."""

import json

import pytest

from app.rules.ismp import carregar_catalogo_ismp
from app.rules.ismp import avaliar_glicose_hipertonica
from unittest.mock import Mock

from app.core.config import Settings
from app.graph.nodes import construir_nos

from app.rules.routing import decidir_roteamento
from app.schemas.classification import ClassificacaoDocumento
from app.schemas.enums import CanalOrigem, Destino, TipoDocumento
from app.providers.mock_provider import MockLLMProvider
from app.services.triage_service import TriageService
from app.schemas.input import DocumentoRecebido
from app.schemas.enums import TipoArquivo


def criar_catalogo_temporario(tmp_path, itens):
    """Cria um JSON fictício para testar a função."""
    caminho = tmp_path / "catalogo_ismp.json"
    caminho.write_text(
        json.dumps({"itens": itens}),
        encoding="utf-8",
    )
    return caminho


def item_valido():
    return {
        "id": "ISMP-TESTE-001",
        "tipo": "medicamento_especifico",
        "nome": "Medicamento Ficticio",
        "exemplos": ["Medicamento Ficticio"],
        "criterio_de_enquadramento": "Uso ficticio.",
        "requer_contexto": False,
        "escopo": "hospitalar",
        "fonte_ano": 2019,
        "validacao_clinica": "pendente",
        "fonte_url": "https://example.com",
    }


def test_carregar_catalogo_real():
    itens = carregar_catalogo_ismp()

    assert len(itens) == 30
    assert itens[0]["nome"] == "Agonistas adrenérgicos"


def test_carregar_catalogo_temporario(tmp_path):
    caminho = criar_catalogo_temporario(tmp_path, [item_valido()])

    itens = carregar_catalogo_ismp(caminho)

    assert len(itens) == 1
    assert itens[0]["id"] == "ISMP-TESTE-001"


def test_rejeitar_catalogo_vazio(tmp_path):
    caminho = criar_catalogo_temporario(tmp_path, [])

    with pytest.raises(ValueError, match="vazio"):
        carregar_catalogo_ismp(caminho)


def test_rejeitar_item_sem_nome(tmp_path):
    item = item_valido()
    del item["nome"]

    caminho = criar_catalogo_temporario(tmp_path, [item])

    with pytest.raises(ValueError, match="campos ausentes"):
        carregar_catalogo_ismp(caminho)


def test_rejeitar_id_duplicado(tmp_path):
    primeiro = item_valido()
    segundo = item_valido()

    caminho = criar_catalogo_temporario(
        tmp_path,
        [primeiro, segundo],
    )

    with pytest.raises(ValueError, match="ID duplicado"):
        carregar_catalogo_ismp(caminho)


def test_rejeitar_exemplos_invalidos(tmp_path):
    item = item_valido()
    item["exemplos"] = "texto em vez de lista"

    caminho = criar_catalogo_temporario(tmp_path, [item])

    with pytest.raises(ValueError, match="exemplos inválidos"):
        carregar_catalogo_ismp(caminho)


from app.rules.ismp import buscar_itens_ismp, normalizar_nome


def test_normalizar_nome_com_acento():
    assert normalizar_nome("Sódio") == "sodio"


def test_normalizar_nome_com_espacos():
    assert normalizar_nome("  HEPARINA  ") == "heparina"


def test_buscar_heparina_no_catalogo():
    itens = carregar_catalogo_ismp()

    encontrados = buscar_itens_ismp("heparina", itens)

    assert any(
        item["id"] == "ISMP-HOSP-008"
        for item in encontrados
    )


def test_buscar_medicamento_inexistente():
    itens = carregar_catalogo_ismp()

    encontrados = buscar_itens_ismp(
        "Medicamento Totalmente Ficticio",
        itens,
    )

    assert encontrados == []


def test_busca_nao_aceita_correspondencia_parcial():
    itens = carregar_catalogo_ismp()

    encontrados = buscar_itens_ismp("hepar", itens)

    assert encontrados == []


def test_busca_ignora_diferencas_de_acentuacao():
    itens = carregar_catalogo_ismp()

    encontrados = buscar_itens_ismp("norepinefrina", itens)

    assert any(
        item["id"] == "ISMP-HOSP-001"
        for item in encontrados
    )






@pytest.mark.parametrize(
    "nome,dosagem,esperado",
    [
        ("Glicose", "25%", "criterio_atendido"),
        ("Glicose", "20%", "criterio_atendido"),
        ("Glicose", "5%", "criterio_nao_atendido"),
        ("Glicose", "19,5%", "criterio_nao_atendido"),
        ("Glicose", None, "dados_insuficientes"),
        ("Glicose", "500 mg", "dados_insuficientes"),
        ("Glicose", "20% e 5%", "dados_insuficientes"),
        ("Heparina", "25%", "nao_corresponde"),
    ],
)
def test_avaliar_glicose_hipertonica(
    nome, dosagem, esperado
):
    itens = carregar_catalogo_ismp()

    resultado = avaliar_glicose_hipertonica(
        nome,
        dosagem,
        itens,
    )

    assert resultado == esperado


def test_glicose_concentracao_no_nome():
    itens = carregar_catalogo_ismp()

    resultado = avaliar_glicose_hipertonica(
        "Glicose 25%",
        None,
        itens,
    )

    assert resultado == "criterio_atendido"


def test_glicose_concentracao_conflitante():
    itens = carregar_catalogo_ismp()

    resultado = avaliar_glicose_hipertonica(
        "Glicose 25%",
        "5%",
        itens,
    )

    assert resultado == "dados_insuficientes"


def test_glicose_com_dosagem_sem_percentual():
    itens = carregar_catalogo_ismp()

    resultado = avaliar_glicose_hipertonica(
        "Glicose",
        "500 mg",
        itens,
    )

    assert resultado == "dados_insuficientes"


from app.rules.ismp import gerar_achados_ismp
from app.schemas.enums import CodigoValidacao
from app.schemas.extraction import CampoTexto, DadosExtraidos, Medicamento


def criar_dados_medicamento(nome: str, dosagem: str | None):
    """Cria dados sintéticos para os testes ISMP."""
    medicamento = Medicamento(
        nome=CampoTexto(
            valor=nome,
            confianca=0.95,
            evidencia=f"Medicamento: {nome}",
            situacao="presente",
        ),
    )

    if dosagem is not None:
        medicamento.dosagem = CampoTexto(
            valor=dosagem,
            confianca=0.95,
            evidencia=f"Dosagem: {dosagem}",
            situacao="presente",
        )

    return DadosExtraidos(medicamentos=[medicamento])


def test_gera_achado_glicose_25():
    itens = carregar_catalogo_ismp()
    dados = criar_dados_medicamento("Glicose", "25%")

    achados = gerar_achados_ismp(dados, itens)

    assert len(achados) == 1
    assert achados[0].codigo == CodigoValidacao.MEDICAMENTO_ALTO_RISCO
    assert achados[0].gravidade.value == "alta"
    assert "medicamentos[0].nome" in achados[0].campos_afetados


def test_nao_gera_achado_glicose_5():
    itens = carregar_catalogo_ismp()
    dados = criar_dados_medicamento("Glicose", "5%")

    achados = gerar_achados_ismp(dados, itens)

    assert achados == []


def test_gera_achado_quando_falta_concentracao():
    itens = carregar_catalogo_ismp()
    dados = criar_dados_medicamento("Glicose", None)

    achados = gerar_achados_ismp(dados, itens)

    assert len(achados) == 1
    assert "faltam dados" in achados[0].descricao


def test_nao_aplica_regra_glicose_a_heparina():
    itens = carregar_catalogo_ismp()
    dados = criar_dados_medicamento("Heparina", "25%")

    achados = gerar_achados_ismp(dados, itens)

    assert achados == []


def test_gera_achado_concentracao_no_nome():
    itens = carregar_catalogo_ismp()
    dados = criar_dados_medicamento("Glicose 25%", None)

    achados = gerar_achados_ismp(dados, itens)

    assert len(achados) == 1
    assert achados[0].codigo == CodigoValidacao.MEDICAMENTO_ALTO_RISCO


def test_gera_achado_concentracoes_conflitantes():
    itens = carregar_catalogo_ismp()
    dados = criar_dados_medicamento("Glicose 25%", "5%")

    achados = gerar_achados_ismp(dados, itens)

    assert len(achados) == 1
    assert "faltam dados" in achados[0].descricao





def test_no_validar_dados_com_ismp_ativada():
    """Verifica a execução da avaliação ISMP no nó LangGraph."""

    config = Settings(
        llm_provider="mock",
        storage_backend="mock",
        ismp_enabled=True,
    )

    nos = construir_nos(Mock(), config)

    dados = criar_dados_medicamento("Glicose", "25%")

    classificacao = Mock()
    classificacao.tipo_documento = "receita_medica"
    classificacao.score_confianca_classificacao = 0.95

    documento_normalizado = Mock()
    documento_normalizado.texto = (
        "Receita fictícia. Medicamento: Glicose 25%."
    )

    state = {
        "classificacao": classificacao,
        "dados_extraidos": dados,
        "documento_normalizado": documento_normalizado,
    }

    resultado = nos["validar_dados"](state)

    assert any(
        achado.codigo == CodigoValidacao.MEDICAMENTO_ALTO_RISCO
        for achado in resultado["validacoes"]
    )





def test_ismp_desativada_nao_gera_achado():
    config = Settings(
        llm_provider="mock",
        storage_backend="mock",
        ismp_enabled=False,
    )

    nos = construir_nos(Mock(), config)

    dados = criar_dados_medicamento("Glicose", "25%")

    classificacao = Mock()
    classificacao.tipo_documento = "receita_medica"
    classificacao.score_confianca_classificacao = 0.95

    state = {
        "classificacao": classificacao,
        "dados_extraidos": dados,
        "documento_normalizado": Mock(
            texto="Receita fictícia. Medicamento: Glicose 25%."
        ),
    }

    resultado = nos["validar_dados"](state)

    assert not any(
        achado.codigo == CodigoValidacao.MEDICAMENTO_ALTO_RISCO
        for achado in resultado["validacoes"]
    )


def test_achado_ismp_encaminha_para_revisao_humana():
    itens = carregar_catalogo_ismp()
    dados = criar_dados_medicamento("Glicose", "25%")

    achados = gerar_achados_ismp(dados, itens)

    classificacao = ClassificacaoDocumento(
        tipo_documento=TipoDocumento.RECEITA_MEDICA,
        especialidade="Clínica Geral",
        prioridade="rotina",
        urgente=False,
        score_confianca_classificacao=0.95,
    )

    decisao = decidir_roteamento(
        documento_id="DOC-ISMP-TESTE-001",
        canal_origem=CanalOrigem.AMBULATORIO,
        classificacao=classificacao,
        dados=dados,
        validacoes=achados,
        texto_documento="Receita fictícia. Glicose 25%.",
        limiar_confianca=0.80,
    )

    assert decisao.destino == Destino.FILA_REVISAO_HUMANA
    assert decisao.requer_auditoria_humana is True
    assert decisao.codigo_motivo.value == "medicamento_alto_risco"





def test_fluxo_completo_ismp_glicose_25():
    """Testa o LangGraph com dados sintéticos controlados."""

    config = Settings(
        llm_provider="mock",
        storage_backend="mock",
        ismp_enabled=True,
    )

    classificacao = ClassificacaoDocumento(
        tipo_documento=TipoDocumento.RECEITA_MEDICA,
        especialidade="Clínica Geral",
        prioridade="rotina",
        urgente=False,
        score_confianca_classificacao=0.95,
    )

    dados = criar_dados_medicamento("Glicose", "25%")

    provedor = MockLLMProvider(
        classificacao=classificacao,
        dados_extraidos=dados,
    )

    documento = DocumentoRecebido(
        documento_id="DOC-ISMP-FLUXO-001",
        tipo_arquivo=TipoArquivo.TXT,
        canal_origem=CanalOrigem.AMBULATORIO,
        texto=(
            "DOCUMENTO FICTICIO PARA TESTE. "
            "Receita medica. Medicamento: Glicose 25%."
        ),
    )

    servico = TriageService(
        configuracao=config,
        provedor=provedor,
    )

    resultado = servico.processar(documento)

    assert any(
        achado.codigo == CodigoValidacao.MEDICAMENTO_ALTO_RISCO
        for achado in resultado.validacoes
    )

    assert resultado.decisao_roteamento.destino == (
        Destino.FILA_REVISAO_HUMANA
    )

    assert resultado.decisao_roteamento.requer_auditoria_humana is True


def test_fluxo_completo_ismp_glicose_5():
    """Glicose 5% não deve gerar o alerta específico ISMP."""

    config = Settings(
        llm_provider="mock",
        storage_backend="mock",
        ismp_enabled=True,
    )

    classificacao = ClassificacaoDocumento(
        tipo_documento=TipoDocumento.RECEITA_MEDICA,
        especialidade="Clínica Geral",
        prioridade="rotina",
        urgente=False,
        score_confianca_classificacao=0.95,
    )

    dados = criar_dados_medicamento("Glicose", "5%")

    provedor = MockLLMProvider(
        classificacao=classificacao,
        dados_extraidos=dados,
    )

    documento = DocumentoRecebido(
        documento_id="DOC-ISMP-FLUXO-005",
        tipo_arquivo=TipoArquivo.TXT,
        canal_origem=CanalOrigem.AMBULATORIO,
        texto=(
            "DOCUMENTO FICTICIO PARA TESTE. "
            "Receita medica. Medicamento: Glicose 5%."
        ),
    )

    servico = TriageService(
        configuracao=config,
        provedor=provedor,
    )

    resultado = servico.processar(documento)

    assert not any(
        achado.codigo == CodigoValidacao.MEDICAMENTO_ALTO_RISCO
        for achado in resultado.validacoes
    )

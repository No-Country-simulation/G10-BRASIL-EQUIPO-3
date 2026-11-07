from types import SimpleNamespace
from unittest.mock import Mock

from fastapi.testclient import TestClient

from app.main import app
from app.schemas.input import DocumentoRecebido

client = TestClient(app)


def test_triagem_chama_servico(monkeypatch):
    servico_simulado = Mock(side_effect=RuntimeError("Teste de chamada ao serviço"))

    monkeypatch.setattr(
        "app.api.documents.processar_documento",
        servico_simulado,
    )

    resposta = client.post(
        "/api/v1/documents/triage",
        json={
            "tipo_arquivo": "TXT",
            "documento_texto": "Laudo ficticio para teste.",
            "canal_origem": "AMBULATORIO",
        },
    )

    assert resposta.status_code == 500
    assert servico_simulado.call_count == 1


def test_documento_sem_texto():
    resposta = client.post(
        "/api/v1/documents/triage",
        json={
            "tipo_arquivo": "TXT",
            "documento_texto": "",
            "canal_origem": "AMBULATORIO",
        },
    )
    assert resposta.status_code == 422


def test_canal_origem_invalido():
    resposta = client.post(
        "/api/v1/documents/triage",
        json={
            "tipo_arquivo": "TXT",
            "documento_texto": "Documento ficticio.",
            "canal_origem": "CANAL_INEXISTENTE",
        },
    )
    assert resposta.status_code == 422


def test_upload_txt_chama_servico(monkeypatch):
    servico_simulado = Mock(side_effect=RuntimeError("Falha simulada"))
    monkeypatch.setattr(
        "app.api.documents.processar_documento",
        servico_simulado,
    )

    resposta = client.post(
        "/api/v1/documents/triage/upload",
        data={
            "tipo_arquivo": "TXT",
            "canal_origem": "AMBULATORIO",
        },
        files={
            "arquivo": (
                "documento.txt",
                b"Documento clinico ficticio.",
                "text/plain",
            )
        },
    )

    assert resposta.status_code == 500
    servico_simulado.assert_called_once()

    documento = servico_simulado.call_args.args[0]
    assert isinstance(documento, DocumentoRecebido)
    assert documento.conteudo == b"Documento clinico ficticio."
    assert documento.nome_arquivo == "documento.txt"


def test_upload_arquivo_vazio():
    resposta = client.post(
        "/api/v1/documents/triage/upload",
        data={
            "tipo_arquivo": "TXT",
            "canal_origem": "AMBULATORIO",
        },
        files={"arquivo": ("vazio.txt", b"", "text/plain")},
    )

    assert resposta.status_code == 422


def test_upload_acima_do_limite(monkeypatch):
    monkeypatch.setattr(
        "app.api.documents.carregar_configuracao",
        lambda: SimpleNamespace(max_upload_size_bytes=4),
    )

    resposta = client.post(
        "/api/v1/documents/triage/upload",
        data={
            "tipo_arquivo": "TXT",
            "canal_origem": "AMBULATORIO",
        },
        files={
            "arquivo": (
                "grande.txt",
                b"Documento maior que o limite.",
                "text/plain",
            )
        },
    )

    assert resposta.status_code == 413


def test_upload_txt_integracao_com_langgraph(monkeypatch):
    # Garante que nenhuma IA externa seja utilizada.
    monkeypatch.setenv("LLM_PROVIDER", "mock")
    monkeypatch.setenv("STORAGE_BACKEND", "mock")

    resposta = client.post(
        "/api/v1/documents/triage/upload",
        data={
            "tipo_arquivo": "TXT",
            "canal_origem": "AMBULATORIO",
        },
        files={
            "arquivo": (
                "laudo_ficticio.txt",
                b"LAUDO MEDICO FICTICIO. Exame de rotina. Conclusao: sem alteracoes relevantes.",
                "text/plain",
            )
        },
    )

    assert resposta.status_code == 200, resposta.text

    dados = resposta.json()

    # Verifica se a API devolveu a estrutura de triagem.
    assert dados["documento_id"].startswith("DOC-")
    assert dados["canal_origem"] == "AMBULATORIO"
    assert dados["versao_resultado"] == 1

    # Confirma que o provedor foi o simulado.
    assert dados["origem_analise"]["provedor"] == "mock"
    assert dados["origem_analise"]["dados_de_teste"] is True

    # Verifica se houve uma decisao de roteamento.
    assert dados["decisao_roteamento"] is not None
    assert dados["status"] in ("processado", "em_auditoria")

    # A persistencia ainda pertence as fases seguintes.
    assert dados["armazenamento_oci"] is None


from unittest.mock import Mock

from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_triagem_chama_servico(monkeypatch):
    servico_simulado = Mock(
        side_effect=RuntimeError("Teste de chamada ao serviço")
    )

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

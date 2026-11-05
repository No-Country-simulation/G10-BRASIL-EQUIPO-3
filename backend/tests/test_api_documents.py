from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_entrada_json_valida_sem_pipeline():
    resposta = client.post(
        "/api/v1/documents/triage",
        json={
            "tipo_arquivo": "TXT",
            "documento_texto": "Laudo ficticio para teste.",
            "canal_origem": "AMBULATORIO",
        },
    )

    assert resposta.status_code == 501
    assert "Pipeline" in resposta.json()["detail"]


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

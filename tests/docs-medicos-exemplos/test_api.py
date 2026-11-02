
from fastapi.testclient import TestClient
from backend.main import app

client = TestClient(app)


def test_health():
    resposta = client.get("/health")

    assert resposta.status_code == 200
    assert resposta.json()["status"] == "ok"


def test_receber_documento():
    dados = {
        "documento_id": "DOC-001",
        "tipo_arquivo": "TXT",
        "documento_texto": "Documento ficticio.",
        "canal_origem": "AMBULATORIO"
    }

    resposta = client.post(
        "/api/documentos/texto",
        json=dados
    )

    assert resposta.status_code == 200
    assert resposta.json()["status"] == "recebido"


from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_health():
    resposta = client.get("/health")

    assert resposta.status_code == 200

    dados = resposta.json()

    assert dados["status"] == "ok"
    assert dados["mensagem"] == "MediFlow API funcionando"

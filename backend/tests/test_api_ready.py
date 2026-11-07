from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_ready_configuracao_valida(monkeypatch):
    resposta = client.get("/ready")

    assert resposta.status_code == 200

    dados = resposta.json()
    assert dados["status"] == "ready"
    assert dados["verificacoes"]["configuracao"] == "valida"
    assert dados["verificacoes"]["conectividade_externa"] == "nao_verificada"


def test_ready_configuracao_invalida(monkeypatch):
    def configuracao_invalida():
        raise ValueError("Configuracao simulada incorreta")

    monkeypatch.setattr(
        "app.api.ready.carregar_configuracao",
        configuracao_invalida,
    )

    resposta = client.get("/ready")

    assert resposta.status_code == 503
    assert resposta.json()["detail"] == ("Configuracao do backend invalida.")

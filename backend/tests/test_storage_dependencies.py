from fastapi.testclient import TestClient

from app.main import criar_app


def test_storage_compartilhado_entre_requisicoes():
    app = criar_app()

    @app.get("/teste-storage")
    def teste_storage():
        storage = app.state.storage

        return {"storage_id": id(storage)}

    with TestClient(app) as client:
        primeira = client.get("/teste-storage")
        segunda = client.get("/teste-storage")

    assert primeira.status_code == 200
    assert segunda.status_code == 200
    assert primeira.json()["storage_id"] == segunda.json()["storage_id"]

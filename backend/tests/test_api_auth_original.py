"""Login do MVP, proteção das rotas, CORS e rota do arquivo original."""

import json
from pathlib import Path

import pytest
from fastapi.testclient import TestClient

from app.core.security import criar_token, verificar_token
from app.main import criar_app

SEGREDO = "segredo-de-teste-com-mais-de-32-caracteres!!"
USUARIOS = [
    {
        "email": "revisor@mediflow.demo",
        "senha": "mediflow123",
        "nome": "Revisor Demo",
        "perfil": "revisor",
    }
]
FIXTURES = Path(__file__).parent / "fixtures"


@pytest.fixture
def com_auth(monkeypatch):
    monkeypatch.setenv("AUTH_ENABLED", "true")
    monkeypatch.setenv("AUTH_SECRET", SEGREDO)
    monkeypatch.setenv("AUTH_USERS", json.dumps(USUARIOS))
    return TestClient(criar_app())


def _entrar(client: TestClient) -> str:
    r = client.post(
        "/api/v1/auth/login", json={"email": "revisor@mediflow.demo", "senha": "mediflow123"}
    )
    assert r.status_code == 200
    return r.json()["access_token"]


def test_login_devolve_sessao_no_formato_do_frontend(com_auth):
    r = com_auth.post(
        "/api/v1/auth/login", json={"email": " Revisor@MediFlow.demo ", "senha": "mediflow123"}
    )
    corpo = r.json()
    assert r.status_code == 200
    assert corpo["token_type"] == "bearer"
    assert corpo["access_token"]
    assert set(corpo["usuario"]) == {"id", "nome", "email", "perfil"}
    assert corpo["usuario"]["email"] == "revisor@mediflow.demo"
    assert "senha" not in json.dumps(corpo)


@pytest.mark.parametrize(
    ("email", "senha"),
    [("revisor@mediflow.demo", "errada"), ("outro@mediflow.demo", "mediflow123")],
)
def test_login_invalido_nao_revela_qual_campo_errou(com_auth, email, senha):
    r = com_auth.post("/api/v1/auth/login", json={"email": email, "senha": senha})
    assert r.status_code == 401
    assert r.json()["detail"] == "E-mail ou senha incorretos."


def test_rotas_de_documentos_exigem_token(com_auth):
    assert com_auth.get("/api/v1/documents").status_code == 401
    assert com_auth.get("/api/v1/documents/DOC-1/original").status_code == 401
    assert com_auth.get("/api/v1/auth/me").status_code == 401
    r = com_auth.get("/api/v1/documents", headers={"Authorization": "Bearer lixo"})
    assert r.status_code == 401


def test_token_valido_libera_rotas_e_me(com_auth):
    cab = {"Authorization": f"Bearer {_entrar(com_auth)}"}
    assert com_auth.get("/api/v1/documents", headers=cab).status_code == 200
    me = com_auth.get("/api/v1/auth/me", headers=cab)
    assert me.status_code == 200
    assert me.json()["perfil"] == "revisor"


def test_health_continua_publico(com_auth):
    assert com_auth.get("/health").status_code == 200
    assert com_auth.get("/ready").status_code == 200


def test_token_expirado_e_adulterado():
    token = criar_token("a@b.c", SEGREDO, ttl_segundos=60, agora=1_000)
    assert verificar_token(token, SEGREDO, agora=1_030) == "a@b.c"
    assert verificar_token(token, SEGREDO, agora=1_061) is None
    assert verificar_token(token, "outro-segredo-com-32-caracteres-ok!!", agora=1_030) is None
    payload, assinatura = token.split(".")
    assert verificar_token(f"{payload}x.{assinatura}", SEGREDO, agora=1_030) is None
    assert verificar_token("sem-ponto", SEGREDO) is None


def test_sem_auth_login_responde_404_e_rotas_ficam_abertas():
    client = TestClient(criar_app())
    assert client.get("/api/v1/documents").status_code == 200
    r = client.post("/api/v1/auth/login", json={"email": "a@b.c", "senha": "x"})
    assert r.status_code == 404


def test_auth_ligado_exige_segredo_e_usuarios(monkeypatch):
    monkeypatch.setenv("AUTH_ENABLED", "true")
    with pytest.raises(ValueError, match="AUTH_SECRET"):
        criar_app()


def test_cors_libera_origem_configurada_e_bloqueia_outras(monkeypatch):
    monkeypatch.setenv("CORS_ORIGINS", '["https://app.exemplo.com"]')
    client = TestClient(criar_app())
    pre = {
        "Access-Control-Request-Method": "POST",
        "Access-Control-Request-Headers": "authorization",
    }
    ok = client.options("/api/v1/documents", headers={"Origin": "https://app.exemplo.com", **pre})
    assert ok.headers.get("access-control-allow-origin") == "https://app.exemplo.com"
    negado = client.options("/api/v1/documents", headers={"Origin": "https://mal.com", **pre})
    assert "access-control-allow-origin" not in negado.headers


def _enviar(client: TestClient, nome: str, tipo: str, doc_id: str, headers=None):
    return client.post(
        "/api/v1/documents/triage/upload",
        data={"tipo_arquivo": tipo, "canal_origem": "AMBULATORIO", "documento_id": doc_id},
        files={"arquivo": (nome, (FIXTURES / nome).read_bytes())},
        headers=headers or {},
    )


@pytest.mark.parametrize(
    ("nome", "tipo", "midia"),
    [
        ("mediflow_laudo_teste.pdf", "PDF", "application/pdf"),
        ("mediflow_laudo_teste.png", "PNG", "image/png"),
        ("mediflow_laudo_teste.jpg", "JPEG", "image/jpeg"),
    ],
)
def test_original_devolve_os_mesmos_bytes_com_a_midia_certa(nome, tipo, midia):
    client = TestClient(criar_app())
    doc_id = f"ORIG-{tipo}"
    assert _enviar(client, nome, tipo, doc_id).status_code == 200

    r = client.get(f"/api/v1/documents/{doc_id}/original")
    assert r.status_code == 200
    assert r.headers["content-type"] == midia
    assert r.headers["x-content-type-options"] == "nosniff"
    assert r.headers["cache-control"] == "private, no-store"
    assert r.content == (FIXTURES / nome).read_bytes()


def test_original_inexistente_ou_id_invalido_responde_404():
    client = TestClient(criar_app())
    assert client.get("/api/v1/documents/NAO-EXISTE/original").status_code == 404
    assert client.get("/api/v1/documents/..%2Fsegredo/original").status_code == 404


def test_original_respeita_a_autenticacao(com_auth):
    cab = {"Authorization": f"Bearer {_entrar(com_auth)}"}
    assert _enviar(com_auth, "mediflow_laudo_teste.pdf", "PDF", "ORIG-AUTH", cab).status_code == 200
    assert com_auth.get("/api/v1/documents/ORIG-AUTH/original").status_code == 401
    assert com_auth.get("/api/v1/documents/ORIG-AUTH/original", headers=cab).status_code == 200

from pathlib import Path
from types import SimpleNamespace
from unittest.mock import Mock

import pytest
from fastapi.testclient import TestClient

from app.main import app, criar_app
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


@pytest.mark.parametrize(
    ("nome_arquivo", "tipo_arquivo", "mime_type"),
    [
        ("mediflow_laudo_teste.pdf", "PDF", "application/pdf"),
        ("mediflow_laudo_teste.png", "PNG", "image/png"),
        ("mediflow_laudo_teste.jpg", "JPEG", "image/jpeg"),
    ],
)
def test_upload_formatos_integracao(
    monkeypatch,
    nome_arquivo,
    tipo_arquivo,
    mime_type,
):
    monkeypatch.setenv("LLM_PROVIDER", "mock")
    monkeypatch.setenv("STORAGE_BACKEND", "mock")

    caminho = Path(__file__).resolve().parent / "fixtures" / nome_arquivo

    with caminho.open("rb") as arquivo:
        resposta = client.post(
            "/api/v1/documents/triage/upload",
            data={
                "tipo_arquivo": tipo_arquivo,
                "canal_origem": "AMBULATORIO",
            },
            files={
                "arquivo": (
                    nome_arquivo,
                    arquivo,
                    mime_type,
                )
            },
        )

    assert resposta.status_code == 200, resposta.text

    dados = resposta.json()
    assert dados["documento_id"].startswith("DOC-")
    assert dados["origem_analise"]["provedor"] == "mock"
    assert dados["origem_analise"]["dados_de_teste"] is True
    assert dados["armazenamento_oci"] is None


def test_upload_png_corrompido(monkeypatch):
    monkeypatch.setenv("LLM_PROVIDER", "mock")
    monkeypatch.setenv("STORAGE_BACKEND", "mock")

    resposta = client.post(
        "/api/v1/documents/triage/upload",
        data={
            "tipo_arquivo": "PNG",
            "canal_origem": "AMBULATORIO",
        },
        files={
            "arquivo": (
                "imagem_corrompida.png",
                b"isto nao e uma imagem PNG valida",
                "image/png",
            )
        },
    )

    assert resposta.status_code == 200, resposta.text

    dados = resposta.json()

    assert dados["status"] == "erro"
    assert dados["erro"] is not None
    assert dados["erro"]["codigo"] == "arquivo_corrompido"
    assert dados["classificacao"] is None
    assert dados["decisao_roteamento"] is None


def test_triagem_json_persiste_e_permite_consulta(monkeypatch):
    from app.schemas.enums import CanalOrigem, StatusProcessamento
    from app.schemas.output import RespostaTriagem

    app = criar_app()

    def processar_simulado(documento):
        return RespostaTriagem(
            documento_id=documento.documento_id,
            status=StatusProcessamento.RECEBIDO,
            versao_resultado=1,
        )

    monkeypatch.setattr(
        "app.api.documents.processar_documento",
        processar_simulado,
    )

    with TestClient(app) as client:
        # Vamos usar o contrato real do endpoint no teste.
        resposta_post = client.post(
            "/api/v1/documents/triage",
            json={
                "documento_id": "DOC-INTEGRACAO-001",
                "tipo_arquivo": "TXT",
                "canal_origem": CanalOrigem.OUTRO.value,
                "documento_texto": "Documento ficticio de teste.",
            },
        )

        assert resposta_post.status_code == 200

        documento_id = resposta_post.json()["documento_id"]

        resposta_get = client.get(f"/api/v1/documents/{documento_id}")

    assert resposta_get.status_code == 200
    assert resposta_get.json()["documento_id"] == documento_id
    assert resposta_get.json()["versao_resultado"] == 1


def test_upload_txt_persiste_e_permite_consulta(monkeypatch):
    monkeypatch.setenv("LLM_PROVIDER", "mock")
    monkeypatch.setenv("STORAGE_BACKEND", "mock")

    app = criar_app()

    with TestClient(app) as client:
        resposta_post = client.post(
            "/api/v1/documents/triage/upload",
            data={
                "tipo_arquivo": "TXT",
                "canal_origem": "OUTRO",
                "documento_id": "DOC-UPLOAD-001",
            },
            files={
                "arquivo": (
                    "documento_ficticio.txt",
                    b"Documento clinico ficticio para teste.",
                    "text/plain",
                ),
            },
        )

        assert resposta_post.status_code == 200

        dados_post = resposta_post.json()
        documento_id = dados_post["documento_id"]

        resposta_get = client.get(f"/api/v1/documents/{documento_id}")

    assert resposta_get.status_code == 200

    dados_get = resposta_get.json()

    assert dados_get["documento_id"] == documento_id
    assert dados_get["status"] == dados_post["status"]
    assert dados_get["versao_resultado"] == dados_post["versao_resultado"]

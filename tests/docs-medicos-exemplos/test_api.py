
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
    
    
    
import pymupdf


def test_upload_pdf():
    # Criar um PDF fictício
    pdf = pymupdf.open()
    pagina = pdf.new_page()

    pagina.insert_text(
        (72, 72),
        "Laudo medico ficticio para teste."
    )

    conteudo = pdf.tobytes()
    pdf.close()

    # Enviar o PDF para a API
    resposta = client.post(
        "/api/documentos/upload",
        files={
            "arquivo": (
                "teste.pdf",
                conteudo,
                "application/pdf"
            )
        },
        data={
            "canal_origem": "AMBULATORIO"
        }
    )

    assert resposta.status_code == 200

    resultado = resposta.json()

    assert resultado["status"] == "recebido"
    assert "Laudo medico ficticio" in resultado["texto_extraido"]


def test_upload_formato_invalido():
    resposta = client.post(
        "/api/documentos/upload",
        files={
            "arquivo": (
                "teste.txt",
                b"Documento ficticio",
                "text/plain"
            )
        },
        data={
            "canal_origem": "AMBULATORIO"
        }
    )

    assert resposta.status_code == 415


from io import BytesIO

import pymupdf
import pytest
from PIL import Image

from app.core.config import Settings
from app.ingestion import ErroIngestao, ingerir_documento
from app.ingestion.text import normalizar_texto
from app.schemas.enums import CanalOrigem, CodigoErro, TipoArquivo
from app.schemas.input import DocumentoRecebido


def documento(tipo: TipoArquivo, conteudo: bytes | None = None, texto: str | None = None):
    return DocumentoRecebido(
        documento_id="DOC-TESTE-1",
        tipo_arquivo=tipo,
        canal_origem=CanalOrigem.AMBULATORIO,
        conteudo=conteudo,
        texto=texto,
    )


def pdf_com_texto() -> bytes:
    arquivo = pymupdf.open()
    pagina = arquivo.new_page()
    pagina.insert_text((72, 72), "Documento clínico sintético")
    resultado = arquivo.tobytes()
    arquivo.close()
    return resultado


def pdf_digitalizado() -> bytes:
    arquivo = pymupdf.open()
    pagina = arquivo.new_page(width=120, height=80)
    pagina.draw_rect(pymupdf.Rect(10, 10, 110, 70), color=(0, 0, 0))
    resultado = arquivo.tobytes()
    arquivo.close()
    return resultado


def imagem_bytes(formato: str) -> bytes:
    buffer = BytesIO()
    Image.new("RGB", (8, 8), color="white").save(buffer, format=formato)
    return buffer.getvalue()


def test_ingere_texto_pre_extraido():
    resultado = ingerir_documento(documento(TipoArquivo.TXT, texto="Laudo sintético"))
    assert resultado.texto == "Laudo sintético"
    assert resultado.imagens_png == ()


def test_ingere_txt_utf8_com_bom():
    resultado = ingerir_documento(documento(TipoArquivo.TXT, conteudo=b"\xef\xbb\xbftexto"))
    assert resultado.texto == "texto"


@pytest.mark.parametrize("conteudo", [b"", b"   ", "texto\x00inválido".encode()])
def test_rejeita_texto_vazio_ou_invalido(conteudo):
    with pytest.raises(ErroIngestao) as erro:
        normalizar_texto(conteudo, 1024)
    assert erro.value.codigo is CodigoErro.ARQUIVO_INVALIDO


def test_rejeita_txt_fora_de_utf8():
    with pytest.raises(ErroIngestao) as erro:
        ingerir_documento(documento(TipoArquivo.TXT, conteudo=b"\xff"))
    assert erro.value.codigo is CodigoErro.ARQUIVO_INVALIDO


def test_aplica_limite_de_tamanho():
    config = Settings(max_upload_size_mb=0.00001)
    with pytest.raises(ErroIngestao) as erro:
        ingerir_documento(documento(TipoArquivo.TXT, conteudo=b"x" * 20), config)
    assert erro.value.codigo is CodigoErro.ARQUIVO_MUITO_GRANDE


def test_extrai_texto_de_pdf_digital():
    resultado = ingerir_documento(documento(TipoArquivo.PDF, conteudo=pdf_com_texto()))
    assert "Documento clínico sintético" in resultado.texto
    assert resultado.imagens_png == ()


def test_rasteriza_pdf_digitalizado():
    resultado = ingerir_documento(documento(TipoArquivo.PDF, conteudo=pdf_digitalizado()))
    assert resultado.texto is None
    assert len(resultado.imagens_png) == 1
    assert resultado.imagens_png[0].startswith(b"\x89PNG\r\n\x1a\n")


def test_rejeita_pdf_sem_assinatura():
    with pytest.raises(ErroIngestao) as erro:
        ingerir_documento(documento(TipoArquivo.PDF, conteudo=b"not a PDF"))
    assert erro.value.codigo is CodigoErro.FORMATO_NAO_SUPORTADO


def test_rejeita_pdf_corrompido():
    with pytest.raises(ErroIngestao) as erro:
        ingerir_documento(documento(TipoArquivo.PDF, conteudo=b"%PDF-1.4\nnot a document"))
    assert erro.value.codigo is CodigoErro.ARQUIVO_CORROMPIDO


def test_aplica_limite_de_paginas():
    arquivo = pymupdf.open()
    arquivo.new_page()
    arquivo.new_page()
    conteudo = arquivo.tobytes()
    arquivo.close()
    with pytest.raises(ErroIngestao) as erro:
        ingerir_documento(documento(TipoArquivo.PDF, conteudo=conteudo), Settings(max_pdf_pages=1))
    assert erro.value.codigo is CodigoErro.LIMITE_PAGINAS_EXCEDIDO


@pytest.mark.parametrize(
    ("tipo", "formato"), [(TipoArquivo.PNG, "PNG"), (TipoArquivo.JPEG, "JPEG")]
)
def test_valida_imagem_e_normaliza_para_png(tipo, formato):
    resultado = ingerir_documento(documento(tipo, conteudo=imagem_bytes(formato)))
    assert len(resultado.imagens_png) == 1
    assert resultado.imagens_png[0].startswith(b"\x89PNG\r\n\x1a\n")


def test_rejeita_assinatura_de_imagem_incompativel():
    with pytest.raises(ErroIngestao) as erro:
        ingerir_documento(documento(TipoArquivo.PNG, conteudo=imagem_bytes("JPEG")))
    assert erro.value.codigo is CodigoErro.FORMATO_NAO_SUPORTADO


def test_rejeita_imagem_corrompida():
    with pytest.raises(ErroIngestao) as erro:
        ingerir_documento(documento(TipoArquivo.PNG, conteudo=b"\x89PNG\r\n\x1a\ninvalid"))
    assert erro.value.codigo is CodigoErro.ARQUIVO_CORROMPIDO

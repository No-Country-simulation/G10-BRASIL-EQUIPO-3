import pytest

from app.schemas.enums import StatusProcessamento
from app.storage.keys import chave_documento, chave_resultado


def test_chave_documento():
    resultado = chave_documento("DOC-001", "PDF")

    assert resultado == "recebidos/DOC-001/original.pdf"


def test_resultado_em_auditoria():
    resultado = chave_resultado(
        "DOC-001",
        StatusProcessamento.EM_AUDITORIA,
        1,
    )

    assert resultado == ("auditoria_humana/DOC-001/resultado_v001.json")


def test_resultado_aprovado():
    resultado = chave_resultado(
        "DOC-001",
        StatusProcessamento.APROVADO_AUDITORIA,
        2,
    )

    assert resultado == ("processados/DOC-001/resultado_v002.json")


def test_versao_invalida():
    with pytest.raises(ValueError):
        chave_resultado(
            "DOC-001",
            StatusProcessamento.PROCESSADO,
            0,
        )


def test_extensao_invalida():
    with pytest.raises(ValueError):
        chave_documento("DOC-001", "exe")

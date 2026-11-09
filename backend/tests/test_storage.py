import pytest

from app.storage.mock_storage import MockStorage


def test_salvar_e_ler_documento():
    storage = MockStorage()

    storage.salvar(
        "recebidos/DOC-001/original.txt",
        b"Documento ficticio",
    )

    resultado = storage.ler("recebidos/DOC-001/original.txt")

    assert resultado == b"Documento ficticio"


def test_documento_inexistente():
    storage = MockStorage()

    resultado = storage.ler("documento-inexistente")

    assert resultado is None


def test_listar_por_prefixo():
    storage = MockStorage()

    storage.salvar("recebidos/DOC-001.txt", b"Texto 1")
    storage.salvar("recebidos/DOC-002.txt", b"Texto 2")
    storage.salvar("processados/DOC-003.json", b"{}")

    resultado = storage.listar("recebidos/")

    assert len(resultado) == 2
    assert "recebidos/DOC-001.txt" in resultado
    assert "recebidos/DOC-002.txt" in resultado


def test_chave_vazia():
    storage = MockStorage()

    with pytest.raises(ValueError):
        storage.salvar("", b"Documento ficticio")


def test_verificar_saude():
    storage = MockStorage()

    assert storage.verificar_saude() is True

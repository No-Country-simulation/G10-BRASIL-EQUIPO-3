import pytest

from app.storage.fault_storage import MockStorageComFalha


def test_falha_ao_salvar():
    storage = MockStorageComFalha(falha_em="salvar")

    with pytest.raises(OSError):
        storage.salvar("documento.txt", b"conteudo")

    assert storage.ler("documento.txt") is None


def test_falha_ao_ler():
    storage = MockStorageComFalha()
    storage.salvar("documento.txt", b"conteudo")

    storage.falha_em = "ler"

    with pytest.raises(OSError):
        storage.ler("documento.txt")


def test_falha_ao_listar():
    storage = MockStorageComFalha(falha_em="listar")

    with pytest.raises(OSError):
        storage.listar()


def test_falha_na_verificacao_de_saude():
    storage = MockStorageComFalha(falha_em="saude")

    assert storage.verificar_saude() is False


def test_storage_sem_falhas():
    storage = MockStorageComFalha()

    storage.salvar("documento.txt", b"conteudo")

    assert storage.ler("documento.txt") == b"conteudo"
    assert storage.listar() == ["documento.txt"]
    assert storage.verificar_saude() is True

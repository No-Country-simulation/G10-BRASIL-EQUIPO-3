import pytest

from app.storage.local_storage import MockStorageLocal
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


def test_storage_local_salvar_e_ler(tmp_path):
    storage = MockStorageLocal(tmp_path)

    storage.salvar(
        "recebidos/DOC-001/original.txt",
        b"Documento ficticio",
    )

    resultado = storage.ler("recebidos/DOC-001/original.txt")

    assert resultado == b"Documento ficticio"


def test_storage_local_persiste_entre_instancias(tmp_path):
    primeiro = MockStorageLocal(tmp_path)

    primeiro.salvar(
        "recebidos/DOC-002/original.txt",
        b"Documento persistido",
    )

    segundo = MockStorageLocal(tmp_path)

    resultado = segundo.ler("recebidos/DOC-002/original.txt")

    assert resultado == b"Documento persistido"


def test_storage_local_listar(tmp_path):
    storage = MockStorageLocal(tmp_path)

    storage.salvar("recebidos/DOC-001.txt", b"Um")
    storage.salvar("recebidos/DOC-002.txt", b"Dois")
    storage.salvar("processados/DOC-003.json", b"{}")

    resultado = storage.listar("recebidos/")

    assert len(resultado) == 2


def test_storage_local_bloqueia_caminho_invalido(tmp_path):
    import pytest

    storage = MockStorageLocal(tmp_path)

    with pytest.raises(ValueError):
        storage.salvar("../fora.txt", b"conteudo")


def test_storage_local_verificar_saude(tmp_path):
    storage = MockStorageLocal(tmp_path)

    assert storage.verificar_saude() is True


@pytest.mark.parametrize("tipo_storage", ["memoria", "local"])
def test_nao_sobrescrever_documento(tipo_storage, tmp_path):
    storage = MockStorage() if tipo_storage == "memoria" else MockStorageLocal(tmp_path)
    chave = "processados/DOC-001/resultado_v001.json"

    storage.salvar(chave, b'{"versao": 1}')

    with pytest.raises(FileExistsError):
        storage.salvar(chave, b'{"versao": 2}')

    assert storage.ler(chave) == b'{"versao": 1}'


@pytest.mark.parametrize("tipo_storage", ["memoria", "local"])
def test_permite_salvar_versoes_diferentes(tipo_storage, tmp_path):
    storage = MockStorage() if tipo_storage == "memoria" else MockStorageLocal(tmp_path)
    storage.salvar(
        "processados/DOC-001/resultado_v001.json",
        b'{"versao": 1}',
    )

    storage.salvar(
        "processados/DOC-001/resultado_v002.json",
        b'{"versao": 2}',
    )

    assert len(storage.listar("processados/DOC-001/")) == 2

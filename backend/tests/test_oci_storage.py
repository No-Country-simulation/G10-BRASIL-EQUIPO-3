
from io import BytesIO
from types import SimpleNamespace
from unittest.mock import MagicMock

import pytest
from oci.exceptions import ServiceError

from app.storage.oci_storage import OCIStorage


@pytest.fixture
def storage_oci():
    """Cria o adaptador sem usar credenciais reais."""
    storage = OCIStorage.__new__(OCIStorage)
    storage.namespace = "namespace-teste"
    storage.bucket = "bucket-teste"
    storage._client = MagicMock()
    return storage


def test_oci_salvar_documento(storage_oci):
    chave = "recebidos/DOC-001/original.txt"
    conteudo = b"Documento ficticio"

    storage_oci.salvar(chave, conteudo)

    storage_oci._client.put_object.assert_called_once()

    args, kwargs = storage_oci._client.put_object.call_args

    assert args[0] == "namespace-teste"
    assert args[1] == "bucket-teste"
    assert args[2] == chave
    assert isinstance(args[3], BytesIO)
    assert args[3].getvalue() == conteudo
    assert kwargs["content_length"] == len(conteudo)
    assert kwargs["if_none_match"] == "*"


def test_oci_ler_documento(storage_oci):
    conteudo = b"Documento recuperado"

    storage_oci._client.get_object.return_value = (
        SimpleNamespace(data=BytesIO(conteudo))
    )

    resultado = storage_oci.ler(
        "recebidos/DOC-001/original.txt"
    )

    assert resultado == conteudo


def test_oci_documento_inexistente(storage_oci):
    storage_oci._client.get_object.side_effect = ServiceError(
        status=404,
        code="ObjectNotFound",
        headers={},
        message="Objeto nao encontrado",
    )

    resultado = storage_oci.ler(
        "recebidos/DOC-INEXISTENTE/original.txt"
    )

    assert resultado is None


def test_oci_listar_por_prefixo(storage_oci):
    objetos = [
        SimpleNamespace(name="recebidos/DOC-002/original.txt"),
        SimpleNamespace(name="recebidos/DOC-001/original.txt"),
    ]

    storage_oci._client.list_objects.return_value = (
        SimpleNamespace(
            data=SimpleNamespace(
                objects=objetos,
                next_start_with=None,
            )
        )
    )

    resultado = storage_oci.listar("recebidos/")

    assert resultado == [
        "recebidos/DOC-001/original.txt",
        "recebidos/DOC-002/original.txt",
    ]


def test_oci_bloqueia_sobrescrita(storage_oci):
    storage_oci._client.put_object.side_effect = ServiceError(
        status=412,
        code="PreconditionFailed",
        headers={},
        message="Objeto ja existe",
    )

    with pytest.raises(FileExistsError):
        storage_oci.salvar(
            "recebidos/DOC-001/original.txt",
            b"Conteudo diferente",
        )


@pytest.mark.parametrize(
    "chave",
    [
        "",
        "../segredo.txt",
        "/documento.txt",
        r"..\segredo.txt",
        "recebidos//documento.txt",
    ],
)
def test_oci_rejeita_chaves_invalidas(storage_oci, chave):
    with pytest.raises(ValueError):
        storage_oci.salvar(chave, b"conteudo")

    storage_oci._client.put_object.assert_not_called()


def test_oci_listar_com_paginacao(storage_oci):
    primeira_pagina = SimpleNamespace(
        data=SimpleNamespace(
            objects=[
                SimpleNamespace(name="recebidos/DOC-002/original.txt")
            ],
            next_start_with="pagina-2",
        )
    )

    segunda_pagina = SimpleNamespace(
        data=SimpleNamespace(
            objects=[
                SimpleNamespace(name="recebidos/DOC-001/original.txt")
            ],
            next_start_with=None,
        )
    )

    storage_oci._client.list_objects.side_effect = [
        primeira_pagina,
        segunda_pagina,
    ]

    resultado = storage_oci.listar("recebidos/")

    assert resultado == [
        "recebidos/DOC-001/original.txt",
        "recebidos/DOC-002/original.txt",
    ]

    assert storage_oci._client.list_objects.call_count == 2


def test_oci_falha_ao_salvar_retorna_oserror(storage_oci):
    storage_oci._client.put_object.side_effect = ServiceError(
        status=503,
        code="ServiceUnavailable",
        headers={},
        message="Servico indisponivel",
    )

    with pytest.raises(OSError, match="Falha ao acessar"):
        storage_oci.salvar(
            "recebidos/DOC-001/original.txt",
            b"Documento ficticio",
        )


def test_oci_verificar_saude_com_falha(storage_oci):
    storage_oci._client.list_objects.side_effect = ServiceError(
        status=503,
        code="ServiceUnavailable",
        headers={},
        message="Servico indisponivel",
    )

    assert storage_oci.verificar_saude() is False


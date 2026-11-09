from app.schemas.enums import StatusProcessamento
from app.schemas.output import RespostaTriagem
from app.storage.mock_storage import MockStorage
from app.storage.resultados import recuperar_resultado, salvar_resultado


def criar_resposta_teste() -> RespostaTriagem:
    return RespostaTriagem(
        documento_id="DOC-001",
        status=StatusProcessamento.RECEBIDO,
        versao_resultado=1,
    )


def test_salvar_e_recuperar_resultado():
    storage = MockStorage()
    resposta = criar_resposta_teste()

    chave = salvar_resultado(storage, resposta)

    recuperado = recuperar_resultado(storage, chave)

    assert recuperado is not None
    assert recuperado.documento_id == resposta.documento_id
    assert recuperado.status == resposta.status
    assert recuperado.versao_resultado == 1


def test_recuperar_resultado_inexistente():
    storage = MockStorage()

    recuperado = recuperar_resultado(
        storage,
        "recebidos/DOC-999/resultado_v001.json",
    )

    assert recuperado is None

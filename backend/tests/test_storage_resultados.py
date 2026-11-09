from app.core.config import Settings
from app.schemas.enums import CanalOrigem, StatusProcessamento
from app.schemas.input import DocumentoRecebido
from app.schemas.output import RespostaTriagem
from app.services.triage_service import processar_documento
from app.storage.mock_storage import MockStorage
from app.storage.resultados import (
    recuperar_resultado,
    recuperar_resultado_mais_recente,
    salvar_resultado,
)


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


def test_persistir_resultado_real_do_langgraph():
    storage = MockStorage()

    documento = DocumentoRecebido(
        documento_id="DOC-TESTE-001",
        tipo_arquivo="TXT",
        canal_origem=CanalOrigem.OUTRO,
        conteudo=b"Documento clinico ficticio para teste.",
        nome_arquivo="teste.txt",
    )

    configuracao = Settings(
        llm_provider="mock",
        storage_backend="mock",
    )

    resposta = processar_documento(
        documento,
        configuracao,
    )

    chave = salvar_resultado(storage, resposta)
    recuperado = recuperar_resultado(storage, chave)

    assert recuperado is not None
    assert recuperado.documento_id == resposta.documento_id
    assert recuperado.status == resposta.status
    assert recuperado.versao_resultado == resposta.versao_resultado

    assert recuperado.model_dump(exclude={"armazenamento_oci"}) == resposta.model_dump(
        exclude={"armazenamento_oci"}
    )


def test_recuperar_versao_mais_recente():
    storage = MockStorage()

    for versao in [1, 2, 3]:
        resposta = RespostaTriagem(
            documento_id="DOC-001",
            status=StatusProcessamento.RECEBIDO,
            versao_resultado=versao,
        )
        salvar_resultado(storage, resposta)

    recuperado = recuperar_resultado_mais_recente(storage, "DOC-001")

    assert recuperado is not None
    assert recuperado.versao_resultado == 3


def test_recuperar_documento_inexistente():
    storage = MockStorage()

    recuperado = recuperar_resultado_mais_recente(storage, "DOC-999")

    assert recuperado is None


def test_recuperar_apenas_documento_solicitado():
    storage = MockStorage()

    for documento_id, versao in [
        ("DOC-001", 1),
        ("DOC-002", 5),
    ]:
        resposta = RespostaTriagem(
            documento_id=documento_id,
            status=StatusProcessamento.RECEBIDO,
            versao_resultado=versao,
        )
        salvar_resultado(storage, resposta)

    recuperado = recuperar_resultado_mais_recente(storage, "DOC-001")

    assert recuperado is not None
    assert recuperado.documento_id == "DOC-001"
    assert recuperado.versao_resultado == 1

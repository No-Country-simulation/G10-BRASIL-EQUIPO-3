from app.schemas.enums import StatusProcessamento
from app.schemas.output import RespostaTriagem
from app.storage.mock_storage import MockStorage
from app.storage.resultados import recuperar_resultado, salvar_resultado
from app.core.config import Settings
from app.schemas.enums import CanalOrigem
from app.schemas.input import DocumentoRecebido
from app.services.triage_service import processar_documento


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

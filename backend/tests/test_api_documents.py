from pathlib import Path
from types import SimpleNamespace
from unittest.mock import Mock

import pytest
from fastapi.testclient import TestClient

from app.main import app, criar_app
from app.schemas.input import DocumentoRecebido

client = TestClient(app)


def test_triagem_chama_servico(monkeypatch):
    servico_simulado = Mock(side_effect=RuntimeError("Teste de chamada ao serviço"))

    monkeypatch.setattr(
        "app.api.documents.processar_documento",
        servico_simulado,
    )

    resposta = client.post(
        "/api/v1/documents/triage",
        json={
            "tipo_arquivo": "TXT",
            "documento_texto": "Laudo ficticio para teste.",
            "canal_origem": "AMBULATORIO",
        },
    )

    assert resposta.status_code == 500
    assert servico_simulado.call_count == 1


def test_documento_sem_texto():
    resposta = client.post(
        "/api/v1/documents/triage",
        json={
            "tipo_arquivo": "TXT",
            "documento_texto": "",
            "canal_origem": "AMBULATORIO",
        },
    )
    assert resposta.status_code == 422


def test_canal_origem_invalido():
    resposta = client.post(
        "/api/v1/documents/triage",
        json={
            "tipo_arquivo": "TXT",
            "documento_texto": "Documento ficticio.",
            "canal_origem": "CANAL_INEXISTENTE",
        },
    )
    assert resposta.status_code == 422


def test_upload_txt_chama_servico(monkeypatch):
    servico_simulado = Mock(side_effect=RuntimeError("Falha simulada"))
    monkeypatch.setattr(
        "app.api.documents.processar_documento",
        servico_simulado,
    )

    resposta = client.post(
        "/api/v1/documents/triage/upload",
        data={
            "tipo_arquivo": "TXT",
            "canal_origem": "AMBULATORIO",
        },
        files={
            "arquivo": (
                "documento.txt",
                b"Documento clinico ficticio.",
                "text/plain",
            )
        },
    )

    assert resposta.status_code == 500
    servico_simulado.assert_called_once()

    documento = servico_simulado.call_args.args[0]
    assert isinstance(documento, DocumentoRecebido)
    assert documento.conteudo == b"Documento clinico ficticio."
    assert documento.nome_arquivo == "documento.txt"


def test_upload_arquivo_vazio():
    resposta = client.post(
        "/api/v1/documents/triage/upload",
        data={
            "tipo_arquivo": "TXT",
            "canal_origem": "AMBULATORIO",
        },
        files={"arquivo": ("vazio.txt", b"", "text/plain")},
    )

    assert resposta.status_code == 422


def test_upload_acima_do_limite(monkeypatch):
    monkeypatch.setattr(
        "app.api.documents.carregar_configuracao",
        lambda: SimpleNamespace(max_upload_size_bytes=4),
    )

    resposta = client.post(
        "/api/v1/documents/triage/upload",
        data={
            "tipo_arquivo": "TXT",
            "canal_origem": "AMBULATORIO",
        },
        files={
            "arquivo": (
                "grande.txt",
                b"Documento maior que o limite.",
                "text/plain",
            )
        },
    )

    assert resposta.status_code == 413


def test_upload_txt_integracao_com_langgraph(monkeypatch):
    # Garante que nenhuma IA externa seja utilizada.
    monkeypatch.setenv("LLM_PROVIDER", "mock")
    monkeypatch.setenv("STORAGE_BACKEND", "mock")

    resposta = client.post(
        "/api/v1/documents/triage/upload",
        data={
            "tipo_arquivo": "TXT",
            "canal_origem": "AMBULATORIO",
        },
        files={
            "arquivo": (
                "laudo_ficticio.txt",
                b"LAUDO MEDICO FICTICIO. Exame de rotina. Conclusao: sem alteracoes relevantes.",
                "text/plain",
            )
        },
    )

    assert resposta.status_code == 200, resposta.text

    dados = resposta.json()

    # Verifica se a API devolveu a estrutura de triagem.
    assert dados["documento_id"].startswith("DOC-")
    assert dados["canal_origem"] == "AMBULATORIO"
    assert dados["versao_resultado"] == 1

    # Confirma que o provedor foi o simulado.
    assert dados["origem_analise"]["provedor"] == "mock"
    assert dados["origem_analise"]["dados_de_teste"] is True

    # Verifica se houve uma decisao de roteamento.
    assert dados["decisao_roteamento"] is not None
    assert dados["status"] in ("processado", "em_auditoria")

    # A persistencia ainda pertence as fases seguintes.
    assert dados["armazenamento_oci"] is None


@pytest.mark.parametrize(
    ("nome_arquivo", "tipo_arquivo", "mime_type"),
    [
        ("mediflow_laudo_teste.pdf", "PDF", "application/pdf"),
        ("mediflow_laudo_teste.png", "PNG", "image/png"),
        ("mediflow_laudo_teste.jpg", "JPEG", "image/jpeg"),
    ],
)
def test_upload_formatos_integracao(
    monkeypatch,
    nome_arquivo,
    tipo_arquivo,
    mime_type,
):
    monkeypatch.setenv("LLM_PROVIDER", "mock")
    monkeypatch.setenv("STORAGE_BACKEND", "mock")

    caminho = Path(__file__).resolve().parent / "fixtures" / nome_arquivo

    with caminho.open("rb") as arquivo:
        resposta = client.post(
            "/api/v1/documents/triage/upload",
            data={
                "tipo_arquivo": tipo_arquivo,
                "canal_origem": "AMBULATORIO",
            },
            files={
                "arquivo": (
                    nome_arquivo,
                    arquivo,
                    mime_type,
                )
            },
        )

    assert resposta.status_code == 200, resposta.text

    dados = resposta.json()
    assert dados["documento_id"].startswith("DOC-")
    assert dados["origem_analise"]["provedor"] == "mock"
    assert dados["origem_analise"]["dados_de_teste"] is True
    assert dados["armazenamento_oci"] is None


def test_upload_png_corrompido(monkeypatch):
    monkeypatch.setenv("LLM_PROVIDER", "mock")
    monkeypatch.setenv("STORAGE_BACKEND", "mock")

    resposta = client.post(
        "/api/v1/documents/triage/upload",
        data={
            "tipo_arquivo": "PNG",
            "canal_origem": "AMBULATORIO",
        },
        files={
            "arquivo": (
                "imagem_corrompida.png",
                b"isto nao e uma imagem PNG valida",
                "image/png",
            )
        },
    )

    assert resposta.status_code == 200, resposta.text

    dados = resposta.json()

    assert dados["status"] == "erro"
    assert dados["erro"] is not None
    assert dados["erro"]["codigo"] == "arquivo_corrompido"
    assert dados["classificacao"] is None
    assert dados["decisao_roteamento"] is None


def test_triagem_json_persiste_e_permite_consulta(monkeypatch):
    from app.schemas.enums import CanalOrigem, StatusProcessamento
    from app.schemas.output import RespostaTriagem

    app = criar_app()

    def processar_simulado(documento):
        return RespostaTriagem(
            documento_id=documento.documento_id,
            status=StatusProcessamento.RECEBIDO,
            versao_resultado=1,
        )

    monkeypatch.setattr(
        "app.api.documents.processar_documento",
        processar_simulado,
    )

    with TestClient(app) as client:
        # Vamos usar o contrato real do endpoint no teste.
        resposta_post = client.post(
            "/api/v1/documents/triage",
            json={
                "documento_id": "DOC-INTEGRACAO-001",
                "tipo_arquivo": "TXT",
                "canal_origem": CanalOrigem.OUTRO.value,
                "documento_texto": "Documento ficticio de teste.",
            },
        )

        assert resposta_post.status_code == 200

        documento_id = resposta_post.json()["documento_id"]

        resposta_get = client.get(f"/api/v1/documents/{documento_id}")

    assert resposta_get.status_code == 200
    assert resposta_get.json()["documento_id"] == documento_id
    assert resposta_get.json()["versao_resultado"] == 1


def test_upload_txt_persiste_e_permite_consulta(monkeypatch):
    monkeypatch.setenv("LLM_PROVIDER", "mock")
    monkeypatch.setenv("STORAGE_BACKEND", "mock")

    app = criar_app()

    with TestClient(app) as client:
        resposta_post = client.post(
            "/api/v1/documents/triage/upload",
            data={
                "tipo_arquivo": "TXT",
                "canal_origem": "OUTRO",
                "documento_id": "DOC-UPLOAD-001",
            },
            files={
                "arquivo": (
                    "documento_ficticio.txt",
                    b"Documento clinico ficticio para teste.",
                    "text/plain",
                ),
            },
        )

        assert resposta_post.status_code == 200

        dados_post = resposta_post.json()
        documento_id = dados_post["documento_id"]

        resposta_get = client.get(f"/api/v1/documents/{documento_id}")

    assert resposta_get.status_code == 200

    dados_get = resposta_get.json()

    assert dados_get["documento_id"] == documento_id
    assert dados_get["status"] == dados_post["status"]
    assert dados_get["versao_resultado"] == dados_post["versao_resultado"]


def test_listar_documentos_pela_api():
    app = criar_app()

    with TestClient(app) as client:
        resposta = client.get("/api/v1/documents")

    assert resposta.status_code == 200
    assert resposta.json() == []


def test_revisar_documento_inexistente():
    app = criar_app()

    with TestClient(app) as client:
        resposta = client.post(
            "/api/v1/documents/DOC-INEXISTENTE/review",
            json={
                "decisao": "aprovar",
                "justificativa": "Revisao de teste.",
                "correcoes": [],
                "revisor": "Revisor de teste",
                "versao_resultado_base": 1,
            },
        )

    assert resposta.status_code == 404
    assert resposta.json()["detail"] == "Documento nao encontrado."


def test_aprovar_documento_cria_nova_versao(monkeypatch):
    monkeypatch.setenv("LLM_PROVIDER", "mock")
    monkeypatch.setenv("STORAGE_BACKEND", "mock")

    app = criar_app()

    with TestClient(app) as client:
        resposta_triagem = client.post(
            "/api/v1/documents/triage/upload",
            data={
                "tipo_arquivo": "TXT",
                "canal_origem": "OUTRO",
                "documento_id": "DOC-REVISAO-001",
            },
            files={
                "arquivo": (
                    "documento_ficticio.txt",
                    b"Documento clinico ficticio, sem dados reais.",
                    "text/plain",
                ),
            },
        )

        assert resposta_triagem.status_code == 200

        dados_iniciais = resposta_triagem.json()
        assert dados_iniciais["status"] == "em_auditoria"

        resposta_revisao = client.post(
            "/api/v1/documents/DOC-REVISAO-001/review",
            json={
                "decisao": "aprovar",
                "justificativa": "Documento conferido.",
                "correcoes": [],
                "revisor": "Revisor de teste",
                "versao_resultado_base": dados_iniciais["versao_resultado"],
            },
        )

        assert resposta_revisao.status_code == 200

        dados_revisados = resposta_revisao.json()

        assert dados_revisados["versao_resultado"] == (dados_iniciais["versao_resultado"] + 1)
        assert len(dados_revisados["historico_revisao"]) == 1

        resposta_consulta = client.get("/api/v1/documents/DOC-REVISAO-001")

        assert resposta_consulta.status_code == 200
        assert resposta_consulta.json()["versao_resultado"] == 2


def test_revisao_com_versao_desatualizada(monkeypatch):
    monkeypatch.setenv("LLM_PROVIDER", "mock")
    monkeypatch.setenv("STORAGE_BACKEND", "mock")

    app = criar_app()

    with TestClient(app) as client:
        resposta_triagem = client.post(
            "/api/v1/documents/triage/upload",
            data={
                "tipo_arquivo": "TXT",
                "canal_origem": "OUTRO",
                "documento_id": "DOC-CONFLITO-001",
            },
            files={
                "arquivo": (
                    "documento_ficticio.txt",
                    b"Documento clinico ficticio para teste.",
                    "text/plain",
                ),
            },
        )

        assert resposta_triagem.status_code == 200

        versao_inicial = resposta_triagem.json()["versao_resultado"]

        revisao = {
            "decisao": "aprovar",
            "justificativa": "Documento conferido.",
            "correcoes": [],
            "revisor": "Revisor de teste",
            "versao_resultado_base": versao_inicial,
        }

        primeira_revisao = client.post(
            "/api/v1/documents/DOC-CONFLITO-001/review",
            json=revisao,
        )

        assert primeira_revisao.status_code == 200

        segunda_revisao = client.post(
            "/api/v1/documents/DOC-CONFLITO-001/review",
            json=revisao,
        )

        assert segunda_revisao.status_code == 409

        consulta = client.get("/api/v1/documents/DOC-CONFLITO-001")

        assert consulta.status_code == 200
        assert consulta.json()["versao_resultado"] == (versao_inicial + 1)


def test_rejeitar_documento_cria_nova_versao(monkeypatch):
    monkeypatch.setenv("LLM_PROVIDER", "mock")
    monkeypatch.setenv("STORAGE_BACKEND", "mock")

    app = criar_app()

    with TestClient(app) as client:
        resposta_triagem = client.post(
            "/api/v1/documents/triage/upload",
            data={
                "tipo_arquivo": "TXT",
                "canal_origem": "OUTRO",
                "documento_id": "DOC-REJEICAO-001",
            },
            files={
                "arquivo": (
                    "documento_ficticio.txt",
                    b"Documento clinico ficticio, sem dados reais.",
                    "text/plain",
                ),
            },
        )

        assert resposta_triagem.status_code == 200

        dados_iniciais = resposta_triagem.json()
        assert dados_iniciais["status"] == "em_auditoria"

        resposta_revisao = client.post(
            "/api/v1/documents/DOC-REJEICAO-001/review",
            json={
                "decisao": "rejeitar",
                "justificativa": "Documento incompleto para processamento.",
                "correcoes": [],
                "revisor": "Revisor de teste",
                "versao_resultado_base": dados_iniciais["versao_resultado"],
            },
        )

        assert resposta_revisao.status_code == 200

        dados_revisados = resposta_revisao.json()

        assert dados_revisados["status"] == "rejeitado"
        assert dados_revisados["versao_resultado"] == (dados_iniciais["versao_resultado"] + 1)

        assert len(dados_revisados["historico_revisao"]) == 1

        registro = dados_revisados["historico_revisao"][0]

        assert registro["decisao"] == "rejeitar"
        assert registro["justificativa"] == ("Documento incompleto para processamento.")

        resposta_consulta = client.get("/api/v1/documents/DOC-REJEICAO-001")

        assert resposta_consulta.status_code == 200
        assert resposta_consulta.json()["status"] == "rejeitado"
        assert resposta_consulta.json()["versao_resultado"] == (
            dados_iniciais["versao_resultado"] + 1
        )


def test_rejeicao_sem_justificativa_retorna_422():
    app = criar_app()

    with TestClient(app) as client:
        resposta = client.post(
            "/api/v1/documents/DOC-TESTE-001/review",
            json={
                "decisao": "rejeitar",
                "correcoes": [],
                "revisor": "Revisor de teste",
                "versao_resultado_base": 1,
            },
        )

    assert resposta.status_code == 422


def test_documento_aprovado_nao_pode_ser_revisado_novamente(monkeypatch):
    monkeypatch.setenv("LLM_PROVIDER", "mock")
    monkeypatch.setenv("STORAGE_BACKEND", "mock")

    app = criar_app()

    with TestClient(app) as client:
        triagem = client.post(
            "/api/v1/documents/triage/upload",
            data={
                "tipo_arquivo": "TXT",
                "canal_origem": "OUTRO",
                "documento_id": "DOC-ESTADO-FINAL-001",
            },
            files={
                "arquivo": (
                    "documento_ficticio.txt",
                    b"Documento clinico ficticio para teste.",
                    "text/plain",
                ),
            },
        )

        assert triagem.status_code == 200

        revisao = {
            "decisao": "aprovar",
            "justificativa": "Documento conferido.",
            "correcoes": [],
            "revisor": "Revisor de teste",
            "versao_resultado_base": triagem.json()["versao_resultado"],
        }

        primeira = client.post(
            "/api/v1/documents/DOC-ESTADO-FINAL-001/review",
            json=revisao,
        )

        assert primeira.status_code == 200
        assert primeira.json()["status"] == "aprovado_auditoria"

        # Utiliza a versao atual para testar a regra de estado final,
        # e nao apenas o conflito de versoes.
        revisao["versao_resultado_base"] = primeira.json()["versao_resultado"]

        segunda = client.post(
            "/api/v1/documents/DOC-ESTADO-FINAL-001/review",
            json=revisao,
        )

        assert segunda.status_code == 409

        consulta = client.get("/api/v1/documents/DOC-ESTADO-FINAL-001")

        assert consulta.status_code == 200
        assert consulta.json()["versao_resultado"] == primeira.json()["versao_resultado"]


def test_upload_armazena_arquivo_original(monkeypatch):
    monkeypatch.setenv("LLM_PROVIDER", "mock")
    monkeypatch.setenv("STORAGE_BACKEND", "mock")

    app = criar_app()

    conteudo_original = b"Documento clinico ficticio para armazenamento."

    with TestClient(app) as client:
        resposta = client.post(
            "/api/v1/documents/triage/upload",
            data={
                "tipo_arquivo": "TXT",
                "canal_origem": "OUTRO",
                "documento_id": "DOC-ORIGINAL-001",
            },
            files={
                "arquivo": (
                    "documento_ficticio.txt",
                    conteudo_original,
                    "text/plain",
                ),
            },
        )

        assert resposta.status_code == 200

        storage = app.state.storage

        conteudo_salvo = storage.ler("recebidos/DOC-ORIGINAL-001/original.txt")

        assert conteudo_salvo == conteudo_original


def test_upload_duplicado_nao_sobrescreve_original(monkeypatch):
    monkeypatch.setenv("LLM_PROVIDER", "mock")
    monkeypatch.setenv("STORAGE_BACKEND", "mock")

    app = criar_app()

    def enviar_upload(conteudo):
        return client.post(
            "/api/v1/documents/triage/upload",
            data={
                "tipo_arquivo": "TXT",
                "canal_origem": "OUTRO",
                "documento_id": "DOC-DUPLICADO-001",
            },
            files={
                "arquivo": (
                    "documento_ficticio.txt",
                    conteudo,
                    "text/plain",
                ),
            },
        )

    with TestClient(app) as client:
        primeiro = enviar_upload(b"Primeiro documento ficticio.")
        segundo = enviar_upload(b"Segundo documento ficticio.")

        conteudo_salvo = app.state.storage.ler("recebidos/DOC-DUPLICADO-001/original.txt")

    assert primeiro.status_code == 200
    assert segundo.status_code == 409
    assert conteudo_salvo == b"Primeiro documento ficticio."


def test_upload_falha_armazenamento_retorna_503(monkeypatch):
    from app.storage.fault_storage import MockStorageComFalha

    app = criar_app()

    # Simula falha em qualquer tentativa de gravacao.
    app.state.storage = MockStorageComFalha(falha_em="salvar")

    processamento_executado = False

    def processar_simulado(*args, **kwargs):
        nonlocal processamento_executado
        processamento_executado = True
        raise AssertionError("O processamento nao deveria ser executado.")

    monkeypatch.setattr(
        "app.api.documents.processar_documento",
        processar_simulado,
    )

    with TestClient(app) as client:
        resposta = client.post(
            "/api/v1/documents/triage/upload",
            data={
                "tipo_arquivo": "TXT",
                "canal_origem": "OUTRO",
                "documento_id": "DOC-FALHA-001",
            },
            files={
                "arquivo": (
                    "documento_ficticio.txt",
                    b"Documento ficticio para teste de falha.",
                    "text/plain",
                ),
            },
        )

    assert resposta.status_code == 503
    assert processamento_executado is False
    assert app.state.storage.listar() == []


def test_upload_falha_ao_salvar_resultado_retorna_503(monkeypatch):
    from app.storage.mock_storage import MockStorage

    monkeypatch.setenv("LLM_PROVIDER", "mock")
    monkeypatch.setenv("STORAGE_BACKEND", "mock")

    app = criar_app()

    class StorageFalhaResultado(MockStorage):
        def salvar(self, chave: str, conteudo: bytes) -> None:
            if chave.endswith(".json"):
                raise OSError("Falha simulada ao salvar resultado.")

            super().salvar(chave, conteudo)

    app.state.storage = StorageFalhaResultado()

    with TestClient(app) as client:
        resposta = client.post(
            "/api/v1/documents/triage/upload",
            data={
                "tipo_arquivo": "TXT",
                "canal_origem": "OUTRO",
                "documento_id": "DOC-FALHA-RESULTADO-001",
            },
            files={
                "arquivo": (
                    "documento_ficticio.txt",
                    b"Documento clinico ficticio para teste.",
                    "text/plain",
                ),
            },
        )

        assert resposta.status_code == 503

        storage = app.state.storage

        original = storage.ler("recebidos/DOC-FALHA-RESULTADO-001/original.txt")

        resultados = [chave for chave in storage.listar() if chave.endswith(".json")]

        assert original == b"Documento clinico ficticio para teste."
        assert resultados == []


@pytest.mark.parametrize(
    ("nome_arquivo", "tipo_arquivo", "mime_type", "extensao"),
    [
        ("mediflow_laudo_teste.pdf", "PDF", "application/pdf", "pdf"),
        ("mediflow_laudo_teste.png", "PNG", "image/png", "png"),
        ("mediflow_laudo_teste.jpg", "JPEG", "image/jpeg", "jpeg"),
    ],
)
def test_upload_formatos_persistem_originais(
    monkeypatch,
    nome_arquivo,
    tipo_arquivo,
    mime_type,
    extensao,
):
    monkeypatch.setenv("LLM_PROVIDER", "mock")
    monkeypatch.setenv("STORAGE_BACKEND", "mock")

    app = criar_app()

    caminho = Path(__file__).parent / "fixtures" / nome_arquivo
    conteudo_original = caminho.read_bytes()

    documento_id = f"DOC-ORIGINAL-{tipo_arquivo}"

    with TestClient(app) as client:
        resposta = client.post(
            "/api/v1/documents/triage/upload",
            data={
                "tipo_arquivo": tipo_arquivo,
                "canal_origem": "AMBULATORIO",
                "documento_id": documento_id,
            },
            files={
                "arquivo": (
                    nome_arquivo,
                    conteudo_original,
                    mime_type,
                ),
            },
        )

        assert resposta.status_code == 200, resposta.text

        chave = f"recebidos/{documento_id}/original.{extensao}"

        conteudo_salvo = app.state.storage.ler(chave)

        assert conteudo_salvo == conteudo_original


def test_api_com_storage_local_persiste_entre_instancias(
    monkeypatch,
    tmp_path,
):
    from app.storage.local_storage import MockStorageLocal

    monkeypatch.setenv("LLM_PROVIDER", "mock")
    monkeypatch.setenv("STORAGE_BACKEND", "mock")

    diretorio = tmp_path / "documentos"
    documento_id = "DOC-LOCAL-API-001"
    conteudo_original = b"Documento clinico ficticio para teste local."

    # Primeira instancia da aplicacao.
    app_primeira = criar_app()
    app_primeira.state.storage = MockStorageLocal(diretorio)

    with TestClient(app_primeira) as client:
        resposta_upload = client.post(
            "/api/v1/documents/triage/upload",
            data={
                "tipo_arquivo": "TXT",
                "canal_origem": "OUTRO",
                "documento_id": documento_id,
            },
            files={
                "arquivo": (
                    "documento_ficticio.txt",
                    conteudo_original,
                    "text/plain",
                ),
            },
        )

        assert resposta_upload.status_code == 200, resposta_upload.text

        dados_iniciais = resposta_upload.json()

    # Outra instancia da aplicacao usando a mesma pasta.
    app_segunda = criar_app()
    app_segunda.state.storage = MockStorageLocal(diretorio)

    with TestClient(app_segunda) as client:
        resposta_consulta = client.get(f"/api/v1/documents/{documento_id}")

        assert resposta_consulta.status_code == 200

        dados_recuperados = resposta_consulta.json()

    assert dados_recuperados["documento_id"] == documento_id
    assert dados_recuperados["status"] == dados_iniciais["status"]
    assert dados_recuperados["versao_resultado"] == (dados_iniciais["versao_resultado"])

    # Verifica os bytes do arquivo original.
    conteudo_salvo = app_segunda.state.storage.ler(f"recebidos/{documento_id}/original.txt")

    assert conteudo_salvo == conteudo_original


def test_criar_app_seleciona_storage_local(monkeypatch, tmp_path):
    from app.storage.local_storage import MockStorageLocal

    diretorio = tmp_path / "storage_local"

    monkeypatch.setenv("STORAGE_BACKEND", "local")
    monkeypatch.setenv("STORAGE_LOCAL_DIR", str(diretorio))
    monkeypatch.setenv("LLM_PROVIDER", "mock")

    app = criar_app()

    assert isinstance(app.state.storage, MockStorageLocal)
    assert app.state.storage.diretorio == diretorio
    assert diretorio.is_dir()


def test_criar_app_seleciona_storage_mock(monkeypatch):
    from app.storage.mock_storage import MockStorage

    monkeypatch.setenv("STORAGE_BACKEND", "mock")

    app = criar_app()

    assert isinstance(app.state.storage, MockStorage)


def test_criar_app_nao_substitui_oci_por_mock(monkeypatch):
    monkeypatch.setenv("STORAGE_BACKEND", "oci")
    monkeypatch.setenv("OCI_NAMESPACE", "namespace-teste")
    monkeypatch.setenv("OCI_REGION", "regiao-teste")
    monkeypatch.setenv("OCI_BUCKET", "bucket-teste")

    with pytest.raises(
        RuntimeError,
        match="OCI ainda nao esta integrado",
    ):
        criar_app()

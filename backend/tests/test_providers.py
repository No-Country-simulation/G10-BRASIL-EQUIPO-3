from types import SimpleNamespace

import pytest
from google.genai import errors
from pydantic import SecretStr

from app.core.config import Settings
from app.ingestion.base import DocumentoNormalizado
from app.providers import ErroProvedor, MockLLMProvider, criar_provedor
from app.providers.gemini import GeminiProvider
from app.schemas.classification import ClassificacaoDocumento
from app.schemas.enums import CodigoErro, Prioridade, TipoDocumento
from app.schemas.extraction import DadosExtraidos


class FakeModels:
    def __init__(self, respostas):
        self.respostas = iter(respostas)
        self.chamadas = []

    def generate_content(self, **kwargs):
        self.chamadas.append(kwargs)
        resposta = next(self.respostas)
        if isinstance(resposta, Exception):
            raise resposta
        return resposta


class FakeClient:
    def __init__(self, respostas):
        self.models = FakeModels(respostas)


def config_gemini():
    return Settings(
        llm_provider="gemini",
        llm_model="gemini-3.8-flash",
        llm_api_key=SecretStr("chave-sintetica-para-teste"),
        llm_timeout_seconds=12,
    )


def classificacao_urgente():
    return {
        "tipo_documento": "laudo_exame",
        "prioridade": "urgente",
        "urgente": True,
        "score_confianca_classificacao": 0.94,
        "sinais_urgencia": [
            {
                "origem": "llm",
                "descricao": "Possível achado urgente",
                "evidencia": "Achado urgente descrito",
            }
        ],
    }


def test_mock_entrega_resultados_sinteticos_e_rastreaveis():
    provedor = MockLLMProvider()
    classificacao = provedor.classificar(DocumentoNormalizado(texto="não interpretado"))
    dados = provedor.extrair(DocumentoNormalizado(texto="não interpretado"), classificacao)

    assert classificacao.tipo_documento is TipoDocumento.INDETERMINADO
    assert classificacao.prioridade is Prioridade.ROTINA
    assert dados.paciente.nome.valor is None
    assert provedor.origem_analise.provedor == "mock"
    assert provedor.origem_analise.dados_de_teste is True


def test_mock_devolve_copias_para_evitar_mutacao_do_fixture():
    esperado = ClassificacaoDocumento.model_validate(classificacao_urgente())
    provedor = MockLLMProvider(classificacao=esperado)

    primeiro = provedor.classificar(DocumentoNormalizado(texto=""))
    primeiro.sinais_urgencia.clear()
    segundo = provedor.classificar(DocumentoNormalizado(texto=""))

    assert len(segundo.sinais_urgencia) == 1


def test_factory_seleciona_mock_quando_configurado():
    assert isinstance(criar_provedor(Settings(llm_provider="mock")), MockLLMProvider)


def test_gemini_faz_classificacao_e_extracao_com_schemas():
    client = FakeClient(
        [
            SimpleNamespace(parsed=classificacao_urgente(), text=None),
            SimpleNamespace(parsed={}, text=None),
        ]
    )
    provedor = GeminiProvider(config_gemini(), client=client)
    documento = DocumentoNormalizado(texto="Laudo sintético", imagens_png=(b"\x89PNG",))

    classificacao = provedor.classificar(documento)
    dados = provedor.extrair(documento, classificacao)

    assert classificacao.urgente is True
    assert isinstance(dados, DadosExtraidos)
    assert len(client.models.chamadas) == 2
    primeira, segunda = client.models.chamadas
    assert primeira["model"] == "gemini-3.8-flash"
    assert primeira["config"].response_mime_type == "application/json"
    assert primeira["config"].response_schema is None
    assert primeira["config"].response_json_schema["additionalProperties"] is False
    assert "additional_properties" not in primeira["config"].response_json_schema
    assert "tipo_documento" in primeira["config"].response_json_schema["properties"]
    assert "tipo_documento" in primeira["config"].response_json_schema["required"]
    assert segunda["config"].response_json_schema["title"] == "DadosExtraidos"
    assert provedor.origem_analise.dados_de_teste is False


def test_gemini_anexa_imagem_png_multimodal():
    client = FakeClient([SimpleNamespace(parsed=classificacao_urgente(), text=None)])
    provedor = GeminiProvider(config_gemini(), client=client)

    provedor.classificar(DocumentoNormalizado(imagens_png=(b"imagem-sintetica",)))

    partes = client.models.chamadas[0]["contents"]
    assert len(partes) == 2
    assert partes[1].inline_data.mime_type == "image/png"


def test_gemini_traduz_timeout_sem_expor_excecao_externa():
    client = FakeClient([TimeoutError("mensagem técnica com possível segredo")])
    provedor = GeminiProvider(config_gemini(), client=client)

    with pytest.raises(ErroProvedor) as erro:
        provedor.classificar(DocumentoNormalizado(texto="laudo sintético"))

    assert erro.value.codigo is CodigoErro.PROVEDOR_TIMEOUT
    assert "segredo" not in str(erro.value)


def test_gemini_traduz_timeout_http():
    erro_api = errors.APIError(code=504, response_json={"error": {"message": "timeout"}})
    provedor = GeminiProvider(config_gemini(), client=FakeClient([erro_api]))

    with pytest.raises(ErroProvedor) as erro:
        provedor.classificar(DocumentoNormalizado(texto="laudo sintético"))

    assert erro.value.codigo is CodigoErro.PROVEDOR_TIMEOUT


@pytest.mark.parametrize(
    "resposta",
    [
        SimpleNamespace(parsed=None, text=None),
        SimpleNamespace(parsed={"tipo_documento": "inválido"}, text=None),
    ],
)
def test_gemini_rejeita_resposta_vazia_ou_invalida(resposta):
    provedor = GeminiProvider(config_gemini(), client=FakeClient([resposta]))

    with pytest.raises(ErroProvedor) as erro:
        provedor.classificar(DocumentoNormalizado(texto="laudo sintético"))

    assert erro.value.codigo is CodigoErro.RESPOSTA_INVALIDA_PROVEDOR


def test_gemini_rejeita_documento_vazio_antes_da_chamada():
    client = FakeClient([])
    provedor = GeminiProvider(config_gemini(), client=client)

    with pytest.raises(ErroProvedor) as erro:
        provedor.classificar(DocumentoNormalizado())

    assert erro.value.codigo is CodigoErro.ARQUIVO_INVALIDO
    assert client.models.chamadas == []

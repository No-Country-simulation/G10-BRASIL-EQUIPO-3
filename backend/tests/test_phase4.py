from datetime import date

import pytest

from app.core.config import Settings
from app.providers.mock_provider import MockLLMProvider
from app.rules.consistency import validar_resultado
from app.rules.urgency import aplicar_regras_urgencia
from app.schemas.classification import ClassificacaoDocumento, SinalUrgencia
from app.schemas.enums import (
    CanalOrigem,
    CodigoErro,
    CodigoValidacao,
    DecisaoRevisao,
    Destino,
    OrigemSinal,
    Prioridade,
    StatusProcessamento,
    TipoArquivo,
    TipoDocumento,
)
from app.schemas.extraction import (
    CampoData,
    CampoTexto,
    DadosExtraidos,
    DatasRelevantes,
    Medicamento,
    Paciente,
    ProfissionalSolicitante,
)
from app.schemas.input import DocumentoRecebido
from app.schemas.review import CorrecaoCampoEntrada, RequisicaoRevisao
from app.services.review_service import registrar_revisao
from app.services.triage_service import TriageService


def campo_texto(valor: str, texto: str, confianca: float = 0.95) -> CampoTexto:
    return CampoTexto(valor=valor, confianca=confianca, evidencia=texto)


def receita_dados(crm: str = "145892", score_crm: float = 0.95) -> DadosExtraidos:
    return DadosExtraidos(
        paciente=Paciente(nome=campo_texto("Ana Souza", "Ana Souza")),
        medico_solicitante=ProfissionalSolicitante(
            nome=campo_texto("Dr. Rui Lima", "Dr. Rui Lima"),
            crm=campo_texto(crm, crm, score_crm),
            uf_crm=campo_texto("SP", "SP"),
        ),
        medicamentos=[
            Medicamento(
                nome=campo_texto("dipirona", "dipirona"),
                dosagem=campo_texto("500 mg", "500 mg"),
                posologia=campo_texto("1 comprimido a cada 8 horas", "1 comprimido a cada 8 horas"),
            )
        ],
        datas=DatasRelevantes(
            emissao=CampoData(
                valor=date(2026, 10, 2),
                confianca=0.95,
                evidencia="2026-10-02",
            )
        ),
    )


def classificacao(
    tipo: TipoDocumento = TipoDocumento.RECEITA_MEDICA,
    *,
    urgente: bool = False,
    score: float = 0.95,
    sinal: str | None = None,
) -> ClassificacaoDocumento:
    return ClassificacaoDocumento(
        tipo_documento=tipo,
        prioridade=Prioridade.URGENTE if urgente else Prioridade.ROTINA,
        urgente=urgente,
        score_confianca_classificacao=score,
        sinais_urgencia=(
            [
                SinalUrgencia(
                    origem=OrigemSinal.LLM,
                    descricao="Possível achado urgente",
                    evidencia=sinal,
                )
            ]
            if sinal
            else []
        ),
    )


def documento(texto: str, documento_id: str = "DOC-FASE4") -> DocumentoRecebido:
    return DocumentoRecebido(
        documento_id=documento_id,
        tipo_arquivo=TipoArquivo.TXT,
        canal_origem=CanalOrigem.AMBULATORIO,
        texto=texto,
    )


TEXTO_RECEITA = (
    "Ana Souza; Dr. Rui Lima; CRM 145892; UF SP; dipirona; 500 mg; "
    "1 comprimido a cada 8 horas; 2026-10-02"
)


class ProvedorContador(MockLLMProvider):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.chamadas_classificacao = 0
        self.chamadas_extracao = 0

    def classificar(self, documento):
        self.chamadas_classificacao += 1
        return super().classificar(documento)

    def extrair(self, documento, classificacao):
        self.chamadas_extracao += 1
        return super().extrair(documento, classificacao)


def test_cenario_1_receita_completa_rota_para_farmacia():
    provedor = MockLLMProvider(classificacao(), receita_dados())
    resposta = TriageService(Settings(llm_provider="mock"), provedor).processar(
        documento(TEXTO_RECEITA)
    )

    assert resposta.status is StatusProcessamento.PROCESSADO
    assert resposta.decisao_roteamento is not None
    decisao = resposta.decisao_roteamento
    assert decisao.destino is Destino.FARMACIA_HOSPITALAR
    assert decisao.requer_auditoria_humana is False
    assert resposta.validacoes == []


def test_cenario_2_urgencia_confiavel_vai_a_emergencia_com_alerta():
    texto = "Paciente Ana Souza. Achado: TEP agudo."
    dados = DadosExtraidos(paciente=Paciente(nome=campo_texto("Ana Souza", "Ana Souza")))
    provider = MockLLMProvider(
        classificacao(TipoDocumento.LAUDO_EXAME, urgente=True, sinal="TEP agudo"), dados
    )
    resposta = TriageService(Settings(llm_provider="mock"), provider).processar(documento(texto))

    assert resposta.status is StatusProcessamento.PROCESSADO
    assert resposta.decisao_roteamento is not None
    decisao = resposta.decisao_roteamento
    assert decisao.destino is Destino.FILA_EMERGENCIA_MEDICA
    assert decisao.notificacao_gerada is not None


def test_cenario_3_campo_obrigatorio_com_baixa_confianca_vai_a_revisao():
    provider = MockLLMProvider(classificacao(), receita_dados(score_crm=0.45))
    resposta = TriageService(Settings(llm_provider="mock"), provider).processar(
        documento(TEXTO_RECEITA)
    )

    assert resposta.status is StatusProcessamento.EM_AUDITORIA
    assert resposta.decisao_roteamento is not None
    decisao = resposta.decisao_roteamento
    assert decisao.destino is Destino.FILA_REVISAO_HUMANA
    assert any(item.codigo is CodigoValidacao.BAIXA_CONFIANCA for item in resposta.validacoes)


def test_cenario_4_urgencia_com_paciente_ilegivel_vai_a_fila_prioritaria():
    texto = "Paciente ilegível. Achado: TEP agudo."
    dados = DadosExtraidos(paciente=Paciente(nome=CampoTexto.ilegivel("nome ilegível")))
    provider = MockLLMProvider(
        classificacao(TipoDocumento.LAUDO_EXAME, urgente=True, sinal="TEP agudo"), dados
    )
    resposta = TriageService(Settings(llm_provider="mock"), provider).processar(documento(texto))

    assert resposta.status is StatusProcessamento.EM_AUDITORIA
    assert resposta.decisao_roteamento is not None
    decisao = resposta.decisao_roteamento
    assert decisao.destino is Destino.FILA_REVISAO_HUMANA_PRIORITARIA
    assert decisao.urgente is True


def test_cenario_5_arquivo_invalido_encerra_sem_chamar_provedor():
    provider = ProvedorContador()
    entrada = DocumentoRecebido(
        documento_id="DOC-INVALIDO",
        tipo_arquivo=TipoArquivo.PNG,
        canal_origem=CanalOrigem.AMBULATORIO,
        conteudo=b"nao e uma imagem",
    )
    resposta = TriageService(Settings(llm_provider="mock"), provider).processar(entrada)

    assert resposta.status is StatusProcessamento.ERRO
    assert resposta.erro is not None
    assert resposta.erro.codigo is CodigoErro.ARQUIVO_CORROMPIDO
    assert resposta.classificacao is None
    assert resposta.decisao_roteamento is None
    assert provider.chamadas_classificacao == 0
    assert provider.chamadas_extracao == 0


def test_cenario_6_revisao_aprova_com_correcao_e_sem_nova_chamada_ia():
    provider = ProvedorContador(classificacao(), receita_dados(crm="12", score_crm=0.45))
    service = TriageService(Settings(llm_provider="mock"), provider)
    resposta_inicial = service.processar(documento(TEXTO_RECEITA))
    revisada = registrar_revisao(
        resposta_inicial,
        RequisicaoRevisao(
            decisao=DecisaoRevisao.APROVAR,
            justificativa="CRM conferido no documento original.",
            correcoes=[
                CorrecaoCampoEntrada(campo="medico_solicitante.crm", valor_posterior="145892")
            ],
            revisor="revisor-1",
            versao_resultado_base=resposta_inicial.versao_resultado,
        ),
    )

    assert revisada.status is StatusProcessamento.APROVADO_AUDITORIA
    assert revisada.versao_resultado == resposta_inicial.versao_resultado + 1
    assert revisada.dados_extraidos is not None
    assert revisada.decisao_roteamento is not None
    dados = revisada.dados_extraidos
    decisao = revisada.decisao_roteamento
    assert dados.medico_solicitante.crm.valor == "145892"
    assert dados.medico_solicitante.crm.revisado_por_humano is True
    assert decisao.destino is Destino.FARMACIA_HOSPITALAR
    assert len(revisada.historico_revisao) == 1
    assert provider.chamadas_classificacao == 1
    assert provider.chamadas_extracao == 1


def test_rejeicao_exige_justificativa_e_mantem_documento_na_fila():
    provider = MockLLMProvider(classificacao(), receita_dados(score_crm=0.45))
    resposta = TriageService(Settings(llm_provider="mock"), provider).processar(
        documento(TEXTO_RECEITA)
    )
    with pytest.raises(ValueError, match="justificativa"):
        RequisicaoRevisao(
            decisao=DecisaoRevisao.REJEITAR,
            versao_resultado_base=resposta.versao_resultado,
        )

    rejeitada = registrar_revisao(
        resposta,
        RequisicaoRevisao(
            decisao=DecisaoRevisao.REJEITAR,
            justificativa="Dados incompatíveis com o documento.",
            versao_resultado_base=resposta.versao_resultado,
        ),
    )
    assert rejeitada.status is StatusProcessamento.REJEITADO
    assert rejeitada.decisao_roteamento is not None
    decisao = rejeitada.decisao_roteamento
    assert decisao.destino is Destino.FILA_REVISAO_HUMANA


def test_rerroteamento_urgente_nao_confunde_mencao_negada():
    base = classificacao()
    ajustada = aplicar_regras_urgencia(base, "Sem sinais de TEP agudo.", ["tep agudo"])
    assert ajustada.urgente is False

    # A negação anterior separada por vírgula não deve suprimir um achado positivo posterior.
    ajustada = aplicar_regras_urgencia(
        base,
        "Sem evidência de pneumonia, mas TEP agudo confirmado.",
        ["tep agudo"],
    )
    assert ajustada.urgente is True


def test_validacao_detecta_cid10_invalido_e_alta_antes_da_admissao():
    dados = DadosExtraidos(
        cid10_documentado=campo_texto("CID-ERRADO", "CID-ERRADO"),
        datas=DatasRelevantes(
            admissao=CampoData(valor=date(2026, 10, 5), confianca=0.9, evidencia="2026-10-05"),
            alta=CampoData(valor=date(2026, 10, 1), confianca=0.9, evidencia="2026-10-01"),
        ),
    )
    achados = validar_resultado(
        classificacao(TipoDocumento.RELATORIO_ALTA_INTERNACAO),
        dados,
        "CID-ERRADO 2026-10-05 2026-10-01",
        0.8,
    )
    codigos = {item.codigo for item in achados}
    assert CodigoValidacao.FORMATO_INVALIDO in codigos
    assert CodigoValidacao.CONTRADICAO in codigos


def test_versao_desatualizada_impede_revisao():
    provider = MockLLMProvider(classificacao(), receita_dados(score_crm=0.45))
    resposta = TriageService(Settings(llm_provider="mock"), provider).processar(
        documento(TEXTO_RECEITA)
    )
    with pytest.raises(ValueError, match="desatualizada"):
        registrar_revisao(
            resposta,
            RequisicaoRevisao(
                decisao=DecisaoRevisao.APROVAR,
                versao_resultado_base=resposta.versao_resultado + 1,
            ),
        )

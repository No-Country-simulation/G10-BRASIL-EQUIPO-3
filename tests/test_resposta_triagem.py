
import pytest
from pydantic import ValidationError

from backend.schema import (
    RespostaTriagem,
    DecisaoRoteamento,
    ArmazenamentoOCI,
)


def test_resposta_documento_recebido():
    resposta = RespostaTriagem(
        documento_id="DOC-001",
        status="recebido"
    )

    assert resposta.documento_id == "DOC-001"
    assert resposta.status.value == "recebido"
    assert resposta.classificacao is None
    assert resposta.historico_revisao == []


def test_resposta_em_auditoria():
    resposta = RespostaTriagem(
        documento_id="DOC-002",
        status="em_auditoria",
        decisao_roteamento=DecisaoRoteamento(
            destino_principal="Fila_Revisao_Humana_Prioritaria",
            requer_auditoria_humana=True,
            justificativa_roteamento="Possivel urgencia."
        ),
        armazenamento_oci=ArmazenamentoOCI(
            persistido=False
        )
    )

    assert resposta.status.value == "em_auditoria"
    assert resposta.decisao_roteamento.requer_auditoria_humana
    assert resposta.armazenamento_oci.persistido is False


def test_status_invalido():
    with pytest.raises(ValidationError):
        RespostaTriagem(
            documento_id="DOC-003",
            status="finalizado"
        )


def test_destino_invalido():
    with pytest.raises(ValidationError):
        DecisaoRoteamento(
            destino_principal="Setor_Desconhecido",
            requer_auditoria_humana=False,
            justificativa_roteamento="Teste."
        )

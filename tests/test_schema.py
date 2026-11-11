import pytest
from pydantic import ValidationError

from backend.schema import Classificacao


def test_score_valido():
    classificacao = Classificacao(
        tipo_documento="Laudo de Exame",
        nivel_prioridade="Rotina",
        score_confianca_classificacao=0.95
    )

    assert classificacao.score_confianca_classificacao == 0.95


def test_score_invalido():
    with pytest.raises(ValidationError):
        Classificacao(
            tipo_documento="Laudo de Exame",
            nivel_prioridade="Rotina",
            score_confianca_classificacao=1.5
        )
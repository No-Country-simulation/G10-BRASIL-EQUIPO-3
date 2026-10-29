"""Configuração base compartilhada por todos os contratos Pydantic."""

from __future__ import annotations

from typing import Annotated

from pydantic import BaseModel, ConfigDict, Field

# Score/indicador de confiança: sempre entre 0 e 1 (NaN e infinitos são rejeitados).
Score = Annotated[float, Field(ge=0, le=1, allow_inf_nan=False)]


class ModeloContrato(BaseModel):
    """Base dos contratos: rejeita campos desconhecidos e remove espaços nas bordas das strings."""

    model_config = ConfigDict(extra="forbid", str_strip_whitespace=True)

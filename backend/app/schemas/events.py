"""Eventos gerados pelo pipeline.

`NotificacaoAlerta` representa um evento estruturado efetivamente CRIADO (e persistido junto ao
resultado). Ela não prova entrega a ninguém: canais externos (Slack, e-mail, n8n) estão fora do
escopo do backend do MVP.
"""

from __future__ import annotations

from pydantic import AwareDatetime, Field

from app.schemas.base import ModeloContrato
from app.schemas.enums import CanalNotificacao
from app.schemas.input import DocumentoId


class NotificacaoAlerta(ModeloContrato):
    canal: CanalNotificacao
    mensagem: str = Field(min_length=1, max_length=1000)
    gerada_em: AwareDatetime
    documento_id: DocumentoId
    # Trechos do documento que sustentam o alerta (conferência rápida por um humano).
    evidencias: list[str] = Field(default_factory=list, max_length=20)

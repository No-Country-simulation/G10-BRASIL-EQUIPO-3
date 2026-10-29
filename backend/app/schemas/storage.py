"""Contrato de armazenamento.

`persistido = True` só é válido com confirmação da operação de gravação. O modo indica
explicitamente se o objeto está no armazenamento simulado (`mock`) ou no OCI (`oci_real`).
"""

from __future__ import annotations

from typing import Self

from pydantic import Field, model_validator

from app.schemas.base import ModeloContrato
from app.schemas.enums import ModoArmazenamento, StatusBackup


class ArmazenamentoOCI(ModeloContrato):
    bucket: str | None = Field(default=None, min_length=1, max_length=255)
    caminho_objeto: str | None = Field(default=None, min_length=1, max_length=1024)
    referencia_documento: str | None = Field(default=None, min_length=1, max_length=1024)
    referencia_resultado: str | None = Field(default=None, min_length=1, max_length=1024)
    persistido: bool
    status_backup: StatusBackup
    modo_armazenamento: ModoArmazenamento

    @model_validator(mode="after")
    def _persistencia_coerente(self) -> Self:
        sucesso = self.status_backup is StatusBackup.SUCESSO
        if self.persistido != sucesso:
            raise ValueError("`persistido` e `status_backup` são inconsistentes")
        if self.persistido and not (
            self.bucket and self.caminho_objeto and self.referencia_resultado
        ):
            raise ValueError("persistência confirmada exige bucket, caminho e referência")
        return self

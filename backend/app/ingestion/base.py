"""Tipos e falhas seguras compartilhadas pela ingestão."""

from __future__ import annotations

from dataclasses import dataclass
from typing import Literal

from app.schemas.enums import CodigoErro


@dataclass(frozen=True, slots=True)
class DocumentoNormalizado:
    """Texto extraído e imagens PNG para páginas que precisam de leitura multimodal."""

    texto: str | None = None
    imagens_png: tuple[bytes, ...] = ()


class ErroIngestao(Exception):
    """Falha de ingestão com código estável e mensagem que não expõe dados do documento."""

    def __init__(self, codigo: CodigoErro | str, descricao: str) -> None:
        self.codigo = CodigoErro(codigo)
        self.descricao = descricao
        super().__init__(descricao)


FormatoImagem = Literal["PNG", "JPEG"]

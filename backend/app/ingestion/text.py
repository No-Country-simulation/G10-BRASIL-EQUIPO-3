"""Ingestão de texto já extraído ou arquivo TXT UTF-8."""

from app.ingestion.base import DocumentoNormalizado, ErroIngestao


def normalizar_texto(texto: str | bytes, limite_bytes: int) -> DocumentoNormalizado:
    if isinstance(texto, bytes):
        if len(texto) > limite_bytes:
            raise ErroIngestao("arquivo_muito_grande", "O texto excede o limite configurado.")
        try:
            valor = texto.decode("utf-8-sig", errors="strict")
        except UnicodeDecodeError as exc:
            raise ErroIngestao(
                "arquivo_invalido", "O arquivo TXT deve estar codificado em UTF-8."
            ) from exc
    else:
        if len(texto.encode("utf-8")) > limite_bytes:
            raise ErroIngestao("arquivo_muito_grande", "O texto excede o limite configurado.")
        valor = texto
    if not valor.strip() or "\x00" in valor:
        raise ErroIngestao("arquivo_invalido", "O conteúdo de texto está vazio ou inválido.")
    return DocumentoNormalizado(texto=valor)

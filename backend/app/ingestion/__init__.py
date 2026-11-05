"""Normalização segura de documentos recebidos pela API."""

from app.core.config import Settings
from app.ingestion.base import DocumentoNormalizado, ErroIngestao
from app.ingestion.images import normalizar_imagem
from app.ingestion.pdf import normalizar_pdf
from app.ingestion.text import normalizar_texto
from app.schemas.enums import TipoArquivo
from app.schemas.input import DocumentoRecebido


def ingerir_documento(
    documento: DocumentoRecebido, configuracao: Settings | None = None
) -> DocumentoNormalizado:
    """Valida o conteúdo real e o normaliza para texto e/ou imagens PNG.

    PDFs digitalizados produzem uma imagem por página sem texto, para o futuro provedor
    multimodal. Esta função não chama IA nem persiste arquivos.
    """
    config = configuracao or Settings()
    if documento.texto is not None:
        return normalizar_texto(documento.texto, config.max_upload_size_bytes)

    conteudo = documento.conteudo
    if conteudo is None:  # proteção adicional para chamadas sem contrato validado
        raise ErroIngestao("arquivo_invalido", "O documento não contém conteúdo.")
    if len(conteudo) > config.max_upload_size_bytes:
        raise ErroIngestao("arquivo_muito_grande", "O arquivo excede o limite configurado.")

    if documento.tipo_arquivo is TipoArquivo.PDF:
        return normalizar_pdf(conteudo, config.max_pdf_pages)
    if documento.tipo_arquivo in {TipoArquivo.PNG, TipoArquivo.JPEG}:
        return normalizar_imagem(conteudo, documento.tipo_arquivo)
    if documento.tipo_arquivo is TipoArquivo.TXT:
        return normalizar_texto(conteudo, config.max_upload_size_bytes)
    raise ErroIngestao("formato_nao_suportado", "O formato informado não é suportado.")


__all__ = ["DocumentoNormalizado", "ErroIngestao", "ingerir_documento"]

"""Extração de PDFs digitais e rasterização de páginas digitalizadas."""

import pymupdf

from app.ingestion.base import DocumentoNormalizado, ErroIngestao


def normalizar_pdf(conteudo: bytes, limite_paginas: int) -> DocumentoNormalizado:
    if not conteudo.startswith(b"%PDF-"):
        raise ErroIngestao("formato_nao_suportado", "O conteúdo não possui assinatura PDF válida.")
    try:
        documento = pymupdf.open(stream=conteudo, filetype="pdf")
    except (pymupdf.FileDataError, ValueError, OSError) as exc:
        raise ErroIngestao("arquivo_corrompido", "Não foi possível abrir o PDF.") from exc
    try:
        if documento.needs_pass:
            raise ErroIngestao("arquivo_invalido", "PDFs protegidos por senha não são aceitos.")
        if documento.page_count == 0:
            raise ErroIngestao("arquivo_invalido", "O PDF não contém páginas.")
        if documento.page_count > limite_paginas:
            raise ErroIngestao(
                "limite_paginas_excedido", "O PDF excede o limite de páginas configurado."
            )

        textos: list[str] = []
        imagens: list[bytes] = []
        for pagina in documento:
            texto = pagina.get_text("text").strip()
            if texto:
                textos.append(texto)
            else:
                maior_lado = max(pagina.rect.width, pagina.rect.height)
                escala = min(1.5, 4096 / maior_lado) if maior_lado > 0 else 1.0
                pixmap = pagina.get_pixmap(matrix=pymupdf.Matrix(escala, escala), alpha=False)
                imagens.append(pixmap.tobytes("png"))
        texto_unido = "\n\n".join(textos) or None
        if texto_unido is None and not imagens:
            raise ErroIngestao("arquivo_invalido", "O PDF não contém conteúdo legível.")
        return DocumentoNormalizado(texto=texto_unido, imagens_png=tuple(imagens))
    except ErroIngestao:
        raise
    except (pymupdf.FileDataError, ValueError, OSError, RuntimeError) as exc:
        raise ErroIngestao(
            "arquivo_corrompido", "Não foi possível processar as páginas do PDF."
        ) from exc
    finally:
        documento.close()

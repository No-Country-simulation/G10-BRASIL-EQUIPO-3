
import pymupdf


def extrair_texto_pdf(conteudo: bytes) -> str:
    with pymupdf.open(
        stream=conteudo,
        filetype="pdf"
    ) as documento:

        textos = []

        for pagina in documento:
            texto_pagina = pagina.get_text()
            textos.append(texto_pagina)

    return "\n".join(textos).strip()

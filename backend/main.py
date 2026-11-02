
from fastapi import FastAPI, HTTPException

from backend.schema import (
    DocumentoEntrada,
    DocumentoRecebido,
    StatusDocumento,
    TipoArquivo,
)


app = FastAPI(
    title="MediFlow API",
    description="API de triagem de documentos clínicos",
    version="0.1.0",
)


# Verifica se a API está funcionando
@app.get("/health")
def verificar_api():
    return {
        "status": "ok",
        "mensagem": "MediFlow API funcionando!"
    }


# Recebe documentos em texto
@app.post(
    "/api/documentos/texto",
    response_model=DocumentoRecebido,
)
def receber_documento(documento: DocumentoEntrada):

    if documento.tipo_arquivo != TipoArquivo.TXT:
        raise HTTPException(
            status_code=422,
            detail="Este endpoint aceita apenas TXT."
        )

    if not (documento.documento_texto or "").strip():
        raise HTTPException(
            status_code=422,
            detail="Informe um texto válido."
        )

    return DocumentoRecebido(
        documento_id=documento.documento_id,
        status=StatusDocumento.RECEBIDO,
        tipo_arquivo=documento.tipo_arquivo,
        canal_origem=documento.canal_origem,
        mensagem="Documento recebido com sucesso."
    )

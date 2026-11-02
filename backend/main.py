from uuid import uuid4

from fastapi import UploadFile, File, Form
from pydantic import BaseModel

from backend.schema import CanalOrigem
from backend.services.documentos import extrair_texto_pdf
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
    
    
# Modelo de resposta do upload
class ResultadoUpload(BaseModel):
    documento_id: str
    status: str
    nome_arquivo: str
    texto_extraido: str
    mensagem: str


@app.post(
    "/api/documentos/upload",
    response_model=ResultadoUpload
)
async def receber_pdf(
    arquivo: UploadFile = File(...),
    canal_origem: CanalOrigem = Form(...)
):
    # 1. Verificar extensão
    nome = arquivo.filename or ""

    if not nome.lower().endswith(".pdf"):
        raise HTTPException(
            status_code=415,
            detail="Apenas arquivos PDF são aceitos."
        )

    # 2. Ler o arquivo com limite de 10 MB
    limite = 10 * 1024 * 1024
    conteudo = await arquivo.read(limite + 1)

    if len(conteudo) > limite:
        raise HTTPException(
            status_code=413,
            detail="O arquivo excede o limite de 10 MB."
        )

    # 3. Verificar a assinatura básica do PDF
    if not conteudo.startswith(b"%PDF-"):
        raise HTTPException(
            status_code=422,
            detail="O conteúdo não parece ser um PDF válido."
        )

    # 4. Extrair o texto
    try:
        texto = extrair_texto_pdf(conteudo)
    except Exception:
        raise HTTPException(
            status_code=422,
            detail="Não foi possível processar o PDF."
        )

    # 5. Verificar se houve extração
    if not texto:
        raise HTTPException(
            status_code=422,
            detail="PDF sem texto extraível. Requer análise adicional."
        )

    # 6. Retornar resultado
    return ResultadoUpload(
        documento_id=str(uuid4()),
        status="recebido",
        nome_arquivo=nome,
        texto_extraido=texto,
        mensagem="PDF recebido e texto extraído com sucesso."
    )


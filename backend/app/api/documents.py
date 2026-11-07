from typing import Annotated

from fastapi import APIRouter, File, Form, HTTPException, UploadFile
from pydantic import ValidationError
from starlette.concurrency import run_in_threadpool

from app.core.config import carregar_configuracao
from app.schemas.enums import CanalOrigem, TipoArquivo
from app.schemas.input import (
    DocumentoRecebido,
    EntradaTriagem,
    gerar_documento_id,
)
from app.schemas.output import RespostaTriagem
from app.services.triage_service import processar_documento

router = APIRouter(
    prefix="/api/v1/documents",
    tags=["Documentos"],
)


@router.post("/triage", response_model=RespostaTriagem)
def realizar_triagem(entrada: EntradaTriagem):
    documento = DocumentoRecebido.de_entrada(entrada)

    try:
        return processar_documento(documento)
    except Exception as erro:
        raise HTTPException(
            status_code=500,
            detail="Erro interno durante o processamento do documento.",
        ) from erro


@router.post("/triage/upload", response_model=RespostaTriagem)
async def realizar_triagem_upload(
    arquivo: Annotated[UploadFile, File()],
    tipo_arquivo: Annotated[TipoArquivo, Form()],
    canal_origem: Annotated[CanalOrigem, Form()],
    documento_id: Annotated[str | None, Form()] = None,
):

    configuracao = carregar_configuracao()
    limite = configuracao.max_upload_size_bytes

    try:
        conteudo = await arquivo.read(limite + 1)
    finally:
        await arquivo.close()

    if len(conteudo) > limite:
        raise HTTPException(
            status_code=413,
            detail="O arquivo excede o limite permitido.",
        )

    try:
        documento = DocumentoRecebido(
            documento_id=documento_id or gerar_documento_id(),
            tipo_arquivo=tipo_arquivo,
            canal_origem=canal_origem,
            conteudo=conteudo,
            nome_arquivo=arquivo.filename,
        )
    except ValidationError as erro:
        raise HTTPException(
            status_code=422,
            detail="Os dados do documento são inválidos.",
        ) from erro

    try:
        return await run_in_threadpool(
            processar_documento,
            documento,
            configuracao,
        )
    except Exception as erro:
        raise HTTPException(
            status_code=500,
            detail="Erro interno durante o processamento do documento.",
        ) from erro

from fastapi import APIRouter, HTTPException

from app.core.config import carregar_configuracao
from app.ingestion import ErroIngestao, ingerir_documento
from app.schemas.input import DocumentoRecebido, EntradaTriagem

router = APIRouter(
    prefix="/api/v1/documents",
    tags=["Documentos"],
)


@router.post("/triage")
def realizar_triagem(entrada: EntradaTriagem):
    documento = DocumentoRecebido.de_entrada(entrada)

    try:
        ingerir_documento(
            documento,
            carregar_configuracao(),
        )
    except ErroIngestao as erro:
        raise HTTPException(
            status_code=422,
            detail="Não foi possível normalizar o documento.",
        ) from erro

    # O pipeline LangGraph será integrado posteriormente.
    raise HTTPException(
        status_code=501,
        detail="Pipeline de triagem ainda não integrado.",
    )

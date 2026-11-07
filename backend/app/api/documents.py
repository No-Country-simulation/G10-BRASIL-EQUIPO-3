
from fastapi import APIRouter, HTTPException

from app.schemas.input import DocumentoRecebido, EntradaTriagem
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

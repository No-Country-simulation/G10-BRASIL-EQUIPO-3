from fastapi import APIRouter, HTTPException
from pydantic import ValidationError

from app.core.config import carregar_configuracao

router = APIRouter(tags=["Health"])


@router.get("/ready")
def verificar_prontidao():
    try:
        config = carregar_configuracao()
    except (ValidationError, ValueError) as erro:
        raise HTTPException(
            status_code=503,
            detail="Configuracao do backend invalida.",
        ) from erro

    return {
        "status": "ready",
        "ambiente": config.app_env,
        "provedor_ia": config.llm_provider,
        "armazenamento": config.storage_backend,
        "verificacoes": {
            "configuracao": "valida",
            "conectividade_externa": "nao_verificada",
        },
    }

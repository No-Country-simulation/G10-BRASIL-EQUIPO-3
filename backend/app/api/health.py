from fastapi import APIRouter

router = APIRouter(tags=["Health"])


@router.get("/health")
def verificar_saude():
    return {"status": "ok", "mensagem": "MediFlow API funcionando"}

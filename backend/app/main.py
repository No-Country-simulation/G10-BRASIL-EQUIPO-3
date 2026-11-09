from fastapi import FastAPI

from app.api.documents import router as documents_router
from app.api.health import router as health_router
from app.api.ready import router as ready_router
from app.core.config import carregar_configuracao
from app.storage.mock_storage import MockStorage


def criar_app() -> FastAPI:
    settings = carregar_configuracao()

    app = FastAPI(
        title="MediFlow API",
        description="API de triagem inteligente de documentos clínicos",
        version="0.1.0",
    )

    app.state.settings = settings
    app.state.storage = MockStorage()

    app.include_router(health_router)
    app.include_router(documents_router)
    app.include_router(ready_router)

    return app


app = criar_app()

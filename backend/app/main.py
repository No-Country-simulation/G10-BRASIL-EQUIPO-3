from pathlib import Path
from threading import Lock

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.auth import router as auth_router
from app.api.documents import router as documents_router
from app.api.health import router as health_router
from app.api.ready import router as ready_router
from app.core.config import carregar_configuracao
from app.storage.local_storage import MockStorageLocal
from app.storage.mock_storage import MockStorage
from app.storage.oci_storage import OCIStorage


def criar_app() -> FastAPI:
    settings = carregar_configuracao()

    app = FastAPI(
        title="MediFlow API",
        description="API de triagem inteligente de documentos clínicos",
        version="0.1.0",
    )

    app.state.settings = settings
    app.state.revisao_lock = Lock()
    if settings.storage_backend == "mock":
        app.state.storage = MockStorage()

    elif settings.storage_backend == "local":
        app.state.storage = MockStorageLocal(Path(settings.storage_local_dir))

    elif settings.storage_backend == "oci":
        app.state.storage = OCIStorage(settings)

    else:
        raise RuntimeError("Backend de armazenamento nao suportado.")

    # Autenticação por cabeçalho Bearer (sem cookies), então não há credenciais de CORS.
    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.cors_origins,
        allow_methods=["GET", "POST", "OPTIONS"],
        allow_headers=["Authorization", "Content-Type", "Accept"],
    )

    app.include_router(health_router)
    app.include_router(auth_router)
    app.include_router(documents_router)
    app.include_router(ready_router)

    return app


app = criar_app()

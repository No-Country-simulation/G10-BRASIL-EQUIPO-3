from fastapi import Request

from app.storage.base import StorageBackend


def obter_storage(request: Request) -> StorageBackend:
    """Retorna o armazenamento compartilhado pela aplicacao."""

    return request.app.state.storage

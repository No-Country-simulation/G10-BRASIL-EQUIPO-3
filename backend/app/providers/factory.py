"""Criação do provedor configurado sem inicializar integrações que não serão usadas."""

from app.core.config import Settings
from app.providers.base import LLMProvider
from app.providers.gemini import GeminiProvider
from app.providers.mock_provider import MockLLMProvider


def criar_provedor(configuracao: Settings | None = None) -> LLMProvider:
    config = configuracao or Settings()
    if config.llm_provider == "mock":
        return MockLLMProvider()
    return GeminiProvider(config)

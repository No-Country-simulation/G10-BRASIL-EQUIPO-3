"""Configuração por variáveis de ambiente, validada na inicialização."""

from __future__ import annotations

from typing import Annotated, Literal, Self

from pydantic import Field, SecretStr, model_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
        env_ignore_empty=True,  # `LLM_MODEL=` vazio no .env vale como "não definido"
    )

    app_env: Literal["development", "test", "production"] = "development"

    # "mock" = provedor simulado (dados de teste). "gemini" exige modelo e chave.
    llm_provider: Literal["mock", "gemini"] = "mock"
    llm_model: str | None = None
    llm_api_key: SecretStr | None = None  # nunca aparece em repr/logs
    llm_timeout_seconds: Annotated[float, Field(gt=0, le=600)] = 30

    confidence_threshold: Annotated[float, Field(ge=0, le=1, allow_inf_nan=False)] = 0.80

    storage_backend: Literal["mock", "oci"] = "mock"
    oci_namespace: str | None = None
    oci_region: str | None = None
    oci_bucket: str | None = None
    oci_config_profile: str = "DEFAULT"

    max_upload_size_mb: Annotated[float, Field(gt=0, le=1024)] = 10
    max_pdf_pages: Annotated[int, Field(gt=0, le=1000)] = 30

    @model_validator(mode="after")
    def _dependencias_do_modo(self) -> Self:
        faltando: list[str] = []
        if self.llm_provider == "gemini":
            if not self.llm_model:
                faltando.append("LLM_MODEL")
            if self.llm_api_key is None:
                faltando.append("LLM_API_KEY")
        if self.storage_backend == "oci":
            for nome, valor in (
                ("OCI_NAMESPACE", self.oci_namespace),
                ("OCI_REGION", self.oci_region),
                ("OCI_BUCKET", self.oci_bucket),
            ):
                if not valor:
                    faltando.append(nome)
        if faltando:
            raise ValueError(
                "configuração incompleta para o modo escolhido; defina: " + ", ".join(faltando)
            )
        return self

    @property
    def max_upload_size_bytes(self) -> int:
        return int(self.max_upload_size_mb * 1024 * 1024)


def carregar_configuracao() -> Settings:
    """Lê o ambiente (e o `.env`, se existir). Levanta `ValidationError` com mensagem clara."""
    return Settings()

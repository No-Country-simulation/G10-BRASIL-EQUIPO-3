"""Configuração por variáveis de ambiente, validada na inicialização."""

from __future__ import annotations

from typing import Annotated, Literal, Self

from pydantic import BaseModel, Field, SecretStr, model_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class UsuarioAuth(BaseModel):
    """Usuário do login do MVP (`AUTH_USERS`, em JSON). A senha nunca aparece em repr/logs."""

    email: str = Field(min_length=3, max_length=254)
    senha: SecretStr
    nome: str = Field(default="Revisor", min_length=1, max_length=120)
    perfil: str = Field(default="revisor", min_length=1, max_length=50)


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
        env_ignore_empty=True,  # `LLM_MODEL=` vazio no .env vale como "não definido"
    )

    app_env: Literal["development", "test", "production"] = "development"

    # "mock" = provedor simulado (dados de teste).
    llm_provider: Literal["mock", "gemini", "groq"] = "mock"
    llm_model: str | None = None
    llm_api_key: SecretStr | None = None  # nunca aparece em repr/logs
    groq_api_key: SecretStr | None = None  # chave específica do Groq; nunca aparece em repr/logs
    llm_timeout_seconds: Annotated[float, Field(gt=0, le=600)] = 30

    confidence_threshold: Annotated[float, Field(ge=0, le=1, allow_inf_nan=False)] = 0.80
    urgency_terms: list[str] = Field(
        default_factory=lambda: [
            "tep agudo",
            "tromboembolismo pulmonar agudo",
            "correlacao clinica urgente",
        ]
    )
    high_risk_medications: list[str] = Field(default_factory=list)
    ismp_enabled: bool = False

    storage_backend: Literal["mock", "local", "oci"] = "mock"
    storage_local_dir: str = ".mediflow_storage"
    oci_namespace: str | None = None
    oci_region: str | None = None
    oci_bucket: str | None = None
    oci_config_profile: str = "DEFAULT"

    max_upload_size_mb: Annotated[float, Field(gt=0, le=1024)] = 10
    max_pdf_pages: Annotated[int, Field(gt=0, le=1000)] = 30

    # Origens permitidas pelo CORS (em desenvolvimento o proxy do Vite dispensa isto).
    cors_origins: list[str] = Field(
        default_factory=lambda: ["http://localhost:5173", "http://127.0.0.1:5173"]
    )

    # Login do MVP (desligado por padrão). Quando ligado, as rotas de documentos exigem
    # `Authorization: Bearer <token>` obtido em `POST /api/v1/auth/login`.
    auth_enabled: bool = False
    auth_secret: SecretStr | None = None  # assina os tokens; mínimo de 32 caracteres
    auth_token_ttl_minutes: Annotated[int, Field(gt=0, le=60 * 24 * 30)] = 480
    auth_users: list[UsuarioAuth] = Field(default_factory=list)

    @model_validator(mode="after")
    def _dependencias_do_modo(self) -> Self:
        faltando: list[str] = []
        if self.llm_provider == "gemini":
            if not self.llm_model:
                faltando.append("LLM_MODEL")
            if self.llm_api_key is None:
                faltando.append("LLM_API_KEY")
        if self.llm_provider == "groq":
            if not self.llm_model:
                faltando.append("LLM_MODEL")
            if self.groq_api_key is None:
                faltando.append("GROQ_API_KEY")
        if self.storage_backend == "oci":
            for nome, valor in (
                ("OCI_NAMESPACE", self.oci_namespace),
                ("OCI_REGION", self.oci_region),
                ("OCI_BUCKET", self.oci_bucket),
            ):
                if not valor:
                    faltando.append(nome)
        if self.auth_enabled:
            if self.auth_secret is None or len(self.auth_secret.get_secret_value()) < 32:
                faltando.append("AUTH_SECRET (mínimo de 32 caracteres)")
            if not self.auth_users:
                faltando.append("AUTH_USERS")
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

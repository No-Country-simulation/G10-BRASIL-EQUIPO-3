"""Login do MVP: `POST /api/v1/auth/login` e `GET /api/v1/auth/me`.

Contrato esperado pelo frontend (`frontend/src/services/auth.ts`):
  login -> {access_token, token_type, usuario: {id, nome, email, perfil}}
O recurso fica desligado (`AUTH_ENABLED=false`) até ser configurado; ver `env.example`.
"""

from __future__ import annotations

import hashlib
import hmac
from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException, Request
from pydantic import BaseModel, Field

from app.core.config import Settings, UsuarioAuth
from app.core.security import criar_token, verificar_token

router = APIRouter(prefix="/api/v1/auth", tags=["Autenticação"])


class CredenciaisLogin(BaseModel):
    email: str = Field(min_length=3, max_length=254)
    senha: str = Field(min_length=1, max_length=200)


class UsuarioPublico(BaseModel):
    id: str
    nome: str
    email: str
    perfil: str


class SessaoLogin(BaseModel):
    access_token: str
    token_type: str = "bearer"
    usuario: UsuarioPublico


def _publico(usuario: UsuarioAuth) -> UsuarioPublico:
    email = usuario.email.strip().lower()
    return UsuarioPublico(
        id=hashlib.sha256(email.encode()).hexdigest()[:12],
        nome=usuario.nome,
        email=email,
        perfil=usuario.perfil,
    )


def _configuracao(request: Request) -> Settings:
    return request.app.state.settings


def _senha_confere(informada: str, esperada: str) -> bool:
    # Comparação em tempo constante (sobre digests, para aceitar tamanhos diferentes).
    return hmac.compare_digest(
        hashlib.sha256(informada.encode()).digest(), hashlib.sha256(esperada.encode()).digest()
    )


def _autenticar(configuracao: Settings, email: str, senha: str) -> UsuarioAuth | None:
    alvo = email.strip().lower()
    encontrado: UsuarioAuth | None = None
    for usuario in configuracao.auth_users:
        if usuario.email.strip().lower() == alvo:
            encontrado = usuario
    # Sempre compara uma senha, existindo o e-mail ou não, para não revelar quais e-mails existem.
    esperada = encontrado.senha.get_secret_value() if encontrado else ""
    confere = _senha_confere(senha, esperada)
    return encontrado if (encontrado and confere) else None


@router.post("/login", response_model=SessaoLogin)
def entrar(credenciais: CredenciaisLogin, request: Request):
    configuracao = _configuracao(request)
    if not configuracao.auth_enabled:
        raise HTTPException(status_code=404, detail="Autenticacao desabilitada neste backend.")

    usuario = _autenticar(configuracao, credenciais.email, credenciais.senha)
    if usuario is None:
        raise HTTPException(status_code=401, detail="E-mail ou senha incorretos.")

    assert configuracao.auth_secret is not None  # garantido pela validação da configuração
    token = criar_token(
        usuario.email.strip().lower(),
        configuracao.auth_secret.get_secret_value(),
        configuracao.auth_token_ttl_minutes * 60,
    )
    return SessaoLogin(access_token=token, usuario=_publico(usuario))


def _extrair_bearer(request: Request) -> str | None:
    cabecalho = request.headers.get("Authorization", "")
    esquema, _, valor = cabecalho.partition(" ")
    return valor.strip() if esquema.lower() == "bearer" and valor.strip() else None


def exigir_autenticacao(request: Request) -> UsuarioAuth | None:
    """Dependência das rotas protegidas. Sem efeito quando `AUTH_ENABLED=false`."""
    configuracao = _configuracao(request)
    if not configuracao.auth_enabled:
        return None

    nao_autorizado = HTTPException(
        status_code=401,
        detail="Autenticacao necessaria ou sessao expirada.",
        headers={"WWW-Authenticate": "Bearer"},
    )
    token = _extrair_bearer(request)
    if token is None or configuracao.auth_secret is None:
        raise nao_autorizado
    email = verificar_token(token, configuracao.auth_secret.get_secret_value())
    if email is None:
        raise nao_autorizado
    for usuario in configuracao.auth_users:
        if usuario.email.strip().lower() == email:
            return usuario
    raise nao_autorizado


UsuarioAutenticado = Annotated[UsuarioAuth | None, Depends(exigir_autenticacao)]


@router.get("/me", response_model=UsuarioPublico)
def usuario_atual(usuario: UsuarioAutenticado, request: Request):
    if usuario is None:
        raise HTTPException(status_code=404, detail="Autenticacao desabilitada neste backend.")
    return _publico(usuario)

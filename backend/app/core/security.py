"""Tokens assinados (HMAC-SHA256) para o login do MVP, só com a biblioteca padrão.

Formato: ``<payload base64url>.<assinatura base64url>``; o payload é JSON com ``sub`` (e-mail) e
``exp`` (epoch, segundos). Não é um JWT completo: serve só ao par frontend/backend do projeto.
"""

from __future__ import annotations

import base64
import hashlib
import hmac
import json
import time


def _b64(dados: bytes) -> str:
    return base64.urlsafe_b64encode(dados).rstrip(b"=").decode("ascii")


def _unb64(texto: str) -> bytes:
    return base64.urlsafe_b64decode(texto + "=" * (-len(texto) % 4))


def _assinar(segredo: str, payload_b64: str) -> str:
    mac = hmac.new(segredo.encode("utf-8"), payload_b64.encode("ascii"), hashlib.sha256)
    return _b64(mac.digest())


def criar_token(email: str, segredo: str, ttl_segundos: int, agora: float | None = None) -> str:
    emitido = time.time() if agora is None else agora
    corpo = {"sub": email, "exp": int(emitido) + ttl_segundos}
    payload = _b64(json.dumps(corpo, separators=(",", ":")).encode())
    return f"{payload}.{_assinar(segredo, payload)}"


def verificar_token(token: str, segredo: str, agora: float | None = None) -> str | None:
    """Devolve o e-mail do token, ou ``None`` se for inválido, adulterado ou expirado."""
    try:
        payload, assinatura = token.split(".", 1)
        if not hmac.compare_digest(assinatura, _assinar(segredo, payload)):
            return None
        dados = json.loads(_unb64(payload))
        if not isinstance(dados, dict) or not isinstance(dados.get("sub"), str):
            return None
        exp = dados.get("exp")
        if not isinstance(exp, int) or (time.time() if agora is None else agora) >= exp:
            return None
        return dados["sub"]
    except (ValueError, UnicodeError, json.JSONDecodeError):
        return None

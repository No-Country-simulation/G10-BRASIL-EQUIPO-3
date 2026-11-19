# Integração frontend ↔ backend

Os contratos Pydantic (`backend/app/schemas/`) são a fonte de verdade; o frontend os espelha em
`frontend/src/types/dto.ts` e converte para domínio/tela em `frontend/src/adapters/`.

## Rodar tudo localmente

```bash
# 1) backend (pasta backend/, com o venv ativo e `pip install -r ../requirements.txt`)
cp env.example .env          # LLM_PROVIDER=mock e STORAGE_BACKEND=mock funcionam sem credenciais
python -m uvicorn app.main:app --port 8000

# 2) frontend (pasta frontend/)
npm install && cp .env.example .env
npm run dev                  # http://localhost:5173 — o Vite encaminha /api para :8000
```

`STORAGE_BACKEND=mock` guarda em memória (some ao reiniciar o backend). Para persistir em disco use
`STORAGE_BACKEND=local`.

## Rotas usadas pelo frontend (prefixo `/api/v1`)

| Método | Rota | Uso |
|---|---|---|
| GET | `/documents` | lista (última versão de cada documento) |
| GET | `/documents/{id}` | um documento; 404 se não existir |
| POST | `/documents/triage/upload` | PDF/PNG/JPEG (multipart); também guarda o arquivo original |
| POST | `/documents/triage` | TXT (JSON); **não** guarda arquivo original |
| POST | `/documents/{id}/review` | revisão humana; 409 se `versao_resultado_base` estiver velha |
| GET | `/documents/{id}/original` | arquivo original enviado (404 para documentos TXT) |
| POST | `/auth/login`, GET `/auth/me` | login do MVP (opcional) |

O processamento é síncrono: o POST já devolve o resultado final (`processado`, `em_auditoria` ou `erro`).

## Login (opcional)

Desligado por padrão nos dois lados. Para ligar, os **dois** precisam estar de acordo:

- backend `.env`: `AUTH_ENABLED=true`, `AUTH_SECRET` (≥ 32 caracteres) e `AUTH_USERS` (JSON);
- frontend `.env`: `VITE_AUTH_ENABLED=true`.

Com o login ligado, todas as rotas de `/documents` exigem `Authorization: Bearer <token>` (`/health` e
`/ready` continuam públicas). As senhas ficam em texto no `.env` do servidor e não há limite de
tentativas de login: adequado para MVP/demo, não para produção aberta.

## Produção / outra origem

Em desenvolvimento o proxy do Vite evita CORS. Se o frontend for servido de outra origem, defina
`VITE_API_URL` com a URL completa do backend e inclua a origem do site em `CORS_ORIGINS` no backend.

## Limitações conhecidas

- O backend **não guarda o nome do arquivo**; o frontend só o conhece no navegador que fez o envio.
- As preferências da tela de Configurações são locais ao navegador; o limiar real de confiança é o
  `CONFIDENCE_THRESHOLD` do backend.
- O front atualiza a lista por polling (não há push).

## Verificações

```bash
cd backend  && python -m pytest -q
cd frontend && npm run typecheck && npm run validar:exemplos && npm run validar:contratos
```

# MediFlow — Backend

Backend (Python) do **MediFlow — Agente Inteligente de Triagem Clínica**, projeto do Hackathon ONE.

> **Estado atual: Fases 1 e 2 concluídas (contratos e ingestão).** A ingestão valida e normaliza
> texto, TXT, PDF e imagens PNG/JPEG. API, provedores de IA, grafo LangGraph e armazenamento
> (mock e OCI) entram nas próximas fases.

## Como executar os testes

```bash
cd backend
python -m venv .venv
source .venv/bin/activate          # Windows PowerShell: .venv\Scripts\Activate.ps1
pip install -r ..\requirements.txt
python -m pytest                   # suíte completa (sem LLM e sem credenciais OCI)
ruff check . && ruff format --check .
```

Requer Python 3.11 ou superior (testado com 3.12).

## Estrutura (Fases 1 e 2)

```text
backend/
├── app/
│   ├── core/config.py        # configuração por variáveis de ambiente, validada
│   ├── ingestion/             # validação e normalização de texto, PDF e imagens
│   ├── schemas/              # contratos Pydantic (fonte de verdade)
│   └── rules/
│       ├── policy.py         # campos obrigatórios e destino por categoria
│       └── status.py         # transições de status permitidas
├── tests/                    # pytest (inclui cenários sintéticos de ingestão)
├── docs/
│   ├── contratos.md          # enums, invariantes e decisões dos contratos
│   └── exemplos/*.json       # exemplos validados automaticamente pelos testes
├── .env.example
└── pyproject.toml            # configuração do Ruff e do pytest
```

Veja `backend/docs/contratos.md` para os contratos e `docs/exemplos/` para JSONs dos seis cenários.

`app.ingestion.ingerir_documento` recebe `DocumentoRecebido` e retorna texto extraído e/ou páginas
PNG. PDFs digitais fornecem texto; páginas sem texto são rasterizadas para leitura multimodal futura.
Os limites de tamanho e páginas vêm de `app.core.config.Settings`. Falhas usam `ErroIngestao`, com
código `CodigoErro` e descrição sem conteúdo do documento.

## Segurança

- Nunca versione o `.env`. O `.env.example` não contém segredos.
- Use somente documentos **sintéticos** em testes e demonstrações.
- Os exemplos desta pasta são fictícios (nomes, CRMs, datas) e marcados como dados de teste.

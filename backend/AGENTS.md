# MediFlow — Backend

Backend (Python) do **MediFlow — Agente Inteligente de Triagem Clínica**, projeto do Hackathon ONE.

> **Estado atual: Fase 1 concluída (schemas e contratos).** API, ingestão, provedores de IA,
> grafo LangGraph e armazenamento (mock e OCI) entram nas próximas fases. Nada além dos contratos,
> da política por categoria, das transições de status e da configuração está implementado.

## Como executar os testes

```bash
cd backend
python -m venv .venv
source .venv/bin/activate          # Windows PowerShell: .venv\Scripts\Activate.ps1
pip install -r requirements-dev.txt
python -m pytest                   # suíte completa (sem LLM e sem credenciais OCI)
ruff check . && ruff format --check .
```

Requer Python 3.11 ou superior (testado com 3.12).

## Estrutura (Fase 1)

```text
backend/
├── app/
│   ├── core/config.py        # configuração por variáveis de ambiente, validada
│   ├── schemas/              # contratos Pydantic (fonte de verdade)
│   └── rules/
│       ├── policy.py         # campos obrigatórios e destino por categoria
│       └── status.py         # transições de status permitidas
├── tests/                    # pytest (+ fábricas com dados sintéticos)
├── docs/
│   ├── contratos.md          # enums, invariantes e decisões dos contratos
│   └── exemplos/*.json       # exemplos validados automaticamente pelos testes
├── .env.example
└── pyproject.toml            # configuração do Ruff e do pytest
```

Veja `docs/contratos.md` para os contratos e `docs/exemplos/` para JSONs dos seis cenários.

## Segurança

- Nunca versione o `.env`. O `.env.example` não contém segredos.
- Use somente documentos **sintéticos** em testes e demonstrações.
- Os exemplos desta pasta são fictícios (nomes, CRMs, datas) e marcados como dados de teste.

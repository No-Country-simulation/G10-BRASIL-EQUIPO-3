# MediFlow — Backend

Backend (Python) do **MediFlow — Agente Inteligente de Triagem Clínica**, projeto do Hackathon ONE.

> **Estado atual: Fases 1 e 2 concluídas; Fase 3 em validação.** Há um provedor mock determinístico
> e um adaptador Gemini substituível, mas a chamada real à API ainda precisa ser validada com sucesso.
> API REST, grafo LangGraph e armazenamento (mock e OCI) entram nas próximas fases.

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

## Estrutura (Fases 1 a 3; Gemini real pendente)

```text
backend/
├── app/
│   ├── core/config.py        # configuração por variáveis de ambiente, validada
│   ├── ingestion/             # validação e normalização de texto, PDF e imagens
│   ├── providers/             # contrato, mock, Gemini e prompts
│   ├── schemas/              # contratos Pydantic (fonte de verdade)
│   └── rules/
│       ├── policy.py         # campos obrigatórios e destino por categoria
│       └── status.py         # transições de status permitidas
├── tests/                    # pytest (ingestão e provedores, sem chamadas externas)
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

`app.providers.criar_provedor()` usa o mock por padrão (`LLM_PROVIDER=mock`). Para habilitar o
Gemini, configure `LLM_PROVIDER=gemini`, `LLM_MODEL=gemini-3.8-flash` e `LLM_API_KEY` no ambiente
ou em um `.env` local. O adaptador executa chamadas separadas de classificação e extração, valida
as respostas nos schemas Pydantic e aceita imagens PNG da ingestão. Testes não usam rede ou chave.
Documentos enviados ao modo Gemini são encaminhados ao serviço externo; use dados sintéticos nos
testes e demonstrações. A chamada real ao Gemini depende de chave válida e não foi testada contra
uma conta externa neste ambiente.

## Segurança

- Nunca versione o `.env`. O `.env.example` não contém segredos.
- Use somente documentos **sintéticos** em testes e demonstrações.
- Os exemplos desta pasta são fictícios (nomes, CRMs, datas) e marcados como dados de teste.

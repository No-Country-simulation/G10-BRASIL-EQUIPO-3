# MediFlow — Backend

Backend (Python) do **MediFlow — Agente Inteligente de Triagem Clínica**, projeto do Hackathon ONE.

> **Estado atual: Fases 1, 2 e 3 concluídas.** Os provedores mock e Gemini estão disponíveis, e a
> integração Groq foi validada com classificação e extração usando conteúdo sintético. API REST,
> grafo LangGraph e armazenamento (mock e OCI) entram nas próximas fases.

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

## Estrutura (Fases 1 a 3; Groq validado)

```text
backend/
├── app/
│   ├── core/config.py        # configuração por variáveis de ambiente, validada
│   ├── ingestion/             # validação e normalização de texto, PDF e imagens
│   ├── providers/             # contrato, mock, Gemini, Groq e prompts
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
Gemini, configure `LLM_PROVIDER=gemini`, `LLM_MODEL` e `LLM_API_KEY`. Para habilitar o Groq,
configure `LLM_PROVIDER=groq`, `LLM_MODEL=qwen/qwen3.8-27b` e `GROQ_API_KEY`. O adaptador Groq
usa saída JSON Schema estrita e aceita até três imagens PNG por solicitação com esse modelo. Ambos
os adaptadores executam chamadas separadas de classificação e extração e validam as respostas nos
schemas Pydantic. A integração Groq foi validada com conteúdo sintético; a integração Gemini permanece
disponível, mas não foi validada com uma chamada externa bem-sucedida. Testes automatizados não usam
rede ou chaves. Documentos enviados a um provedor externo são encaminhados ao serviço correspondente;
use dados sintéticos nos testes e demonstrações.

## Segurança

- Nunca versione o `.env`. O `.env.example` não contém segredos.
- Use somente documentos **sintéticos** em testes e demonstrações.
- Os exemplos desta pasta são fictícios (nomes, CRMs, datas) e marcados como dados de teste.

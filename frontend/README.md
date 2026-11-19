# MediFlow — Frontend React

Frontend do MVP MediFlow (Equipo 03). Os contratos Pydantic de `backend/app/schemas/` são a fonte de
verdade (espelhados em `src/types/dto.ts`). Integração com o backend: `../docs/INTEGRACAO_BACKEND.md`.

## Executar

```bash
npm install
cp .env.example .env      # ajuste se necessário (ver comentários no arquivo)
npm run dev               # http://localhost:5173 (encaminha /api para o backend em :8000)
npm run build             # typecheck + build de produção
```

Sem backend, para demonstração: `VITE_USE_MOCK=true` (login demo: `revisor@mediflow.demo` / `mediflow123`).

## Verificações de contrato

```bash
npm run typecheck
npm run validar:exemplos   # adapters aceitam os JSONs de backend/docs/exemplos
npm run validar:contratos  # mocks do front validam contra os schemas Pydantic reais (requer Python + deps do backend)
```

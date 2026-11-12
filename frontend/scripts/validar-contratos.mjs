#!/usr/bin/env node
/**
 * Valida os dados do modo de demonstração contra os schemas Pydantic REAIS do backend.
 *
 *   MEDIFLOW_BACKEND_DIR=../G10-BRASIL-EQUIPO-3-main/backend npm run validar:contratos
 *   (ou: node scripts/validar-contratos.mjs <caminho-para-a-pasta-backend>)
 *
 * 1. empacota src/mocks (via Vite, modo SSR) e grava o JSON de tudo que o mock produz;
 * 2. `validar_contratos.py` valida cada resposta com `RespostaTriagem` e compara as revisões
 *    simuladas com `app.services.review_service.registrar_revisao` (paridade TS ↔ Python).
 *
 * Requer Python 3.11+ com `pydantic` instalado (`pip install pydantic`).
 */
import {mkdtempSync, writeFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join, resolve} from 'node:path';
import {pathToFileURL} from 'node:url';
import {spawnSync} from 'node:child_process';
import {build} from 'vite';

const backend = resolve(process.argv[2] ?? process.env.MEDIFLOW_BACKEND_DIR ?? '../G10-BRASIL-EQUIPO-3-main/backend');
const tmp = mkdtempSync(join(tmpdir(), 'mediflow-contratos-'));

await build({
  configFile: false,
  logLevel: 'error',
  build: {ssr: resolve('scripts/export-mocks.ts'), outDir: tmp, emptyOutDir: true, rollupOptions: {output: {format: 'esm', entryFileNames: 'export-mocks.mjs'}}},
});

const {saida} = await import(pathToFileURL(join(tmp, 'export-mocks.mjs')).href);
const arquivo = join(tmp, 'mocks.json');
writeFileSync(arquivo, JSON.stringify(saida));

const py = spawnSync(process.env.PYTHON ?? 'python3', ['-I', resolve('scripts/validar_contratos.py'), backend, arquivo], {stdio: 'inherit'});
process.exit(py.status ?? 1);

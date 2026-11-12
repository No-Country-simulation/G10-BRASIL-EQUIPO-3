#!/usr/bin/env node
/**
 * Valida que os exemplos oficiais do backend são aceitos pelos adaptadores do frontend.
 *   MEDIFLOW_BACKEND_DIR=../G10-BRASIL-EQUIPO-3-main/backend npm run validar:exemplos
 */
import {mkdtempSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join, resolve} from 'node:path';
import {pathToFileURL} from 'node:url';
import {build} from 'vite';

const backend = resolve(process.argv[2] ?? process.env.MEDIFLOW_BACKEND_DIR ?? '../G10-BRASIL-EQUIPO-3-main/backend');
const tmp = mkdtempSync(join(tmpdir(), 'mediflow-exemplos-'));

await build({
  configFile: false,
  logLevel: 'error',
  build: {ssr: resolve('scripts/validar-exemplos.ts'), outDir: tmp, emptyOutDir: true, rollupOptions: {output: {format: 'esm', entryFileNames: 'validar-exemplos.mjs'}}},
});

const {executar} = await import(pathToFileURL(join(tmp, 'validar-exemplos.mjs')).href);
const {linhas, falhas} = executar(join(backend, 'docs', 'exemplos'));
linhas.forEach((l) => console.log(l));
console.log(`${linhas.length} exemplo(s) aceitos · ${falhas.length} falha(s)`);
falhas.forEach((f) => console.log(' ✗', f));
process.exit(falhas.length ? 1 : 0);

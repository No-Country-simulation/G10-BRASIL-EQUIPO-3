/**
 * Configuração de ambiente validada em um único lugar.
 *
 * Regra de segurança: o app só usa dados de demonstração quando `VITE_USE_MOCK=true`
 * está definido de forma EXPLÍCITA. Qualquer outro valor (inclusive ausente) significa
 * "API real". Assim o frontend nunca cai em mocks silenciosamente.
 */
export type DataSource = 'mock' | 'api';

const env = import.meta.env;

function parseBoolean(name: string, value: string | undefined): boolean {
  if (value === undefined || value === '') return false;
  if (value === 'true') return true;
  if (value === 'false') return false;
  console.warn(`[config] ${name}="${value}" inválido; use "true" ou "false". Assumindo "false" (API real).`);
  return false;
}

function parsePositiveNumber(name: string, value: string | undefined, fallback: number): number {
  if (value === undefined || value === '') return fallback;
  const n = Number(value);
  if (Number.isFinite(n) && n > 0) return n;
  console.warn(`[config] ${name}="${value}" inválido; usando ${fallback}.`);
  return fallback;
}

export const config = {
  dataSource: (parseBoolean('VITE_USE_MOCK', env.VITE_USE_MOCK) ? 'mock' : 'api') as DataSource,
  /** Base da API. Em desenvolvimento o Vite faz proxy de `/api` (ver vite.config.ts). */
  apiUrl: (env.VITE_API_URL || '/api').replace(/\/+$/, ''),
  /** Espelha `MAX_UPLOAD_SIZE_MB` do backend (padrão 10). Validação final é do backend. */
  maxUploadMb: parsePositiveNumber('VITE_MAX_UPLOAD_MB', env.VITE_MAX_UPLOAD_MB, 10),
  /** Intervalo de polling enquanto há documentos em `recebido`/`processando`. */
  pollIntervalMs: parsePositiveNumber('VITE_POLL_INTERVAL_MS', env.VITE_POLL_INTERVAL_MS, 1200),
} as const;

export const isMock = config.dataSource === 'mock';

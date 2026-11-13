import {config, isMock} from '../config/env';
import {ContractError} from '../adapters/toDomain';

/** A API respondeu com status de erro. `detail` é o corpo de erro do FastAPI, quando existir. */
export class ApiError extends Error {
  constructor(
    readonly status: number,
    readonly detail: string,
  ) {
    super(`API ${status}: ${detail}`);
    this.name = 'ApiError';
  }
}

/** Falha de rede / servidor fora do ar (não houve resposta HTTP). */
export class ApiUnavailableError extends Error {
  constructor(readonly url: string) {
    super(`Sem resposta da API em ${url}`);
    this.name = 'ApiUnavailableError';
  }
}

/** Erro de regra de negócio simulada no modo de demonstração (equivalente a um 409/422). */
export class MockRuleError extends ApiError {}

/** FastAPI devolve `{detail: string}` ou `{detail: [{loc, msg}]}` (422 do Pydantic). */
export function extrairDetalhe(corpo: unknown, fallback: string): string {
  if (corpo && typeof corpo === 'object' && 'detail' in corpo) {
    const d = (corpo as {detail: unknown}).detail;
    if (typeof d === 'string') return d;
    if (Array.isArray(d))
      return d
        .map((e) => {
          const item = e as {loc?: unknown[]; msg?: string};
          const onde = Array.isArray(item.loc) ? item.loc.filter((p) => p !== 'body').join('.') : '';
          return onde ? `${onde}: ${item.msg ?? 'valor inválido'}` : (item.msg ?? 'valor inválido');
        })
        .join('; ');
  }
  return fallback;
}

/** Revisão feita sobre uma versão já substituída (`versao_resultado_base` desatualizada). */
export function isConflitoDeVersao(e: unknown): boolean {
  return e instanceof ApiError && (e.status === 409 || /versao_resultado_base/i.test(e.detail));
}

/** Texto para o usuário. Nunca esconde a causa real nem finge que há dados. */
export function mensagemDeErro(e: unknown): string {
  // 502/503/504: o proxy (Vite, nginx...) não alcançou o backend.
  if (e instanceof ApiUnavailableError || (e instanceof ApiError && [502, 503, 504].includes(e.status)))
    return `Não foi possível conectar à API (${config.apiUrl}). Verifique se o backend está em execução. Para demonstrar sem backend, defina VITE_USE_MOCK=true.`;
  if (e instanceof ContractError) return e.message;
  if (e instanceof ApiError) {
    if ([404, 405, 501].includes(e.status) && (!e.detail || /^not found$|^method not allowed$/i.test(e.detail)))
      return `A API não reconheceu esta operação (HTTP ${e.status}). Os endpoints HTTP do backend ainda podem não estar implementados — veja docs/INTEGRACAO_BACKEND.md.`;
    return e.detail || `A API respondeu com erro ${e.status}.`;
  }
  if (e instanceof Error) return e.message;
  return isMock ? 'Erro inesperado na simulação.' : 'Erro inesperado.';
}

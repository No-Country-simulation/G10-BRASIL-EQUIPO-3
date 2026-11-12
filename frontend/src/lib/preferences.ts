/**
 * Preferências LOCAIS do usuário (neste navegador). Não são configurações do sistema:
 * o backend não expõe `GET/PUT /settings`. Seus valores só afetam a apresentação:
 *   - `limiarPct` / `limiarAltoPct`: cores/níveis de confiança (o roteamento real usa o
 *     `CONFIDENCE_THRESHOLD` do backend, padrão 0,80);
 *   - `revisor`: identificador INFORMADO nas revisões (o backend não o autentica).
 */
import {isMock} from '../config/env';

export interface Preferencias {
  limiarPct: number;
  limiarAltoPct: number;
  revisor: string;
}

const KEY = 'mediflow:preferencias';

export const PREFERENCIAS_PADRAO: Preferencias = {
  limiarPct: 80,
  limiarAltoPct: 90,
  revisor: isMock ? 'revisor.demo' : '',
};

export function carregarPreferencias(): Preferencias {
  try {
    const bruto = localStorage.getItem(KEY);
    if (bruto) {
      const p = JSON.parse(bruto) as Partial<Preferencias>;
      const limiar = Number(p.limiarPct);
      const alto = Number(p.limiarAltoPct);
      return {
        limiarPct: Number.isFinite(limiar) ? Math.min(100, Math.max(0, limiar)) : PREFERENCIAS_PADRAO.limiarPct,
        limiarAltoPct: Number.isFinite(alto) ? Math.min(100, Math.max(0, alto)) : PREFERENCIAS_PADRAO.limiarAltoPct,
        revisor: typeof p.revisor === 'string' ? p.revisor : PREFERENCIAS_PADRAO.revisor,
      };
    }
  } catch {
    /* localStorage indisponível ou JSON inválido */
  }
  return PREFERENCIAS_PADRAO;
}

export function salvarPreferencias(p: Preferencias) {
  try {
    localStorage.setItem(KEY, JSON.stringify(p));
  } catch {
    /* ignora: a preferência vale até recarregar a página */
  }
}

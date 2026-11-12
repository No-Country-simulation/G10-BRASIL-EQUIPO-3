import {createContext, useCallback, useContext, useMemo, useState, type ReactNode} from 'react';
import type {RegrasExibicao} from '../adapters/toView';
import {carregarPreferencias, salvarPreferencias, type Preferencias} from '../lib/preferences';

interface SettingsValue {
  preferencias: Preferencias;
  /** Limiares (0–1) usados apenas para colorir a confiança na interface. */
  regras: RegrasExibicao;
  salvar: (p: Preferencias) => void;
}

const Ctx = createContext<SettingsValue | null>(null);

/**
 * Preferências LOCAIS (neste navegador). O backend não expõe configurações: o roteamento
 * usa o `CONFIDENCE_THRESHOLD` do próprio backend, independente do que for escolhido aqui.
 */
export function SettingsProvider({children}: {children: ReactNode}) {
  const [preferencias, setPreferencias] = useState<Preferencias>(carregarPreferencias);

  const salvar = useCallback((p: Preferencias) => {
    salvarPreferencias(p);
    setPreferencias(p);
  }, []);

  const value = useMemo(
    () => ({
      preferencias,
      regras: {limiar: preferencias.limiarPct / 100, limiarAlto: preferencias.limiarAltoPct / 100},
      salvar,
    }),
    [preferencias, salvar],
  );
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useSettings() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useSettings deve ser usado dentro de SettingsProvider');
  return ctx;
}

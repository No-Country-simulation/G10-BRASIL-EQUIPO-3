import {useEffect, useState} from 'react';
import {obterOriginal, type ArquivoOriginal} from '../services/originais';
import type {DocumentoView} from '../types/view';

/**
 * Arquivo original de um documento: o enviado neste navegador (já em memória) ou, senão, o que o
 * backend guardou. `null` = não há arquivo (ex.: documento enviado como texto).
 */
export function useArquivoOriginal(doc: DocumentoView | undefined) {
  const id = doc?.id;
  const local = doc?.arquivo ?? null;
  const [remoto, setRemoto] = useState<ArquivoOriginal | null>(null);
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    setRemoto(null);
    if (!id || local) return;
    let ativo = true;
    setCarregando(true);
    obterOriginal(id)
      .then((a) => ativo && setRemoto(a))
      .catch(() => ativo && setRemoto(null)) // sem arquivo: a tela cai nas evidências citadas pela IA
      .finally(() => ativo && setCarregando(false));
    return () => {
      ativo = false;
    };
  }, [id, local]);

  return {arquivo: local ?? remoto, carregando: carregando && !local};
}

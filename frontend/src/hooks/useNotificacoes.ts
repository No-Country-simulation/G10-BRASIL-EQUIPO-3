import {useCallback, useMemo, useState} from 'react';
import {useDocuments} from '../context/DocumentsContext';
import {carregarLidas, derivarNotificacoes, salvarLidas} from '../lib/notifications';

export function useNotificacoes() {
  const {views} = useDocuments();
  const itens = useMemo(() => derivarNotificacoes(views), [views]);
  const [lidas, setLidas] = useState<Set<string>>(carregarLidas);

  const atualizar = useCallback((fn: (s: Set<string>) => Set<string>) => {
    setLidas((atual) => {
      const next = fn(new Set(atual));
      salvarLidas(next);
      return next;
    });
  }, []);

  const marcarLida = useCallback((chave: string) => atualizar((s) => s.add(chave)), [atualizar]);
  const marcarTodas = useCallback(() => atualizar((s) => (itens.forEach((i) => s.add(i.chave)), s)), [atualizar, itens]);
  const naoLidas = itens.filter((i) => !lidas.has(i.chave)).length;
  const pendentesRevisao = views.filter((d) => d.revisaoDisponivel).length;

  return {itens, lidas, naoLidas, pendentesRevisao, marcarLida, marcarTodas};
}

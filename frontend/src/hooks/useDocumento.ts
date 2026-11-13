import {useCallback, useEffect, useState} from 'react';
import {useDocuments} from '../context/DocumentsContext';
import {mensagemDeErro} from '../services/errors';
import type {DocumentoView} from '../types/view';

/**
 * Um documento por id: usa o que já está no estado compartilhado e busca a versão atual no backend
 * ao abrir a tela (ex.: link direto, ou resultado que mudou desde a listagem).
 */
export function useDocumento(id: string) {
  const {views, carregarUm} = useDocuments();
  const [erro, setErro] = useState('');
  const [buscando, setBuscando] = useState(true);

  const buscar = useCallback(async () => {
    setErro('');
    setBuscando(true);
    try {
      await carregarUm(id);
    } catch (e) {
      setErro(mensagemDeErro(e));
    } finally {
      setBuscando(false);
    }
  }, [id, carregarUm]);

  useEffect(() => void buscar(), [buscar]);

  const view: DocumentoView | undefined = views.find((v) => v.id === id);
  return {view, erro, carregando: buscando && !view, recarregar: buscar};
}

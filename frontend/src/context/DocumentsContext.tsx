import {createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode} from 'react';
import {config} from '../config/env';
import {toDocumentoView} from '../adapters/toView';
import {documentos} from '../services/documents';
import {mensagemDeErro} from '../services/errors';
import {STATUS_EM_ANDAMENTO, type Documento} from '../types/domain';
import type {CanalOrigemDTO, RequisicaoRevisaoDTO} from '../types/dto';
import type {DocumentoView} from '../types/view';
import {useSettings} from './SettingsContext';

type Carga = 'carregando' | 'pronto' | 'erro';

export interface ResultadoEnvio {
  criados: Documento[];
  falhas: {nome: string; mensagem: string}[];
}

interface DocumentsValue {
  /** Modelos de apresentação (derivados do domínio com as regras de exibição atuais). */
  views: DocumentoView[];
  carga: Carga;
  erro: string;
  /** Falha ao atualizar documentos em processamento (polling). */
  erroSincronizacao: string;
  recarregar: () => Promise<void>;
  /** Busca um documento no backend e o integra à lista. */
  carregarUm: (id: string) => Promise<Documento>;
  enviar: (arquivos: File[], canal: CanalOrigemDTO) => Promise<ResultadoEnvio>;
  /** Só atualiza a tela com o que o backend devolveu. */
  revisar: (id: string, requisicao: RequisicaoRevisaoDTO) => Promise<Documento>;
}

const Ctx = createContext<DocumentsValue | null>(null);

function mesclar(lista: Documento[], novo: Documento): Documento[] {
  return lista.some((d) => d.id === novo.id) ? lista.map((d) => (d.id === novo.id ? novo : d)) : [novo, ...lista];
}

export function DocumentsProvider({children}: {children: ReactNode}) {
  const {regras} = useSettings();
  const [docs, setDocs] = useState<Documento[]>([]);
  const [carga, setCarga] = useState<Carga>('carregando');
  const [erro, setErro] = useState('');
  const [erroSincronizacao, setErroSincronizacao] = useState('');
  const docsRef = useRef(docs);
  docsRef.current = docs;

  const integrar = useCallback((d: Documento) => setDocs((lista) => mesclar(lista, d)), []);

  const recarregar = useCallback(async () => {
    setErro('');
    try {
      setDocs(await documentos.listar());
      setCarga('pronto');
    } catch (e) {
      setErro(mensagemDeErro(e));
      setCarga('erro');
    }
  }, []);

  useEffect(() => void recarregar(), [recarregar]);

  /* Polling: só existe enquanto algum documento estiver em `recebido`/`processando`. */
  const emAndamento = docs.some((d) => STATUS_EM_ANDAMENTO.includes(d.status));
  useEffect(() => {
    if (!emAndamento) return;
    let ocupado = false;
    const timer = setInterval(async () => {
      if (ocupado) return;
      ocupado = true;
      try {
        const ids = docsRef.current.filter((d) => STATUS_EM_ANDAMENTO.includes(d.status)).map((d) => d.id);
        const atualizados = await Promise.all(ids.map((id) => documentos.obter(id)));
        setDocs((lista) => atualizados.reduce(mesclar, lista));
        setErroSincronizacao('');
      } catch (e) {
        setErroSincronizacao(mensagemDeErro(e));
      } finally {
        ocupado = false;
      }
    }, config.pollIntervalMs);
    return () => clearInterval(timer);
  }, [emAndamento]);

  const carregarUm = useCallback(
    async (id: string) => {
      const d = await documentos.obter(id);
      integrar(d);
      return d;
    },
    [integrar],
  );

  const enviar = useCallback(
    async (arquivos: File[], canal: CanalOrigemDTO): Promise<ResultadoEnvio> => {
      const resultados = await Promise.allSettled(arquivos.map((f) => documentos.enviar(f, canal)));
      const out: ResultadoEnvio = {criados: [], falhas: []};
      resultados.forEach((r, i) => {
        if (r.status === 'fulfilled') {
          out.criados.push(r.value);
          integrar(r.value);
        } else out.falhas.push({nome: arquivos[i]!.name, mensagem: mensagemDeErro(r.reason)});
      });
      return out;
    },
    [integrar],
  );

  const revisar = useCallback(
    async (id: string, requisicao: RequisicaoRevisaoDTO) => {
      const d = await documentos.revisar(id, requisicao);
      integrar(d);
      return d;
    },
    [integrar],
  );

  const views = useMemo(() => docs.map((d) => toDocumentoView(d, regras)), [docs, regras]);

  const value = useMemo(
    () => ({views, carga, erro, erroSincronizacao, recarregar, carregarUm, enviar, revisar}),
    [views, carga, erro, erroSincronizacao, recarregar, carregarUm, enviar, revisar],
  );
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useDocuments() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useDocuments deve ser usado dentro de DocumentsProvider');
  return ctx;
}

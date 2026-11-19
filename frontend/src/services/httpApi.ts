/**
 * Cliente HTTP REAL do backend (FastAPI, `backend/app/api/documents.py`).
 *
 * Rotas (prefixo `/api/v1`, que é a base `VITE_API_URL`):
 *   GET  /documents                 → RespostaTriagem[]   (última versão de cada documento)
 *   GET  /documents/{id}            → RespostaTriagem     (404 se não existir)
 *   POST /documents/triage          → RespostaTriagem     (JSON `EntradaTriagem`)
 *   POST /documents/triage/upload   → RespostaTriagem     (multipart: arquivo, tipo_arquivo, canal_origem)
 *   POST /documents/{id}/review     → RespostaTriagem     (JSON `RequisicaoRevisao`; 409 se versão/estado inválido)
 *   GET  /documents/{id}/original   → arquivo (PDF/PNG/JPEG) enviado; 404 se o documento entrou como texto
 *   POST /auth/login, GET /auth/me  → login do MVP (ver `services/auth.ts`)
 * O processamento é SÍNCRONO: a resposta do POST já traz o resultado final (processado/em_auditoria/erro).
 */
import {config} from '../config/env';
import type {MediflowApi, EnvioArquivo} from './contract';
import {ApiError, ApiUnavailableError, extrairDetalhe} from './errors';
import {lerToken, notificarNaoAutorizado} from '../lib/session';
import type {EntradaTriagemDTO, RequisicaoRevisaoDTO, RespostaTriagemDTO} from '../types/dto';

export const ROTAS = {
  documentos: '/documents',
  documento: (id: string) => `/documents/${encodeURIComponent(id)}`,
  triagemTexto: '/documents/triage',
  triagemUpload: '/documents/triage/upload',
  revisao: (id: string) => `/documents/${encodeURIComponent(id)}/review`,
  original: (id: string) => `/documents/${encodeURIComponent(id)}/original`,
} as const;

export async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  const url = `${config.apiUrl}${path}`;
  let res: Response;
  try {
    res = await fetch(url, {
      ...init,
      headers: {
        Accept: 'application/json',
        ...(init.body && !(init.body instanceof FormData) ? {'Content-Type': 'application/json'} : {}),
        ...(lerToken() ? {Authorization: `Bearer ${lerToken()}`} : {}),
        ...init.headers,
      },
    });
  } catch {
    throw new ApiUnavailableError(config.apiUrl);
  }

  const texto = await res.text();
  let corpo: unknown;
  try {
    corpo = texto ? JSON.parse(texto) : undefined;
  } catch {
    corpo = undefined; // corpo não-JSON (ex.: HTML de um proxy)
  }

  if (!res.ok) {
    if (res.status === 401 && path !== '/auth/login') notificarNaoAutorizado();
    // 5xx sem corpo JSON não veio do FastAPI (proxy sem backend, gateway...): tratar como indisponível.
    if (res.status >= 500 && corpo === undefined) throw new ApiUnavailableError(config.apiUrl);
    throw new ApiError(res.status, extrairDetalhe(corpo, texto.slice(0, 200) || res.statusText));
  }
  if (corpo === undefined) throw new ApiError(res.status, 'A API respondeu sem um corpo JSON válido.');
  return corpo as T;
}

export const httpApi: MediflowApi = {
  listarDocumentos: () => request<RespostaTriagemDTO[]>(ROTAS.documentos),

  obterDocumento: (id) => request<RespostaTriagemDTO>(ROTAS.documento(id)),

  enviarArquivo: ({arquivo, tipoArquivo, canalOrigem}: EnvioArquivo) => {
    // Campos equivalentes a `DocumentoRecebido` (input.py); o conteúdo vai como arquivo.
    const body = new FormData();
    body.append('arquivo', arquivo, arquivo.name);
    body.append('tipo_arquivo', tipoArquivo);
    body.append('canal_origem', canalOrigem);
    return request<RespostaTriagemDTO>(ROTAS.triagemUpload, {method: 'POST', body});
  },

  enviarTexto: (entrada: EntradaTriagemDTO) =>
    request<RespostaTriagemDTO>(ROTAS.triagemTexto, {method: 'POST', body: JSON.stringify(entrada)}),

  registrarRevisao: (id: string, requisicao: RequisicaoRevisaoDTO) =>
    request<RespostaTriagemDTO>(ROTAS.revisao(id), {method: 'POST', body: JSON.stringify(requisicao)}),
};

/**
 * Cliente HTTP REAL.
 *
 * As rotas abaixo são uma PROPOSTA de contrato para a equipe de backend: o repositório
 * oficial ainda não possui camada HTTP. Todas ficam concentradas em `ROTAS` para que, quando
 * o backend publicar os caminhos definitivos, só este objeto precise mudar.
 * Corpos e respostas são exatamente os schemas Pydantic (ver `types/dto.ts`).
 */
import {config} from '../config/env';
import type {MediflowApi, EnvioArquivo} from './contract';
import {ApiError, ApiUnavailableError, extrairDetalhe} from './errors';
import type {EntradaTriagemDTO, RequisicaoRevisaoDTO, RespostaTriagemDTO} from '../types/dto';

export const ROTAS = {
  /** GET → RespostaTriagem[] · POST (JSON EntradaTriagem | multipart) → RespostaTriagem */
  triagem: '/triagem',
  /** GET → RespostaTriagem */
  documento: (id: string) => `/triagem/${encodeURIComponent(id)}`,
  /** POST RequisicaoRevisao → RespostaTriagem */
  revisao: (id: string) => `/triagem/${encodeURIComponent(id)}/revisao`,
} as const;

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  const url = `${config.apiUrl}${path}`;
  let res: Response;
  try {
    res = await fetch(url, {
      ...init,
      headers: {
        Accept: 'application/json',
        ...(init.body && !(init.body instanceof FormData) ? {'Content-Type': 'application/json'} : {}),
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

  if (!res.ok) throw new ApiError(res.status, extrairDetalhe(corpo, texto.slice(0, 200) || res.statusText));
  if (corpo === undefined) throw new ApiError(res.status, 'A API respondeu sem um corpo JSON válido.');
  return corpo as T;
}

export const httpApi: MediflowApi = {
  listarDocumentos: () => request<RespostaTriagemDTO[]>(ROTAS.triagem),

  obterDocumento: (id) => request<RespostaTriagemDTO>(ROTAS.documento(id)),

  enviarArquivo: ({arquivo, tipoArquivo, canalOrigem}: EnvioArquivo) => {
    // Campos equivalentes a `DocumentoRecebido` (input.py); o conteúdo vai como arquivo.
    const body = new FormData();
    body.append('arquivo', arquivo, arquivo.name);
    body.append('tipo_arquivo', tipoArquivo);
    body.append('canal_origem', canalOrigem);
    return request<RespostaTriagemDTO>(ROTAS.triagem, {method: 'POST', body});
  },

  enviarTexto: (entrada: EntradaTriagemDTO) =>
    request<RespostaTriagemDTO>(ROTAS.triagem, {method: 'POST', body: JSON.stringify(entrada)}),

  registrarRevisao: (id: string, requisicao: RequisicaoRevisaoDTO) =>
    request<RespostaTriagemDTO>(ROTAS.revisao(id), {method: 'POST', body: JSON.stringify(requisicao)}),
};

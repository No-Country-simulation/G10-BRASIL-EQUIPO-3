/**
 * Arquivo original do documento (PDF / PNG / JPEG), servido pelo backend em
 * `GET /documents/{id}/original`.
 *
 * `<img>` e `<iframe>` não enviam o cabeçalho `Authorization`; por isso o arquivo é baixado com
 * `fetch` (com o token) e exibido por uma URL local (`blob:`). Os blobs ficam só em memória e são
 * liberados no logout, pois são documentos clínicos.
 */
import {config, isMock} from '../config/env';
import {lerToken, notificarNaoAutorizado} from '../lib/session';
import {ApiError, ApiUnavailableError, extrairDetalhe} from './errors';
import {ROTAS} from './httpApi';

export interface ArquivoOriginal {
  url: string;
  mimeType: string;
  nome: string;
}

const cache = new Map<string, Promise<ArquivoOriginal | null>>();

async function baixar(id: string): Promise<ArquivoOriginal | null> {
  const token = lerToken();
  let res: Response;
  try {
    res = await fetch(`${config.apiUrl}${ROTAS.original(id)}`, {
      headers: token ? {Authorization: `Bearer ${token}`} : {},
    });
  } catch {
    throw new ApiUnavailableError(config.apiUrl);
  }

  if (res.status === 404) return null; // documento enviado como texto: não há arquivo guardado
  if (!res.ok) {
    if (res.status === 401) notificarNaoAutorizado();
    const texto = await res.text();
    let corpo: unknown;
    try {
      corpo = texto ? JSON.parse(texto) : undefined;
    } catch {
      corpo = undefined;
    }
    throw new ApiError(res.status, extrairDetalhe(corpo, res.statusText));
  }

  const mimeType = (res.headers.get('Content-Type') ?? 'application/octet-stream').split(';')[0].trim();
  return {url: URL.createObjectURL(await res.blob()), mimeType, nome: id};
}

/** Devolve o original do backend, ou `null` se não existir. Falhas não ficam em cache (nova tentativa possível). */
export function obterOriginal(id: string): Promise<ArquivoOriginal | null> {
  if (isMock) return Promise.resolve(null); // no modo demonstração o arquivo vem do envio local
  let promessa = cache.get(id);
  if (!promessa) {
    promessa = baixar(id);
    cache.set(id, promessa);
    promessa.catch(() => cache.delete(id));
  }
  return promessa;
}

/** Libera os blobs em memória (chamado no logout). */
export function limparOriginais() {
  cache.forEach((p) => void p.then((a) => a && URL.revokeObjectURL(a.url)).catch(() => undefined));
  cache.clear();
}

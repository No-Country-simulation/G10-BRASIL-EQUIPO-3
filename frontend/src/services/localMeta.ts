/**
 * Metadados que o backend não devolve (nome do arquivo, horário de envio e o arquivo em si),
 * conhecidos somente para documentos enviados por ESTE navegador.
 * Nome e horário sobrevivem a um refresh (sessionStorage); a URL do arquivo, não.
 */
import type {MetaLocal} from '../types/domain';

const KEY = 'mediflow:meta';
const memoria = new Map<string, MetaLocal>();
let carregado = false;

function carregar() {
  if (carregado) return;
  carregado = true;
  try {
    const bruto = sessionStorage.getItem(KEY);
    if (bruto) for (const [id, m] of Object.entries(JSON.parse(bruto) as Record<string, MetaLocal>)) memoria.set(id, m);
  } catch {
    /* sessionStorage indisponível: segue só em memória */
  }
}

function persistir() {
  try {
    const serial: Record<string, MetaLocal> = {};
    memoria.forEach(({nomeArquivo, recebidoEm, mimeType}, id) => (serial[id] = {nomeArquivo, recebidoEm, mimeType}));
    sessionStorage.setItem(KEY, JSON.stringify(serial));
  } catch {
    /* ignora */
  }
}

export function lerMeta(id: string): MetaLocal {
  carregar();
  return memoria.get(id) ?? {};
}

export function gravarMeta(id: string, meta: MetaLocal) {
  carregar();
  memoria.set(id, {...memoria.get(id), ...meta});
  persistir();
}

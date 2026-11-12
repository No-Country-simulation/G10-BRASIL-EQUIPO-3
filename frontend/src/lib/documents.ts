/** Filtros, busca e ordenação sobre `DocumentoView` (nenhuma conversão de contrato aqui). */
import type {DocumentoView} from '../types/view';

export type DocFilter = 'todos' | 'processados' | 'auditoria' | 'aprovados' | 'rejeitados' | 'urgentes' | 'erros';

export const DOC_FILTERS: {id: DocFilter; label: string}[] = [
  {id: 'todos', label: 'Todos'},
  {id: 'processados', label: 'Processados'},
  {id: 'auditoria', label: 'Em auditoria'},
  {id: 'aprovados', label: 'Aprovados'},
  {id: 'rejeitados', label: 'Rejeitados'},
  {id: 'urgentes', label: 'Urgentes'},
  {id: 'erros', label: 'Com erro'},
];

/** Parâmetros usados por versões anteriores das rotas. */
const FILTROS_LEGADOS: Record<string, DocFilter> = {revisao: 'auditoria', prioridade: 'urgentes', recentes: 'todos'};

export function lerFiltro(raw: string | null): DocFilter {
  if (!raw) return 'todos';
  if (DOC_FILTERS.some((f) => f.id === raw)) return raw as DocFilter;
  return FILTROS_LEGADOS[raw] ?? 'todos';
}

export function matchesFilter(d: DocumentoView, filter: DocFilter): boolean {
  switch (filter) {
    case 'processados':
      return d.status === 'processado';
    case 'auditoria':
      return d.status === 'em_auditoria';
    case 'aprovados':
      return d.status === 'aprovado_auditoria';
    case 'rejeitados':
      return d.status === 'rejeitado';
    case 'urgentes':
      return d.urgente;
    case 'erros':
      return d.status === 'erro';
    default:
      return true;
  }
}

export function filterDocuments(docs: DocumentoView[], filter: DocFilter, query: string) {
  const q = query.trim().toLowerCase();
  return docs.filter(
    (d) =>
      matchesFilter(d, filter) &&
      (!q ||
        [d.id, d.pacienteNome, d.tipoRotulo, d.nomeArquivo, d.roteamento?.destinoRotulo]
          .filter(Boolean)
          .join(' ')
          .toLowerCase()
          .includes(q)),
  );
}

/** Aguardam decisão humana: o backend só aceita revisão em `em_auditoria`. */
export const isPending = (d: DocumentoView) => d.revisaoDisponivel;

const tempo = (d: DocumentoView) => (d.atividadeEm ? new Date(d.atividadeEm).getTime() : 0);

/** Urgentes primeiro, depois a fila prioritária; dentro de cada grupo, quem espera há mais tempo. */
export function sortByFila(docs: DocumentoView[]) {
  return [...docs].sort((a, b) => a.ordemFila - b.ordemFila || tempo(a) - tempo(b));
}

export type PrioridadeFiltro = 'todos' | 'urgente' | 'prioritaria' | 'rotina';

export function matchesPrioridade(d: DocumentoView, f: PrioridadeFiltro): boolean {
  if (f === 'urgente') return d.urgente;
  if (f === 'prioritaria') return !!d.roteamento?.prioritarioSemUrgencia;
  if (f === 'rotina') return !d.urgente && !d.roteamento?.prioritarioSemUrgencia;
  return true;
}

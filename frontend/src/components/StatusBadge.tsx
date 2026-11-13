import type {DocumentoView} from '../types/view';

/** Status de processamento do backend (`StatusProcessamento`); o texto é só apresentação. */
export function StatusBadge({doc}: {doc: Pick<DocumentoView, 'status' | 'statusRotulo'>}) {
  return <span className={`badge ${doc.status}`}>{doc.statusRotulo}</span>;
}

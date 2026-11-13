import type {DocumentoView} from '../types/view';

type Props = {doc: Pick<DocumentoView, 'urgente' | 'prioridadeRotulo' | 'roteamento'>; showRotina?: boolean};

/**
 * Prioridade CLÍNICA (`rotina`/`urgente`). Nunca exibe confiança.
 * Exceção documentada do backend: fila prioritária sem urgência (conteúdo ilegível no Pronto-Socorro).
 */
export function PriorityTag({doc, showRotina = false}: Props) {
  if (doc.urgente)
    return (
      <span className="priority urgente">
        <i aria-hidden />
        Urgente
      </span>
    );
  if (doc.roteamento?.prioritarioSemUrgencia)
    return (
      <span className="priority prioritaria" title="Conteúdo ilegível recebido no Pronto-Socorro">
        <i aria-hidden />
        Fila prioritária
      </span>
    );
  if (!showRotina || !doc.prioridadeRotulo) return null;
  return (
    <span className="priority rotina">
      <i aria-hidden />
      {doc.prioridadeRotulo}
    </span>
  );
}

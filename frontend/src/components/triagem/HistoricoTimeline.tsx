import {formatDateTime} from '../../lib/format';
import type {EventoView} from '../../types/view';

/** Histórico de processamento e de revisão. O backend não envia o horário da análise da IA. */
export function HistoricoTimeline({eventos}: {eventos: EventoView[]}) {
  if (eventos.length === 0) return <p className="muted-text">Sem eventos registrados.</p>;
  return (
    <ol className="timeline">
      {eventos.map((e) => (
        <li key={e.id} className={e.tipo}>
          <b>{e.titulo}</b>
          {e.descricao && <p>{e.descricao}</p>}
          {e.detalhes.map((d) => (
            <p className="timeline-detail" key={d}>
              {d}
            </p>
          ))}
          <span>
            {e.autor}
            {e.quando ? ` · ${formatDateTime(e.quando)}` : ''}
          </span>
        </li>
      ))}
    </ol>
  );
}

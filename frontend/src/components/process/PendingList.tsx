import {useMemo} from 'react';
import {useSearchParams} from 'react-router-dom';
import {useDocuments} from '../../context/DocumentsContext';
import {useOpenReview} from '../../hooks/useOpenReview';
import {isPending, matchesPrioridade, sortByFila, type PrioridadeFiltro} from '../../lib/documents';
import {formatElapsed} from '../../lib/format';
import {ConfidenceMeter} from '../ConfidenceMeter';
import {PriorityTag} from '../PriorityTag';
import {StatusBadge} from '../StatusBadge';
import {EmptyState, ErrorState, LoadingState} from '../States';

const filters: {id: PrioridadeFiltro; label: string}[] = [
  {id: 'todos', label: 'Todos'},
  {id: 'urgente', label: 'Urgente'},
  {id: 'prioritaria', label: 'Fila prioritária'},
  {id: 'rotina', label: 'Rotina'},
];

/** Parâmetro usado por versões anteriores. */
const normalizar = (raw: string | null): PrioridadeFiltro =>
  raw === 'emergencia' ? 'urgente' : filters.some((f) => f.id === raw) ? (raw as PrioridadeFiltro) : 'todos';

export function PendingList() {
  const [params, setParams] = useSearchParams();
  const openReview = useOpenReview();
  const {views, carga, erro, recarregar} = useDocuments();

  const filter = normalizar(params.get('prioridade'));
  const pending = useMemo(() => sortByFila(views.filter(isPending)), [views]);
  const visible = pending.filter((d) => matchesPrioridade(d, filter));

  const setFilter = (id: PrioridadeFiltro) => {
    const next = new URLSearchParams(params);
    if (id === 'todos') next.delete('prioridade');
    else next.set('prioridade', id);
    setParams(next, {replace: true});
  };

  if (carga === 'carregando') return <LoadingState label="Carregando pendências..." />;
  if (carga === 'erro') return <ErrorState message={erro} onRetry={recarregar} />;

  return (
    <>
      <div className="chips" role="group" aria-label="Filtrar por prioridade clínica">
        {filters.map((f) => (
          <button
            key={f.id}
            className={`chip-btn ${filter === f.id ? 'on' : ''}`}
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
            <b>{pending.filter((d) => matchesPrioridade(d, f.id)).length}</b>
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <div className="card">
          <EmptyState title={pending.length ? 'Nenhum documento neste filtro' : 'Nenhum documento aguardando revisão'} />
        </div>
      ) : (
        <div className="pending-list">
          {visible.map((d) => (
            <div key={d.id} className={`card pending-row ${d.urgente ? 'urgente' : ''}`}>
              <div className="pending-main">
                <b>{d.id}</b>
                <span>
                  {d.tipoRotulo}
                  {d.pacienteNome ? ` · ${d.pacienteNome}` : ''}
                </span>
              </div>
              <div className="pending-reason">
                <PriorityTag doc={d} showRotina />
                <span>{d.roteamento?.motivo ?? 'Aguardando decisão'}</span>
              </div>
              <StatusBadge doc={d} />
              <ConfidenceMeter confianca={d.confiancaClassificacao} titulo="Confiança da classificação" />
              <span className="pending-time">{d.atividadeEm ? formatElapsed(d.atividadeEm) : '—'}</span>
              <button className="primary" onClick={() => openReview(d.id)}>
                Revisar
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

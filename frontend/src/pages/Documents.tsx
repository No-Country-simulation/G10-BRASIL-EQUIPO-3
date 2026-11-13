import {useMemo, useState} from 'react';
import {Link, useNavigate, useSearchParams} from 'react-router-dom';
import {Download, Search} from 'lucide-react';
import {useDocuments} from '../context/DocumentsContext';
import {DOC_FILTERS, filterDocuments, lerFiltro, matchesFilter, type DocFilter} from '../lib/documents';
import {formatRelative} from '../lib/format';
import {ConfidenceMeter} from '../components/ConfidenceMeter';
import {PriorityTag} from '../components/PriorityTag';
import {StatusBadge} from '../components/StatusBadge';
import {EmptyState, ErrorState, LoadingState} from '../components/States';
import type {DocumentoView} from '../types/view';

/** Exporta os valores ORIGINAIS do backend (status, prioridade, destino), não os rótulos. */
function exportCsv(rows: DocumentoView[]) {
  const esc = (v: string | number) => `"${String(v).replace(/"/g, '""')}"`;
  const lines = [
    'DOCUMENTO_ID;STATUS;TIPO_DOCUMENTO;PRIORIDADE;DESTINO;STATUS_REVISAO;CONFIANCA_CLASSIFICACAO_PCT;VERSAO_RESULTADO',
    ...rows.map((d) =>
      [
        d.id,
        d.status,
        d.tipo ?? '',
        d.prioridade ?? '',
        d.roteamento?.destino ?? '',
        d.roteamento?.statusRevisao ?? '',
        d.confiancaClassificacao?.pct ?? '',
        d.versao,
      ]
        .map(esc)
        .join(';'),
    ),
  ];
  const url = URL.createObjectURL(new Blob(['﻿' + lines.join('\n')], {type: 'text/csv;charset=utf-8'}));
  const a = document.createElement('a');
  a.href = url;
  a.download = 'documentos-mediflow.csv';
  a.click();
  URL.revokeObjectURL(url);
}

/** Área central: histórico, busca, filtros e acesso aos detalhes de todos os documentos. */
export default function Documents() {
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const {views, carga, erro, recarregar} = useDocuments();

  const filter = lerFiltro(params.get('filtro'));
  const rows = useMemo(() => filterDocuments(views, filter, query), [views, filter, query]);
  const setFilter = (id: DocFilter) => setParams(id === 'todos' ? {} : {filtro: id}, {replace: true});

  return (
    <>
      <div className="page-head">
        <h1>Documentos</h1>
        <button className="secondary" disabled={!rows.length} onClick={() => exportCsv(rows)}>
          <Download size={16} /> Exportar
        </button>
      </div>

      <div className="search">
        <Search size={16} />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar por ID, paciente, tipo, arquivo ou destino"
          aria-label="Buscar documentos"
        />
      </div>

      <div className="chips" role="group" aria-label="Filtrar documentos">
        {DOC_FILTERS.map((f) => (
          <button
            key={f.id}
            className={`chip-btn ${filter === f.id ? 'on' : ''}`}
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
            {carga === 'pronto' && <b>{views.filter((d) => matchesFilter(d, f.id)).length}</b>}
          </button>
        ))}
      </div>

      {carga === 'carregando' && <LoadingState label="Carregando documentos..." />}
      {carga === 'erro' && <ErrorState message={erro} onRetry={recarregar} />}

      {carga === 'pronto' && (
        <div className="card table-card">
          {rows.length === 0 ? (
            <EmptyState title={views.length ? 'Nenhum documento encontrado' : 'Nenhum documento ainda'}>
              {views.length ? (
                <button
                  className="secondary"
                  onClick={() => {
                    setQuery('');
                    setFilter('todos');
                  }}
                >
                  Limpar filtros
                </button>
              ) : (
                <Link className="primary link-as-button" to="/processar">
                  Processar um documento
                </Link>
              )}
            </EmptyState>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Documento</th>
                  <th>Status</th>
                  <th>Prioridade clínica</th>
                  <th>Destino</th>
                  <th>Confiança</th>
                  <th>Atividade</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((d) => (
                  <tr key={d.id} className="clickable-row" onClick={() => navigate(`/documentos/${encodeURIComponent(d.id)}`)}>
                    <td>
                      <Link to={`/documentos/${encodeURIComponent(d.id)}`} onClick={(e) => e.stopPropagation()}>
                        <b>{d.id}</b>
                      </Link>
                      <span>
                        {d.tipoRotulo}
                        {d.pacienteNome ? ` · ${d.pacienteNome}` : ''}
                      </span>
                    </td>
                    <td>
                      <StatusBadge doc={d} />
                    </td>
                    <td>{d.prioridadeRotulo ? <PriorityTag doc={d} showRotina /> : '—'}</td>
                    <td>{d.roteamento?.destinoRotulo ?? '—'}</td>
                    <td>
                      <ConfidenceMeter confianca={d.confiancaClassificacao} titulo="Confiança da classificação" />
                    </td>
                    <td>{d.atividadeEm ? formatRelative(d.atividadeEm) : '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </>
  );
}

import {ConfidenceMeter} from '../ConfidenceMeter';
import {PriorityTag} from '../PriorityTag';
import type {DocumentoView} from '../../types/view';

/** Tipo documental, prioridade clínica e confianças. Prioridade e confiança são eixos independentes. */
export function ClassificacaoCard({doc}: {doc: DocumentoView}) {
  const classificado = doc.tipo !== null;
  return (
    <div className="card">
      <h2>Classificação</h2>
      {!classificado ? (
        <p className="muted-text">
          {doc.erro ? 'O documento não chegou a ser classificado (falha técnica).' : 'Aguardando a classificação da IA.'}
        </p>
      ) : (
        <>
          <dl className="kv">
            <div>
              <dt>Tipo de documento</dt>
              <dd>{doc.tipoRotulo}</dd>
            </div>
            {doc.especialidade && (
              <div>
                <dt>Especialidade</dt>
                <dd>{doc.especialidade}</dd>
              </div>
            )}
            {doc.canalRotulo && (
              <div>
                <dt>Canal de origem</dt>
                <dd>{doc.canalRotulo}</dd>
              </div>
            )}
            <div>
              <dt>Prioridade clínica</dt>
              <dd>
                {doc.urgente || doc.roteamento?.prioritarioSemUrgencia ? <PriorityTag doc={doc} /> : doc.prioridadeRotulo}
                <small>Sinalização de possível urgência — não é diagnóstico.</small>
              </dd>
            </div>
          </dl>

          <div className="meters">
            <ConfidenceMeter confianca={doc.confiancaClassificacao} variant="ring" titulo="Confiança da classificação" />
            {doc.confiancaExtracao && (
              <div className="meter-inline">
                <span>Confiança geral da extração (informativa)</span>
                <ConfidenceMeter confianca={doc.confiancaExtracao} titulo="Confiança geral da extração" />
              </div>
            )}
          </div>

          {doc.sinaisUrgencia.length > 0 && (
            <div className="signals">
              <h3>Sinais de urgência</h3>
              <ul>
                {doc.sinaisUrgencia.map((s, i) => (
                  <li key={i}>
                    <span className="tag">{s.origemRotulo}</span>
                    <b>{s.descricao}</b>
                    {s.evidencia && <q>{s.evidencia}</q>}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
}

import type {DocumentoView} from '../../types/view';

/** `armazenamento_oci`: só aparece quando o backend o preenche (após confirmar a gravação). */
export function ArmazenamentoInfo({doc}: {doc: DocumentoView}) {
  const a = doc.armazenamento;
  return (
    <div className="card">
      <h2>Armazenamento</h2>
      {!a ? (
        <p className="muted-text">O backend ainda não informou a persistência deste resultado.</p>
      ) : (
        <dl className="kv">
          <div>
            <dt>Modo</dt>
            <dd>{a.modoRotulo}</dd>
          </div>
          <div>
            <dt>Situação</dt>
            <dd>{a.statusBackupRotulo}</dd>
          </div>
          {a.bucket && (
            <div>
              <dt>Bucket</dt>
              <dd className="mono">{a.bucket}</dd>
            </div>
          )}
          {a.caminho && (
            <div>
              <dt>Objeto</dt>
              <dd className="mono">{a.caminho}</dd>
            </div>
          )}
        </dl>
      )}
    </div>
  );
}

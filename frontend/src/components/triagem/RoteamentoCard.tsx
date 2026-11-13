import {BellRing, ShieldAlert} from 'lucide-react';
import {formatDateTime} from '../../lib/format';
import type {DocumentoView} from '../../types/view';

/** Decisão de roteamento feita pelo sistema (regras determinísticas) e eventual revisão humana. */
export function RoteamentoCard({doc}: {doc: DocumentoView}) {
  const r = doc.roteamento;
  return (
    <div className="card">
      <h2>Roteamento</h2>
      {!r ? (
        <p className="muted-text">
          {doc.erro ? 'Falha técnica: nenhum destino foi definido.' : 'O destino será definido ao fim do processamento.'}
        </p>
      ) : (
        <>
          <dl className="kv">
            <div>
              <dt>Destino definido pelo sistema</dt>
              <dd>{r.destinoRotulo}</dd>
            </div>
            <div>
              <dt>Motivo</dt>
              <dd>
                <span className="tag">{r.codigoMotivoRotulo}</span> {r.motivo}
              </dd>
            </div>
            {r.justificativa !== r.motivo && (
              <div>
                <dt>Justificativa</dt>
                <dd>{r.justificativa}</dd>
              </div>
            )}
            <div>
              <dt>Revisão humana</dt>
              <dd>
                {r.statusRevisaoRotulo}
                {r.requerAuditoriaHumana && <small>Um revisor precisa confirmar antes de seguir.</small>}
              </dd>
            </div>
          </dl>
          {r.prioritarioSemUrgencia && (
            <p className="field-meta">
              Fila prioritária sem urgência: conteúdo obrigatório ilegível recebido no Pronto-Socorro.
            </p>
          )}
          {r.alerta && (
            <div className="alert-event">
              <BellRing size={16} aria-hidden />
              <div>
                <b>Alerta de urgência registrado</b>
                <p>{r.alerta.mensagem}</p>
                {r.alerta.evidencias.map((e) => (
                  <p className="evidence" key={e}>
                    Evidência: <q>{e}</q>
                  </p>
                ))}
                <small>
                  {formatDateTime(r.alerta.geradaEm)} · evento criado e persistido; não comprova entrega a ninguém.
                </small>
              </div>
            </div>
          )}
        </>
      )}
      {doc.urgente && !r?.alerta && r?.requerAuditoriaHumana && (
        <div className="alert-event warn">
          <ShieldAlert size={16} aria-hidden />
          <div>
            <b>Possível urgência aguardando confirmação humana</b>
            <p>O alerta à emergência só é gerado depois da aprovação do revisor.</p>
          </div>
        </div>
      )}
    </div>
  );
}

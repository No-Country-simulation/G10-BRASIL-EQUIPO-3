import {useMemo} from 'react';
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis} from 'recharts';
import {Link} from 'react-router-dom';
import {CircleCheck, Clock3, Files, ShieldAlert} from 'lucide-react';
import {useDocuments} from '../context/DocumentsContext';
import {useTheme} from '../context/ThemeContext';
import {calcularMetricas} from '../lib/metrics';
import {StatCard} from '../components/StatCard';
import {EmptyState, ErrorState, LoadingState} from '../components/States';

const pt = (n: number) => n.toLocaleString('pt-BR');
const pct = (v: number | null) => (v === null ? '—' : `${String(v).replace('.', ',')}%`);

/**
 * Visão geral. Calculada NO CLIENTE a partir dos documentos carregados: o backend não tem endpoint
 * de métricas e `RespostaTriagem` não traz horários de processamento (sem volume por hora nem tempo médio).
 */
export default function Dashboard() {
  const {resolved} = useTheme();
  const {views, carga, erro, recarregar} = useDocuments();
  const dark = resolved === 'dark';
  const m = useMemo(() => calcularMetricas(views), [views]);

  if (carga === 'carregando') return <LoadingState />;
  if (carga === 'erro') return <ErrorState message={erro} onRetry={recarregar} />;

  return (
    <>
      <div className="page-head">
        <h1>Dashboard</h1>
      </div>

      {views.length === 0 ? (
        <div className="card">
          <EmptyState title="Nenhum documento processado ainda">
            <Link className="primary link-as-button" to="/processar">
              Processar um documento
            </Link>
          </EmptyState>
        </div>
      ) : (
        <>
          {m.urgentesPendentes > 0 && (
            <div className="alert">
              <ShieldAlert size={22} />
              <div>
                <b>
                  {m.urgentesPendentes} {m.urgentesPendentes === 1 ? 'documento urgente aguarda' : 'documentos urgentes aguardam'} revisão humana
                </b>
              </div>
              <Link className="alert-link" to="/processar?tab=pendentes&prioridade=urgente">
                Revisar agora
              </Link>
            </div>
          )}

          <div className="stats three">
            <StatCard
              label="Processados"
              value={pt(m.processados)}
              detail={m.naFilaEmergencia ? `${m.naFilaEmergencia} na fila de emergência` : undefined}
              Icon={Files}
              to="/documentos"
            />
            <StatCard
              label="Pendentes de revisão"
              value={pt(m.pendentesRevisao)}
              Icon={Clock3}
              tone="amber"
              to="/processar?tab=pendentes"
            />
            <StatCard
              label="Aprovados na auditoria"
              value={pt(m.aprovados)}
              detail={m.rejeitados ? `${m.rejeitados} rejeitados` : undefined}
              Icon={CircleCheck}
              tone="green"
              to="/documentos?filtro=aprovados"
            />
          </div>

          <div className="grid-2">
            <div className="card chart">
              <div className="card-title">
                <h2>Documentos por destino</h2>
              </div>
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={m.porDestino}>
                  <XAxis dataKey="rotulo" tickLine={false} axisLine={false} stroke={dark ? '#7f8da5' : '#6b7a90'} fontSize={11} />
                  <Tooltip
                    cursor={{fill: dark ? 'rgba(255,255,255,.04)' : 'rgba(15,27,45,.05)'}}
                    contentStyle={{
                      background: dark ? '#111a2d' : '#ffffff',
                      border: `1px solid ${dark ? '#273752' : '#dbe3ee'}`,
                      borderRadius: 8,
                      color: dark ? '#e8eefc' : '#0f1b2d',
                    }}
                  />
                  <Bar dataKey="valor" name="Documentos" radius={[5, 5, 0, 0]} fill={dark ? '#3b82f6' : '#2563eb'} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="card performance">
              <h2>Desempenho</h2>
              <dl>
                <div>
                  <dt>Sem falha técnica</dt>
                  <dd>{pct(m.taxaSucessoPct)}</dd>
                </div>
                <div>
                  <dt>Confiança média da classificação</dt>
                  <dd>{pct(m.confiancaClassificacaoMediaPct)}</dd>
                </div>
                <div>
                  <dt>Roteados sem revisão humana</dt>
                  <dd>{pct(m.semRevisaoPct)}</dd>
                </div>
                <div>
                  <dt>Falhas técnicas</dt>
                  <dd>{pt(m.erros)}</dd>
                </div>
              </dl>
            </div>
          </div>
        </>
      )}
    </>
  );
}

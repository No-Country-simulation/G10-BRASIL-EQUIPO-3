import {useEffect, useRef, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Bell, BellOff, CircleAlert, ShieldAlert, TriangleAlert} from 'lucide-react';
import {config} from '../config/env';
import {useNotificacoes} from '../hooks/useNotificacoes';
import {formatRelative} from '../lib/format';
import type {Severidade} from '../lib/notifications';

const icone: Record<Severidade, typeof Bell> = {critica: ShieldAlert, atencao: TriangleAlert, info: CircleAlert};

/** Sininho: painel com alertas derivados dos documentos reais (ver lib/notifications.ts). */
export function NotificationBell() {
  const [aberto, setAberto] = useState(false);
  const raiz = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const {itens, lidas, naoLidas, pendentesRevisao, marcarLida, marcarTodas} = useNotificacoes();

  useEffect(() => {
    if (!aberto) return;
    const fora = (e: MouseEvent | TouchEvent) => !raiz.current?.contains(e.target as Node) && setAberto(false);
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setAberto(false);
    document.addEventListener('mousedown', fora);
    document.addEventListener('touchstart', fora);
    document.addEventListener('keydown', esc);
    return () => {
      document.removeEventListener('mousedown', fora);
      document.removeEventListener('touchstart', fora);
      document.removeEventListener('keydown', esc);
    };
  }, [aberto]);

  const rotulo = naoLidas ? `Notificações: ${naoLidas} não lida(s)` : 'Notificações: nenhuma nova';

  return (
    <div className="bell-wrap" ref={raiz}>
      <button
        type="button"
        className="icon-button bell"
        aria-label={rotulo}
        aria-haspopup="dialog"
        aria-expanded={aberto}
        title="Notificações"
        onClick={() => setAberto((v) => !v)}
      >
        <Bell size={18} />
        {naoLidas > 0 && <em>{naoLidas > 9 ? '9+' : naoLidas}</em>}
      </button>

      {aberto && (
        <div className="popover notif-panel" role="dialog" aria-label="Notificações">
          <div className="popover-head">
            <b>Notificações</b>
            <button type="button" className="link-button" disabled={naoLidas === 0} onClick={marcarTodas}>
              Marcar todas como lidas
            </button>
          </div>

          {itens.length === 0 ? (
            <div className="popover-empty">
              <BellOff size={22} />
              <b>Nenhuma notificação</b>
              <span>Alertas de urgência, pendências prioritárias e falhas de processamento aparecem aqui.</span>
            </div>
          ) : (
            <ul className="notif-list">
              {itens.map((n) => {
                const Icon = icone[n.severidade];
                const lida = lidas.has(n.chave);
                return (
                  <li key={n.chave}>
                    <button
                      type="button"
                      className={`notif-item ${n.severidade} ${lida ? 'lida' : ''}`}
                      onClick={() => {
                        marcarLida(n.chave);
                        setAberto(false);
                        navigate(n.to);
                      }}
                    >
                      <Icon size={18} aria-hidden />
                      <span>
                        <b>{n.titulo}</b>
                        <span className="notif-detail">{n.detalhe}</span>
                        {n.instante && <small>{formatRelative(n.instante)}</small>}
                      </span>
                      {!lida && <i className="dot" aria-label="não lida" />}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}

          <div className="popover-foot">
            <Link to="/processar?tab=pendentes" onClick={() => setAberto(false)} className="link-button">
              {pendentesRevisao > 0 ? `Ver ${pendentesRevisao} pendente(s) de revisão` : 'Ver pendências de revisão'}
            </Link>
            <small>
              Geradas a partir dos documentos; o backend não envia push. A lista atualiza a cada {Math.round(config.refreshIntervalMs / 1000)} s.
            </small>
          </div>
        </div>
      )}
    </div>
  );
}

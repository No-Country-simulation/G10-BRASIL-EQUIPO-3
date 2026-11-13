import {Link, Outlet, useLocation} from 'react-router-dom';
import {Bell, FilePlus2, FolderOpen, LayoutDashboard, Settings} from 'lucide-react';
import {config, isMock} from '../config/env';
import {useDocuments} from '../context/DocumentsContext';
import {useSettings} from '../context/SettingsContext';
import {ThemeToggle} from './ThemeToggle';
import {DemoBanner} from './DemoBanner';

/** Ordem do menu: Dashboard fica por último, de propósito. */
const nav = [
  {to: '/processar', label: 'Processar', Icon: FilePlus2},
  {to: '/documentos', label: 'Documentos', Icon: FolderOpen},
  {to: '/configuracoes', label: 'Configurações', Icon: Settings},
  {to: '/dashboard', label: 'Dashboard', Icon: LayoutDashboard},
] as const;

const sectionNames: Record<string, string> = {
  processar: 'Processar',
  documentos: 'Documentos',
  revisao: 'Revisão',
  configuracoes: 'Configurações',
  dashboard: 'Dashboard',
};

/** A revisão pertence à seção de onde o usuário veio (Processar ou Documentos). */
function useSection() {
  const {pathname, state} = useLocation();
  const first = pathname.split('/')[1] ?? '';
  if (first === 'revisao') {
    const from = (state as {from?: string} | null)?.from ?? '';
    return from.startsWith('/documentos') ? '/documentos' : '/processar';
  }
  return `/${first}`;
}

function useCrumbs() {
  const {pathname} = useLocation();
  const [first, second] = pathname.split('/').filter(Boolean);
  const crumbs = [sectionNames[first] ?? 'Processar'];
  if (second) crumbs.push(second);
  return crumbs;
}

export function Layout() {
  const section = useSection();
  const crumbs = useCrumbs();
  const {views} = useDocuments();
  const {preferencias} = useSettings();
  const pendentes = views.filter((d) => d.revisaoDisponivel);
  const summary = {pending: pendentes.length, emergency: pendentes.filter((d) => d.urgente).length};
  const revisor = preferencias.revisor.trim();
  const iniciais = revisor ? revisor.slice(0, 2).toUpperCase() : '?';
  const today = new Date().toLocaleDateString('pt-BR', {day: 'numeric', month: 'short', year: 'numeric'});

  return (
    <div className="app">
      <aside>
        <div className="brand">
          <span className="brand-mark">✚</span>mediflow
        </div>
        <div className="org">
          <b>Triagem clínica</b>
          <span>{isMock ? 'Dados de demonstração' : `API: ${config.apiUrl}`}</span>
        </div>
        <nav aria-label="Navegação principal">
          {nav.map(({to, label, Icon}) => (
            <Link key={to} to={to} className={section === to ? 'active' : ''} aria-current={section === to ? 'page' : undefined}>
              <Icon size={18} />
              <span>{label}</span>
              {to === '/processar' && !!summary?.pending && <em className="nav-count">{summary.pending}</em>}
            </Link>
          ))}
        </nav>
        <div className="user">
          <div className="avatar">{iniciais}</div>
          <div>
            <b>{revisor || 'Revisor não informado'}</b>
            <span>Identificador informado, não autenticado</span>
          </div>
        </div>
      </aside>

      <main>
        <header>
          <div className="crumb">
            Área de trabalho
            {crumbs.map((c) => (
              <span key={c}>
                <i>›</i>
                {c}
              </span>
            ))}
          </div>
          <div className="header-actions">
            <span className="today">{today}</span>
            <ThemeToggle />
            <Link
              to="/processar?tab=pendentes&prioridade=urgente"
              className="icon-button bell"
              aria-label={summary?.emergency ? `${summary.emergency} emergências aguardando revisão` : 'Nenhuma emergência pendente'}
              title="Urgências pendentes"
            >
              <Bell size={18} />
              {!!summary?.emergency && <em>{summary.emergency}</em>}
            </Link>
          </div>
        </header>
        <DemoBanner />
        <section className="content">
          <Outlet />
        </section>
      </main>
    </div>
  );
}

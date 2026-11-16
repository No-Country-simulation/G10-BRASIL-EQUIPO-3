/**
 * Notificações do sininho.
 *
 * O backend NÃO tem endpoint nem push de notificações. O que existe é o evento de urgência
 * (`decisao_roteamento.notificacao_gerada`), persistido dentro de cada `RespostaTriagem`.
 * Por isso as notificações são DERIVADAS dos documentos carregados (e atualizadas por refresh
 * periódico) — nada aqui é inventado: cada item aponta para um documento real.
 */
import type {DocumentoView} from '../types/view';

export type TipoNotificacao = 'alerta_urgencia' | 'revisao_urgente' | 'fila_prioritaria' | 'erro';
export type Severidade = 'critica' | 'atencao' | 'info';

export interface Notificacao {
  /** Estável por documento+versão: um novo resultado do mesmo documento gera nova notificação. */
  chave: string;
  tipo: TipoNotificacao;
  severidade: Severidade;
  titulo: string;
  detalhe: string;
  instante: string | null;
  docId: string;
  /** Destino ao clicar. */
  to: string;
}

const ordem: Record<Severidade, number> = {critica: 0, atencao: 1, info: 2};
const tempo = (n: Notificacao) => (n.instante ? new Date(n.instante).getTime() : 0);

export function derivarNotificacoes(docs: DocumentoView[]): Notificacao[] {
  const out: Notificacao[] = [];
  for (const d of docs) {
    const base = `${d.id}:v${d.versao}`;
    const detalhe = `${d.id} · ${d.tipoRotulo}`;

    if (d.roteamento?.alerta)
      out.push({
        chave: `${base}:alerta`,
        tipo: 'alerta_urgencia',
        severidade: 'critica',
        titulo: 'Alerta de urgência registrado',
        detalhe: `${detalhe} — ${d.roteamento.alerta.mensagem}`,
        instante: d.roteamento.alerta.geradaEm,
        docId: d.id,
        to: `/documentos/${encodeURIComponent(d.id)}`,
      });

    if (d.revisaoDisponivel && d.urgente)
      out.push({
        chave: `${base}:revisao_urgente`,
        tipo: 'revisao_urgente',
        severidade: 'critica',
        titulo: 'Urgente aguardando revisão',
        detalhe: `${detalhe} — ${d.roteamento?.motivo ?? 'decisão humana necessária'}`,
        instante: d.atividadeEm,
        docId: d.id,
        to: `/revisao/${encodeURIComponent(d.id)}`,
      });
    else if (d.revisaoDisponivel && d.roteamento?.prioritarioSemUrgencia)
      out.push({
        chave: `${base}:fila_prioritaria`,
        tipo: 'fila_prioritaria',
        severidade: 'atencao',
        titulo: 'Fila prioritária aguardando revisão',
        detalhe: `${detalhe} — ${d.roteamento.motivo}`,
        instante: d.atividadeEm,
        docId: d.id,
        to: `/revisao/${encodeURIComponent(d.id)}`,
      });

    if (d.status === 'erro' && d.erro)
      out.push({
        chave: `${base}:erro`,
        tipo: 'erro',
        severidade: 'atencao',
        titulo: 'Falha no processamento',
        detalhe: `${d.id} — ${d.erro.titulo}`,
        instante: d.atividadeEm,
        docId: d.id,
        to: `/documentos/${encodeURIComponent(d.id)}`,
      });
  }
  return out.sort((a, b) => ordem[a.severidade] - ordem[b.severidade] || tempo(b) - tempo(a));
}

/* ── Controle de "lidas": preferência local do navegador ── */
const KEY = 'mediflow:notif-lidas';
const LIMITE = 300;

export function carregarLidas(): Set<string> {
  try {
    const bruto = localStorage.getItem(KEY);
    const lista = bruto ? (JSON.parse(bruto) as unknown) : [];
    return new Set(Array.isArray(lista) ? lista.filter((x): x is string => typeof x === 'string') : []);
  } catch {
    return new Set();
  }
}

export function salvarLidas(lidas: Set<string>) {
  try {
    localStorage.setItem(KEY, JSON.stringify([...lidas].slice(-LIMITE)));
  } catch {
    /* armazenamento indisponível: o controle de lidas vale só nesta sessão */
  }
}

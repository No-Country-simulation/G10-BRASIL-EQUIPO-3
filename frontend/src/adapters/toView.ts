/**
 * Domínio → Apresentação.
 *
 * Todos os textos, níveis de confiança e estados visuais derivados vivem aqui.
 * As páginas/componentes recebem `DocumentoView` pronto e não convertem propriedades.
 *
 * Duas métricas NUNCA se misturam:
 *   - prioridade clínica (`rotina` | `urgente`), decidida pelo backend;
 *   - confiança (0–1) da classificação, de cada campo e da extração.
 */
import {
  CANAL_ROTULOS,
  CODIGO_VALIDACAO_ROTULOS,
  DESTINO_ROTULOS,
  ERRO_ROTULOS,
  GRAVIDADE_ROTULOS,
  MOTIVO_ROTULOS,
  ORIGEM_SINAL_ROTULOS,
  PRIORIDADE_ROTULOS,
  SITUACAO_ROTULOS,
  STATUS_REVISAO_ROTULOS,
  STATUS_ROTULOS,
  STATUS_TONS,
  TIPO_DOCUMENTO_ROTULOS,
} from './labels';
import {avisoDoCampo, dataIsoParaBr, rotuloDoCampo, tipoEntradaDoCampo} from './fieldMeta';
import {STATUS_EM_ANDAMENTO, type Achado, type CampoExtraido, type Documento, type RegistroRevisao} from '../types/domain';
import type {
  AchadoView,
  CampoView,
  ConfiancaView,
  DocumentoView,
  EstadoCampo,
  EventoView,
  NivelConfianca,
  RoteamentoView,
} from '../types/view';

/** Limiares de exibição (0–1). Só colorem a interface; o roteamento real é do backend. */
export interface RegrasExibicao {
  /** Abaixo disto a confiança é "baixa" (equivale ao `CONFIDENCE_THRESHOLD` do backend, padrão 0,80). */
  limiar: number;
  /** A partir disto a confiança é "alta". */
  limiarAlto: number;
}

export const REGRAS_PADRAO: RegrasExibicao = {limiar: 0.8, limiarAlto: 0.9};

export function nivelDeConfianca(valor: number, r: RegrasExibicao): NivelConfianca {
  if (valor >= r.limiarAlto) return 'alta';
  if (valor >= r.limiar) return 'media';
  return 'baixa';
}

export function confiancaView(valor: number | null | undefined, r: RegrasExibicao): ConfiancaView | null {
  if (valor === null || valor === undefined) return null;
  return {pct: Math.round(valor * 100), nivel: nivelDeConfianca(valor, r)};
}

/* ───────────── Campos ───────────── */

const CODIGOS_DE_ERRO_VISUAL = new Set(['campo_ilegivel', 'conteudo_ilegivel', 'contradicao', 'formato_invalido']);

const GRUPO_ROTULOS: Record<CampoExtraido['grupo'], string> = {
  paciente: 'Paciente',
  profissional: 'Profissional solicitante',
  clinico: 'Dados clínicos',
  medicamento: 'Medicamentos',
  exame: 'Exames',
  datas: 'Datas',
};

/** Padrão de chave: `medicamentos[2].nome` → `medicamentos[*].nome` (igual a `padrao_da_chave`). */
const padrao = (chave: string) => chave.replace(/\[\d+\]/g, '[*]');

function achadosDoCampo(chave: string, achados: Achado[]): Achado[] {
  return achados.filter((a) => a.camposAfetados.some((c) => c === chave || c === padrao(chave)));
}

function estadoDoCampo(c: CampoExtraido, achados: Achado[], r: RegrasExibicao): EstadoCampo {
  if (c.situacao === 'ilegivel') return 'erro';
  if (achados.some((a) => CODIGOS_DE_ERRO_VISUAL.has(a.codigo))) return 'erro';
  if (achados.length) return 'atencao';
  if (c.revisadoPorHumano) return 'ok';
  if (c.situacao === 'presente' && c.confianca !== null && c.confianca < r.limiar) return 'atencao';
  return 'ok';
}

function toCampoView(c: CampoExtraido, achados: Achado[], r: RegrasExibicao): CampoView {
  const doCampo = achadosDoCampo(c.chave, achados);
  const texto = c.valor === null ? '' : String(c.valor);
  const tipoEntrada = tipoEntradaDoCampo(c.chave);
  const motivos = doCampo.map((a) => a.descricao);
  if (!motivos.length && c.situacao === 'ilegivel') motivos.push('Campo ilegível no documento.');
  if (!motivos.length && c.situacao === 'presente' && c.confianca !== null && c.confianca < r.limiar && !c.revisadoPorHumano)
    motivos.push(`Confiança abaixo do limiar de ${Math.round(r.limiar * 100)}%.`);

  return {
    chave: c.chave,
    rotulo: rotuloDoCampo(c.chave),
    grupo: GRUPO_ROTULOS[c.grupo],
    valorTexto: texto,
    valorExibicao: texto === '' ? '—' : tipoEntrada === 'data' ? dataIsoParaBr(texto) : texto,
    valor: c.valor,
    situacao: c.situacao,
    situacaoRotulo: SITUACAO_ROTULOS[c.situacao],
    // Campo revisado por humano não carrega confiança da IA (invariante do backend).
    confianca: c.revisadoPorHumano ? null : confiancaView(c.confianca, r),
    evidencia: c.evidencia,
    revisadoPorHumano: c.revisadoPorHumano,
    estado: estadoDoCampo(c, doCampo, r),
    motivo: motivos.length ? motivos.join(' ') : null,
    aviso: avisoDoCampo(c.chave),
    tipoEntrada,
    editavel: true,
  };
}

function toAchadoView(a: Achado, i: number): AchadoView {
  return {
    chave: `${a.codigo}-${i}`,
    titulo: CODIGO_VALIDACAO_ROTULOS[a.codigo],
    descricao: a.descricao,
    gravidade: a.gravidade,
    gravidadeRotulo: GRAVIDADE_ROTULOS[a.gravidade],
    campos: a.camposAfetados.map((chave) => ({chave, rotulo: rotuloDoCampo(chave)})),
    evidencia: a.evidencia,
    acaoSugerida: a.acaoSugerida,
  };
}

/* ───────────── Histórico ───────────── */

const valorTexto = (v: unknown) => (v === null || v === undefined || v === '' ? '(vazio)' : String(v));

function eventoRevisao(r: RegistroRevisao, i: number): EventoView {
  const aprovou = r.decisao === 'aprovar';
  return {
    id: `revisao-${i}`,
    quando: r.dataHora,
    tipo: aprovou ? 'aprovado' : 'rejeitado',
    titulo: aprovou ? 'Aprovado por revisor' : 'Rejeitado por revisor',
    descricao: r.justificativa,
    autor: `${r.revisor ?? 'Revisor não informado'}${r.identidadeVerificada ? '' : ' (identidade não verificada)'}`,
    detalhes: [
      `Resultado v${r.versaoAnterior} → v${r.versaoRevisada}`,
      ...r.correcoes.map((c) => `${rotuloDoCampo(c.campo)}: ${valorTexto(c.valorAnterior)} → ${valorTexto(c.valorPosterior)}`),
    ],
  };
}

function toHistorico(d: Documento): EventoView[] {
  const eventos: EventoView[] = [];
  if (d.meta.recebidoEm)
    eventos.push({
      id: 'recebido',
      quando: d.meta.recebidoEm,
      tipo: 'recebido',
      titulo: 'Documento enviado',
      descricao: d.meta.nomeArquivo ? `Arquivo ${d.meta.nomeArquivo}` : null,
      autor: 'Este navegador',
      detalhes: [],
    });

  if (d.classificacao && d.roteamento)
    eventos.push({
      id: 'processado',
      // O contrato não traz o horário da análise.
      quando: null,
      tipo: 'processado',
      titulo: 'Analisado pela IA',
      // Após uma revisão o destino mudou: o destino original da IA não é mais conhecido, então não o afirmamos.
      descricao: `${TIPO_DOCUMENTO_ROTULOS[d.classificacao.tipoDocumento]} · ${d.classificacao.urgente ? 'possível urgência' : 'rotina'}${d.historico.length === 0 ? ` · ${DESTINO_ROTULOS[d.roteamento.destino]}` : ''}`,
      autor: d.origemAnalise ? `IA (${d.origemAnalise.provedor}${d.origemAnalise.modelo ? ` · ${d.origemAnalise.modelo}` : ''})` : 'IA',
      detalhes: d.origemAnalise?.dadosDeTeste ? ['Dados de teste — não é avaliação clínica'] : [],
    });

  const alerta = d.roteamento?.notificacao;
  if (alerta)
    eventos.push({
      id: 'alerta',
      quando: alerta.geradaEm,
      tipo: 'alerta',
      titulo: 'Alerta de urgência registrado',
      descricao: alerta.mensagem,
      autor: 'Sistema',
      detalhes: ['Evento criado e persistido; não comprova entrega a ninguém.'],
    });

  if (d.erro)
    eventos.push({
      id: 'erro',
      quando: d.erro.ocorridoEm,
      tipo: 'erro',
      titulo: 'Falha no processamento',
      descricao: d.erro.descricao,
      autor: 'Sistema',
      detalhes: d.erro.etapa ? [`Etapa: ${d.erro.etapa}`] : [],
    });

  d.historico.forEach((r, i) => eventos.push(eventoRevisao(r, i)));
  return eventos;
}

/* ───────────── Roteamento ───────────── */

function toRoteamentoView(d: Documento): RoteamentoView | null {
  const r = d.roteamento;
  if (!r) return null;
  return {
    destino: r.destino,
    destinoRotulo: DESTINO_ROTULOS[r.destino],
    codigoMotivoRotulo: MOTIVO_ROTULOS[r.codigoMotivo],
    motivo: r.motivo,
    justificativa: r.justificativa,
    statusRevisao: r.statusRevisao,
    statusRevisaoRotulo: STATUS_REVISAO_ROTULOS[r.statusRevisao],
    requerAuditoriaHumana: r.requerAuditoriaHumana,
    alerta: r.notificacao
      ? {mensagem: r.notificacao.mensagem, geradaEm: r.notificacao.geradaEm, evidencias: r.notificacao.evidencias}
      : null,
    prioritarioSemUrgencia: r.destino === 'FILA_REVISAO_HUMANA_PRIORITARIA' && !r.urgente,
  };
}

/* ───────────── Documento ───────────── */

const maisRecente = (datas: (string | null | undefined)[]): string | null => {
  const validas = datas.filter((x): x is string => !!x && !Number.isNaN(new Date(x).getTime()));
  if (!validas.length) return null;
  return validas.reduce((a, b) => (new Date(a).getTime() >= new Date(b).getTime() ? a : b));
};

export function toDocumentoView(d: Documento, regras: RegrasExibicao = REGRAS_PADRAO): DocumentoView {
  const campos = d.campos.map((c) => toCampoView(c, d.achados, regras));
  const camposEmAtencao = campos.filter((c) => c.estado !== 'ok');
  const camposOk = campos.filter((c) => c.estado === 'ok' && c.situacao === 'presente');
  const camposNaoEncontrados = campos.filter((c) => c.estado === 'ok' && c.situacao !== 'presente');
  const urgente = d.classificacao?.urgente ?? d.roteamento?.urgente ?? false;
  const prioridade = d.classificacao?.prioridade ?? d.roteamento?.prioridade ?? null;
  const tipo = d.classificacao?.tipoDocumento ?? null;
  const roteamento = toRoteamentoView(d);
  const nome = campos.find((c) => c.chave === 'paciente.nome');
  const arquivo =
    d.meta.arquivoUrl && d.meta.mimeType
      ? {url: d.meta.arquivoUrl, mimeType: d.meta.mimeType, nome: d.meta.nomeArquivo ?? d.id}
      : null;

  return {
    id: d.id,
    status: d.status,
    statusRotulo: STATUS_ROTULOS[d.status],
    statusTom: STATUS_TONS[d.status],
    versao: d.versao,
    emAndamento: STATUS_EM_ANDAMENTO.includes(d.status),

    tipo,
    tipoRotulo: tipo ? TIPO_DOCUMENTO_ROTULOS[tipo] : d.status === 'erro' ? 'Não classificado' : 'Aguardando classificação',
    especialidade: d.classificacao?.especialidade ?? null,
    canalRotulo: d.canalOrigem ? CANAL_ROTULOS[d.canalOrigem] : null,
    pacienteNome: nome && nome.situacao === 'presente' ? nome.valorTexto : null,

    prioridade,
    prioridadeRotulo: prioridade ? PRIORIDADE_ROTULOS[prioridade] : null,
    urgente,

    confiancaClassificacao: confiancaView(d.classificacao?.confianca, regras),
    confiancaExtracao: confiancaView(d.confiancaExtracao, regras),

    campos,
    camposEmAtencao,
    camposOk,
    camposNaoEncontrados,
    resumo: {
      ok: camposOk.length,
      atencao: campos.filter((c) => c.estado === 'atencao').length,
      erro: campos.filter((c) => c.estado === 'erro').length,
    },

    achados: d.achados.map(toAchadoView),
    sinaisUrgencia: (d.classificacao?.sinaisUrgencia ?? []).map((s) => ({
      origemRotulo: ORIGEM_SINAL_ROTULOS[s.origem],
      descricao: s.descricao,
      evidencia: s.evidencia,
    })),
    roteamento,
    armazenamento: d.armazenamento
      ? {
          modoRotulo: d.armazenamento.modo === 'mock' ? 'Armazenamento simulado' : 'OCI Object Storage',
          persistido: d.armazenamento.persistido,
          statusBackupRotulo: { sucesso: 'Gravado com sucesso', falha: 'Falha na gravação', nao_realizado: 'Gravação não realizada' }[d.armazenamento.statusBackup],
          caminho: d.armazenamento.caminhoObjeto,
          bucket: d.armazenamento.bucket,
        }
      : null,
    historico: toHistorico(d),
    erro: d.erro
      ? {codigo: d.erro.codigo, titulo: ERRO_ROTULOS[d.erro.codigo], descricao: d.erro.descricao, etapa: d.erro.etapa}
      : null,

    origem: d.origemAnalise
      ? {
          rotulo: d.origemAnalise.dadosDeTeste
            ? 'Dados de teste (provedor simulado)'
            : `${d.origemAnalise.provedor}${d.origemAnalise.modelo ? ` · ${d.origemAnalise.modelo}` : ''}`,
          dadosDeTeste: d.origemAnalise.dadosDeTeste,
        }
      : null,

    revisaoDisponivel: d.status === 'em_auditoria',
    nomeArquivo: d.meta.nomeArquivo ?? null,
    recebidoEm: d.meta.recebidoEm ?? null,
    atividadeEm: maisRecente([
      d.meta.recebidoEm,
      d.erro?.ocorridoEm,
      d.roteamento?.notificacao?.geradaEm,
      ...d.historico.map((h) => h.dataHora),
    ]),
    arquivo,
    ordemFila: urgente ? 0 : roteamento?.prioritarioSemUrgencia ? 1 : 2,
  };
}

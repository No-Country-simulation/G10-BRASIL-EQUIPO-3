/**
 * Simulação das regras do backend usadas pelo modo de demonstração.
 *
 * É um PORT em TypeScript do que existe hoje em Python:
 *   - backend/app/services/review_service.py → `registrarRevisao`, `aplicarCorrecao`
 *   - backend/app/rules/routing.py           → `decidirAposAprovacao`, `decidirAposRejeicao`
 *   - backend/app/rules/policy.py            → `DESTINO_AUTOMATICO`
 *   - backend/app/schemas/review.py          → `validarRequisicao`
 *   - backend/app/schemas/routing.py         → `validarInvariantesRoteamento`
 *
 * Serve apenas para simular o comportamento sem backend. Se o backend mudar, a fonte de verdade
 * continua sendo o Python; `scripts/validar-contratos.mjs` valida a saída deste módulo contra
 * os schemas Pydantic reais.
 */
import {ApiError} from '../services/errors';
import type {
  CampoDTO,
  ClassificacaoDocumentoDTO,
  DadosExtraidosDTO,
  DecisaoRoteamentoDTO,
  DestinoDTO,
  JsonValueDTO,
  NotificacaoAlertaDTO,
  RegistroRevisaoDTO,
  RequisicaoRevisaoDTO,
  RespostaTriagemDTO,
  TipoDocumentoDTO,
} from '../types/dto';
import {derivarScores} from './fixtures';

/** Equivale a `MockRuleError`: 409 (estado/versão) e 422 (validação) — mapeamento proposto ao backend. */
const conflito = (msg: string) => new ApiError(409, msg);
const invalido = (msg: string) => new ApiError(422, msg);

export const DESTINO_AUTOMATICO: Record<TipoDocumentoDTO, DestinoDTO | null> = {
  receita_medica: 'FARMACIA_HOSPITALAR',
  laudo_exame: 'PRONTUARIO_ELETRONICO',
  guia_solicitacao_procedimento: 'AUDITORIA_AUTORIZACOES',
  relatorio_alta_internacao: 'PRONTUARIO_ELETRONICO',
  atestado_medico: 'PRONTUARIO_ELETRONICO',
  outro: null,
  indeterminado: null,
};

const FILAS_REVISAO: DestinoDTO[] = ['FILA_REVISAO_HUMANA', 'FILA_REVISAO_HUMANA_PRIORITARIA'];
const CHAVE_CAMPO = /^[a-z0-9_]+(\[\d+\])?(\.[a-z0-9_]+(\[\d+\])?)*$/;

/* ───────────── schemas/review.py ───────────── */

export function validarRequisicao(r: RequisicaoRevisaoDTO): void {
  const correcoes = r.correcoes ?? [];
  if (!Number.isInteger(r.versao_resultado_base) || r.versao_resultado_base < 1)
    throw invalido('versao_resultado_base: deve ser um inteiro ≥ 1');
  if (r.decisao === 'rejeitar' && !r.justificativa) throw invalido('a rejeição exige justificativa');
  if (r.decisao === 'rejeitar' && correcoes.length) throw invalido('a rejeição não aceita correções de campos');
  if (r.decisao === 'aprovar' && correcoes.length && !r.justificativa)
    throw invalido('aprovação com correções exige justificativa');
  const campos = correcoes.map((c) => c.campo);
  if (new Set(campos).size !== campos.length) throw invalido('há mais de uma correção para o mesmo campo');
  for (const campo of campos) if (!CHAVE_CAMPO.test(campo)) throw invalido(`campo: chave inválida ${JSON.stringify(campo)}`);
}

/* ───────────── schemas/routing.py ───────────── */

export function validarInvariantesRoteamento(d: DecisaoRoteamentoDTO): void {
  const urgente = d.prioridade === 'urgente';
  if (d.urgente !== urgente) throw invalido('`urgente` e `prioridade` são inconsistentes');
  if (d.requer_auditoria_humana !== (d.status_revisao === 'pendente'))
    throw invalido('`requer_auditoria_humana` só é verdadeiro com revisão pendente');
  const emFila = FILAS_REVISAO.includes(d.destino);
  if (emFila && d.status_revisao === 'nao_necessaria')
    throw invalido('destino em fila de revisão humana não pode ter revisão desnecessária');
  if (!emFila && (d.status_revisao === 'pendente' || d.status_revisao === 'rejeitada'))
    throw invalido('revisão pendente ou rejeitada só ocorre em fila de revisão humana');
  if (d.urgente && d.destino !== 'FILA_REVISAO_HUMANA_PRIORITARIA' && d.destino !== 'FILA_EMERGENCIA_MEDICA')
    throw invalido('documento urgente só pode ir para fila prioritária ou emergência');
  if (d.destino === 'FILA_EMERGENCIA_MEDICA' && !d.urgente) throw invalido('fila de emergência exige documento sinalizado como urgente');
  if (d.destino === 'FILA_REVISAO_HUMANA_PRIORITARIA' && !d.urgente && d.codigo_motivo !== 'conteudo_ilegivel_pronto_socorro')
    throw invalido('fila prioritária sem urgência exige motivo de ilegível no PS');
  if (d.destino === 'FILA_EMERGENCIA_MEDICA' && !d.notificacao_gerada) throw invalido('encaminhamento à emergência exige o evento de alerta');
  if (d.notificacao_gerada && !d.urgente) throw invalido('alerta só pode ser gerado para documento urgente');
  if ((d.codigo_motivo === 'aprovacao_humana') !== (d.status_revisao === 'aprovada'))
    throw invalido('motivo de aprovação humana e status da revisão são inconsistentes');
  if ((d.codigo_motivo === 'rejeicao_humana') !== (d.status_revisao === 'rejeitada'))
    throw invalido('motivo de rejeição humana e status da revisão são inconsistentes');
}

/* ───────────── rules/routing.py ───────────── */

function notificacaoUrgente(documentoId: string, c: ClassificacaoDocumentoDTO): NotificacaoAlertaDTO {
  const sinais = c.sinais_urgencia ?? [];
  const evidencias = sinais.map((s) => s.evidencia).filter((e): e is string => !!e).slice(0, 20);
  const detalhe = sinais.slice(0, 3).map((s) => s.descricao).join('; ') || 'sinalização urgente registrada';
  return {
    canal: 'Alerta_Plantao_Medico',
    mensagem: `ALERTA DE TRIAGEM: documento com possível urgência; ${detalhe}.`,
    gerada_em: new Date().toISOString(),
    documento_id: documentoId,
    evidencias,
  };
}

function decidirAposAprovacao(documentoId: string, c: ClassificacaoDocumentoDTO): DecisaoRoteamentoDTO {
  const base = {prioridade: c.prioridade, urgente: c.urgente, requer_auditoria_humana: false, status_revisao: 'aprovada', codigo_motivo: 'aprovacao_humana'} as const;
  if (c.urgente) {
    const j = 'Documento urgente aprovado por revisor humano; encaminhado à emergência.';
    return {...base, destino: 'FILA_EMERGENCIA_MEDICA', motivo: j, justificativa_roteamento: j, notificacao_gerada: notificacaoUrgente(documentoId, c)};
  }
  const destino = DESTINO_AUTOMATICO[c.tipo_documento];
  const j =
    'Documento aprovado por revisor humano; ' +
    (destino === null ? 'categoria sem roteamento automático, permanece na fila humana.' : 'encaminhado ao destino determinístico da categoria.');
  return {...base, destino: destino ?? 'FILA_REVISAO_HUMANA', motivo: j, justificativa_roteamento: j, notificacao_gerada: null};
}

function decidirAposRejeicao(c: ClassificacaoDocumentoDTO, destinoAtual: DestinoDTO): DecisaoRoteamentoDTO {
  if (!FILAS_REVISAO.includes(destinoAtual)) throw conflito('somente documentos na fila humana podem ser rejeitados');
  const j = 'Documento rejeitado pelo revisor humano.';
  return {
    destino: destinoAtual,
    prioridade: c.prioridade,
    urgente: c.urgente,
    requer_auditoria_humana: false,
    motivo: j,
    codigo_motivo: 'rejeicao_humana',
    justificativa_roteamento: j,
    status_revisao: 'rejeitada',
    notificacao_gerada: null,
  };
}

/* ───────────── services/review_service.py ───────────── */

type Folha = {obj: Record<string, unknown>; chave: string; campo: CampoDTO};
const PARTE = /^([a-z0-9_]+)(?:\[(\d+)\])?$/;

const inexistente = (caminho: string) => invalido(`campo de correção inexistente: ${caminho}`);

/** Localiza o campo a corrigir. No backend o modelo tem defaults, então objetos omitidos são criados. */
function localizar(dados: DadosExtraidosDTO, caminho: string): Folha {
  const partes = caminho.split('.');
  let obj = dados as Record<string, unknown>;
  for (const parte of partes.slice(0, -1)) {
    const m = PARTE.exec(parte);
    if (!m) throw invalido(`caminho de correção inválido: ${caminho}`);
    const [, attr, idx] = m as unknown as [string, string, string | undefined];
    if (idx !== undefined) {
      const lista = obj[attr];
      if (!Array.isArray(lista) || Number(idx) >= lista.length) throw inexistente(caminho);
      obj = lista[Number(idx)] as Record<string, unknown>;
    } else {
      if (obj[attr] === undefined && ['paciente', 'medico_solicitante', 'datas'].includes(attr)) obj[attr] = {};
      const prox = obj[attr];
      if (prox === null || typeof prox !== 'object' || Array.isArray(prox)) throw inexistente(caminho);
      obj = prox as Record<string, unknown>;
    }
  }
  const final = PARTE.exec(partes[partes.length - 1] ?? '');
  if (!final) throw invalido(`caminho de correção inválido: ${caminho}`);
  const [, attr, idx] = final as unknown as [string, string, string | undefined];
  if (idx !== undefined) throw invalido('correção precisa apontar para um campo extraído, não para um item inteiro');
  // Só campos `{valor,...}` são corrigíveis (por ex., `exames[i].tipo` não é).
  const atual = obj[attr];
  const ehCampo = atual === undefined ? CAMPOS_CORRIGIVEIS.has(padraoDaChave(caminho)) : typeof atual === 'object' && atual !== null && !Array.isArray(atual);
  if (!ehCampo) throw invalido(`campo de extração não corrigível: ${caminho}`);
  return {obj, chave: attr, campo: (atual as CampoDTO | undefined) ?? {situacao: 'ausente'}};
}

const padraoDaChave = (k: string) => k.replace(/\[\d+\]/g, '[*]');

const CAMPOS_CORRIGIVEIS = new Set([
  'paciente.nome', 'paciente.idade', 'medico_solicitante.nome', 'medico_solicitante.crm', 'medico_solicitante.uf_crm',
  'diagnostico_principal', 'cid10_documentado', 'cid10_sugerido', 'conclusao', 'procedimento_solicitado',
  'medicamentos[*].nome', 'medicamentos[*].dosagem', 'medicamentos[*].posologia', 'exames[*].nome',
  'datas.emissao', 'datas.realizacao_exame', 'datas.admissao', 'datas.alta',
]);

function validarValor(caminho: string, valor: JsonValueDTO): void {
  if (valor === null) return;
  const padrao = padraoDaChave(caminho);
  const incompativel = () => invalido(`valor incompatível para o campo ${caminho}`);
  if (padrao === 'paciente.idade') {
    if (typeof valor !== 'number' || !Number.isInteger(valor)) throw incompativel();
  } else if (padrao.startsWith('datas.')) {
    if (typeof valor !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(valor) || Number.isNaN(Date.parse(valor))) throw incompativel();
  } else if (typeof valor !== 'string' || valor.trim().length < 1 || valor.trim().length > 2000) throw incompativel();
}

export function aplicarCorrecao(dados: DadosExtraidosDTO, caminho: string, valorPosterior: JsonValueDTO) {
  const {obj, chave, campo} = localizar(dados, caminho);
  validarValor(caminho, valorPosterior);
  const anterior = (campo.valor ?? null) as JsonValueDTO;
  const novo = typeof valorPosterior === 'string' ? valorPosterior.trim() : valorPosterior;
  if (JSON.stringify(anterior) === JSON.stringify(novo)) throw invalido('a correção não altera o valor do campo');
  obj[chave] = {
    valor: novo,
    confianca: null,
    evidencia: null,
    situacao: novo !== null ? 'presente' : 'ausente',
    revisado_por_humano: true,
  } satisfies CampoDTO;
  return {campo: caminho, valor_anterior: anterior, valor_posterior: novo};
}

export function registrarRevisao(atual: RespostaTriagemDTO, req: RequisicaoRevisaoDTO): RespostaTriagemDTO {
  validarRequisicao(req);
  if (atual.status !== 'em_auditoria') throw conflito('somente resultados em_auditoria podem ser revisados');
  if (!atual.decisao_roteamento || !atual.classificacao || !atual.dados_extraidos)
    throw conflito('resultado sem decisão, classificação ou dados extraídos não pode ser revisado');
  const versaoAtual = atual.versao_resultado ?? 1;
  if (req.versao_resultado_base !== versaoAtual)
    throw conflito('versao_resultado_base desatualizada; recarregue o resultado antes de revisar');

  const dados = structuredClone(atual.dados_extraidos);
  const correcoes = (req.correcoes ?? []).map((c) => aplicarCorrecao(dados, c.campo, c.valor_posterior));

  const decisao =
    req.decisao === 'aprovar'
      ? decidirAposAprovacao(atual.documento_id, atual.classificacao)
      : decidirAposRejeicao(atual.classificacao, atual.decisao_roteamento.destino);
  validarInvariantesRoteamento(decisao); // o backend também falha aqui (ver docs/INTEGRACAO_BACKEND.md)

  const corrigidos = new Set(correcoes.map((c) => padraoDaChave(c.campo)));
  const validacoes = (atual.validacoes ?? []).filter(
    (a) => !(a.campos_afetados ?? []).some((k) => corrigidos.has(padraoDaChave(k))),
  );

  const nova = versaoAtual + 1;
  const registro: RegistroRevisaoDTO = {
    documento_id: atual.documento_id,
    revisor: req.revisor ?? null,
    identidade_verificada: false,
    data_hora: new Date().toISOString(),
    decisao: req.decisao,
    justificativa: req.justificativa ?? null,
    correcoes,
    versao_resultado_anterior: versaoAtual,
    versao_resultado_revisado: nova,
  };

  const aprovado = req.decisao === 'aprovar';
  return {
    ...atual,
    status: aprovado ? 'aprovado_auditoria' : 'rejeitado',
    versao_resultado: nova,
    dados_extraidos: dados,
    scores_por_campo: derivarScores(dados),
    validacoes,
    decisao_roteamento: decisao,
    // `registrar_revisao` não altera `armazenamento_oci`: a regravação do resultado revisado é das Fases 6/7.
    armazenamento_oci: atual.armazenamento_oci,
    historico_revisao: [...(atual.historico_revisao ?? []), registro],
  };
}

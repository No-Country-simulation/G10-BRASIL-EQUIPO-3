/**
 * Fixtures de DEMONSTRAÇÃO (dados 100% sintéticos).
 *
 * Todos os objetos são `RespostaTriagemDTO` com a estrutura exata dos schemas Pydantic
 * (inclusive `origem_analise = {provedor: "mock", dados_de_teste: true}` e
 * `armazenamento_oci.modo_armazenamento = "mock"`). Nada daqui é importado fora de `src/mocks`
 * e dos pontos de entrada do modo de demonstração.
 *
 * Os cenários espelham backend/docs/exemplos/resposta_cenario{1..6}_*.json. O script
 * `scripts/validar-contratos.mjs` valida estes objetos contra os schemas Pydantic reais.
 */
import type {
  AchadoValidacaoDTO,
  CampoDTO,
  CanalOrigemDTO,
  DadosExtraidosDTO,
  DestinoDTO,
  RegistroRevisaoDTO,
  RespostaTriagemDTO,
} from '../types/dto';

/* ───────────── Helpers ───────────── */

export const c = <T,>(valor: T, confianca: number, evidencia?: string): CampoDTO<T> => ({valor, confianca, evidencia});
const ilegivel = <T = string,>(evidencia: string): CampoDTO<T> => ({situacao: 'ilegivel', evidencia});

/** `scores_por_campo` é derivado dos campos (fonte única) — igual a `DadosExtraidos.scores_por_campo()`. */
export function derivarScores(d: DadosExtraidosDTO): Record<string, number> {
  const out: Record<string, number> = {};
  const add = (chave: string, campo?: CampoDTO) => {
    if (campo && campo.confianca !== null && campo.confianca !== undefined) out[chave] = campo.confianca;
  };
  add('paciente.nome', d.paciente?.nome);
  add('paciente.idade', d.paciente?.idade);
  add('medico_solicitante.nome', d.medico_solicitante?.nome);
  add('medico_solicitante.crm', d.medico_solicitante?.crm);
  add('medico_solicitante.uf_crm', d.medico_solicitante?.uf_crm);
  add('diagnostico_principal', d.diagnostico_principal);
  add('cid10_documentado', d.cid10_documentado);
  add('cid10_sugerido', d.cid10_sugerido);
  add('conclusao', d.conclusao);
  add('procedimento_solicitado', d.procedimento_solicitado);
  (d.medicamentos ?? []).forEach((m, i) => {
    add(`medicamentos[${i}].nome`, m.nome);
    add(`medicamentos[${i}].dosagem`, m.dosagem);
    add(`medicamentos[${i}].posologia`, m.posologia);
  });
  (d.exames ?? []).forEach((e, i) => add(`exames[${i}].nome`, e.nome));
  add('datas.emissao', d.datas?.emissao);
  add('datas.realizacao_exame', d.datas?.realizacao_exame);
  add('datas.admissao', d.datas?.admissao);
  add('datas.alta', d.datas?.alta);
  return out;
}

const ORIGEM = {provedor: 'mock', modelo: null, dados_de_teste: true} as const;
const BUCKET = 'mediflow-documentos-clinicos';

type PastaResultado = 'processados' | 'processados/urgentes' | 'auditoria_humana' | 'falhas_processamento';

export function armazenamento(id: string, pasta: PastaResultado, versao = 1, extensaoOriginal = 'pdf') {
  const resultado = `${pasta}/${id}/resultado_v${String(versao).padStart(3, '0')}.json`;
  return {
    bucket: BUCKET,
    caminho_objeto: resultado,
    referencia_documento: `${pasta === 'falhas_processamento' ? 'falhas_processamento' : 'recebidos'}/${id}/original.${extensaoOriginal}`,
    referencia_resultado: resultado,
    persistido: true,
    status_backup: 'sucesso',
    modo_armazenamento: 'mock',
  } as const;
}

/** Monta uma resposta aplicando `scores_por_campo` derivado (como o backend faz). */
function resposta(r: RespostaTriagemDTO): RespostaTriagemDTO {
  return r.dados_extraidos ? {...r, scores_por_campo: derivarScores(r.dados_extraidos)} : r;
}

/* ───────────── Cenários reutilizáveis ───────────── */

const PACIENTES = ['Maria Aparecida Souza', 'Carlos Eduardo Mendes', 'Ana Beatriz Ramos', 'José Antônio Ferreira', 'Luciana Prado Nunes'];
const MEDICOS = [
  {nome: 'Dr. João Pereira Lima', crm: '123456', uf: 'SP'},
  {nome: 'Dra. Renata Silveira', crm: '145892', uf: 'SP'},
  {nome: 'Dr. Paulo Henrique Matos', crm: '208117', uf: 'RJ'},
];
const pick = <T,>(lista: T[], i: number) => lista[i % lista.length]!;

const diaIso = (diasAtras: number) => new Date(Date.now() - diasAtras * 86_400_000).toISOString().slice(0, 10);

/** Receita de rotina, todos os campos confiáveis → FARMACIA_HOSPITALAR (status processado). */
export function cenarioRotina(id: string, canal: CanalOrigemDTO, i = 0): RespostaTriagemDTO {
  const med = pick(MEDICOS, i);
  const nome = pick(PACIENTES, i);
  return resposta({
    documento_id: id,
    status: 'processado',
    versao_resultado: 1,
    canal_origem: canal,
    classificacao: {
      tipo_documento: 'receita_medica',
      especialidade: 'Clínica médica',
      prioridade: 'rotina',
      urgente: false,
      score_confianca_classificacao: 0.97,
      sinais_urgencia: [],
    },
    dados_extraidos: {
      paciente: {nome: c(nome, 0.98, `Paciente: ${nome}`), idade: c(47, 0.95, '47 anos')},
      medico_solicitante: {
        nome: c(med.nome, 0.96, med.nome),
        crm: c(med.crm, 0.93, `CRM-${med.uf} ${med.crm}`),
        uf_crm: c(med.uf, 0.93, `CRM-${med.uf} ${med.crm}`),
      },
      diagnostico_principal: c('Faringoamigdalite aguda', 0.9, 'Dx: faringoamigdalite aguda'),
      medicamentos: [
        {
          nome: c('Amoxicilina', 0.94, 'Amoxicilina 500 mg'),
          dosagem: c('500 mg', 0.92, 'Amoxicilina 500 mg'),
          posologia: c('1 cápsula a cada 8 horas por 7 dias', 0.9, '1 cápsula de 8/8h por 7 dias'),
        },
      ],
      datas: {emissao: c(diaIso(1), 0.91, 'data de emissão no cabeçalho')},
      score_confianca_extracao: 0.93,
    },
    validacoes: [],
    decisao_roteamento: {
      destino: 'FARMACIA_HOSPITALAR',
      prioridade: 'rotina',
      urgente: false,
      requer_auditoria_humana: false,
      motivo: 'Campos obrigatórios confiáveis e validações aprovadas',
      codigo_motivo: 'criterios_atendidos',
      justificativa_roteamento:
        'Receita médica não urgente, com todos os campos obrigatórios acima do limiar; roteada pela categoria.',
      status_revisao: 'nao_necessaria',
      notificacao_gerada: null,
    },
    armazenamento_oci: armazenamento(id, 'processados', 1, 'txt'),
    historico_revisao: [],
    erro: null,
    origem_analise: ORIGEM,
  });
}

/** Laudo com possível urgência e dados confiáveis → FILA_EMERGENCIA_MEDICA + alerta. */
export function cenarioUrgenteEmergencia(
  id: string,
  canal: CanalOrigemDTO = 'PRONTO_SOCORRO',
  alertaHaMinutos = 0,
): RespostaTriagemDTO {
  const evidencia = 'Falha de enchimento em arteria pulmonar principal direita compativel com TEP agudo';
  return resposta({
    documento_id: id,
    status: 'processado',
    versao_resultado: 1,
    canal_origem: canal,
    classificacao: {
      tipo_documento: 'laudo_exame',
      especialidade: 'Radiologia / Pneumologia',
      prioridade: 'urgente',
      urgente: true,
      score_confianca_classificacao: 0.99,
      sinais_urgencia: [
        {origem: 'llm', descricao: 'Achado crítico compatível com tromboembolismo pulmonar agudo', evidencia},
        {origem: 'regra', descricao: 'Termo de urgência no documento', evidencia: 'Sugere-se correlacao clinica urgente'},
      ],
    },
    dados_extraidos: {
      paciente: {
        nome: c('Carlos Eduardo Mendes', 0.98, 'Paciente: Carlos Eduardo Mendes'),
        idade: c(52, 0.97, '52 anos'),
      },
      medico_solicitante: {
        nome: c('Dra. Renata Silveira', 0.95, 'Solicitante: Dra. Renata Silveira'),
        crm: c('145892', 0.96, 'CRM-SP 145892'),
        uf_crm: c('SP', 0.96, 'CRM-SP 145892'),
      },
      diagnostico_principal: c('Tromboembolismo Pulmonar Agudo (TEP)', 0.97, 'Quadro compativel com Tromboembolismo Pulmonar Agudo'),
      cid10_sugerido: {valor: 'I26.9', confianca: 0.8},
      conclusao: c('Quadro compativel com Tromboembolismo Pulmonar Agudo', 0.97, 'CONCLUSÃO: Quadro compativel com Tromboembolismo Pulmonar Agudo'),
      exames: [{nome: c('Tomografia de Torax com contraste', 0.98, 'Exame: Tomografia de Torax com contraste'), tipo: 'realizado'}],
      score_confianca_extracao: 0.96,
    },
    validacoes: [],
    decisao_roteamento: {
      destino: 'FILA_EMERGENCIA_MEDICA',
      prioridade: 'urgente',
      urgente: true,
      requer_auditoria_humana: false,
      motivo: 'Urgência sinalizada com paciente e evidência do achado confiáveis',
      codigo_motivo: 'urgencia_confiavel',
      justificativa_roteamento:
        'Achado crítico de alta gravidade (TEP agudo) em paciente sintomático, com identificação do paciente e evidência textual confiáveis.',
      status_revisao: 'nao_necessaria',
      notificacao_gerada: {
        canal: 'Alerta_Plantao_Medico',
        mensagem: 'ALERTA URGENTE: laudo com achado crítico compatível com TEP agudo para paciente do Pronto-Socorro.',
        gerada_em: new Date(Date.now() - alertaHaMinutos * 60_000).toISOString(),
        documento_id: id,
        evidencias: [evidencia],
      },
    },
    armazenamento_oci: armazenamento(id, 'processados/urgentes', 1, 'pdf'),
    historico_revisao: [],
    erro: null,
    origem_analise: ORIGEM,
  });
}

/** Receita com CRM de baixa confiança → FILA_REVISAO_HUMANA (em_auditoria). */
export function cenarioBaixaConfianca(id: string, canal: CanalOrigemDTO = 'AMBULATORIO'): RespostaTriagemDTO {
  return resposta({
    documento_id: id,
    status: 'em_auditoria',
    versao_resultado: 1,
    canal_origem: canal,
    classificacao: {
      tipo_documento: 'receita_medica',
      especialidade: 'Clínica médica',
      prioridade: 'rotina',
      urgente: false,
      score_confianca_classificacao: 0.96,
      sinais_urgencia: [],
    },
    dados_extraidos: {
      paciente: {nome: c('Maria Aparecida Souza', 0.98, 'Paciente: Maria Aparecida Souza')},
      medico_solicitante: {
        nome: c('Dr. João Pereira Lima', 0.96, 'Dr. João Pereira Lima'),
        crm: c('123456', 0.45, 'CRM-SP 12?456 (carimbo borrado)'),
        uf_crm: c('SP', 0.9, 'CRM-SP'),
      },
      medicamentos: [
        {
          nome: c('Amoxicilina', 0.92, 'Amoxicilina 500 mg'),
          dosagem: c('500 mg', 0.9, 'Amoxicilina 500 mg'),
          posologia: c('1 cápsula a cada 8 horas por 7 dias', 0.9, '1 cápsula de 8/8h por 7 dias'),
        },
      ],
      datas: {emissao: c(diaIso(2), 0.91, 'data de emissão no cabeçalho')},
      score_confianca_extracao: 0.82,
    },
    validacoes: [
      {
        codigo: 'baixa_confianca',
        descricao: 'Score do CRM (0,45) abaixo do limiar de referência (0,80)',
        gravidade: 'alta',
        campos_afetados: ['medico_solicitante.crm'],
        evidencia: 'CRM-SP 12?456 (carimbo borrado)',
        acao_sugerida: 'Conferir o número do CRM no documento original',
      },
    ],
    decisao_roteamento: {
      destino: 'FILA_REVISAO_HUMANA',
      prioridade: 'rotina',
      urgente: false,
      requer_auditoria_humana: true,
      motivo: 'Score do CRM abaixo do limiar de referência',
      codigo_motivo: 'baixa_confianca_campo_obrigatorio',
      justificativa_roteamento:
        'Documento não urgente com campo obrigatório (CRM) abaixo do limiar; roteamento automático não permitido.',
      status_revisao: 'pendente',
      notificacao_gerada: null,
    },
    armazenamento_oci: armazenamento(id, 'auditoria_humana', 1, 'png'),
    historico_revisao: [],
    erro: null,
    origem_analise: ORIGEM,
  });
}

/** Urgente, mas paciente ilegível → FILA_REVISAO_HUMANA_PRIORITARIA (urgência NUNCA é rebaixada). */
export function cenarioUrgenteIlegivel(id: string, canal: CanalOrigemDTO = 'PRONTO_SOCORRO'): RespostaTriagemDTO {
  return resposta({
    documento_id: id,
    status: 'em_auditoria',
    versao_resultado: 1,
    canal_origem: canal,
    classificacao: {
      tipo_documento: 'laudo_exame',
      especialidade: 'Radiologia / Pneumologia',
      prioridade: 'urgente',
      urgente: true,
      score_confianca_classificacao: 0.88,
      sinais_urgencia: [
        {
          origem: 'llm',
          descricao: 'Achado compatível com TEP agudo',
          evidencia: 'falha de enchimento em artéria pulmonar compatível com TEP agudo',
        },
      ],
    },
    dados_extraidos: {
      paciente: {nome: ilegivel('nome do paciente borrado na imagem'), idade: c(61, 0.55, '6? anos')},
      diagnostico_principal: c('Tromboembolismo Pulmonar Agudo (TEP)', 0.85, 'compatível com TEP agudo'),
      score_confianca_extracao: 0.5,
    },
    validacoes: [
      {
        codigo: 'campo_ilegivel',
        descricao: 'Nome do paciente ilegível no documento',
        gravidade: 'alta',
        campos_afetados: ['paciente.nome'],
        evidencia: 'nome do paciente borrado na imagem',
        acao_sugerida: 'Identificar o paciente no documento original antes de qualquer acionamento',
      },
      {
        codigo: 'baixa_confianca',
        descricao: 'Idade com score baixo (0,55)',
        gravidade: 'media',
        campos_afetados: ['paciente.idade'],
      },
    ],
    decisao_roteamento: {
      destino: 'FILA_REVISAO_HUMANA_PRIORITARIA',
      prioridade: 'urgente',
      urgente: true,
      requer_auditoria_humana: true,
      motivo: 'Urgência sinalizada, mas o paciente não pôde ser identificado',
      codigo_motivo: 'urgencia_dado_critico_insuficiente',
      justificativa_roteamento:
        'Documento potencialmente urgente com campo crítico ilegível; prioridade urgente preservada e revisão humana prioritária obrigatória.',
      status_revisao: 'pendente',
      notificacao_gerada: null,
    },
    armazenamento_oci: armazenamento(id, 'auditoria_humana', 1, 'jpg'),
    historico_revisao: [],
    erro: null,
    origem_analise: ORIGEM,
  });
}

/** Falha técnica (arquivo corrompido). Sem classificação, dados, validações nem destino. */
export function cenarioErro(id: string, canal: CanalOrigemDTO = 'LABORATORIO', haMinutos = 0): RespostaTriagemDTO {
  return {
    documento_id: id,
    status: 'erro',
    versao_resultado: 1,
    canal_origem: canal,
    validacoes: [],
    armazenamento_oci: armazenamento(id, 'falhas_processamento', 1, 'pdf'),
    historico_revisao: [],
    erro: {
      codigo: 'arquivo_corrompido',
      descricao: 'Não foi possível abrir o PDF: estrutura do arquivo inválida.',
      etapa: 'normalize_document',
      ocorrido_em: new Date(Date.now() - haMinutos * 60_000).toISOString(),
    },
    origem_analise: null,
  };
}

/** Guia de procedimento, rotina, critérios atendidos → AUDITORIA_AUTORIZACOES. */
export function cenarioGuia(id: string, canal: CanalOrigemDTO): RespostaTriagemDTO {
  return resposta({
    documento_id: id,
    status: 'processado',
    versao_resultado: 1,
    canal_origem: canal,
    classificacao: {
      tipo_documento: 'guia_solicitacao_procedimento',
      especialidade: 'Ortopedia',
      prioridade: 'rotina',
      urgente: false,
      score_confianca_classificacao: 0.94,
      sinais_urgencia: [],
    },
    dados_extraidos: {
      paciente: {nome: c('Ana Beatriz Ramos', 0.97, 'Beneficiário: Ana Beatriz Ramos'), idade: c(34, 0.9, '34 anos')},
      medico_solicitante: {
        nome: c('Dr. Paulo Henrique Matos', 0.95, 'Dr. Paulo Henrique Matos'),
        crm: c('208117', 0.94, 'CRM-RJ 208117'),
        uf_crm: c('RJ', 0.94, 'CRM-RJ 208117'),
      },
      procedimento_solicitado: c('Ressonância magnética de joelho direito', 0.93, 'Solicito RM de joelho direito'),
      cid10_documentado: c('M23.2', 0.9, 'CID M23.2'),
      datas: {emissao: c(diaIso(3), 0.9, 'data de emissão na guia')},
      score_confianca_extracao: 0.92,
    },
    validacoes: [],
    decisao_roteamento: {
      destino: 'AUDITORIA_AUTORIZACOES',
      prioridade: 'rotina',
      urgente: false,
      requer_auditoria_humana: false,
      motivo: 'Campos obrigatórios confiáveis e validações aprovadas',
      codigo_motivo: 'criterios_atendidos',
      justificativa_roteamento: 'Guia de procedimento não urgente com campos obrigatórios confiáveis; roteada pela categoria.',
      status_revisao: 'nao_necessaria',
      notificacao_gerada: null,
    },
    armazenamento_oci: armazenamento(id, 'processados', 1, 'pdf'),
    historico_revisao: [],
    erro: null,
    origem_analise: ORIGEM,
  });
}

/** Documento fora das categorias conhecidas → sempre revisão humana. */
export function cenarioOutro(id: string, canal: CanalOrigemDTO): RespostaTriagemDTO {
  return resposta({
    documento_id: id,
    status: 'em_auditoria',
    versao_resultado: 1,
    canal_origem: canal,
    classificacao: {
      tipo_documento: 'outro',
      especialidade: null,
      prioridade: 'rotina',
      urgente: false,
      score_confianca_classificacao: 0.71,
      sinais_urgencia: [],
    },
    dados_extraidos: {
      paciente: {nome: c('Luciana Prado Nunes', 0.9, 'Nome: Luciana Prado Nunes')},
      conclusao: c('Declaração de comparecimento à consulta', 0.78, 'Declaro que a paciente compareceu à consulta'),
      datas: {emissao: c(diaIso(1), 0.8, 'data no rodapé')},
      score_confianca_extracao: 0.8,
    },
    validacoes: [
      {
        codigo: 'classificacao_incerta',
        descricao: 'A categoria documental não pôde ser determinada com segurança.',
        gravidade: 'media',
        campos_afetados: [],
        acao_sugerida: 'Conferir o tipo do documento no original.',
      },
    ],
    decisao_roteamento: {
      destino: 'FILA_REVISAO_HUMANA',
      prioridade: 'rotina',
      urgente: false,
      requer_auditoria_humana: true,
      motivo: 'A categoria documental exige revisão humana.',
      codigo_motivo: 'categoria_sem_roteamento_automatico',
      justificativa_roteamento: 'A categoria documental exige revisão humana.',
      status_revisao: 'pendente',
      notificacao_gerada: null,
    },
    armazenamento_oci: armazenamento(id, 'auditoria_humana', 1, 'pdf'),
    historico_revisao: [],
    erro: null,
    origem_analise: ORIGEM,
  });
}

/** Receita de rotina vinda do Pronto-Socorro com dosagem ilegível → fila prioritária SEM urgência. */
export function cenarioPsIlegivel(id: string): RespostaTriagemDTO {
  return resposta({
    documento_id: id,
    status: 'em_auditoria',
    versao_resultado: 1,
    canal_origem: 'PRONTO_SOCORRO',
    classificacao: {
      tipo_documento: 'receita_medica',
      especialidade: 'Clínica médica',
      prioridade: 'rotina',
      urgente: false,
      score_confianca_classificacao: 0.9,
      sinais_urgencia: [],
    },
    dados_extraidos: {
      paciente: {nome: c('José Antônio Ferreira', 0.96, 'Paciente: José Antônio Ferreira')},
      medico_solicitante: {
        nome: c('Dra. Renata Silveira', 0.94, 'Dra. Renata Silveira'),
        crm: c('145892', 0.93, 'CRM-SP 145892'),
        uf_crm: c('SP', 0.93, 'CRM-SP 145892'),
      },
      medicamentos: [
        {
          nome: c('Dipirona', 0.92, 'Dipirona'),
          dosagem: ilegivel('dosagem manchada na receita'),
          posologia: c('1 comprimido a cada 6 horas se dor', 0.88, '1 cp 6/6h se dor'),
        },
      ],
      datas: {emissao: c(diaIso(0), 0.9, 'data de hoje no cabeçalho')},
      score_confianca_extracao: 0.76,
    },
    validacoes: [
      {
        codigo: 'campo_ilegivel',
        descricao: "O campo obrigatório 'Dosagem' está ilegível.",
        gravidade: 'alta',
        campos_afetados: ['medicamentos[0].dosagem'],
        acao_sugerida: 'Solicitar conferência humana do documento original.',
      },
    ],
    decisao_roteamento: {
      destino: 'FILA_REVISAO_HUMANA_PRIORITARIA',
      prioridade: 'rotina',
      urgente: false,
      requer_auditoria_humana: true,
      motivo: 'Conteúdo obrigatório ilegível recebido no Pronto-Socorro.',
      codigo_motivo: 'conteudo_ilegivel_pronto_socorro',
      justificativa_roteamento: 'Conteúdo obrigatório ilegível recebido no Pronto-Socorro.',
      status_revisao: 'pendente',
      notificacao_gerada: null,
    },
    armazenamento_oci: armazenamento(id, 'auditoria_humana', 1, 'jpg'),
    historico_revisao: [],
    erro: null,
    origem_analise: ORIGEM,
  });
}

/* ───────────── Estados pós-revisão (semente) ───────────── */

function aprovadoComCorrecao(id: string): RespostaTriagemDTO {
  const base = cenarioBaixaConfianca(id);
  const dados = structuredClone(base.dados_extraidos!);
  dados.medico_solicitante!.crm = {valor: '128456', revisado_por_humano: true};
  const registro: RegistroRevisaoDTO = {
    documento_id: id,
    revisor: 'revisor.exemplo',
    identidade_verificada: false,
    data_hora: new Date(Date.now() - 95 * 60_000).toISOString(),
    decisao: 'aprovar',
    justificativa: 'CRM corrigido conforme o carimbo do documento original',
    correcoes: [{campo: 'medico_solicitante.crm', valor_anterior: '123456', valor_posterior: '128456'}],
    versao_resultado_anterior: 1,
    versao_resultado_revisado: 2,
  };
  return resposta({
    ...base,
    status: 'aprovado_auditoria',
    versao_resultado: 2,
    dados_extraidos: dados,
    validacoes: [],
    decisao_roteamento: {
      destino: 'FARMACIA_HOSPITALAR',
      prioridade: 'rotina',
      urgente: false,
      requer_auditoria_humana: false,
      motivo: 'Documento aprovado por revisor humano; encaminhado ao destino determinístico da categoria.',
      codigo_motivo: 'aprovacao_humana',
      justificativa_roteamento: 'Documento aprovado por revisor humano; encaminhado ao destino determinístico da categoria.',
      status_revisao: 'aprovada',
      notificacao_gerada: null,
    },
    armazenamento_oci: armazenamento(id, 'processados', 2, 'png'),
    historico_revisao: [registro],
  });
}

function rejeitado(id: string): RespostaTriagemDTO {
  const base = cenarioOutro(id, 'OPERADORA');
  const registro: RegistroRevisaoDTO = {
    documento_id: id,
    revisor: 'revisor.exemplo',
    identidade_verificada: false,
    data_hora: new Date(Date.now() - 3 * 3_600_000).toISOString(),
    decisao: 'rejeitar',
    justificativa: 'Documento administrativo fora do escopo clínico da triagem.',
    correcoes: [],
    versao_resultado_anterior: 1,
    versao_resultado_revisado: 2,
  };
  return resposta({
    ...base,
    status: 'rejeitado',
    versao_resultado: 2,
    decisao_roteamento: {
      ...base.decisao_roteamento!,
      requer_auditoria_humana: false,
      motivo: 'Documento rejeitado pelo revisor humano.',
      codigo_motivo: 'rejeicao_humana',
      justificativa_roteamento: 'Documento rejeitado pelo revisor humano.',
      status_revisao: 'rejeitada',
    },
    armazenamento_oci: armazenamento(id, 'auditoria_humana', 2, 'pdf'),
    historico_revisao: [registro],
  });
}

/* ───────────── Semente do modo de demonstração ───────────── */

export interface SementeDemo {
  dto: RespostaTriagemDTO;
  nomeArquivo: string;
  /** Minutos atrás em que o arquivo foi "recebido". */
  minutosAtras: number;
}

export function sementes(): SementeDemo[] {
  return [
    {dto: cenarioUrgenteIlegivel('DOC-URG-ILEG-0001'), nomeArquivo: 'laudo-tomografia-borrado.jpg', minutosAtras: 18},
    {dto: cenarioPsIlegivel('DOC-PS-ILEG-0001'), nomeArquivo: 'receita-ps-dipirona.jpg', minutosAtras: 26},
    {dto: cenarioBaixaConfianca('DOC-BAIXA-CONF-0001'), nomeArquivo: 'receita-carimbo-borrado.png', minutosAtras: 52},
    {dto: cenarioOutro('DOC-OUTRO-0001', 'OPERADORA'), nomeArquivo: 'declaracao-comparecimento.pdf', minutosAtras: 75},
    {dto: cenarioUrgenteEmergencia('DOC-CLIN-2026-8942', 'PRONTO_SOCORRO', 12), nomeArquivo: 'laudo-tc-torax.pdf', minutosAtras: 14},
    {dto: cenarioRotina('DOC-ROTINA-0001', 'AMBULATORIO'), nomeArquivo: 'receita-amoxicilina.txt', minutosAtras: 130},
    {dto: cenarioGuia('DOC-GUIA-0001', 'OPERADORA'), nomeArquivo: 'guia-rm-joelho.pdf', minutosAtras: 190},
    {dto: aprovadoComCorrecao('DOC-APROVADO-0001'), nomeArquivo: 'receita-crm-corrigido.png', minutosAtras: 240},
    {dto: rejeitado('DOC-REJEITADO-0001'), nomeArquivo: 'comprovante-operadora.pdf', minutosAtras: 400},
    {dto: cenarioErro('DOC-ERRO-0001', 'LABORATORIO', 40), nomeArquivo: 'exame-corrompido.pdf', minutosAtras: 45},
  ];
}

export type {AchadoValidacaoDTO, DestinoDTO};

/**
 * Rótulos de exibição (pt-BR). Ficam separados dos valores do backend, que são os
 * identificadores estáveis (ver docstring de enums.py): o texto pode mudar sem afetar contratos.
 */
import type {
  CanalOrigem,
  CodigoErro,
  CodigoValidacao,
  Destino,
  GravidadeValidacao,
  MotivoRoteamento,
  OrigemSinal,
  Prioridade,
  SituacaoCampo,
  StatusProcessamento,
  StatusRevisao,
  TipoDocumento,
} from '../types/domain';
import type {NivelConfianca, TomStatus} from '../types/view';

export const STATUS_ROTULOS: Record<StatusProcessamento, string> = {
  recebido: 'Recebido',
  processando: 'Processando',
  processado: 'Processado',
  em_auditoria: 'Em auditoria',
  aprovado_auditoria: 'Aprovado na auditoria',
  rejeitado: 'Rejeitado',
  erro: 'Erro',
};

export const STATUS_TONS: Record<StatusProcessamento, TomStatus> = {
  recebido: 'neutro',
  processando: 'info',
  processado: 'info',
  em_auditoria: 'alerta',
  aprovado_auditoria: 'sucesso',
  rejeitado: 'erro',
  erro: 'erro',
};

export const PRIORIDADE_ROTULOS: Record<Prioridade, string> = {
  rotina: 'Rotina',
  urgente: 'Urgente',
};

export const TIPO_DOCUMENTO_ROTULOS: Record<TipoDocumento, string> = {
  receita_medica: 'Receita médica',
  laudo_exame: 'Laudo de exame',
  guia_solicitacao_procedimento: 'Guia de solicitação de procedimento',
  relatorio_alta_internacao: 'Relatório de alta ou internação',
  atestado_medico: 'Atestado médico',
  outro: 'Outro',
  indeterminado: 'Indeterminado',
};

export const CANAL_ROTULOS: Record<CanalOrigem, string> = {
  PRONTO_SOCORRO: 'Pronto-Socorro',
  AMBULATORIO: 'Ambulatório',
  INTERNACAO: 'Internação',
  LABORATORIO: 'Laboratório',
  OPERADORA: 'Operadora',
  OUTRO: 'Outro',
};

export const DESTINO_ROTULOS: Record<Destino, string> = {
  FILA_REVISAO_HUMANA_PRIORITARIA: 'Fila de revisão humana prioritária',
  FILA_REVISAO_HUMANA: 'Fila de revisão humana',
  FILA_EMERGENCIA_MEDICA: 'Fila de emergência médica',
  AUDITORIA_AUTORIZACOES: 'Auditoria de autorizações',
  FARMACIA_HOSPITALAR: 'Farmácia hospitalar',
  PRONTUARIO_ELETRONICO: 'Prontuário eletrônico',
};

export const STATUS_REVISAO_ROTULOS: Record<StatusRevisao, string> = {
  nao_necessaria: 'Revisão não necessária',
  pendente: 'Revisão humana pendente',
  aprovada: 'Aprovada por revisor',
  rejeitada: 'Rejeitada por revisor',
};

export const MOTIVO_ROTULOS: Record<MotivoRoteamento, string> = {
  urgencia_confiavel: 'Urgência com dados confiáveis',
  urgencia_dado_critico_insuficiente: 'Urgência com dado crítico insuficiente',
  conteudo_ilegivel: 'Conteúdo ilegível',
  conteudo_ilegivel_pronto_socorro: 'Conteúdo ilegível (Pronto-Socorro)',
  medicamento_alto_risco: 'Medicamento de alto risco',
  baixa_confianca_campo_obrigatorio: 'Baixa confiança em campo obrigatório',
  campo_obrigatorio_ausente: 'Campo obrigatório ausente',
  categoria_sem_roteamento_automatico: 'Categoria sem roteamento automático',
  criterios_atendidos: 'Critérios de roteamento atendidos',
  aprovacao_humana: 'Aprovação humana',
  rejeicao_humana: 'Rejeição humana',
};

export const ORIGEM_SINAL_ROTULOS: Record<OrigemSinal, string> = {
  llm: 'Identificado pela IA',
  regra: 'Regra determinística',
};

export const SITUACAO_ROTULOS: Record<SituacaoCampo, string> = {
  presente: 'Presente',
  ausente: 'Não encontrado',
  ilegivel: 'Ilegível',
};

export const CODIGO_VALIDACAO_ROTULOS: Record<CodigoValidacao, string> = {
  campo_ausente: 'Campo ausente',
  campo_ilegivel: 'Campo ilegível',
  conteudo_ilegivel: 'Conteúdo ilegível',
  formato_invalido: 'Formato inválido',
  contradicao: 'Contradição',
  baixa_confianca: 'Baixa confiança',
  classificacao_incerta: 'Classificação incerta',
  possivel_inconsistencia_clinica: 'Possível inconsistência clínica',
  medicamento_alto_risco: 'Medicamento de alto risco',
};

export const GRAVIDADE_ROTULOS: Record<GravidadeValidacao, string> = {
  baixa: 'Gravidade baixa',
  media: 'Gravidade média',
  alta: 'Gravidade alta',
};

export const ERRO_ROTULOS: Record<CodigoErro, string> = {
  arquivo_invalido: 'Arquivo inválido',
  formato_nao_suportado: 'Formato não suportado',
  arquivo_corrompido: 'Arquivo corrompido',
  arquivo_muito_grande: 'Arquivo muito grande',
  limite_paginas_excedido: 'Limite de páginas excedido',
  provedor_indisponivel: 'Provedor de IA indisponível',
  provedor_timeout: 'Tempo esgotado no provedor de IA',
  resposta_invalida_provedor: 'Resposta inválida do provedor de IA',
  falha_armazenamento: 'Falha no armazenamento',
  erro_interno: 'Erro interno',
};

/** Canais aceitos no envio, na ordem em que aparecem no seletor. */
export const CANAIS_SELECIONAVEIS: CanalOrigem[] = [
  'PRONTO_SOCORRO',
  'AMBULATORIO',
  'INTERNACAO',
  'LABORATORIO',
  'OPERADORA',
  'OUTRO',
];

/** Rótulos curtos para eixos de gráfico. */
export const DESTINO_CURTO: Record<Destino, string> = {
  FILA_EMERGENCIA_MEDICA: 'Emergência',
  FILA_REVISAO_HUMANA_PRIORITARIA: 'Rev. prioritária',
  FILA_REVISAO_HUMANA: 'Rev. humana',
  AUDITORIA_AUTORIZACOES: 'Auditoria',
  FARMACIA_HOSPITALAR: 'Farmácia',
  PRONTUARIO_ELETRONICO: 'Prontuário',
};

export const NIVEL_ROTULOS: Record<NivelConfianca, string> = {
  alta: 'Alta confiança',
  media: 'Média confiança',
  baixa: 'Baixa confiança',
};

/**
 * DTOs — espelho EXATO dos schemas Pydantic do backend (`backend/app/schemas/`).
 *
 * Regras desta camada:
 *  - nomes de propriedades e valores de enums ficam idênticos aos do backend (snake_case, pt-BR);
 *  - nada aqui é "amigável": rótulos, cores e conversões vivem em `adapters/`;
 *  - campos opcionais refletem os defaults do Pydantic (o backend pode omiti-los no JSON);
 *  - não há nenhuma propriedade que não exista no backend.
 *
 * Fonte de verdade: enums.py, input.py, classification.py, extraction.py, validation.py,
 * routing.py, events.py, storage.py, review.py e output.py.
 */

/* ───────────── Enums (valores estáveis; ver enums.py) ───────────── */

export const TIPOS_ARQUIVO = ['PDF', 'PNG', 'JPEG', 'TXT'] as const;
export type TipoArquivoDTO = (typeof TIPOS_ARQUIVO)[number];

export const CANAIS_ORIGEM = [
  'PRONTO_SOCORRO',
  'AMBULATORIO',
  'INTERNACAO',
  'LABORATORIO',
  'OPERADORA',
  'OUTRO',
] as const;
export type CanalOrigemDTO = (typeof CANAIS_ORIGEM)[number];

export const TIPOS_DOCUMENTO = [
  'receita_medica',
  'laudo_exame',
  'guia_solicitacao_procedimento',
  'relatorio_alta_internacao',
  'atestado_medico',
  'outro',
  'indeterminado',
] as const;
export type TipoDocumentoDTO = (typeof TIPOS_DOCUMENTO)[number];

/** Sinalização clínica de possível urgência. NÃO é confiança da extração. */
export const PRIORIDADES = ['rotina', 'urgente'] as const;
export type PrioridadeDTO = (typeof PRIORIDADES)[number];

export const STATUS_PROCESSAMENTO = [
  'recebido',
  'processando',
  'processado',
  'em_auditoria',
  'aprovado_auditoria',
  'rejeitado',
  'erro',
] as const;
export type StatusProcessamentoDTO = (typeof STATUS_PROCESSAMENTO)[number];

export const DESTINOS = [
  'FILA_REVISAO_HUMANA_PRIORITARIA',
  'FILA_REVISAO_HUMANA',
  'FILA_EMERGENCIA_MEDICA',
  'AUDITORIA_AUTORIZACOES',
  'FARMACIA_HOSPITALAR',
  'PRONTUARIO_ELETRONICO',
] as const;
export type DestinoDTO = (typeof DESTINOS)[number];

export const STATUS_REVISAO = ['nao_necessaria', 'pendente', 'aprovada', 'rejeitada'] as const;
export type StatusRevisaoDTO = (typeof STATUS_REVISAO)[number];

export const MOTIVOS_ROTEAMENTO = [
  'urgencia_confiavel',
  'urgencia_dado_critico_insuficiente',
  'conteudo_ilegivel',
  'conteudo_ilegivel_pronto_socorro',
  'medicamento_alto_risco',
  'baixa_confianca_campo_obrigatorio',
  'campo_obrigatorio_ausente',
  'categoria_sem_roteamento_automatico',
  'criterios_atendidos',
  'aprovacao_humana',
  'rejeicao_humana',
] as const;
export type MotivoRoteamentoDTO = (typeof MOTIVOS_ROTEAMENTO)[number];

export const CANAIS_NOTIFICACAO = ['Alerta_Plantao_Medico'] as const;
export type CanalNotificacaoDTO = (typeof CANAIS_NOTIFICACAO)[number];

export const SITUACOES_CAMPO = ['presente', 'ausente', 'ilegivel'] as const;
export type SituacaoCampoDTO = (typeof SITUACOES_CAMPO)[number];

export const TIPOS_EXAME = ['solicitado', 'realizado'] as const;
export type TipoExameDTO = (typeof TIPOS_EXAME)[number];

export const ORIGENS_SINAL = ['llm', 'regra'] as const;
export type OrigemSinalDTO = (typeof ORIGENS_SINAL)[number];

export const CODIGOS_VALIDACAO = [
  'campo_ausente',
  'campo_ilegivel',
  'conteudo_ilegivel',
  'formato_invalido',
  'contradicao',
  'baixa_confianca',
  'classificacao_incerta',
  'possivel_inconsistencia_clinica',
  'medicamento_alto_risco',
] as const;
export type CodigoValidacaoDTO = (typeof CODIGOS_VALIDACAO)[number];

export const GRAVIDADES_VALIDACAO = ['baixa', 'media', 'alta'] as const;
export type GravidadeValidacaoDTO = (typeof GRAVIDADES_VALIDACAO)[number];

export const DECISOES_REVISAO = ['aprovar', 'rejeitar'] as const;
export type DecisaoRevisaoDTO = (typeof DECISOES_REVISAO)[number];

export const MODOS_ARMAZENAMENTO = ['mock', 'oci_real'] as const;
export type ModoArmazenamentoDTO = (typeof MODOS_ARMAZENAMENTO)[number];

export const STATUS_BACKUP = ['sucesso', 'falha', 'nao_realizado'] as const;
export type StatusBackupDTO = (typeof STATUS_BACKUP)[number];

export const CODIGOS_ERRO = [
  'arquivo_invalido',
  'formato_nao_suportado',
  'arquivo_corrompido',
  'arquivo_muito_grande',
  'limite_paginas_excedido',
  'provedor_indisponivel',
  'provedor_timeout',
  'resposta_invalida_provedor',
  'falha_armazenamento',
  'erro_interno',
] as const;
export type CodigoErroDTO = (typeof CODIGOS_ERRO)[number];

/* ───────────── Entrada (input.py) ───────────── */

/** Corpo JSON de entrada (texto já extraído). Uploads binários usam multipart/form-data. */
export interface EntradaTriagemDTO {
  documento_id?: string | null;
  tipo_arquivo: TipoArquivoDTO;
  documento_texto: string;
  canal_origem: CanalOrigemDTO;
}

/* ───────────── Classificação (classification.py) ───────────── */

export interface SinalUrgenciaDTO {
  origem: OrigemSinalDTO;
  descricao: string;
  evidencia?: string | null;
}

export interface ClassificacaoDocumentoDTO {
  tipo_documento: TipoDocumentoDTO;
  especialidade?: string | null;
  prioridade: PrioridadeDTO;
  urgente: boolean;
  /** 0–1 */
  score_confianca_classificacao: number;
  sinais_urgencia?: SinalUrgenciaDTO[];
}

/* ───────────── Extração (extraction.py) ───────────── */

/** `{valor, confianca, evidencia, situacao, revisado_por_humano}` — todos opcionais no JSON. */
export interface CampoDTO<T = unknown> {
  valor?: T | null;
  /** 0–1. `null` quando não avaliável (ausente, ilegível ou revisado por humano). */
  confianca?: number | null;
  evidencia?: string | null;
  situacao?: SituacaoCampoDTO;
  revisado_por_humano?: boolean;
}

export interface PacienteDTO {
  nome?: CampoDTO<string>;
  idade?: CampoDTO<number>;
}

export interface ProfissionalSolicitanteDTO {
  nome?: CampoDTO<string>;
  crm?: CampoDTO<string>;
  uf_crm?: CampoDTO<string>;
}

export interface MedicamentoDTO {
  nome?: CampoDTO<string>;
  dosagem?: CampoDTO<string>;
  posologia?: CampoDTO<string>;
}

export interface ExameDTO {
  nome?: CampoDTO<string>;
  tipo?: TipoExameDTO | null;
}

export interface DatasRelevantesDTO {
  /** `date` do Pydantic serializa como "YYYY-MM-DD". */
  emissao?: CampoDTO<string>;
  realizacao_exame?: CampoDTO<string>;
  admissao?: CampoDTO<string>;
  alta?: CampoDTO<string>;
}

export interface DadosExtraidosDTO {
  paciente?: PacienteDTO;
  medico_solicitante?: ProfissionalSolicitanteDTO;
  diagnostico_principal?: CampoDTO<string>;
  /** CID-10 escrito no documento. */
  cid10_documentado?: CampoDTO<string>;
  /** CID-10 sugerido pela IA: hipótese, NUNCA diagnóstico confirmado. */
  cid10_sugerido?: CampoDTO<string>;
  conclusao?: CampoDTO<string>;
  procedimento_solicitado?: CampoDTO<string>;
  medicamentos?: MedicamentoDTO[];
  exames?: ExameDTO[];
  datas?: DatasRelevantesDTO;
  /** Avaliação geral; informativa, não decide destino. 0–1. */
  score_confianca_extracao?: number | null;
}

/* ───────────── Validação (validation.py) ───────────── */

export interface AchadoValidacaoDTO {
  codigo: CodigoValidacaoDTO;
  descricao: string;
  gravidade: GravidadeValidacaoDTO;
  /** Chaves canônicas, ex.: "medico_solicitante.crm", "medicamentos[0].dosagem". Vazio = documento todo. */
  campos_afetados?: string[];
  evidencia?: string | null;
  acao_sugerida?: string | null;
}

/* ───────────── Eventos e roteamento (events.py, routing.py) ───────────── */

export interface NotificacaoAlertaDTO {
  canal: CanalNotificacaoDTO;
  mensagem: string;
  /** ISO 8601 com fuso. */
  gerada_em: string;
  documento_id: string;
  evidencias?: string[];
}

export interface DecisaoRoteamentoDTO {
  destino: DestinoDTO;
  prioridade: PrioridadeDTO;
  urgente: boolean;
  /** Verdadeiro somente enquanto `status_revisao = pendente`. */
  requer_auditoria_humana: boolean;
  motivo: string;
  codigo_motivo: MotivoRoteamentoDTO;
  justificativa_roteamento: string;
  status_revisao: StatusRevisaoDTO;
  notificacao_gerada?: NotificacaoAlertaDTO | null;
}

/* ───────────── Armazenamento (storage.py) ───────────── */

export interface ArmazenamentoOCIDTO {
  bucket?: string | null;
  caminho_objeto?: string | null;
  referencia_documento?: string | null;
  referencia_resultado?: string | null;
  persistido: boolean;
  status_backup: StatusBackupDTO;
  modo_armazenamento: ModoArmazenamentoDTO;
}

/* ───────────── Revisão humana (review.py) ───────────── */

/** `JsonValue` do Pydantic. */
export type JsonValueDTO = string | number | boolean | null | JsonValueDTO[] | { [k: string]: JsonValueDTO };

export interface CorrecaoCampoEntradaDTO {
  /** Chave canônica concreta (ex.: "medico_solicitante.crm", "medicamentos[0].dosagem"). */
  campo: string;
  valor_posterior: JsonValueDTO;
}

export interface CorrecaoCampoDTO {
  campo: string;
  valor_anterior: JsonValueDTO;
  valor_posterior: JsonValueDTO;
}

export interface RequisicaoRevisaoDTO {
  decisao: DecisaoRevisaoDTO;
  justificativa?: string | null;
  correcoes?: CorrecaoCampoEntradaDTO[];
  /** Identificador INFORMADO pelo cliente; não é autenticado. */
  revisor?: string | null;
  /** Versão do resultado que o revisor viu (controle otimista). ≥ 1. */
  versao_resultado_base: number;
}

export interface RegistroRevisaoDTO {
  documento_id: string;
  revisor?: string | null;
  identidade_verificada?: boolean;
  /** ISO 8601 com fuso. */
  data_hora: string;
  decisao: DecisaoRevisaoDTO;
  justificativa?: string | null;
  correcoes?: CorrecaoCampoDTO[];
  versao_resultado_anterior: number;
  versao_resultado_revisado: number;
}

/* ───────────── Resposta (output.py) ───────────── */

export interface ErroProcessamentoDTO {
  codigo: CodigoErroDTO;
  descricao: string;
  etapa?: string | null;
  ocorrido_em: string;
}

export interface OrigemAnaliseDTO {
  /** "mock" indica dados de teste, não avaliação clínica. */
  provedor: string;
  modelo?: string | null;
  dados_de_teste: boolean;
}

export interface RespostaTriagemDTO {
  documento_id: string;
  status: StatusProcessamentoDTO;
  versao_resultado?: number;
  canal_origem?: CanalOrigemDTO | null;
  classificacao?: ClassificacaoDocumentoDTO | null;
  dados_extraidos?: DadosExtraidosDTO | null;
  /** Derivado de `dados_extraidos` (chave canônica → 0–1). */
  scores_por_campo?: Record<string, number> | null;
  validacoes?: AchadoValidacaoDTO[];
  decisao_roteamento?: DecisaoRoteamentoDTO | null;
  armazenamento_oci?: ArmazenamentoOCIDTO | null;
  historico_revisao?: RegistroRevisaoDTO[];
  erro?: ErroProcessamentoDTO | null;
  origem_analise?: OrigemAnaliseDTO | null;
}

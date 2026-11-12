/**
 * Modelos de DOMÍNIO — representação interna do frontend.
 *
 * Diferenças em relação aos DTOs (`dto.ts`):
 *  - camelCase; defaults do Pydantic já aplicados (nada "opcional por omissão");
 *  - `dados_extraidos` é achatado em `campos[]` com a mesma chave canônica do backend
 *    (`paciente.nome`, `medicamentos[0].dosagem`, ...), a mesma usada em `scores_por_campo`,
 *    em `campos_afetados` das validações e em `correcoes[].campo`;
 *  - os VALORES dos enums continuam sendo os do backend (preservados na integração).
 *
 * Nada aqui é rótulo, cor ou texto de interface: isso é responsabilidade de `view.ts`.
 */
import type {
  CanalNotificacaoDTO,
  CanalOrigemDTO,
  CodigoErroDTO,
  CodigoValidacaoDTO,
  DecisaoRevisaoDTO,
  DestinoDTO,
  GravidadeValidacaoDTO,
  JsonValueDTO,
  ModoArmazenamentoDTO,
  MotivoRoteamentoDTO,
  OrigemSinalDTO,
  PrioridadeDTO,
  SituacaoCampoDTO,
  StatusBackupDTO,
  StatusProcessamentoDTO,
  StatusRevisaoDTO,
  TipoArquivoDTO,
  TipoDocumentoDTO,
  TipoExameDTO,
} from './dto';

export type TipoArquivo = TipoArquivoDTO;
export type CanalOrigem = CanalOrigemDTO;
export type TipoDocumento = TipoDocumentoDTO;
export type Prioridade = PrioridadeDTO;
export type StatusProcessamento = StatusProcessamentoDTO;
export type Destino = DestinoDTO;
export type StatusRevisao = StatusRevisaoDTO;
export type MotivoRoteamento = MotivoRoteamentoDTO;
export type CanalNotificacao = CanalNotificacaoDTO;
export type SituacaoCampo = SituacaoCampoDTO;
export type TipoExame = TipoExameDTO;
export type OrigemSinal = OrigemSinalDTO;
export type CodigoValidacao = CodigoValidacaoDTO;
export type GravidadeValidacao = GravidadeValidacaoDTO;
export type DecisaoRevisao = DecisaoRevisaoDTO;
export type ModoArmazenamento = ModoArmazenamentoDTO;
export type StatusBackup = StatusBackupDTO;
export type CodigoErro = CodigoErroDTO;
export type JsonValue = JsonValueDTO;

export interface SinalUrgencia {
  origem: OrigemSinal;
  descricao: string;
  evidencia: string | null;
}

export interface Classificacao {
  tipoDocumento: TipoDocumento;
  especialidade: string | null;
  prioridade: Prioridade;
  urgente: boolean;
  /** 0–1 */
  confianca: number;
  sinaisUrgencia: SinalUrgencia[];
}

/** Grupo de origem do campo (organização da tela; não existe no backend). */
export type GrupoCampo =
  | 'paciente'
  | 'profissional'
  | 'clinico'
  | 'medicamento'
  | 'exame'
  | 'datas';

export interface CampoExtraido {
  /** Chave canônica do backend. */
  chave: string;
  grupo: GrupoCampo;
  /** Valor bruto vindo do backend (string | number | null). */
  valor: string | number | null;
  /** 0–1; `null` = não avaliável. */
  confianca: number | null;
  evidencia: string | null;
  situacao: SituacaoCampo;
  revisadoPorHumano: boolean;
  /** Somente em `exames[i].nome`: o backend guarda `tipo` ao lado do campo. */
  tipoExame?: TipoExame | null;
}

export interface Achado {
  codigo: CodigoValidacao;
  descricao: string;
  gravidade: GravidadeValidacao;
  camposAfetados: string[];
  evidencia: string | null;
  acaoSugerida: string | null;
}

export interface NotificacaoAlerta {
  canal: CanalNotificacao;
  mensagem: string;
  geradaEm: string;
  documentoId: string;
  evidencias: string[];
}

export interface Roteamento {
  destino: Destino;
  prioridade: Prioridade;
  urgente: boolean;
  requerAuditoriaHumana: boolean;
  motivo: string;
  codigoMotivo: MotivoRoteamento;
  justificativa: string;
  statusRevisao: StatusRevisao;
  notificacao: NotificacaoAlerta | null;
}

export interface Armazenamento {
  bucket: string | null;
  caminhoObjeto: string | null;
  referenciaDocumento: string | null;
  referenciaResultado: string | null;
  persistido: boolean;
  statusBackup: StatusBackup;
  modo: ModoArmazenamento;
}

export interface CorrecaoRegistrada {
  campo: string;
  valorAnterior: JsonValue;
  valorPosterior: JsonValue;
}

export interface RegistroRevisao {
  documentoId: string;
  revisor: string | null;
  identidadeVerificada: boolean;
  dataHora: string;
  decisao: DecisaoRevisao;
  justificativa: string | null;
  correcoes: CorrecaoRegistrada[];
  versaoAnterior: number;
  versaoRevisada: number;
}

export interface ErroProcessamento {
  codigo: CodigoErro;
  descricao: string;
  etapa: string | null;
  ocorridoEm: string;
}

export interface OrigemAnalise {
  provedor: string;
  modelo: string | null;
  dadosDeTeste: boolean;
}

/**
 * Informações que o backend NÃO devolve em `RespostaTriagem` e que o navegador conhece
 * apenas para arquivos enviados por esta máquina (nome, horário e o próprio arquivo).
 * Nunca é enviada nem esperada da API.
 */
export interface MetaLocal {
  nomeArquivo?: string;
  recebidoEm?: string;
  arquivoUrl?: string;
  mimeType?: string;
}

export interface Documento {
  id: string;
  status: StatusProcessamento;
  versao: number;
  canalOrigem: CanalOrigem | null;
  classificacao: Classificacao | null;
  campos: CampoExtraido[];
  /** `dados_extraidos` veio preenchido (diferente de "veio vazio"). */
  temDadosExtraidos: boolean;
  /** 0–1, informativo. */
  confiancaExtracao: number | null;
  achados: Achado[];
  roteamento: Roteamento | null;
  armazenamento: Armazenamento | null;
  historico: RegistroRevisao[];
  erro: ErroProcessamento | null;
  origemAnalise: OrigemAnalise | null;
  meta: MetaLocal;
}

/** Estados em que o backend ainda está trabalhando (polling). */
export const STATUS_EM_ANDAMENTO: readonly StatusProcessamento[] = ['recebido', 'processando'];
/** Estados em que o pipeline concluiu uma decisão (espelha `STATUS_COM_DECISAO`). */
export const STATUS_COM_DECISAO: readonly StatusProcessamento[] = [
  'processado',
  'em_auditoria',
  'aprovado_auditoria',
  'rejeitado',
];

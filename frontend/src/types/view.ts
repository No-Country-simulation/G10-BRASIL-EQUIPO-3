/**
 * Modelos de APRESENTAÇÃO — dados já prontos para os componentes React.
 * Produzidos exclusivamente por `adapters/toView.ts`; as páginas não convertem nada.
 */
import type {
  Destino,
  JsonValue,
  Prioridade,
  SituacaoCampo,
  StatusProcessamento,
  StatusRevisao,
  TipoDocumento,
} from './domain';

export type NivelConfianca = 'alta' | 'media' | 'baixa';
/** Estado visual de um campo (derivado de situação + achados + confiança). */
export type EstadoCampo = 'ok' | 'atencao' | 'erro';
export type TipoEntrada = 'texto' | 'inteiro' | 'data';
export type TomStatus = 'neutro' | 'info' | 'alerta' | 'sucesso' | 'erro';

export interface ConfiancaView {
  /** 0–100 inteiro, para exibição. */
  pct: number;
  nivel: NivelConfianca;
}

export interface CampoView {
  chave: string;
  rotulo: string;
  grupo: string;
  /** Valor atual como texto cru, apropriado para inputs (vazio quando ausente/ilegível). */
  valorTexto: string;
  /** Valor formatado para leitura (datas em dd/mm/aaaa; "—" quando vazio). */
  valorExibicao: string;
  valor: string | number | null;
  situacao: SituacaoCampo;
  situacaoRotulo: string;
  confianca: ConfiancaView | null;
  evidencia: string | null;
  revisadoPorHumano: boolean;
  estado: EstadoCampo;
  /** Texto do(s) achado(s) de validação que citam o campo. */
  motivo: string | null;
  /** Informação adicional (ex.: "Hipótese da IA, não é diagnóstico"). */
  aviso: string | null;
  tipoEntrada: TipoEntrada;
  /** `exames[i].tipo` não é um campo corrigível no backend. */
  editavel: boolean;
}

export interface AchadoView {
  chave: string;
  titulo: string;
  descricao: string;
  gravidade: 'baixa' | 'media' | 'alta';
  gravidadeRotulo: string;
  campos: { chave: string; rotulo: string }[];
  evidencia: string | null;
  acaoSugerida: string | null;
}

export interface SinalView {
  origemRotulo: string;
  descricao: string;
  evidencia: string | null;
}

export interface RoteamentoView {
  destino: Destino;
  destinoRotulo: string;
  /** Rótulo do `codigo_motivo` (código estável do backend). */
  codigoMotivoRotulo: string;
  motivo: string;
  justificativa: string;
  statusRevisao: StatusRevisao;
  statusRevisaoRotulo: string;
  requerAuditoriaHumana: boolean;
  alerta: { mensagem: string; geradaEm: string; evidencias: string[] } | null;
  /** Verdadeiro quando o destino é a fila prioritária mas o documento NÃO é urgente (ilegível no PS). */
  prioritarioSemUrgencia: boolean;
}

export interface EventoView {
  id: string;
  quando: string | null;
  tipo: 'recebido' | 'processado' | 'alerta' | 'aprovado' | 'rejeitado' | 'erro';
  titulo: string;
  descricao: string | null;
  autor: string;
  detalhes: string[];
}

export interface ArmazenamentoView {
  modoRotulo: string;
  persistido: boolean;
  statusBackupRotulo: string;
  caminho: string | null;
  bucket: string | null;
}

export interface DocumentoView {
  id: string;
  status: StatusProcessamento;
  statusRotulo: string;
  statusTom: TomStatus;
  versao: number;
  emAndamento: boolean;

  tipo: TipoDocumento | null;
  tipoRotulo: string;
  especialidade: string | null;
  canalRotulo: string | null;
  pacienteNome: string | null;

  /** Prioridade CLÍNICA (rotina/urgente). Independente da confiança. */
  prioridade: Prioridade | null;
  prioridadeRotulo: string | null;
  urgente: boolean;

  /** Confiança da CLASSIFICAÇÃO do tipo de documento. */
  confiancaClassificacao: ConfiancaView | null;
  /** Avaliação geral da extração (informativa). */
  confiancaExtracao: ConfiancaView | null;

  campos: CampoView[];
  /** Campos com estado `atencao`/`erro` (inclui ausentes/ilegíveis apontados por achados). */
  camposEmAtencao: CampoView[];
  camposOk: CampoView[];
  /** Ausentes ou ilegíveis sem achado correspondente. */
  camposNaoEncontrados: CampoView[];
  resumo: { ok: number; atencao: number; erro: number };

  achados: AchadoView[];
  sinaisUrgencia: SinalView[];
  roteamento: RoteamentoView | null;
  armazenamento: ArmazenamentoView | null;
  historico: EventoView[];
  erro: { codigo: string; titulo: string; descricao: string; etapa: string | null } | null;

  origem: { rotulo: string; dadosDeTeste: boolean } | null;

  /** Só `em_auditoria` aceita revisão (regra do backend em `registrar_revisao`). */
  revisaoDisponivel: boolean;
  nomeArquivo: string | null;
  recebidoEm: string | null;
  /** Último momento conhecido (revisão, erro, alerta ou envio local). */
  atividadeEm: string | null;
  arquivo: { url: string; mimeType: string; nome: string } | null;
  /** Ordem de atendimento da fila: 0 urgente, 1 fila prioritária, 2 demais. */
  ordemFila: 0 | 1 | 2;
}

/** Valor aceito num formulário de revisão: texto digitado por campo. */
export type EdicoesRevisao = Record<string, string>;

export type ResultadoRevisao =
  | {ok: true; correcoes: {campo: string; valor_posterior: JsonValue}[]}
  | {ok: false; erros: Record<string, string>};

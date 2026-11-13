/**
 * DTO (backend) → Domínio (frontend).
 *
 * É o ÚNICO lugar que conhece o formato de transporte. Responsabilidades:
 *  - validar enums (valor desconhecido => ContractError, nunca um "palpite");
 *  - aplicar os defaults do Pydantic (campo omitido em `dados_extraidos` = `ausente`);
 *  - achatar `dados_extraidos` em chaves canônicas (mesma ordem de `campos_planos()`);
 *  - renomear snake_case → camelCase.
 *
 * Não inventa dados: o que o backend não envia fica `null`/vazio.
 */
import {
  CANAIS_NOTIFICACAO,
  CANAIS_ORIGEM,
  CODIGOS_ERRO,
  CODIGOS_VALIDACAO,
  DECISOES_REVISAO,
  DESTINOS,
  GRAVIDADES_VALIDACAO,
  MODOS_ARMAZENAMENTO,
  MOTIVOS_ROTEAMENTO,
  ORIGENS_SINAL,
  PRIORIDADES,
  SITUACOES_CAMPO,
  STATUS_BACKUP,
  STATUS_PROCESSAMENTO,
  STATUS_REVISAO,
  TIPOS_DOCUMENTO,
  TIPOS_EXAME,
  type AchadoValidacaoDTO,
  type ArmazenamentoOCIDTO,
  type CampoDTO,
  type ClassificacaoDocumentoDTO,
  type DadosExtraidosDTO,
  type DecisaoRoteamentoDTO,
  type ErroProcessamentoDTO,
  type JsonValueDTO,
  type OrigemAnaliseDTO,
  type RegistroRevisaoDTO,
  type RespostaTriagemDTO,
} from '../types/dto';
import type {
  Achado,
  Armazenamento,
  CampoExtraido,
  Classificacao,
  Documento,
  ErroProcessamento,
  GrupoCampo,
  MetaLocal,
  OrigemAnalise,
  RegistroRevisao,
  Roteamento,
  TipoExame,
} from '../types/domain';

/** O backend respondeu algo que não bate com os contratos Pydantic. */
export class ContractError extends Error {
  constructor(message: string) {
    super(`Resposta fora do contrato do backend: ${message}`);
    this.name = 'ContractError';
  }
}

function oneOf<T extends string>(nome: string, permitidos: readonly T[], valor: unknown): T {
  if (typeof valor === 'string' && (permitidos as readonly string[]).includes(valor)) return valor as T;
  throw new ContractError(`${nome} = ${JSON.stringify(valor)} não é um valor conhecido`);
}

function requireString(nome: string, valor: unknown): string {
  if (typeof valor === 'string' && valor.length > 0) return valor;
  throw new ContractError(`${nome} ausente ou inválido`);
}

function requireNumber(nome: string, valor: unknown): number {
  if (typeof valor === 'number' && Number.isFinite(valor)) return valor;
  throw new ContractError(`${nome} ausente ou inválido`);
}

/* ───────────── Campos ───────────── */

function valorDoCampo(chave: string, valor: unknown): string | number | null {
  if (valor === null || valor === undefined) return null;
  if (typeof valor === 'string' || typeof valor === 'number') return valor;
  throw new ContractError(`valor do campo ${chave} deve ser texto, número ou nulo`);
}

/**
 * Campo omitido no JSON = `ausente` (default do Pydantic). Campo presente no JSON sem
 * `situacao` = `presente` (default de `_CampoBase`).
 */
function campo(
  chave: string,
  grupo: GrupoCampo,
  dto: CampoDTO | undefined,
  extra: Partial<CampoExtraido> = {},
): CampoExtraido {
  const situacao = dto ? oneOf(`${chave}.situacao`, SITUACOES_CAMPO, dto.situacao ?? 'presente') : 'ausente';
  return {
    chave,
    grupo,
    valor: valorDoCampo(chave, dto?.valor),
    confianca: dto?.confianca ?? null,
    evidencia: dto?.evidencia ?? null,
    situacao,
    revisadoPorHumano: dto?.revisado_por_humano ?? false,
    ...extra,
  };
}

/** Espelha `DadosExtraidos.campos_planos()` (mesmas chaves, mesma ordem). */
export function achatarDados(dados: DadosExtraidosDTO): CampoExtraido[] {
  const campos: CampoExtraido[] = [
    campo('paciente.nome', 'paciente', dados.paciente?.nome),
    campo('paciente.idade', 'paciente', dados.paciente?.idade),
    campo('medico_solicitante.nome', 'profissional', dados.medico_solicitante?.nome),
    campo('medico_solicitante.crm', 'profissional', dados.medico_solicitante?.crm),
    campo('medico_solicitante.uf_crm', 'profissional', dados.medico_solicitante?.uf_crm),
    campo('diagnostico_principal', 'clinico', dados.diagnostico_principal),
    campo('cid10_documentado', 'clinico', dados.cid10_documentado),
    campo('cid10_sugerido', 'clinico', dados.cid10_sugerido),
    campo('conclusao', 'clinico', dados.conclusao),
    campo('procedimento_solicitado', 'clinico', dados.procedimento_solicitado),
  ];
  (dados.medicamentos ?? []).forEach((m, i) => {
    campos.push(
      campo(`medicamentos[${i}].nome`, 'medicamento', m.nome),
      campo(`medicamentos[${i}].dosagem`, 'medicamento', m.dosagem),
      campo(`medicamentos[${i}].posologia`, 'medicamento', m.posologia),
    );
  });
  (dados.exames ?? []).forEach((e, i) => {
    const tipoExame: TipoExame | null = e.tipo == null ? null : oneOf(`exames[${i}].tipo`, TIPOS_EXAME, e.tipo);
    campos.push(campo(`exames[${i}].nome`, 'exame', e.nome, {tipoExame}));
  });
  campos.push(
    campo('datas.emissao', 'datas', dados.datas?.emissao),
    campo('datas.realizacao_exame', 'datas', dados.datas?.realizacao_exame),
    campo('datas.admissao', 'datas', dados.datas?.admissao),
    campo('datas.alta', 'datas', dados.datas?.alta),
  );
  return campos;
}

/* ───────────── Blocos ───────────── */

function toClassificacao(dto: ClassificacaoDocumentoDTO): Classificacao {
  return {
    tipoDocumento: oneOf('classificacao.tipo_documento', TIPOS_DOCUMENTO, dto.tipo_documento),
    especialidade: dto.especialidade ?? null,
    prioridade: oneOf('classificacao.prioridade', PRIORIDADES, dto.prioridade),
    urgente: dto.urgente,
    confianca: requireNumber('classificacao.score_confianca_classificacao', dto.score_confianca_classificacao),
    sinaisUrgencia: (dto.sinais_urgencia ?? []).map((s, i) => ({
      origem: oneOf(`classificacao.sinais_urgencia[${i}].origem`, ORIGENS_SINAL, s.origem),
      descricao: s.descricao,
      evidencia: s.evidencia ?? null,
    })),
  };
}

function toAchado(dto: AchadoValidacaoDTO, i: number): Achado {
  return {
    codigo: oneOf(`validacoes[${i}].codigo`, CODIGOS_VALIDACAO, dto.codigo),
    descricao: dto.descricao,
    gravidade: oneOf(`validacoes[${i}].gravidade`, GRAVIDADES_VALIDACAO, dto.gravidade),
    camposAfetados: dto.campos_afetados ?? [],
    evidencia: dto.evidencia ?? null,
    acaoSugerida: dto.acao_sugerida ?? null,
  };
}

function toRoteamento(dto: DecisaoRoteamentoDTO): Roteamento {
  const n = dto.notificacao_gerada;
  return {
    destino: oneOf('decisao_roteamento.destino', DESTINOS, dto.destino),
    prioridade: oneOf('decisao_roteamento.prioridade', PRIORIDADES, dto.prioridade),
    urgente: dto.urgente,
    requerAuditoriaHumana: dto.requer_auditoria_humana,
    motivo: dto.motivo,
    codigoMotivo: oneOf('decisao_roteamento.codigo_motivo', MOTIVOS_ROTEAMENTO, dto.codigo_motivo),
    justificativa: dto.justificativa_roteamento,
    statusRevisao: oneOf('decisao_roteamento.status_revisao', STATUS_REVISAO, dto.status_revisao),
    notificacao: n
      ? {
          canal: oneOf('notificacao_gerada.canal', CANAIS_NOTIFICACAO, n.canal),
          mensagem: n.mensagem,
          geradaEm: n.gerada_em,
          documentoId: n.documento_id,
          evidencias: n.evidencias ?? [],
        }
      : null,
  };
}

function toArmazenamento(dto: ArmazenamentoOCIDTO): Armazenamento {
  return {
    bucket: dto.bucket ?? null,
    caminhoObjeto: dto.caminho_objeto ?? null,
    referenciaDocumento: dto.referencia_documento ?? null,
    referenciaResultado: dto.referencia_resultado ?? null,
    persistido: dto.persistido,
    statusBackup: oneOf('armazenamento_oci.status_backup', STATUS_BACKUP, dto.status_backup),
    modo: oneOf('armazenamento_oci.modo_armazenamento', MODOS_ARMAZENAMENTO, dto.modo_armazenamento),
  };
}

const jsonValor = (v: JsonValueDTO): JsonValueDTO => v;

function toRegistro(dto: RegistroRevisaoDTO, i: number): RegistroRevisao {
  return {
    documentoId: dto.documento_id,
    revisor: dto.revisor ?? null,
    identidadeVerificada: dto.identidade_verificada ?? false,
    dataHora: requireString(`historico_revisao[${i}].data_hora`, dto.data_hora),
    decisao: oneOf(`historico_revisao[${i}].decisao`, DECISOES_REVISAO, dto.decisao),
    justificativa: dto.justificativa ?? null,
    correcoes: (dto.correcoes ?? []).map((c) => ({
      campo: c.campo,
      valorAnterior: jsonValor(c.valor_anterior),
      valorPosterior: jsonValor(c.valor_posterior),
    })),
    versaoAnterior: requireNumber(`historico_revisao[${i}].versao_resultado_anterior`, dto.versao_resultado_anterior),
    versaoRevisada: requireNumber(`historico_revisao[${i}].versao_resultado_revisado`, dto.versao_resultado_revisado),
  };
}

function toErro(dto: ErroProcessamentoDTO): ErroProcessamento {
  return {
    codigo: oneOf('erro.codigo', CODIGOS_ERRO, dto.codigo),
    descricao: dto.descricao,
    etapa: dto.etapa ?? null,
    ocorridoEm: dto.ocorrido_em,
  };
}

function toOrigem(dto: OrigemAnaliseDTO): OrigemAnalise {
  return {provedor: dto.provedor, modelo: dto.modelo ?? null, dadosDeTeste: dto.dados_de_teste};
}

/* ───────────── Resposta completa ───────────── */

export function toDocumento(dto: RespostaTriagemDTO, meta: MetaLocal = {}): Documento {
  if (dto === null || typeof dto !== 'object') throw new ContractError('corpo da resposta vazio');
  return {
    id: requireString('documento_id', dto.documento_id),
    status: oneOf('status', STATUS_PROCESSAMENTO, dto.status),
    versao: dto.versao_resultado ?? 1,
    canalOrigem: dto.canal_origem == null ? null : oneOf('canal_origem', CANAIS_ORIGEM, dto.canal_origem),
    classificacao: dto.classificacao ? toClassificacao(dto.classificacao) : null,
    campos: dto.dados_extraidos ? achatarDados(dto.dados_extraidos) : [],
    temDadosExtraidos: !!dto.dados_extraidos,
    confiancaExtracao: dto.dados_extraidos?.score_confianca_extracao ?? null,
    achados: (dto.validacoes ?? []).map(toAchado),
    roteamento: dto.decisao_roteamento ? toRoteamento(dto.decisao_roteamento) : null,
    armazenamento: dto.armazenamento_oci ? toArmazenamento(dto.armazenamento_oci) : null,
    historico: (dto.historico_revisao ?? []).map(toRegistro),
    erro: dto.erro ? toErro(dto.erro) : null,
    origemAnalise: dto.origem_analise ? toOrigem(dto.origem_analise) : null,
    meta,
  };
}

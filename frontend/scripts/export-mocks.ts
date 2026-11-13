/**
 * Entrada de build (SSR) usada por `validar-contratos.mjs`.
 * Exporta, como JSON, tudo o que o modo de demonstração produz — sementes, cenários e o resultado
 * de revisões simuladas — para que o Python valide contra os schemas Pydantic REAIS.
 */
import {registrarRevisao} from '../src/mocks/backendRules';
import {
  cenarioBaixaConfianca,
  cenarioErro,
  cenarioGuia,
  cenarioOutro,
  cenarioPsIlegivel,
  cenarioRotina,
  cenarioUrgenteEmergencia,
  cenarioUrgenteIlegivel,
  sementes,
} from '../src/mocks/fixtures';
import type {RequisicaoRevisaoDTO, RespostaTriagemDTO} from '../src/types/dto';

const cenarios: Record<string, RespostaTriagemDTO> = {
  rotina: cenarioRotina('DOC-T-ROTINA', 'AMBULATORIO'),
  guia: cenarioGuia('DOC-T-GUIA', 'OPERADORA'),
  outro: cenarioOutro('DOC-T-OUTRO', 'OPERADORA'),
  baixaConfianca: cenarioBaixaConfianca('DOC-T-BAIXA'),
  urgenteEmergencia: cenarioUrgenteEmergencia('DOC-T-URG', 'PRONTO_SOCORRO'),
  urgenteIlegivel: cenarioUrgenteIlegivel('DOC-T-URGILEG'),
  psIlegivel: cenarioPsIlegivel('DOC-T-PSILEG'),
  erro: cenarioErro('DOC-T-ERRO', 'LABORATORIO'),
};

const emAuditoria = [...sementes().map((s) => s.dto), ...Object.values(cenarios)].filter((d) => d.status === 'em_auditoria');

const requisicoes: Record<string, (d: RespostaTriagemDTO) => RequisicaoRevisaoDTO> = {
  aprovar_simples: (d) => ({decisao: 'aprovar', versao_resultado_base: d.versao_resultado ?? 1}),
  aprovar_com_correcao: (d) => ({
    decisao: 'aprovar',
    justificativa: 'Corrigido conforme o documento original',
    correcoes: [{campo: 'paciente.nome', valor_posterior: 'Maria Teste da Silva'}],
    revisor: 'revisor.teste',
    versao_resultado_base: d.versao_resultado ?? 1,
  }),
  aprovar_correcao_sem_justificativa: (d) => ({
    decisao: 'aprovar',
    correcoes: [{campo: 'paciente.nome', valor_posterior: 'Maria Teste da Silva'}],
    versao_resultado_base: d.versao_resultado ?? 1,
  }),
  rejeitar_com_justificativa: (d) => ({decisao: 'rejeitar', justificativa: 'Fora do escopo', versao_resultado_base: d.versao_resultado ?? 1}),
  rejeitar_sem_justificativa: (d) => ({decisao: 'rejeitar', versao_resultado_base: d.versao_resultado ?? 1}),
  versao_desatualizada: (d) => ({decisao: 'aprovar', versao_resultado_base: (d.versao_resultado ?? 1) + 1}),
  campo_inexistente: (d) => ({
    decisao: 'aprovar',
    justificativa: 'x',
    correcoes: [{campo: 'medicamentos[9].nome', valor_posterior: 'Dipirona'}],
    versao_resultado_base: d.versao_resultado ?? 1,
  }),
  idade_invalida: (d) => ({
    decisao: 'aprovar',
    justificativa: 'x',
    correcoes: [{campo: 'paciente.idade', valor_posterior: 'quarenta'}],
    versao_resultado_base: d.versao_resultado ?? 1,
  }),
};

const revisoes = emAuditoria.flatMap((entrada) =>
  Object.entries(requisicoes).map(([nome, montar]) => {
    const requisicao = montar(entrada);
    try {
      return {nome, entrada, requisicao, saida: registrarRevisao(structuredClone(entrada), requisicao), erro: null as string | null};
    } catch (e) {
      return {nome, entrada, requisicao, saida: null, erro: e instanceof Error ? e.message : String(e)};
    }
  }),
);

// Revisões que não partem de `em_auditoria` precisam ser recusadas.
const naoRevisaveis = [cenarios.rotina!, cenarios.erro!].map((entrada) => {
  try {
    registrarRevisao(structuredClone(entrada), {decisao: 'aprovar', versao_resultado_base: 1});
    return {entrada, erro: null as string | null};
  } catch (e) {
    return {entrada, erro: e instanceof Error ? e.message : String(e)};
  }
});

export const saida = {
  respostas: [...sementes().map((s) => s.dto), ...Object.values(cenarios)],
  revisoes,
  naoRevisaveis,
};

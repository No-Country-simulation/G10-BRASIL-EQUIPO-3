/**
 * Formulário (apresentação) → DTO de envio.
 *
 * Espelha, para dar feedback imediato, as regras de `backend/app/schemas/review.py`:
 *   - rejeitar exige justificativa e NÃO aceita correções;
 *   - aprovar com correções exige justificativa;
 *   - uma correção por campo; correção sem mudança de valor é descartada
 *     (o backend rejeita "a correção não altera o valor do campo");
 *   - `versao_resultado_base` ≥ 1.
 * O backend continua sendo a autoridade: qualquer erro dele é exibido ao usuário.
 */
import type {
  CanalOrigemDTO,
  EntradaTriagemDTO,
  JsonValueDTO,
  RequisicaoRevisaoDTO,
  TipoArquivoDTO,
} from '../types/dto';
import type {DecisaoRevisao} from '../types/domain';
import type {CampoView, EdicoesRevisao, ResultadoRevisao} from '../types/view';

const MAX_TEXTO = 2000; // CampoTexto.valor max_length
const MAX_JUSTIFICATIVA = 2000; // RequisicaoRevisao.justificativa
const MAX_REVISOR = 120;

function dataValida(iso: string): boolean {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return false;
  const [y, mo, d] = [Number(m[1]), Number(m[2]), Number(m[3])];
  const dt = new Date(Date.UTC(y, mo - 1, d));
  return dt.getUTCFullYear() === y && dt.getUTCMonth() === mo - 1 && dt.getUTCDate() === d;
}

/** Converte o que foi digitado em correções tipadas, ou devolve erros por campo. */
export function montarCorrecoes(campos: CampoView[], edicoes: EdicoesRevisao): ResultadoRevisao {
  const correcoes: {campo: string; valor_posterior: JsonValueDTO}[] = [];
  const erros: Record<string, string> = {};

  for (const c of campos) {
    const digitado = edicoes[c.chave];
    if (digitado === undefined || !c.editavel) continue;
    const novo = digitado.trim();
    if (novo === c.valorTexto) continue; // sem mudança
    // "052" → 52 não altera o valor de `paciente.idade`; o backend recusaria a correção.
    if (c.tipoEntrada === 'inteiro' && /^\d+$/.test(novo) && c.valorTexto !== '' && Number(novo) === Number(c.valorTexto)) continue;

    if (novo === '') {
      correcoes.push({campo: c.chave, valor_posterior: null}); // limpar = voltar a ausente
      continue;
    }
    if (c.tipoEntrada === 'inteiro') {
      if (!/^\d+$/.test(novo)) erros[c.chave] = 'Informe um número inteiro.';
      else correcoes.push({campo: c.chave, valor_posterior: Number(novo)});
    } else if (c.tipoEntrada === 'data') {
      if (!dataValida(novo)) erros[c.chave] = 'Informe uma data válida (aaaa-mm-dd).';
      else correcoes.push({campo: c.chave, valor_posterior: novo});
    } else if (novo.length > MAX_TEXTO) {
      erros[c.chave] = `Máximo de ${MAX_TEXTO} caracteres.`;
    } else {
      correcoes.push({campo: c.chave, valor_posterior: novo});
    }
  }
  return Object.keys(erros).length ? {ok: false, erros} : {ok: true, correcoes};
}

export type MontagemRevisao = {ok: true; requisicao: RequisicaoRevisaoDTO} | {ok: false; erro: string};

export function montarRequisicaoRevisao(p: {
  decisao: DecisaoRevisao;
  justificativa: string;
  revisor: string;
  versaoBase: number;
  correcoes: {campo: string; valor_posterior: JsonValueDTO}[];
}): MontagemRevisao {
  const justificativa = p.justificativa.trim();
  const revisor = p.revisor.trim();

  if (p.decisao === 'rejeitar') {
    if (!justificativa) return {ok: false, erro: 'A rejeição exige justificativa.'};
    if (p.correcoes.length)
      return {ok: false, erro: 'A rejeição não aceita correções de campos. Restaure os valores editados ou aprove com correções.'};
  }
  if (p.decisao === 'aprovar' && p.correcoes.length && !justificativa)
    return {ok: false, erro: 'Aprovar com correções exige justificativa.'};
  if (justificativa.length > MAX_JUSTIFICATIVA) return {ok: false, erro: `A justificativa aceita até ${MAX_JUSTIFICATIVA} caracteres.`};
  if (revisor.length > MAX_REVISOR) return {ok: false, erro: `O identificador do revisor aceita até ${MAX_REVISOR} caracteres.`};
  if (!Number.isInteger(p.versaoBase) || p.versaoBase < 1) return {ok: false, erro: 'Versão do resultado inválida.'};

  return {
    ok: true,
    requisicao: {
      decisao: p.decisao,
      justificativa: justificativa || null,
      correcoes: p.correcoes,
      revisor: revisor || null,
      versao_resultado_base: p.versaoBase,
    },
  };
}

/* ───────────── Envio de documento ───────────── */

export function tipoArquivoPorNome(nome: string, mimeType?: string): TipoArquivoDTO | null {
  const ext = nome.toLowerCase().split('.').pop();
  if (ext === 'pdf' || mimeType === 'application/pdf') return 'PDF';
  if (ext === 'png' || mimeType === 'image/png') return 'PNG';
  if (ext === 'jpg' || ext === 'jpeg' || mimeType === 'image/jpeg') return 'JPEG';
  if (ext === 'txt' || mimeType === 'text/plain') return 'TXT';
  return null;
}

export const EXTENSOES_ACEITAS = '.pdf,.png,.jpg,.jpeg,.txt';

export function montarEntradaTexto(texto: string, canal: CanalOrigemDTO): EntradaTriagemDTO {
  return {tipo_arquivo: 'TXT', documento_texto: texto, canal_origem: canal};
}

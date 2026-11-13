/**
 * Metadados de apresentação das chaves canônicas de campo
 * (as mesmas de `CHAVES_CAMPOS` em backend/app/schemas/extraction.py).
 */
import type {TipoEntrada} from '../types/view';

const ROTULOS: Record<string, string> = {
  'paciente.nome': 'Nome do paciente',
  'paciente.idade': 'Idade do paciente',
  'medico_solicitante.nome': 'Nome do profissional',
  'medico_solicitante.crm': 'CRM do profissional',
  'medico_solicitante.uf_crm': 'UF do CRM',
  diagnostico_principal: 'Diagnóstico principal',
  cid10_documentado: 'CID-10 (escrito no documento)',
  cid10_sugerido: 'CID-10 (sugerido pela IA)',
  conclusao: 'Conclusão',
  procedimento_solicitado: 'Procedimento solicitado',
  'datas.emissao': 'Data de emissão',
  'datas.realizacao_exame': 'Data de realização do exame',
  'datas.admissao': 'Data de admissão',
  'datas.alta': 'Data de alta',
};

const SUBCAMPOS: Record<string, string> = {nome: 'Nome', dosagem: 'Dosagem', posologia: 'Posologia'};

const COLECAO = /^(medicamentos|exames)\[(\d+|\*)\]\.([a-z0-9_]+)$/;

/** Rótulo de uma chave concreta (`medicamentos[0].nome`) ou de padrão (`medicamentos[*].nome`). */
export function rotuloDoCampo(chave: string): string {
  const fixo = ROTULOS[chave];
  if (fixo) return fixo;
  const m = COLECAO.exec(chave);
  if (m) {
    const [, colecao, indice, sub] = m;
    const base = colecao === 'medicamentos' ? 'Medicamento' : 'Exame';
    const item = indice === '*' ? '' : ` ${Number(indice) + 1}`;
    return `${base}${item} · ${SUBCAMPOS[sub ?? ''] ?? sub}`;
  }
  return chave;
}

export function tipoEntradaDoCampo(chave: string): TipoEntrada {
  if (chave === 'paciente.idade') return 'inteiro';
  if (chave.startsWith('datas.')) return 'data';
  return 'texto';
}

/** Aviso fixo exibido junto ao campo (regras de domínio documentadas no backend). */
export function avisoDoCampo(chave: string): string | null {
  if (chave === 'cid10_sugerido') return 'Hipótese da IA — não é diagnóstico confirmado.';
  return null;
}

/** Valor de uma data "aaaa-mm-dd" em "dd/mm/aaaa" (sem passar por Date, evitando fuso). */
export function dataIsoParaBr(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  return m ? `${m[3]}/${m[2]}/${m[1]}` : iso;
}

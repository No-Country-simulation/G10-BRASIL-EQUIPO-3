/**
 * Implementação de `MediflowApi` para o MODO DE DEMONSTRAÇÃO (`VITE_USE_MOCK=true`).
 *
 * Mantém um "banco" em memória de `RespostaTriagemDTO` (mesmo formato do backend) e simula:
 *   - o ciclo de estados  recebido → processando → processado | em_auditoria | erro;
 *   - a revisão humana com as regras reais (versão, justificativa, correções, histórico);
 *   - erros HTTP equivalentes (404, 409, 422).
 * Este módulo só é carregado por import dinâmico em `services/documents.ts`.
 */
import type {EnvioArquivo, MediflowApi} from '../services/contract';
import {ApiError} from '../services/errors';
import type {CanalOrigemDTO, EntradaTriagemDTO, RespostaTriagemDTO} from '../types/dto';
import type {MetaLocal} from '../types/domain';
import {registrarRevisao} from './backendRules';
import {
  cenarioBaixaConfianca,
  cenarioErro,
  cenarioRotina,
  cenarioUrgenteEmergencia,
  cenarioUrgenteIlegivel,
  sementes,
} from './fixtures';

const clone = <T,>(v: T): T => structuredClone(v);
const espera = (ms = 180) => new Promise((r) => setTimeout(r, ms));

/** Mesmo formato de `gerar_documento_id()` do backend: DOC- + 12 hex maiúsculos. */
const novoId = () => `DOC-${Array.from(crypto.getRandomValues(new Uint8Array(6)), (b) => b.toString(16).padStart(2, '0')).join('').toUpperCase()}`;

const banco = new Map<string, RespostaTriagemDTO>();
const metas: Record<string, MetaLocal> = {};
interface Trabalho {
  inicio: number;
  pronto: number;
  finalizar: () => RespostaTriagemDTO;
}
const trabalhos = new Map<string, Trabalho>();
let ciclo = 0;

sementes().forEach(({dto, nomeArquivo, minutosAtras}) => {
  banco.set(dto.documento_id, dto);
  metas[dto.documento_id] = {nomeArquivo, recebidoEm: new Date(Date.now() - minutosAtras * 60_000).toISOString()};
});

/** Metadados locais dos documentos de demonstração (nome do arquivo e horário). */
export const metaDeDemonstracao = () => clone(metas);

/** O nome do arquivo (ou o texto) escolhe o cenário simulado; sem pista, alterna entre três. */
function escolherCenario(pista: string, id: string, canal: CanalOrigemDTO): () => RespostaTriagemDTO {
  const p = pista.toLowerCase();
  if (/erro|corromp/.test(p)) return () => cenarioErro(id, canal);
  if (/borrad|ileg/.test(p)) return () => cenarioUrgenteIlegivel(id, canal);
  if (/urgen|emerg|tep/.test(p)) return () => cenarioUrgenteEmergencia(id, canal);
  if (/baixa|crm|duvid/.test(p)) return () => cenarioBaixaConfianca(id, canal);
  const i = ciclo++;
  if (i % 3 === 1) return () => cenarioBaixaConfianca(id, canal);
  if (i % 3 === 2) return () => cenarioUrgenteEmergencia(id, canal);
  return () => cenarioRotina(id, canal, i);
}

function iniciar(pista: string, canal: CanalOrigemDTO, documentoId?: string | null): RespostaTriagemDTO {
  const id = documentoId || novoId();
  const agora = Date.now();
  trabalhos.set(id, {inicio: agora, pronto: agora + 2600, finalizar: escolherCenario(pista, id, canal)});
  const recebido: RespostaTriagemDTO = {
    documento_id: id,
    status: 'recebido',
    versao_resultado: 1,
    canal_origem: canal,
    validacoes: [],
    historico_revisao: [],
  };
  banco.set(id, recebido);
  return recebido;
}

/** Avança os trabalhos cujo tempo simulado passou. */
function avancar() {
  const agora = Date.now();
  trabalhos.forEach((t, id) => {
    if (agora >= t.pronto) {
      banco.set(id, t.finalizar());
      trabalhos.delete(id);
    } else if (agora >= t.inicio + 700) {
      const atual = banco.get(id);
      if (atual && atual.status === 'recebido') banco.set(id, {...atual, status: 'processando'});
    }
  });
}

export const mockApi: MediflowApi = {
  async listarDocumentos() {
    await espera();
    avancar();
    return [...banco.values()].map(clone);
  },

  async obterDocumento(id) {
    await espera(120);
    avancar();
    const dto = banco.get(id);
    if (!dto) throw new ApiError(404, 'Documento não encontrado');
    return clone(dto);
  },

  async enviarArquivo({arquivo, canalOrigem}: EnvioArquivo) {
    await espera(450);
    return clone(iniciar(arquivo.name, canalOrigem));
  },

  async enviarTexto(entrada: EntradaTriagemDTO) {
    await espera(450);
    return clone(iniciar(entrada.documento_texto.slice(0, 400), entrada.canal_origem, entrada.documento_id));
  },

  async registrarRevisao(id, requisicao) {
    await espera(300);
    avancar();
    const atual = banco.get(id);
    if (!atual) throw new ApiError(404, 'Documento não encontrado');
    const novo = registrarRevisao(atual, requisicao);
    banco.set(id, novo);
    return clone(novo);
  },
};

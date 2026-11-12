/**
 * Métricas do Dashboard calculadas NO CLIENTE a partir da lista de documentos.
 * O backend não expõe endpoint de métricas e `RespostaTriagem` não traz horários de
 * processamento; por isso não há "volume por hora" nem "tempo médio de análise".
 */
import {DESTINO_CURTO} from '../adapters/labels';
import type {Destino} from '../types/domain';
import type {DocumentoView} from '../types/view';

export interface Metricas {
  total: number;
  /** Com decisão concluída: processado, em_auditoria, aprovado_auditoria ou rejeitado. */
  processados: number;
  emAndamento: number;
  pendentesRevisao: number;
  urgentesPendentes: number;
  naFilaEmergencia: number;
  aprovados: number;
  rejeitados: number;
  erros: number;
  /** Documentos sem falha técnica / total, em %. */
  taxaSucessoPct: number | null;
  /** Média da confiança da CLASSIFICAÇÃO, em %. */
  confiancaClassificacaoMediaPct: number | null;
  /** `processado` (roteado sem revisão) / com decisão, em %. */
  semRevisaoPct: number | null;
  porDestino: {destino: Destino; rotulo: string; valor: number}[];
}

const pct = (parte: number, todo: number) => (todo > 0 ? Math.round((parte / todo) * 1000) / 10 : null);

const ORDEM_DESTINOS: Destino[] = [
  'FILA_EMERGENCIA_MEDICA',
  'FILA_REVISAO_HUMANA_PRIORITARIA',
  'FILA_REVISAO_HUMANA',
  'AUDITORIA_AUTORIZACOES',
  'FARMACIA_HOSPITALAR',
  'PRONTUARIO_ELETRONICO',
];

export function calcularMetricas(docs: DocumentoView[]): Metricas {
  const comDecisao = docs.filter((d) => ['processado', 'em_auditoria', 'aprovado_auditoria', 'rejeitado'].includes(d.status));
  const confiancas = docs.map((d) => d.confiancaClassificacao?.pct).filter((v): v is number => v !== undefined);
  return {
    total: docs.length,
    processados: comDecisao.length,
    emAndamento: docs.filter((d) => d.emAndamento).length,
    pendentesRevisao: docs.filter((d) => d.status === 'em_auditoria').length,
    urgentesPendentes: docs.filter((d) => d.status === 'em_auditoria' && d.urgente).length,
    naFilaEmergencia: docs.filter((d) => d.roteamento?.destino === 'FILA_EMERGENCIA_MEDICA').length,
    aprovados: docs.filter((d) => d.status === 'aprovado_auditoria').length,
    rejeitados: docs.filter((d) => d.status === 'rejeitado').length,
    erros: docs.filter((d) => d.status === 'erro').length,
    taxaSucessoPct: pct(docs.filter((d) => d.status !== 'erro' && !d.emAndamento).length, docs.filter((d) => !d.emAndamento).length),
    confiancaClassificacaoMediaPct: confiancas.length ? Math.round(confiancas.reduce((a, b) => a + b, 0) / confiancas.length) : null,
    semRevisaoPct: pct(docs.filter((d) => d.status === 'processado').length, comDecisao.length),
    porDestino: ORDEM_DESTINOS.map((destino) => ({
      destino,
      rotulo: DESTINO_CURTO[destino],
      valor: docs.filter((d) => d.roteamento?.destino === destino).length,
    })),
  };
}

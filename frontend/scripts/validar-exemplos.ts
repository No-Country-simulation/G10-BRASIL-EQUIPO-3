/**
 * Passa os exemplos OFICIAIS do backend (`backend/docs/exemplos/resposta_*.json`) pelos adaptadores
 * do frontend (DTO → domínio → apresentação). Falha se algum exemplo não for aceito ou se alguma
 * garantia de apresentação for violada. Executado por `validar-exemplos.mjs`.
 */
import {readdirSync, readFileSync} from 'node:fs';
import {join} from 'node:path';
import {toDocumento} from '../src/adapters/toDomain';
import {toDocumentoView} from '../src/adapters/toView';
import type {RespostaTriagemDTO} from '../src/types/dto';

export function executar(diretorioExemplos: string): {linhas: string[]; falhas: string[]} {
  const linhas: string[] = [];
  const falhas: string[] = [];
  const arquivos = readdirSync(diretorioExemplos).filter((f) => /^resposta_.*\.json$/.test(f)).sort();
  if (!arquivos.length) falhas.push(`nenhum resposta_*.json em ${diretorioExemplos}`);

  for (const nome of arquivos) {
    try {
      const dto = JSON.parse(readFileSync(join(diretorioExemplos, nome), 'utf-8')) as RespostaTriagemDTO;
      const doc = toDocumento(dto);
      const v = toDocumentoView(doc);

      // Valores originais do backend preservados na camada de integração.
      if (v.status !== dto.status) falhas.push(`${nome}: status alterado (${dto.status} → ${v.status})`);
      if (v.prioridade !== (dto.classificacao?.prioridade ?? null)) falhas.push(`${nome}: prioridade alterada`);
      if (v.roteamento && v.roteamento.destino !== dto.decisao_roteamento?.destino) falhas.push(`${nome}: destino alterado`);
      if (v.versao !== (dto.versao_resultado ?? 1)) falhas.push(`${nome}: versão alterada`);
      // Prioridade clínica ≠ confiança.
      if (v.prioridadeRotulo && /\d+%/.test(v.prioridadeRotulo)) falhas.push(`${nome}: prioridade misturada com confiança`);
      // Campos: nenhum valor inventado — só presente quando o backend enviou valor.
      for (const c of v.campos) if (c.situacao !== 'presente' && c.valor !== null) falhas.push(`${nome}: ${c.chave} ${c.situacao} com valor`);
      // scores_por_campo (derivado) deve coincidir com as confianças dos campos.
      const scores = dto.scores_por_campo ?? {};
      for (const c of doc.campos) {
        const esperado = scores[c.chave];
        if (c.confianca !== null && esperado !== undefined && esperado !== c.confianca) falhas.push(`${nome}: score de ${c.chave} diverge`);
      }
      // Erro técnico não carrega resultado clínico.
      if (dto.status === 'erro' && (v.campos.length || v.roteamento || v.tipo)) falhas.push(`${nome}: erro com resultado clínico`);

      linhas.push(
        `✓ ${nome.padEnd(52)} ${v.status.padEnd(18)} ${String(v.campos.length).padStart(2)} campos · ${v.achados.length} achados · ${v.roteamento?.destino ?? 'sem destino'}`,
      );
    } catch (e) {
      falhas.push(`${nome}: ${(e as Error).message}`);
    }
  }
  return {linhas, falhas};
}

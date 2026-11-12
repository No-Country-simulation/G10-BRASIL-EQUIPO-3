import type {ReactElement} from 'react';
import {CircleAlert, CircleCheck, CircleX, UserCheck} from 'lucide-react';
import {ConfidenceMeter} from '../ConfidenceMeter';
import type {CampoView, EstadoCampo} from '../../types/view';

const ICONES: Record<EstadoCampo, ReactElement> = {
  ok: <CircleCheck size={16} />,
  atencao: <CircleAlert size={16} />,
  erro: <CircleX size={16} />,
};

/** Agrupa preservando a ordem em que os grupos aparecem. */
function agrupar(campos: CampoView[]): [string, CampoView[]][] {
  const mapa = new Map<string, CampoView[]>();
  campos.forEach((c) => mapa.set(c.grupo, [...(mapa.get(c.grupo) ?? []), c]));
  return [...mapa.entries()];
}

export function CampoLinha({campo}: {campo: CampoView}) {
  const vazio = campo.situacao !== 'presente';
  return (
    <div className={`data-field ${campo.estado}`}>
      <div className="data-field-head">
        <span className={`field-icon ${campo.estado}`}>{ICONES[campo.estado]}</span>
        <span className="data-field-label">{campo.rotulo}</span>
        {campo.revisadoPorHumano ? (
          <span className="tag human">
            <UserCheck size={12} /> Revisado por humano
          </span>
        ) : (
          campo.confianca && <ConfidenceMeter confianca={campo.confianca} titulo={`Confiança em ${campo.rotulo}`} />
        )}
      </div>
      <div className={`data-field-value ${vazio ? 'empty' : ''}`}>
        {vazio ? campo.situacaoRotulo : campo.valorExibicao}
      </div>
      {campo.evidencia && (
        <p className="evidence">
          Evidência: <q>{campo.evidencia}</q>
        </p>
      )}
      {campo.motivo && <p className={`field-issue ${campo.estado}`}>{campo.motivo}</p>}
      {campo.aviso && <p className="field-meta">{campo.aviso}</p>}
    </div>
  );
}

/** Dados extraídos com confiança individual, evidência e situação (presente, ausente, ilegível). */
export function CamposExtraidos({campos}: {campos: CampoView[]}) {
  if (campos.length === 0) return <p className="muted-text">Nenhum dado foi extraído deste documento.</p>;
  // Ausentes sem achado correspondente ficam recolhidos: não há o que conferir neles.
  const vazios = campos.filter((c) => c.situacao === 'ausente' && c.estado === 'ok');
  const visiveis = campos.filter((c) => !vazios.includes(c));
  return (
    <div className="data-groups">
      {agrupar(visiveis).map(([grupo, lista]) => (
        <section key={grupo}>
          <h3>{grupo}</h3>
          {lista.map((c) => (
            <CampoLinha key={c.chave} campo={c} />
          ))}
        </section>
      ))}
      {vazios.length > 0 && (
        <details className="correct-list">
          <summary>{vazios.length} {vazios.length === 1 ? 'campo não encontrado' : 'campos não encontrados'} no documento</summary>
          <ul className="missing-list">
            {vazios.map((c) => (
              <li key={c.chave}>{c.rotulo}</li>
            ))}
          </ul>
        </details>
      )}
    </div>
  );
}

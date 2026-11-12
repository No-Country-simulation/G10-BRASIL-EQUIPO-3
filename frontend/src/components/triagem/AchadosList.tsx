import {CircleAlert, CircleX, Info} from 'lucide-react';
import type {AchadoView} from '../../types/view';

const ICONES = {alta: <CircleX size={16} />, media: <CircleAlert size={16} />, baixa: <Info size={16} />};

/** Achados de validação determinística (`validacoes`). */
export function AchadosList({achados}: {achados: AchadoView[]}) {
  if (achados.length === 0) return <p className="all-good">Nenhum achado de validação.</p>;
  return (
    <ul className="findings">
      {achados.map((a) => (
        <li key={a.chave} className={a.gravidade}>
          <span className="finding-icon">{ICONES[a.gravidade]}</span>
          <div>
            <b>{a.titulo}</b>
            <span className="tag">{a.gravidadeRotulo}</span>
            <p>{a.descricao}</p>
            {a.campos.length > 0 && <p className="finding-fields">Campos: {a.campos.map((c) => c.rotulo).join(', ')}</p>}
            {a.evidencia && (
              <p className="evidence">
                Evidência: <q>{a.evidencia}</q>
              </p>
            )}
            {a.acaoSugerida && <p className="finding-action">Ação sugerida: {a.acaoSugerida}</p>}
          </div>
        </li>
      ))}
    </ul>
  );
}

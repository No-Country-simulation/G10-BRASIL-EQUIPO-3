import {NIVEL_ROTULOS} from '../adapters/labels';
import type {ConfiancaView} from '../types/view';

interface Props {
  confianca: ConfiancaView | null;
  /** "ring" = indicador grande com rótulo; "bar" = compacto para listas. */
  variant?: 'ring' | 'bar';
  /** O que está sendo medido (acessibilidade e legenda). */
  titulo?: string;
}

/** Confiança (0–1) da IA. Eixo independente da prioridade clínica. */
export function ConfidenceMeter({confianca, variant = 'bar', titulo = 'Confiança'}: Props) {
  if (!confianca) return <span className="muted-text">—</span>;
  const {pct, nivel} = confianca;
  const rotulo = NIVEL_ROTULOS[nivel];

  if (variant === 'bar')
    return (
      <span className={`meter-bar ${nivel}`} title={`${titulo}: ${rotulo}`}>
        <span className="track">
          <span style={{width: `${pct}%`}} />
        </span>
        <b>{pct}%</b>
      </span>
    );

  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  return (
    <div className={`meter-ring ${nivel}`}>
      <svg width="84" height="84" viewBox="0 0 84 84" role="img" aria-label={`${titulo}: ${rotulo}, ${pct}%`}>
        <circle className="bg" cx="42" cy="42" r={radius} />
        <circle
          className="fg"
          cx="42"
          cy="42"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - pct / 100)}
          transform="rotate(-90 42 42)"
        />
        <text x="42" y="47" textAnchor="middle">
          {pct}%
        </text>
      </svg>
      <div>
        <strong>{rotulo}</strong>
        <span>{titulo}</span>
      </div>
    </div>
  );
}

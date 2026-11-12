import type {ReactElement} from 'react';
import {CircleAlert, CircleCheck, CircleX, Undo2, UserCheck} from 'lucide-react';
import type {CampoView, EstadoCampo} from '../types/view';

interface Props {
  campo: CampoView;
  /** Texto atual do input (o digitado, ou o valor extraído). */
  valor: string;
  erro?: string;
  active: boolean;
  disabled?: boolean;
  onSelect: () => void;
  onValue: (value: string) => void;
}

const icons: Record<EstadoCampo, ReactElement> = {
  ok: <CircleCheck size={17} />,
  atencao: <CircleAlert size={17} />,
  erro: <CircleX size={17} />,
};

/** Linha de campo na revisão: edita o valor e gera uma `CorrecaoCampoEntrada` quando ele muda. */
export function CampoRevisaoRow({campo, valor, erro, active, disabled, onSelect, onValue}: Props) {
  const editado = valor.trim() !== campo.valorTexto;
  const id = `campo-${campo.chave}`;

  return (
    <div className={`field-row ${campo.estado} ${active ? 'active' : ''}`} onClick={onSelect}>
      <div className="field-head">
        <span className={`field-icon ${campo.estado}`}>{icons[campo.estado]}</span>
        <label htmlFor={id}>{campo.rotulo}</label>
        {campo.revisadoPorHumano ? (
          <small className="tag human">
            <UserCheck size={12} /> Revisado por humano
          </small>
        ) : (
          <small>{campo.confianca ? `${campo.confianca.pct}%` : campo.situacaoRotulo}</small>
        )}
      </div>

      <div className="field-input">
        <input
          id={id}
          type={campo.tipoEntrada === 'data' ? 'date' : 'text'}
          inputMode={campo.tipoEntrada === 'inteiro' ? 'numeric' : undefined}
          value={valor}
          disabled={disabled}
          placeholder={campo.situacao === 'presente' ? '' : campo.situacaoRotulo}
          aria-invalid={!!erro}
          onFocus={onSelect}
          onChange={(e) => onValue(e.target.value)}
        />
        {editado && (
          <button
            type="button"
            className="link-button"
            disabled={disabled}
            onClick={(e) => {
              e.stopPropagation();
              onValue(campo.valorTexto);
            }}
          >
            <Undo2 size={13} /> Restaurar
          </button>
        )}
      </div>

      {erro && <p className="field-issue erro">{erro}</p>}
      {campo.evidencia && (
        <p className="evidence">
          Evidência: <q>{campo.evidencia}</q>
        </p>
      )}
      {campo.motivo && <p className={`field-issue ${campo.estado}`}>{campo.motivo}</p>}
      {campo.aviso && <p className="field-meta">{campo.aviso}</p>}
      {editado && !erro && (
        <p className="field-meta">
          Será enviado como correção · valor lido pela IA: {campo.valorTexto === '' ? '(vazio)' : `“${campo.valorTexto}”`}
        </p>
      )}
    </div>
  );
}

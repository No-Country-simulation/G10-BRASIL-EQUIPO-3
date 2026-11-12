import {OctagonAlert} from 'lucide-react';
import type {DocumentoView} from '../../types/view';

/** `erro` (ErroProcessamento): falha TÉCNICA — não é baixa confiança nem ambiguidade clínica. */
export function ErroCard({erro}: {erro: NonNullable<DocumentoView['erro']>}) {
  return (
    <div className="card error-card" role="alert">
      <div className="error-card-head">
        <OctagonAlert size={18} aria-hidden />
        <h2>Falha no processamento · {erro.titulo}</h2>
      </div>
      <p>{erro.descricao}</p>
      {erro.etapa && <small>Etapa: {erro.etapa}</small>}
      <small>Nenhuma classificação, dado extraído ou destino foi produzido para este documento.</small>
    </div>
  );
}

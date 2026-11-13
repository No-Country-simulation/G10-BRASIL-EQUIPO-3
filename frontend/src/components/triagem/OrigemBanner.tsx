import {FlaskConical} from 'lucide-react';
import type {DocumentoView} from '../../types/view';

/** `origem_analise.dados_de_teste = true` (provedor simulado): não é avaliação clínica. */
export function OrigemBanner({doc}: {doc: Pick<DocumentoView, 'origem'>}) {
  if (!doc.origem?.dadosDeTeste) return null;
  return (
    <div className="banner info" role="note">
      <FlaskConical size={16} aria-hidden />
      <span>
        <b>{doc.origem.rotulo}.</b> Este resultado é um dado de teste, não uma avaliação clínica.
      </span>
    </div>
  );
}

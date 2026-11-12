import {useEffect, useRef} from 'react';
import {FileText} from 'lucide-react';
import type {DocumentoView} from '../types/view';

interface Props {
  doc: DocumentoView;
  activeChave?: string | null;
  onSelectField?: (chave: string) => void;
}

/**
 * Mostra o arquivo original (imagem ou PDF) somente quando ele foi enviado por ESTE navegador:
 * o backend não devolve o arquivo. Sem ele, exibe as EVIDÊNCIAS que a IA citou (trechos literais).
 */
export function DocumentViewer({doc, activeChave, onSelectField}: Props) {
  const activeRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    activeRef.current?.scrollIntoView({block: 'nearest', behavior: 'smooth'});
  }, [activeChave]);

  const arq = doc.arquivo;
  const isImage = arq?.mimeType.startsWith('image/');
  const isPdf = arq?.mimeType === 'application/pdf';
  const linhas = doc.campos.filter((c) => c.situacao !== 'ausente');

  return (
    <div className="card document-preview">
      <div className="preview-toolbar">
        <FileText size={18} />
        <b>{doc.nomeArquivo ?? doc.id}</b>
        <span>{isImage || isPdf ? 'Documento original' : 'Evidências citadas pela IA'}</span>
      </div>

      {arq && isImage && <img className="original-file" src={arq.url} alt={`Documento ${doc.id}`} />}
      {arq && isPdf && <iframe className="original-file" src={arq.url} title={`Documento ${doc.id}`} />}

      {!isImage && !isPdf && (
        <div className="paper">
          <h2>{doc.tipoRotulo.toUpperCase()}</h2>
          <hr />
          {linhas.map((c) => (
            <div className="paper-line" key={c.chave}>
              <span className="k">{c.rotulo}</span>
              <button
                type="button"
                ref={activeChave === c.chave ? activeRef : undefined}
                className={`v ${c.estado} ${activeChave === c.chave ? 'active' : ''}`}
                onClick={() => onSelectField?.(c.chave)}
              >
                {c.situacao === 'ilegivel' ? (c.evidencia ?? 'Ilegível') : (c.evidencia ?? c.valorExibicao)}
              </button>
            </div>
          ))}
          {linhas.length === 0 && <p>Nenhum conteúdo foi extraído deste documento.</p>}
          <p className="paper-note">O backend não devolve o arquivo original; estes são os trechos citados como evidência.</p>
        </div>
      )}
    </div>
  );
}

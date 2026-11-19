import {useEffect, useRef} from 'react';
import {FileText} from 'lucide-react';
import type {ArquivoOriginal} from '../services/originais';
import type {DocumentoView} from '../types/view';

interface Props {
  doc: DocumentoView;
  /** Arquivo original (do envio local ou do backend). `null`/ausente = mostrar as evidências. */
  arquivo?: ArquivoOriginal | null;
  activeChave?: string | null;
  onSelectField?: (chave: string) => void;
}

export function DocumentViewer({doc, arquivo, activeChave, onSelectField}: Props) {
  const activeRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    activeRef.current?.scrollIntoView({block: 'nearest', behavior: 'smooth'});
  }, [activeChave]);

  const arq = arquivo ?? doc.arquivo;
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
          <p className="paper-note">Não há arquivo original guardado para este documento (ex.: enviado como texto); estes são os trechos citados como evidência.</p>
        </div>
      )}
    </div>
  );
}

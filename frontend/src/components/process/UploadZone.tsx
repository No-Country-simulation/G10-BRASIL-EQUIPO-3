import {useRef, useState} from 'react';
import {CloudUpload, FileText, LoaderCircle, X} from 'lucide-react';
import {CANAIS_SELECIONAVEIS, CANAL_ROTULOS} from '../../adapters/labels';
import {EXTENSOES_ACEITAS, tipoArquivoPorNome} from '../../adapters/toDto';
import {config} from '../../config/env';
import {formatFileSize} from '../../lib/format';
import type {CanalOrigem} from '../../types/domain';

const MAX_SIZE = config.maxUploadMb * 1024 * 1024;

interface Props {
  files: File[];
  canal: CanalOrigem;
  busy: boolean;
  error: string;
  onFiles: (files: File[]) => void;
  onCanal: (value: CanalOrigem) => void;
  onStart: () => void;
}

export function UploadZone({files, canal, busy, error, onFiles, onCanal, onStart}: Props) {
  const [dragging, setDragging] = useState(false);
  const [rejected, setRejected] = useState<string[]>([]);
  const input = useRef<HTMLInputElement>(null);

  const add = (incoming: File[]) => {
    const refused: string[] = [];
    const valid = incoming.filter((f) => {
      if (!tipoArquivoPorNome(f.name, f.type)) return refused.push(`${f.name}: formato não suportado (PDF, PNG, JPEG ou TXT)`), false;
      if (f.size > MAX_SIZE) return refused.push(`${f.name}: acima de ${config.maxUploadMb} MB`), false;
      return true;
    });
    setRejected(refused);
    const known = new Set(files.map((f) => `${f.name}:${f.size}`));
    onFiles([...files, ...valid.filter((f) => !known.has(`${f.name}:${f.size}`))]);
  };

  return (
    <div className="upload-area">
      <label
        className={`card dropzone ${dragging ? 'dragging' : ''} ${files.length ? 'compact' : ''}`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          add(Array.from(e.dataTransfer.files));
        }}
      >
        <input
          ref={input}
          type="file"
          multiple
          className="sr-only"
          accept={EXTENSOES_ACEITAS}
          disabled={busy}
          onChange={(e) => {
            add(Array.from(e.target.files ?? []));
            e.target.value = '';
          }}
        />
        <CloudUpload size={files.length ? 28 : 40} />
        <h2>{files.length ? 'Adicionar mais arquivos' : 'Adicione um documento'}</h2>
        {!files.length && <p>Arraste e solte aqui · PDF, PNG, JPEG ou TXT até {config.maxUploadMb} MB</p>}
        <span className="secondary fake-button">Selecionar arquivo</span>
      </label>

      {rejected.length > 0 && (
        <div className="error" role="alert">
          {rejected.map((r) => (
            <div key={r}>{r}</div>
          ))}
        </div>
      )}

      {files.length > 0 && (
        <div className="card file-list">
          {files.map((f) => (
            <div className="file-row" key={`${f.name}:${f.size}`}>
              <FileText size={18} />
              <span>{f.name}</span>
              <small>{formatFileSize(f.size)}</small>
              <button
                type="button"
                className="icon-button"
                aria-label={`Remover ${f.name}`}
                disabled={busy}
                onClick={() => onFiles(files.filter((x) => x !== f))}
              >
                <X size={16} />
              </button>
            </div>
          ))}

          <div className="upload-footer">
            <label className="canal-select">
              <span>Canal de origem</span>
              <select value={canal} disabled={busy} onChange={(e) => onCanal(e.target.value as CanalOrigem)}>
                {CANAIS_SELECIONAVEIS.map((c) => (
                  <option key={c} value={c}>
                    {CANAL_ROTULOS[c]}
                  </option>
                ))}
              </select>
            </label>
            <button className="primary" disabled={busy} onClick={onStart}>
              {busy && <LoaderCircle className="spin" size={16} />}
              {busy ? 'Enviando...' : 'Iniciar processamento'}
            </button>
          </div>
          <p className="muted-text">A prioridade e a urgência são definidas pelo sistema a partir do conteúdo; não podem ser escolhidas no envio.</p>
          {error && (
            <div className="error" role="alert">
              {error}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

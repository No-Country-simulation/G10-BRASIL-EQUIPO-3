import {useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import {Plus} from 'lucide-react';
import {useDocuments} from '../context/DocumentsContext';
import {useToast} from '../context/ToastContext';
import {UploadZone} from '../components/process/UploadZone';
import {AnalysisCard} from '../components/process/AnalysisCard';
import {PendingList} from '../components/process/PendingList';
import {mensagemDeErro} from '../services/errors';
import type {CanalOrigem} from '../types/domain';

/** Tela principal: enviar documento, ver o resultado da IA e acessar as revisões pendentes. */
export default function Process() {
  const [params, setParams] = useSearchParams();
  const tab = params.get('tab') === 'pendentes' ? 'pendentes' : 'novo';
  const {views, enviar} = useDocuments();
  const toast = useToast();
  const pendentes = views.filter((d) => d.revisaoDisponivel).length;

  // O estado do envio fica aqui para não se perder ao alternar entre as abas.
  const [files, setFiles] = useState<File[]>([]);
  const [canal, setCanal] = useState<CanalOrigem>('AMBULATORIO');
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState('');
  const [createdIds, setCreatedIds] = useState<string[] | null>(null);

  const start = async () => {
    if (!files.length) return;
    setSending(true);
    setSendError('');
    try {
      const {criados, falhas} = await enviar(files, canal);
      if (falhas.length) setSendError(falhas.map((f) => `${f.nome}: ${f.mensagem}`).join(' · '));
      if (criados.length) {
        setCreatedIds(criados.map((d) => d.id));
        if (falhas.length) toast(`${falhas.length} arquivo(s) não foram enviados.`, 'error');
      }
    } catch (e) {
      setSendError(mensagemDeErro(e));
    } finally {
      setSending(false);
    }
  };

  const reset = () => {
    setFiles([]);
    setCreatedIds(null);
    setSendError('');
  };

  const goTo = (next: 'novo' | 'pendentes') => setParams(next === 'novo' ? {} : {tab: next}, {replace: true});

  return (
    <>
      <div className="page-head">
        <h1>Processar</h1>
        {createdIds && tab === 'novo' && (
          <button className="secondary" onClick={reset}>
            <Plus size={16} /> Novo documento
          </button>
        )}
      </div>

      <div className="tabs" role="tablist">
        <button role="tab" aria-selected={tab === 'novo'} className={tab === 'novo' ? 'on' : ''} onClick={() => goTo('novo')}>
          Novo processamento
        </button>
        <button
          role="tab"
          aria-selected={tab === 'pendentes'}
          className={tab === 'pendentes' ? 'on' : ''}
          onClick={() => goTo('pendentes')}
        >
          Pendentes de revisão
          {pendentes > 0 && <b className="tab-count">{pendentes}</b>}
        </button>
      </div>

      {tab === 'novo' &&
        (createdIds ? (
          <div className="analysis-list">
            {createdIds.map((id) => (
              <AnalysisCard key={id} id={id} />
            ))}
            {sendError && (
              <div className="error" role="alert">
                {sendError}
              </div>
            )}
          </div>
        ) : (
          <UploadZone files={files} canal={canal} busy={sending} error={sendError} onFiles={setFiles} onCanal={setCanal} onStart={start} />
        ))}

      {tab === 'pendentes' && <PendingList />}
    </>
  );
}

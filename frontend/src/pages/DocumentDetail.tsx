import {Link, useParams} from 'react-router-dom';
import {ArrowLeft, ExternalLink} from 'lucide-react';
import {useDocumento} from '../hooks/useDocumento';
import {useOpenReview} from '../hooks/useOpenReview';
import {formatDateTime} from '../lib/format';
import {PriorityTag} from '../components/PriorityTag';
import {StatusBadge} from '../components/StatusBadge';
import {ErrorState, LoadingState} from '../components/States';
import {AchadosList} from '../components/triagem/AchadosList';
import {ArmazenamentoInfo} from '../components/triagem/ArmazenamentoInfo';
import {CamposExtraidos} from '../components/triagem/CamposExtraidos';
import {ClassificacaoCard} from '../components/triagem/ClassificacaoCard';
import {ErroCard} from '../components/triagem/ErroCard';
import {HistoricoTimeline} from '../components/triagem/HistoricoTimeline';
import {OrigemBanner} from '../components/triagem/OrigemBanner';
import {RoteamentoCard} from '../components/triagem/RoteamentoCard';

/** Resultado completo de uma `RespostaTriagem`, sem dados inventados. */
export default function DocumentDetail() {
  const {id = ''} = useParams();
  const openReview = useOpenReview();
  const {view: doc, erro, carregando, recarregar} = useDocumento(id);

  if (carregando) return <LoadingState label="Carregando documento..." />;
  if (!doc) return <ErrorState message={erro || 'Documento não encontrado.'} onRetry={recarregar} />;

  return (
    <>
      <Link to="/documentos" className="back-link">
        <ArrowLeft size={16} /> Documentos
      </Link>

      <div className="page-head">
        <div>
          <h1>{doc.id}</h1>
          <p>
            {doc.tipoRotulo}
            {doc.canalRotulo ? ` · ${doc.canalRotulo}` : ''} · resultado v{doc.versao}
            {doc.recebidoEm ? ` · enviado em ${formatDateTime(doc.recebidoEm)}` : ''}
          </p>
        </div>
        <div className="head-buttons">
          {doc.arquivo && (
            <a className="secondary link-as-button" href={doc.arquivo.url} target="_blank" rel="noreferrer">
              <ExternalLink size={15} /> Ver original
            </a>
          )}
          {doc.revisaoDisponivel && (
            <button className="primary" onClick={() => openReview(doc.id)}>
              Revisar documento
            </button>
          )}
        </div>
      </div>

      <div className="detail-tags">
        <StatusBadge doc={doc} />
        <PriorityTag doc={doc} showRotina />
      </div>

      {erro && (
        <div className="error" role="alert">
          {erro}
        </div>
      )}
      <OrigemBanner doc={doc} />
      {doc.erro && <ErroCard erro={doc.erro} />}

      <div className="detail-grid">
        <div className="stack">
          {!doc.erro && <ClassificacaoCard doc={doc} />}
          {!doc.erro && (
            <div className="card">
              <h2>Dados extraídos</h2>
              <CamposExtraidos campos={doc.campos} />
            </div>
          )}
          {!doc.erro && (
            <div className="card">
              <h2>Validações</h2>
              <AchadosList achados={doc.achados} />
            </div>
          )}
        </div>

        <div className="stack">
          <RoteamentoCard doc={doc} />
          <ArmazenamentoInfo doc={doc} />
          <div className="card">
            <h2>Histórico</h2>
            <HistoricoTimeline eventos={[...doc.historico].reverse()} />
          </div>
        </div>
      </div>
    </>
  );
}

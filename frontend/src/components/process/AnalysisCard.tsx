import {Link} from 'react-router-dom';
import {Check, CircleAlert, CircleCheck, CircleX, FileText, LoaderCircle} from 'lucide-react';
import {useDocuments} from '../../context/DocumentsContext';
import {useOpenReview} from '../../hooks/useOpenReview';
import {ConfidenceMeter} from '../ConfidenceMeter';
import {PriorityTag} from '../PriorityTag';
import {StatusBadge} from '../StatusBadge';
import {ErroCard} from '../triagem/ErroCard';
import {OrigemBanner} from '../triagem/OrigemBanner';

/** Acompanha o processamento de um documento (o polling é do DocumentsContext) e mostra o resultado da IA. */
export function AnalysisCard({id}: {id: string}) {
  const {views, erroSincronizacao} = useDocuments();
  const openReview = useOpenReview();
  const doc = views.find((v) => v.id === id);
  if (!doc) return null;

  const name = doc.nomeArquivo ?? doc.id;

  if (doc.emAndamento)
    return (
      <div className="card analysis">
        <div className="analysis-head">
          <FileText size={18} />
          <b>{name}</b>
          <StatusBadge doc={doc} />
        </div>
        <ol className="steps">
          <li className="done">
            <Check size={14} /> Enviado
          </li>
          <li className="current">
            <LoaderCircle className="spin" size={14} /> {doc.status === 'recebido' ? 'Na fila de análise' : 'IA analisando'}
          </li>
          <li>Resultado</li>
        </ol>
        {erroSincronizacao && (
          <div className="error" role="alert">
            {erroSincronizacao}
          </div>
        )}
      </div>
    );

  if (doc.erro)
    return (
      <div className="card analysis">
        <div className="analysis-head">
          <FileText size={18} />
          <div>
            <b>{name}</b>
            <span>{doc.id}</span>
          </div>
          <StatusBadge doc={doc} />
        </div>
        <ErroCard erro={doc.erro} />
      </div>
    );

  return (
    <div className={`card analysis ${doc.urgente ? 'urgente' : ''}`}>
      <div className="analysis-head">
        <FileText size={18} />
        <div>
          <b>{name}</b>
          <span>
            {doc.id} · {doc.tipoRotulo}
          </span>
        </div>
        <PriorityTag doc={doc} />
        <StatusBadge doc={doc} />
      </div>

      <OrigemBanner doc={doc} />

      <div className="analysis-body">
        <ConfidenceMeter confianca={doc.confiancaClassificacao} variant="ring" titulo="Confiança da classificação" />
        <div className="summary-chips">
          <span className="ok">
            <CircleCheck size={16} /> {doc.resumo.ok} campos confiáveis
          </span>
          {doc.resumo.atencao > 0 && (
            <span className="atencao">
              <CircleAlert size={16} /> {doc.resumo.atencao} em atenção
            </span>
          )}
          {doc.resumo.erro > 0 && (
            <span className="erro">
              <CircleX size={16} /> {doc.resumo.erro} com problema
            </span>
          )}
        </div>
      </div>

      {doc.roteamento && (
        <p className="route-line">
          <b>Destino definido pelo sistema:</b> {doc.roteamento.destinoRotulo} · {doc.roteamento.motivo}
        </p>
      )}

      {doc.camposEmAtencao.length > 0 && (
        <ul className="issue-list">
          {doc.camposEmAtencao.map((f) => (
            <li key={f.chave} className={f.estado}>
              {f.estado === 'erro' ? <CircleX size={16} /> : <CircleAlert size={16} />}
              <span>
                <b>{f.rotulo}</b>
                {f.motivo && ` · ${f.motivo}`}
              </span>
            </li>
          ))}
        </ul>
      )}

      {doc.camposOk.length > 0 && (
        <details className="correct-list">
          <summary>Ver os {doc.camposOk.length} campos confiáveis</summary>
          <dl>
            {doc.camposOk.map((f) => (
              <div key={f.chave}>
                <dt>{f.rotulo}</dt>
                <dd>{f.valorExibicao}</dd>
              </div>
            ))}
          </dl>
        </details>
      )}

      <div className="analysis-actions">
        {doc.revisaoDisponivel ? (
          <>
            <span className="note">Revisão humana pendente.</span>
            <button className="primary" onClick={() => openReview(doc.id)}>
              Revisar documento
            </button>
          </>
        ) : (
          <span className="note success-text">{doc.roteamento?.statusRevisaoRotulo ?? doc.statusRotulo}.</span>
        )}
        <Link className="secondary link-as-button" to={`/documentos/${encodeURIComponent(doc.id)}`}>
          Ver detalhes
        </Link>
      </div>
    </div>
  );
}

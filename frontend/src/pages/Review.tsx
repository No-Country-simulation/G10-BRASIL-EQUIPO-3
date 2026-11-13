import {useMemo, useState} from 'react';
import {Link, Navigate, useLocation, useNavigate, useParams, useSearchParams} from 'react-router-dom';
import {ArrowLeft, Check, ChevronDown, LoaderCircle, RefreshCw, X} from 'lucide-react';
import {montarCorrecoes, montarRequisicaoRevisao} from '../adapters/toDto';
import {useDocuments} from '../context/DocumentsContext';
import {useSettings} from '../context/SettingsContext';
import {useToast} from '../context/ToastContext';
import {useDocumento} from '../hooks/useDocumento';
import {isConflitoDeVersao, mensagemDeErro} from '../services/errors';
import {ConfidenceMeter} from '../components/ConfidenceMeter';
import {CampoRevisaoRow} from '../components/CampoRevisaoRow';
import {DocumentViewer} from '../components/DocumentViewer';
import {PriorityTag} from '../components/PriorityTag';
import {StatusBadge} from '../components/StatusBadge';
import {ErrorState, LoadingState} from '../components/States';
import {AchadosList} from '../components/triagem/AchadosList';
import {OrigemBanner} from '../components/triagem/OrigemBanner';
import type {DecisaoRevisao} from '../types/domain';
import type {CampoView, EdicoesRevisao} from '../types/view';

/** Rotas antigas (/revisao?id=...) continuam funcionando. */
export function LegacyReviewRedirect() {
  const [params] = useSearchParams();
  const id = params.get('id');
  return <Navigate to={id ? `/revisao/${encodeURIComponent(id)}` : '/processar?tab=pendentes'} replace />;
}

/**
 * Revisão humana (`RequisicaoRevisao`): aprovar ou rejeitar um resultado `em_auditoria`, com
 * justificativa e correções de campo. A tela só muda depois que o backend devolve a resposta válida.
 */
export default function Review() {
  const {id = ''} = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const toast = useToast();
  const {revisar} = useDocuments();
  const {preferencias, salvar} = useSettings();
  const origin = (location.state as {from?: string} | null)?.from ?? '/processar?tab=pendentes';
  const {view: doc, erro: erroCarga, carregando, recarregar} = useDocumento(id);

  const [edicoes, setEdicoes] = useState<EdicoesRevisao>({});
  const [justificativa, setJustificativa] = useState('');
  const [revisor, setRevisor] = useState(preferencias.revisor);
  const [activeChave, setActiveChave] = useState<string | null>(null);
  const [showOk, setShowOk] = useState(false);
  const [showVazios, setShowVazios] = useState(false);
  const [busy, setBusy] = useState<DecisaoRevisao | null>(null);
  const [error, setError] = useState('');
  const [conflito, setConflito] = useState(false);

  const campos = doc?.campos ?? [];
  const correcoes = useMemo(() => montarCorrecoes(campos, edicoes), [campos, edicoes]);
  const erros = correcoes.ok ? {} : correcoes.erros;
  const nCorrecoes = correcoes.ok ? correcoes.correcoes.length : 0;
  const dirty = Object.keys(edicoes).length > 0 || justificativa.trim() !== '';

  if (carregando) return <LoadingState label="Carregando documento..." />;
  if (!doc) return <ErrorState message={erroCarga || 'Documento não encontrado.'} onRetry={recarregar} />;

  const locked = !doc.revisaoDisponivel;
  const flagged = doc.camposEmAtencao;
  const vazios = doc.camposNaoEncontrados;

  const setValor = (c: CampoView, v: string) =>
    setEdicoes((s) => {
      const next = {...s};
      if (v === c.valorTexto) delete next[c.chave];
      else next[c.chave] = v;
      return next;
    });

  const leave = () => {
    if (dirty && !window.confirm('Há alterações não enviadas. Deseja sair mesmo assim?')) return;
    navigate(origin);
  };

  const recarregarResultado = async () => {
    setEdicoes({});
    setJustificativa('');
    setConflito(false);
    setError('');
    await recarregar();
  };

  const enviar = async (decisao: DecisaoRevisao) => {
    setError('');
    if (!correcoes.ok) return setError('Corrija os campos destacados antes de enviar.');
    const m = montarRequisicaoRevisao({decisao, justificativa, revisor, versaoBase: doc.versao, correcoes: correcoes.correcoes});
    if (!m.ok) return setError(m.erro);

    setBusy(decisao);
    try {
      await revisar(doc.id, m.requisicao);
      if (revisor.trim() !== preferencias.revisor) salvar({...preferencias, revisor: revisor.trim()});
      toast(decisao === 'aprovar' ? `${doc.id} aprovado.` : `${doc.id} rejeitado.`);
      navigate(origin);
    } catch (e) {
      setConflito(isConflitoDeVersao(e));
      setError(`${mensagemDeErro(e)} Suas alterações continuam na tela.`);
    } finally {
      setBusy(null);
    }
  };

  const row = (c: CampoView) => (
    <CampoRevisaoRow
      key={c.chave}
      campo={c}
      valor={edicoes[c.chave] ?? c.valorTexto}
      erro={erros[c.chave]}
      active={activeChave === c.chave}
      disabled={locked || busy !== null}
      onSelect={() => setActiveChave(c.chave)}
      onValue={(v) => setValor(c, v)}
    />
  );

  const hint = error
    ? error
    : nCorrecoes > 0 && !justificativa.trim()
      ? `${nCorrecoes} correção(ões): aprovar com correções exige justificativa.`
      : dirty
        ? 'Alterações ainda não enviadas ao backend.'
        : '';

  return (
    <>
      <button className="back-link" onClick={leave}>
        <ArrowLeft size={16} /> Voltar
      </button>

      <div className="page-head">
        <div>
          <h1>Revisão · {doc.id}</h1>
          <p>
            {doc.tipoRotulo}
            {doc.canalRotulo ? ` · ${doc.canalRotulo}` : ''} · resultado v{doc.versao}
          </p>
        </div>
        <div className="detail-tags">
          <PriorityTag doc={doc} showRotina />
          <StatusBadge doc={doc} />
          <ConfidenceMeter confianca={doc.confiancaClassificacao} titulo="Confiança da classificação" />
        </div>
      </div>

      <OrigemBanner doc={doc} />
      {locked && (
        <div className="banner">
          Este resultado está “{doc.statusRotulo}”. O backend só aceita revisão de resultados em auditoria.
          <Link to={`/documentos/${encodeURIComponent(doc.id)}`} className="link-button">
            Ver detalhes
          </Link>
        </div>
      )}
      {conflito && (
        <div className="banner info" role="alert">
          O resultado mudou desde que você o abriu.
          <button className="secondary" onClick={recarregarResultado}>
            <RefreshCw size={14} /> Recarregar resultado
          </button>
        </div>
      )}

      <div className="review-grid">
        <DocumentViewer doc={doc} activeChave={activeChave} onSelectField={setActiveChave} />

        <div className="review-side">
          <div className="card">
            <div className="card-title">
              <h2>Análise da IA</h2>
              {flagged.length > 0 && <span className="progress-text">{flagged.length} {flagged.length === 1 ? "ponto" : "pontos"} de atenção</span>}
            </div>

            {campos.length === 0 && <p className="muted-text">Nenhum campo foi extraído deste documento.</p>}
            {flagged.length > 0 && <div className="field-group">{flagged.map(row)}</div>}
            {flagged.length === 0 && campos.length > 0 && <p className="all-good">Nenhum ponto de atenção nos campos extraídos.</p>}

            {doc.camposOk.length > 0 && (
              <div className="correct-group">
                <button className="toggle-group" onClick={() => setShowOk((v) => !v)} aria-expanded={showOk}>
                  <ChevronDown size={16} className={showOk ? 'open' : ''} />
                  {doc.camposOk.length} campos confiáveis
                </button>
                {showOk && <div className="field-group">{doc.camposOk.map(row)}</div>}
              </div>
            )}
            {vazios.length > 0 && (
              <div className="correct-group">
                <button className="toggle-group" onClick={() => setShowVazios((v) => !v)} aria-expanded={showVazios}>
                  <ChevronDown size={16} className={showVazios ? 'open' : ''} />
                  {vazios.length} campos não encontrados
                </button>
                {showVazios && <div className="field-group">{vazios.map(row)}</div>}
              </div>
            )}
          </div>

          {doc.achados.length > 0 && (
            <div className="card">
              <h2>Validações</h2>
              <AchadosList achados={doc.achados} />
            </div>
          )}

          <div className="card">
            <h2>Decisão do revisor</h2>
            <label className="range-label" htmlFor="justificativa">
              Justificativa
            </label>
            <textarea
              id="justificativa"
              value={justificativa}
              disabled={locked || busy !== null}
              maxLength={2000}
              onChange={(e) => setJustificativa(e.target.value)}
              placeholder="Obrigatória para rejeitar e para aprovar com correções"
            />
            <label className="range-label" htmlFor="revisor">
              Identificador do revisor
            </label>
            <input
              id="revisor"
              value={revisor}
              disabled={locked || busy !== null}
              maxLength={120}
              onChange={(e) => setRevisor(e.target.value)}
              placeholder="Ex.: nome ou matrícula"
            />
            <p className="muted-text">Informado por você e registrado sem verificação de identidade (o backend não autentica).</p>
            {doc.urgente && (
              <p className="muted-text">
                Documento sinalizado como urgente: a urgência não é rebaixada. Aprovar encaminha à fila de emergência e registra o alerta; rejeitar
                mantém o documento na fila de revisão.
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="action-bar">
        <span className={`hint ${error ? 'error-text' : ''}`} role={error ? 'alert' : undefined}>
          {hint}
        </span>
        <button className="danger" disabled={locked || busy !== null} onClick={() => enviar('rejeitar')}>
          {busy === 'rejeitar' ? <LoaderCircle className="spin" size={16} /> : <X size={16} />}
          Rejeitar
        </button>
        <button className="primary" disabled={locked || busy !== null} onClick={() => enviar('aprovar')}>
          {busy === 'aprovar' ? <LoaderCircle className="spin" size={16} /> : <Check size={16} />}
          {nCorrecoes > 0 ? `Aprovar com ${nCorrecoes} correção(ões)` : 'Aprovar'}
        </button>
      </div>
    </>
  );
}

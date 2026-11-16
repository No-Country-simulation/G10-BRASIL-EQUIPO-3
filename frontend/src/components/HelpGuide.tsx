import {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import {CircleHelp, X} from 'lucide-react';
import {STATUS_ROTULOS} from '../adapters/labels';
import {config, isMock} from '../config/env';
import type {StatusProcessamento} from '../types/domain';

const STATUS_AJUDA: Record<StatusProcessamento, string> = {
  recebido: 'O arquivo chegou e aguarda a análise da IA.',
  processando: 'A IA está lendo e analisando o documento.',
  processado: 'Análise concluída e documento encaminhado automaticamente, sem revisão humana.',
  em_auditoria: 'Precisa de decisão humana. Aparece em “Pendentes de revisão”.',
  aprovado_auditoria: 'Um revisor aprovou o resultado, com ou sem correções.',
  rejeitado: 'Um revisor rejeitou o resultado.',
  erro: 'Falha técnica no processamento: não há resultado clínico.',
};

/** Botão "?" + guia de uso em painel. Abre a qualquer momento, em qualquer tela. */
export function HelpGuide() {
  const [aberto, setAberto] = useState(false);
  const fechar = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!aberto) return;
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setAberto(false);
    document.addEventListener('keydown', esc);
    document.body.classList.add('no-scroll');
    fechar.current?.focus();
    return () => {
      document.removeEventListener('keydown', esc);
      document.body.classList.remove('no-scroll');
    };
  }, [aberto]);

  return (
    <>
      <button type="button" className="icon-button help-btn" aria-label="Abrir guia de uso" title="Guia de uso" onClick={() => setAberto(true)}>
        <CircleHelp size={18} />
      </button>

      {aberto && (
        <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && setAberto(false)}>
          <div className="modal guide" role="dialog" aria-modal="true" aria-labelledby="guide-title">
            <div className="modal-head">
              <h2 id="guide-title">Guia de uso do MediFlow</h2>
              <button ref={fechar} type="button" className="icon-button" aria-label="Fechar guia" onClick={() => setAberto(false)}>
                <X size={18} />
              </button>
            </div>

            <div className="modal-body">
              <p className="guide-lead">
                O MediFlow lê documentos clínicos (receitas, laudos, guias…), extrai os dados com IA e encaminha cada um para a fila certa.
                <b> É apoio à triagem — não é diagnóstico.</b> Quando há dúvida, uma pessoa decide.
              </p>

              {isMock && (
                <div className="banner">
                  <span>Você está no <b>modo de demonstração</b>: os documentos são fictícios e nada é enviado ao backend.</span>
                </div>
              )}

              <h3>Passo a passo</h3>
              <ol className="guide-steps">
                <li>
                  <b>Processar</b> — escolha o arquivo (PDF, PNG, JPEG ou TXT, até {config.maxUploadMb} MB), informe o <em>canal de origem</em> (de onde o
                  documento veio) e clique em <em>Iniciar processamento</em>. A urgência é definida pelo sistema, não por você.
                </li>
                <li>
                  <b>Resultado da IA</b> — veja o tipo do documento, a prioridade clínica, os campos que merecem atenção e o destino escolhido.
                </li>
                <li>
                  <b>Pendentes de revisão</b> — documentos <em>em auditoria</em> esperam uma pessoa. Os urgentes vêm primeiro.
                </li>
                <li>
                  <b>Revisar</b> — confira cada campo, corrija o que estiver errado, escreva a justificativa e escolha <em>Aprovar</em> ou <em>Rejeitar</em>.
                  Rejeitar e aprovar com correções exigem justificativa. Nada muda na tela até o backend confirmar.
                </li>
                <li>
                  <b>Documentos</b> — histórico completo com busca e filtros. Clique em um documento para ver dados extraídos, validações, destino e
                  histórico de revisão.
                </li>
                <li>
                  <b>Dashboard</b> — visão geral: quantos documentos, pendências e aprovações.
                </li>
              </ol>

              <h3>Prioridade × confiança (são coisas diferentes)</h3>
              <ul className="guide-list">
                <li>
                  <b>Prioridade clínica</b>: <em>rotina</em> ou <em>urgente</em>. Indica se o conteúdo sugere urgência. Uma urgência nunca é rebaixada.
                </li>
                <li>
                  <b>Confiança</b>: o quanto a IA tem certeza do que leu (tipo do documento e cada campo). Confiança baixa pede revisão, mas não torna
                  o documento urgente.
                </li>
              </ul>

              <h3>Status dos documentos</h3>
              <dl className="guide-status">
                {(Object.keys(STATUS_ROTULOS) as StatusProcessamento[]).map((s) => (
                  <div key={s}>
                    <dt>
                      <span className={`badge ${s}`}>{STATUS_ROTULOS[s]}</span>
                    </dt>
                    <dd>{STATUS_AJUDA[s]}</dd>
                  </div>
                ))}
              </dl>

              <h3>Sininho de notificações</h3>
              <p>
                Mostra alertas de urgência registrados, urgentes e prioritários aguardando revisão e falhas de processamento. Clique em um item para abrir
                o documento; ele fica marcado como lido neste navegador. A lista se atualiza sozinha a cada {Math.round(config.refreshIntervalMs / 1000)}{' '}
                segundos. O alerta de urgência é só um registro: <b>não comprova que alguém foi avisado</b>.
              </p>

              <h3>Bom saber</h3>
              <ul className="guide-list">
                <li>
                  O identificador do revisor é informado por você (em <Link to="/configuracoes" onClick={() => setAberto(false)}>Configurações</Link>) e não é
                  verificado.
                </li>
                <li>O arquivo original só pode ser visualizado em documentos enviados por este navegador; nos demais aparecem os trechos citados pela IA.</li>
                <li>No celular, o menu fica na barra inferior e as tabelas rolam para o lado.</li>
              </ul>
            </div>

            <div className="modal-foot">
              <button type="button" className="primary" onClick={() => setAberto(false)}>
                Entendi
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

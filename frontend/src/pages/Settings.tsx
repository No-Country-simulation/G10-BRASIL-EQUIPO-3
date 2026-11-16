import {useEffect, useState} from 'react';
import {Monitor, Moon, Sun} from 'lucide-react';
import {useAuth} from '../context/AuthContext';
import {useSettings} from '../context/SettingsContext';
import {useTheme, type ThemePreference} from '../context/ThemeContext';
import {useToast} from '../context/ToastContext';
import type {Preferencias} from '../lib/preferences';

const themes: {id: ThemePreference; label: string; Icon: typeof Sun}[] = [
  {id: 'light', label: 'Claro', Icon: Sun},
  {id: 'dark', label: 'Escuro', Icon: Moon},
  {id: 'system', label: 'Automático', Icon: Monitor},
];

export default function Settings() {
  const {preferencias, salvar} = useSettings();
  const {preference, setPreference} = useTheme();
  const toast = useToast();
  const {usuario, habilitado, logout} = useAuth();
  const [draft, setDraft] = useState<Preferencias>(preferencias);

  useEffect(() => setDraft(preferencias), [preferencias]);
  const dirty = JSON.stringify(draft) !== JSON.stringify(preferencias);

  const submit = () => {
    salvar({...draft, revisor: draft.revisor.trim()});
    toast('Preferências salvas neste navegador.');
  };

  return (
    <>
      <div className="page-head">
        <h1>Configurações</h1>
        <button className="primary" disabled={!dirty} onClick={submit}>
          Salvar alterações
        </button>
      </div>

      <div className="settings-grid">
        <div className="card">
          <h2>Aparência</h2>
          <div className="theme-options" role="radiogroup" aria-label="Tema">
            {themes.map(({id, label, Icon}) => (
              <button
                key={id}
                role="radio"
                aria-checked={preference === id}
                className={`theme-option ${preference === id ? 'on' : ''}`}
                onClick={() => setPreference(id)}
              >
                <Icon size={18} />
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="card">
          <h2>Exibição da confiança</h2>
          <p className="muted-text">
            Só afeta as cores e os níveis mostrados aqui. O encaminhamento dos documentos usa o limiar configurado no backend (padrão 80%).
          </p>
          <label className="range-label" htmlFor="high">
            Confiança alta a partir de
          </label>
          <div className="range-row">
            <input
              id="high"
              type="range"
              min="60"
              max="100"
              value={draft.limiarAltoPct}
              onChange={(e) => {
                const v = Number(e.target.value);
                setDraft((d) => ({...d, limiarAltoPct: v, limiarPct: Math.min(d.limiarPct, v)}));
              }}
            />
            <b>{draft.limiarAltoPct}%</b>
          </div>
          <label className="range-label" htmlFor="low">
            Confiança baixa abaixo de
          </label>
          <div className="range-row">
            <input
              id="low"
              type="range"
              min="50"
              max={draft.limiarAltoPct}
              value={draft.limiarPct}
              onChange={(e) => setDraft((d) => ({...d, limiarPct: Number(e.target.value)}))}
            />
            <b>{draft.limiarPct}%</b>
          </div>
        </div>

        {usuario ? (
          <div className="card">
            <h2>Conta</h2>
            <p>
              <b>{usuario.nome}</b>
              <br />
              <span className="muted-text">{usuario.email} · {usuario.perfil}</span>
            </p>
            <p className="muted-text">As revisões são registradas com a identidade desta conta.</p>
            {habilitado && <button onClick={logout}>Sair da conta</button>}
          </div>
        ) : (
        <div className="card">
            <h2>Revisor</h2>
            <label className="range-label" htmlFor="revisor-pref">
              Identificador usado nas revisões
            </label>
            <input
              id="revisor-pref"
              value={draft.revisor}
              maxLength={120}
              onChange={(e) => setDraft((d) => ({...d, revisor: e.target.value}))}
              placeholder="Ex.: nome ou matrícula"
            />
            <p className="muted-text">
              É apenas informado e registrado como <code>identidade_verificada = false</code>: o backend não autentica revisores. A rejeição sempre
              exige justificativa (regra do backend).
            </p>
          </div>
        )}
      </div>
    </>
  );
}

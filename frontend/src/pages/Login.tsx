import {useState, type FormEvent} from 'react';
import {Navigate, useLocation, useNavigate} from 'react-router-dom';
import {Eye, EyeOff, Loader2} from 'lucide-react';
import {isMock} from '../config/env';
import {useAuth} from '../context/AuthContext';
import {CREDENCIAIS_DEMO, mensagemLogin} from '../services/auth';

export default function Login() {
  const {habilitado, status, login, aviso} = useAuth();
  const navigate = useNavigate();
  const from = (useLocation().state as {from?: string} | null)?.from || '/processar';

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [ver, setVer] = useState(false);
  const [manter, setManter] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  if (!habilitado || status === 'autenticado') return <Navigate to={from} replace />;

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !senha) return setErro('Informe e-mail e senha.');
    setErro(null);
    setBusy(true);
    try {
      await login(email, senha, manter);
      navigate(from, {replace: true});
    } catch (err) {
      setErro(mensagemLogin(err));
      setBusy(false);
    }
  };

  return (
    <main className="login-page">
      <form className="login-card" onSubmit={submit} noValidate>
        <div className="brand login-brand">
          <span className="brand-mark">✚</span>mediflow
        </div>
        <h1>Entrar</h1>
        <p className="muted-text">Acesse a triagem clínica com a sua conta.</p>

        {(erro || aviso) && (
          <div className={`login-msg ${erro ? 'erro' : ''}`} role="alert">
            {erro ?? aviso}
          </div>
        )}

        <label htmlFor="login-email">E-mail</label>
        <input id="login-email" type="email" autoComplete="username" autoFocus value={email} onChange={(e) => setEmail(e.target.value)} disabled={busy} />

        <label htmlFor="login-senha">Senha</label>
        <div className="senha-row">
          <input
            id="login-senha"
            type={ver ? 'text' : 'password'}
            autoComplete="current-password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            disabled={busy}
          />
          <button type="button" className="icon-btn" aria-label={ver ? 'Ocultar senha' : 'Mostrar senha'} onClick={() => setVer((v) => !v)}>
            {ver ? <EyeOff size={17} /> : <Eye size={17} />}
          </button>
        </div>

        <label className="check-row">
          <input type="checkbox" checked={manter} onChange={(e) => setManter(e.target.checked)} disabled={busy} />
          Manter conectado neste dispositivo
        </label>

        <button className="primary login-submit" type="submit" disabled={busy}>
          {busy ? <Loader2 size={16} className="spin" /> : null}
          {busy ? 'Entrando…' : 'Entrar'}
        </button>

        <p className="muted-text login-foot">Esqueceu a senha? Fale com o administrador do sistema.</p>
        {isMock && (
          <p className="muted-text login-foot">
            Demonstração: <code>{CREDENCIAIS_DEMO.email}</code> / <code>{CREDENCIAIS_DEMO.senha}</code>
          </p>
        )}
      </form>
    </main>
  );
}

import {createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode} from 'react';
import {config} from '../config/env';
import {aoNaoAutorizado, lerToken, limparToken, salvarToken} from '../lib/session';
import {entrar, obterUsuario, type Usuario} from '../services/auth';
import {limparOriginais} from '../services/originais';

type Status = 'carregando' | 'anonimo' | 'autenticado';

interface AuthValue {
  /** `false` quando o login está desligado (VITE_AUTH_ENABLED=false). */
  habilitado: boolean;
  status: Status;
  usuario: Usuario | null;
  /** Mensagem exibida na tela de login (ex.: sessão expirada). */
  aviso: string | null;
  login: (email: string, senha: string, manter: boolean) => Promise<void>;
  logout: () => void;
}

const Ctx = createContext<AuthValue | null>(null);

export function AuthProvider({children}: {children: ReactNode}) {
  const habilitado = config.authEnabled;
  const [status, setStatus] = useState<Status>(habilitado ? (lerToken() ? 'carregando' : 'anonimo') : 'autenticado');
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [aviso, setAviso] = useState<string | null>(null);

  const sair = useCallback((msg: string | null) => {
    limparToken();
    limparOriginais(); // documentos clínicos em memória não sobrevivem ao logout
    setUsuario(null);
    setAviso(msg);
    setStatus('anonimo');
  }, []);

  // Restaura a sessão: valida o token salvo no backend.
  useEffect(() => {
    if (!habilitado || status !== 'carregando') return;
    let ativo = true;
    obterUsuario()
      .then((u) => {
        if (!ativo) return;
        setUsuario(u);
        setStatus('autenticado');
      })
      .catch(() => ativo && sair(null));
    return () => {
      ativo = false;
    };
  }, [habilitado, status, sair]);

  // 401 em qualquer chamada = sessão expirada.
  useEffect(() => {
    if (!habilitado) return;
    return aoNaoAutorizado(() => sair('Sua sessão expirou. Entre novamente.'));
  }, [habilitado, sair]);

  const login = useCallback(async (email: string, senha: string, manter: boolean) => {
    const sessao = await entrar(email, senha);
    salvarToken(sessao.access_token, manter);
    setUsuario(sessao.usuario);
    setAviso(null);
    setStatus('autenticado');
  }, []);

  const logout = useCallback(() => sair(null), [sair]);

  const value = useMemo(() => ({habilitado, status, usuario, aviso, login, logout}), [habilitado, status, usuario, aviso, login, logout]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useAuth() {
  const v = useContext(Ctx);
  if (!v) throw new Error('useAuth fora do AuthProvider');
  return v;
}

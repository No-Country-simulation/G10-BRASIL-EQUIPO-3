/**
 * Autenticação.
 *
 * ATENÇÃO: o backend atual do Equipo 03 NÃO possui autenticação. As rotas abaixo são uma PROPOSTA
 * de contrato (ver docs/INTEGRACAO_BACKEND.md) e ficam centralizadas em `ROTAS_AUTH`:
 *   POST /auth/login  {email, senha} → {access_token, token_type, usuario}
 *   GET  /auth/me                    → usuario        (Authorization: Bearer <token>)
 * Enquanto não existirem, use `VITE_AUTH_ENABLED=false`. Em modo demonstração (VITE_USE_MOCK=true)
 * o login é simulado no navegador.
 */
import {isMock} from '../config/env';
import {ApiError} from './errors';
import {request} from './httpApi';

export interface Usuario {
  id: string;
  nome: string;
  email: string;
  perfil: string;
}
export interface SessaoDTO {
  access_token: string;
  token_type?: string;
  usuario: Usuario;
}

export const ROTAS_AUTH = {login: '/auth/login', me: '/auth/me'} as const;

/** Credenciais do modo demonstração (somente com VITE_USE_MOCK=true). */
export const CREDENCIAIS_DEMO = {email: 'revisor@mediflow.demo', senha: 'mediflow123'} as const;

const usuarioDemo: Usuario = {id: 'demo-1', nome: 'Revisor Demo', email: CREDENCIAIS_DEMO.email, perfil: 'revisor'};

export async function entrar(email: string, senha: string): Promise<SessaoDTO> {
  if (isMock) {
    await new Promise((r) => setTimeout(r, 300));
    if (email.trim().toLowerCase() !== CREDENCIAIS_DEMO.email || senha !== CREDENCIAIS_DEMO.senha) {
      throw new ApiError(401, 'E-mail ou senha incorretos.');
    }
    return {access_token: 'demo-token', token_type: 'bearer', usuario: usuarioDemo};
  }
  return request<SessaoDTO>(ROTAS_AUTH.login, {method: 'POST', body: JSON.stringify({email: email.trim(), senha})});
}

export async function obterUsuario(): Promise<Usuario> {
  if (isMock) return usuarioDemo;
  return request<Usuario>(ROTAS_AUTH.me);
}

/** Mensagem amigável para falhas de login. */
export function mensagemLogin(e: unknown): string {
  if (e instanceof ApiError) {
    if (e.status === 401 || e.status === 400) return 'E-mail ou senha incorretos.';
    if (e.status === 403) return 'Este usuário não tem permissão de acesso.';
    if (e.status === 404 || e.status === 405)
      return 'O backend ainda não tem a rota de login (/auth/login). Defina VITE_AUTH_ENABLED=false ou peça à equipe para implementá-la.';
    if (e.status === 422) return 'Informe um e-mail válido e a senha.';
    if (e.status === 429) return 'Muitas tentativas. Aguarde um pouco e tente de novo.';
  }
  return e instanceof Error ? e.message : 'Não foi possível entrar.';
}

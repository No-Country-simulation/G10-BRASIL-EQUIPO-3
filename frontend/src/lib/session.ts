/**
 * Token de sessão. `sessionStorage` por padrão (fecha com a aba); `localStorage` se o usuário
 * marcar "Manter conectado". Leituras/escritas protegidas: o armazenamento pode estar bloqueado.
 */
const CHAVE = 'mediflow:token';
const EVENTO_401 = 'mediflow:nao-autorizado';

export function lerToken(): string | null {
  try {
    return sessionStorage.getItem(CHAVE) ?? localStorage.getItem(CHAVE);
  } catch {
    return null;
  }
}

export function salvarToken(token: string, manter: boolean) {
  limparToken();
  try {
    (manter ? localStorage : sessionStorage).setItem(CHAVE, token);
  } catch {
    /* sem armazenamento: a sessão dura só até recarregar */
  }
}

export function limparToken() {
  try {
    sessionStorage.removeItem(CHAVE);
    localStorage.removeItem(CHAVE);
  } catch {
    /* ignore */
  }
}

/** O cliente HTTP avisa o AuthContext quando a API responde 401 (sessão expirada/inválida). */
export function notificarNaoAutorizado() {
  window.dispatchEvent(new Event(EVENTO_401));
}
export function aoNaoAutorizado(fn: () => void) {
  window.addEventListener(EVENTO_401, fn);
  return () => window.removeEventListener(EVENTO_401, fn);
}

import {defineConfig, loadEnv} from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Em desenvolvimento, `/api` é encaminhado ao backend (proxy) para evitar CORS.
 */
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  const alvo = env.VITE_PROXY_TARGET || 'http://localhost:8000';
  return {
    plugins: [react()],
    server: {proxy: {'/api': {target: alvo, changeOrigin: true}}},
  };
});

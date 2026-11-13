/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_USE_MOCK?: string;
  readonly VITE_API_URL?: string;
  readonly VITE_PROXY_TARGET?: string;
  readonly VITE_MAX_UPLOAD_MB?: string;
  readonly VITE_POLL_INTERVAL_MS?: string;
}

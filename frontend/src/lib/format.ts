const valid = (iso?: string) => !!iso && !Number.isNaN(new Date(iso).getTime());

/** "há 12 min", "há 3 h", "ontem"... */
export function formatRelative(iso?: string): string {
  if (!valid(iso)) return '—';
  const minutes = Math.round((Date.now() - new Date(iso!).getTime()) / 60000);
  if (minutes < 1) return 'agora';
  if (minutes < 60) return `há ${minutes} min`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `há ${hours} h`;
  const days = Math.floor(hours / 24);
  return days === 1 ? 'ontem' : `há ${days} dias`;
}

/** Duração desde uma data, sem o "há": "12 min", "2 h". */
export function formatElapsed(iso?: string): string {
  return formatRelative(iso).replace(/^há /, '');
}

export function formatDateTime(iso?: string): string {
  if (!valid(iso)) return '—';
  return new Date(iso!).toLocaleString('pt-BR', {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function formatFileSize(bytes: number): string {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

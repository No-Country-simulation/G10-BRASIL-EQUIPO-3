import type {ReactNode} from 'react';
import {CircleAlert, Inbox, LoaderCircle} from 'lucide-react';

export function LoadingState({label = 'Carregando...'}: {label?: string}) {
  return (
    <div className="state" role="status">
      <LoaderCircle className="spin" size={22} />
      <span>{label}</span>
    </div>
  );
}

export function ErrorState({message, onRetry}: {message?: string; onRetry?: () => void}) {
  return (
    <div className="state error-state" role="alert">
      <CircleAlert size={24} />
      <strong>{message || 'Não foi possível carregar os dados.'}</strong>
      {onRetry && (
        <button className="secondary" onClick={onRetry}>
          Tentar novamente
        </button>
      )}
    </div>
  );
}

export function EmptyState({title, children}: {title: string; children?: ReactNode}) {
  return (
    <div className="state">
      <Inbox size={26} />
      <strong>{title}</strong>
      {children}
    </div>
  );
}

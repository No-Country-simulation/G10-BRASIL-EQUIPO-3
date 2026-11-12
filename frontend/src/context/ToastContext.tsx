import {createContext, useCallback, useContext, useMemo, useRef, useState, type ReactNode} from 'react';
import {CircleAlert, CircleCheck} from 'lucide-react';

type Tone = 'success' | 'error';
interface Toast {
  id: number;
  message: string;
  tone: Tone;
}

const ToastContext = createContext<((message: string, tone?: Tone) => void) | null>(null);

export function ToastProvider({children}: {children: ReactNode}) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const nextId = useRef(0);

  const push = useCallback((message: string, tone: Tone = 'success') => {
    const id = ++nextId.current;
    setToasts((list) => [...list, {id, message, tone}]);
    setTimeout(() => setToasts((list) => list.filter((t) => t.id !== id)), 4200);
  }, []);

  const value = useMemo(() => push, [push]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="toasts" role="status" aria-live="polite">
        {toasts.map((t) => (
          <div key={t.id} className={`toast ${t.tone}`}>
            {t.tone === 'success' ? <CircleCheck size={18} /> : <CircleAlert size={18} />}
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast deve ser usado dentro de ToastProvider');
  return ctx;
}

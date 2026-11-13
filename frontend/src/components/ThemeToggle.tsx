import {Moon, Sun} from 'lucide-react';
import {useTheme} from '../context/ThemeContext';

export function ThemeToggle() {
  const {resolved, toggle} = useTheme();
  const next = resolved === 'dark' ? 'claro' : 'escuro';
  return (
    <button className="icon-button" onClick={toggle} aria-label={`Mudar para modo ${next}`} title={`Modo ${next}`}>
      {resolved === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

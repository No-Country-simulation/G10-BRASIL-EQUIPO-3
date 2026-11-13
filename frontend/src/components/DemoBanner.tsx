import {FlaskConical} from 'lucide-react';
import {isMock} from '../config/env';

/** Aviso permanente enquanto a aplicação usa dados simulados em vez da API real. */
export function DemoBanner() {
  if (!isMock) return null;
  return (
    <div className="demo-banner" role="status">
      <FlaskConical size={16} aria-hidden />
      <span>
        <b>Modo de demonstração.</b> Os documentos e resultados abaixo são <b>dados sintéticos simulados</b> no navegador — nenhuma
        informação vem do backend real.
      </span>
    </div>
  );
}

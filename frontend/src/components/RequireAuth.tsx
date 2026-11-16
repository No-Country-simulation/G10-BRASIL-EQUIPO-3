import {Navigate, Outlet, useLocation} from 'react-router-dom';
import {useAuth} from '../context/AuthContext';
import {DocumentsProvider} from '../context/DocumentsContext';
import {LoadingState} from './States';

/**
 * Protege as rotas. Os documentos só começam a ser buscados depois do login
 * (DocumentsProvider fica aqui dentro).
 */
export function RequireAuth() {
  const {status} = useAuth();
  const location = useLocation();
  if (status === 'carregando') return <LoadingState />;
  if (status === 'anonimo') return <Navigate to="/login" replace state={{from: location.pathname + location.search}} />;
  return (
    <DocumentsProvider>
      <Outlet />
    </DocumentsProvider>
  );
}

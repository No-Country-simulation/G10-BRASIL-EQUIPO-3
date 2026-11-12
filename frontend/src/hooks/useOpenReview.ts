import {useLocation, useNavigate} from 'react-router-dom';

/** Abre a tela de revisão. Não altera nada no backend: só navega, guardando a origem. */
export function useOpenReview() {
  const navigate = useNavigate();
  const {pathname, search} = useLocation();
  return (id: string) => navigate(`/revisao/${encodeURIComponent(id)}`, {state: {from: pathname + search}});
}

/**
 * Contrato da camada de dados.
 *
 * `MediflowApi` descreve as operações que o frontend precisa. O cliente HTTP real
 * (`httpApi.ts`) e o simulador de demonstração (`mocks/mockApi.ts`) implementam a MESMA
 * interface e trafegam apenas DTOs (`types/dto.ts`). Conversão para domínio/apresentação
 * acontece acima desta camada.
 *
 * Backend: FastAPI em `backend/app/api/documents.py` (rotas em `httpApi.ts`). O processamento é
 * síncrono; o mock imita o mesmo contrato, inclusive os erros 404/409.
 */
import type {CanalOrigemDTO, EntradaTriagemDTO, RequisicaoRevisaoDTO, RespostaTriagemDTO, TipoArquivoDTO} from '../types/dto';

export interface EnvioArquivo {
  arquivo: File;
  tipoArquivo: Exclude<TipoArquivoDTO, 'TXT'>;
  canalOrigem: CanalOrigemDTO;
}

export interface MediflowApi {
  listarDocumentos(): Promise<RespostaTriagemDTO[]>;
  obterDocumento(documentoId: string): Promise<RespostaTriagemDTO>;
  /** PDF / PNG / JPEG: multipart/form-data. */
  enviarArquivo(envio: EnvioArquivo): Promise<RespostaTriagemDTO>;
  /** TXT (texto já extraído): corpo JSON `EntradaTriagem`. */
  enviarTexto(entrada: EntradaTriagemDTO): Promise<RespostaTriagemDTO>;
  /** `RequisicaoRevisao` → `RespostaTriagem` atualizada (versão +1, histórico acrescido). */
  registrarRevisao(documentoId: string, requisicao: RequisicaoRevisaoDTO): Promise<RespostaTriagemDTO>;
}

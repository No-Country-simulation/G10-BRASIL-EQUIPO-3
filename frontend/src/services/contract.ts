/**
 * Contrato da camada de dados.
 *
 * `MediflowApi` descreve as operações que o frontend precisa. O cliente HTTP real
 * (`httpApi.ts`) e o simulador de demonstração (`mocks/mockApi.ts`) implementam a MESMA
 * interface e trafegam apenas DTOs (`types/dto.ts`). Conversão para domínio/apresentação
 * acontece acima desta camada.
 *
 * ATENÇÃO — situação do backend (repositório G10-BRASIL-EQUIPO-3):
 * não existe aplicação FastAPI nem rotas HTTP. Já existem como código Python:
 *   - processar documento  → `TriageService.processar(DocumentoRecebido)`
 *   - registrar revisão    → `review_service.registrar_revisao(resposta, requisicao)`
 * NÃO existem (dependem de persistência/HTTP das Fases 6 e 7): listar, obter por id,
 * armazenamento e a própria camada HTTP. Veja docs/INTEGRACAO_BACKEND.md.
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

/**
 * Serviço de documentos: único ponto que as telas/hooks usam para falar com dados.
 *
 *  API (DTO) → adapters/toDomain → `Documento`
 *
 * Escolhe a fonte de dados pela configuração (`VITE_USE_MOCK`), sem nenhum fallback automático:
 * se a API real falhar, o erro chega à interface; os mocks nunca assumem em silêncio.
 */
import {config} from '../config/env';
import {toDocumento} from '../adapters/toDomain';
import {montarEntradaTexto, tipoArquivoPorNome} from '../adapters/toDto';
import type {MediflowApi} from './contract';
import {httpApi} from './httpApi';
import {gravarMeta, lerMeta} from './localMeta';
import type {CanalOrigemDTO, RequisicaoRevisaoDTO, RespostaTriagemDTO} from '../types/dto';
import type {Documento, MetaLocal} from '../types/domain';

let apiPromise: Promise<MediflowApi> | null = null;

/** Mocks só são carregados (import dinâmico) quando o modo de demonstração está explícito. */
function api(): Promise<MediflowApi> {
  apiPromise ??=
    config.dataSource === 'mock'
      ? import('../mocks/mockApi').then((m) => {
          Object.entries(m.metaDeDemonstracao()).forEach(([id, meta]) => gravarMeta(id, meta));
          return m.mockApi;
        })
      : Promise.resolve(httpApi);
  return apiPromise;
}

const paraDominio = (dto: RespostaTriagemDTO): Documento => toDocumento(dto, lerMeta(dto.documento_id));

export class ArquivoNaoSuportadoError extends Error {}

export const documentos = {
  async listar(): Promise<Documento[]> {
    return (await (await api()).listarDocumentos()).map(paraDominio);
  },

  async obter(id: string): Promise<Documento> {
    return paraDominio(await (await api()).obterDocumento(id));
  },

  /** Envia um arquivo: TXT vai como JSON `EntradaTriagem`; PDF/PNG/JPEG como multipart. */
  async enviar(arquivo: File, canal: CanalOrigemDTO): Promise<Documento> {
    const tipo = tipoArquivoPorNome(arquivo.name, arquivo.type);
    if (!tipo) throw new ArquivoNaoSuportadoError(`${arquivo.name}: formato não suportado`);

    const cliente = await api();
    const dto =
      tipo === 'TXT'
        ? await cliente.enviarTexto(montarEntradaTexto(await arquivo.text(), canal))
        : await cliente.enviarArquivo({arquivo, tipoArquivo: tipo, canalOrigem: canal});

    const meta: MetaLocal = {
      nomeArquivo: arquivo.name,
      recebidoEm: new Date().toISOString(),
      mimeType: arquivo.type || undefined,
      arquivoUrl: URL.createObjectURL(arquivo),
    };
    gravarMeta(dto.documento_id, meta);
    return toDocumento(dto, lerMeta(dto.documento_id));
  },

  /** O resultado só muda na tela depois que o backend devolve a resposta válida. */
  async revisar(id: string, requisicao: RequisicaoRevisaoDTO): Promise<Documento> {
    return paraDominio(await (await api()).registrarRevisao(id, requisicao));
  },
};

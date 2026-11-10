from typing import Annotated

from fastapi import APIRouter, Depends, File, Form, HTTPException, UploadFile
from pydantic import ValidationError
from starlette.concurrency import run_in_threadpool

from app.core.config import carregar_configuracao
from app.schemas.enums import CanalOrigem, TipoArquivo
from app.schemas.input import (
    DocumentoRecebido,
    EntradaTriagem,
    gerar_documento_id,
)
from app.schemas.output import RespostaTriagem
from app.schemas.review import RequisicaoRevisao
from app.services.review_service import registrar_revisao
from app.services.triage_service import processar_documento
from app.storage.base import StorageBackend
from app.storage.dependencies import obter_storage
from app.storage.keys import chave_documento
from app.storage.resultados import (
    listar_resultados_recentes,
    recuperar_resultado_mais_recente,
    salvar_resultado,
)

router = APIRouter(
    prefix="/api/v1/documents",
    tags=["Documentos"],
)


@router.post("/triage", response_model=RespostaTriagem)
def realizar_triagem(
    entrada: EntradaTriagem,
    storage: Annotated[StorageBackend, Depends(obter_storage)],
):
    documento = DocumentoRecebido.de_entrada(entrada)

    try:
        resposta = processar_documento(documento)
    except Exception as erro:
        raise HTTPException(
            status_code=500,
            detail="Erro interno durante o processamento do documento.",
        ) from erro

    try:
        salvar_resultado(storage, resposta)
    except FileExistsError as erro:
        raise HTTPException(
            status_code=409,
            detail="Ja existe um resultado com essa identificacao e versao.",
        ) from erro
    except OSError as erro:
        raise HTTPException(
            status_code=503,
            detail="Servico de armazenamento indisponivel.",
        ) from erro
    except Exception as erro:
        raise HTTPException(
            status_code=500,
            detail="Erro interno ao armazenar o resultado.",
        ) from erro

    return resposta


@router.post("/triage/upload", response_model=RespostaTriagem)
async def realizar_triagem_upload(
    arquivo: Annotated[UploadFile, File()],
    tipo_arquivo: Annotated[TipoArquivo, Form()],
    canal_origem: Annotated[CanalOrigem, Form()],
    storage: Annotated[StorageBackend, Depends(obter_storage)],
    documento_id: Annotated[str | None, Form()] = None,
):
    configuracao = carregar_configuracao()
    limite = configuracao.max_upload_size_bytes

    try:
        conteudo = await arquivo.read(limite + 1)
    finally:
        await arquivo.close()

    if len(conteudo) > limite:
        raise HTTPException(
            status_code=413,
            detail="O arquivo excede o limite permitido.",
        )

    try:
        documento = DocumentoRecebido(
            documento_id=documento_id or gerar_documento_id(),
            tipo_arquivo=tipo_arquivo,
            canal_origem=canal_origem,
            conteudo=conteudo,
            nome_arquivo=arquivo.filename,
        )
    except ValidationError as erro:
        raise HTTPException(
            status_code=422,
            detail="Os dados do documento sao invalidos.",
        ) from erro

    try:
        chave_original = chave_documento(
            documento.documento_id,
            documento.tipo_arquivo.value,
        )

        await run_in_threadpool(
            storage.salvar,
            chave_original,
            conteudo,
        )

    except FileExistsError as erro:
        raise HTTPException(
            status_code=409,
            detail="O documento original ja foi armazenado.",
        ) from erro

    except OSError as erro:
        raise HTTPException(
            status_code=503,
            detail="Servico de armazenamento indisponivel.",
        ) from erro

    except ValueError as erro:
        raise HTTPException(
            status_code=422,
            detail="Tipo de arquivo invalido para armazenamento.",
        ) from erro

    try:
        resposta = await run_in_threadpool(
            processar_documento,
            documento,
            configuracao,
        )
    except Exception as erro:
        raise HTTPException(
            status_code=500,
            detail="Erro interno durante o processamento do documento.",
        ) from erro

    try:
        await run_in_threadpool(
            salvar_resultado,
            storage,
            resposta,
        )
    except FileExistsError as erro:
        raise HTTPException(
            status_code=409,
            detail="Ja existe um resultado com essa identificacao e versao.",
        ) from erro
    except OSError as erro:
        raise HTTPException(
            status_code=503,
            detail="Servico de armazenamento indisponivel.",
        ) from erro
    except Exception as erro:
        raise HTTPException(
            status_code=500,
            detail="Erro interno ao armazenar o resultado.",
        ) from erro

    return resposta


@router.get("", response_model=list[RespostaTriagem])
def listar_documentos(
    storage: Annotated[StorageBackend, Depends(obter_storage)],
):
    try:
        return listar_resultados_recentes(storage)
    except OSError as erro:
        raise HTTPException(
            status_code=503,
            detail="Servico de armazenamento indisponivel.",
        ) from erro
    except Exception as erro:
        raise HTTPException(
            status_code=500,
            detail="Erro interno ao listar documentos.",
        ) from erro


@router.get("/{documento_id}", response_model=RespostaTriagem)
def consultar_documento(
    documento_id: str,
    storage: Annotated[StorageBackend, Depends(obter_storage)],
):
    try:
        resultado = recuperar_resultado_mais_recente(
            storage,
            documento_id,
        )
    except ValueError as erro:
        raise HTTPException(
            status_code=500,
            detail="Erro de consistencia no armazenamento.",
        ) from erro
    except OSError as erro:
        raise HTTPException(
            status_code=503,
            detail="Servico de armazenamento indisponivel.",
        ) from erro

    if resultado is None:
        raise HTTPException(
            status_code=404,
            detail="Documento nao encontrado.",
        )

    return resultado


@router.post(
    "/{documento_id}/review",
    response_model=RespostaTriagem,
)
def revisar_documento(
    documento_id: str,
    requisicao: RequisicaoRevisao,
    storage: Annotated[StorageBackend, Depends(obter_storage)],
):
    try:
        resultado_atual = recuperar_resultado_mais_recente(
            storage,
            documento_id,
        )
    except ValueError as erro:
        raise HTTPException(
            status_code=500,
            detail="Erro de consistencia no armazenamento.",
        ) from erro
    except OSError as erro:
        raise HTTPException(
            status_code=503,
            detail="Servico de armazenamento indisponivel.",
        ) from erro

    if resultado_atual is None:
        raise HTTPException(
            status_code=404,
            detail="Documento nao encontrado.",
        )

    if requisicao.versao_resultado_base != resultado_atual.versao_resultado:
        raise HTTPException(
            status_code=409,
            detail="Versao desatualizada. Consulte o documento novamente.",
        )

    try:
        resultado_revisado = registrar_revisao(
            resultado_atual,
            requisicao,
        )
    except ValueError as erro:
        raise HTTPException(
            status_code=409,
            detail="Revisao nao permitida para o estado ou dados atuais.",
        ) from erro

    try:
        salvar_resultado(storage, resultado_revisado)
    except FileExistsError as erro:
        raise HTTPException(
            status_code=409,
            detail="Ja existe um resultado com essa versao.",
        ) from erro
    except OSError as erro:
        raise HTTPException(
            status_code=503,
            detail="Servico de armazenamento indisponivel.",
        ) from erro
    except Exception as erro:
        raise HTTPException(
            status_code=500,
            detail="Erro interno ao armazenar a revisao.",
        ) from erro

    return resultado_revisado

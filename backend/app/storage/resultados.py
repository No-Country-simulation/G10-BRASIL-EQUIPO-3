from app.schemas.output import RespostaTriagem
from app.storage.base import StorageBackend
from app.storage.keys import chave_resultado


def salvar_resultado(
    storage: StorageBackend,
    resposta: RespostaTriagem,
) -> str:
    """Salva uma versao do resultado de triagem."""

    chave = chave_resultado(
        documento_id=resposta.documento_id,
        status=resposta.status,
        versao=resposta.versao_resultado,
    )

    conteudo = resposta.model_dump_json(exclude={"armazenamento_oci"}).encode("utf-8")

    storage.salvar(chave, conteudo)

    return chave


def recuperar_resultado(
    storage: StorageBackend,
    chave: str,
) -> RespostaTriagem | None:
    """Recupera e valida um resultado armazenado."""

    conteudo = storage.ler(chave)

    if conteudo is None:
        return None

    return RespostaTriagem.model_validate_json(conteudo)

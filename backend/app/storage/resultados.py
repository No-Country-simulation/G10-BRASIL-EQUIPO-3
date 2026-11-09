import re

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


def recuperar_resultado_mais_recente(
    storage: StorageBackend,
    documento_id: str,
) -> RespostaTriagem | None:
    """Recupera a versao mais recente de um documento."""

    if not re.fullmatch(r"[A-Za-z0-9_-]+", documento_id):
        raise ValueError("Identificador de documento invalido.")

    padrao = re.compile(
        r"^(?:recebidos|processados|auditoria_humana|"
        r"rejeitados|falhas_processamento)/"
        r"([^/]+)/resultado_v([0-9]{3,}).json$".replace(".json", r"\.json")
    )

    versoes = []

    for chave in storage.listar():
        correspondencia = padrao.fullmatch(chave)

        if correspondencia is None:
            continue

        id_encontrado, numero_versao = correspondencia.groups()

        if id_encontrado == documento_id:
            versoes.append((int(numero_versao), chave))

    if not versoes:
        return None

    maior_versao = max(versao for versao, _ in versoes)

    candidatas = [chave for versao, chave in versoes if versao == maior_versao]

    if len(candidatas) != 1:
        raise ValueError("Versao duplicada no armazenamento.")

    resultado = recuperar_resultado(storage, candidatas[0])

    if resultado is None:
        raise ValueError("Resultado desapareceu do armazenamento.")

    if resultado.documento_id != documento_id or resultado.versao_resultado != maior_versao:
        raise ValueError("Dados armazenados inconsistentes.")

    if (
        chave_resultado(
            resultado.documento_id,
            resultado.status,
            resultado.versao_resultado,
        )
        != candidatas[0]
    ):
        raise ValueError("Chave e resultado armazenado inconsistentes.")

    return resultado


def listar_resultados_recentes(
    storage: StorageBackend,
) -> list[RespostaTriagem]:
    """Lista apenas a versao mais recente de cada documento."""

    ids_documentos: set[str] = set()

    padrao = re.compile(
        r"^(?:recebidos|processados|auditoria_humana|"
        r"rejeitados|falhas_processamento)/"
        r"([A-Za-z0-9_-]+)/resultado_v[0-9]{3,}\.json$"
    )

    for chave in storage.listar():
        correspondencia = padrao.fullmatch(chave)

        if correspondencia:
            ids_documentos.add(correspondencia.group(1))

    resultados = []

    for documento_id in sorted(ids_documentos):
        resultado = recuperar_resultado_mais_recente(
            storage,
            documento_id,
        )

        if resultado is not None:
            resultados.append(resultado)

    return resultados

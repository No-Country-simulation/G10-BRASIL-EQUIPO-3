from app.schemas.enums import StatusProcessamento
from app.schemas.input import DocumentoId


def chave_documento(
    documento_id: DocumentoId,
    extensao: str,
) -> str:
    extensao = extensao.lower().lstrip(".")

    if extensao not in {"pdf", "png", "jpeg", "jpg", "txt"}:
        raise ValueError("Extensao de arquivo nao suportada.")

    return f"recebidos/{documento_id}/original.{extensao}"


def chave_resultado(
    documento_id: DocumentoId,
    status: StatusProcessamento,
    versao: int,
) -> str:
    if versao < 1:
        raise ValueError("A versao deve ser maior que zero.")

    prefixos = {
        StatusProcessamento.RECEBIDO: "recebidos",
        StatusProcessamento.PROCESSANDO: "recebidos",
        StatusProcessamento.PROCESSADO: "processados",
        StatusProcessamento.EM_AUDITORIA: "auditoria_humana",
        StatusProcessamento.APROVADO_AUDITORIA: "processados",
        StatusProcessamento.REJEITADO: "rejeitados",
        StatusProcessamento.ERRO: "falhas_processamento",
    }

    prefixo = prefixos[status]

    return f"{prefixo}/{documento_id}/resultado_v{versao:03d}.json"


from enum import Enum
from pydantic import BaseModel, Field


class TipoArquivo(str, Enum):
    TXT = "TXT"
    PDF = "PDF"
    PNG = "PNG"
    JPEG = "JPEG"


class CanalOrigem(str, Enum):
    RECEPCAO = "Recepcao"
    PRONTO_SOCORRO = "Pronto_Socorro"
    AMBULATORIO = "Ambulatorio"


class DocumentoTextoEntrada(BaseModel):
    documento_id: str = Field(min_length=1)
    tipo_arquivo: TipoArquivo
    documento_texto: str = Field(min_length=1)
    canal_origem: CanalOrigem


class DocumentoResposta(BaseModel):
    documento_id: str
    status: str
    tipo_arquivo: TipoArquivo
    canal_origem: CanalOrigem
    mensagem: str
    texto_extraido: str

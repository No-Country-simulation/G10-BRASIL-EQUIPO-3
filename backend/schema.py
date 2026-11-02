
from enum import Enum
from pydantic import BaseModel, Field, model_validator


# 1. TIPOS DE ARQUIVO
class TipoArquivo(str, Enum):
    PDF = "PDF"
    PNG = "PNG"
    JPEG = "JPEG"
    TXT = "TXT"


# 2. ORIGEM DO DOCUMENTO
# Valores provisórios, sujeitos à aprovação da equipe.
class CanalOrigem(str, Enum):
    PRONTO_SOCORRO = "PRONTO_SOCORRO"
    AMBULATORIO = "AMBULATORIO"
    INTERNACAO = "INTERNACAO"
    LABORATORIO = "LABORATORIO"
    OPERADORA = "OPERADORA"
    OUTRO = "OUTRO"


# 3. CLASSIFICAÇÃO DO DOCUMENTO
class TipoDocumento(str, Enum):
    RECEITUARIO = "Receituario Medico"
    LAUDO = "Laudo de Exame"
    GUIA = "Guia de Solicitacao de Procedimento"
    RELATORIO = "Relatorio de Alta/Internacao"
    ATESTADO = "Atestado Medico"
    INDETERMINADO = "Indeterminado"


# 4. PRIORIDADE
class NivelPrioridade(str, Enum):
    ROTINA = "Rotina"
    URGENTE = "Urgente"


# 5. STATUS DO PROCESSAMENTO
class StatusDocumento(str, Enum):
    RECEBIDO = "recebido"
    PROCESSANDO = "processando"
    PROCESSADO = "processado"
    EM_AUDITORIA = "em_auditoria"
    APROVADO_AUDITORIA = "aprovado_auditoria"
    REJEITADO = "rejeitado"
    ERRO = "erro"


# 6. DESTINO DO DOCUMENTO
class Destino(str, Enum):
    REVISAO_PRIORITARIA = "Fila_Revisao_Humana_Prioritaria"
    REVISAO_HUMANA = "Fila_Revisao_Humana"
    EMERGENCIA = "Fila_Emergencia_Medica"
    AUDITORIA = "Auditoria_Autorizacoes"
    FARMACIA = "Farmacia_Hospitalar"
    PRONTUARIO = "Prontuario_Eletronico"


# 7. ENTRADA DA API
class DocumentoEntrada(BaseModel):
    documento_id: str = Field(min_length=1)
    tipo_arquivo: TipoArquivo
    documento_texto: str | None = None
    documento_base64: str | None = None
    canal_origem: CanalOrigem

    @model_validator(mode="after")
    def validar_conteudo(self):
        texto = (self.documento_texto or "").strip()
        base64 = (self.documento_base64 or "").strip()

        if not texto and not base64:
            raise ValueError(
                "Informe documento_texto ou documento_base64."
            )

        return self


# 8. RESPOSTA INICIAL DA API
class DocumentoRecebido(BaseModel):
    documento_id: str
    status: StatusDocumento
    tipo_arquivo: TipoArquivo
    canal_origem: CanalOrigem
    mensagem: str

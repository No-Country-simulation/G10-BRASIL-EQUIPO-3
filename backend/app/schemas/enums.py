"""Enums canônicos do MediFlow.

Os valores (strings) são os identificadores internos estáveis, compartilhados com o frontend
(RNF-10). Os rótulos de exibição ficam separados e podem mudar sem afetar os contratos.
"""

from __future__ import annotations

from enum import StrEnum
from types import MappingProxyType
from typing import Final


class TipoArquivo(StrEnum):
    PDF = "PDF"
    PNG = "PNG"
    JPEG = "JPEG"
    TXT = "TXT"


class CanalOrigem(StrEnum):
    """Canal de origem do documento.

    A lista é um rascunho aprovado na Fase 0 e deve ser confirmada pela equipe.
    """

    PRONTO_SOCORRO = "PRONTO_SOCORRO"
    AMBULATORIO = "AMBULATORIO"
    INTERNACAO = "INTERNACAO"
    LABORATORIO = "LABORATORIO"
    OPERADORA = "OPERADORA"
    OUTRO = "OUTRO"


# Único alias aceito na ENTRADA, para o exemplo oficial do PDF do hackathon ("Pronto_Socorro").
# Não é uma normalização genérica: qualquer outra variação continua sendo rejeitada.
CANAL_ORIGEM_ALIASES: Final = MappingProxyType({"Pronto_Socorro": CanalOrigem.PRONTO_SOCORRO})


class TipoDocumento(StrEnum):
    RECEITA_MEDICA = "receita_medica"
    LAUDO_EXAME = "laudo_exame"
    GUIA_SOLICITACAO_PROCEDIMENTO = "guia_solicitacao_procedimento"
    RELATORIO_ALTA_INTERNACAO = "relatorio_alta_internacao"
    ATESTADO_MEDICO = "atestado_medico"
    OUTRO = "outro"
    INDETERMINADO = "indeterminado"

    @property
    def rotulo(self) -> str:
        return _ROTULOS_TIPO_DOCUMENTO[self]


_ROTULOS_TIPO_DOCUMENTO: Final = MappingProxyType(
    {
        TipoDocumento.RECEITA_MEDICA: "Receita médica",
        TipoDocumento.LAUDO_EXAME: "Laudo de exame laboratorial ou de imagem",
        TipoDocumento.GUIA_SOLICITACAO_PROCEDIMENTO: "Guia de solicitação de procedimento",
        TipoDocumento.RELATORIO_ALTA_INTERNACAO: "Relatório de alta ou internação",
        TipoDocumento.ATESTADO_MEDICO: "Atestado médico",
        TipoDocumento.OUTRO: "Outro",
        TipoDocumento.INDETERMINADO: "Indeterminado",
    }
)


class Prioridade(StrEnum):
    """Sinalização clínica de possível urgência (não é diagnóstico)."""

    ROTINA = "rotina"
    URGENTE = "urgente"


class StatusProcessamento(StrEnum):
    RECEBIDO = "recebido"
    PROCESSANDO = "processando"
    PROCESSADO = "processado"
    EM_AUDITORIA = "em_auditoria"
    APROVADO_AUDITORIA = "aprovado_auditoria"
    REJEITADO = "rejeitado"
    ERRO = "erro"


# Estados em que o pipeline concluiu uma decisão sobre o conteúdo clínico do documento.
STATUS_COM_DECISAO: Final = frozenset(
    {
        StatusProcessamento.PROCESSADO,
        StatusProcessamento.EM_AUDITORIA,
        StatusProcessamento.APROVADO_AUDITORIA,
        StatusProcessamento.REJEITADO,
    }
)


class Destino(StrEnum):
    FILA_REVISAO_HUMANA_PRIORITARIA = "FILA_REVISAO_HUMANA_PRIORITARIA"
    FILA_REVISAO_HUMANA = "FILA_REVISAO_HUMANA"
    FILA_EMERGENCIA_MEDICA = "FILA_EMERGENCIA_MEDICA"
    AUDITORIA_AUTORIZACOES = "AUDITORIA_AUTORIZACOES"
    FARMACIA_HOSPITALAR = "FARMACIA_HOSPITALAR"
    PRONTUARIO_ELETRONICO = "PRONTUARIO_ELETRONICO"

    @property
    def rotulo(self) -> str:
        return _ROTULOS_DESTINO[self]


_ROTULOS_DESTINO: Final = MappingProxyType(
    {
        Destino.FILA_REVISAO_HUMANA_PRIORITARIA: "Fila_Revisao_Humana_Prioritaria",
        Destino.FILA_REVISAO_HUMANA: "Fila_Revisao_Humana",
        Destino.FILA_EMERGENCIA_MEDICA: "Fila_Emergencia_Medica",
        Destino.AUDITORIA_AUTORIZACOES: "Auditoria_Autorizacoes",
        Destino.FARMACIA_HOSPITALAR: "Farmacia_Hospitalar",
        Destino.PRONTUARIO_ELETRONICO: "Prontuario_Eletronico",
    }
)

# Filas que dependem de uma pessoa para seguir adiante.
DESTINOS_FILA_REVISAO: Final = frozenset(
    {Destino.FILA_REVISAO_HUMANA, Destino.FILA_REVISAO_HUMANA_PRIORITARIA}
)
# Únicos destinos permitidos para um documento sinalizado como urgente (nunca se rebaixa).
DESTINOS_URGENCIA: Final = frozenset(
    {Destino.FILA_REVISAO_HUMANA_PRIORITARIA, Destino.FILA_EMERGENCIA_MEDICA}
)
# Destinos operacionais alcançados por roteamento automático pela categoria.
DESTINOS_POR_CATEGORIA: Final = frozenset(
    {Destino.AUDITORIA_AUTORIZACOES, Destino.FARMACIA_HOSPITALAR, Destino.PRONTUARIO_ELETRONICO}
)


class StatusRevisao(StrEnum):
    """Situação da revisão humana de uma decisão de roteamento."""

    NAO_NECESSARIA = "nao_necessaria"
    PENDENTE = "pendente"
    APROVADA = "aprovada"
    REJEITADA = "rejeitada"


class MotivoRoteamento(StrEnum):
    """Código estável do motivo principal da decisão (o texto livre fica em `motivo`)."""

    URGENCIA_CONFIAVEL = "urgencia_confiavel"
    URGENCIA_DADO_CRITICO_INSUFICIENTE = "urgencia_dado_critico_insuficiente"
    CONTEUDO_ILEGIVEL = "conteudo_ilegivel"
    CONTEUDO_ILEGIVEL_PRONTO_SOCORRO = "conteudo_ilegivel_pronto_socorro"
    MEDICAMENTO_ALTO_RISCO = "medicamento_alto_risco"
    BAIXA_CONFIANCA_CAMPO_OBRIGATORIO = "baixa_confianca_campo_obrigatorio"
    CAMPO_OBRIGATORIO_AUSENTE = "campo_obrigatorio_ausente"
    CATEGORIA_SEM_ROTEAMENTO_AUTOMATICO = "categoria_sem_roteamento_automatico"
    CRITERIOS_ATENDIDOS = "criterios_atendidos"
    APROVACAO_HUMANA = "aprovacao_humana"
    REJEICAO_HUMANA = "rejeicao_humana"


class CanalNotificacao(StrEnum):
    ALERTA_PLANTAO_MEDICO = "Alerta_Plantao_Medico"


class SituacaoCampo(StrEnum):
    PRESENTE = "presente"
    AUSENTE = "ausente"
    ILEGIVEL = "ilegivel"


class TipoExame(StrEnum):
    SOLICITADO = "solicitado"
    REALIZADO = "realizado"


class OrigemSinal(StrEnum):
    LLM = "llm"
    REGRA = "regra"


class CodigoValidacao(StrEnum):
    CAMPO_AUSENTE = "campo_ausente"
    CAMPO_ILEGIVEL = "campo_ilegivel"
    CONTEUDO_ILEGIVEL = "conteudo_ilegivel"
    FORMATO_INVALIDO = "formato_invalido"
    CONTRADICAO = "contradicao"
    BAIXA_CONFIANCA = "baixa_confianca"
    CLASSIFICACAO_INCERTA = "classificacao_incerta"
    POSSIVEL_INCONSISTENCIA_CLINICA = "possivel_inconsistencia_clinica"
    MEDICAMENTO_ALTO_RISCO = "medicamento_alto_risco"


class GravidadeValidacao(StrEnum):
    BAIXA = "baixa"
    MEDIA = "media"
    ALTA = "alta"


class DecisaoRevisao(StrEnum):
    APROVAR = "aprovar"
    REJEITAR = "rejeitar"


class ModoArmazenamento(StrEnum):
    MOCK = "mock"
    OCI_REAL = "oci_real"


class StatusBackup(StrEnum):
    SUCESSO = "sucesso"
    FALHA = "falha"
    NAO_REALIZADO = "nao_realizado"


class CodigoErro(StrEnum):
    ARQUIVO_INVALIDO = "arquivo_invalido"
    FORMATO_NAO_SUPORTADO = "formato_nao_suportado"
    ARQUIVO_CORROMPIDO = "arquivo_corrompido"
    ARQUIVO_MUITO_GRANDE = "arquivo_muito_grande"
    LIMITE_PAGINAS_EXCEDIDO = "limite_paginas_excedido"
    PROVEDOR_INDISPONIVEL = "provedor_indisponivel"
    PROVEDOR_TIMEOUT = "provedor_timeout"
    RESPOSTA_INVALIDA_PROVEDOR = "resposta_invalida_provedor"
    FALHA_ARMAZENAMENTO = "falha_armazenamento"
    ERRO_INTERNO = "erro_interno"

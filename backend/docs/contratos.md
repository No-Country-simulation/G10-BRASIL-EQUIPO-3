# Contratos de dados (Fase 1)

Fonte de verdade: `app/schemas/`. Os valores abaixo são os identificadores internos estáveis;
rótulos de exibição (`Destino.rotulo`, `TipoDocumento.rotulo`) são separados e podem mudar.

## Enums

| Enum | Valores |
|---|---|
| `TipoArquivo` | `PDF`, `PNG`, `JPEG`, `TXT` |
| `CanalOrigem` | `PRONTO_SOCORRO`, `AMBULATORIO`, `INTERNACAO`, `LABORATORIO`, `OPERADORA`, `OUTRO` (rascunho: confirmar com a equipe). A entrada também aceita o alias `Pronto_Socorro` (exemplo do PDF do hackathon); qualquer outra variação é rejeitada |
| `TipoDocumento` | `receita_medica`, `laudo_exame`, `guia_solicitacao_procedimento`, `relatorio_alta_internacao`, `atestado_medico`, `outro`, `indeterminado` |
| `Prioridade` | `rotina`, `urgente` |
| `StatusProcessamento` | `recebido`, `processando`, `processado`, `em_auditoria`, `aprovado_auditoria`, `rejeitado`, `erro` |
| `Destino` | `FILA_REVISAO_HUMANA_PRIORITARIA`, `FILA_REVISAO_HUMANA`, `FILA_EMERGENCIA_MEDICA`, `AUDITORIA_AUTORIZACOES`, `FARMACIA_HOSPITALAR`, `PRONTUARIO_ELETRONICO` |
| `StatusRevisao` | `nao_necessaria`, `pendente`, `aprovada`, `rejeitada` |
| `ModoArmazenamento` | `mock`, `oci_real` |

## Modelos

`EntradaTriagem` (JSON) · `DocumentoRecebido` (interno) · `ClassificacaoDocumento` · `DadosExtraidos`
· `AchadoValidacao` · `DecisaoRoteamento` · `NotificacaoAlerta` · `RequisicaoRevisao` ·
`RegistroRevisao` · `ArmazenamentoOCI` · `ErroProcessamento` · `OrigemAnalise` · `RespostaTriagem`.

Cada campo extraído é `{valor, confianca, evidencia, situacao, revisado_por_humano}`. Campos
ausentes/ilegíveis têm `valor = null`. `scores_por_campo` da resposta é **derivado** desses campos.
CID-10 documentado (`cid10_documentado`) e sugerido pela IA (`cid10_sugerido`) são campos separados.

## Invariantes garantidas pelos contratos

- Urgência nunca é rebaixada: `urgente = true` só vai para `FILA_REVISAO_HUMANA_PRIORITARIA` ou
  `FILA_EMERGENCIA_MEDICA`. A fila prioritária sem urgência só existe para conteúdo ilegível vindo
  do Pronto-Socorro.
- `FILA_EMERGENCIA_MEDICA` exige urgência e o evento de alerta; alerta só existe para urgentes.
- `requer_auditoria_humana` é verdadeiro **somente** com `status_revisao = pendente`.
- `erro` não carrega classificação, dados, validações nem destino.
- Status de sucesso nunca acompanha `armazenamento_oci.persistido = false`. `persistido = true`
  exige `status_backup = sucesso` e bucket, caminho e referência do resultado.
- `aprovado_auditoria` / `rejeitado` exigem histórico de revisão coerente e versão do resultado igual
  à versão revisada. Rejeição exige justificativa.
- Resultados do provedor `mock` são sempre marcados `dados_de_teste = true`.

## Política por categoria (padrão da Fase 0)

Ver `app/rules/policy.py`. Campos obrigatórios por categoria e destino automático
(`outro`/`indeterminado` nunca são roteados automaticamente). A tabela de campos obrigatórios é
uma proposta aprovada pela equipe e precisa de validação clínica.

## Pendências assumidas para as próximas fases

- Formato (CRM, UF, CID-10), contradições e demais regras determinísticas: Fase 4.
- Lista de medicamentos de alto risco: depende da equipe.
- O snapshot gravado do resultado não contém `armazenamento_oci` (não pode afirmar a própria
  persistência); quem lê o objeto preenche o bloco após confirmar a gravação (Fases 6 e 7).

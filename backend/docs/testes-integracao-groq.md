
# Testes de Integração — Groq e OCI Object Storage

## 1. Objetivo

Validar o fluxo integrado do MediFlow utilizando um modelo de inteligência artificial real, por meio do provedor Groq, e persistência na Oracle Cloud Infrastructure (OCI).

O teste foi realizado com dados totalmente fictícios, sem informações reais de pacientes.

## 2. Ambiente de testes

- Data: 15/11/2026
- Backend: Python e FastAPI
- Interface de testes: Swagger UI
- Provedor de IA: Groq
- Modelo: `qwen/qwen3.8-27b`
- Armazenamento: OCI Object Storage
- Bucket: `mediflow-testes-integracao`
- Região: `sa-saopaulo-1`
- Tipo de documento: TXT
- Canal de origem: `AMBULATORIO`

As credenciais do Groq e da OCI foram configuradas apenas no ambiente local, sem inclusão de chaves no repositório.

## 3. Cenário de teste

Foi criado um documento sintético representando uma receita médica, com as seguintes informações:

- Paciente: Paciente Exemplo
- Idade: 35 anos
- Médico: Dr. Exemplo
- CRM: 123456-SP
- Medicamento: Paracetamol
- Dosagem: 500 mg
- Posologia: 1 comprimido a cada 8 horas por 3 dias
- Data de emissão: 15/11/2026

O documento foi enviado pelo endpoint:

`POST /api/v1/documents/triage/upload`

Parâmetros utilizados:

- `arquivo`: mediflow_receita_teste.txt
- `tipo_arquivo`: TXT
- `canal_origem`: AMBULATORIO

## 4. Resultados da classificação e extração

Identificador gerado:

`DOC-7DE3093DD1C6`

A API retornou:

| Campo | Resultado |
|---|---|
| Provedor | groq |
| Modelo | qwen/qwen3.8-27b |
| Tipo de documento | receita_medica |
| Especialidade | Medicina |
| Prioridade | rotina |
| Urgente | false |
| Confiança da classificação | 0.95 |
| Confiança da extração | 0.85 |
| Status | em_auditoria |
| Versão do resultado | 1 |

As informações de paciente, médico, medicamento, dosagem, posologia e data de emissão foram extraídas corretamente em relação ao documento sintético utilizado.

## 5. Validação e roteamento

A aplicação identificou uma inconsistência de formato no campo `medico_solicitante.crm`.

Valor extraído:

`123456-SP`

A regra de validação esperava de 4 a 10 dígitos numéricos para o CRM.

Validação retornada:

- Código: `formato_invalido`
- Gravidade: `media`
- Campo afetado: `medico_solicitante.crm`

Em consequência, o sistema encaminhou o documento para:

`FILA_REVISAO_HUMANA`

Resultado do roteamento:

- `requer_auditoria_humana`: true
- `status_revisao`: pendente
- `prioridade`: rotina

A revisão humana desse documento específico não foi executada neste cenário.

## 6. Persistência na OCI

Foi utilizada a OCI Object Storage real, com `STORAGE_BACKEND=oci`.

A existência dos seguintes objetos foi confirmada por consulta ao bucket:

**Documento original:**

`recebidos/DOC-7DE3093DD1C6/original.txt`

**Resultado da triagem:**

`auditoria_humana/DOC-7DE3093DD1C6/resultado_v001.json`

Os objetos foram localizados por meio do SDK Python da OCI.

## 7. Recuperação do documento pela API

Foi executado o endpoint:

`GET /api/v1/documents/DOC-7DE3093DD1C6`

A resposta recuperou o resultado da triagem, incluindo:

- Identificador do documento;
- Classificação como `receita_medica`;
- Informações extraídas;
- Resultado da validação do CRM;
- Encaminhamento para auditoria humana;
- Identificação do provedor Groq;
- Versão 1 do resultado.

## 8. Pontos de atenção

### 8.1. Formatação do CRM

O modelo retornou o CRM junto com a sigla do estado (`123456-SP`).

Sugere-se avaliar a normalização do campo CRM antes de sua validação, preservando a evidência original e respeitando as regras de negócio do projeto.

### 8.2. Metadados de armazenamento

O campo `armazenamento_oci` retornou `null` na resposta da API, embora a persistência dos objetos tenha sido confirmada por consulta direta à OCI.

Sugere-se avaliar o preenchimento desse campo nas respostas futuras.

### 8.3. Cobertura dos testes

A primeira rodada de testes com Groq real contemplou uma receita médica sintética encaminhada para auditoria humana.

Em 15/11/2026, a cobertura foi ampliada com outros dois cenários: uma receita médica sem inconsistências, encaminhada automaticamente à Farmácia Hospitalar, e um laudo fictício com sinais de urgência, encaminhado à Fila de Emergência Médica.

Os resultados completos estão registrados nas seções 10, 11 e 12 deste documento.

Permanecem como possibilidades de testes complementares os cenários de urgência com baixa confiança e falhas reais de comunicação com o provedor..

## 9. Conclusão

O cenário de integração executado apresentou resultado positivo.

Foi possível:

1. Receber um documento fictício pela API FastAPI;
2. Classificar e extrair informações usando o Groq real;
3. Aplicar regras de validação;
4. Encaminhar o documento para auditoria humana;
5. Persistir o arquivo original e o resultado na OCI Object Storage;
6. Recuperar o resultado por meio de endpoint GET.

O teste fornece evidências do funcionamento do fluxo principal do MediFlow com IA real, sem representar uma validação completa de todos os cenários do sistema.

---

## 10. Cenário 2 — Receita médica sem inconsistências

**Data:** 15/11/2026

**Objetivo:** validar o encaminhamento automático de uma receita médica sintética, sem necessidade de revisão humana.

### Documento utilizado

- Arquivo: `mediflow_cenario2.txt`
- Paciente: Paciente Exemplo Dois
- Idade: 35 anos
- Médico: Dr. Exemplo
- CRM: 123456
- UF do CRM: SP
- Medicamento: Paracetamol
- Dosagem: 500 mg
- Posologia: 1 comprimido a cada 8 horas por 3 dias
- Canal de origem: `AMBULATORIO`

### Execução

Endpoint: `POST /api/v1/documents/triage/upload`

Identificador: `DOC-18A3B83C98E3`

Código HTTP: `200`

| Campo | Resultado |
|---|---|
| Provedor | groq |
| Modelo | qwen/qwen3.8-27b |
| Tipo de documento | receita_medica |
| Prioridade | rotina |
| Confiança da classificação | 0.95 |
| Confiança da extração | 0.85 |
| Status | processado |
| Validações | [] |
| Destino | FARMACIA_HOSPITALAR |
| Auditoria humana necessária | false |
| Código do motivo | criterios_atendidos |
| Versão | 1 |

### Persistência na OCI

A existência do resultado foi confirmada diretamente no bucket por meio do SDK Python da OCI:

`processados/DOC-18A3B83C98E3/resultado_v001.json`

### Conclusão

O sistema classificou e extraiu os dados do documento fictício e aplicou o roteamento automático para a Farmácia Hospitalar.

Diferentemente do primeiro cenário, o CRM e sua UF foram apresentados e extraídos separadamente, sem gerar inconsistência de formato.

O teste validou o processamento e a existência do resultado persistido na OCI.

---

## 11. Cenário 3 — Laudo com sinal de urgência

**Data:** 15/11/2026

**Objetivo:** verificar a identificação de possíveis sinais de urgência e o encaminhamento prioritário definido pelas regras do MediFlow.

### Documento utilizado

- Arquivo: `mediflow_cenario3_urgencia.txt`
- Tipo: laudo de exame fictício
- Paciente: Paciente Exemplo Tres
- Idade: 58 anos
- Exame: Angiotomografia computadorizada de tórax
- Achado descrito: compatibilidade com tromboembolismo pulmonar agudo
- Conclusão: correlação clínica urgente recomendada
- Canal de origem: `PRONTO_SOCORRO`

O documento foi produzido exclusivamente para teste, sem validade médica ou diagnóstica.

### Execução

Endpoint: `POST /api/v1/documents/triage/upload`

Identificador: `DOC-5D1A11DE4D26`

Código HTTP: `200`

| Campo | Resultado |
|---|---|
| Provedor | groq |
| Modelo | qwen/qwen3.8-27b |
| Tipo de documento | laudo_exame |
| Prioridade | urgente |
| Confiança da classificação | 0.95 |
| Confiança da extração | 0.95 |
| Status | processado |
| Validações | [] |
| Destino | FILA_EMERGENCIA_MEDICA |
| Auditoria humana necessária | false |
| Código do motivo | urgencia_confiavel |
| Versão | 1 |

### Identificação de urgência

O sistema identificou sinais de urgência provenientes de duas fontes:

1. **LLM:** menção explícita à urgência na conclusão do laudo.
2. **Regras determinísticas:** identificação dos termos configurados `tromboembolismo pulmonar agudo` e `correlacao clinica urgente`.

O encaminhamento para a fila de emergência foi realizado porque os critérios configurados de confiança e evidência foram atendidos.

### Registro do alerta

A resposta apresentou o campo `notificacao_gerada` preenchido com:

- Canal: `Alerta_Plantao_Medico`
- Documento: `DOC-5D1A11DE4D26`
- Evidências associadas aos sinais de urgência

A geração desse registro não comprova entrega de notificação externa a profissionais de saúde.

### Persistência na OCI

A existência do resultado foi confirmada diretamente no bucket por meio do SDK Python da OCI:

`processados/DOC-5D1A11DE4D26/resultado_v001.json`

### Conclusão

O sistema classificou o laudo fictício, identificou sinais de urgência por IA e regras determinísticas e definiu o encaminhamento para `FILA_EMERGENCIA_MEDICA`.

Também registrou um evento de alerta e persistiu o resultado na OCI.

---

## 12. Resumo dos três cenários com Groq real

| Cenário | Documento | Decisão | Resultado |
|---|---|---|---|
| 1 | Receita com CRM em formato inconsistente | FILA_REVISAO_HUMANA | Validado |
| 2 | Receita sem inconsistências | FARMACIA_HOSPITALAR | Validado |
| 3 | Laudo com sinal de urgência | FILA_EMERGENCIA_MEDICA | Validado |

Os três cenários utilizaram documentos sintéticos, o provedor Groq real, as regras do backend e a persistência na OCI Object Storage.

A existência dos arquivos de resultado foi confirmada na OCI. No primeiro cenário também foram verificados o documento original e a recuperação pela API GET.

### Limitações e testes complementares

- O campo `armazenamento_oci` continuou retornando `null` nos testes.
- Ainda não foi testada nesta rodada a urgência com baixa confiança, que deve exigir revisão humana prioritária.
- Não foram validadas falhas reais de comunicação com o provedor Groq.
- Não foi realizada nesta rodada a integração completa com o frontend.
- As pontuações de confiança são saídas do sistema e não comprovam precisão clínica.
- A classificação de urgência não substitui avaliação profissional.

Os resultados demonstram três fluxos funcionais do MVP, mas não equivalem a uma validação clínica ou a uma aprovação para uso com documentos reais.

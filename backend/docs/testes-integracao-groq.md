
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

O cenário executado validou uma receita médica sintética, com prioridade de rotina e encaminhamento para auditoria humana.

Ainda não foram realizados nesta rodada testes com diferentes categorias de documentos utilizando o Groq real, cenários de urgência ou falhas de comunicação com o provedor.

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

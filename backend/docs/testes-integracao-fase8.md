# MediFlow — Fase 8: Testes Integrados

## 1. Objetivo

Validar a integração dos componentes do backend do MediFlow, incluindo a API FastAPI, o processamento de triagem com provedor mock, o armazenamento de documentos na Oracle Cloud Infrastructure (OCI) e o fluxo de revisão humana.

Os testes foram realizados com documentos sintéticos, sem utilização de dados reais de pacientes.

## 2. Ambiente utilizado

| Componente | Tecnologia |
|---|---|
| Linguagem | Python 3.14.6 |
| Framework da API | FastAPI |
| Testes automatizados | pytest 9.2.0 |
| Armazenamento em nuvem | OCI Object Storage |
| Região OCI | sa-saopaulo-1 |
| Bucket de testes | mediflow-testes-integracao |
| Provedor de IA | Mock |
| Sistema operacional | Windows |
| Interface de testes da API | Swagger UI |

A autenticação com a OCI foi realizada localmente por meio do SDK Python, utilizando credenciais configuradas fora do repositório.

## 3. Testes manuais com OCI real

Os testes foram executados utilizando os endpoints da API e a integração com o Object Storage.

| Cenário | Resultado obtido | Status |
|---|---|---|
| Conexão com OCI | Autenticação e listagem do bucket realizadas | Aprovado |
| Salvamento de objeto | Arquivo salvo no bucket | Aprovado |
| Leitura de objeto | Conteúdo recuperado corretamente | Aprovado |
| Listagem de objetos | Objetos identificados pelos caminhos esperados | Aprovado |
| Upload pela API | HTTP 200 e geração automática de ID | Aprovado |
| Triagem simulada | Documento classificado como indeterminado e encaminhado à auditoria | Aprovado |
| Consulta por ID | HTTP 200 com resultado persistido | Aprovado |
| Documento inexistente | HTTP 404 | Aprovado |
| Rejeição humana | Status rejeitado e criação da versão 2 | Aprovado |
| Aprovação humana | Status aprovado_auditoria e criação da versão 2 | Aprovado |
| Correção de campo | Valor corrigido e marcado como revisado por humano | Aprovado |
| Histórico de revisão | Valores anterior e posterior registrados | Aprovado |
| Controle de versão | HTTP 409 para versão desatualizada | Aprovado |
| Proteção contra sobrescrita | FileExistsError e conteúdo original preservado | Aprovado |

### 3.1. Evidência — Rejeição humana

Documento: `DOC-91E644901157`

- Versão 1: status `em_auditoria`.
- Versão 2: status `rejeitado`.
- Histórico de revisão registrado.
- Consulta GET retornou a versão 2.
- Tentativa de revisão com versão desatualizada retornou HTTP 409.

Objetos confirmados na OCI:

```text
auditoria_humana/DOC-91E644901157/resultado_v001.json
recebidos/DOC-91E644901157/original.txt
rejeitados/DOC-91E644901157/resultado_v002.json
```

### 3.2. Evidência — Aprovação humana

Documento: `DOC-78FE8CB7E702`

- Versão 1: status `em_auditoria`.
- Versão 2: status `aprovado_auditoria`.
- Aprovação registrada no histórico.

Objetos confirmados na OCI:

```text
auditoria_humana/DOC-78FE8CB7E702/resultado_v001.json
processados/DOC-78FE8CB7E702/resultado_v002.json
recebidos/DOC-78FE8CB7E702/original.txt
```

### 3.3. Evidência — Correção de campo

Documento: `DOC-80C1BB89C4EC`

Campo corrigido: `paciente.nome`

| Propriedade | Antes | Depois |
|---|---|---|
| valor | null | Paciente Teste |
| situacao | ausente | presente |
| revisado_por_humano | false | true |
| versao_resultado | 1 | 2 |

O JSON da versão 2 foi lido diretamente do OCI Object Storage, confirmando a persistência da correção e do histórico.

Objetos confirmados:

```text
auditoria_humana/DOC-80C1BB89C4EC/resultado_v001.json
processados/DOC-80C1BB89C4EC/resultado_v002.json
recebidos/DOC-80C1BB89C4EC/original.txt
```

## 4. Testes automatizados do OCIStorage

Foi criado o arquivo:

`backend/tests/test_oci_storage.py`

O arquivo contém 13 casos de teste, cobrindo:

- Salvamento de objetos.
- Leitura de objetos.
- Tratamento de objetos inexistentes.
- Listagem por prefixo.
- Bloqueio de sobrescrita.
- Validação de chaves inválidas.
- Paginação dos resultados.
- Tratamento de falhas no salvamento.
- Verificação de saúde diante de indisponibilidade.

Os testes utilizam mocks para simular o SDK OCI, permitindo execução sem credenciais ou acesso ao bucket real.

### 4.1. Execução dos testes

Na pasta `backend`, utilizando PowerShell:

```powershell
$env:STORAGE_BACKEND = "mock"
python -m pytest tests/test_oci_storage.py -v
python -m pytest -q
Remove-Item Env:STORAGE_BACKEND
```

### 4.2. Resultados

Testes específicos do OCIStorage:

**13 passed**

Suíte completa:

**129 passed, 1 skipped, 14 warnings**

O teste ignorado depende de permissões do Windows para criação de links simbólicos.

Os avisos encontrados são de depreciação de dependências e não impediram a execução.

## 5. Limitações identificadas

1. O campo `armazenamento_oci` permanece `null` nas respostas observadas, embora a persistência dos objetos tenha sido confirmada diretamente na Oracle Cloud.
2. Algumas respostas HTTP de erro, como 404 e 409, aparecem como *Undocumented* no Swagger, pois ainda não estão explicitamente documentadas no contrato OpenAPI.
3. Os testes com OCI real foram executados manualmente em ambiente de desenvolvimento, enquanto os testes automatizados do adaptador utilizam mocks.
4. O provedor de IA utilizado foi o mock; os testes não validam a qualidade das classificações de um modelo de IA real.
5. A identidade do revisor humano não é autenticada no MVP, sendo registrada com `identidade_verificada: false`.
6. A suíte automatizada deve utilizar um armazenamento isolado, como `STORAGE_BACKEND=mock`, para evitar dependência dos objetos já existentes no bucket de testes.

## 6. Segurança

- Não foram utilizados dados reais de pacientes.
- As credenciais da OCI não foram incluídas no repositório.
- Os documentos de teste utilizaram informações sintéticas.
- Os testes automatizados do OCIStorage não exigem acesso real à Oracle Cloud.

## 7. Versionamento e contribuição

Branch: `feature/backend-testes-integrados`

Commit dos testes OCIStorage: `93e8c3d`

Mensagem do commit:

`test: adiciona testes unitarios do OCIStorage`

## 8. Conclusão

Os testes executados demonstraram o funcionamento dos principais fluxos integrados do MediFlow em ambiente de desenvolvimento, incluindo recebimento de documentos, triagem simulada, persistência na OCI, consulta, revisão humana, versionamento e rastreabilidade.

Os testes automatizados do adaptador OCIStorage foram adicionados e a suíte completa passou com 129 testes aprovados e um ignorado.

As limitações identificadas foram registradas para orientar melhorias futuras no backend e na documentação da API.

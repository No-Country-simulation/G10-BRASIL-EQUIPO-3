# Publicação inicial do MediFlow na OCI

Esta configuração empacota a API FastAPI e o frontend React em containers. O Nginx serve o frontend e encaminha `/api/` para a API na rede privada do Compose. O backend não publica a porta 8000 no host.

## Autenticação e limite de segurança

O backend agora implementa login Bearer para as rotas de documentos. O Compose usa `AUTH_ENABLED` tanto para compilar o frontend quanto para configurar o backend; mantenha `AUTH_ENABLED=true` em `deploy/oci/.env`. Cada pessoa configurada em `AUTH_USERS` consegue acessar os endpoints protegidos; ainda não há autorização por função/registro nem limitação de tentativas de login. Use apenas documentos sintéticos e mantenha a porta 80 restrita aos IPs autorizados no NSG. Não publique a porta 8000 nem use dados reais de pacientes.

## Preparação do servidor

1. Crie uma VM Linux na OCI e instale Docker Engine com o plugin Docker Compose.
2. Configure o NSG para permitir TCP 80 somente dos IPs autorizados da equipe. Não abra a porta 8000. Restrinja também SSH (22) ao seu IP.
3. Transfira o repositório para a VM, sem `node_modules`, `.venv`, `.env` local ou chaves privadas.
4. Na raiz do repositório no servidor, prepare o ambiente do backend:

   ```bash
   cp backend/env.example backend/.env
   chmod 600 backend/.env
   ```

   Edite `backend/.env`: use `APP_ENV=production`, `LLM_PROVIDER=groq`, o `LLM_MODEL` validado pela equipe, `GROQ_API_KEY`, `STORAGE_BACKEND=oci`, `OCI_NAMESPACE`, `OCI_REGION` e `OCI_BUCKET`. Configure também `AUTH_SECRET` com um valor aleatório de pelo menos 32 caracteres e `AUTH_USERS` com a lista JSON de usuários e senhas fortes. O arquivo de exemplo já contém o formato; substitua a senha de exemplo. Proteja o arquivo com permissões `600`. Não coloque credenciais em `frontend` ou em variáveis `VITE_*`.

5. Prepare a configuração OCI no host. Crie `/opt/mediflow/secrets/oci`, coloque ali o arquivo `config` e a chave privada do perfil configurado, e dê a propriedade ao UID/GID `10001` usado pelo processo do backend, com leitura restrita (diretório `700`, arquivos `600`). No arquivo `config`, confira que `key_file` aponta para o caminho **dentro do container**, por exemplo `/home/mediflow/.oci/oci_api_key.pem`, e que o nome da chave corresponde ao arquivo montado. O código atual usa autenticação por arquivo de configuração OCI; não copie a chave para a imagem nem para o Git.
6. Prepare o arquivo de variáveis não secretas do Compose:

   ```bash
   cp deploy/oci/.env.example deploy/oci/.env
   chmod 600 deploy/oci/.env
   ```

   Ajuste `OCI_CONFIG_DIR` e `OCI_CONFIG_PROFILE` para a configuração instalada no servidor. Mantenha `AUTH_ENABLED=true`; esse único valor sincroniza o login no frontend e no backend. O `.env` do deploy só configura o Compose; as credenciais do Groq e a lista de usuários ficam em `backend/.env`. Para acesso externo no servidor, defina `WEB_BIND_ADDRESS=0.0.0.0` e `WEB_PORT=80`, mantendo o NSG restrito aos IPs autorizados. O padrão do exemplo é seguro para teste local e só aceita conexões da própria máquina em `http://localhost:8080`.

## Build e inicialização

Na raiz do repositório:

```bash
docker compose --env-file deploy/oci/.env -f deploy/oci/compose.yaml config
docker compose --env-file deploy/oci/.env -f deploy/oci/compose.yaml build backend
docker compose --env-file deploy/oci/.env -f deploy/oci/compose.yaml build frontend
docker compose --env-file deploy/oci/.env -f deploy/oci/compose.yaml up -d
docker compose --env-file deploy/oci/.env -f deploy/oci/compose.yaml ps
```

Os builds sequenciais evitam pressionar a memória de uma VM pequena ao compilar os dois serviços ao mesmo tempo. O Dockerfile do frontend limita o heap do Node a 512 MB durante o build. O primeiro comando valida a configuração renderizada; confirme que nenhum segredo aparece nos argumentos de build. A API deve ficar saudável antes do Nginx iniciar. Para consultar logs:

```bash
docker compose --env-file deploy/oci/.env -f deploy/oci/compose.yaml logs --tail=100 backend frontend
```

Abra `http://IP_PUBLICO_DA_VM` a partir de um IP autorizado. Confira também `http://IP_PUBLICO_DA_VM/health`, envio de arquivo sintético, listagem, detalhe, revisão e persistência no bucket. A rota `/ready` atualmente valida configuração, não conectividade real com OCI.

## Antes de tornar público

- Evoluir a autenticação do MVP: autorização por função/registro, proteção contra tentativas excessivas e gestão segura de credenciais.
- Configurar domínio e HTTPS (certificado no Nginx ou Load Balancer OCI), monitoramento e política de backup.
- Avaliar Instance Principals com grupo dinâmico e política IAM de menor privilégio para retirar a chave de usuário da VM. O adaptador atual ainda usa `oci.config.from_file`, portanto essa mudança exige suporte no código antes de ativar Instance Principals.
- O backend e o frontend agora suportam a recuperação autenticada do original pelo bucket; validar esse fluxo E2E no servidor com arquivo sintético.
- Revisar e testar o build, o compose e o acesso externo no ambiente OCI antes de considerar a publicação concluída.

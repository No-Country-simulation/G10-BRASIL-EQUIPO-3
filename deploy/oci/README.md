# Publicação inicial do MediFlow na OCI

Esta configuração empacota a API FastAPI e o frontend React em containers. O Nginx serve o frontend e encaminha `/api/` para a API na rede privada do Compose. O backend não publica a porta 8000 no host.

## Limite de segurança desta primeira demonstração

O backend ainda não autentica nem autoriza usuários. `VITE_AUTH_ENABLED=false` apenas desativa a tela de login do frontend; não protege os endpoints. Até implementar autenticação no backend, use somente documentos sintéticos e restrinja o acesso HTTP no Network Security Group aos IPs da equipe. Não publique a porta 8000. Não use dados de pacientes.

## Preparação do servidor

1. Crie uma VM Linux na OCI e instale Docker Engine com o plugin Docker Compose.
2. Configure o NSG para permitir TCP 80 somente dos IPs autorizados da equipe. Não abra a porta 8000. Restrinja também SSH (22) ao seu IP.
3. Transfira o repositório para a VM, sem `node_modules`, `.venv`, `.env` local ou chaves privadas.
4. Na raiz do repositório no servidor, prepare o ambiente do backend:

   ```bash
   cp backend/env.example backend/.env
   chmod 600 backend/.env
   ```

   Edite `backend/.env`: use `APP_ENV=production`, `LLM_PROVIDER=groq`, o `LLM_MODEL` validado pela equipe, `GROQ_API_KEY`, `STORAGE_BACKEND=oci`, `OCI_NAMESPACE`, `OCI_REGION` e `OCI_BUCKET`. Não coloque credenciais em `frontend` ou em variáveis `VITE_*`.

5. Prepare a configuração OCI no host. Crie `/opt/mediflow/secrets/oci`, coloque ali o arquivo `config` e a chave privada do perfil configurado, e dê a propriedade ao UID/GID `10001` usado pelo processo do backend, com leitura restrita (diretório `700`, arquivos `600`). No arquivo `config`, confira que `key_file` aponta para o caminho **dentro do container**, por exemplo `/home/mediflow/.oci/oci_api_key.pem`, e que o nome da chave corresponde ao arquivo montado. O código atual usa autenticação por arquivo de configuração OCI; não copie a chave para a imagem nem para o Git.
6. Prepare o arquivo de variáveis não secretas do Compose:

   ```bash
   cp deploy/oci/.env.example deploy/oci/.env
   chmod 600 deploy/oci/.env
   ```

   Ajuste `OCI_CONFIG_DIR` e `OCI_CONFIG_PROFILE` para a configuração instalada no servidor. O `.env` do deploy só configura o Compose; as credenciais do Groq ficam no `backend/.env`. Para acesso externo no servidor, defina `WEB_BIND_ADDRESS=0.0.0.0` e `WEB_PORT=80`, mantendo o NSG restrito aos IPs da equipe. O padrão do exemplo é seguro para teste local e só aceita conexões da própria máquina em `http://localhost:8080`.

## Build e inicialização

Na raiz do repositório:

```bash
docker compose --env-file deploy/oci/.env -f deploy/oci/compose.yaml config
docker compose --env-file deploy/oci/.env -f deploy/oci/compose.yaml up -d --build
docker compose --env-file deploy/oci/.env -f deploy/oci/compose.yaml ps
```

O primeiro comando valida a configuração renderizada e deve ser revisado para confirmar que nenhum valor secreto foi colocado em argumentos de build. A API deve ficar saudável antes do Nginx iniciar. Para consultar logs:

```bash
docker compose --env-file deploy/oci/.env -f deploy/oci/compose.yaml logs --tail=100 backend frontend
```

Abra `http://IP_PUBLICO_DA_VM` a partir de um IP autorizado. Confira também `http://IP_PUBLICO_DA_VM/health`, envio de arquivo sintético, listagem, detalhe, revisão e persistência no bucket. A rota `/ready` atualmente valida configuração, não conectividade real com OCI.

## Antes de tornar público

- Implementar autenticação/autorização no backend e identificar o revisor de forma confiável.
- Configurar domínio e HTTPS (certificado no Nginx ou Load Balancer OCI), monitoramento e política de backup.
- Avaliar Instance Principals com grupo dinâmico e política IAM de menor privilégio para retirar a chave de usuário da VM. O adaptador atual ainda usa `oci.config.from_file`, portanto essa mudança exige suporte no código antes de ativar Instance Principals.
- Adicionar acesso multiusuário autenticado ao documento original; hoje o frontend mantém metadados/URL local no navegador.
- Revisar e testar o build, o compose e o acesso externo no ambiente OCI antes de considerar a publicação concluída.

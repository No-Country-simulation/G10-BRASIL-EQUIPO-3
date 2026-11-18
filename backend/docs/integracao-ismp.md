
# Integração ISMP — MediFlow MVP

## 1. Objetivo

Integrar o catálogo de medicamentos potencialmente perigosos (ISMP) ao fluxo de triagem do MediFlow, permitindo identificar situações que exigem conferência humana.

A implementação inicial funciona como prova de conceito e não substitui avaliação clínica.

## 2. Catálogo ISMP

O catálogo utilizado está em:

`backend/docs/MediFlow_Lista_ISMP_Hospitalar_2019.json`

Contém 30 itens, incluindo classes de medicamentos e medicamentos específicos.

A função `carregar_catalogo_ismp()` realiza a leitura do JSON e verifica sua estrutura básica.

A função `buscar_itens_ismp()` permite localizar correspondências por nomes e exemplos cadastrados, com normalização de acentuação e espaços.

## 3. Regra implementada no MVP

A primeira regra automatizada é a avaliação de glicose hipertônica, identificada no catálogo como `ISMP-HOSP-011`.

A função `avaliar_glicose_hipertonica()` considera a concentração informada no nome ou na dosagem do medicamento.

Resultados possíveis:

- `criterio_atendido`: concentração igual ou superior a 20%.
- `criterio_nao_atendido`: concentração inferior a 20%.
- `dados_insuficientes`: concentração ausente, ambígua ou conflitante.
- `nao_corresponde`: medicamento não identificado como glicose pelo critério implementado.

Quando o critério é atendido ou faltam informações para confirmá-lo, a função `gerar_achados_ismp()` cria um achado para revisão humana.

## 4. Integração ao LangGraph

A avaliação ISMP foi integrada ao nó de validação em:

`backend/app/graph/nodes.py`

O nó executa as validações existentes e, quando a funcionalidade ISMP está habilitada, acrescenta os achados produzidos pela nova regra.

O roteamento existente pode encaminhar esses achados para `FILA_REVISAO_HUMANA`.

As regras de urgência do MediFlow não foram substituídas.

## 5. Configuração

A funcionalidade é controlada pela configuração:

`ISMP_ENABLED`

O valor padrão é `false`.

Para habilitá-la temporariamente no PowerShell:

```powershell
$env:ISMP_ENABLED = "true"
```

Para desativar a configuração temporária:

```powershell
Remove-Item Env:ISMP_ENABLED
```

## 6. Testes realizados

Foram implementados testes unitários e de integração no arquivo:

`backend/tests/test_ismp.py`

Cenários verificados:

- Leitura e validação da estrutura do catálogo.
- Busca de medicamentos por nome.
- Glicose 25%: geração de achado ISMP.
- Glicose 5%: ausência de alerta pelo critério específico.
- Concentração ausente ou conflitante: solicitação de revisão humana.
- Ativação e desativação da funcionalidade.
- Integração do nó de validação e do roteamento.
- Fluxo completo do LangGraph com documentos e dados sintéticos.

Na última execução registrada da suíte completa:

**163 testes aprovados, 1 ignorado e nenhuma falha.**

Os testes foram realizados com provedores e armazenamento simulados.

## 7. Limitações do MVP

- O catálogo contém 30 itens, mas somente o critério de glicose hipertônica está automatizado.
- Os critérios dos demais itens precisam ser implementados e testados.
- O enquadramento depende da qualidade e completude dos dados extraídos.
- A integração ainda não foi validada especificamente pela API HTTP nem com Groq e OCI reais.
- O catálogo e as regras precisam de validação clínica antes de uso assistencial.
- A funcionalidade permanece desativada por padrão.

## 8. Melhorias futuras

- Agrupar os itens do catálogo por tipos de critérios.
- Criar avaliadores reutilizáveis para concentração, apresentação e via de administração.
- Expandir gradualmente a cobertura do catálogo.
- Criar testes para novos medicamentos e situações ambíguas.
- Validar os critérios com profissionais qualificados.
- Testar a integração pela API HTTP e com os provedores reais em ambiente controlado, utilizando dados sintéticos.

## 9. Conclusão

A integração inicial ISMP demonstra que o MediFlow pode consultar um catálogo de referência, aplicar uma regra de enquadramento, gerar achados e encaminhar situações para revisão humana.

A estrutura implementada permite evoluir o MVP gradualmente, sem exigir a implementação de todos os critérios nesta entrega.

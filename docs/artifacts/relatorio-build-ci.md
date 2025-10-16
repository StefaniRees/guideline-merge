---
id: relatorio-build-ci
title: Relatório de Build/CI
description: Evidência gerada automaticamente pela pipeline (build, testes, análise estática e segurança).
---

## Descrição
Relatório produzido por **CI** com resultados de compilação, testes (unit/integration), linters, cobertura e checagens de segurança.

## Boas Práticas
- Executar **para todo PR** com **feedback rápido** (< 10 min).  
- Tornar o relatório **gate**: PR não avança se falhar.  
- Publicar métricas de **cobertura mínima** acordada (ex.: 70–80%).

## Justificativa
Funciona como **controle automático de qualidade** e reduz risco de regressões.

## Obrigatório?
**Sim**

## Templates / Guidelines relacionados
- **Template:** [CI/CD Pipeline Report](/docs/templates/ci-cd-pipeline-report) *(pendente edição)*
- **Guideline:** [CI/CD Quality Gates](/docs/guidelines/cicd-quality-gates) *(pendente edição)*
- **Activity:** [Executar Build e Testes (CI/CD)](/docs/activities/build-ci-cd)

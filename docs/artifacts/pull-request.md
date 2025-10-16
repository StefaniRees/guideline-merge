---
id: pull-request
title: Pull Request (PR)
description: Solicitação formal de merge da branch de atividade para a branch principal.
---

## Descrição
O **Pull Request** (PR) é a solicitação formal para integrar uma branch de atividade à branch principal, permitindo revisão e automações (CI/CD).

## Boas Práticas
- **PRs pequenos** (≈ até 400 LOC) e com escopo coeso.
- **Múltiplos revisores** conforme criticidade.
- **Template padronizado** (contexto, mudanças, risco/impacto, testes).
- **CI/CD** como *gate* obrigatório (build, testes, análise estática e segurança).

## Justificativa
Elemento central de controle de qualidade, colaboração e governança de mudanças.

## Obrigatório?
**Sim**

## Templates / Guidelines relacionados
- **Template:** [Pull Request Template](/docs/templates/pull-request)
- **Guideline:** [Approval Policy](/docs/guidelines/approval-policy)
- **Activity:** [Abrir PR](/docs/activities/abrir-pr)

---
id: feature-flag
title: Feature Flag
description: Mecanismo para ativar/desativar comportamento sem branches longas.
---

## Descrição
Feature Flags permitem **liberar funcionalidades de forma incremental** e segura, sem depender de longas branches.

## Boas Práticas
- Cada flag deve ter **owner**, **escopo**, **prazo de remoção** e **rastreabilidade** no backlog.
- Auditoria periódica de flags antigas.

## Justificativa
Essencial para **trunk-based development**, reduzindo risco de integrações complexas.

## Obrigatório?
**Sim**

## Templates / Guidelines relacionados
- **Guideline:** [Feature Flags Management](/docs/guidelines/feature-flags-management)

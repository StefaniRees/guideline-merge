---
id: code-review
title: Code Review
sidebar_position: 4
---

import Checklist from '@site/src/components/Checklist';

## Objective
Collaboratively evaluate the proposed integration, identifying technical and quality risks through a structured checklist review.

## Inputs (Required Artifacts)
- [Pull Request](/docs/artifacts/pull-request) opened with filled template
- [Build/CI Report](/docs/artifacts/relatorio-build-ci) approved

## Outputs (Produced Artifacts)
- Review comments
- Completed [Review Checklist](/docs/artifacts/checklist-revisao)
- [Decision Record](/docs/artifacts/registro-decisao)

## Roles
- **[Mediator](/docs/roles/mediador)** — conducts technical review, applies the checklist, and ensures complete resolution of comments

## Activities
1. [Code Review](/docs/activities/code-review) — review PR with technical and collaborative checklist
2. [Validate in Staging (QA)](/docs/activities/qa-homologacao) — run functional and regression tests before advancing
3. Ensure complete resolution of comments before advancing

## Entry Criteria
- PR with filled template and CI/CD pipeline approved

## Exit Criteria (Gate)
- Review checklist completed + comments resolved + technical decisions recorded

## Quality Gate
**[Code Review Checklist](/docs/guidelines/code-review-checklist)** — minimum technical review criteria covering style, impact, tests, risks, and security must be met before advancing to the Approval phase.

## Checklist
<Checklist
  storageKey="phase-cr-v1"
  sections={[
    {
      id: 'entradas',
      title: 'Pre-conditions (Inputs)',
      items: [
        { id: 'pr-ok', label: 'PR opened with filled template' },
        { id: 'cicd-ok', label: 'CI/CD pipeline approved' },
      ],
    },
    {
      id: 'execucao',
      title: 'Execution',
      items: [
        { id: 'estilo', label: 'Code style and conventions evaluated' },
        { id: 'impacto', label: 'Impact of changes analyzed' },
        { id: 'testes', label: 'Test coverage and quality verified' },
        { id: 'riscos', label: 'Technical risks identified and recorded' },
        { id: 'seguranca', label: 'Security aspects verified' },
        { id: 'decisoes', label: 'Technical decisions recorded' },
      ],
    },
    {
      id: 'gate',
      title: 'Quality Gate (Blocking)',
      items: [
        { id: 'checklist-ok', label: 'All Code Review Checklist criteria met' },
        { id: 'comments-ok', label: 'All comments resolved before approval' },
      ],
    },
  ]}
/>

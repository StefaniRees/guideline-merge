---
id: desenvolvimento
title: Development
sidebar_position: 2
---

import Checklist from '@site/src/components/Checklist';

## Objective
Implement changes incrementally and in sync, reducing accumulated conflicts through atomic commits, frequent synchronization, and local validations.

## Inputs (Required Artifacts)
- [Activity Branch](/docs/artifacts/branch-atividade)
- Established commit message convention

## Outputs (Produced Artifacts)
- [Standardized Commits](/docs/artifacts/commits-padronizados)
- Updated branch
- Local test evidence

## Roles
- **[Developer A](/docs/roles/developer-principal)** — implements changes, makes atomic commits, and syncs branch
- **[Developer B](/docs/roles/developer-integrador)** — co-responsible for implementation and synchronization

## Activities
1. [Implement Changes](/docs/activities/implementar-mudancas) with atomic commits (1 logical change per commit)
2. Sync branch with `main` regularly (periodic merge/rebase)
3. Run local tests

## Entry Criteria
- Branch created, scope defined, and commit convention established

## Exit Criteria (Gate)
- Local tests approved; branch updated; standardized commits

## Quality Gate
**[Commit Message Convention](/docs/guidelines/commit-message-convention)** — all commit messages follow the defined standard before advancing to the Pull Request phase.

## Checklist
<Checklist
  storageKey="phase-desenvolvimento-v1"
  sections={[
    {
      id: 'entradas',
      title: 'Pre-conditions (Inputs)',
      items: [
        { id: 'branch-ativa', label: 'Activity branch active and updated' },
        { id: 'commit-conv', label: 'Commit message convention already established' },
      ],
    },
    {
      id: 'execucao',
      title: 'Execution',
      items: [
        { id: 'atomic', label: 'Small and atomic commits (1 logical change)' },
        { id: 'sync', label: 'Branch synced with main (merge/rebase)' },
        { id: 'testes', label: 'Local tests run' },
        { id: 'evidencias', label: 'Local test evidence recorded' },
      ],
    },
    {
      id: 'gate',
      title: 'Quality Gate (Blocking)',
      items: [
        { id: 'conv-commits', label: 'Commit messages follow Conventional Commits + ticket ID' },
      ],
    },
  ]}
/>

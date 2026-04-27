---
id: merge
title: Merge
sidebar_position: 6
---

import Checklist from '@site/src/components/Checklist';

## Objective
Integrate the approved branch into the main in a controlled and auditable manner, resolving conflicts collaboratively and consolidating the integrated version.

## Inputs (Required Artifacts)
- Approved [Pull Request](/docs/artifacts/pull-request)
- [QA Report](/docs/artifacts/relatorio-qa)
- Branch synced with main

## Outputs (Produced Artifacts)
- Merge commit or squash
- Integration build
- [Conflict History](/docs/artifacts/historico-conflitos)
- Resolution [Standardized Commits](/docs/artifacts/commits-padronizados)
- [Release Notes](/docs/artifacts/release-notes)

## Roles
- **[Mediator](/docs/roles/mediador)** — coordinates integration, supports conflict resolution, and ensures traceability
- **[Developer A](/docs/roles/developer-principal)** — supports conflict resolution when needed
- **[Developer B](/docs/roles/developer-integrador)** — supports conflict resolution when needed

## Activities
1. [Resolve Merge Conflicts](/docs/activities/resolver-conflitos) — identify and resolve conflicts between branch and main
2. Record causes, decisions, and resolution history
3. [Final Merge](/docs/activities/merge-final) — integrate branch into main/release after approvals
4. Consolidate integrated version and generate Release Notes
5. Run integration build

## Entry Criteria
- PR approved; QA Report available; CI/CD pipeline approved

## Exit Criteria (Gate)
- Conflicts resolved and recorded + integration build approved + Release Notes generated

## Quality Gate
**[Conflict Resolution Procedure](/docs/guidelines/conflict-resolution-procedure)** — conflicts identified, resolved collaboratively, with causes, decisions, and history recorded before advancing to Release/Deploy.

## Checklist
<Checklist
  storageKey="phase-merge-v1"
  sections={[
    {
      id: 'entradas',
      title: 'Pre-conditions (Inputs)',
      items: [
        { id: 'pr-aprovado', label: 'PR approved and QA Report available' },
        { id: 'branch-sync', label: 'Branch updated immediately before merge' },
        { id: 'cicd-ok', label: 'CI/CD pipeline approved' },
      ],
    },
    {
      id: 'execucao',
      title: 'Execution',
      items: [
        { id: 'conflicts', label: 'Conflicts identified and resolved collaboratively' },
        { id: 'historico', label: 'Causes, decisions, and resolution history recorded' },
        { id: 'build', label: 'Integration build run' },
        { id: 'release-notes', label: 'Release Notes generated' },
        { id: 'trace', label: 'Traceability ticket ↔ PR ↔ merge ensured' },
      ],
    },
    {
      id: 'gate',
      title: 'Quality Gate (Blocking)',
      items: [
        { id: 'conflicts-ok', label: 'All conflicts resolved and recorded before advancing' },
        { id: 'build-ok', label: 'Integration build approved' },
      ],
    },
  ]}
/>

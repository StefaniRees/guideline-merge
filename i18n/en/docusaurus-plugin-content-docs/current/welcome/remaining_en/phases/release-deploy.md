---
title: Release / Deploy
sidebar_position: 7
---

import Checklist from '@site/src/components/Checklist';

## Objective
Make the integrated version available and monitor its behavior in production, ensuring release traceability.

## Inputs (Required Artifacts)
- Merge completed
- Release Notes generated

## Outputs (Produced Artifacts)
- Release deployed
- Release Notes published
- Deploy and monitoring logs

## Roles
- **Developer A** — responsible for deploy and generating evidence
- **Developer B** — co-responsible for deploy and monitoring
- **Mediator** — validates evidence and ensures release traceability

## Activities
1. Generate and publish Release Notes.
2. Deploy via pipeline.
3. Monitor post-deploy behavior and record logs.

## Entry Criteria
- Merge completed; Release Notes available

## Exit Criteria (Gate)
- Release deployed + deploy logs recorded + Release Notes published

## Quality Gate
**Release Notes Standard** — standardized Release Notes generated and published, communicating changes, risks, and affected components before advancing to closure or Rollback.

## Checklist
<Checklist
  storageKey="phase-release-v1"
  sections={[
    {
      id: 'entradas',
      title: 'Pre-conditions (Inputs)',
      items: [
        { id: 'merge-ok', label: 'Merge completed with approved integration build' },
        { id: 'notes-prontas', label: 'Release Notes generated' },
      ],
    },
    {
      id: 'execucao',
      title: 'Execution',
      items: [
        { id: 'notes', label: 'Release Notes published' },
        { id: 'pipeline', label: 'Deploy performed via pipeline' },
        { id: 'logs', label: 'Deploy logs recorded' },
        { id: 'monitor', label: 'Post-deploy monitoring executed' },
      ],
    },
    {
      id: 'gate',
      title: 'Quality Gate (Blocking)',
      items: [
        { id: 'notes-ok', label: 'Standardized Release Notes published per Release Notes Standard' },
        { id: 'deploy-ok', label: 'Release deployed and monitoring logs recorded' },
      ],
    },
  ]}
/>

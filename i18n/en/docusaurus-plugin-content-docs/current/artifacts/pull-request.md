---
id: pull-request
title: Pull Request (PR)
description: Formal merge request from the activity branch to the main branch.
---

## Description
The **Pull Request** (PR) is the formal request to integrate an activity branch into the main branch, enabling review and automations (CI/CD).

## Best Practices
- **Small PRs** (≈ up to 400 LOC) with cohesive scope.
- **Multiple reviewers** according to criticality.
- **Standardized template** (context, changes, risk/impact, tests).
- **CI/CD** as a mandatory *gate* (build, tests, static analysis, and security).

## Justification
Central element of quality control, collaboration, and change governance.

## Required?
**Yes**

## Related Templates / Guidelines
- **Template:** [Pull Request Template](/docs/templates/pull-request)
- **Guideline:** [Approval Policy](/docs/guidelines/approval-policy)
- **Activity:** [Open PR](/docs/activities/abrir-pr)

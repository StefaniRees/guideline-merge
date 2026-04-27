---
id: commits-padronizados
title: Standardized Commits
description: Commits representing incremental changes with consistent semantics.
---

## Description
Commits must represent **atomic changes** and contain standardized messages that clearly express the intent and scope.

## Best Practices
- Use **Conventional Commits** (`feat:`, `fix:`, `docs:`, `refactor:`, etc.).
- Include the **issue ID** (e.g., Jira/GitHub).
- Avoid generic messages ("adjustments", "changes").

## Justification
Facilitates **tracking**, **auditing**, **release note generation**, and **rollback**.

## Required?
**Yes**

## Related Templates / Guidelines
- **Guideline:** [Commit Message Convention](/docs/guidelines/commit-message-convention)
- **Activities:** [Make Commits](/docs/activities/abrir-pr) *(pending edit)*

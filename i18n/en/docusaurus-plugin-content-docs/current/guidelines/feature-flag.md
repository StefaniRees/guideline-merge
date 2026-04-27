---
id: feature-flag
title: Feature Flag
description: Mechanism to enable/disable behavior without long-lived branches.
---

## Description
Feature Flags allow **releasing functionality incrementally** and safely, without relying on long-lived branches.

## Best Practices
- Each flag must have an **owner**, **scope**, **removal deadline**, and **traceability** in the backlog.
- Periodic auditing of old flags.

## Justification
Essential for **trunk-based development**, reducing the risk of complex integrations.

## Required?
**Yes**

## Related Templates / Guidelines
- **Guideline:** [Feature Flags Management](/docs/guidelines/feature-flags-management)

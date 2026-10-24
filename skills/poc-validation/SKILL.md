---
name: poc-validation
description: Safely validate an authorized vulnerability hypothesis with minimal reproducible evidence, ideally using local or isolated test environments.
---

# PoC Validation

**Rule:** No Evidence, No Finding. No Verification, No Completion.

## Input
- Specific hypothesis, authorized system or lab, reproduction preconditions and claimed impact.

## Preconditions
- Confirm test authorization, scope, safety constraints and operator approval for live, state-changing or disruptive actions.
- Prefer local mocks, fixtures, minimal unit tests and sanitized data.

## Steps
1. Define expected secure behavior and measurable deviation.
2. Establish a baseline and identify confounding factors.
3. Design the smallest non-destructive test that can distinguish the hypothesis.
4. Execute only permitted tests; record actual results without embellishment.
5. Repeat safely if needed and vary one condition at a time.
6. Assess whether observed behavior establishes the stated security impact.

## Evidence
- Sanitized test cases, responses or logs, environment details, timestamps where useful, and reproducibility conditions.

## Verification
- Rule out caching, mocks, misconfiguration, permissions and ordinary application behavior as alternative causes.
- Check artifact contents, provenance, and whether results prove the narrow claim.

## Exit Criteria
- `CONFIRMED` only if reproducible evidence supports claimed impact.
- Otherwise `NEEDS_VALIDATION`, `HYPOTHESIS`, or `REJECTED`, with explicit limitations.

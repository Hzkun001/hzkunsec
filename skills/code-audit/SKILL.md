---
name: code-audit
description: Analyze authorized source code for security-relevant data flows, trust boundaries and candidate vulnerabilities. Use when reviewing repositories or code excerpts.
---

# Code Audit

**Rule:** No Evidence, No Finding. No Verification, No Completion.

## Input
- Authorized source tree or excerpts, objective, application context and entry points.

## Preconditions
- Confirm code provenance and authorization; identify language/runtime and relevant framework.
- Do not execute unknown code or run active tests without operator approval.

## Steps
1. Identify attacker-controlled inputs and boundaries.
2. Trace sources through transformations, checks, and sensitive sinks.
3. Inspect defenses and assumptions (authz, parsing, validation, encoding, isolation).
4. Record exact file paths, line ranges and data-flow evidence.
5. Form minimal hypotheses with plausible prerequisites and counterarguments.
6. Hand off ambiguous claims to `poc-validation`; avoid claiming code patterns are exploits.

## Evidence
- Source-to-sink trace, cited file/line locations, relevant configuration, reproduction prerequisites.

## Verification
- Re-read cited locations; inspect sanitization and call sites; check reachability and alternative paths.
- Evaluate whether the claimed impact follows from the actual deployment context.

## Exit Criteria
- Each claim labeled `HYPOTHESIS` or `NEEDS_VALIDATION` unless separately reproduced.
- Unknowns and verification handoff recorded explicitly.

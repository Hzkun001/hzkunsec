---
name: evidence-review
description: Independently review security findings for evidence integrity, reproduction quality, alternative explanations and scope compliance before reporting.
---

# Evidence Review

**Rule:** No Evidence, No Finding. No Verification, No Completion.

## Input
- Draft finding, authorized scope, sanitized evidence and reproduction notes.

## Preconditions
- Review evidence without assuming the original investigator is correct.
- Do not run new live tests without separate approval.

## Steps
1. Restate the **precise** security claim and prerequisites.
2. Match each factual assertion to artifacts; identify missing or ambiguous evidence.
3. Verify provenance, integrity and relevance of provided artifacts, not just file existence.
4. Challenge exploitability, reachability, permissions, environment assumptions and impact.
5. Record independent counterarguments and reproduction blockers.
6. Recommend narrowing, further validation or rejecting unsupported claims.

## Evidence
- Claim-to-evidence matrix; flagged gaps and reproducibility assessment.

## Verification
- Review source excerpts, logs and test conditions directly where available.
- Model agreement is not independent technical reproduction.

## Exit Criteria
- Clear recommendation: `CONFIRMED`, `NEEDS_VALIDATION`, `HYPOTHESIS`, or `REJECTED`.
- Every material claim mapped to evidence or marked unsupported.

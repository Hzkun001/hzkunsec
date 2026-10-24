---
name: recon
description: Map an explicitly authorized application's attack surface and prepare an evidence-led research plan without intrusive testing. Use for scoped reconnaissance and entry-point inventory.
---

# Recon

**Rule:** No Evidence, No Finding. No Verification, No Completion.

## Input
- Written or otherwise explicit authorized scope, app inventory, and objectives.

## Preconditions
- Confirm target boundaries, permitted methods, rate limits and exclusions. Stop if unknown.
- Obtain human approval for any live enumeration that may be intrusive.

## Steps
1. Start with supplied architecture, routes, API specs, source files, or documented endpoints.
2. Identify entry points, trust boundaries, authentication states, and exposed functionality.
3. Note ownership/scope per asset; do not assume subdomains or third parties are included.
4. Prioritize research questions based on evidence rather than broad automated scanning.
5. Track outstanding questions in a copy of `../../templates/progress.md` within the investigator workspace.

## Evidence
- A sanitized asset/endpoint inventory, references to supplied files, and scope rationale.

## Verification
- Check ownership and scope against authorization; compare observed endpoints with documentation.
- Separate inferred attack surface from independently verified assets.

## Exit Criteria
- Inventory and unknowns documented; no confirmed vulnerability asserted by reconnaissance alone.
- Status `HYPOTHESIS` or `NEEDS_VALIDATION` when subsequent testing is required.

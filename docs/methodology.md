# Investigation methodology

## Universal workflow

1. **Input:** identify objective and available materials.
2. **Preconditions:** establish ownership or written scope, boundaries, rate limits, and approvals.
3. **Steps:** perform the smallest useful action, record observations, and avoid unnecessary branching.
4. **Evidence:** collect sanitized, attributable inputs/outputs and reproduction conditions.
5. **Verification:** test alternative explanations, repeat safely, and check whether evidence matches the impact claim.
6. **Exit criteria:** report `HYPOTHESIS`, `NEEDS_VALIDATION`, `CONFIRMED`, or `REJECTED` with limitations.

## Human checkpoints

Ask the operator before anything intrusive, state-changing, potentially disruptive, or outside the agreed procedure. Stop if authorization is ambiguous. Prefer code inspection, mocks, and local test environments for initial proof.

## Completion controls

- A task is not complete merely because a checklist item is checked or a file exists.
- Verify contents, timestamps/context, provenance and reproducibility when applicable.
- Record what was **not** tested.
- Keep one open hypothesis per independent claim rather than combining unrelated issues.
- Do not treat an inconclusive result as proof of safety.

## Anti-rabbit-hole guidance

Define a time or evidence budget for exploratory paths. If no new evidence emerges, summarize the blocker and change strategy only with an articulated reason.

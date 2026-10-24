# hzkunsec

**Evidence-driven offensive security Agent Skills** for authorized security research and bug bounty workflows.

> **No Evidence, No Finding. No Verification, No Completion.**

hzkunsec provides four small, composable skills for AI coding agents. It is designed for human-supervised investigations, not autonomous exploitation. An AI-generated claim, scanner alert, or a nonempty output file is never sufficient proof of a vulnerability.

## Skills

| Skill | Purpose | Entry point |
| --- | --- | --- |
| Recon | Map approved attack surface and document assumptions | [`skills/recon/SKILL.md`](skills/recon/SKILL.md) |
| Code Audit | Trace untrusted input to security-relevant operations | [`skills/code-audit/SKILL.md`](skills/code-audit/SKILL.md) |
| PoC Validation | Validate hypotheses in a safe, reproducible way | [`skills/poc-validation/SKILL.md`](skills/poc-validation/SKILL.md) |
| Evidence Review | Challenge claims and verify evidence provenance | [`skills/evidence-review/SKILL.md`](skills/evidence-review/SKILL.md) |

## Installation

Clone the repo:

```bash
git clone https://github.com/YOUR_USERNAME/hzkunsec.git
cd hzkunsec
python3 scripts/validate_skills.py
```

Replace `YOUR_USERNAME` with the GitHub owner after publishing. You can also install directly from a local checkout.

**Claude Code:** copy or symlink selected skill directories to `~/.claude/skills/`, or `.claude/skills/` inside a project. For example:

```bash
mkdir -p ~/.claude/skills
cp -R skills/code-audit ~/.claude/skills/
```

**Codex:** copy or symlink selected skill directories to `~/.agents/skills/` (or the skills location supported by your Codex installation). Example:

```bash
mkdir -p ~/.agents/skills
cp -R skills/code-audit ~/.agents/skills/
```

**OpenCode:** use the Agent Skills directory supported by your installed version (typically `.opencode/skills/` for project-local skills); consult your version's documentation.

Skills should be **invoked on demand**. Do not preload every skill in the same conversation.

## How to use

In an authorized project, ask your agent:

> Use the code-audit skill to review this local project's authentication boundary. Record source-to-sink evidence, hypotheses, and unresolved questions; do not claim confirmed impact without validation.

Each skill follows **Input → Preconditions → Steps → Evidence → Verification → Exit Criteria**. See [methodology](docs/methodology.md), [architecture](docs/architecture.md), and a [fictional example](examples/investigation-example.md).

## Ground truth and state

- Prefer primary documentation and observed artifacts to model intuition; see [ground truth](docs/ground-truth.md).
- Copy [`templates/progress.md`](templates/progress.md) into the *investigation workspace* when persistent state is useful; don't track targets or secrets in this repository.
- Use [`templates/finding-report.md`](templates/finding-report.md) to document only what was observed.

## Responsible use

Only perform tests with explicit authorization, within program rules and agreed rate limits. Obtain operator approval before intrusive or state-changing actions. Avoid harvesting secrets, persistence, or scope expansion. See [SECURITY.md](SECURITY.md).

## Contributing

Contributions are welcome; see [CONTRIBUTING.md](CONTRIBUTING.md). All skills must pass `python3 scripts/validate_skills.py`.

## License

MIT — see [LICENSE](LICENSE).

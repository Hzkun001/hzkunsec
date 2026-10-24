# hzkunsec

![hzkunsec — evidence-driven security skills](assets/banner.svg)

Four Agent Skills for authorized security research, with human oversight.

**No Evidence, No Finding. No Verification, No Completion.**

## Skills

| Skill | Purpose |
| --- | --- |
| [Recon](skills/recon/SKILL.md) | Map approved attack surface and record unknowns. |
| [Code Audit](skills/code-audit/SKILL.md) | Trace untrusted input across security boundaries. |
| [PoC Validation](skills/poc-validation/SKILL.md) | Test hypotheses with minimal, reproducible evidence. |
| [Evidence Review](skills/evidence-review/SKILL.md) | Check provenance, alternative explanations and claimed impact. |

## Install

```bash
git clone https://github.com/Hzkun001/hzkunsec.git
cd hzkunsec
python3 scripts/validate_skills.py
```

Copy the skill folders you need into your agent's skills directory. For example:

```bash
# Codex
mkdir -p ~/.agents/skills
cp -R skills/code-audit ~/.agents/skills/

# Claude Code
mkdir -p ~/.claude/skills
cp -R skills/code-audit ~/.claude/skills/
```

For OpenCode, use the skills directory supported by your installed version.
Load one relevant skill on demand.

## Use

> Use code-audit to review this authorized local project's authentication boundary. Record source-to-sink evidence and unresolved questions. Validate impact before confirming a finding.

Every skill follows Input → Preconditions → Steps → Evidence → Verification → Exit Criteria. Scanner alerts and model agreement are not proof. Keep hypotheses separate from observations and report what remains untested.

Stay within explicit authorization and obtain operator approval before intrusive or state-changing tests. Store target details and secrets outside this repository.

## Reference

- [Methodology](docs/methodology.md) · [Ground truth](docs/ground-truth.md) · [Architecture](docs/architecture.md) · [Response format](docs/response-format.md)
- [Finding report](templates/finding-report.md) · [Progress template](templates/progress.md) · [Fictional example](examples/investigation-example.md)
- [Contributing](CONTRIBUTING.md) · [Security](SECURITY.md) · [MIT license](LICENSE)

Icon: Lucide [scan-line](https://github.com/lucide-icons/lucide/blob/7faf87628a1ad6175975bc595344337ce14a7db4/icons/scan-line.svg), used under the [Lucide license](assets/LICENSE.lucide). See [asset sources](assets/README.md).

<p align="center">
  <img src="assets/logo.svg" width="112" height="112" alt="hzkunsec logo">
</p>

<h1 align="center">hzkunsec</h1>

![hzkunsec — evidence-driven security skills](assets/banner.svg)

Four Agent Skills for authorized security research, with human oversight.

**No Evidence, No Finding. No Verification, No Completion.**

## Skills

| Skill | Purpose |
| --- | --- |
| <img src="assets/icons/radar.svg" width="20" height="20" alt=""> [Recon](skills/recon/SKILL.md) | Map approved attack surface and record unknowns. |
| <img src="assets/icons/code-xml.svg" width="20" height="20" alt=""> [Code Audit](skills/code-audit/SKILL.md) | Trace untrusted input across security boundaries. |
| <img src="assets/icons/flask-conical.svg" width="20" height="20" alt=""> [PoC Validation](skills/poc-validation/SKILL.md) | Test hypotheses with minimal, reproducible evidence. |
| <img src="assets/icons/file-check.svg" width="20" height="20" alt=""> [Evidence Review](skills/evidence-review/SKILL.md) | Check provenance, alternative explanations and claimed impact. |

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

Icons by Lucide, used under the [Lucide license](assets/LICENSE.lucide). See [asset sources](assets/README.md).

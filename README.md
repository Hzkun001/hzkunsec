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

Clone once and validate (macOS/Linux or a POSIX shell):

```bash
git clone https://github.com/Hzkun001/hzkunsec.git
cd hzkunsec
python3 scripts/validate_skills.py
```

The commands below install these skills into an **existing harness**; they do not install the harness itself. Run global installation commands from this checkout. Choose one location per harness to avoid duplicate skill names. Check for existing same-named skills before copying; `cp -R` can overwrite them.

## Agent harnesses

Examples use `code-audit`. Replace it with `recon`, `poc-validation`, or `evidence-review` as needed. Enter invocation examples in the **agent's chat**, not your shell. Install all four to make them discoverable; load one relevant skill at a time.

| Harness | Project directory | Invocation |
| --- | --- | --- |
| Codex | `.agents/skills/` | `$code-audit` |
| Claude Code | `.claude/skills/` | `/code-audit` |
| Antigravity | `.agents/skills/` | Mention `code-audit`; App/CLI also support `/code-audit` |
| OpenCode | `.opencode/skills/` | Ask it to load `code-audit` with the skill tool |
| Oh My Pi (OMP) | `.omp/skills/` | `/skill:code-audit` |
| Pi | `.agents/skills/` | `/skill:code-audit` |
| Cursor | `.cursor/skills/` | Type `/` and select `code-audit` |
| GitHub Copilot | `.github/skills/` | Ask it to use `code-audit` in agent mode |

<details>
<summary>Codex</summary>

Install for your user:

```bash
mkdir -p ~/.agents/skills
cp -R skills/* ~/.agents/skills/
```

Invoke in Codex CLI or the IDE extension:

```text
$code-audit Review this authorized local project's authentication boundary. Record source-to-sink evidence and unresolved questions.
```

Use `/skills` or the `$` selector to find the skill. In a desktop interface with an `@` skill picker, select `code-audit` there, or explicitly ask to use it. If discovery does not refresh, restart the session.

[Official documentation](https://learn.chatgpt.com/docs/build-skills)

</details>

<details>
<summary>Claude Code</summary>

Install for your user:

```bash
mkdir -p ~/.claude/skills
cp -R skills/* ~/.claude/skills/
```

Invoke:

```text
/code-audit Review this authorized local project's authentication boundary. Record source-to-sink evidence and unresolved questions.
```

Type `/` to find the skill. Claude can also select it when you explicitly mention its name in a normal prompt.

[Official documentation](https://code.claude.com/docs/en/skills)

</details>

<details>
<summary>Antigravity — App, IDE and CLI</summary>

For the App or standalone IDE, install globally:

```bash
mkdir -p ~/.gemini/config/skills
cp -R skills/* ~/.gemini/config/skills/
```

For the CLI, use its separate global directory:

```bash
mkdir -p ~/.gemini/antigravity-cli/skills
cp -R skills/* ~/.gemini/antigravity-cli/skills/
```

Invoke with a normal prompt on any surface:

```text
Use the code-audit skill to review this authorized local project's authentication boundary. Record source-to-sink evidence and unresolved questions.
```

The App and CLI also support `/code-audit`. In the standalone IDE, inspect discovered skills in Customizations. Current versions use `.agents/skills/` for workspace skills; `.agent/skills/` is a legacy compatible location.

[Official documentation](https://www.antigravity.google/docs/skills)

</details>

<details>
<summary>OpenCode</summary>

Install for your user:

```bash
mkdir -p ~/.config/opencode/skills
cp -R skills/* ~/.config/opencode/skills/
```

Invoke with a prompt:

```text
Load the code-audit skill using your skill tool, then review this authorized local project's authentication boundary. Record source-to-sink evidence and unresolved questions.
```

OpenCode 1 loads skills through its `skill` tool; installing a skill does not create a `/code-audit` command. OpenCode 2 also documents `@code-audit` mentions. Use the normal prompt above across versions. Ensure the agent is permitted to use the skill tool.

[OpenCode 1 documentation](https://opencode.ai/docs/skills/) · [OpenCode 2 documentation](https://dev.opencode.ai/v2/docs/skills/)

</details>

<details>
<summary>Oh My Pi (OMP)</summary>

Here, OMP means [Oh My Pi](https://github.com/can1357/oh-my-pi). Use a project-local installation to avoid user-profile directory differences. From the root of the project you want to investigate, replace `/path/to/hzkunsec` with your actual checkout path:

```bash
mkdir -p .omp/skills
cp -R /path/to/hzkunsec/skills/* .omp/skills/
```

Start OMP in that project and invoke:

```text
/skill:code-audit Review this authorized local project's authentication boundary. Record source-to-sink evidence and unresolved questions.
```

If skill commands are disabled, enable `skills.enableSkillCommands` in OMP settings, or ask the agent to read and use `skill://code-audit`.

[Official documentation](https://github.com/can1357/oh-my-pi/blob/main/docs/skills.md)

</details>

<details>
<summary>Pi</summary>

Install for your user using Pi's supported shared Agent Skills directory:

```bash
mkdir -p ~/.agents/skills
cp -R skills/* ~/.agents/skills/
```

If already installed there for Codex, reuse that copy. Start a new Pi session and invoke:

```text
/skill:code-audit Review this authorized local project's authentication boundary. Record source-to-sink evidence and unresolved questions.
```

Pi reads the full skill when invoked. Its `enableSkillCommands` setting controls command discovery in the interactive menu.

[Official documentation](https://github.com/badlogic/pi-mono/blob/main/packages/coding-agent/docs/skills.md)

</details>

<details>
<summary>Cursor</summary>

Install for your user:

```bash
mkdir -p ~/.cursor/skills
cp -R skills/* ~/.cursor/skills/
```

In Agent chat, type `/`, select `code-audit`, and add:

```text
Review this authorized local project's authentication boundary. Record source-to-sink evidence and unresolved questions.
```

Check Customize → Skills for discovery. For remote/cloud agents, use project skills committed to the target repository or configure Cursor's supported sync; local installation alone does not make the skill available remotely.

[Official documentation](https://cursor.com/docs/skills)

</details>

<details>
<summary>GitHub Copilot</summary>

For Copilot CLI, install personal skills:

```bash
mkdir -p ~/.copilot/skills
cp -R skills/* ~/.copilot/skills/
```

For an IDE agent or cloud agent, use the project installation below with `.github/skills/`. Commit project skills to the target repository when the cloud agent needs them.

Invoke in an agent session:

```text
Use the code-audit skill to review this authorized local project's authentication boundary. Record source-to-sink evidence and unresolved questions.
```

In Copilot CLI, you can explicitly mention `/code-audit` in your prompt. Run `/skills reload` after installing, then `/skills info code-audit` to check its path. Support depends on the Copilot surface and version. A personal CLI installation is not automatically available to a cloud agent.

[Official documentation](https://docs.github.com/en/copilot/concepts/customizations/agent-skills) · [CLI setup and invocation](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-skills)

</details>

### Project-only installation

For a harness in the table, use its project directory instead of the global location. For example, from the **root of the project you want to investigate**:

```bash
mkdir -p .agents/skills
cp -R /path/to/hzkunsec/skills/* .agents/skills/
```

Replace `/path/to/hzkunsec` with your actual checkout path and `.agents/skills` with the harness directory from the table. Do not copy the enclosing `skills` folder: the result must be `<harness-directory>/code-audit/SKILL.md`.

To install only one skill, copy `skills/code-audit` instead of `skills/*`. Keep the checkout available for shared [templates](templates/progress.md) and [methodology](docs/methodology.md); these live outside the individual skill folders. Re-run the copy command after updating this checkout if you want to update installed copies.

### Check discovery

Start a new session in the target project and ask the agent to list the available hzkunsec skills and show the path of the skill it loaded. Confirm that it actually reads `SKILL.md` before following the workflow. If missing, check the destination layout, duplicate names, disabled skill settings and the harness version. These instructions follow upstream documentation checked on 2026-10-24; they are not a claim of end-to-end testing in every harness.

For another harness that supports Agent Skills, follow its documented discovery directory and ask it to use the skill by name. Without native support, ask it to read the checkout's `skills/code-audit/SKILL.md` directly; that is manual instruction loading, not native skill discovery.

## Use

> Use code-audit to review this authorized local project's authentication boundary. Record source-to-sink evidence and unresolved questions. Validate impact before confirming a finding.

Every skill follows Input → Preconditions → Steps → Evidence → Verification → Exit Criteria. Scanner alerts and model agreement are not proof. Keep hypotheses separate from observations and report what remains untested.

Stay within explicit authorization and obtain operator approval before intrusive or state-changing tests. Store target details and secrets outside this repository.

## Reference

- [Methodology](docs/methodology.md) · [Ground truth](docs/ground-truth.md) · [Architecture](docs/architecture.md) · [Response format](docs/response-format.md)
- [Finding report](templates/finding-report.md) · [Progress template](templates/progress.md) · [Fictional example](examples/investigation-example.md)
- [Contributing](CONTRIBUTING.md) · [Security](SECURITY.md) · [MIT license](LICENSE)

Brand lettering uses Space Grotesk ([OFL](assets/LICENSE.space-grotesk)); workflow icons use Lucide ([license](assets/LICENSE.lucide)). [Logo variants and asset sources](assets/README.md).

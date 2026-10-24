# Architecture

hzkunsec is a **collection of small skills**, not a self-driving scanner. An AI agent or human selects the smallest relevant skill; the human operator owns scope, authorization and final decisions.

```text
Human (scope, approval, acceptance)
            |
Agent harness (Claude Code / Codex / OpenCode)
            |
One selected skill (recon / code-audit / poc-validation / evidence-review)
            |
Evidence + explicit uncertainty + progress state in investigator workspace
            |
Human reviews outcome
```

Each skill loads its own minimal workflow. Common methodology and evidence principles are linked from `docs/` but not automatically injected into every context. Persistent progress is a copy of `templates/progress.md` stored **outside this repo** to avoid publishing sensitive investigation state. Multi-model review is optional; correlated mistakes are possible.

A reviewer is not a substitute for reproducing a claim. No skills should execute unauthorized intrusive actions.

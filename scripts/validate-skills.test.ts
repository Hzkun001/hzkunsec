import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync, copyFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { test } from 'node:test';
import { validateSkills } from './validate-skills.ts';

const validSkill = `---
name: sample
description: Review authorized local code.
---
# Sample
## Input
Local code.
## Preconditions
Confirm authorization.
## Steps
Trace inputs.
## Evidence
Record source locations.
## Verification
Inspect the evidence.
## Exit Criteria
Report uncertainty.
`;

function fixture(skill: string | null = validSkill) {
  const root = mkdtempSync(join(tmpdir(), 'hzkunsec-'));
  mkdirSync(join(root, 'skills', 'sample'), { recursive: true });
  mkdirSync(join(root, 'docs'));
  writeFileSync(join(root, 'README.md'), '[Guide](docs/guide.md)\n');
  writeFileSync(join(root, 'docs', 'guide.md'), '# Guide\n');
  if (skill !== null) writeFileSync(join(root, 'skills', 'sample', 'SKILL.md'), skill);
  return root;
}

test('accepts valid skills and links, including CRLF files', (t) => {
  const root = fixture(validSkill.replaceAll('\n', '\r\n'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  assert.deepEqual(validateSkills(root), { skillCount: 1, errors: [] });
});

for (const [label, skill, expected] of [
  ['no skills', null, /No skills found/],
  ['missing frontmatter', validSkill.replace(/^---\n[\s\S]*?\n---\n/, ''), /frontmatter/],
  ['wrong name', validSkill.replace('name: sample', 'name: other'), /name must match/],
  ['missing description', validSkill.replace('description: Review authorized local code.', 'description:'), /description/],
  ['missing contract section', validSkill.replace('## Verification', '## Other'), /Verification/],
  ['missing authorization', validSkill.replaceAll('authorized', 'local').replaceAll('authorization', 'scope'), /authorization/],
] as const) {
  test(`rejects ${label}`, (t) => {
    const root = fixture(skill);
    t.after(() => rmSync(root, { recursive: true, force: true }));
    assert.ok(validateSkills(root).errors.some((error) => expected.test(error)));
  });
}

test('rejects broken Markdown links and image assets in README/docs', (t) => {
  const root = fixture();
  t.after(() => rmSync(root, { recursive: true, force: true }));
  writeFileSync(join(root, 'README.md'), '[Missing](missing.md)\n![Image](missing.svg)\n<img src="logo.svg" alt="logo">\n');
  writeFileSync(join(root, 'docs', 'guide.md'), '[Missing](gone.md)\n');
  assert.equal(validateSkills(root).errors.length, 4);
});

test('ignores external URLs and anchors while resolving relative links', (t) => {
  const root = fixture();
  t.after(() => rmSync(root, { recursive: true, force: true }));
  writeFileSync(join(root, 'docs', 'guide.md'), '[Home](../README.md#skills) [Web](https://example.com) [Anchor](#guide) [Mail](mailto:example@example.com)');
  assert.deepEqual(validateSkills(root).errors, []);
});

test('CLI resolves the repository from its script path and returns failure for invalid input', (t) => {
  const root = fixture();
  t.after(() => rmSync(root, { recursive: true, force: true }));
  mkdirSync(join(root, 'scripts'));
  copyFileSync(new URL('./validate-skills.ts', import.meta.url), join(root, 'scripts', 'validate-skills.ts'));
  writeFileSync(join(root, 'package.json'), '{"type":"module"}');
  const run = () => spawnSync(process.execPath, [join(root, 'scripts', 'validate-skills.ts')], { cwd: tmpdir(), encoding: 'utf8' });
  const valid = run();
  assert.equal(valid.status, 0, valid.stderr);
  assert.match(valid.stdout, /Validation passed: 1 skills/);
  writeFileSync(join(root, 'README.md'), '[Broken](missing.md)');
  const invalid = run();
  assert.equal(invalid.status, 1);
  assert.match(invalid.stderr, /broken link/);
});

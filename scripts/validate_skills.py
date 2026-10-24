#!/usr/bin/env python3
"""Portable, dependency-free validation for hzkunsec Markdown skills."""
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
REQUIRED = ['Input', 'Preconditions', 'Steps', 'Evidence', 'Verification', 'Exit Criteria']
errors = []
skills = sorted((ROOT / 'skills').glob('*/SKILL.md'))
if not skills:
    errors.append('No skills found')

for path in skills:
    txt = path.read_text(encoding='utf-8')
    match = re.match(r'\A---\n(.*?)\n---\n', txt, re.S)
    if not match:
        errors.append(f'{path.relative_to(ROOT)}: missing YAML frontmatter')
        continue
    fields = {}
    for line in match.group(1).splitlines():
        if ':' in line:
            key, value = line.split(':', 1)
            fields[key.strip()] = value.strip()
    if fields.get('name') != path.parent.name:
        errors.append(f'{path.relative_to(ROOT)}: name must match folder')
    if not fields.get('description'):
        errors.append(f'{path.relative_to(ROOT)}: missing description')
    for heading in REQUIRED:
        if not re.search(r'^## ' + re.escape(heading) + r'\s*$', txt, re.M):
            errors.append(f'{path.relative_to(ROOT)}: missing section {heading}')
    if 'authorization' not in txt.lower() and 'authorized' not in txt.lower():
        errors.append(f'{path.relative_to(ROOT)}: missing scope/authorization guidance')

for path in [ROOT / 'README.md', *sorted((ROOT / 'docs').glob('*.md'))]:
    txt = path.read_text(encoding='utf-8')
    for target in re.findall(r'(?<!!)\[[^]]+\]\(([^)]+)\)', txt):
        if target.startswith(('https://','http://','#','mailto:')):
            continue
        if not (path.parent / target.split('#')[0]).exists():
            errors.append(f'{path.relative_to(ROOT)}: broken link {target}')

if errors:
    print('Validation failed:')
    for e in errors:
        print(' -', e)
    sys.exit(1)
print(f'Validation passed: {len(skills)} skills; README/docs local links checked')

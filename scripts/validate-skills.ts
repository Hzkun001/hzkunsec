import { existsSync, readFileSync, readdirSync, realpathSync } from 'node:fs';
import { basename, dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const required = ['Input', 'Preconditions', 'Steps', 'Evidence', 'Verification', 'Exit Criteria'];

export function validateSkills(root: string): { skillCount: number; errors: string[] } {
  const errors: string[] = [];
  const skillsDir = join(root, 'skills');
  const skills = existsSync(skillsDir)
    ? readdirSync(skillsDir, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => join(skillsDir, entry.name, 'SKILL.md'))
      .filter(existsSync).sort()
    : [];
  if (skills.length === 0) errors.push('No skills found');

  for (const path of skills) {
    const text = readFileSync(path, 'utf8').replaceAll('\r\n', '\n');
    const label = relative(root, path);
    const frontmatter = text.match(/^---\n([\s\S]*?)\n---\n/);
    if (!frontmatter) {
      errors.push(`${label}: missing YAML frontmatter`);
      continue;
    }
    const fields: Record<string, string> = {};
    for (const line of frontmatter[1].split('\n')) {
      const colon = line.indexOf(':');
      if (colon !== -1) fields[line.slice(0, colon).trim()] = line.slice(colon + 1).trim();
    }
    if (fields.name !== basename(dirname(path))) errors.push(`${label}: name must match folder`);
    if (!fields.description) errors.push(`${label}: missing description`);
    for (const heading of required) {
      if (!new RegExp(`^## ${heading}\\s*$`, 'm').test(text)) errors.push(`${label}: missing section ${heading}`);
    }
    if (!/authorization|authorized/i.test(text)) errors.push(`${label}: missing scope/authorization guidance`);
  }

  const docsDir = join(root, 'docs');
  const documents = [join(root, 'README.md'), ...(existsSync(docsDir)
    ? readdirSync(docsDir).filter((name) => name.endsWith('.md')).sort().map((name) => join(docsDir, name))
    : [])];
  for (const path of documents) {
    const text = readFileSync(path, 'utf8');
    for (const match of text.matchAll(/!?\[[^\]]*\]\(([^)]+)\)|(?:src|href)=["']([^"']+)["']/g)) {
      const target = match[1] ?? match[2];
      if (/^(https?:|#|mailto:)/.test(target)) continue;
      if (!existsSync(resolve(dirname(path), target.split('#')[0]))) {
        errors.push(`${relative(root, path)}: broken link ${target}`);
      }
    }
  }
  return { skillCount: skills.length, errors };
}

if (process.argv[1] && realpathSync(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const { skillCount, errors } = validateSkills(resolve(import.meta.dirname, '..'));
    if (errors.length > 0) {
      console.error('Validation failed:');
      for (const error of errors) console.error(` - ${error}`);
      process.exitCode = 1;
    } else {
      console.log(`Validation passed: ${skillCount} skills; README/docs local links and assets checked`);
    }
  } catch (error) {
    console.error(`Validation failed: ${error instanceof Error ? error.message : String(error)}`);
    process.exitCode = 1;
  }
}

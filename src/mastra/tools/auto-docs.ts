import fs from 'fs';
import path from 'path';

export interface DocUpdateInput {
  version: string;
  changeSummary: string;
  author: string;
  projectRoot: string;
}

export function updateProjectDocumentation(input: DocUpdateInput): { success: boolean; changelogUpdated: boolean } {
  const changelogPath = path.join(input.projectRoot, 'CHANGELOG.md');
  const timestamp = new Date().toISOString().split('T')[0];

  const entry = `\n## [${input.version}] - ${timestamp}\n- **Summary**: ${input.changeSummary}\n- **Author**: ${input.author}\n`;

  try {
    if (!fs.existsSync(changelogPath)) {
      fs.writeFileSync(changelogPath, `# Changelog\nAll notable changes to this project will be documented in this file.\n${entry}`, 'utf-8');
    } else {
      fs.appendFileSync(changelogPath, entry, 'utf-8');
    }
    return { success: true, changelogUpdated: true };
  } catch (err) {
    console.error('Failed to update CHANGELOG.md:', err);
    return { success: false, changelogUpdated: false };
  }
}

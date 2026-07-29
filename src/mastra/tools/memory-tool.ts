import fs from 'fs';
import path from 'path';
import os from 'os';

export interface MemoryEntry {
  category: 'mistake' | 'decision' | 'pattern' | 'stack_note';
  title: string;
  details: string;
  preventionRule?: string;
  project?: string;
}

const GLOBAL_MEMORY_DIR = path.join(os.homedir(), '.agent-memory', 'global');

function ensureMemoryDir(): void {
  if (!fs.existsSync(GLOBAL_MEMORY_DIR)) {
    fs.mkdirSync(GLOBAL_MEMORY_DIR, { recursive: true });
  }
}

export function readGlobalMemory(category: MemoryEntry['category']): string {
  ensureMemoryDir();
  const fileMap: Record<MemoryEntry['category'], string> = {
    mistake: 'global-mistakes-log.md',
    decision: 'global-decisions-log.md',
    pattern: 'global-pattern-library.md',
    stack_note: 'global-stack-notes.md',
  };

  const filePath = path.join(GLOBAL_MEMORY_DIR, fileMap[category]);
  if (!fs.existsSync(filePath)) {
    return `# ${category.toUpperCase()} LOG\nNo entries logged yet.`;
  }
  return fs.readFileSync(filePath, 'utf-8');
}

export function writeGlobalMemory(entry: MemoryEntry): void {
  ensureMemoryDir();
  const fileMap: Record<MemoryEntry['category'], string> = {
    mistake: 'global-mistakes-log.md',
    decision: 'global-decisions-log.md',
    pattern: 'global-pattern-library.md',
    stack_note: 'global-stack-notes.md',
  };

  const filePath = path.join(GLOBAL_MEMORY_DIR, fileMap[entry.category]);
  const timestamp = new Date().toISOString().split('T')[0];
  const formattedEntry = `\n### [${timestamp}] ${entry.title}${entry.project ? ` (${entry.project})` : ''}\n- **Details**: ${entry.details}\n${entry.preventionRule ? `- **Prevention Rule**: ${entry.preventionRule}\n` : ''}`;

  fs.appendFileSync(filePath, formattedEntry, 'utf-8');
}

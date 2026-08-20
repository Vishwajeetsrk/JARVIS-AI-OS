import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __projectRoot = resolve(dirname(__filename), '..');

export function runJarvisCLI() {
  const args = process.argv.slice(2);
  const child = spawn('npx', ['tsx', 'cli/index.ts', ...args], {
    cwd: __projectRoot,
    stdio: 'inherit',
    shell: true,
  });

  child.on('exit', (code) => {
    process.exit(code ?? 0);
  });
}

if (process.argv[1] && process.argv[1].endsWith('jarvis.ts')) {
  runJarvisCLI();
}

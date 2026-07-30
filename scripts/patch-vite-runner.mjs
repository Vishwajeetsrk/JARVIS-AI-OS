import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const file = resolve('node_modules/vite/dist/node/module-runner.js');
try {
  let content = readFileSync(file, 'utf8');
  if (content.includes('transport.timeout ?? 6e4')) {
    content = content.replace('transport.timeout ?? 6e4', 'transport.timeout ?? 300e3');
    writeFileSync(file, content);
    console.log('[patch-vite] Increased module runner timeout to 300s');
  } else {
    console.log('[patch-vite] Already patched or pattern not found');
  }
} catch {
  console.log('[patch-vite] Skipped — vite not installed yet');
}

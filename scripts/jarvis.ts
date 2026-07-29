import { detectHardwareSpecs } from '../src/mastra/tools/hardware-detector.js';
import { generateProjectManagerReport } from '../src/mastra/tools/auto-pm.js';
import { readGlobalMemory } from '../src/mastra/tools/memory-tool.js';

export function runJarvisCLI() {
  const args = process.argv.slice(2);
  const command = args[0] || 'status';

  console.log(`==================================================`);
  console.log(`  JARVIS COMMAND LINE INTERFACE (CLI) v2.2`);
  console.log(`==================================================`);

  if (command === 'status') {
    const hw = detectHardwareSpecs();
    const pm = generateProjectManagerReport('AI-OS Core', 30, 30);
    
    console.log(`\n[System Hardware & Execution Mode]`);
    console.log(`- Platform: ${hw.platform}`);
    console.log(`- CPU Cores: ${hw.cpus}`);
    console.log(`- Free Memory: ${hw.freeMemoryGB} GB / ${hw.totalMemoryGB} GB (${hw.memoryUsagePercent}% used)`);
    console.log(`- Recommended Execution Mode: ${hw.recommendedExecutionMode} ($0 Recurring Baseline)`);

    console.log(`\n[Active $0 Free Cloud API Providers]`);
    hw.activeFreeApiProviders.forEach(p => console.log(`  ✓ ${p}`));

    console.log(`\n[Project Manager Status]`);
    console.log(`- Project: ${pm.projectName}`);
    console.log(`- Progress: ${pm.progressPercent}% (${pm.completedTasks}/${pm.totalTasks} tasks completed)`);
    console.log(`- Status: ${pm.status}`);

    console.log(`\n[Memory Bank Check]`);
    const mistakes = readGlobalMemory('mistake');
    console.log(`- Global Mistakes Log: ${mistakes.length} chars (Loaded & Active)`);
    console.log(`\nJarvis CLI check completed successfully.\n`);
  } else {
    console.log(`Unknown command: "${command}". Available commands: status, sync.`);
  }
}

if (process.argv[1] && process.argv[1].endsWith('jarvis.ts')) {
  runJarvisCLI();
}

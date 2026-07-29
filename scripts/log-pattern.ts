import { writeGlobalMemory } from '../src/mastra/tools/memory-tool.js';

writeGlobalMemory({
  category: 'pattern',
  title: 'Standard Enterprise Workspace Folder Taxonomy',
  details: 'Organized repository tree into docs/ (product, architecture, brand, security, setup, tasks, agents, prompts, knowledge), registries/, knowledge/, prompts/, src/mastra/, brand/, scripts/, archive/, and GitHub Repo/ Tier 0-10.',
  project: 'AI-OS'
});

console.log('Logged workspace taxonomy pattern to global memory bank.');

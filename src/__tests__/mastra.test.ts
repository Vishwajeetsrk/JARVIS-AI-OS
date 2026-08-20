import { describe, it, expect } from 'vitest';
import { detectHardwareSpecs } from '../mastra/tools/hardware-detector.js';
import { calculateExecutionCost } from '../mastra/tools/cost-tracker.js';
import { generateProjectManagerReport } from '../mastra/tools/auto-pm.js';
import { triggerN8nWorkflow } from '../mastra/tools/n8n-bridge.js';
import { generateSeoMetadata } from '../mastra/tools/seo-generator.js';
import {
  readFile,
  writeFile,
  copyFile,
  renameFile,
  deleteFile,
  scanDirectory,
  searchFiles,
} from '../mastra/tools/file-operations.js';
import { executeDeepResearch } from '../mastra/tools/research-engine.js';

describe('JARVIS AI OS — Mastra TS Engine Tools', () => {
  it('detects hardware specs accurately', () => {
    const specs = detectHardwareSpecs();
    expect(specs).toHaveProperty('platform');
    expect(specs).toHaveProperty('cpus');
    expect(specs.totalMemoryGB).toBeGreaterThan(0);
  });

  it('calculates execution token costs correctly', () => {
    const cost = calculateExecutionCost({
      projectName: 'JARVIS-Test',
      modelId: 'claude-3-5-sonnet',
      inputTokens: 1000,
      outputTokens: 500,
    });
    expect(cost.estimatedCostUSD).toBeGreaterThan(0);
    expect(cost.model).toBe('claude-3-5-sonnet');
  });

  it('generates auto project manager reports', () => {
    const report = generateProjectManagerReport('Sprint 1', 8, 10);
    expect(report.progressPercent).toBe(80);
    expect(report.status).toBe('ON_TRACK');
  });

  it('triggers n8n workflow bridge safely', async () => {
    const result = await triggerN8nWorkflow({
      workflowName: 'agencyos_invoicing',
      payload: { invoiceId: 'inv_123', amount: 5000 },
    });
    expect(result.success).toBe(true);
    expect(result.message).toContain('agencyos_invoicing');
  });

  it('generates technical SEO metadata and sitemap', async () => {
    const seo = await generateSeoMetadata({
      appName: 'JARVIS AI OS',
      baseUrl: 'https://jarvis.ai',
      routes: ['/', '/console', '/skills'],
      description: 'Autonomous AI Operating System',
      keywords: ['AI OS', 'agents'],
    });
    expect(seo.sitemapXml).toContain('https://jarvis.ai/');
    const jsonLd = JSON.parse(seo.jsonLdSchema);
    expect(jsonLd['@type']).toBe('SoftwareApplication');
  });

  describe('Autonomous File Operations & Research Engine', () => {
    const testFile = 'data/test-jarvis-ops.txt';
    const copyTarget = 'data/test-jarvis-copy.txt';
    const renameTarget = 'data/test-jarvis-renamed.txt';

    it('performs write, read, copy, rename, and delete lifecycle', async () => {
      // 1. Write file
      const writeRes = await writeFile(testFile, 'JARVIS AI OS: Autonomous file engine active.\nLine 2');
      expect(writeRes.ok).toBe(true);

      // 2. Read file
      const readRes = await readFile(testFile, 1, 1);
      expect(readRes.ok).toBe(true);
      expect(readRes.content).toContain('JARVIS AI OS');

      // 3. Copy file
      const copyRes = await copyFile(testFile, copyTarget);
      expect(copyRes.ok).toBe(true);

      // 4. Rename file
      const renameRes = await renameFile(copyTarget, renameTarget);
      expect(renameRes.ok).toBe(true);

      // 5. Scan directory
      const scanRes = await scanDirectory('data', 1);
      expect(scanRes.ok).toBe(true);
      expect(scanRes.totalFiles).toBeGreaterThan(0);

      // 6. Search files
      const searchRes = await searchFiles('Autonomous file engine', 'data');
      expect(searchRes.ok).toBe(true);
      expect(searchRes.matches.length).toBeGreaterThan(0);

      // 7. Clean up test files
      await deleteFile(testFile);
      await deleteFile(renameTarget);
    });

    it('executes deep research and produces persistent skill content', async () => {
      const research = await executeDeepResearch({
        topic: 'AI Voice Command Center',
        category: 'web-design',
        targetFormat: 'website',
      });

      expect(research.topic).toBe('AI Voice Command Center');
      expect(research.keyRequirements.length).toBeGreaterThan(0);
      expect(research.suggestedSkillName).toContain('ai-voice-command-center');
      expect(research.skillContent).toContain('# AI Voice Command Center');
    });
  });
});

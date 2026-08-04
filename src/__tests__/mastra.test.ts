import { describe, it, expect } from 'vitest';
import { detectHardwareSpecs } from '../mastra/tools/hardware-detector.js';
import { calculateExecutionCost } from '../mastra/tools/cost-tracker.js';
import { generateProjectManagerReport } from '../mastra/tools/auto-pm.js';
import { triggerN8nWorkflow } from '../mastra/tools/n8n-bridge.js';
import { generateSeoMetadata } from '../mastra/tools/seo-generator.js';

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
});

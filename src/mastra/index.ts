import { agentRegistry } from './agents/index.js';
import { runGoldenFlow } from './workflows/golden-flow.js';
import { readGlobalMemory, writeGlobalMemory } from './tools/memory-tool.js';
import { triggerN8nWorkflow } from './tools/n8n-bridge.js';
import { detectHardwareSpecs } from './tools/hardware-detector.js';
import { calculateExecutionCost } from './tools/cost-tracker.js';
import { updateProjectDocumentation } from './tools/auto-docs.js';
import { generateProjectManagerReport } from './tools/auto-pm.js';
import { runOpenHandsTask } from './tools/openhands-runner.js';
import { processAgencyOSBillingWebhook } from './tools/agencyos-billing-webhook.js';
import { auditPullRequestSecurity } from './tools/test-agent-pr-gate.js';
import { generateSeoMetadata } from './tools/seo-generator.js';
import { evaluateAgentFrameworks } from './tools/framework-evaluator.js';

export const mastraAIOS = {
  name: "Vishwajeet AI Operating System (AI-OS)",
  version: "2.2.0-Governance-Complete",
  agents: agentRegistry,
  workflows: {
    runGoldenFlow
  },
  tools: {
    readGlobalMemory,
    writeGlobalMemory,
    triggerN8nWorkflow,
    detectHardwareSpecs,
    calculateExecutionCost,
    updateProjectDocumentation,
    generateProjectManagerReport,
    runOpenHandsTask,
    processAgencyOSBillingWebhook,
    auditPullRequestSecurity,
    generateSeoMetadata,
    evaluateAgentFrameworks
  }
};

export async function main() {
  console.log(`Starting ${mastraAIOS.name} v${mastraAIOS.version}...`);

  // Detect Hardware & Memory Profile
  const hw = detectHardwareSpecs();
  console.log(`[Hardware Detector] Platform: ${hw.platform} | CPU Cores: ${hw.cpus} | Memory: ${hw.freeMemoryGB}GB free / ${hw.totalMemoryGB}GB total (${hw.memoryUsagePercent}% used) | Recommended Mode: ${hw.recommendedExecutionMode}`);

  // Test PR Security Audit Gate
  const prAudit = await auditPullRequestSecurity({
    prNumber: 42,
    author: "openhands-agent",
    filesChanged: ["src/components/PaymentModal.tsx"],
    codeDiff: "const validatedAmount = zod.number().parse(input.amount);"
  });
  console.log(`[test-agent PR Gate] PR #${prAudit.prNumber} Status: ${prAudit.status} | Security Score: ${prAudit.securityScore}/100`);

  // Test Technical SEO Generator
  const seoResult = await generateSeoMetadata({
    appName: "Learnify AI",
    baseUrl: "https://learnifyai.com",
    routes: ["/", "/courses", "/pricing", "/about"],
    description: "AI-driven learning platform for personalized student success.",
    keywords: ["AI education", "personalized learning", "Learnify AI"]
  });
  console.log(`[seo-agent Generator] Sitemap generated (${seoResult.sitemapXml.length} chars) | JSON-LD schema ready.`);

  // Test Framework Benchmark Evaluator
  const benchmarks = evaluateAgentFrameworks();
  console.log(`[Framework Evaluator] Benchmark matrix evaluated (${benchmarks.length} frameworks). Top recommended: ${benchmarks[0].framework}`);

  // OpenHands Sandbox Coding Execution Test
  const ohResult = await runOpenHandsTask({
    taskTitle: "Refactor UI Component Theme Tokens",
    instructions: "Apply clean HSL CSS variables to Card component.",
    targetDirectory: "./src/components",
    maxIterations: 5
  });
  console.log(`[OpenHands Task] Status: ${ohResult.status} | Files Modified: ${ohResult.filesModified.join(', ')}`);

  // AgencyOS Razorpay Billing Webhook Test
  const billingResult = await processAgencyOSBillingWebhook({
    event: "payment.captured",
    paymentId: "pay_xyz12345",
    orderId: "order_abc98765",
    amountINR: 15000,
    clientEmail: "client@agencyos.in",
    clientName: "AgencyOS Client",
    signature: "sig_validated_zod"
  });
  console.log(`[AgencyOS Billing] Status: ${billingResult.success ? 'SUCCESS' : 'FAILED'} | Payment ID: ${billingResult.paymentId}`);

  // Auto Project Manager Progress Report
  const pmReport = generateProjectManagerReport('AI-OS Core', 30, 30);
  console.log(`[Auto PM] Progress: ${pmReport.progressPercent}% (${pmReport.completedTasks}/${pmReport.totalTasks} tasks) | Status: ${pmReport.status}`);

  // Auto Documentation Update
  updateProjectDocumentation({
    version: '2.2.0',
    changeSummary: 'Deployed PR Security Audit Gate, Technical SEO Generator, and Multi-Agent Framework Evaluator.',
    author: 'ceo-agent & test-agent',
    projectRoot: 'd:/Team of Vishwajeet'
  });
  console.log(`[Auto Docs] CHANGELOG.md updated successfully.`);

  const sampleTask = {
    taskTitle: "Deploy PR Security Gate, SEO Generator & Framework Evaluator",
    description: "Verify automated PR audit gates, JSON-LD schema generation, and framework benchmarking.",
    projectName: "AI-OS"
  };
  const result = await runGoldenFlow(sampleTask);
  console.log("Execution Result Summary:", JSON.stringify(result, null, 2));
}

if (process.argv[1] && process.argv[1].endsWith('index.ts')) {
  main().catch(console.error);
}

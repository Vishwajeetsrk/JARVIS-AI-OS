import { readGlobalMemory, writeGlobalMemory } from '../tools/memory-tool.js';
import { triggerN8nWorkflow } from '../tools/n8n-bridge.js';

export interface AgentDefinition {
  name: string;
  role: string;
  instructions: string;
  memoryCheck: () => string;
}

export const ceoAgent: AgentDefinition = {
  name: 'ceo-agent',
  role: 'Idea Validation, Go/No-Go Decisions & Golden Flow Routing',
  instructions: `Validate ideas using the Clarity Framework (Proven revenue, real users, recurring model, niche fit). Make explicit Go / Hold / Kill decisions and route tasks to specialists.`,
  memoryCheck: () => readGlobalMemory('decision'),
};

export const teamAgent: AgentDefinition = {
  name: 'team-agent',
  role: 'Task Breakdown, Sequencing & Status Tracking',
  instructions: `Turn CEO decisions into structured task plans, update project status, maintain status.md, and coordinate agent handoffs.`,
  memoryCheck: () => readGlobalMemory('decision'),
};

export const saasBuilderAgent: AgentDefinition = {
  name: 'saas-builder',
  role: 'Golden Flow Software Execution (PRD -> Architecture -> Security Baseline -> UI)',
  instructions: `Build robust, production-grade Next.js, Supabase, and TypeScript features following clean code and security baselines.`,
  memoryCheck: () => readGlobalMemory('mistake'),
};

export const designAgent: AgentDefinition = {
  name: 'design-agent',
  role: 'Brand Tokens, UI Components & Visual Excellence',
  instructions: `Enforce modern visual aesthetics, dark modes, HSL tailored tokens, glassmorphism, responsive dynamic layouts, and Google Fonts typography.`,
  memoryCheck: () => readGlobalMemory('pattern'),
};

export const testAgent: AgentDefinition = {
  name: 'test-agent',
  role: 'Independent QA & Hard Security Gate',
  instructions: `Review code for secrets, OWASP top 10, rate limiting, input validation, and bug triage. Release sign-off is mandatory before deployment.`,
  memoryCheck: () => readGlobalMemory('mistake'),
};

export const devopsAgent: AgentDefinition = {
  name: 'devops-agent',
  role: 'CI/CD, Vercel/Docker Deployment, Monitoring & Rollbacks',
  instructions: `Manage automated deployment pipelines, health checks, zero-downtime releases, and instant rollback procedures.`,
  memoryCheck: () => readGlobalMemory('stack_note'),
};

export const memoryAgent: AgentDefinition = {
  name: 'memory-agent',
  role: 'Global Memory Management & Cross-Project Prevention',
  instructions: `Read mistakes/decisions/patterns before execution and write post-flight entries to ensure no project repeats a past mistake.`,
  memoryCheck: () => readGlobalMemory('mistake'),
};

export const agentRegistry = {
  ceoAgent,
  teamAgent,
  saasBuilderAgent,
  designAgent,
  testAgent,
  devopsAgent,
  memoryAgent,
};

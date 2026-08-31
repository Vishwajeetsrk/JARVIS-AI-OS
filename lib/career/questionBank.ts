import { ApplicationAnswer } from "./types";

/**
 * PRE-APPROVED APPLICATION QUESTION & ANSWER BANK
 *
 * Stored answers that can be automatically suggested or autofilled during job applications.
 */

export const INITIAL_QUESTION_BANK: ApplicationAnswer[] = [
  {
    id: "ans_01",
    questionPattern: "Why are you interested in this role / company?",
    approvedAnswer: "I am passionate about building production-grade agentic AI systems and reactive full-stack web applications. My hands-on experience developing JARVIS AI OS and Learnify AI directly matches your stack (React, Next.js, TypeScript, and multi-model LLM orchestration). I thrive on solving complex technical challenges, writing clean, modular code, and shipping high-impact products.",
    category: "general",
    timesUsed: 14,
    lastUsedAt: "2026-08-30",
  },
  {
    id: "ans_02",
    questionPattern: "Describe a complex technical or AI project you have built.",
    approvedAnswer: "I architected JARVIS AI OS, an autonomous operating system powered by 18 specialist agent personas. The application features a 60 FPS hardware-accelerated 3D particle orb built with Three.js/WebGL, a multi-tier Context Engine with vector memory recall, and automated human-in-the-loop approval gates for secure tool execution. The full stack uses React 19, Next.js 15, TypeScript, Supabase pgvector, and Groq/Gemini APIs.",
    category: "ai_project",
    timesUsed: 12,
    lastUsedAt: "2026-08-31",
  },
  {
    id: "ans_03",
    questionPattern: "What is your current notice period?",
    approvedAnswer: "Immediate / 15 Days (Flexible depending on onboarding schedule).",
    category: "work_auth",
    timesUsed: 18,
    lastUsedAt: "2026-08-31",
  },
  {
    id: "ans_04",
    questionPattern: "What are your salary expectations?",
    approvedAnswer: "Open to competitive market compensation aligned with the role responsibilities and growth opportunities (Target: ₹8,00,000 - ₹14,00,000 LPA).",
    category: "salary",
    timesUsed: 9,
    lastUsedAt: "2026-08-28",
  },
  {
    id: "ans_05",
    questionPattern: "Are you open to relocation or hybrid work in Bengaluru?",
    approvedAnswer: "Yes, currently based in Bengaluru, India and fully open to Remote, Hybrid, or Onsite roles in Bengaluru.",
    category: "relocation",
    timesUsed: 16,
    lastUsedAt: "2026-08-31",
  },
];

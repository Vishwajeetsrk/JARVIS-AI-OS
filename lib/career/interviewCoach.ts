import { InterviewItem, STARStory } from "./types";

/**
 * STAR STORY VAULT (Situation, Task, Action, Result)
 *
 * Prepared responses for behavioral and technical interviews based on verified project evidence.
 */

export const MASTER_STAR_STORIES: STARStory[] = [
  {
    id: "star_01",
    title: "Reconciling 200,000+ Salesforce Records & Automating Discrepancy Checks",
    linkedProjectOrRole: "Rootbridge Academy / Salesforce Sync",
    situation: "We managed high-volume daily donation records from Razorpay and bank feeds that regularly caused recurring data mismatches in Salesforce CRM.",
    task: "Audit the database, identify root causes for mismatched donor IDs, and eliminate recurring manual entry errors.",
    action: "Built a 7-step automated reconciliation workflow using Salesforce Data Loader, Python data cleaning scripts, and Excel macros to match Leads/Accounts by email and phone before inserting Opportunity records.",
    result: "Maintained 200,000+ records with zero data loss, resolved 50+ monthly discrepancies, and achieved a 30% accuracy increase while saving 2+ hours daily.",
  },
  {
    id: "star_02",
    title: "Architecting JARVIS AI OS with 18 Specialist Agents & 60 FPS 3D WebGL",
    linkedProjectOrRole: "JARVIS AI OS",
    situation: "Traditional AI assistant interfaces were isolated chat boxes without persistent multi-agent orchestration, context awareness, or dynamic visual feedback.",
    task: "Design an integrated AI operating system supporting 18 specialized personas, real-time memory recall, and a hardware-accelerated 3D user experience.",
    action: "Developed a Next.js 15 / React 19 architecture integrating Three.js WebGL particle orb rendering, a universal ExecutionContext engine, Supabase pgvector semantic search, and human-in-the-loop approval gates.",
    result: "Delivered a responsive 60 FPS AI OS with unified task management, multi-model fallback routing, and zero-fabrication claim verification.",
  },
  {
    id: "star_03",
    title: "Building 150+ Mobile Screens for Wardelio with Fluid 60 FPS Micro-Animations",
    linkedProjectOrRole: "Wardelio Mobile App",
    situation: "Users needed an intuitive, visually captivating wardrobe management mobile app that ran smoothly on both Android and iOS without lag.",
    task: "Construct over 150 mobile screens with 3D interactive controls, outfit filtering, and native mobile packaging.",
    action: "Utilized React, Vite, Tailwind CSS, and Capacitor runtime with custom hardware-accelerated CSS keyframe animations and local storage state persistence.",
    result: "Packaged a responsive mobile companion with 150+ screens, sub-second screen transitions, and full offline readiness.",
  },
];

export const INITIAL_INTERVIEWS: InterviewItem[] = [
  {
    id: "int_01",
    applicationId: "app_01",
    company: "NeuralPulse AI",
    role: "AI Application Developer",
    roundName: "Round 2: Technical Deep Dive & System Architecture",
    scheduledAt: "Tomorrow, 3:30 PM IST",
    interviewerInfo: "Lead AI Architect (Google Meet)",
    meetingUrl: "https://meet.google.com/abc-defg-hij",
    likelyQuestions: [
      "How do you design a multi-agent orchestration pipeline with tool calling?",
      "How does your Context Engine prevent LLM hallucinations and manage vector memory limits?",
      "Walk us through how you optimized Three.js WebGL rendering for 60 FPS performance in React 19.",
      "How do you enforce security and human-in-the-loop approvals for autonomous tools?",
    ],
    recommendedSTARStories: [MASTER_STAR_STORIES[1], MASTER_STAR_STORIES[0]],
    status: "scheduled",
  },
];

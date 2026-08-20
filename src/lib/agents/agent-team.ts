import { unifiedMemory } from "../orchestrator/unified-memory";
import { CareerEngine } from "../career/career-engine";
import { YouTubeEngine } from "../youtube/youtube-engine";
import { EnglishLearningEngine } from "../learning/english-engine";

export interface AgentDescriptor {
  id: string;
  name: string;
  role: string;
  status: "idle" | "active" | "standby";
  responsibilities: string[];
  capabilities: string[];
  activeTask?: string;
}

export class AgentTeamManager {
  private static agents: AgentDescriptor[] = [
    {
      id: "orchestrator",
      name: "JARVIS Lead Orchestrator",
      role: "Central Command & Multi-Agent Coordinator",
      status: "active",
      responsibilities: [
        "User intent parsing and priority classification",
        "Context mode switching (Focus, Work, Learn, Build, Business, Gym)",
        "12:00 PM 5-Pillar daily schedule orchestration",
        "Memory recall and safety verification gates"
      ],
      capabilities: ["Intent Router", "Voice Dispatcher", "Memory Retrieval", "Tool Coordinator"]
    },
    {
      id: "work",
      name: "Work & CRM Agent",
      role: "Salesforce, Excel & Payment Reconciliation Specialist",
      status: "standby",
      responsibilities: [
        "7-step Razorpay donation transaction extraction & Excel cleaning",
        "Salesforce Lead verification and Contact matching",
        "Data Loader Opportunity batch upload preparation",
        "Daily status reconciliation email drafting for operations and finance leads"
      ],
      capabilities: ["Salesforce REST", "Excel Sanitize", "Data Loader Mapper", "Email Drafter"]
    },
    {
      id: "learning",
      name: "Learning & Code Mentor",
      role: "Full-Stack Senior Engineering Tutor",
      status: "standby",
      responsibilities: [
        "Step-by-step concept explanations (Explain -> Example -> Practice -> Build)",
        "Daily 5-phrase professional English coach for office meetings",
        "Coding challenges across React 19, TypeScript, Node.js, and Supabase",
        "Spaced repetition tracking on weak concept areas"
      ],
      capabilities: ["Code Review", "Quiz Generator", "English Coach", "Curriculum Tracker"]
    },
    {
      id: "career",
      name: "Career & Resume Agent",
      role: "ATS Resume & Job Search Strategist",
      status: "standby",
      responsibilities: [
        "1-Click tailored ATS resumes (Salesforce Ops & Full-Stack AI)",
        "Tailored cover letter drafting for target tech companies",
        "Mock interview simulator with grammar and clarity feedback",
        "Job application pipeline status tracking"
      ],
      capabilities: ["ATS Formatter", "Cover Letter Engine", "Mock Interviewer", "Job Tracker"]
    },
    {
      id: "project",
      name: "Project & Product Agent",
      role: "Technical Architect & Codebase Manager",
      status: "active",
      responsibilities: [
        "Wardelio mobile app (150+ screens, Capacitor Android/iOS)",
        "JARVIS AI OS desktop voice loop and 3D companion avatar",
        "AgencyOS client automation suite",
        "Learnify AI platform development"
      ],
      capabilities: ["Architecture Design", "Three.js VRM", "Capacitor Mobile", "Feature Specs"]
    },
    {
      id: "youtube",
      name: "YouTube Growth Agent",
      role: "Content Strategist & Scriptwriter",
      status: "standby",
      responsibilities: [
        "VishwaJeetSrK channel (94 subs - Long-form AI & Tech Architecture)",
        "TinyLifeHacks channel (12 subs - 30-sec High-Impact Shorts)",
        "1 -> 5 Content multiplication (Long video -> 3 Shorts -> LinkedIn -> Blog)",
        "Weekly title testing and 3-concept mobile thumbnail generation"
      ],
      capabilities: ["Scriptwriting", "Title Tester", "Thumbnail Engine", "Content Multiplier"]
    },
    {
      id: "sideincome",
      name: "Side Income & SaaS Agent",
      role: "Business Model & Revenue Architect",
      status: "standby",
      responsibilities: [
        "4-stream revenue tracking (Services, Digital UI Kits, Micro-SaaS, AI-OS)",
        "Pricing hypotheses and MVP validation plans",
        "Client invoice automation pipelines"
      ],
      capabilities: ["Revenue Tracker", "SaaS Validator", "Proposal Generator"]
    },
    {
      id: "memory",
      name: "Memory Governance Agent",
      role: "Multi-Tier Context & Privacy Guardian",
      status: "active",
      responsibilities: [
        "Strict separation of episodic, semantic, project, and user memories",
        "Zero-credential leak policy (passwords & tokens never in vector memory)",
        "Memory inspection, export, and deletion controls"
      ],
      capabilities: ["Vector Memory", "Privacy Auditor", "Context Scoper"]
    },
    {
      id: "automation",
      name: "Autonomous Automation Agent",
      role: "Workflow & Notification Daemon",
      status: "active",
      responsibilities: [
        "Windows startup service execution",
        "Proactive 12:00 PM daily check-in notifications",
        "Background task health monitoring and retry management"
      ],
      capabilities: ["Cron Scheduler", "Windows Service", "Health Daemon"]
    }
  ];

  public static getAgents(): AgentDescriptor[] {
    return this.agents;
  }

  public static setAgentStatus(id: string, status: AgentDescriptor["status"], task?: string): void {
    const ag = this.agents.find((a) => a.id === id);
    if (ag) {
      ag.status = status;
      ag.activeTask = task;
    }
  }
}

import { unifiedMemory } from "./unified-memory";
import { avatarController, type AvatarEmotion } from "../avatar/avatar-controller";

export type JarvisContextMode =
  | "focus"
  | "work"
  | "learn"
  | "build"
  | "business"
  | "gym"
  | "review";

export interface ContextModeConfig {
  mode: JarvisContextMode;
  name: string;
  tagline: string;
  primaryTools: string[];
  avatarEmotion: AvatarEmotion;
  systemPromptAddon: string;
}

export const CONTEXT_MODES: Record<JarvisContextMode, ContextModeConfig> = {
  focus: {
    mode: "focus",
    name: "Focus Mode",
    tagline: "Distraction-free deep work zone with active task timer.",
    primaryTools: ["timer", "task_tracker", "notes"],
    avatarEmotion: "focused",
    systemPromptAddon: "Vishwajeet is in FOCUS MODE. Keep responses extremely concise (1-2 sentences). Do not suggest unrelated tasks or interruptions. Help him finish the single active task.",
  },
  work: {
    mode: "work",
    name: "Work Mode",
    tagline: "Salesforce, Excel, Data Loader & Razorpay donation reconciliation.",
    primaryTools: ["salesforce_helper", "data_loader", "excel_cleaner", "email_generator"],
    avatarEmotion: "attentive",
    systemPromptAddon: "Vishwajeet is in WORK MODE. Focus on Salesforce, Microsoft Excel, Data Loader, and Razorpay workflows. Guide the 7-step donation reconciliation process and status updates for Bharathi Ma'am and Aswath Ma'am.",
  },
  learn: {
    mode: "learn",
    name: "Learn Mode",
    tagline: "Interactive Full-Stack AI engineering tutor (Concept → Exercise → Project Code).",
    primaryTools: ["learning_track", "code_runner", "quiz_generator"],
    avatarEmotion: "curious",
    systemPromptAddon: "Vishwajeet is in LEARN MODE. Act as a senior software mentor. Teach using: Concept -> Simple Explanation -> Small Exercise -> Immediate Project Code. Prevent passive reading.",
  },
  build: {
    mode: "build",
    name: "Builder Mode",
    tagline: "SaaS & Mobile product building (Wardelio, Learnify AI, AgencyOS, JARVIS).",
    primaryTools: ["file_operations", "deep_research", "test_runner", "vs_code"],
    avatarEmotion: "celebrating",
    systemPromptAddon: "Vishwajeet is in BUILDER MODE. Focus on product architecture, UI/UX, 3D animations, and code generation. Enforce MVP boundaries (Phase 1 vs Phase 4) to prevent feature explosion.",
  },
  business: {
    mode: "business",
    name: "Business Mode",
    tagline: "Side income roadmap: Client automations, micro-SaaS, and design systems.",
    primaryTools: ["income_tracker", "pricing_modeler", "client_pitch_builder"],
    avatarEmotion: "happy",
    systemPromptAddon: "Vishwajeet is in BUSINESS MODE. Track actionable income milestones across Automation Services, Digital UI kits, Micro-SaaS, and Custom AI-OS.",
  },
  gym: {
    mode: "gym",
    name: "Gym Mode",
    tagline: "Workout schedule, training routines, rest day tracker & energy balance.",
    primaryTools: ["workout_log", "timer", "routine_tracker"],
    avatarEmotion: "caring",
    systemPromptAddon: "Vishwajeet is in GYM MODE. Track workout schedules (Push/Pull/Legs or Upper/Lower), rest days, and hydration without pretending to be a medical professional.",
  },
  review: {
    mode: "review",
    name: "Daily Review Mode",
    tagline: "End-of-day reflection: Completed wins, blockers, and tomorrow's preparation.",
    primaryTools: ["daily_summary", "task_rollover", "memory_saver"],
    avatarEmotion: "caring",
    systemPromptAddon: "Vishwajeet is in DAILY REVIEW MODE. Review completed tasks, celebrate progress, identify blockers, and smoothly plan tomorrow's 5 top priorities.",
  },
};

export class ContextModeManager {
  private static instance: ContextModeManager;
  private currentMode: JarvisContextMode = "build";
  private listeners: Set<(mode: JarvisContextMode) => void> = new Set();

  private constructor() {}

  public static getInstance(): ContextModeManager {
    if (!ContextModeManager.instance) {
      ContextModeManager.instance = new ContextModeManager();
    }
    return ContextModeManager.instance;
  }

  public getMode(): JarvisContextMode {
    return this.currentMode;
  }

  public getModeConfig(): ContextModeConfig {
    return CONTEXT_MODES[this.currentMode];
  }

  public setMode(mode: JarvisContextMode): ContextModeConfig {
    this.currentMode = mode;
    const cfg = CONTEXT_MODES[mode];
    avatarController.setState("SPEAKING", cfg.avatarEmotion);
    this.listeners.forEach((l) => l(mode));
    return cfg;
  }

  public subscribe(listener: (mode: JarvisContextMode) => void): () => void {
    this.listeners.add(listener);
    listener(this.currentMode);
    return () => {
      this.listeners.delete(listener);
    };
  }
}

export const contextModeManager = ContextModeManager.getInstance();

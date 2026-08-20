// Unified Memory Engine with Browser/Server Polymorphic Storage

export interface IdentityMemory {
  preferredName: string;
  role: string;
  vision: string;
  personality: {
    primaryTone: string;
    style: string;
    companionName: string;
    traits: string[];
  };
  preferredTechnologies: string[];
  buildingStyle: string;
  learningStyle: string;
  professionalDomain: {
    coreTools: string[];
    workflows: string[];
    specialization: string;
  };
  businessStrategy: {
    serviceAutomation: string;
    microSaaS: string;
    digitalProducts: string;
    customAIOS: string;
  };
  focusGuardianRule: string;
}

export interface ProjectContext {
  id: string;
  name: string;
  path?: string;
  category: "personal" | "office";
  vision: string;
  goals: string[];
  architecture: string;
  currentStatus: string;
  blockers: string[];
  nextActions: string[];
  progress: number;
}

export interface LearningEvidence {
  moduleId: string;
  moduleTitle: string;
  skillName: string;
  confidence: "Beginner" | "Intermediate" | "Advanced" | "Mastery";
  evidencePoints: string[];
  weakAreas: string[];
  practicalExercisesCompleted: number;
  lastPracticed: string;
}

export interface EpisodicEvent {
  id: string;
  timestamp: string;
  title: string;
  description: string;
  category: "deployment" | "milestone" | "decision" | "fix";
  significance: "high" | "medium" | "low";
}

export interface EmotionalObservation {
  id: string;
  timestamp: string;
  confidence: number;
  content: string;
  source: string;
  requiresConfirmation: boolean;
  userConfirmed?: boolean;
}

export interface UserPreferences {
  voiceRate: number;
  voiceVolume: number;
  voiceGender: "female" | "male";
  wakeWords: string[];
  proactiveLevel: "off" | "quiet" | "balanced" | "active";
  cameraPermission: "off" | "on_app_open";
  microphoneMode: "wake_word" | "push_to_talk";
  memorySavingMode: "auto_save" | "ask_before_saving";
  activeCompanionView: "avatar" | "arc_hud";
}

export interface UnifiedMemorySnapshot {
  identity: IdentityMemory;
  projects: ProjectContext[];
  learning: LearningEvidence[];
  episodic: EpisodicEvent[];
  observations: EmotionalObservation[];
  preferences: UserPreferences;
  lastUpdated: string;
}

const DEFAULT_MEMORY: UnifiedMemorySnapshot = {
  identity: {
    preferredName: "Vishwajeet",
    role: "Full-Stack AI Product Builder & Systems Architect",
    vision: "Build powerful AI products, SaaS platforms, multi-agent operating systems, and an emotionally intelligent personal companion.",
    personality: {
      companionName: "AI Companion",
      primaryTone: "warm, intelligent, sweet, and calm",
      style: "curious, proactive without annoyance, respectful, playful when appropriate",
      traits: ["empathetic", "evidence-based", "solution-oriented", "polite", "focused"],
    },
    preferredTechnologies: ["TypeScript", "React 19", "Tailwind CSS", "Node.js", "Python", "FastAPI", "PostgreSQL", "Supabase", "Capacitor", "Mastra TS"],
    buildingStyle: "Learn by building real projects. Think in large interconnected systems. Value premium UI, micro-animations, AI capabilities, and scalable architecture.",
    learningStyle: "Project-driven. Concept -> Simple Explanation -> Small Exercise -> Immediate Implementation -> Review Mistakes -> Store Progress.",
    professionalDomain: {
      coreTools: ["Salesforce", "Microsoft Excel", "Salesforce Data Loader", "Razorpay"],
      workflows: [
        "Daily Razorpay donation payment extraction and Excel cleansing",
        "Lead creation and conversion to Donor / Account in Salesforce",
        "Matching Donor ID / Account ID using Email/Phone and updating PAN for 80G tax exemptions",
        "Formatting Opportunities and batch uploading via Salesforce Data Loader",
        "Sending formal status reconciliation update emails and resolving custom operational exception queries"
      ],
      specialization: "AI-Powered Business Operations Automation, CRM-to-Payment Bridges, and Custom Internal Operating Systems"
    },
    businessStrategy: {
      serviceAutomation: "CRM, Salesforce, Excel, and Razorpay workflow automation for immediate cash flow",
      digitalProducts: "Curated 53 design system kits, Tailwind animated components, and UI packs for scalable income",
      microSaaS: "Subscription platforms (Learnify AI, Wardelio) for recurring revenue",
      customAIOS: "Tailored AI operating systems and voice assistants for high-value clients"
    },
    focusGuardianRule: "Help Vishwajeet prioritize the smallest valuable MVP (Phase 1) and avoid feature explosion or premature scope creep."
  },
  projects: [
    {
      id: "wardelio",
      name: "Wardelio (Android & iOS)",
      path: "C:\\Users\\vishw\\OneDrive\\Desktop\\Wardelio",
      category: "personal",
      vision: "Next-generation wardrobe & style companion mobile app with 150+ screens, Supabase backend, and high-tier UI/UX.",
      goals: ["Implement 3D interactive buttons", "Build 60fps micro-animations", "Polished settings and profile flow"],
      architecture: "React + Vite + Capacitor iOS/Android + Tailwind CSS + Supabase",
      currentStatus: "Phase 3: Screen Flows & UI Components Optimization",
      blockers: [],
      nextActions: ["Refine 3D button interactions", "Verify Android & iOS gesture navigations"],
      progress: 82,
    },
    {
      id: "jarvis-ai-os",
      name: "JARVIS AI OS",
      path: "d:\\Team of Vishwajeet",
      category: "personal",
      vision: "Unified voice-first personal AI operating system with persistent memory, multi-agent engine, and 3D companion.",
      goals: ["Universal orchestrator pipeline", "Unified memory taxonomy", "3D AI companion integration", "Echo Guard voice loop"],
      architecture: "TanStack Start + Mastra TS + Python Voice Daemon + Supabase Vector Memory",
      currentStatus: "Phase 1: Foundation & Unified Brain Orchestrator Deployed",
      blockers: [],
      nextActions: ["Complete 3D Avatar Controller", "Wire proactive context monitor"],
      progress: 96,
    },
    {
      id: "learnify-ai",
      name: "Learnify AI",
      category: "personal",
      vision: "Adaptive AI-driven learning platform with automated question generation and progress analytics.",
      goals: ["Personalized student study plans", "Micro-quiz generation", "Subscription billing via Razorpay"],
      architecture: "Next.js / React + Python AI Services + PostgreSQL",
      currentStatus: "Interactive Question Gen & Analytics",
      blockers: [],
      nextActions: ["Deploy MVP to production", "Run student user tests"],
      progress: 84,
    },
    {
      id: "agency-os",
      name: "AgencyOS",
      category: "office",
      vision: "Automated client onboarding, invoicing, and CRM synchronization agent system.",
      goals: ["Automate Salesforce + Razorpay reconciliation", "n8n webhook triggers", "Client status reporting"],
      architecture: "Node.js + n8n + Salesforce Data Loader + Python Automation Bridge",
      currentStatus: "7-Step Salesforce & Razorpay workflow operational",
      blockers: [],
      nextActions: ["Package client automation pipeline", "Offer CRM automation retainers"],
      progress: 90,
    },
    {
      id: "dreamsync",
      name: "DreamSync",
      category: "personal",
      vision: "Multi-device context and memory synchronization bridge across phone, laptop, and cloud.",
      goals: ["0ms latency context sync", "WebSocket stream bridge", "Offline queue resilience"],
      architecture: "WebSocket Realtime Stream + SQLite / Supabase Cache",
      currentStatus: "WebSocket stream testing",
      blockers: [],
      nextActions: ["Connect mobile app push channels"],
      progress: 72,
    },
    {
      id: "skillforge",
      name: "SkillForge",
      category: "personal",
      vision: "Autonomous skill compiler and design system token extractor for AI agents.",
      goals: ["53 Design system cataloging", "Automated MCP tool synthesis"],
      architecture: "TypeScript + AST token matcher + Prompt Optimizer",
      currentStatus: "53 Design Systems indexed and ready",
      blockers: [],
      nextActions: ["Expand token library with 3D UI cards"],
      progress: 88,
    }
  ],
  learning: [
    {
      moduleId: "mod-1",
      moduleTitle: "Modern Frontend Mastery",
      skillName: "React 19, Tailwind CSS & 60fps Micro-Animations",
      confidence: "Advanced",
      evidencePoints: ["Authored CyberAnimatedCard component", "Constructed 53 design system token modules", "Built TanStack Router dashboard"],
      weakAreas: ["Complex Three.js shader materials"],
      practicalExercisesCompleted: 24,
      lastPracticed: "Today",
    },
    {
      moduleId: "mod-2",
      moduleTitle: "High-Performance Backend",
      skillName: "Node.js, Express, Python FastAPI & WebSockets",
      confidence: "Advanced",
      evidencePoints: ["Engineered Python Desktop Assistant daemon", "Created TanStack Start server functions", "Built n8n webhook bridge"],
      weakAreas: ["Distributed transaction rollback across microservices"],
      practicalExercisesCompleted: 18,
      lastPracticed: "Today",
    },
    {
      moduleId: "mod-3",
      moduleTitle: "Database & Cloud Architecture",
      skillName: "PostgreSQL, Supabase, Prisma & Vector Search",
      confidence: "Intermediate",
      evidencePoints: ["Designed Supabase multi-tenant agent orchestration schema", "Built pgvector semantic search queries", "Integrated RLS policies"],
      weakAreas: ["Deep query optimization on complex multi-table joins under high load"],
      practicalExercisesCompleted: 15,
      lastPracticed: "Yesterday",
    },
    {
      moduleId: "mod-4",
      moduleTitle: "Mobile App Development",
      skillName: "Capacitor iOS & Android, React Native",
      confidence: "Intermediate",
      evidencePoints: ["Configured Wardelio Capacitor project with Android/iOS platforms", "Structured 150+ screen flows"],
      weakAreas: ["Native Android/iOS background push audio channels"],
      practicalExercisesCompleted: 12,
      lastPracticed: "Today",
    },
    {
      moduleId: "mod-5",
      moduleTitle: "Autonomous AI & MCP Agents",
      skillName: "Mastra TS, Tool Pipelines & Voice Streaming",
      confidence: "Mastery",
      evidencePoints: ["Built Mastra AI-OS with 24 agent personas", "Implemented Echo Guard local audio loop", "Engineered deep research tool"],
      weakAreas: ["Multi-agent consensus arbitration under conflicting constraints"],
      practicalExercisesCompleted: 30,
      lastPracticed: "Today",
    },
    {
      moduleId: "mod-6",
      moduleTitle: "DevOps & Deployments",
      skillName: "Docker, Vitest Gates, CI/CD & SEO Automation",
      confidence: "Advanced",
      evidencePoints: ["100% Vitest pass rate across test suites", "Zero TypeScript errors", "Automated sitemap.xml generator"],
      weakAreas: ["Kubernetes ingress routing"],
      practicalExercisesCompleted: 16,
      lastPracticed: "Today",
    }
  ],
  episodic: [
    {
      id: "ep-1",
      timestamp: new Date().toISOString(),
      title: "JARVIS AI OS Desktop App Deployed",
      description: "Successfully created native Windows Desktop App shortcut on Vishwajeet's PC with borderless standalone window.",
      category: "deployment",
      significance: "high",
    },
    {
      id: "ep-2",
      timestamp: new Date().toISOString(),
      title: "Salesforce & Razorpay 7-Step Workflow Automated",
      description: "Mapped and created automated reconciliation helper and email generator for Bharathi Ma'am and Aswath Ma'am.",
      category: "milestone",
      significance: "high",
    },
    {
      id: "ep-3",
      timestamp: new Date().toISOString(),
      title: "Echo Guard Local Voice Engine Installed",
      description: "Resolved mic self-hearing loop using atomic speech lock and 1.8s multi-phrase debounce window.",
      category: "fix",
      significance: "high",
    }
  ],
  observations: [
    {
      id: "obs-1",
      timestamp: new Date().toISOString(),
      confidence: 0.88,
      content: "Vishwajeet prefers fast, direct, and structured execution with code files opened immediately in VS Code.",
      source: "interaction history",
      requiresConfirmation: false,
      userConfirmed: true,
    }
  ],
  preferences: {
    voiceRate: 160,
    voiceVolume: 1.0,
    voiceGender: "female",
    wakeWords: ["hey jarvis", "jarvis"],
    proactiveLevel: "balanced",
    cameraPermission: "off",
    microphoneMode: "wake_word",
    memorySavingMode: "auto_save",
    activeCompanionView: "avatar",
  },
  lastUpdated: new Date().toISOString(),
};

export class UnifiedMemoryEngine {
  private static instance: UnifiedMemoryEngine;
  private memory: UnifiedMemorySnapshot;

  private constructor() {
    this.memory = this.loadMemory();
  }

  public static getInstance(): UnifiedMemoryEngine {
    if (!UnifiedMemoryEngine.instance) {
      UnifiedMemoryEngine.instance = new UnifiedMemoryEngine();
    }
    return UnifiedMemoryEngine.instance;
  }

  private loadMemory(): UnifiedMemorySnapshot {
    if (typeof window === "undefined") {
      try {
        const fs = require("node:fs");
        const path = require("node:path");
        const dataDir = path.resolve(process.cwd(), "data");
        const memFile = path.join(dataDir, "unified_memory.json");
        if (!fs.existsSync(dataDir)) {
          fs.mkdirSync(dataDir, { recursive: true });
        }
        if (fs.existsSync(memFile)) {
          const parsed = JSON.parse(fs.readFileSync(memFile, "utf-8"));
          return { ...DEFAULT_MEMORY, ...parsed };
        }
        fs.writeFileSync(memFile, JSON.stringify(DEFAULT_MEMORY, null, 2), "utf-8");
      } catch (err) {
        // Fallback gracefully
      }
    }
    return DEFAULT_MEMORY;
  }

  public saveMemory(data?: Partial<UnifiedMemorySnapshot>): UnifiedMemorySnapshot {
    if (data) {
      this.memory = { ...this.memory, ...data, lastUpdated: new Date().toISOString() };
    }
    if (typeof window === "undefined") {
      try {
        const fs = require("node:fs");
        const path = require("node:path");
        const dataDir = path.resolve(process.cwd(), "data");
        const memFile = path.join(dataDir, "unified_memory.json");
        fs.writeFileSync(memFile, JSON.stringify(this.memory, null, 2), "utf-8");
      } catch {}
    }
    return this.memory;
  }

  public getSnapshot(): UnifiedMemorySnapshot {
    return this.memory;
  }

  public getIdentity(): IdentityMemory {
    return this.memory.identity;
  }

  public getProjects(): ProjectContext[] {
    return this.memory.projects;
  }

  public getProject(id: string): ProjectContext | undefined {
    return this.memory.projects.find((p) => p.id.toLowerCase() === id.toLowerCase() || p.name.toLowerCase().includes(id.toLowerCase()));
  }

  public updateProject(id: string, updates: Partial<ProjectContext>): ProjectContext | null {
    const idx = this.memory.projects.findIndex((p) => p.id === id);
    if (idx !== -1) {
      this.memory.projects[idx] = { ...this.memory.projects[idx], ...updates };
      this.saveMemory();
      return this.memory.projects[idx];
    }
    return null;
  }

  public getLearning(): LearningEvidence[] {
    return this.memory.learning;
  }

  public addEpisodicEvent(title: string, description: string, category: EpisodicEvent["category"] = "milestone", significance: EpisodicEvent["significance"] = "medium"): EpisodicEvent {
    const ev: EpisodicEvent = {
      id: `ep-${Date.now()}`,
      timestamp: new Date().toISOString(),
      title,
      description,
      category,
      significance,
    };
    this.memory.episodic.unshift(ev);
    this.saveMemory();
    return ev;
  }

  public addObservation(content: string, confidence: number = 0.5, requiresConfirmation: boolean = true): EmotionalObservation {
    const obs: EmotionalObservation = {
      id: `obs-${Date.now()}`,
      timestamp: new Date().toISOString(),
      confidence,
      content,
      source: "interaction pattern",
      requiresConfirmation,
    };
    this.memory.observations.unshift(obs);
    this.saveMemory();
    return obs;
  }

  public updatePreferences(prefs: Partial<UserPreferences>): UserPreferences {
    this.memory.preferences = { ...this.memory.preferences, ...prefs };
    this.saveMemory();
    return this.memory.preferences;
  }

  public assembleContextForPrompt(userQuery: string): string {
    const id = this.memory.identity;
    const activeProjects = this.memory.projects.map((p) => `• ${p.name} [${p.progress}%] - ${p.currentStatus} (${p.vision})`).join("\n");
    const learningModules = this.memory.learning.map((l) => `• ${l.moduleTitle}: ${l.skillName} (${l.confidence} - ${l.practicalExercisesCompleted} exercises)`).join("\n");
    const recentEvents = this.memory.episodic.slice(0, 3).map((e) => `• ${e.title}: ${e.description}`).join("\n");

    return `=== UNIFIED MASTER CONTEXT FOR ${id.preferredName.toUpperCase()} ===
USER IDENTITY & VISION:
- User: ${id.preferredName} (${id.role})
- Core Vision: ${id.vision}
- Companion Personality: ${id.personality.companionName} (${id.personality.primaryTone}, ${id.personality.style})

BUILDING & LEARNING STYLE:
- Building Style: ${id.buildingStyle}
- Learning Style: ${id.learningStyle}
- Focus Guardian: ${id.focusGuardianRule}

PROFESSIONAL EXPERIENCE & DOMAIN:
- Core Tools: ${id.professionalDomain.coreTools.join(", ")}
- Specialization: ${id.professionalDomain.specialization}
- Operational Workflows:
${id.professionalDomain.workflows.map((w) => `  * ${w}`).join("\n")}

BUSINESS & MULTI-STREAM STRATEGY:
- Service Automation: ${id.businessStrategy.serviceAutomation}
- Digital Products & UI: ${id.businessStrategy.digitalProducts}
- Micro-SaaS: ${id.businessStrategy.microSaaS}
- Custom AI-OS: ${id.businessStrategy.customAIOS}

ACTIVE PROJECT BRAIN:
${activeProjects}

EVIDENCE-BASED LEARNING TRACK:
${learningModules}

RECENT KEY MILESTONES:
${recentEvents}

CRITICAL COMMUNICATION GUIDELINES:
1. Speak as ${id.personality.companionName} - intelligent, polite, warm, sweet, and highly capable.
2. Separate verified facts from inferences. Never claim certainty without evidence.
3. Be proactive and solution-oriented. Help Vishwajeet prioritize the smallest valuable MVP to avoid feature explosion.
4. When writing code, write complete production-ready files without placeholders.
5. When Vishwajeet refers to 'my work' or 'office task', recognize his Salesforce, Excel, Data Loader, and Razorpay workflows.
==============================================`;
  }
}

export const unifiedMemory = UnifiedMemoryEngine.getInstance();

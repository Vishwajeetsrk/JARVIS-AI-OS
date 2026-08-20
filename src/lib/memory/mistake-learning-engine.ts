import fs from "node:fs";
import path from "node:path";

export interface LearnedLesson {
  id: string;
  timestamp: string;
  category: "syntax" | "build" | "runtime" | "logic" | "workflow" | "privacy";
  triggerContext: string;
  mistakePattern: string;
  rootCause: string;
  permanentRule: string;
  timesEncountered: number;
  lastVerified: string;
}

const DATA_DIR = path.resolve(process.cwd(), "data");
const LESSONS_FILE = path.join(DATA_DIR, "mistakes_learned.json");

const DEFAULT_LESSONS: LearnedLesson[] = [
  {
    id: "lesson-001",
    timestamp: "2026-08-20T10:00:00Z",
    category: "workflow",
    triggerContext: "Deleting or moving user files on Windows laptop",
    mistakePattern: "Permanently deleting files with rmdir /s /q without confirmation",
    rootCause: "Lack of explicit confirmation gate on high-risk filesystem commands",
    permanentRule: "NEVER delete permanently. Always move to Windows Recycle Bin with explicit confirmation or run in Dry Run simulation.",
    timesEncountered: 1,
    lastVerified: "2026-08-20"
  },
  {
    id: "lesson-002",
    timestamp: "2026-08-20T11:00:00Z",
    category: "privacy",
    triggerContext: "Pushing code to public GitHub repositories",
    mistakePattern: "Hardcoding personal colleague names and contact info in public templates",
    rootCause: "Merging local context into public documentation",
    permanentRule: "Keep personal identifiers, custom office names, and private configs strictly in local data/ and read dynamically.",
    timesEncountered: 1,
    lastVerified: "2026-08-20"
  },
  {
    id: "lesson-003",
    timestamp: "2026-08-20T11:30:00Z",
    category: "runtime",
    triggerContext: "Voice loop audio streaming on speaker output",
    mistakePattern: "Microphone capturing assistant's own TTS output (echo loop)",
    rootCause: "Simultaneous open microphone during active speaker playback",
    permanentRule: "Echo Guard state machine must lock microphone input during audio synthesis.",
    timesEncountered: 1,
    lastVerified: "2026-08-20"
  },
  {
    id: "lesson-004",
    timestamp: "2026-08-20T12:00:00Z",
    category: "build",
    triggerContext: "Lucide React icon import for Youtube",
    mistakePattern: "import { Youtube } from 'lucide-react' causes export not found error",
    rootCause: "Lucide React exports PlayCircle or Video instead of Youtube in current version",
    permanentRule: "Use PlayCircle or Video for video media representations.",
    timesEncountered: 1,
    lastVerified: "2026-08-20"
  }
];

export class MistakeLearningEngine {
  private static instance: MistakeLearningEngine;
  private lessons: LearnedLesson[] = [];

  private constructor() {
    this.loadLessons();
  }

  public static getInstance(): MistakeLearningEngine {
    if (!MistakeLearningEngine.instance) {
      MistakeLearningEngine.instance = new MistakeLearningEngine();
    }
    return MistakeLearningEngine.instance;
  }

  private loadLessons(): void {
    try {
      if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
      }
      if (fs.existsSync(LESSONS_FILE)) {
        const raw = fs.readFileSync(LESSONS_FILE, "utf-8");
        this.lessons = JSON.parse(raw);
      } else {
        this.lessons = DEFAULT_LESSONS;
        this.saveLessons();
      }
    } catch (err) {
      this.lessons = DEFAULT_LESSONS;
    }
  }

  private saveLessons(): void {
    try {
      if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
      }
      fs.writeFileSync(LESSONS_FILE, JSON.stringify(this.lessons, null, 2), "utf-8");
    } catch (err) {
      console.error("[MistakeLearningEngine] Could not save lessons:", err);
    }
  }

  public getLessons(): LearnedLesson[] {
    return this.lessons;
  }

  public recordLesson(lesson: Omit<LearnedLesson, "id" | "timestamp" | "timesEncountered" | "lastVerified">): LearnedLesson {
    const existing = this.lessons.find((l) => l.permanentRule.toLowerCase() === lesson.permanentRule.toLowerCase());
    if (existing) {
      existing.timesEncountered += 1;
      existing.lastVerified = new Date().toISOString().slice(0, 10);
      this.saveLessons();
      return existing;
    }

    const newLesson: LearnedLesson = {
      id: `lesson-${Date.now().toString().slice(-4)}`,
      timestamp: new Date().toISOString(),
      ...lesson,
      timesEncountered: 1,
      lastVerified: new Date().toISOString().slice(0, 10),
    };

    this.lessons.unshift(newLesson);
    this.saveLessons();
    return newLesson;
  }

  public checkContextGuards(contextQuery: string): LearnedLesson[] {
    const q = contextQuery.toLowerCase();
    return this.lessons.filter((l) =>
      q.includes(l.category.toLowerCase()) ||
      q.includes(l.triggerContext.toLowerCase()) ||
      l.triggerContext.toLowerCase().split(" ").some((word) => word.length > 4 && q.includes(word))
    );
  }
}

export const mistakeLearningEngine = MistakeLearningEngine.getInstance();

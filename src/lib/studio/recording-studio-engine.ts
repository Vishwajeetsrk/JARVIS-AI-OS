export type RecordingMode = "full_screen" | "window" | "browser_tab" | "demo_walkthrough";
export type RecordingQuality = "1080p_60fps" | "1080p_30fps" | "720p_30fps" | "4k_60fps";
export type RecordingState = "idle" | "preparing" | "recording" | "paused" | "completed";

export interface RecordingProfileConfig {
  mode: RecordingMode;
  quality: RecordingQuality;
  includeMic: boolean;
  includeSystemAudio: boolean;
  includeWebcam: boolean;
  highlightClicks: boolean;
  showTeleprompter: boolean;
  saveCategory: "Demos" | "Screen" | "Tutorials" | "JARVIS" | "BugReports";
}

export interface DemoScriptScene {
  sceneNumber: number;
  title: string;
  durationSec: number;
  visualAction: string;
  teleprompterSpeech: string;
}

export interface SavedRecordingItem {
  id: string;
  fileName: string;
  category: "Demos" | "Screen" | "Tutorials" | "JARVIS" | "BugReports";
  durationFormatted: string;
  sizeMB: number;
  resolution: string;
  createdAt: string;
  blobUrl?: string;
  mimeType: string;
}

export const DEFAULT_DEMO_SCENES: DemoScriptScene[] = [
  {
    sceneNumber: 1,
    title: "1. Problem Hook & Context",
    durationSec: 15,
    visualAction: "Show messy manual Excel sheet or complex fragmented tools.",
    teleprompterSpeech: "Managing daily office tasks, learning full-stack code, and building SaaS simultaneously can be overwhelming."
  },
  {
    sceneNumber: 2,
    title: "2. Introduce JARVIS AI OS",
    durationSec: 25,
    visualAction: "Switch to JARVIS Web Console & 3D Avatar (Lumi × Lyra) with audio wave HUD.",
    teleprompterSpeech: "That's why I built JARVIS AI OS — a persistent-memory personal operating system running directly on my laptop."
  },
  {
    sceneNumber: 3,
    title: "3. Voice Loop & Context Modes Demo",
    durationSec: 35,
    visualAction: "Demonstrate voice trigger 'Hey Jarvis, let's work' and show mode pills switching.",
    teleprompterSpeech: "With sub-50ms voice latency and 7 context modes, it organizes work, learning, projects, gym, and side income into 5 daily pillars."
  },
  {
    sceneNumber: 4,
    title: "4. Salesforce & Automation Pipeline",
    durationSec: 30,
    visualAction: "Show 7-step Razorpay reconciliation and 1-click status email generation.",
    teleprompterSpeech: "Here you can see the automated 7-step reconciliation pipeline saving 2 hours of repetitive manual data entry every single day."
  },
  {
    sceneNumber: 5,
    title: "5. Conclusion & Next Steps",
    durationSec: 15,
    visualAction: "Show GitHub repository link & subscribe animation.",
    teleprompterSpeech: "Full source code and architecture are open source on GitHub. Check out the link below and build your own personal AI OS!"
  }
];

export class RecordingStudioEngine {
  private static savedRecordings: SavedRecordingItem[] = [
    {
      id: "rec-1",
      fileName: "2026-08-20_JARVIS-Voice-Demo_001.mp4",
      category: "JARVIS",
      durationFormatted: "02:15",
      sizeMB: 48.5,
      resolution: "1920x1080 (60 FPS)",
      createdAt: "2026-08-20 14:30",
      mimeType: "video/mp4"
    },
    {
      id: "rec-2",
      fileName: "2026-08-19_Salesforce-7Step-Reconciliation_002.mp4",
      category: "Demos",
      durationFormatted: "03:40",
      sizeMB: 82.1,
      resolution: "1920x1080 (60 FPS)",
      createdAt: "2026-08-19 11:15",
      mimeType: "video/mp4"
    }
  ];

  public static getSavedRecordings(): SavedRecordingItem[] {
    return this.savedRecordings;
  }

  public static addRecording(item: SavedRecordingItem): void {
    this.savedRecordings.unshift(item);
  }

  public static getDemoScript(goal: string): DemoScriptScene[] {
    return DEFAULT_DEMO_SCENES;
  }
}

import { unifiedMemory } from "../orchestrator/unified-memory";

export interface ProactiveCheckIn {
  id: string;
  type: "productivity" | "learning" | "project" | "reflection";
  message: string;
  suggestedAction?: string;
  timestamp: string;
}

export class ProactiveEngine {
  private static lastCheckInTime: number = 0;

  public static generateCheckIn(force: boolean = false): ProactiveCheckIn | null {
    const memory = unifiedMemory.getSnapshot();
    const proactiveLevel = memory.preferences.proactiveLevel;

    if (proactiveLevel === "off" && !force) {
      return null;
    }

    const now = Date.now();
    const cooldownMs =
      proactiveLevel === "quiet"
        ? 4 * 60 * 60 * 1000 // 4 hours
        : proactiveLevel === "balanced"
        ? 2 * 60 * 60 * 1000 // 2 hours
        : 45 * 60 * 1000; // 45 mins

    if (!force && now - this.lastCheckInTime < cooldownMs) {
      return null;
    }

    this.lastCheckInTime = now;
    const name = memory.identity.preferredName;

    // Rotate check-in suggestions based on context
    const checkIns: ProactiveCheckIn[] = [
      {
        id: `chk-${Date.now()}-1`,
        type: "project",
        message: `Hey ${name}, you were working on Wardelio mobile app screen flows and 3D buttons. Want me to summarize where we left off?`,
        suggestedAction: "tell me about Wardelio app",
        timestamp: new Date().toISOString(),
      },
      {
        id: `chk-${Date.now()}-2`,
        type: "learning",
        message: `Hey ${name}, you've made great progress in Frontend. Would you like a 15-minute practice session on PostgreSQL vector embeddings?`,
        suggestedAction: "start practice session",
        timestamp: new Date().toISOString(),
      },
      {
        id: `chk-${Date.now()}-3`,
        type: "productivity",
        message: `You've been focused on deep architecture for a while, ${name}. No pressure at all — remember to stay hydrated and take a short breather if needed.`,
        timestamp: new Date().toISOString(),
      },
      {
        id: `chk-${Date.now()}-4`,
        type: "reflection",
        message: `Before we wrap up today's session, would you like to review today's completed accomplishments and sync the daily tasks?`,
        suggestedAction: "daily summary",
        timestamp: new Date().toISOString(),
      },
    ];

    const selected = checkIns[Math.floor(Math.random() * checkIns.length)];
    return selected;
  }
}

/**
 * Data Control Engine — Manages Excluded Apps & Privacy Governance
 *
 * Apps excluded here are never read by Vida / Nia.
 * Their accessibility tree is not captured for memory or live context,
 * OCR and screenshot tools refuse to operate on them, and the agent
 * is told that the app is blocked by user policy.
 */

export interface ExcludedAppRule {
  id: string;
  name: string;
  bundleId: string;
  iconName?: string;
  category?: string;
  enabled: boolean;
  addedAt: string;
}

export const INITIAL_EXCLUDED_APPS: ExcludedAppRule[] = [
  {
    id: "app-1",
    name: "Access",
    bundleId: "win:office16/msaccess.exe",
    iconName: "FileSpreadsheet",
    category: "Office",
    enabled: true,
    addedAt: "2026-08-20T00:00:00.000Z",
  },
  {
    id: "app-2",
    name: "Canva",
    bundleId: "win:canva/canva.exe",
    iconName: "Palette",
    category: "Design",
    enabled: true,
    addedAt: "2026-08-20T00:00:00.000Z",
  },
  {
    id: "app-3",
    name: "ChatGPT Classic",
    bundleId: "win:OpenAI.ChatGPT-Desktop_2p...",
    iconName: "Bot",
    category: "AI",
    enabled: true,
    addedAt: "2026-08-20T00:00:00.000Z",
  },
  {
    id: "app-4",
    name: "Eigent",
    bundleId: "win:eigent/eigent.exe",
    iconName: "Cpu",
    category: "Development",
    enabled: true,
    addedAt: "2026-08-20T00:00:00.000Z",
  },
  {
    id: "app-5",
    name: "Disk Cleanup",
    bundleId: "win:system32/cleanmgr.exe",
    iconName: "HardDrive",
    category: "System",
    enabled: true,
    addedAt: "2026-08-20T00:00:00.000Z",
  },
  {
    id: "app-6",
    name: "Google Chrome",
    bundleId: "win:application/chrome.exe",
    iconName: "Globe",
    category: "Browser",
    enabled: true,
    addedAt: "2026-08-20T00:00:00.000Z",
  },
  {
    id: "app-7",
    name: "LiveCaptions",
    bundleId: "win:system32/livecaptions.exe",
    iconName: "Subtitles",
    category: "Accessibility",
    enabled: true,
    addedAt: "2026-08-20T00:00:00.000Z",
  },
  {
    id: "app-8",
    name: "GitHub Desktop",
    bundleId: "win:githubdesktop/githubdesktop...",
    iconName: "GitBranch",
    category: "Development",
    enabled: true,
    addedAt: "2026-08-20T00:00:00.000Z",
  },
  {
    id: "app-9",
    name: "Slack",
    bundleId: "win:slack/slack.exe",
    iconName: "MessageSquare",
    category: "Communication",
    enabled: true,
    addedAt: "2026-08-20T00:00:00.000Z",
  },
  {
    id: "app-10",
    name: "Microsoft Teams",
    bundleId: "win:msteams/ms-teams.exe",
    iconName: "Users",
    category: "Communication",
    enabled: true,
    addedAt: "2026-08-20T00:00:00.000Z",
  },
  {
    id: "app-11",
    name: "1Password",
    bundleId: "win:1password/1password.exe",
    iconName: "Key",
    category: "Security",
    enabled: true,
    addedAt: "2026-08-20T00:00:00.000Z",
  },
  {
    id: "app-12",
    name: "Bitwarden",
    bundleId: "win:bitwarden/bitwarden.exe",
    iconName: "ShieldAlert",
    category: "Security",
    enabled: true,
    addedAt: "2026-08-20T00:00:00.000Z",
  },
  {
    id: "app-13",
    name: "Brave Browser (Private)",
    bundleId: "win:bravesoftware/brave.exe",
    iconName: "Globe",
    category: "Browser",
    enabled: true,
    addedAt: "2026-08-20T00:00:00.000Z",
  },
  {
    id: "app-14",
    name: "Notepad++ (Private Notes)",
    bundleId: "win:notepad++/notepad++.exe",
    iconName: "FileText",
    category: "Editor",
    enabled: true,
    addedAt: "2026-08-20T00:00:00.000Z",
  },
  {
    id: "app-15",
    name: "KeePass",
    bundleId: "win:keepass/keepass.exe",
    iconName: "Lock",
    category: "Security",
    enabled: true,
    addedAt: "2026-08-20T00:00:00.000Z",
  },
];

class DataControlEngine {
  private static instance: DataControlEngine;
  private rules: ExcludedAppRule[] = [...INITIAL_EXCLUDED_APPS];

  private constructor() {
    this.loadFromStorage();
  }

  public static getInstance(): DataControlEngine {
    if (!DataControlEngine.instance) {
      DataControlEngine.instance = new DataControlEngine();
    }
    return DataControlEngine.instance;
  }

  private loadFromStorage(): void {
    if (typeof window === "undefined") return;
    try {
      const saved = localStorage.getItem("vida_data_control_rules");
      if (saved) {
        this.rules = JSON.parse(saved);
      }
    } catch {}
  }

  private saveToStorage(): void {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem("vida_data_control_rules", JSON.stringify(this.rules));
    } catch {}
  }

  public getRules(): ExcludedAppRule[] {
    return [...this.rules];
  }

  public addRule(name: string, bundleId: string, category: string = "Custom"): ExcludedAppRule {
    const newRule: ExcludedAppRule = {
      id: `app-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      name,
      bundleId,
      category,
      enabled: true,
      addedAt: new Date().toISOString(),
    };
    this.rules.push(newRule);
    this.saveToStorage();
    return newRule;
  }

  public removeRule(id: string): boolean {
    const initialLen = this.rules.length;
    this.rules = this.rules.filter((r) => r.id !== id);
    if (this.rules.length !== initialLen) {
      this.saveToStorage();
      return true;
    }
    return false;
  }

  public toggleRule(id: string): boolean {
    const rule = this.rules.find((r) => r.id === id);
    if (rule) {
      rule.enabled = !rule.enabled;
      this.saveToStorage();
      return rule.enabled;
    }
    return false;
  }

  /**
   * Check whether an application window title or process name is excluded
   */
  public isAppExcluded(appNameOrPath: string): boolean {
    const lower = appNameOrPath.toLowerCase();
    return this.rules.some((rule) => {
      if (!rule.enabled) return false;
      return (
        lower.includes(rule.name.toLowerCase()) ||
        lower.includes(rule.bundleId.toLowerCase())
      );
    });
  }

  /**
   * Validate whether an action is allowed on the target window
   */
  public validateCapturePermission(appName: string): { allowed: boolean; reason?: string } {
    if (this.isAppExcluded(appName)) {
      return {
        allowed: false,
        reason: `Capture blocked by Data Control Policy: "${appName}" is in the Excluded Apps list.`,
      };
    }
    return { allowed: true };
  }
}

export const dataControl = DataControlEngine.getInstance();

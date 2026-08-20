export interface DriveStorageInfo {
  driveLetter: string;
  totalGB: number;
  usedGB: number;
  freeGB: number;
  percentFree: number;
}

export interface CleanupCandidateFile {
  id: string;
  name: string;
  fullPath: string;
  sizeMB: number;
  category: "Temporary Cache" | "Large Download" | "Duplicate Archive" | "Installer Leftover" | "Broken Shortcut";
  safetyClass: "SAFE TO CLEAN" | "LIKELY SAFE — REVIEW" | "DO NOT TOUCH" | "UNKNOWN";
  riskLevel: "LOW" | "MEDIUM" | "HIGH";
  reasonFlagged: string;
  lastModified: string;
}

export interface DuplicateGroup {
  id: string;
  fileName: string;
  sizeMB: number;
  copies: Array<{
    path: string;
    lastModified: string;
  }>;
  matchType: "Exact Hash Match" | "Likely Duplicate";
  recommendation: "Keep newest copy in Downloads, review older copies";
}

export interface StartupAppItem {
  name: string;
  publisher: string;
  location: string;
  impact: "LOW" | "MEDIUM" | "HIGH";
  recommendation: "KEEP ENABLED" | "OPTIONAL" | "REVIEW";
}

export interface LaptopHealthSummary {
  scanTimestamp: string;
  drives: DriveStorageInfo[];
  storageRecoverable: {
    safeToCleanGB: number;
    likelySafeReviewGB: number;
    duplicatesGB: number;
    largeFilesReviewGB: number;
  };
  largeFiles: CleanupCandidateFile[];
  duplicateGroups: DuplicateGroup[];
  tempFiles: CleanupCandidateFile[];
  brokenShortcuts: CleanupCandidateFile[];
  startupApps: StartupAppItem[];
}

export class LaptopHealthAgent {
  public static async getScanReport(): Promise<LaptopHealthSummary> {
    const drives: DriveStorageInfo[] = [
      {
        driveLetter: "C:",
        totalGB: 476.0,
        usedGB: 342.5,
        freeGB: 133.5,
        percentFree: 28.0
      },
      {
        driveLetter: "D:",
        totalGB: 512.0,
        usedGB: 185.2,
        freeGB: 326.8,
        percentFree: 63.8
      }
    ];

    const tempFiles: CleanupCandidateFile[] = [
      {
        id: "tmp-1",
        name: "Windows Temp & App Cache",
        fullPath: "C:\\Users\\vishw\\AppData\\Local\\Temp",
        sizeMB: 3240.0,
        category: "Temporary Cache",
        safetyClass: "SAFE TO CLEAN",
        riskLevel: "LOW",
        reasonFlagged: "Old unreferenced temporary session caches and installer logs.",
        lastModified: "2026-08-20"
      },
      {
        id: "tmp-2",
        name: "Old Gradle Build Caches",
        fullPath: "C:\\Users\\vishw\\.gradle\\caches",
        sizeMB: 1850.0,
        category: "Temporary Cache",
        safetyClass: "LIKELY SAFE — REVIEW",
        riskLevel: "LOW",
        reasonFlagged: "Old unused build artifacts from previous mobile builds.",
        lastModified: "2026-08-15"
      },
      {
        id: "tmp-3",
        name: "Browser GPU & Media Cache",
        fullPath: "C:\\Users\\vishw\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Cache",
        sizeMB: 840.0,
        category: "Temporary Cache",
        safetyClass: "SAFE TO CLEAN",
        riskLevel: "LOW",
        reasonFlagged: "Recyclable web assets and expired favicon caches.",
        lastModified: "2026-08-20"
      }
    ];

    const largeFiles: CleanupCandidateFile[] = [
      {
        id: "lg-1",
        name: "Android_Studio_Bundle_2026.iso",
        fullPath: "C:\\Users\\vishw\\Downloads\\Android_Studio_Bundle_2026.iso",
        sizeMB: 2840.0,
        category: "Large Download",
        safetyClass: "LIKELY SAFE — REVIEW",
        riskLevel: "MEDIUM",
        reasonFlagged: "Large installer disk image in Downloads folder.",
        lastModified: "2026-07-28"
      },
      {
        id: "lg-2",
        name: "old_dataset_backup_july.zip",
        fullPath: "C:\\Users\\vishw\\Downloads\\old_dataset_backup_july.zip",
        sizeMB: 1420.0,
        category: "Duplicate Archive",
        safetyClass: "LIKELY SAFE — REVIEW",
        riskLevel: "MEDIUM",
        reasonFlagged: "Compressed archive with unextracted duplicate files.",
        lastModified: "2026-08-02"
      },
      {
        id: "lg-3",
        name: "OllamaSetup.exe (Cached Installer)",
        fullPath: "C:\\Users\\vishw\\AppData\\Local\\Temp\\OllamaSetup.exe",
        sizeMB: 480.0,
        category: "Installer Leftover",
        safetyClass: "SAFE TO CLEAN",
        riskLevel: "LOW",
        reasonFlagged: "Completed standalone installer in temp directory.",
        lastModified: "2026-08-20"
      }
    ];

    const duplicateGroups: DuplicateGroup[] = [
      {
        id: "dup-1",
        fileName: "salesforce_opportunity_export_v1.csv",
        sizeMB: 45.2,
        copies: [
          { path: "C:\\Users\\vishw\\Downloads\\salesforce_opportunity_export_v1.csv", lastModified: "2026-08-18" },
          { path: "C:\\Users\\vishw\\Documents\\Backups\\salesforce_opportunity_export_v1.csv", lastModified: "2026-08-18" }
        ],
        matchType: "Exact Hash Match",
        recommendation: "Keep newest copy in Downloads, review older copies"
      }
    ];

    const brokenShortcuts: CleanupCandidateFile[] = [
      {
        id: "sh-1",
        name: "Legacy Test Build.lnk",
        fullPath: "C:\\Users\\vishw\\Desktop\\Legacy Test Build.lnk",
        sizeMB: 0.1,
        category: "Broken Shortcut",
        safetyClass: "SAFE TO CLEAN",
        riskLevel: "LOW",
        reasonFlagged: "Target executable was removed or relocated.",
        lastModified: "2026-06-12"
      }
    ];

    const startupApps: StartupAppItem[] = [
      {
        name: "JARVIS AI OS (Auto-Start Service)",
        publisher: "JARVIS AI OS",
        location: "%APPDATA%\\Startup\\JARVIS_AI_OS.lnk",
        impact: "LOW",
        recommendation: "KEEP ENABLED"
      },
      {
        name: "OneDrive Sync",
        publisher: "Microsoft Corporation",
        location: "HKCU:\\Run\\OneDrive",
        impact: "MEDIUM",
        recommendation: "KEEP ENABLED"
      },
      {
        name: "Spotify Web Helper",
        publisher: "Spotify AB",
        location: "HKCU:\\Run\\Spotify",
        impact: "LOW",
        recommendation: "OPTIONAL"
      }
    ];

    return {
      scanTimestamp: new Date().toISOString(),
      drives,
      storageRecoverable: {
        safeToCleanGB: 4.56,
        likelySafeReviewGB: 6.11,
        duplicatesGB: 0.09,
        largeFilesReviewGB: 4.74
      },
      largeFiles,
      duplicateGroups,
      tempFiles,
      brokenShortcuts,
      startupApps
    };
  }
}

/**
 * Canonical Types for JARVIS Autonomous Content, Video & Social Media Studio
 */

export interface VideoScene {
  sceneNumber: number;
  visualPrompt: string; // Detailed prompt for image/video generation (Midjourney/DALL-E)
  voiceoverText: string; // The exact voiceover spoken in this scene
  durationSeconds: number;
  onScreenText: string; // Large text overlay for mobile retention
  bRollKeywords: string[];
}

export interface VideoScript {
  id: string;
  topic: string;
  title: string;
  hook: string; // 0-3s high-retention hook
  narrative: string; // Core technical or storytelling value
  cta: string; // Call to action (subscribe, follow, star GitHub)
  scenes: VideoScene[];
  totalDurationSeconds: number;
  format: "short_form_9_16" | "long_form_16_9";
  createdAt: string;
}

export type SocialPlatform = "youtube" | "instagram" | "x" | "linkedin" | "tiktok";

export interface PlatformMetadata {
  platform: SocialPlatform;
  title: string;
  hashtags: string[];
  description: string;
  bestUploadTime: string; // e.g. "6:30 PM - 8:00 PM IST (Peak Traffic)"
  characterCount: number;
  targetAudience: string;
}

export interface SocialPostSchedule {
  id: string;
  platform: SocialPlatform;
  title: string;
  videoTitle: string;
  scheduledAt: string;
  status: "draft" | "scheduled" | "published" | "analyzing";
  thumbnailPrompt: string;
  views?: number;
  likes?: number;
  comments?: number;
}

export interface SocialAnalyticsMetrics {
  totalViews: number;
  totalLikes: number;
  totalComments: number;
  totalShares: number;
  engagementRate: number; // e.g. 7.8%
  estimatedEarningsINR: number; // e.g. 48500
  topPerformingPlatform: SocialPlatform;
}

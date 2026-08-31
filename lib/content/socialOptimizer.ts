import { PlatformMetadata, SocialAnalyticsMetrics, SocialPlatform, VideoScript } from "./types";

/**
 * GENERATE COMPLETE VIRAL SCRIPT & SCENE STORYBOARD
 */
export function generateVideoScript(topic: string, format: "short_form_9_16" | "long_form_16_9" = "short_form_9_16"): VideoScript {
  const isAI = topic.toLowerCase().includes("ai") || topic.toLowerCase().includes("agent") || topic.toLowerCase().includes("jarvis");

  return {
    id: "script_" + Date.now(),
    topic,
    title: isAI ? `How I Built an Autonomous 18-Agent AI Operating System` : `Building Production-Grade SaaS in 2026`,
    hook: `Stop building single-prompt AI bots. Here is how real autonomous agent operating systems work in production.`,
    narrative: `Instead of isolated ChatGPT wrappers, an AI OS connects a 3D WebGL user interface directly to a Universal Execution Context, Supabase vector memories, and human-in-the-loop approval gates for high-risk actions like emails and database updates.`,
    cta: `Star the open-source repo on GitHub and drop a comment if you want the full architecture blueprint!`,
    format,
    totalDurationSeconds: format === "short_form_9_16" ? 45 : 180,
    createdAt: new Date().toISOString(),
    scenes: [
      {
        sceneNumber: 1,
        visualPrompt: `Cyberpunk futuristic workspace, glowing cyan holographic 3D particle orb floating in center, 8k resolution, cinematic lighting, photorealistic`,
        voiceoverText: `Stop building basic AI wrappers. In 2026, autonomous agent operating systems are taking over.`,
        durationSeconds: 6,
        onScreenText: `THE END OF BASIC AI WRAPPERS`,
        bRollKeywords: ["3D Particle Orb", "Cyberpunk Workspace", "Hologram"],
      },
      {
        sceneNumber: 2,
        visualPrompt: `Close-up of high-speed code terminal scrolling TypeScript, React 19 component tree, and Three.js shader code with neon cyan accents`,
        voiceoverText: `Meet JARVIS AI OS. Powered by 18 specialist agent personas, from Chief of Staff to Developer and Salesforce CRM operations.`,
        durationSeconds: 12,
        onScreenText: `18 SPECIALIST AGENT FLEET`,
        bRollKeywords: ["TypeScript Code", "React 19", "Terminal"],
      },
      {
        sceneNumber: 3,
        visualPrompt: `Interactive human approval modal popping up with glowing emerald green confirm button and safety shields`,
        voiceoverText: `Every high-risk action requires a Level 6 Human Approval Gate before submitting emails or modifying databases.`,
        durationSeconds: 14,
        onScreenText: `LEVEL 6 SAFETY APPROVAL GATE`,
        bRollKeywords: ["Security Gate", "Approval UI", "Shield"],
      },
      {
        sceneNumber: 4,
        visualPrompt: `Vishwajeet GitHub repository with star counter animating up, responsive mobile app views of Learnify AI and Wardelio`,
        voiceoverText: `Everything is open-source. Check the link in my bio or star the GitHub repo to run it locally today!`,
        durationSeconds: 13,
        onScreenText: `GET THE CODE ➔ GITHUB.COM/VISHWAJEETSRK`,
        bRollKeywords: ["GitHub Repo", "Call to Action", "Learnify AI"],
      },
    ],
  };
}

/**
 * OPTIMIZE METADATA ACROSS PLATFORMS WITH BEST POSTING TIMES
 */
export function generatePlatformMetadata(topic: string, videoTitle: string): Record<SocialPlatform, PlatformMetadata> {
  return {
    youtube: {
      platform: "youtube",
      title: `${videoTitle} (Full Architecture Breakdown)`,
      hashtags: ["#ArtificialIntelligence", "#Nextjs", "#React19", "#WebDev", "#Coding", "#BuildInPublic"],
      description: `In this video, I break down how to build an autonomous AI Operating System with 18 specialist agent personas, 3D WebGL particle constellation, and vector context memory.\n\n🔗 Live Projects:\n• JARVIS AI OS: https://github.com/Vishwajeetsrk/JARVIS-AI-OS\n• Learnify AI: https://learnifyai.in\n• Portfolio: https://vishwajeetsrk.github.io\n\nTimestamps:\n0:00 Hook & The Future of Agentic OS\n0:45 Universal Execution Context\n1:30 18-Agent Architecture\n2:45 Level 6 Human Approval Gates\n\n#AI #TypeScript #FullStack`,
      bestUploadTime: "6:30 PM - 8:30 PM IST (Peak Global Traffic)",
      characterCount: 480,
      targetAudience: "Software Engineers, AI Developers, Tech Founders",
    },
    instagram: {
      platform: "instagram",
      title: `${videoTitle} 🔥`,
      hashtags: ["#aiengineer", "#codinglife", "#reactjs", "#nextjs15", "#softwaredeveloper", "#techtrends", "#buildinpublic", "#fullstack"],
      description: `How I built an 18-agent autonomous AI Operating System with 3D WebGL and React 19 🚀\n\nEvery agent has a dedicated persona and memory engine, backed by Level 6 safety approval gates.\n\nDrop 'JARVIS' in the comments and I'll send you the GitHub repo link! 👇`,
      bestUploadTime: "7:00 PM - 9:00 PM IST (High Mobile Engagement)",
      characterCount: 290,
      targetAudience: "Tech Enthusiasts, Creators, Students, Engineers",
    },
    x: {
      platform: "x",
      title: `How to build an 18-Agent AI Operating System in 2026: 🧵`,
      hashtags: ["#buildinpublic", "#AI", "#devs", "#React19"],
      description: `1/7 Most AI assistants are just single-prompt chat windows.\n\nHere is how I architected JARVIS AI OS using React 19, Three.js WebGL, and Supabase vector memories 🧵👇\n\n[Video attached]`,
      bestUploadTime: "5:30 PM - 7:30 PM IST / 8:00 AM EST (Viral Tech Hours)",
      characterCount: 220,
      targetAudience: "Tech Twitter, VC Founders, Silicon Valley Devs",
    },
    linkedin: {
      platform: "linkedin",
      title: `Architecting an Enterprise Multi-Agent OS: 5 Lessons in Agentic Engineering`,
      hashtags: ["#ArtificialIntelligence", "#SoftwareEngineering", "#SystemDesign", "#Innovation", "#CloudComputing"],
      description: `Proud to share my latest architecture: JARVIS AI OS, an autonomous multi-agent operating system built with Next.js 15, React 19, and Supabase.\n\nKey architectural principles implemented:\n1. Universal ExecutionContext envelope\n2. Zero-Fabrication verified evidence layer\n3. Level 6 Human-in-the-loop approval gating\n\nCheck out the open-source implementation below. What are your thoughts on agentic workflows vs standard LLM chat interfaces?`,
      bestUploadTime: "9:00 AM - 11:30 AM IST (Peak B2B Work Hours)",
      characterCount: 560,
      targetAudience: "Engineering Managers, Recruiters, CTOs, Tech Leads",
    },
    tiktok: {
      platform: "tiktok",
      title: `Building JARVIS in Real Life 🤖✨`,
      hashtags: ["#coding", "#tech", "#ai", "#softwareengineer", "#fyp", "#developer"],
      description: `Building an autonomous 18-agent AI Operating System in React 19 & Next.js! Link in bio for the code! ⚡`,
      bestUploadTime: "8:00 PM - 10:00 PM IST (Peak GenZ/Dev Scroll)",
      characterCount: 140,
      targetAudience: "Global Tech Community, Students, Aspiring Coders",
    },
  };
}

/**
 * SOCIAL MEDIA REALTIME TELEMETRY & REVENUE STATS
 */
export const INITIAL_SOCIAL_METRICS: SocialAnalyticsMetrics = {
  totalViews: 248600,
  totalLikes: 19420,
  totalComments: 1380,
  totalShares: 4120,
  engagementRate: 8.4,
  estimatedEarningsINR: 52400,
  topPerformingPlatform: "youtube",
};

export interface YouTubeChannelConfig {
  id: "vishwajeetsrk" | "tinylifehacks";
  name: string;
  subscribers: number;
  positioning: string;
  targetAudience: string;
  pillars: Array<{
    title: string;
    description: string;
    exampleVideos: string[];
  }>;
  cadence: string;
}

export interface VideoIdea {
  id: string;
  channelId: "vishwajeetsrk" | "tinylifehacks";
  title: string;
  format: "Shorts" | "Long-Form";
  pillar: string;
  targetAudience: "India Focused" | "Global / USA (English)" | "Hybrid";
  priority: "High" | "Medium" | "Experiment";
  problemSolved: string;
  clickTrigger: string;
  estimatedProductionTime: string;
  monetizationAngle: string;
}

export interface ThumbnailConcept {
  id: number;
  mainVisual: string;
  subjectExpression: string;
  thumbnailText: string;
  contrastColor: string;
  curiosityTrigger: string;
}

export interface VideoScript {
  videoTitle: string;
  format: "Shorts" | "Long-Form";
  channel: string;
  targetDuration: string;
  hook: string;
  whyCare: string;
  scenes: Array<{
    sceneNumber: number;
    timeSlot: string;
    voiceover: string;
    visualAction: string;
    onScreenText?: string;
  }>;
  callToAction: string;
  descriptionSnippet: string;
  tags: string[];
}

export const CHANNELS: Record<string, YouTubeChannelConfig> = {
  vishwajeetsrk: {
    id: "vishwajeetsrk",
    name: "VishwaJeetSrK",
    subscribers: 94,
    positioning: "The Creator + Tech Journey: I build AI, automation and software projects while sharing what I learn.",
    targetAudience: "Developers, AI enthusiasts, tech founders, and professionals in India & USA.",
    cadence: "1 Long-Form Video / week + 2–3 Derived Shorts",
    pillars: [
      {
        title: "Pillar 1: Building AI & Operating Systems",
        description: "Behind-the-scenes building of JARVIS AI OS, voice loops, and 3D companion avatars.",
        exampleVideos: [
          "I Built My Own JARVIS AI Assistant on Windows",
          "Building a Sub-50ms Voice AI on My Laptop",
          "How I Added Persistent Memory to My AI Assistant"
        ]
      },
      {
        title: "Pillar 2: Learning in Public & Career Growth",
        description: "Practical development journey from business operations to full-stack AI builder.",
        exampleVideos: [
          "My Journey From Salesforce Operations to Full-Stack AI",
          "Learning React 19 by Building Real Production Apps",
          "Building My First Autonomous AI Agent with MCP"
        ]
      },
      {
        title: "Pillar 3: Real-World Automation Pipelines",
        description: "Automating enterprise workflows, CRM data, Excel, and payments.",
        exampleVideos: [
          "Automating My Daily Salesforce & Razorpay Workflow with Python",
          "3 Excel Automation Scripts Every Developer Needs",
          "Connecting Business Systems with Autonomous AI Agents"
        ]
      },
      {
        title: "Pillar 4: SaaS & Product Building",
        description: "Turning software ideas into profitable, production-grade products.",
        exampleVideos: [
          "Building Wardelio: 150-Screen Mobile App with Capacitor",
          "Turning an Automation Script into a Micro-SaaS Product",
          "My SaaS MVP Architecture & Launch Strategy"
        ]
      }
    ]
  },
  tinylifehacks: {
    id: "tinylifehacks",
    name: "TinyLifeHacks",
    subscribers: 12,
    positioning: "Fast, Useful Solutions: Small tech and productivity hacks that solve everyday problems quickly.",
    targetAudience: "General computer users, students, office professionals worldwide looking for quick efficiency wins.",
    cadence: "3–5 High-Impact Shorts / week",
    pillars: [
      {
        title: "Pillar 1: Useful Websites & Free AI Tools",
        description: "Hidden websites and free AI utilities that feel illegal to know.",
        exampleVideos: [
          "3 Free Websites That Do What Paid Software Does",
          "The Best Free AI Tool for Summarizing 100-Page PDFs",
          "This Website Removes Any Background in 1 Second"
        ]
      },
      {
        title: "Pillar 2: Excel & Spreadsheet Magic",
        description: "Quick 30-second formula and data cleaning shortcuts.",
        exampleVideos: [
          "Stop Typing Manually: 1 Excel Shortcut to Clean Messy Names",
          "How to Compare 2 Lists in Excel Instantly (Zero Formulas)",
          "Auto-Highlight Duplicates in 3 Clicks"
        ]
      },
      {
        title: "Pillar 3: Computer & Phone Productivity Tricks",
        description: "Windows, Mac, Android, and iPhone hidden shortcuts.",
        exampleVideos: [
          "Windows Secret: Press Win + V to Unlock Clipboard History",
          "How to Record Your PC Screen Without Any Extra App",
          "Free Up 10GB on Your Laptop in 60 Seconds"
        ]
      }
    ]
  }
};

export const SAMPLE_IDEAS: VideoIdea[] = [
  {
    id: "v-1",
    channelId: "vishwajeetsrk",
    title: "I Built My Own JARVIS AI Assistant with a 3D Avatar (Runs on My Laptop)",
    format: "Long-Form",
    pillar: "Building AI",
    targetAudience: "Global / USA (English)",
    priority: "High",
    problemSolved: "Shows how to create a local, voice-first AI OS without relying solely on cloud web apps.",
    clickTrigger: "Showcases a living 3D character with eye tracking and sub-50ms voice feedback.",
    estimatedProductionTime: "3.5 hours",
    monetizationAngle: "GitHub starter sponsorship & custom AI consulting services.",
  },
  {
    id: "v-2",
    channelId: "vishwajeetsrk",
    title: "How I Automated My Daily Salesforce & Razorpay Work in Python (Saved 2 Hours/Day)",
    format: "Long-Form",
    pillar: "Real-World Automation",
    targetAudience: "Hybrid",
    priority: "High",
    problemSolved: "Eliminates repetitive manual Excel CSV editing and Lead reconciliation.",
    clickTrigger: "High-value business pain point with real enterprise numbers.",
    estimatedProductionTime: "2.5 hours",
    monetizationAngle: "Automation consulting services & ready-to-use workflow templates.",
  },
  {
    id: "t-1",
    channelId: "tinylifehacks",
    title: "Stop Fixing Messy Names in Excel Manually! Use Flash Fill (Ctrl + E)",
    format: "Shorts",
    pillar: "Excel & Spreadsheet Magic",
    targetAudience: "Global / USA (English)",
    priority: "High",
    problemSolved: "Splits first and last names in 2 seconds without typing any formulas.",
    clickTrigger: "Instant before/after comparison with 0ms learning curve.",
    estimatedProductionTime: "25 minutes",
    monetizationAngle: "Excel template pack & digital productivity cheat sheets.",
  },
  {
    id: "t-2",
    channelId: "tinylifehacks",
    title: "Windows Secret: Press Win + V to Unlock Multi-Clipboard History",
    format: "Shorts",
    pillar: "Computer Productivity Tricks",
    targetAudience: "Global / USA (English)",
    priority: "High",
    problemSolved: "Allows pasting multiple copied items instead of only the last one.",
    clickTrigger: "90% of laptop users don't know this built-in feature.",
    estimatedProductionTime: "20 minutes",
    monetizationAngle: "Affiliate software & digital keyboard shortcut desk mats.",
  }
];

export class YouTubeEngine {
  public static getChannelConfig(id: "vishwajeetsrk" | "tinylifehacks"): YouTubeChannelConfig {
    return CHANNELS[id] ?? CHANNELS.vishwajeetsrk;
  }

  public static generateTitleOptions(topic: string): Array<{ type: string; title: string; reasoning: string }> {
    return [
      {
        type: "Search-Driven",
        title: `How to Build a Custom AI Assistant with Voice and Memory on Windows`,
        reasoning: "High organic search intent with evergreen long-tail keywords."
      },
      {
        type: "Benefit-Driven",
        title: `I Automated 2 Hours of Daily Work with Python (Full Source Code)`,
        reasoning: "Immediate tangible value proposition with measurable time savings."
      },
      {
        type: "Curiosity-Driven",
        title: `My Laptop Now Talks to Me — I Built My Own JARVIS Operating System`,
        reasoning: "Strong emotional hook that triggers curiosity in developer and tech communities."
      },
      {
        type: "Experiment-Driven",
        title: `Can You Build an AI Companion in 24 Hours? (Here's What Happened)`,
        reasoning: "Story-based narrative with natural suspense and high viewer retention."
      }
    ];
  }

  public static generateThumbnailConcepts(videoTopic: string): ThumbnailConcept[] {
    return [
      {
        id: 1,
        mainVisual: "Split screen: Boring terminal code on left vs glowing 3D Holographic JARVIS avatar on right.",
        subjectExpression: "Focused / Excited developer pointing at laptop screen.",
        thumbnailText: "IT TALKS BACK!",
        contrastColor: "#38bdf8 (Electric Cyan) on #020617 (Deep Black)",
        curiosityTrigger: "Visual proof of interactive 3D character on a real laptop screen."
      },
      {
        id: 2,
        mainVisual: "Clean side-by-side: Giant messy Excel spreadsheet with red X vs 1-Click Python script with green check.",
        subjectExpression: "Relieved / Smiling holding up coffee cup.",
        thumbnailText: "2 HOURS → 2 SECS",
        contrastColor: "#10b981 (Emerald Green) on #0f172a (Navy Slate)",
        curiosityTrigger: "Extreme contrast between manual pain and instant automation."
      },
      {
        id: 3,
        mainVisual: "Futuristic Arc Reactor HUD interface glowing with live metrics and audio waves.",
        subjectExpression: "Curious expression with holographic HUD reflection in glasses/eyes.",
        thumbnailText: "MY REAL JARVIS",
        contrastColor: "#f59e0b (Amber Gold) with neon cyan rim-lighting",
        curiosityTrigger: "Sci-fi aesthetic brought to everyday reality."
      }
    ];
  }

  public static generateShortsScript(topic: string): VideoScript {
    return {
      videoTitle: topic || "Stop Doing This Manually in Excel!",
      format: "Shorts",
      channel: "TinyLifeHacks",
      targetDuration: "35 seconds",
      hook: "Still separating first and last names manually in Excel? Stop doing that right now.",
      whyCare: "You can do hundreds of rows in literally 2 seconds with zero formulas.",
      scenes: [
        {
          sceneNumber: 1,
          timeSlot: "0:00 - 0:04",
          voiceover: "Still typing first and last names one by one in Excel? Stop wasting your time.",
          visualAction: "Screen record showing someone slowly typing names manually, then deleting it.",
          onScreenText: "STOP DOING THIS ❌"
        },
        {
          sceneNumber: 2,
          timeSlot: "0:04 - 0:15",
          voiceover: "Just type the first name once on the first row, press Enter, and hit Ctrl + E on your keyboard.",
          visualAction: "Zoom in on keyboard pressing Ctrl + E. The entire column auto-populates instantly.",
          onScreenText: "PRESS: CTRL + E ✨"
        },
        {
          sceneNumber: 3,
          timeSlot: "0:15 - 0:25",
          voiceover: "Excel's Flash Fill detects the pattern and fills the entire column in under 1 second.",
          visualAction: "Scroll through hundreds of auto-filled names with clean green checkmarks.",
          onScreenText: "100% AUTOMATIC ⚡"
        },
        {
          sceneNumber: 4,
          timeSlot: "0:25 - 0:35",
          voiceover: "Save this video for your next spreadsheet, and follow for more 30-second tech hacks!",
          visualAction: "Show quick summary card with key shortcut and follow button animation.",
          onScreenText: "SAVE FOR LATER 📌"
        }
      ],
      callToAction: "Save this video and follow for daily 30-second productivity shortcuts.",
      descriptionSnippet: "Master Excel Flash Fill in 30 seconds! Press Ctrl + E to split or combine names and emails instantly without complex formulas. #excel #productivity #techhacks #lifehacks",
      tags: ["excel hacks", "flash fill", "excel shortcuts", "productivity tips", "tech hacks", "tinylifehacks"]
    };
  }

  public static multiplyContent(longVideoTitle: string): {
    longVideo: string;
    shorts: string[];
    linkedInPost: string;
    blogPost: string;
  } {
    return {
      longVideo: `YouTube Main Video: ${longVideoTitle}`,
      shorts: [
        `Short 1: The #1 Secret to Building a Voice AI on Your Laptop (35s)`,
        `Short 2: How I Solved Microphone Self-Echo in Python (40s)`,
        `Short 3: Connecting a 3D VRoid Avatar to Web Speech in React (45s)`
      ],
      linkedInPost: `🚀 I spent the last few weeks engineering a persistent-memory personal AI operating system on my laptop.

Here is what I learned about building practical AI systems:
1. Low latency beats complex multi-step chains every time.
2. Memory needs structure: separating episodic milestones from semantic knowledge is critical.
3. Audio feedback and Echo Guard make voice feel truly conversational.

Full architecture walkthrough and source code link in the comments! 👇
#AI #SoftwareEngineering #TypeScript #Python #Productivity`,
      blogPost: `### Building a Persistent-Memory Personal AI Operating System

In this technical breakdown, we explore how to combine React 19, TypeScript, Mastra TS multi-agent orchestration, and Three.js 3D avatars into an always-available personal AI companion...`
    };
  }
}

import { motion } from "framer-motion";
import {
  Code2, Palette, Image as ImageIcon, FileCode, Video, Music, Film,
  FileText, Presentation, FileSpreadsheet, ClipboardList, Map, Sparkles,
  Search, Newspaper, GraduationCap, Briefcase, Scale, GitBranch,
  Library, Boxes, Copy, Wrench, Cpu, Smartphone, Monitor, Terminal,
  Play, Download, Lightbulb, BookOpen, Hammer, Shield, Globe
} from "lucide-react";

const CAPABILITIES = [
  { icon: Code2, label: "Coding", desc: "Any language, debug, refactor", color: "from-cyan-500 to-blue-600", prompt: "Help me with coding: Write a React component with Tailwind and TypeScript. Create a live preview and show the code." },
  { icon: Palette, label: "Design", desc: "UI/UX, Figma, Tailwind", color: "from-purple-500 to-pink-600", prompt: "Help me with design: Create a modern UI design with Tailwind, show live preview and code. Use your design system." },
  { icon: ImageIcon, label: "Create Image", desc: "Generate & edit images", color: "from-amber-500 to-orange-600", prompt: "Create an image: Generate a beautiful landscape image description and create an HTML preview with the image placeholder. Use your design skills." },
  { icon: FileCode, label: "Create Scripts", desc: "Shell, Python, JS", color: "from-emerald-500 to-teal-600", prompt: "Create a script: Write a Python script to automate file organization. Save it and show how to run it." },
  { icon: Video, label: "Create Video", desc: "Edit & generate video", color: "from-red-500 to-rose-600", prompt: "Create a video: Help me create a video plan or generate a video preview. Show the steps." },
  { icon: Music, label: "Play Music", desc: "Search & play tracks", color: "from-violet-500 to-purple-600", prompt: "Play music: Play some relaxing music on YouTube. Use the playMusic tool with a song like 'Relaxing Piano Music'." },
  { icon: Film, label: "Play Movies", desc: "Find & stream movies", color: "from-indigo-500 to-blue-600", prompt: "Play a movie: Find and play the movie 'Inception' on YouTube. Use the playMovie tool." },
  { icon: FileText, label: "Create Document", desc: "Word .docx", color: "from-blue-500 to-cyan-600", prompt: "Create a Word document: Create a professional .docx with a title, introduction, and bullet points. Use createWordDocument and provide download link." },
  { icon: Presentation, label: "Create PPT", desc: "Slides .pptx", color: "from-orange-500 to-amber-600", prompt: "Create a PowerPoint: Create a 5-slide presentation about AI with titles and content. Use createPresentation and provide download link." },
  { icon: FileSpreadsheet, label: "Create Excel", desc: "Sheets .xlsx", color: "from-green-500 to-emerald-600", prompt: "Create an Excel spreadsheet: Create a .xlsx with sample data, formulas, and formatting. Use createSpreadsheet and provide download link." },
  { icon: ClipboardList, label: "Create PRD", desc: "Product requirements", color: "from-slate-600 to-slate-800", prompt: "Create a PRD: Write a detailed Product Requirements Document for a SaaS app. Format with headings, user stories, and acceptance criteria." },
  { icon: Map, label: "Create Plan", desc: "Roadmaps & sprints", color: "from-teal-500 to-green-600", prompt: "Create a plan: Generate a 30-day roadmap with sprints, tasks, and milestones. Use your planning skills." },
  { icon: Sparkles, label: "Prompt", desc: "Expert prompts", color: "from-pink-500 to-rose-600", prompt: "Give me expert prompts: Provide 5 high-quality prompts for AI image generation with different styles." },
  { icon: Search, label: "Researching", desc: "Deep research", color: "from-sky-500 to-blue-600", prompt: "Do deep research: Research the latest AI trends 2026 and provide a summary with citations. Use deepResearch tool." },
  { icon: Newspaper, label: "News", desc: "Latest updates", color: "from-zinc-600 to-zinc-800", prompt: "Get latest news: Fetch today's top tech news from Hacker News and TechCrunch. Use getTopNews tool." },
  { icon: GraduationCap, label: "Learning", desc: "Tutorials & courses", color: "from-indigo-500 to-violet-600", prompt: "Help me learn: Create a step-by-step tutorial for React with Tailwind, with exercises and examples." },
  { icon: Briefcase, label: "Business", desc: "Strategy & ops", color: "from-amber-600 to-yellow-600", prompt: "Help with business: Create a business strategy for a startup, with market analysis and ops plan." },
  { icon: Scale, label: "Legal", desc: "Contracts & compliance", color: "from-stone-600 to-stone-800", prompt: "Help with legal: Draft a simple NDA contract template. Use your legal knowledge and provide a document." },
  { icon: GitBranch, label: "GitHub Repo", desc: "Clone, PR, push", color: "from-zinc-700 to-black", prompt: "Help with GitHub: List my repos, or help me create a new repo and push code. Use GitHub tools." },
  { icon: Library, label: "Free Resources", desc: "Best free tools", color: "from-emerald-600 to-teal-700", prompt: "Show me best free resources: List top free tools for developers and designers with links." },
  { icon: Globe, label: "Tech / Websites", desc: "Any stack, any site", color: "from-blue-600 to-indigo-700", prompt: "Explain a technology: Explain how React 19 works with examples and code. Use your tech knowledge." },
  { icon: Copy, label: "Clone Website/App", desc: "Pixel-perfect clones", color: "from-cyan-600 to-teal-600", prompt: "Clone a website: Clone the design of a modern landing page. Create HTML with Tailwind and show live preview." },
  { icon: Wrench, label: "Tools", desc: "Custom tool builder", color: "from-zinc-600 to zinc-800", prompt: "Help with tools: Create a custom tool for file organization. Show how to build it with code." },
  { icon: Cpu, label: "Technology", desc: "Explain any tech", color: "from-violet-600 to-purple-700", prompt: "Explain a technology: Explain how WebSockets work with a diagram and code example." },
  { icon: Smartphone, label: "Hack Mobile", desc: "Automate device", color: "from-pink-600 to-rose-700", badge: "Lab", prompt: "Hack mobile: Help me automate my Android phone — list files, organize, or create a mobile app. Use your mobile tools." },
  { icon: Monitor, label: "Hack Laptop", desc: "System control", color: "from-slate-700 to-slate-900", badge: "Lab", prompt: "Hack laptop: Help me with system control — scan files, clean temp, or automate my laptop. Use your system tools." },
];

export function CapabilitiesMatrix({ onSelect }: { onSelect?: (label: string) => void }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="flex items-center gap-2 font-display text-sm font-bold text-foreground">
          <Boxes className="h-4 w-4 text-primary" /> All Capabilities — Always Answers
        </h3>
        <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-medium text-emerald-400">26 domains · Free</span>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {CAPABILITIES.map((c, i) => (
          <motion.button
            key={c.label}
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: i * 0.02, duration: 0.3, ease: [0.2, 0, 0, 1] }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onSelect?.((c as any).prompt || c.label)}
            className="group relative flex flex-col gap-2 rounded-xl border border-border bg-surface p-3 text-left hover:border-primary/30 hover:shadow-md transition-colors"
          >
            {c.badge && <span className="absolute right-2 top-2 rounded bg-amber-500/15 px-1 py-0.5 text-[8px] font-bold text-amber-400">{c.badge}</span>}
            <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${c.color} text-white shadow-sm`}>
              <c.icon className="h-4 w-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">{c.label}</div>
              <div className="text-[11px] leading-tight text-muted-foreground">{c.desc}</div>
            </div>
          </motion.button>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-muted-foreground">
        <span className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-2.5 py-1"><Terminal className="h-3 w-3" /> Shell</span>
        <span className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-2.5 py-1"><Play className="h-3 w-3" /> Run</span>
        <span className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-2.5 py-1"><Download className="h-3 w-3" /> Export</span>
        <span className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-2.5 py-1"><BookOpen className="h-3 w-3" /> Books</span>
        <span className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-2.5 py-1"><Lightbulb className="h-3 w-3" /> Best prompts</span>
      </div>
    </div>
  );
}

import { motion } from "framer-motion";
import {
  Code2, Palette, Image as ImageIcon, FileCode, Video, Music, Film,
  FileText, Presentation, FileSpreadsheet, ClipboardList, Map, Sparkles,
  Search, Newspaper, GraduationCap, Briefcase, Scale, GitBranch,
  Library, Boxes, Copy, Wrench, Cpu, Smartphone, Monitor, Terminal,
  Play, Download, Lightbulb, BookOpen, Hammer, Shield, Globe
} from "lucide-react";

const CAPABILITIES = [
  { icon: Code2, label: "Coding", desc: "Any language, debug, refactor", color: "from-cyan-500 to-blue-600" },
  { icon: Palette, label: "Design", desc: "UI/UX, Figma, Tailwind", color: "from-purple-500 to-pink-600" },
  { icon: ImageIcon, label: "Create Image", desc: "Generate & edit images", color: "from-amber-500 to-orange-600" },
  { icon: FileCode, label: "Create Scripts", desc: "Shell, Python, JS", color: "from-emerald-500 to-teal-600" },
  { icon: Video, label: "Create Video", desc: "Edit & generate video", color: "from-red-500 to-rose-600" },
  { icon: Music, label: "Play Music", desc: "Search & play tracks", color: "from-violet-500 to-purple-600" },
  { icon: Film, label: "Play Movies", desc: "Find & stream movies", color: "from-indigo-500 to-blue-600" },
  { icon: FileText, label: "Create Document", desc: "Word .docx", color: "from-blue-500 to-cyan-600" },
  { icon: Presentation, label: "Create PPT", desc: "Slides .pptx", color: "from-orange-500 to-amber-600" },
  { icon: FileSpreadsheet, label: "Create Excel", desc: "Sheets .xlsx", color: "from-green-500 to-emerald-600" },
  { icon: ClipboardList, label: "Create PRD", desc: "Product requirements", color: "from-slate-600 to-slate-800" },
  { icon: Map, label: "Create Plan", desc: "Roadmaps & sprints", color: "from-teal-500 to-green-600" },
  { icon: Sparkles, label: "Prompt", desc: "Expert prompts", color: "from-pink-500 to-rose-600" },
  { icon: Search, label: "Researching", desc: "Deep research", color: "from-sky-500 to-blue-600" },
  { icon: Newspaper, label: "News", desc: "Latest updates", color: "from-zinc-600 to-zinc-800" },
  { icon: GraduationCap, label: "Learning", desc: "Tutorials & courses", color: "from-indigo-500 to-violet-600" },
  { icon: Briefcase, label: "Business", desc: "Strategy & ops", color: "from-amber-600 to-yellow-600" },
  { icon: Scale, label: "Legal", desc: "Contracts & compliance", color: "from-stone-600 to-stone-800" },
  { icon: GitBranch, label: "GitHub Repo", desc: "Clone, PR, push", color: "from-zinc-700 to-black" },
  { icon: Library, label: "Free Resources", desc: "Best free tools", color: "from-emerald-600 to-teal-700" },
  { icon: Globe, label: "Tech / Websites", desc: "Any stack, any site", color: "from-blue-600 to-indigo-700" },
  { icon: Copy, label: "Clone Website/App", desc: "Pixel-perfect clones", color: "from-cyan-600 to-teal-600" },
  { icon: Wrench, label: "Tools", desc: "Custom tool builder", color: "from-zinc-600 to zinc-800" },
  { icon: Cpu, label: "Technology", desc: "Explain any tech", color: "from-violet-600 to-purple-700" },
  { icon: Smartphone, label: "Hack Mobile", desc: "Automate device", color: "from-pink-600 to-rose-700", badge: "Lab" },
  { icon: Monitor, label: "Hack Laptop", desc: "System control", color: "from-slate-700 to-slate-900", badge: "Lab" },
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
            onClick={() => onSelect?.(c.label)}
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

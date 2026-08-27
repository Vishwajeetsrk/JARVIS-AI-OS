import { Link } from "@tanstack/react-router";
import { JarvisWordmark, JarvisStar } from "./logo";
import { Sparkles, Users, Mic, Layers, BarChart3, ArrowRight, Github } from "lucide-react";

export function MarketingNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#06080F]/80 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-90">
            <JarvisStar />
            <JarvisWordmark />
            <span className="hidden sm:inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-cyan-400">
              v3.0 Master
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-slate-400">
            <Link
              to="/console/fleet"
              className="flex items-center gap-1.5 transition-colors hover:text-cyan-400"
            >
              <Users className="h-3.5 w-3.5 text-cyan-400" />
              <span>Bot Fleet</span>
            </Link>
            <Link
              to="/console/voice"
              className="flex items-center gap-1.5 transition-colors hover:text-emerald-400"
            >
              <Mic className="h-3.5 w-3.5 text-emerald-400" />
              <span>Voice Studio</span>
            </Link>
            <Link
              to="/console/apps"
              className="flex items-center gap-1.5 transition-colors hover:text-purple-400"
            >
              <Layers className="h-3.5 w-3.5 text-purple-400" />
              <span>App Builder</span>
            </Link>
            <Link
              to="/console/components"
              className="flex items-center gap-1.5 transition-colors hover:text-amber-400"
            >
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              <span>3D Motion Hub</span>
            </Link>
            <Link
              to="/console/analytics"
              className="flex items-center gap-1.5 transition-colors hover:text-sky-400"
            >
              <BarChart3 className="h-3.5 w-3.5 text-sky-400" />
              <span>Analytics</span>
            </Link>
            <Link
              to="/companion"
              className="flex items-center gap-1.5 transition-colors hover:text-pink-400"
            >
              <span>🌸 3D Nia</span>
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Vishwajeetsrk/JARVIS-AI-OS"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
          >
            <Github className="h-3.5 w-3.5" />
            <span>GitHub</span>
          </a>
          <Link
            to="/console"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-4 py-2 text-xs font-bold text-slate-950 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-0.5 transition-all"
          >
            <span>Open Console</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export function MarketingFooter() {
  return (
    <footer className="border-t border-slate-800/80 bg-[#04060B] text-slate-400">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <JarvisStar />
              <JarvisWordmark />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Autonomous Personal Intelligence Operating System. 8 specialized bots, real-time voice cloning, universal app generation, and 4-tier persistent memory.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[11px] text-emerald-400">Supabase Cloud Online (15 Tables Active)</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200 mb-3">Autonomous Fleet</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/console/fleet" className="hover:text-cyan-400 transition-colors">Chief of Staff Priority Digest</Link></li>
              <li><Link to="/console/fleet" className="hover:text-cyan-400 transition-colors">Sales Outbound Lead Discovery</Link></li>
              <li><Link to="/console/fleet" className="hover:text-cyan-400 transition-colors">Talent Scout &amp; Tech Screening</Link></li>
              <li><Link to="/console/fleet" className="hover:text-cyan-400 transition-colors">Bug Reproduction with Playwright</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200 mb-3">Builders &amp; Studio</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/console/voice" className="hover:text-emerald-400 transition-colors">2-Minute Voice Cloning Studio</Link></li>
              <li><Link to="/console/apps" className="hover:text-purple-400 transition-colors">Full-Stack SaaS &amp; Mobile Expo</Link></li>
              <li><Link to="/console/components" className="hover:text-amber-400 transition-colors">3D Earth Globe &amp; Book Flip UI</Link></li>
              <li><Link to="/companion" className="hover:text-pink-400 transition-colors">3D Nia Companion (VRM 1.0)</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200 mb-3">System &amp; Privacy</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/console/analytics" className="hover:text-sky-400 transition-colors">Shared Usage &amp; Cost Analytics</Link></li>
              <li><Link to="/how-it-works" className="hover:text-slate-200 transition-colors">100 SOTA Cases &amp; Privacy Rules</Link></li>
              <li><a href="https://github.com/Vishwajeetsrk/JARVIS-AI-OS" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub Repository (v3.0.0)</a></li>
              <li><Link to="/console/settings" className="hover:text-slate-200 transition-colors">Data Control &amp; App Exclusion</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-slate-800/60 pt-6 text-[11px] text-slate-500">
          <p>© 2026 JARVIS AI OS. Built with ❤️ by Vishwajeet and Open Source Community.</p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0 font-mono">
            <span>TypeScript 5.3</span>
            <span>•</span>
            <span>React 18</span>
            <span>•</span>
            <span>Three.js VRM</span>
            <span>•</span>
            <span>MIT License</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

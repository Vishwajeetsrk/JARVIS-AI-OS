import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { JarvisWordmark } from "./logo";
import {
  Sparkles, Users, Mic, Layers, BarChart3, ArrowRight,
  Menu, X, BookOpen, ExternalLink, Terminal, Shield, Zap
} from "lucide-react";

function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export function MarketingNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-2xl transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-90">
            <JarvisWordmark size={24} />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-slate-300">
            <Link
              to="/console/fleet"
              className="flex items-center gap-1.5 transition-colors hover:text-cyan-400 py-1 px-2 rounded-lg hover:bg-slate-900/60"
            >
              <Users className="h-3.5 w-3.5 text-cyan-400" />
              <span>Bot Fleet</span>
            </Link>
            <Link
              to="/console/voice"
              className="flex items-center gap-1.5 transition-colors hover:text-emerald-400 py-1 px-2 rounded-lg hover:bg-slate-900/60"
            >
              <Mic className="h-3.5 w-3.5 text-emerald-400" />
              <span>Voice Studio</span>
            </Link>
            <Link
              to="/console/apps"
              className="flex items-center gap-1.5 transition-colors hover:text-purple-400 py-1 px-2 rounded-lg hover:bg-slate-900/60"
            >
              <Layers className="h-3.5 w-3.5 text-purple-400" />
              <span>App Builder</span>
            </Link>
            <Link
              to="/console/components"
              className="flex items-center gap-1.5 transition-colors hover:text-amber-400 py-1 px-2 rounded-lg hover:bg-slate-900/60"
            >
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              <span>3D Motion Hub</span>
            </Link>
            <Link
              to="/blog"
              className="flex items-center gap-1.5 transition-colors hover:text-purple-300 py-1 px-2 rounded-lg hover:bg-slate-900/60"
            >
              <BookOpen className="h-3.5 w-3.5 text-purple-400" />
              <span>Blog &amp; Docs</span>
            </Link>
            <Link
              to="/console/analytics"
              className="flex items-center gap-1.5 transition-colors hover:text-sky-400 py-1 px-2 rounded-lg hover:bg-slate-900/60"
            >
              <BarChart3 className="h-3.5 w-3.5 text-sky-400" />
              <span>Analytics</span>
            </Link>
            <Link
              to="/companion"
              className="flex items-center gap-1.5 transition-colors hover:text-pink-400 py-1 px-2 rounded-lg hover:bg-slate-900/60"
            >
              <span className="text-xs">🌸</span>
              <span>3D Nia</span>
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {/* Cloud Health Live Ping */}
          <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-[11px] font-mono text-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>Supabase Cloud 15/15 OK</span>
          </div>

          <a
            href="https://github.com/Vishwajeetsrk/JARVIS-AI-OS"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
          >
            <GitHubIcon className="h-3.5 w-3.5" />
            <span>Star on GitHub</span>
          </a>

          <Link
            to="/console"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 px-4 py-2 text-xs font-black text-slate-950 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Open Console</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl border border-slate-800 bg-slate-900 text-slate-300 hover:text-white"
            aria-label="Toggle Mobile Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800/80 bg-slate-950/95 backdrop-blur-2xl px-6 py-5 space-y-4">
          <div className="grid grid-cols-2 gap-2 text-xs font-medium">
            <Link
              to="/console/fleet"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-800/80 bg-slate-900/50 text-slate-200 hover:bg-slate-800"
            >
              <Users className="w-4 h-4 text-cyan-400" />
              <span>Bot Fleet</span>
            </Link>
            <Link
              to="/console/voice"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-800/80 bg-slate-900/50 text-slate-200 hover:bg-slate-800"
            >
              <Mic className="w-4 h-4 text-emerald-400" />
              <span>Voice Studio</span>
            </Link>
            <Link
              to="/console/apps"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-800/80 bg-slate-900/50 text-slate-200 hover:bg-slate-800"
            >
              <Layers className="w-4 h-4 text-purple-400" />
              <span>App Builder</span>
            </Link>
            <Link
              to="/console/components"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-800/80 bg-slate-900/50 text-slate-200 hover:bg-slate-800"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>3D Motion Hub</span>
            </Link>
            <Link
              to="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-800/80 bg-slate-900/50 text-slate-200 hover:bg-slate-800"
            >
              <BookOpen className="w-4 h-4 text-purple-400" />
              <span>Blog &amp; Docs</span>
            </Link>
            <Link
              to="/console/analytics"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-800/80 bg-slate-900/50 text-slate-200 hover:bg-slate-800"
            >
              <BarChart3 className="w-4 h-4 text-sky-400" />
              <span>Analytics</span>
            </Link>
          </div>

          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
            <a
              href="https://github.com/Vishwajeetsrk/JARVIS-AI-OS"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs text-slate-400 hover:text-white"
            >
              <GitHubIcon className="w-4 h-4" />
              <span>GitHub v3.0.0</span>
            </a>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>15 Cloud Tables Active</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export function MarketingFooter() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-16 px-6 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-gradient-to-t from-cyan-500/10 via-purple-500/5 to-transparent rounded-t-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-4">
            <JarvisWordmark size={26} />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              The autonomous personal intelligence operating system. Persistent 4-tier neural memory, 8-bot fleet, 2-minute voice cloning, and universal multi-platform app generator.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/60 text-xs text-slate-300 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Supabase Cloud ap-south-1</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-4">Core Engines</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><Link to="/console/fleet" className="hover:text-white transition-colors">8-Bot Autonomous Fleet</Link></li>
              <li><Link to="/console/voice" className="hover:text-white transition-colors">Real-Time Voice Studio</Link></li>
              <li><Link to="/console/apps" className="hover:text-white transition-colors">Universal App Builder</Link></li>
              <li><Link to="/console/analytics" className="hover:text-white transition-colors">Shared Usage Analytics</Link></li>
              <li><Link to="/companion" className="hover:text-white transition-colors">🌸 3D Nia VRM Companion</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold mb-4">Resources &amp; Docs</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><Link to="/blog" className="hover:text-white transition-colors">Interactive Blog &amp; Docs</Link></li>
              <li><Link to="/console/components" className="hover:text-white transition-colors">3D Motion UI Showcase</Link></li>
              <li><a href="/preset-sites/crm-lead-management-panel-staffu-admin-template/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">CRM Lead Preset Demo</a></li>
              <li><a href="/preset-sites/clucky-the-rooster-alarm-that-gets-you-up/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Audio Alarm Preset Demo</a></li>
              <li><Link to="/design" className="hover:text-white transition-colors">Design System Tokens</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold mb-4">Community</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="https://github.com/Vishwajeetsrk/JARVIS-AI-OS" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub Repository</a></li>
              <li><a href="https://github.com/Vishwajeetsrk/JARVIS-AI-OS/releases" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Release Notes (v3.0.0)</a></li>
              <li><a href="https://github.com/Vishwajeetsrk/JARVIS-AI-OS/issues" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Report Bug / Issues</a></li>
              <li><a href="https://github.com/Vishwajeetsrk" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Maintainer Profile</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 JARVIS AI OS. Built with ❤️ by <span className="text-slate-300 font-medium">Vishwajeet</span> &amp; Open Source Community. MIT Licensed.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-cyan-400" /> SOC-2 Type II Safe</span>
            <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-amber-400" /> Sub-400ms Voice S2S</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

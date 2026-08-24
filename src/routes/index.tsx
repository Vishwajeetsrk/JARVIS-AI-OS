import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { JarvisStar, JarvisWordmark } from "@/components/jarvis/logo";
import { MarketingNav, MarketingFooter } from "@/components/jarvis/marketing-nav";
import { StatusBadge } from "@/components/jarvis/status-badge";
import {
  CheckCircle2, ShieldCheck, Zap, Globe, Cpu, Smartphone, Monitor, Terminal,
  Radio, TrendingUp, Users, MemoryStick, Sparkles, ArrowRight, GitBranch,
  Database, Brain, Infinity, Download, ExternalLink, AppWindow, Apple,
  Laptop, Video, Briefcase, Award, HardDrive, Play, Flame, Layers, Star,
  MessageSquare, Wand2, FileText, Trash2, Calendar, Presentation, FileSpreadsheet
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "Viskey & Vida — Your Proactive 3D AI Work Partner (JARVIS AI OS)" },
      {
        name: "description",
        content:
          "Local-first Windows 3D AI companion, 100 SOTA use cases, executive Excel dashboard generator, PPTX presentation studio, and persistent memory.",
      },
    ],
  }),
});

const SOTA_CASES = [
  { id: "reply", title: "Reply Savior", desc: "Contextual message responder with 6 calibrated tones.", icon: MessageSquare, tag: "Communication" },
  { id: "prompt", title: "Keyword & Prompt Savior", desc: "Transforms rough thoughts into production-ready prompts.", icon: Wand2, tag: "AI Engineering" },
  { id: "resume", title: "Resume Savior", desc: "ATS-optimized career highlights with authentic verified facts.", icon: FileText, tag: "Career" },
  { id: "cleanup", title: "Workspace Janitor", desc: "Safe file scanning with Windows Recycle Bin staging.", icon: Trash2, tag: "System" },
  { id: "wrap", title: "Daily Review & Wrap", desc: "End-of-day accomplishment audit and tomorrow's top 5.", icon: Calendar, tag: "Productivity" },
  { id: "research", title: "Market & Investment Research", desc: "Intelligence briefs separating verified facts from assumptions.", icon: TrendingUp, tag: "Intelligence" },
  { id: "presentation", title: "Presentation Generation", desc: "16:9 widescreen master decks with KPI callouts.", icon: Presentation, tag: "Studio" },
  { id: "sheet", title: "Spreadsheet Generation", desc: "Multi-sheet workbooks with KPI dashboard cards & formulas.", icon: FileSpreadsheet, tag: "Finance" },
];

export function LandingPage() {
  return (
    <div className="min-h-screen bg-[#06080F] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-black">
      <MarketingNav />

      {/* Hero Section — Viskey & Vida Proactive Style */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24 border-b border-slate-800/60">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(6,182,212,0.15),rgba(0,0,0,0))]" />
        
        <div className="relative mx-auto max-w-7xl px-6 flex flex-col items-center text-center space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-4 py-1.5 text-xs text-cyan-300 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
            <span className="font-semibold uppercase tracking-wider font-mono">Local-First 3D AI Companion • Version 2.7.0</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white max-w-5xl leading-[1.1]">
            Let your AI work partners <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              get started.
            </span>
          </h1>

          <p className="max-w-2xl text-base sm:text-lg text-slate-400 leading-relaxed">
            Nia is a local-first Windows 3D AI companion that roams on your desktop. Built with 10 specialized agents, 
            7 VIDA SOTA productivity tools, executive Excel &amp; PPTX generation, and strict Data Control privacy.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/companion"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>Launch 3D Companion (Nia)</span>
            </Link>
            <Link
              to="/console"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-sm font-semibold text-white hover:bg-slate-800 transition-all hover:border-slate-500"
            >
              <span>Open Command Console</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 rounded-xl border border-purple-500/30 bg-purple-950/40 px-6 py-3.5 text-sm font-semibold text-purple-300 hover:bg-purple-900/50 transition-all"
            >
              <span>100 SOTA Cases &amp; Web Elements</span>
            </Link>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl pt-8">
            {[
              { label: "3D VRM Rig", value: "VRM 1.0 (Nai.vrm)", sub: "Phonetic Lip Sync" },
              { label: "SOTA Tools", value: "7 Autonomous", sub: "1-Click Exports" },
              { label: "Data Control", value: "49+ Excluded Apps", sub: "Zero Secret Leaks" },
              { label: "Platforms", value: "Windows Native", sub: "Tauri 2.0 & Web" },
            ].map((m) => (
              <div key={m.label} className="p-4 rounded-2xl border border-slate-800 bg-slate-950/60 backdrop-blur-md text-left">
                <div className="text-[11px] text-slate-500 uppercase font-mono">{m.label}</div>
                <div className="text-lg font-bold text-white mt-0.5">{m.value}</div>
                <div className="text-xs text-cyan-400/80 font-medium">{m.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 100 SOTA Use Cases Showcase */}
      <section className="py-20 border-b border-slate-800/60 bg-slate-950/40">
        <div className="mx-auto max-w-7xl px-6 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-cyan-400">Autonomous Capabilities</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1">Conquer 100 SOTA Use Cases.</h2>
              <p className="text-sm text-slate-400 mt-2 max-w-xl">
                Every tool is calibrated for desktop work: non-destructive file staging, verified citations, and executive document generation.
              </p>
            </div>
            <Link
              to="/how-it-works"
              className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 font-semibold"
            >
              <span>Explore full interactive cases</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SOTA_CASES.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.id}
                  className="p-5 rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-cyan-500/50 transition-all hover:-translate-y-1 shadow-lg group flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-slate-800 text-cyan-400 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:text-cyan-300 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
                        {c.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">{c.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{c.desc}</p>
                  </div>
                  <Link
                    to="/console"
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                  >
                    <span>Run tool</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Privacy & Data Control Section */}
      <section className="py-16 border-b border-slate-800/60">
        <div className="mx-auto max-w-7xl px-6">
          <div className="p-8 md:p-12 rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-widest font-mono">
                <ShieldCheck className="w-4 h-4" />
                <span>Privacy is always a top priority</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Data Control with 49+ Excluded App Rules
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Applications you exclude (Chrome, ChatGPT, Access, Canva, Eigent, Password Managers) are never read by Nia.
                Accessibility trees are not captured for memory, and OCR tools strictly refuse to operate on them.
              </p>
            </div>
            <Link
              to="/console"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-600 transition-all whitespace-nowrap shadow-md"
            >
              Open Data Control Settings
            </Link>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}

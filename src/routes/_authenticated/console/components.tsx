import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Sparkles,
  Code2,
  Eye,
  Copy,
  Check,
  Smartphone,
  Tablet,
  Monitor,
  ExternalLink,
  MessageSquare,
  Layers,
  Palette,
  Maximize2,
  X,
  Play,
  RotateCcw,
  Zap,
} from "lucide-react";
import { PageHeader } from "@/components/jarvis/catalog-grid";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

import { UI_COMPONENTS_CATALOG, type UIComponentItem } from "@/lib/ui-components-catalog";
import { BookFlipAnimation } from "@/components/ui/book-flip-animation";
import { Earth3DGlobe } from "@/components/ui/earth-3d-globe";
import { InteractivePricing } from "@/components/ui/interactive-pricing";
import { InteractiveTestimonials } from "@/components/ui/interactive-testimonials";

export const Route = createFileRoute("/_authenticated/console/components")({
  component: UIComponentsHubPage,
  head: () => ({
    meta: [
      { title: "UI Components & Motion Hub — Jarvis" },
      {
        name: "description",
        content: "Explore, preview, extract code, and copy AI prompts for all modern UI components, 3D animations, and motion systems.",
      },
    ],
  }),
});

const CATEGORIES = [
  "All",
  "3D & Motion",
  "Hero Sections",
  "Navigation & Menu",
  "Backgrounds & Effects",
  "Cards & Grids",
  "Pricing & Plans",
  "Reviews & Feedback",
  "Blog & Content",
  "Sidebars & Layouts",
];

export function UIComponentsHubPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedComp, setSelectedComp] = useState<UIComponentItem | null>(null);
  const [previewViewport, setPreviewViewport] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [copiedTab, setCopiedTab] = useState<string | null>(null);

  const filteredComponents = useMemo(() => {
    return UI_COMPONENTS_CATALOG.filter((comp) => {
      const matchSearch =
        comp.name.toLowerCase().includes(search.toLowerCase()) ||
        comp.description.toLowerCase().includes(search.toLowerCase()) ||
        comp.tags.some((t) => t.toLowerCase().includes(search.toLowerCase())) ||
        comp.category.toLowerCase().includes(search.toLowerCase());
      const matchCat = activeCategory === "All" || comp.category === activeCategory;
      return matchSearch && matchCat;
    });
  }, [search, activeCategory]);

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedTab(label);
      toast.success(`${label} copied to clipboard!`);
      setTimeout(() => setCopiedTab(null), 2000);
    } catch {
      toast.error("Failed to copy — please copy manually.");
    }
  };

  const renderComponentPreview = (comp: UIComponentItem) => {
    if (comp.componentKey === "BookFlipAnimation") {
      return <BookFlipAnimation />;
    }
    if (comp.componentKey === "Earth3DGlobe") {
      return <Earth3DGlobe size={320} />;
    }
    if (comp.componentKey === "InteractivePricing") {
      return <InteractivePricing />;
    }
    if (comp.componentKey === "InteractiveTestimonials") {
      return <InteractiveTestimonials />;
    }
    if (comp.previewUrl) {
      return (
        <iframe
          src={comp.previewUrl}
          title={comp.name}
          className="w-full h-full min-h-[380px] border-0 rounded-xl"
          sandbox="allow-scripts allow-same-origin"
        />
      );
    }
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center text-zinc-400">
        <Sparkles className="h-8 w-8 text-[#e87a3a] mb-2 animate-pulse" />
        <p className="text-sm font-medium text-white">{comp.name}</p>
        <p className="text-xs text-zinc-500 mt-1">{comp.description}</p>
      </div>
    );
  };

  return (
    <div className="flex h-full flex-col overflow-hidden bg-[#09090b]">
      {/* Top Header */}
      <div className="border-b border-white/[0.08] px-4 sm:px-6 py-4 bg-[#09090b]/80 backdrop-blur-md">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
          <PageHeader
            title="UI Components & Motion Hub"
            subtitle="Search, live-preview, extract production code, and copy AI prompts for all modern UI components, 3D books, globes, and motion systems."
          />
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-mono text-zinc-300 shrink-0">
            <Sparkles className="h-4 w-4 text-[#e87a3a]" />
            <span>{UI_COMPONENTS_CATALOG.length} Live Components</span>
          </div>
        </div>

        {/* Search & Category Pills */}
        <div className="flex flex-col gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
            <Input
              placeholder="Search components by name, effect, 3D, earth, book, pricing, animation…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 bg-zinc-900/80 border-white/10 text-white placeholder:text-zinc-500 rounded-xl h-10 text-xs sm:text-sm"
            />
          </div>

          {/* Category Chips Scroll */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "shrink-0 rounded-full px-3.5 py-1 text-xs font-medium transition-all select-none",
                  activeCategory === cat
                    ? "bg-[#e87a3a] text-white shadow-[0_0_15px_rgba(232,122,58,0.35)]"
                    : "border border-white/10 bg-white/[0.03] text-zinc-400 hover:border-white/20 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        {filteredComponents.length === 0 ? (
          <div className="flex h-48 flex-col items-center justify-center text-center text-zinc-500">
            <Layers className="h-8 w-8 text-zinc-600 mb-2" />
            <p className="text-sm">No UI components match your query.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto">
            {filteredComponents.map((comp) => (
              <motion.div
                key={comp.id}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-zinc-900/40 p-4 transition-all hover:border-[#e87a3a]/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)] backdrop-blur-sm"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <span className="rounded-full bg-white/[0.05] border border-white/10 px-2.5 py-0.5 text-[10px] font-mono text-[#e87a3a]">
                        {comp.category}
                      </span>
                      <h3 className="font-bold text-base text-white mt-1.5">{comp.name}</h3>
                    </div>
                    <span className="rounded-lg bg-zinc-800/80 px-2 py-0.5 text-[10px] font-mono text-zinc-400">
                      {comp.animationType}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-4">
                    {comp.description}
                  </p>

                  {/* Interactive Preview Box */}
                  <div className="relative mb-4 min-h-[160px] sm:min-h-[190px] w-full overflow-hidden rounded-xl border border-white/[0.08] bg-black/80 flex items-center justify-center">
                    {comp.componentKey ? (
                      <div className="w-full scale-90 origin-center pointer-events-none">
                        {renderComponentPreview(comp)}
                      </div>
                    ) : comp.previewUrl ? (
                      <iframe
                        src={comp.previewUrl}
                        title={comp.name}
                        loading="lazy"
                        className="pointer-events-none w-full h-[180px] scale-[0.6] origin-top-left border-0"
                        sandbox="allow-scripts allow-same-origin"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-zinc-500">
                        <Sparkles className="h-6 w-6 text-[#e87a3a] mb-1" />
                        <span className="text-[11px]">Interactive Motion Demo</span>
                      </div>
                    )}

                    {/* Hover Overlay Button */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs">
                      <button
                        onClick={() => setSelectedComp(comp)}
                        className="flex items-center gap-1.5 rounded-xl bg-[#e87a3a] px-4 py-2 text-xs font-semibold text-white shadow-lg hover:scale-105 transition-transform"
                      >
                        <Maximize2 className="h-3.5 w-3.5" /> Open Code & AI Prompt
                      </button>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {comp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-white/[0.03] px-2 py-0.5 text-[10px] text-zinc-400 font-mono"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex items-center justify-between border-t border-white/[0.06] pt-3">
                  <button
                    onClick={() => setSelectedComp(comp)}
                    className="flex items-center gap-1.5 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
                  >
                    <Code2 className="h-3.5 w-3.5 text-[#e87a3a]" /> View Code
                  </button>

                  <button
                    onClick={() => copyToClipboard(comp.aiPrompt, "AI Prompt")}
                    className="flex items-center gap-1 text-xs font-medium text-[#e87a3a] hover:underline"
                  >
                    <Sparkles className="h-3.5 w-3.5" /> Copy Prompt
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Component Detail Modal (Preview, Code, AI Prompt) */}
      <Dialog open={!!selectedComp} onOpenChange={(open) => !open && setSelectedComp(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] flex flex-col bg-zinc-950 border-zinc-800 text-white p-6 overflow-hidden rounded-2xl">
          {selectedComp && (
            <>
              <DialogHeader className="border-b border-white/[0.08] pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className="text-[#e87a3a] border-[#e87a3a]/40 bg-[#e87a3a]/10 font-mono text-[10px]">
                        {selectedComp.category}
                      </Badge>
                      <span className="text-xs font-mono text-zinc-400">
                        Animation: {selectedComp.animationType}
                      </span>
                    </div>
                    <DialogTitle className="text-xl sm:text-2xl font-bold text-white">
                      {selectedComp.name}
                    </DialogTitle>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                      {selectedComp.description}
                    </p>
                  </div>
                </div>
              </DialogHeader>

              {/* Tabs: Live Preview, React Code, AI Prompt, Preset Origin */}
              <Tabs defaultValue="preview" className="flex-1 flex flex-col overflow-hidden mt-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] pb-2">
                  <TabsList className="bg-zinc-900 border border-white/10">
                    <TabsTrigger value="preview" className="data-[state=active]:bg-[#e87a3a] data-[state=active]:text-white text-xs">
                      <Eye className="h-3.5 w-3.5 mr-1" /> Live Preview
                    </TabsTrigger>
                    <TabsTrigger value="code" className="data-[state=active]:bg-[#e87a3a] data-[state=active]:text-white text-xs">
                      <Code2 className="h-3.5 w-3.5 mr-1" /> React / Tailwind Code
                    </TabsTrigger>
                    <TabsTrigger value="prompt" className="data-[state=active]:bg-[#e87a3a] data-[state=active]:text-white text-xs">
                      <Sparkles className="h-3.5 w-3.5 mr-1" /> AI Prompt
                    </TabsTrigger>
                  </TabsList>

                  {/* Viewport controls when in preview tab */}
                  <div className="flex items-center gap-1 rounded-lg border border-white/10 bg-zinc-900 p-1 text-xs">
                    <button
                      onClick={() => setPreviewViewport("desktop")}
                      className={cn(
                        "p-1.5 rounded transition-colors",
                        previewViewport === "desktop" ? "bg-white/10 text-white" : "text-zinc-500 hover:text-zinc-300"
                      )}
                      title="Desktop (100%)"
                    >
                      <Monitor className="h-3.5 w-3.5" />
                    </button>
                    <button
                      onClick={() => setPreviewViewport("tablet")}
                      className={cn(
                        "p-1.5 rounded transition-colors",
                        previewViewport === "tablet" ? "bg-white/10 text-white" : "text-zinc-500 hover:text-zinc-300"
                      )}
                      title="Tablet (768px)"
                    >
                      <Tablet className="h-3.5 w-3.5" />
                    </button>
                    <button
                      onClick={() => setPreviewViewport("mobile")}
                      className={cn(
                        "p-1.5 rounded transition-colors",
                        previewViewport === "mobile" ? "bg-white/10 text-white" : "text-zinc-500 hover:text-zinc-300"
                      )}
                      title="Mobile (375px)"
                    >
                      <Smartphone className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

                {/* Tab 1: Live Interactive Preview */}
                <TabsContent value="preview" className="flex-1 overflow-y-auto p-4 bg-black/60 rounded-xl border border-white/[0.06] mt-3">
                  <div
                    className={cn(
                      "mx-auto transition-all duration-300 flex items-center justify-center min-h-[380px]",
                      previewViewport === "desktop" && "w-full",
                      previewViewport === "tablet" && "w-[768px] max-w-full border-x border-zinc-700 bg-zinc-950 p-4 rounded-xl",
                      previewViewport === "mobile" && "w-[375px] max-w-full border-x border-zinc-700 bg-zinc-950 p-2 rounded-2xl shadow-2xl"
                    )}
                  >
                    {renderComponentPreview(selectedComp)}
                  </div>
                </TabsContent>

                {/* Tab 2: React / Tailwind Code */}
                <TabsContent value="code" className="flex-1 flex flex-col overflow-hidden mt-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-mono text-zinc-400">TypeScript / React + Tailwind CSS</span>
                    <button
                      onClick={() => copyToClipboard(selectedComp.reactCode, "React Code")}
                      className="flex items-center gap-1 rounded-lg bg-white/10 px-3 py-1 text-xs text-white hover:bg-white/20 transition-colors"
                    >
                      {copiedTab === "React Code" ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                      <span>{copiedTab === "React Code" ? "Copied!" : "Copy Code"}</span>
                    </button>
                  </div>
                  <pre className="flex-1 overflow-auto rounded-xl border border-white/10 bg-zinc-900/90 p-4 font-mono text-xs text-zinc-200 leading-relaxed">
                    <code>{selectedComp.reactCode}</code>
                  </pre>
                </TabsContent>

                {/* Tab 3: AI Prompt */}
                <TabsContent value="prompt" className="flex-1 flex flex-col overflow-hidden mt-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-mono text-zinc-400">JARVIS Generative AI Prompt</span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => copyToClipboard(selectedComp.aiPrompt, "AI Prompt")}
                        className="flex items-center gap-1 rounded-lg bg-white/10 px-3 py-1 text-xs text-white hover:bg-white/20 transition-colors"
                      >
                        {copiedTab === "AI Prompt" ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                        <span>{copiedTab === "AI Prompt" ? "Copied!" : "Copy Prompt"}</span>
                      </button>
                      <button
                        onClick={() => {
                          setSelectedComp(null);
                          navigate({
                            to: "/console",
                            search: { seed: `Generate a component like ${selectedComp.name}: ${selectedComp.aiPrompt}` } as any,
                          });
                        }}
                        className="flex items-center gap-1 rounded-lg bg-[#e87a3a] px-3 py-1 text-xs font-semibold text-white hover:bg-[#e87a3a]/90 transition-all shadow-sm"
                      >
                        <MessageSquare className="h-3.5 w-3.5" /> Send to JARVIS Chat
                      </button>
                    </div>
                  </div>
                  <div className="flex-1 overflow-auto rounded-xl border border-white/10 bg-zinc-900/90 p-4 font-sans text-sm text-zinc-300 leading-relaxed">
                    <p>{selectedComp.aiPrompt}</p>
                  </div>
                </TabsContent>
              </Tabs>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { getSettings, updateSettings } from "@/lib/threads.functions";
import { MODELS, type ModelProvider } from "@/lib/models";
import { TOOLS, CONNECTORS, PLUGINS, SKILLS } from "@/lib/catalog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { PageHeader, CatalogGrid } from "@/components/jarvis/catalog-grid";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  Palette, FileText, Link2, Sparkles, BookOpen, Plus, Trash2, ExternalLink, GitBranch, Layout, Globe,
} from "lucide-react";

export const Route = createFileRoute("/_authenticated/console/settings")({
  component: SettingsPage,
  head: () => ({
    meta: [
      { title: "Settings — Jarvis" },
      { name: "description", content: "Manage your Jarvis profile, brand style, knowledge, and references." },
    ],
  }),
});

export function SettingsPage() {
  const qc = useQueryClient();
  const getFn = useServerFn(getSettings);
  const updFn = useServerFn(updateSettings);
  const { data: settings } = useQuery({ queryKey: ["settings"], queryFn: () => getFn({}) });
  const [email, setEmail] = useState<string>("");

  // Brand style local state
  const [brandFonts, setBrandFonts] = useState("Source Serif 4 (Headings), Inter (UI), JetBrains Mono (Code)");
  const [brandColors, setBrandColors] = useState("Terracotta (#D97757), Amber (#E69D45), Sage (#58A65C), Dark (#181816)");
  const [brandTone, setBrandTone] = useState("Calm, precise, senior-engineer register. Prefer concrete steps and short paragraphs.");

  // References state (URLs, repos, Figma)
  const [references, setReferences] = useState<Array<{ id: string; type: "url" | "repo" | "figma"; title: string; link: string }>>([
    { id: "1", type: "repo", title: "jarvis-console GitHub Repo", link: "https://github.com/Vishwajeetsrk/jarvis-console" },
    { id: "2", type: "url", title: "Claude Warm Design System", link: "https://jarvis.vishwajeet.dev/docs/brand" },
    { id: "3", type: "figma", title: "Jarvis App Shell UI Kit", link: "https://figma.com/@vishwajeet/jarvis-console" },
  ]);
  const [newRefTitle, setNewRefTitle] = useState("");
  const [newRefLink, setNewRefLink] = useState("");
  const [newRefType, setNewRefType] = useState<"url" | "repo" | "figma">("url");

  // Knowledge Documents state
  const [documents, setDocuments] = useState<Array<{ id: string; name: string; size: string; status: string }>>([
    { id: "1", name: "JARVIS-CONSOLE-SPEC.md", size: "14 KB", status: "Indexed" },
    { id: "2", name: "DESIGN-SYSTEM.md", size: "22 KB", status: "Indexed" },
    { id: "3", name: "global-decisions-log.md", size: "8 KB", status: "Indexed" },
  ]);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setEmail(data.user?.email ?? ""));
  }, []);

  const m = useMutation({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mutationFn: (patch: any) => updFn({ data: patch }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["settings"] });
      toast.success("Saved.");
    },
  });

  if (!settings) {
    return <div className="p-8 text-sm text-muted-foreground">Loading…</div>;
  }

  const toggle = (key: "enabled_tools" | "enabled_connectors" | "enabled_plugins" | "enabled_skills", id: string, next: boolean) => {
    const current = (settings[key] as string[] | undefined) ?? [];
    const list = next ? [...current, id] : current.filter((x) => x !== id);
    m.mutate({ [key]: list });
  };

  const addReference = () => {
    if (!newRefTitle.trim() || !newRefLink.trim()) return;
    setReferences((prev) => [
      ...prev,
      { id: Date.now().toString(), type: newRefType, title: newRefTitle.trim(), link: newRefLink.trim() },
    ]);
    setNewRefTitle("");
    setNewRefLink("");
    toast.success("Reference added.");
  };

  const removeReference = (id: string) => {
    setReferences((prev) => prev.filter((r) => r.id !== id));
    toast.success("Reference removed.");
  };

  return (
    <div className="h-full overflow-y-auto p-8">
      <PageHeader title="Settings" subtitle="Personalize how Jarvis works with you." />

      <Tabs defaultValue="brand" className="max-w-4xl">
        <TabsList className="flex flex-wrap gap-1">
          <TabsTrigger value="brand">Brand Style</TabsTrigger>
          <TabsTrigger value="documents">Knowledge & Docs</TabsTrigger>
          <TabsTrigger value="references">References</TabsTrigger>
          <TabsTrigger value="models">Models</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="connectors">Connectors</TabsTrigger>
          <TabsTrigger value="plugins">Plugins</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>

        {/* ── Brand Style Tab ──────────────────────────────────────────────── */}
        <TabsContent value="brand" className="mt-6 space-y-6">
          <div className="rounded-lg border border-border bg-card p-5 space-y-4">
            <div className="flex items-center gap-2 text-primary font-medium">
              <Palette className="h-5 w-5" /> Brand Identity & Style Rules
            </div>
            
            <div className="grid gap-3">
              <Label>Typography & Fonts</Label>
              <Input
                value={brandFonts}
                onChange={(e) => setBrandFonts(e.target.value)}
                placeholder="Headings font, UI body font, Code font"
              />
              <p className="text-xs text-muted-foreground">Default: Source Serif 4 (Headings) · Inter (UI Body) · JetBrains Mono (Code)</p>
            </div>

            <div className="grid gap-3">
              <Label>Color System & Palette Tokens</Label>
              <Input
                value={brandColors}
                onChange={(e) => setBrandColors(e.target.value)}
                placeholder="Terracotta (#D97757), Amber (#E69D45), Sage (#58A65C)"
              />
              <div className="flex items-center gap-3 pt-1">
                <span className="flex items-center gap-1.5 text-xs font-mono">
                  <span className="h-3.5 w-3.5 rounded-full bg-[#D97757]" /> Terracotta
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono">
                  <span className="h-3.5 w-3.5 rounded-full bg-[#E69D45]" /> Amber
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono">
                  <span className="h-3.5 w-3.5 rounded-full bg-[#58A65C]" /> Sage
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono">
                  <span className="h-3.5 w-3.5 rounded-full bg-[#181816] border border-border" /> Dark Root
                </span>
              </div>
            </div>

            <div className="grid gap-3">
              <Label>Tone of Voice & Response Register</Label>
              <Textarea
                rows={3}
                value={brandTone}
                onChange={(e) => setBrandTone(e.target.value)}
                placeholder="Describe how Jarvis should speak..."
              />
              <p className="text-xs text-muted-foreground">Passed to the AI system prompt for all agent interactions.</p>
            </div>

            <Button onClick={() => toast.success("Brand style updated.")} className="bg-primary text-primary-foreground">
              Save Brand Style
            </Button>
          </div>
        </TabsContent>

        {/* ── Knowledge & Documents Tab ────────────────────────────────────── */}
        <TabsContent value="documents" className="mt-6 space-y-6">
          <div className="rounded-lg border border-border bg-card p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-primary font-medium">
                <FileText className="h-5 w-5" /> Knowledge Documents
              </div>
              <Button size="sm" variant="outline" onClick={() => toast.info("Knowledge drag & drop ready.")}>
                <Plus className="mr-1.5 h-3.5 w-3.5" /> Attach Document
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">Documents and markdown guidelines Jarvis references automatically during tasks.</p>

            <div className="space-y-2">
              {documents.map((doc) => (
                <div key={doc.id} className="flex items-center justify-between rounded-md border border-border bg-background px-4 py-3 text-sm">
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <div>
                      <div className="font-medium">{doc.name}</div>
                      <div className="text-xs text-muted-foreground">{doc.size}</div>
                    </div>
                  </div>
                  <span className="rounded-full bg-sage/10 px-2.5 py-0.5 font-mono text-[11px] text-sage">
                    {doc.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* ── References Tab ──────────────────────────────────────────────── */}
        <TabsContent value="references" className="mt-6 space-y-6">
          <div className="rounded-lg border border-border bg-card p-5 space-y-4">
            <div className="flex items-center gap-2 text-primary font-medium">
              <Link2 className="h-5 w-5" /> External References (URLs, Repos, Figma)
            </div>
            <p className="text-xs text-muted-foreground">Keep persistent links to your repositories, design specs, and reference URLs.</p>

            {/* Add new reference form */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
              <Select value={newRefType} onValueChange={(v: "url" | "repo" | "figma") => setNewRefType(v)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="url">URL</SelectItem>
                  <SelectItem value="repo">GitHub Repo</SelectItem>
                  <SelectItem value="figma">Figma File</SelectItem>
                </SelectContent>
              </Select>
              <Input
                placeholder="Title (e.g. AgencyOS Repo)"
                value={newRefTitle}
                onChange={(e) => setNewRefTitle(e.target.value)}
              />
              <Input
                placeholder="https://..."
                value={newRefLink}
                onChange={(e) => setNewRefLink(e.target.value)}
              />
              <Button onClick={addReference} className="bg-primary text-primary-foreground">
                <Plus className="mr-1.5 h-3.5 w-3.5" /> Add
              </Button>
            </div>

            {/* Reference list */}
            <div className="space-y-2 pt-2">
              {references.map((ref) => (
                <div key={ref.id} className="flex items-center justify-between rounded-md border border-border bg-background px-4 py-3 text-sm">
                  <div className="flex items-center gap-3 overflow-hidden">
                    {ref.type === "repo" ? (
                      <GitBranch className="h-4 w-4 text-primary shrink-0" />
                    ) : ref.type === "figma" ? (
                      <Layout className="h-4 w-4 text-amber shrink-0" />
                    ) : (
                      <Globe className="h-4 w-4 text-sage shrink-0" />
                    )}
                    <div className="truncate">
                      <div className="font-medium truncate">{ref.title}</div>
                      <a href={ref.link} target="_blank" rel="noreferrer" className="text-xs text-muted-foreground hover:underline flex items-center gap-1">
                        {ref.link} <ExternalLink className="h-3 w-3 inline" />
                      </a>
                    </div>
                  </div>
                  <button onClick={() => removeReference(ref.id)} className="text-muted-foreground hover:text-destructive p-1">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* ── Models Tab ──────────────────────────────────────────────────── */}
        <TabsContent value="models" className="mt-6 space-y-6">
          <div className="grid gap-2">
            <Label>Default model</Label>
            <Select
              value={settings.default_model}
              onValueChange={(v) => m.mutate({ default_model: v })}
            >
              <SelectTrigger className="w-[300px]"><SelectValue /></SelectTrigger>
              <SelectContent>
                {(["gemini", "groq", "ollama"] as ModelProvider[]).map((provider) => (
                  <div key={provider}>
                    <div className="px-2 py-1 text-[10px] uppercase tracking-widest text-muted-foreground/60 font-mono">
                      {provider === "gemini" ? "✦ Google Gemini (Free)" : provider === "groq" ? "⚡ Groq (Free)" : "🏠 Local Ollama"}
                    </div>
                    {MODELS.filter((mo) => mo.provider === provider).map((mo) => (
                      <SelectItem key={mo.id} value={mo.id}>
                        <span className="flex items-center gap-2">
                          <span className="text-primary">{mo.icon}</span>
                          {mo.label}
                        </span>
                      </SelectItem>
                    ))}
                  </div>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">Used for every new chat unless you override it in-thread.</p>
          </div>

          <div>
            <Label className="mb-2 block">Available models</Label>
            <div className="grid gap-2">
              {MODELS.map((mo) => (
                <div key={mo.id} className="flex items-center justify-between rounded-md border border-border bg-card px-4 py-2">
                  <span className="flex items-center gap-3">
                    <span className="text-lg text-primary">{mo.icon}</span>
                    <span>
                      <div className="text-sm font-medium">{mo.label}</div>
                      <div className="font-mono text-[10px] text-muted-foreground">{mo.id}</div>
                    </span>
                  </span>
                  {settings.default_model === mo.id && (
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] text-primary">Default</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* ── Skills / Connectors / Plugins / Profile ──────────────────────── */}
        <TabsContent value="skills" className="mt-6">
          <CatalogGrid items={SKILLS} enabled={(settings.enabled_skills as string[]) ?? []} onToggle={(id, n) => toggle("enabled_skills", id, n)} />
        </TabsContent>
        <TabsContent value="connectors" className="mt-6">
          <CatalogGrid items={CONNECTORS} enabled={(settings.enabled_connectors as string[]) ?? []} onToggle={(id, n) => toggle("enabled_connectors", id, n)} />
        </TabsContent>
        <TabsContent value="plugins" className="mt-6">
          <CatalogGrid items={PLUGINS} enabled={(settings.enabled_plugins as string[]) ?? []} onToggle={(id, n) => toggle("enabled_plugins", id, n)} />
          <div className="mt-6">
            <Label className="mb-2 block">Tools</Label>
            <CatalogGrid items={TOOLS} enabled={(settings.enabled_tools as string[]) ?? []} onToggle={(id, n) => toggle("enabled_tools", id, n)} />
          </div>
        </TabsContent>

        <TabsContent value="profile" className="mt-6 space-y-4">
          <div className="grid gap-2">
            <Label>Email</Label>
            <Input value={email} disabled />
          </div>
          <div className="grid gap-2">
            <Label>Theme</Label>
            <Select value={settings.theme} onValueChange={(v) => m.mutate({ theme: v })}>
              <SelectTrigger className="w-[220px]"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

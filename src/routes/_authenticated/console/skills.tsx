import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { getSettings, updateSettings } from "@/lib/threads.functions";
import { listLearnedSkills, createLearnedSkill, deleteLearnedSkill, listShippedSkillCatalog } from "@/lib/skills.functions";
import { SKILLS } from "@/lib/catalog";
import { PageHeader } from "@/components/jarvis/catalog-grid";
import { useState } from "react";
import { Search, CheckCircle2, Circle, Sparkles, BookOpen, Plus, Trash2, X, FileCode2 } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/console/skills")({
  component: SkillsPage,
  head: () => ({ meta: [{ title: "Skills — Jarvis" }] }),
});

const SKILL_TAGS: Record<string, string[]> = {
  "ceo-agent": ["strategy", "planning", "arbitration"],
  "planner": ["tasks", "roadmap", "priorities"],
  "saas-builder": ["code", "PRD", "webhooks", "TRD"],
  "designer": ["tokens", "figma", "components"],
  "researcher": ["web", "docs", "briefs"],
  "writer": ["copy", "PRDs", "changelogs"],
  "test-agent": ["vitest", "playwright", "e2e"],
  "reviewer": ["diffs", "regressions", "PRs"],
  "deployer": ["vercel", "staging", "production"],
  "sre": ["metrics", "alerts", "postmortems"],
  "memory-keeper": ["indexing", "search", "knowledge"],
  "governance": ["policies", "ACLs", "compliance"],
  "growth": ["landing", "SEO", "outreach"],
  "ops": ["automation", "cron", "workflows"],
  "billing": ["stripe", "invoices", "subscriptions"],
  "connector": ["MCPs", "APIs", "webhooks"],
  "voice": ["STT", "TTS", "Whisper"],
  "coworker": ["pair-programming", "live", "review"],
  "morning": ["briefing", "status", "daily"],
  "open-design": ["design-systems", "Apple", "Arc", "Claude"],
};

function SkillsPage() {
  const qc = useQueryClient();
  const getFn = useServerFn(getSettings);
  const updFn = useServerFn(updateSettings);
  const { data } = useQuery({ queryKey: ["settings"], queryFn: () => getFn({}) });
  const enabled = (data?.enabled_skills as string[] | undefined) ?? [];
  const [search, setSearch] = useState("");

  const m = useMutation({
    mutationFn: (next: string[]) => updFn({ data: { enabled_skills: next } }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["settings"] });
      toast.success("Skills updated.");
    },
  });

  const toggle = (id: string, next: boolean) =>
    m.mutate(next ? [...enabled, id] : enabled.filter((x) => x !== id));

  const filtered = SKILLS.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.description.toLowerCase().includes(search.toLowerCase())
  );

  const learnedFn = useServerFn(listLearnedSkills);
  const createFn = useServerFn(createLearnedSkill);
  const deleteFn = useServerFn(deleteLearnedSkill);
  const learned = useQuery({
    queryKey: ["learned-skills"],
    queryFn: () => learnedFn(),
  });

  const shippedFn = useServerFn(listShippedSkillCatalog);
  const shipped = useQuery({
    queryKey: ["shipped-skill-catalog"],
    queryFn: () => shippedFn(),
  });
  const personaIds = new Set(SKILLS.map((s) => s.id));
  const catalogSkills = (shipped.data ?? []).filter((s) => !personaIds.has(s.name));

  const createLearned = useMutation({
    mutationFn: (input: { name: string; category: string; description: string; content: string }) =>
      createFn({ data: input }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["learned-skills"] });
      setShowForm(false);
      setForm({ name: "", category: "learned", description: "", content: "" });
      toast.success("Skill saved.");
    },
    onError: (e) => toast.error(e instanceof Error ? e.message : "Failed to save skill"),
  });

  const removeLearned = useMutation({
    mutationFn: (name: string) => deleteFn({ data: { name } }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["learned-skills"] });
      toast.success("Skill deleted.");
    },
    onError: (e) => toast.error(e instanceof Error ? e.message : "Failed to delete skill"),
  });

  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", category: "learned", description: "", content: "" });
  const learnedSkills = learned.data ?? [];

  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto max-w-5xl p-8 space-y-6">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <PageHeader title="Skills" subtitle="The 20 specialized agents in the Jarvis crew." />
          <div className="flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-2 py-1.5 text-xs font-medium">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>{enabled.length} active</span>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search agents…"
            className="w-full rounded-lg border border-border bg-surface pl-9 pr-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
          />
        </div>

        {/* Skills grid */}
        <div className="grid gap-3 sm:grid-cols-2">
          {filtered.map((skill) => {
            const isEnabled = enabled.includes(skill.id);
            const tags = SKILL_TAGS[skill.id] ?? [];
            return (
              <button
                key={skill.id}
                onClick={() => toggle(skill.id, !isEnabled)}
                className={`group flex items-start gap-3 rounded-xl border p-4 text-left transition-all hover:-translate-y-0.5 ${
                  isEnabled
                    ? "border-primary/40 bg-primary/5 shadow-sm"
                    : "border-border bg-card hover:border-primary/20"
                }`}
              >
                <div className={`shrink-0 rounded-lg p-2.5 ${isEnabled ? "bg-primary/10" : "bg-surface"}`}>
                  <skill.icon className={`h-4 w-4 ${isEnabled ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <code className={`font-mono text-sm ${isEnabled ? "text-primary" : "text-foreground"}`}>
                      {skill.name}
                    </code>
                    {isEnabled ? (
                      <span className="flex items-center gap-1 text-[10px] font-medium text-primary shrink-0">
                        <CheckCircle2 className="h-3 w-3" /> active
                      </span>
                    ) : (
                      <Circle className="h-3.5 w-3.5 shrink-0 text-muted-foreground/30" />
                    )}
                  </div>
                  <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">{skill.description}</p>
                  {tags.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-border/60 bg-surface/60 px-2 py-0.5 text-[10px] text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="py-12 text-center text-sm text-muted-foreground">
            No agents match your search.
          </div>
        )}

        {/* Shipped skill catalog (SKILL.md bundles) */}
        <div className="pt-4">
          <div>
            <h2 className="flex items-center gap-2 text-sm font-semibold">
              <FileCode2 className="h-4 w-4 text-primary" />
              Skill Catalog
            </h2>
            <p className="mt-0.5 text-xs text-muted-foreground">
              The 17 official Anthropic skills plus Jarvis's own, shipped as SKILL.md bundles. Toggle to arm them for chat.
            </p>
          </div>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {catalogSkills.map((s) => {
              const isOn = enabled.includes(s.name);
              return (
                <button
                  key={s.name}
                  onClick={() => toggle(s.name, !isOn)}
                  className={`flex items-start gap-3 rounded-xl border p-3.5 text-left transition-all hover:-translate-y-0.5 ${
                    isOn ? "border-primary/40 bg-primary/5" : "border-border bg-card hover:border-primary/20"
                  }`}
                >
                  <div className={`shrink-0 rounded-lg p-2 ${isOn ? "bg-primary/10" : "bg-surface"}`}>
                    <FileCode2 className={`h-4 w-4 ${isOn ? "text-primary" : "text-muted-foreground"}`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <code className={`font-mono text-[13px] ${isOn ? "text-primary" : "text-foreground"}`}>{s.name}</code>
                      {isOn ? (
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary" />
                      ) : (
                        <Circle className="h-3.5 w-3.5 shrink-0 text-muted-foreground/30" />
                      )}
                    </div>
                    <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">{s.description}</p>
                    <span className="mt-1.5 inline-block rounded-full border border-border/60 bg-surface/60 px-2 py-0.5 text-[10px] text-muted-foreground">
                      {s.category}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
          {catalogSkills.length === 0 && (
            <div className="mt-3 rounded-xl border border-dashed border-border bg-surface/30 p-6 text-center text-xs text-muted-foreground">
              Catalog is empty.
            </div>
          )}
        </div>

        {/* Learned skills (self-improving) */}
        <div className="pt-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="flex items-center gap-2 text-sm font-semibold">
                <BookOpen className="h-4 w-4 text-primary" />
                Learned Skills
              </h2>
              <p className="mt-0.5 text-xs text-muted-foreground">
                SKILL.md files Jarvis authors from experience. <code className="text-[11px]">skills/</code> — ask Jarvis in chat to "save this as a skill".
              </p>
            </div>
            <button
              onClick={() => setShowForm((v) => !v)}
              className="flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium transition-colors hover:border-primary/40"
            >
              {showForm ? <X className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
              {showForm ? "Close" : "New skill"}
            </button>
          </div>

          {showForm && (
            <form
              className="mt-3 space-y-2.5 rounded-xl border border-border bg-surface/60 p-4"
              onSubmit={(e) => {
                e.preventDefault();
                createLearned.mutate(form);
              }}
            >
              <div className="grid gap-2.5 sm:grid-cols-2">
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="skill-name (lowercase, dashes)"
                  className="rounded-lg border border-border bg-card px-3 py-2 text-sm outline-none focus:border-primary"
                  required
                />
                <input
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  placeholder="category (e.g. automation)"
                  className="rounded-lg border border-border bg-card px-3 py-2 text-sm outline-none focus:border-primary"
                />
              </div>
              <input
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                placeholder="One-sentence description"
                className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm outline-none focus:border-primary"
                required
              />
              <textarea
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
                placeholder={"## When to Use\n…\n\n## How to Run\n…\n\n## Procedure\n…\n\n## Pitfalls\n…"}
                rows={8}
                className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm font-mono outline-none focus:border-primary resize-y"
                required
              />
              <button
                type="submit"
                disabled={createLearned.isPending}
                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                {createLearned.isPending ? "Saving…" : "Save skill"}
              </button>
            </form>
          )}

          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {learnedSkills.map((s) => (
              <div key={s.path} className="rounded-xl border border-border bg-card p-4">
                <div className="flex items-center justify-between gap-2">
                  <code className="font-mono text-sm text-primary">{s.name}</code>
                  <div className="flex items-center gap-1">
                    <span className="rounded-full border border-border/60 bg-surface/60 px-2 py-0.5 text-[10px] text-muted-foreground">{s.category}</span>
                    <button
                      onClick={() => removeLearned.mutate(s.name)}
                      className="rounded p-1 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            ))}
            {learnedSkills.length === 0 && !learned.isLoading && (
              <div className="rounded-xl border border-dashed border-border bg-surface/30 p-6 text-center text-xs text-muted-foreground sm:col-span-2">
                No learned skills yet. Ask Jarvis to save an approach as a skill.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

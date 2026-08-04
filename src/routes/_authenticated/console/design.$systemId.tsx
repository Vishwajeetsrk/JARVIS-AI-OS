import { createFileRoute, Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft, Code, FileText, Eye, BookOpen, Palette, Layers, Monitor, Smartphone, ExternalLink,
} from "lucide-react";
import { useState } from "react";

import { getDesignSystem, type DesignSystemDetail } from "@/lib/design-systems";

function DesignSystemNotFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 p-10">
      <Palette className="h-12 w-12 text-muted-foreground/40" />
      <h2 className="text-xl font-semibold">Design system not found</h2>
      <Link to="/console/design" className="text-sm text-primary hover:underline">
        ← Back to design systems
      </Link>
    </div>
  );
}

export const Route = createFileRoute("/_authenticated/console/design/$systemId")({
  component: DesignSystemDetailPage,
  loader: async ({ params }) => {
    try {
      const res = await fetch(`/api/design-systems?id=${params.systemId}`);
      if (!res.ok) return null;
      return (await res.json()) as DesignSystemDetail;
    } catch {
      return null;
    }
  },
  notFoundComponent: DesignSystemNotFound,
});

function DesignSystemDetailPage() {
  const data = Route.useLoaderData();
  if (!data) return <DesignSystemNotFound />;

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <header className="flex items-center gap-3 border-b border-border px-6 py-3.5 bg-surface/40">
        <Link to="/console/design" className="rounded-lg p-1.5 hover:bg-background border border-border text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-semibold truncate">{data.name}</h1>
            <Badge variant="outline" className="text-xs shrink-0">{data.category}</Badge>
          </div>
          <p className="text-xs text-muted-foreground truncate">{data.description}</p>
        </div>
        <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono shrink-0">
          <span className="flex items-center gap-1 rounded-md bg-background border border-border px-2.5 py-1"><Palette className="h-3.5 w-3.5 text-primary" />{data.tokenCount} tokens</span>
          <span className="flex items-center gap-1 rounded-md bg-background border border-border px-2.5 py-1"><Layers className="h-3.5 w-3.5 text-primary" />{data.componentCount} components</span>
        </div>
      </header>

      <div className="flex-1 overflow-hidden p-6">
        <Tabs defaultValue="preview" className="flex h-full flex-col">
          <TabsList className="w-fit">
            <TabsTrigger value="preview"><Eye className="mr-1.5 h-3.5 w-3.5 text-primary" />Live Preview</TabsTrigger>
            <TabsTrigger value="tokens"><Code className="mr-1.5 h-3.5 w-3.5 text-primary" />Tokens ({data.tokenCount})</TabsTrigger>
            <TabsTrigger value="components"><Layers className="mr-1.5 h-3.5 w-3.5 text-primary" />HTML Source</TabsTrigger>
            <TabsTrigger value="usage"><BookOpen className="mr-1.5 h-3.5 w-3.5 text-primary" />Usage Guide</TabsTrigger>
            <TabsTrigger value="design"><FileText className="mr-1.5 h-3.5 w-3.5 text-primary" />Design System Spec</TabsTrigger>
          </TabsList>

          <div className="mt-4 flex-1 min-h-0">
            <TabsContent value="preview" className="m-0 h-full">
              <PreviewTab components={data.components} tokens={data.tokens} />
            </TabsContent>

            <TabsContent value="tokens" className="m-0 h-full">
              <TokensTab tokens={data.tokens} />
            </TabsContent>

            <TabsContent value="components" className="m-0 h-full">
              <ComponentsTab components={data.components} />
            </TabsContent>

            <TabsContent value="usage" className="m-0 h-full">
              <UsageTab usage={data.usage} />
            </TabsContent>

            <TabsContent value="design" className="m-0 h-full">
              <DesignTab design={data.design} />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

function PreviewTab({ components, tokens }: { components: string; tokens: string }) {
  const [device, setDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");

  // Determine if components string is already a complete HTML document
  let srcDoc = components;
  if (!components.toLowerCase().includes("<!doctype html>") && !components.toLowerCase().includes("<html")) {
    srcDoc = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <style>
    ${tokens}
    body { background: var(--bg, #0f172a); color: var(--fg, #f8fafc); font-family: var(--font-body, system-ui); padding: 2rem; margin: 0; }
  </style>
</head>
<body>
  ${components}
</body>
</html>`;
  }

  const widths = {
    desktop: "w-full h-full",
    tablet: "w-[768px] h-full mx-auto shadow-2xl rounded-xl border border-border",
    mobile: "w-[390px] h-full mx-auto shadow-2xl rounded-2xl border-4 border-border",
  };

  return (
    <div className="flex h-full flex-col">
      <div className="mb-3 flex items-center justify-between gap-2 bg-surface/40 p-2 rounded-lg border border-border">
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-muted-foreground font-mono mr-2">Viewport:</span>
          {(["desktop", "tablet", "mobile"] as const).map((d) => (
            <button
              key={d}
              onClick={() => setDevice(d)}
              className={`rounded-md px-3 py-1 text-xs font-medium capitalize transition-colors ${
                device === d
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-background text-muted-foreground hover:text-foreground"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
        <span className="text-[11px] font-mono text-sage flex items-center gap-1">
          ● Interactive Live Frame
        </span>
      </div>

      <div className="flex-1 min-h-0 bg-background/50 rounded-xl overflow-hidden p-2">
        <iframe
          srcDoc={srcDoc}
          className={`${widths[device]} transition-all bg-background border-0 rounded-lg`}
          title="Design system live preview"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    </div>
  );
}

function TokensTab({ tokens }: { tokens: string }) {
  const lines = tokens.split("\n");
  const tokenLines = lines.filter((l) => l.trim().startsWith("--") && l.includes(":"));

  const categories: Record<string, { name: string; value: string }[]> = {};
  for (const line of tokenLines) {
    const [key, ...rest] = line.trim().split(":");
    const value = rest.join(":").trim().replace(";", "");
    const category = key.split("-")[1] || "other";
    if (!categories[category]) categories[category] = [];
    categories[category].push({ name: key.trim(), value });
  }

  const categoryLabels: Record<string, string> = {
    bg: "Backgrounds",
    surface: "Surfaces",
    fg: "Foregrounds",
    muted: "Muted Text",
    accent: "Accents & Brand",
    border: "Borders & Dividers",
    success: "Success States",
    warn: "Warning States",
    danger: "Danger & Error",
    font: "Typography Stacks",
    text: "Text Scales",
    space: "Spacing Tokens",
    radius: "Border Radii",
    elev: "Elevations & Shadows",
    motion: "Transitions & Motion",
  };

  return (
    <div className="h-full overflow-y-auto pr-2 space-y-6">
      {Object.keys(categories).length === 0 ? (
        <pre className="rounded-xl border border-border bg-card p-4 font-mono text-xs text-foreground overflow-x-auto">
          {tokens}
        </pre>
      ) : (
        Object.entries(categories).map(([cat, vars]) => (
          <div key={cat} className="rounded-xl border border-border bg-card p-4">
            <h3 className="mb-3 text-xs font-mono font-bold uppercase tracking-wider text-primary">
              {categoryLabels[cat] || cat}
            </h3>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {vars.map((v) => (
                <div key={v.name} className="flex items-center gap-2.5 rounded-lg border border-border/60 bg-surface/50 p-2 text-xs">
                  {v.value.startsWith("#") || v.value.startsWith("rgb") || v.value.startsWith("hsl") || v.name.includes("bg") || v.name.includes("accent") || v.name.includes("surface") ? (
                    <span className="h-5 w-5 shrink-0 rounded border border-border shadow-sm" style={{ background: v.value }} />
                  ) : null}
                  <div className="min-w-0 flex-1">
                    <code className="font-mono text-[11px] font-semibold text-foreground truncate block">{v.name}</code>
                    <span className="font-mono text-[10px] text-muted-foreground truncate block">{v.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

function ComponentsTab({ components }: { components: string }) {
  return (
    <div className="h-full overflow-hidden rounded-xl border border-border bg-card flex flex-col">
      <div className="border-b border-border px-4 py-2 text-xs font-mono text-muted-foreground bg-surface/40">
        HTML Component Fixture Code
      </div>
      <pre className="flex-1 overflow-auto p-4 font-mono text-xs text-foreground leading-relaxed">
        {components}
      </pre>
    </div>
  );
}

function UsageTab({ usage }: { usage: string }) {
  return (
    <div className="h-full overflow-y-auto rounded-xl border border-border bg-card p-6">
      <div className="prose prose-sm max-w-none dark:prose-invert">
        {usage ? (
          usage.split("\n").map((line, i) => (
            <p key={i} className="text-sm text-foreground leading-relaxed">{line || "\u00A0"}</p>
          ))
        ) : (
          <div className="text-sm text-muted-foreground">No usage documentation provided.</div>
        )}
      </div>
    </div>
  );
}

function DesignTab({ design }: { design: string }) {
  return (
    <div className="h-full overflow-y-auto rounded-xl border border-border bg-card p-6">
      <div className="prose prose-sm max-w-none dark:prose-invert">
        {design ? (
          design.split("\n").map((line, i) => (
            <p key={i} className="text-sm text-foreground leading-relaxed">{line || "\u00A0"}</p>
          ))
        ) : (
          <div className="text-sm text-muted-foreground">No design specification provided.</div>
        )}
      </div>
    </div>
  );
}

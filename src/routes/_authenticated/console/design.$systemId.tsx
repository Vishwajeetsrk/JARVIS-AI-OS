import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft, Code, FileText, Eye, BookOpen, Palette, Layers, Monitor, Smartphone,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface DesignSystemDetail {
  id: string;
  name: string;
  category: string;
  description: string;
  tokenCount: number;
  componentCount: number;
  tokens: string;
  components: string;
  usage: string;
  design: string;
}

export const Route = createFileRoute("/_authenticated/console/design/$systemId")({
  component: DesignSystemDetailPage,
  loader: async ({ params }) => {
    const res = await fetch(`/api/design-systems?id=${params.systemId}`);
    if (!res.ok) return null;
    return (await res.json()) as DesignSystemDetail;
  },
  notFoundComponent: () => (
    <div className="flex h-full flex-col items-center justify-center gap-4 p-10">
      <Palette className="h-12 w-12 text-muted-foreground/40" />
      <h2 className="text-xl font-semibold">Design system not found</h2>
      <Link to="/console/design" className="text-sm text-primary hover:underline">
        ← Back to design systems
      </Link>
    </div>
  ),
});

function DesignSystemDetailPage() {
  const data = Route.useLoaderData();
  if (!data) return <Route.notFoundComponent />;

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <header className="flex items-center gap-3 border-b border-border px-4 py-3">
        <Link to="/console/design" className="rounded p-1 hover:bg-background">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-semibold">{data.name}</h1>
            <Badge variant="outline" className="text-xs">{data.category}</Badge>
          </div>
          <p className="text-xs text-muted-foreground">{data.description}</p>
        </div>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><Palette className="h-3.5 w-3.5" />{data.tokenCount} tokens</span>
          <span className="flex items-center gap-1"><Layers className="h-3.5 w-3.5" />{data.componentCount} components</span>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-4">
        <Tabs defaultValue="preview" className="h-full">
          <TabsList>
            <TabsTrigger value="preview"><Eye className="mr-1.5 h-3.5 w-3.5" />Preview</TabsTrigger>
            <TabsTrigger value="studio"><Monitor className="mr-1.5 h-3.5 w-3.5" />Studio</TabsTrigger>
            <TabsTrigger value="tokens"><Code className="mr-1.5 h-3.5 w-3.5" />Tokens</TabsTrigger>
            <TabsTrigger value="components"><Layers className="mr-1.5 h-3.5 w-3.5" />Components</TabsTrigger>
            <TabsTrigger value="usage"><BookOpen className="mr-1.5 h-3.5 w-3.5" />Usage</TabsTrigger>
            <TabsTrigger value="design"><FileText className="mr-1.5 h-3.5 w-3.5" />Design</TabsTrigger>
          </TabsList>

          <div className="mt-4 h-[calc(100%-48px)]">
            <TabsContent value="preview" className="m-0 h-full">
              <PreviewTab systemId={data.id} tokens={data.tokens} components={data.components} />
            </TabsContent>

            <TabsContent value="studio" className="m-0 h-full">
              <StudioTab systemId={data.id} systemName={data.name} />
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

const DEVICE_FRAMES = [
  { id: "desktop", label: "MacBook", icon: Monitor, path: "/assets/frames/macbook.html", width: 1440, height: 900 },
  { id: "tablet", label: "iPad Pro", icon: Monitor, path: "/assets/frames/ipad-pro.html", width: 834, height: 1194 },
  { id: "mobile", label: "iPhone 15 Pro", icon: Smartphone, path: "/assets/frames/iphone-15-pro.html", width: 390, height: 844 },
  { id: "android", label: "Android Pixel", icon: Smartphone, path: "/assets/frames/android-pixel.html", width: 412, height: 915 },
  { id: "browser", label: "Browser", icon: Monitor, path: "/assets/frames/browser-chrome.html", width: 1280, height: 800 },
] as const;

function StudioTab({ systemId, systemName }: { systemId: string; systemName: string }) {
  const [device, setDevice] = useState<typeof DEVICE_FRAMES[number]>(DEVICE_FRAMES[0]);
  const [mode, setMode] = useState<"light" | "dark">("light");
  const previewUrl = `/api/design-systems/${systemId}/preview`;
  const frameUrl = `${device.path}?screen=${encodeURIComponent(previewUrl)}`;

  return (
    <div className="flex h-full flex-col">
      <div className="mb-3 flex items-center gap-3 border-b border-border pb-3">
        <div className="flex items-center gap-1.5 rounded-lg bg-background p-1">
          {DEVICE_FRAMES.map((d) => (
            <button
              key={d.id}
              onClick={() => setDevice(d)}
              className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs transition-colors ${
                device.id === d.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <d.icon className="h-3.5 w-3.5" />
              {d.label}
            </button>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className="rounded-md border border-border px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground"
          >
            {mode === "light" ? "☀ Light" : "🌙 Dark"}
          </button>
          <a
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-border px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground"
          >
            Open standalone
          </a>
        </div>
      </div>

      <div className="flex-1 overflow-hidden rounded-xl border border-border bg-background/50">
        {device.id === "desktop" || device.id === "browser" ? (
          <iframe
            src={frameUrl}
            className="h-full w-full"
            title={`${systemName} on ${device.label}`}
            sandbox="allow-scripts allow-same-origin"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-b from-muted/30 to-muted/10 p-4">
            <div className="overflow-hidden rounded-[calc(56px*0.7)] shadow-2xl" style={{ transform: "scale(0.7)", transformOrigin: "center center" }}>
              <iframe
                src={frameUrl}
                className="border-0"
                style={{ width: device.width, height: device.height }}
                title={`${systemName} on ${device.label}`}
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function PreviewTab({ systemId, tokens, components }: { systemId: string; tokens: string; components: string }) {
  const previewHtml = `<!DOCTYPE html><html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><style>${tokens}body{background:var(--bg);color:var(--fg);font-family:var(--font-body);padding:2rem;max-width:1200px;margin:0 auto}section{border:1px solid var(--border);border-radius:12px;padding:1.5rem;margin-bottom:2rem;background:var(--surface)}h2{font-size:1.25rem;margin:0 0 1rem;color:var(--fg)}h3{margin:0 0 .75rem;color:var(--fg-2)}pre{background:color-mix(in oklab,var(--bg),black 5%);padding:1rem;border-radius:8px;overflow-x:auto;font-family:var(--font-mono);font-size:13px}.grid{display:grid;gap:1rem}.grid-2{grid-template-columns:repeat(2,1fr)}.grid-3{grid-template-columns:repeat(3,1fr)}.color-swatch{height:48px;border-radius:8px;border:1px solid var(--border)}.token-label{font-size:11px;color:var(--muted);margin-top:4px;font-family:var(--font-mono)}button{background:var(--accent);color:var(--accent-on);border:none;padding:8px 16px;border-radius:8px;font-family:var(--font-body);cursor:pointer}input{border:1px solid var(--border);border-radius:8px;padding:8px 12px;font-family:var(--font-body);background:var(--surface)}</style></head><body>${components}</body></html>`;

  return (
    <div className="flex h-full flex-col">
      <div className="mb-3 flex items-center gap-2">
        <span className="text-xs text-muted-foreground">Device:</span>
        <select className="rounded border border-border bg-background px-2 py-1 text-xs">
          <option value="desktop">Desktop</option>
          <option value="tablet">Tablet</option>
          <option value="mobile">Mobile</option>
        </select>
      </div>
      <iframe
        srcDoc={previewHtml}
        className="w-full flex-1 rounded-lg border border-border"
        title={`${systemId} preview`}
      />
    </div>
  );
}

function TokensTab({ tokens }: { tokens: string }) {
  const lines = tokens.split("\n");
  const tokenLines = lines.filter((l) => l.trim().startsWith("--") && l.includes(":"));

  // Group tokens by category
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
    muted: "Muted",
    accent: "Accent",
    border: "Borders",
    success: "Success",
    warn: "Warning",
    danger: "Danger",
    font: "Typography",
    text: "Typography",
    spacing: "Spacing",
    radius: "Borders & Radius",
    shadow: "Shadows",
    transition: "Motion",
  };

  return (
    <div className="h-full overflow-y-auto">
      {Object.entries(categories).map(([cat, vars]) => (
        <div key={cat} className="mb-6">
          <h3 className="mb-2 text-sm font-medium text-foreground">{categoryLabels[cat] || cat}</h3>
          <div className="space-y-1">
            {vars.slice(0, 20).map((v) => (
              <div key={v.name} className="flex items-center gap-3 rounded-md bg-background px-3 py-1.5 text-xs">
                {v.name.startsWith("--bg") || v.name.startsWith("--surface") || v.name.startsWith("--accent") || v.name.startsWith("--fg") ? (
                  <span className="h-5 w-5 shrink-0 rounded border border-border" style={{ background: v.value }} />
                ) : null}
                <code className="flex-1 font-mono text-muted-foreground">{v.name}</code>
                <span className="text-foreground">{v.value}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ComponentsTab({ components }: { components: string }) {
  const previewHtml = `<!DOCTYPE html><html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><style>body{margin:1rem;font-family:system-ui,sans-serif}${components.match(/<style>([\s\S]*?)<\/style>/)?.[1] || ""}</style></head><body>${components.replace(/<style>[\s\S]*?<\/style>/, "")}</body></html>`;

  return (
    <iframe
      srcDoc={previewHtml}
      className="h-full w-full rounded-lg border border-border"
      title="Components preview"
    />
  );
}

function UsageTab({ usage }: { usage: string }) {
  return (
    <div className="h-full overflow-y-auto">
      <div className="prose prose-sm max-w-none dark:prose-invert">
        {usage.split("\n").map((line, i) => (
          <p key={i} className="text-sm text-muted-foreground">{line || "\u00A0"}</p>
        ))}
      </div>
    </div>
  );
}

function DesignTab({ design }: { design: string }) {
  return (
    <div className="h-full overflow-y-auto">
      <div className="prose prose-sm max-w-none dark:prose-invert">
        {design.split("\n").map((line, i) => (
          <p key={i} className="text-sm text-muted-foreground">{line || "\u00A0"}</p>
        ))}
      </div>
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Palette, Monitor, Layout, Eye, Code } from "lucide-react";
import { useState } from "react";

interface TemplateFile {
  path: string;
  label: string;
  type: "kit" | "preview" | "asset";
}

interface DesignSystemDetail {
  id: string;
  name: string;
  category: string;
  description: string;
  tokenCount: number;
  componentCount: number;
}

export const Route = createFileRoute("/_authenticated/console/templates/$systemId")({
  component: TemplatesDetailPage,
  loader: async ({ params }) => {
    const [sysRes, tmplRes] = await Promise.all([
      fetch(`/api/design-systems?id=${params.systemId}`),
      fetch(`/api/design-systems/${params.systemId}/templates`),
    ]);
    const system = sysRes.ok ? (await sysRes.json()) as DesignSystemDetail : null;
    const templates = tmplRes.ok ? (await tmplRes.json()) as TemplateFile[] : [];
    return { system, templates };
  },
  notFoundComponent: () => (
    <div className="flex h-full flex-col items-center justify-center gap-4 p-10">
      <Layout className="h-12 w-12 text-muted-foreground/40" />
      <h2 className="text-xl font-semibold">Design system not found</h2>
      <Link to="/console/templates" className="text-sm text-primary hover:underline">
        ← Back to templates
      </Link>
    </div>
  ),
});

function TemplatesDetailPage() {
  const { system, templates } = Route.useLoaderData();
  if (!system) return <Route.notFoundComponent />;

  const [active, setActive] = useState(templates[0]?.path || "");
  const activeTemplate = templates.find((t) => t.path === active);

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <header className="flex items-center gap-3 border-b border-border px-4 py-3">
        <Link to="/console/templates" className="rounded p-1 hover:bg-background">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-semibold">{system.name} Templates</h1>
            <Badge variant="outline" className="text-xs">{system.category}</Badge>
          </div>
          <p className="text-xs text-muted-foreground">{system.description}</p>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-56 shrink-0 border-r border-border p-3">
          <h3 className="mb-2 text-xs font-medium text-muted-foreground">Templates</h3>
          <div className="space-y-1">
            {templates.map((tmpl) => (
              <button
                key={tmpl.path}
                onClick={() => setActive(tmpl.path)}
                className={`w-full rounded-md px-3 py-2 text-left text-xs transition-colors ${
                  active === tmpl.path
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <div className="flex items-center gap-2">
                  {tmpl.type === "kit" ? <Monitor className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                  <span>{tmpl.label}</span>
                </div>
              </button>
            ))}
          </div>
        </aside>

        <main className="flex-1 p-4">
          {activeTemplate ? (
            <div className="h-full w-full overflow-hidden rounded-lg border border-border">
              <iframe
                src={`/api/design-systems/${system.id}/templates/${activeTemplate.path}`}
                className="h-full w-full"
                title={activeTemplate.label}
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
              Select a template from the sidebar
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

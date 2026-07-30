import { createFileRoute } from "@tanstack/react-router";
import { getDesignSystem } from "@/lib/design-systems";

export const Route = createFileRoute("/api/design-systems/$id/preview")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const system = getDesignSystem(params.id);
        if (!system) {
          return new Response("Design system not found", { status: 404 });
        }
        const html = `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>${system.name} preview</title><style>${system.tokens}body{background:var(--bg);color:var(--fg);font-family:var(--font-body);padding:2rem;max-width:1200px;margin:0 auto}section{border:1px solid var(--border);border-radius:12px;padding:1.5rem;margin-bottom:2rem;background:var(--surface)}h2{font-size:1.25rem;margin:0 0 1rem;color:var(--fg)}h3{margin:0 0 .75rem;color:var(--fg-2)}pre{background:color-mix(in oklab,var(--bg),black 5%);padding:1rem;border-radius:8px;overflow-x:auto;font-family:var(--font-mono);font-size:13px}.grid{display:grid;gap:1rem}.grid-2{grid-template-columns:repeat(2,1fr)}.grid-3{grid-template-columns:repeat(3,1fr)}.color-swatch{height:48px;border-radius:8px;border:1px solid var(--border)}.token-label{font-size:11px;color:var(--muted);margin-top:4px;font-family:var(--font-mono)}button{background:var(--accent);color:var(--accent-on);border:none;padding:8px 16px;border-radius:8px;font-family:var(--font-body);cursor:pointer}input{border:1px solid var(--border);border-radius:8px;padding:8px 12px;font-family:var(--font-body);background:var(--surface)}</style></head><body>${system.components}</body></html>`;
        return new Response(html, {
          headers: { "content-type": "text/html;charset=utf-8" },
        });
      },
    },
  },
});

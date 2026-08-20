import type { LucideIcon } from "lucide-react";
import { BookOpen, Globe2, Layers, Map, Sparkles } from "lucide-react";

export const TERRA_SECTIONS = {
  product: {
    id: "product",
    icon: Map,
    eyebrow: "Product",
    title: "Design maps with a visual studio",
    body: "Layer vectors, rasters, and live feeds on an infinite canvas. Version every change, branch scenarios, and publish share links without exporting static tiles.",
    bullets: ["Drag-and-drop layer stack", "Real-time collaboration", "One-click publish"],
  },
  solutions: {
    id: "solutions",
    icon: Layers,
    eyebrow: "Solutions",
    title: "Spatial intelligence for every team",
    body: "Operations, logistics, and research teams run geospatial workflows on the same platform—from site selection to fleet routing—with governance built in.",
    bullets: ["Fleet & route optimization", "Site intelligence", "Risk overlays"],
  },
  resources: {
    id: "resources",
    icon: BookOpen,
    eyebrow: "Resources",
    title: "Guides, SDKs, and office hours",
    body: "API references, Terraform modules, and weekly map-design reviews. Templates for census blocks, satellite basemaps, and custom tile pipelines.",
    bullets: ["REST & GraphQL APIs", "Terraform modules", "Weekly office hours"],
  },
  examples: {
    id: "examples",
    icon: Sparkles,
    eyebrow: "Examples",
    title: "Maps teams ship with Terra",
    body: "Explore customer galleries: supply-chain control towers, climate risk dashboards, and civic planning portals—all built without leaving the browser.",
    bullets: ["Supply chain control tower", "Climate risk dashboard", "Civic planning portal"],
  },
} as const satisfies Record<
  string,
  {
    id: string;
    icon: LucideIcon;
    eyebrow: string;
    title: string;
    body: string;
    bullets: readonly string[];
  }
>;

type SectionKey = keyof typeof TERRA_SECTIONS;

export default function TerraSectionPage({ sectionKey }: { sectionKey: SectionKey }) {
  const section = TERRA_SECTIONS[sectionKey];
  const Icon = section.icon;

  return (
    <section
      id={section.id}
      className="scroll-mt-24 border-t border-border px-4 py-20 sm:px-8 md:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-primary/80">
            {section.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            {section.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {section.body}
          </p>
          <ul className="mt-6 space-y-2">
            {section.bullets.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex aspect-[4/3] flex-col items-center justify-center rounded-2xl border border-border bg-muted/40 p-8">
          <Icon className="h-12 w-12 text-primary/70" strokeWidth={1.25} />
          <p className="mt-4 text-center text-sm text-muted-foreground">
            {section.eyebrow} preview
          </p>
        </div>
      </div>
    </section>
  );
}

export function TerraGlobeBanner() {
  return (
    <section className="border-t border-border bg-primary/5 px-4 py-16 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center md:flex-row md:text-left">
        <Globe2 className="h-10 w-10 shrink-0 text-primary" strokeWidth={1.25} />
        <div>
          <h3 className="text-xl font-medium text-foreground">Built for planet-scale data</h3>
          <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
            Ingest GeoJSON, vector tiles, and live sensor streams. Terra normalizes CRS, caches
            tiles, and serves sub-50ms panes at global zoom.
          </p>
        </div>
      </div>
    </section>
  );
}

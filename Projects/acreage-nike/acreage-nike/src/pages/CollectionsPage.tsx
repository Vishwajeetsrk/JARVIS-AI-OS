import { PageShell } from "../components/PageShell";

const COLLECTIONS = [
  { name: "Performance", count: "12 silhouettes", tone: "Elite training & court" },
  { name: "Urban", count: "8 silhouettes", tone: "City exploration" },
  { name: "Trail", count: "6 silhouettes", tone: "Light off-road" },
];

export function CollectionsPage() {
  return (
    <PageShell
      eyebrow="Catalog"
      title={
        <>
          Season <span className="font-serif italic">collections</span>
        </>
      }
      description="Curated lines built on one cushioning platform—tuned per use case without compromising the Acreage ride."
    >
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {COLLECTIONS.map((c) => (
          <article
            key={c.name}
            className="aspect-[4/5] rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-6 flex flex-col justify-end"
          >
            <p className="text-xs uppercase tracking-widest text-white/40">{c.tone}</p>
            <h3 className="mt-2 text-2xl font-medium">{c.name}</h3>
            <p className="text-sm text-white/50">{c.count}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}

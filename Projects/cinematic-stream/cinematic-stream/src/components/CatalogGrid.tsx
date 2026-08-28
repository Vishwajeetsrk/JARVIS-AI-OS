import { Play, Star } from "lucide-react";

export type CatalogItem = {
  title: string;
  meta: string;
  rating: string;
  tag?: string;
};

type CatalogGridProps = {
  items: CatalogItem[];
};

export function CatalogGrid({ items }: CatalogGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <article
          key={item.title}
          className="liquid-glass group rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-0.5"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <div className="mb-4 flex aspect-[16/10] items-center justify-center rounded-xl bg-white/[0.04]">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-white/20">
              <Play className="h-5 w-5 fill-white text-white" />
            </span>
          </div>
          {item.tag ? (
            <span className="mb-2 inline-block rounded-full border border-white/15 px-2 py-0.5 text-[10px] uppercase tracking-wider text-white/50">
              {item.tag}
            </span>
          ) : null}
          <h2 className="text-lg font-medium tracking-tight">{item.title}</h2>
          <p className="mt-1 text-sm text-gray-400">{item.meta}</p>
          <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-white/80">
            <Star className="h-3.5 w-3.5 fill-white" />
            {item.rating}
          </p>
        </article>
      ))}
    </div>
  );
}

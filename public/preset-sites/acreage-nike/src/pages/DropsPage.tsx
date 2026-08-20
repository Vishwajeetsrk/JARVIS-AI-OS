import { navigateToRoute } from "../../../_shared/preset-site-routing";
import { PageShell } from "../components/PageShell";

const DROPS = [
  { name: "Velocity Pro X", date: "May 28", status: "Waitlist open" },
  { name: "Urban Drift 02", date: "June 12", status: "Members early access" },
  { name: "Trail Forge SE", date: "July 4", status: "Coming soon" },
];

export function DropsPage() {
  return (
    <PageShell
      eyebrow="Limited releases"
      title={
        <>
          Upcoming <span className="font-serif italic">drops</span>
        </>
      }
      description="Reserve your pair before public release. Acreage drops are engineered in small batches with performance lab validation on every silhouette."
    >
      <ul className="mt-12 space-y-4">
        {DROPS.map((drop) => (
          <li
            key={drop.name}
            className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-5"
          >
            <div>
              <p className="text-lg font-medium">{drop.name}</p>
              <p className="text-sm text-white/50">{drop.date}</p>
            </div>
            <span className="rounded-full bg-[#DA3A16]/20 px-4 py-1 text-xs font-medium text-[#DA3A16]">
              {drop.status}
            </span>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="mt-10 rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition hover:bg-white/90"
        onClick={() => navigateToRoute("contact")}
      >
        Join the waitlist
      </button>
    </PageShell>
  );
}

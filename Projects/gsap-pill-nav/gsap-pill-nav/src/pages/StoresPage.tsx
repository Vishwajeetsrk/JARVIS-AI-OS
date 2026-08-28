import { PageShell } from "../components/PageShell";

const STORES = [
  { city: "New York", address: "SoHo — 142 Spring St" },
  { city: "London", address: "Shoreditch — 18 Redchurch St" },
  { city: "Tokyo", address: "Harajuku — 3-18-12 Jingumae" },
  { city: "Los Angeles", address: "Abbot Kinney — 1214 Abbot Kinney Blvd" },
];

export function StoresPage() {
  return (
    <PageShell
      eyebrow="Find us"
      title={
        <>
          Flagship <span className="font-serif italic">stores</span>
        </>
      }
      description="Book a gait analysis, try full collections, and customize lace kits in our experience studios."
    >
      <ul className="mt-12 divide-y divide-white/10 rounded-2xl border border-white/10">
        {STORES.map((store) => (
          <li key={store.city} className="flex flex-wrap justify-between gap-2 px-6 py-5">
            <span className="font-medium">{store.city}</span>
            <span className="text-sm text-white/50">{store.address}</span>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}

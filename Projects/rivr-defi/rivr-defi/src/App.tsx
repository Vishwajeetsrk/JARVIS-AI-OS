import { LegalSections } from "./components/LegalSections";
import { Hero } from "./components/Hero";

const SECTIONS = [
  {
    id: "ecosystem",
    title: "Ecosystem",
    body: "RIVR connects staking, liquidity routing, and governance across chains with transparent on-chain accounting.",
  },
  {
    id: "economics",
    title: "Economics",
    body: "Protocol fees, yield routing, and insurance funds are published in real time for depositors and integrators.",
  },
  {
    id: "developers",
    title: "Developers",
    body: "SDKs, subgraphs, and sandbox keys help teams ship staking experiences without rebuilding core infrastructure.",
  },
  {
    id: "governance",
    title: "Governance",
    body: "Token holders vote on emissions, risk parameters, and treasury allocations through on-chain proposals.",
  },
] as const;

export default function App() {
  return (
    <main className="min-h-screen bg-[#f0f0f0]">
      <Hero />
      {SECTIONS.map((s) => (
        <section
          key={s.id}
          id={s.id}
          className="mx-auto max-w-3xl px-6 py-20 md:px-10 border-t border-black/5"
        >
          <h2 className="text-3xl font-normal text-[rgba(30,50,90,0.95)]">{s.title}</h2>
          <p className="mt-4 text-base text-[rgba(30,50,90,0.65)]">{s.body}</p>
        </section>
      ))}
      <LegalSections variant="light" />
      <footer className="border-t border-black/5 py-8 text-center text-xs text-[rgba(30,50,90,0.5)]">
        © 2026 RIVR Protocol
      </footer>
    </main>
  );
}

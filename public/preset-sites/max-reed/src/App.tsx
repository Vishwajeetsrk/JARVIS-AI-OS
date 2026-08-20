import { FeaturesSection } from "./components/FeaturesSection";
import { LegalSections } from "./components/LegalSections";
import { Navbar } from "./components/Navbar";

const EXTRA = [
  {
    id: "about",
    title: "About",
    body: "London-based creator crafting bold digital products, brand systems, and motion-led interfaces for teams worldwide.",
  },
  {
    id: "contact",
    title: "Contact",
    body: "hello@maxreed.studio · +44 20 7946 0958 — available for collaborations and studio retainers.",
  },
  {
    id: "faq",
    title: "FAQ",
    body: "Typical engagements run 4–12 weeks. We ship design systems, launch films, and product UI with async-friendly workflows.",
  },
] as const;

export default function App() {
  return (
    <main className="min-h-screen bg-canvas text-white">
      <Navbar />
      <FeaturesSection />
      {EXTRA.map((s) => (
        <section key={s.id} id={s.id} className="border-t border-white/10 px-4 py-20 md:px-14">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-normal tracking-tight">{s.title}</h2>
            <p className="mt-4 text-sm text-white/60">{s.body}</p>
          </div>
        </section>
      ))}
      <LegalSections />
      <footer className="border-t border-white/10 py-8 text-center text-xs text-white/40">
        © 2026 Max Reed Studio
      </footer>
    </main>
  );
}

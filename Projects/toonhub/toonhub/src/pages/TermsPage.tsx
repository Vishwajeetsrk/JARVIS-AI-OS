import { ToonFooter, ToonNav } from "../components/ToonNav";

export function TermsPage() {
  return (
    <div style={{ backgroundColor: "#1a1a1a", minHeight: "100vh", color: "#fff" }}>
      <ToonNav />
      <main id="terms" className="px-6 py-20 sm:px-12 max-w-3xl mx-auto">
        <h1 className="font-display text-3xl uppercase">Terms of Service</h1>
        <p className="mt-6 text-sm text-white/70 leading-relaxed">
          terms governing shop purchases and drop reservations. Update before production.
        </p>
      </main>
      <ToonFooter panelColor="#333" />
    </div>
  );
}

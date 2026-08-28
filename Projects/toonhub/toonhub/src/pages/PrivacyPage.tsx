import { ToonFooter, ToonNav } from "../components/ToonNav";

export function PrivacyPage() {
  return (
    <div style={{ backgroundColor: "#1a1a1a", minHeight: "100vh", color: "#fff" }}>
      <ToonNav />
      <main id="privacy" className="px-6 py-20 sm:px-12 max-w-3xl mx-auto">
        <h1 className="font-display text-3xl uppercase">Privacy Policy</h1>
        <p className="mt-6 text-sm text-white/70 leading-relaxed">
          privacy policy for TOONHUB retail. Replace with legal copy before launch.
        </p>
      </main>
      <ToonFooter panelColor="#333" />
    </div>
  );
}

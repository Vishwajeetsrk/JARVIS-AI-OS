import { useEffect, useState } from "react";
import { applyPresetHashOnLoad } from "../../_shared/preset-site-routing";
import { MobileMenu } from "./components/MobileMenu";
import { Navbar } from "./components/Navbar";
import { LegalSections } from "./components/LegalSections";
import { HomePage } from "./pages/HomePage";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    applyPresetHashOnLoad();
  }, []);

  return (
    <main className="min-h-screen bg-[#EFEFEF]">
      <div className="relative z-30">
        <Navbar menuOpen={menuOpen} onMenuToggle={() => setMenuOpen((o) => !o)} />
        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>

      <HomePage />

      <LegalSections variant="light" />
      <footer className="border-t border-gray-200 bg-white py-8 text-center text-xs text-gray-500">
        © 2026 Axion Studio
      </footer>
    </main>
  );
}

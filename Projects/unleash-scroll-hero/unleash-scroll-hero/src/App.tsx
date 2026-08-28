import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { applyPresetHashOnLoad } from "../../_shared/preset-site-routing";
import { PillNav } from "./components/PillNav";
import { HomePage } from "./pages/HomePage";

export default function App() {
  useEffect(() => {
    applyPresetHashOnLoad();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <PillNav />
      <Routes>
        <Route path="/*" element={<HomePage />} />
      </Routes>
      <footer className="relative z-20 border-t border-white/10 px-6 py-8 text-center font-sans text-xs text-white/40">
        © {new Date().getFullYear()} Urban Bloom Studio
      </footer>
    </div>
  );
}

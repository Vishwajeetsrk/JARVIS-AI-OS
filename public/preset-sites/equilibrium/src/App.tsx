import { useEffect } from "react";
import { PresetHashRouter } from "../../_shared/components/PresetHashRouter";
import { applyPresetHashOnLoad } from "../../_shared/preset-site-routing";
import Navbar from "./components/Navbar";
import { ContactPage } from "./pages/ContactPage";
import { FaqPage } from "./pages/FaqPage";
import { HomePage } from "./pages/HomePage";
import { ProgramsPage } from "./pages/ProgramsPage";
import { WellnessPage } from "./pages/WellnessPage";

export default function App() {
  useEffect(() => {
    applyPresetHashOnLoad();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <PresetHashRouter
          routes={{
            "": <HomePage />,
            wellness: <WellnessPage />,
            programs: <ProgramsPage />,
            faq: <FaqPage />,
            contact: <ContactPage />,
          }}
        />
      </main>
      <footer className="border-t border-white/8 px-5 py-10 text-center text-sm text-muted sm:px-8">
        <p data-editable>© {new Date().getFullYear()} Equilibrium Wellness Studio</p>
      </footer>
    </div>
  );
}

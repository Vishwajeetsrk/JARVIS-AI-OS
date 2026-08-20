import { useEffect } from "react";
import { PresetHashRouter } from "../../_shared/components/PresetHashRouter";
import { applyPresetHashOnLoad } from "../../_shared/preset-site-routing";
import Navbar from "./components/Navbar";
import { AboutPage } from "./pages/AboutPage";
import { BlogPage } from "./pages/BlogPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { OfferingsPage } from "./pages/OfferingsPage";
import { PricingPage } from "./pages/PricingPage";
import { PrivacyPage } from "./pages/PrivacyPage";

export default function App() {
  useEffect(() => {
    applyPresetHashOnLoad();
  }, []);

  return (
    <div className="min-h-screen bg-background font-heading text-foreground">
      <Navbar />
      <main>
        <PresetHashRouter
          routes={{
            "": <HomePage />,
            about: <AboutPage />,
            offerings: <OfferingsPage />,
            pricing: <PricingPage />,
            blog: <BlogPage />,
            contact: <ContactPage />,
            privacy: <PrivacyPage />,
          }}
        />
      </main>
      <footer className="border-t border-foreground/10 px-5 py-8 text-center text-sm text-foreground/60 lg:px-16">
        <p>© {new Date().getFullYear()} BIONOVA Biotech Consulting</p>
      </footer>
    </div>
  );
}

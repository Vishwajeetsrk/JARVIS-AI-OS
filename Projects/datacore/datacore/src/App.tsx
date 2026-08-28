import { useEffect, useState } from "react";
import { PresetHashRouter } from "../../_shared/components/PresetHashRouter";
import { PresetRoutePage } from "../../_shared/components/PresetRoutePage";
import { PresetSiteSections } from "../../_shared/components/PresetSiteSections";
import { applyPresetHashOnLoad } from "../../_shared/preset-site-routing";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";

function DatacoreShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-datacore-dark text-white">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {children}
    </div>
  );
}

function HomePage() {
  return (
    <>
      <HeroSection />
      <PresetSiteSections brand="Datacore" theme="dark" />
    </>
  );
}

export default function App() {
  useEffect(() => {
    applyPresetHashOnLoad();
  }, []);

  return (
    <PresetHashRouter
      routes={{
        "": (
          <DatacoreShell>
            <HomePage />
          </DatacoreShell>
        ),
        services: (
          <DatacoreShell>
            <div className="pt-24">
              <PresetRoutePage
                title="Services"
                description="Reservation automation, revenue analytics, and guest experience tools."
                theme="dark"
              />
            </div>
          </DatacoreShell>
        ),
        reviews: (
          <DatacoreShell>
            <div className="pt-24">
              <PresetRoutePage
                title="Reviews"
                description="See how hotel teams rate Datacore across operations and guest satisfaction."
                theme="dark"
              />
            </div>
          </DatacoreShell>
        ),
        contact: (
          <DatacoreShell>
            <div className="pt-24">
              <PresetRoutePage
                title="Contact us"
                description="Book a demo or talk with our hospitality specialists."
                theme="dark"
              />
            </div>
          </DatacoreShell>
        ),
      }}
    />
  );
}

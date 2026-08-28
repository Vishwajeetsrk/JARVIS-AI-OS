import { useEffect } from "react";
import { PresetHashRouter } from "../../_shared/components/PresetHashRouter";
import { applyPresetHashOnLoad } from "../../_shared/preset-site-routing";
import { ZenithNavbar } from "./components/ZenithNavbar";
import { BlogPage } from "./pages/BlogPage";
import { CareersPage } from "./pages/CareersPage";
import { CompanyPage } from "./pages/CompanyPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { MortgagePage } from "./pages/MortgagePage";
import { PropertiesPage } from "./pages/PropertiesPage";

export default function App() {
  useEffect(() => {
    applyPresetHashOnLoad();
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F8F8] font-lato text-[#141414]">
      <ZenithNavbar />
      <PresetHashRouter
        routes={{
          "": <HomePage />,
          home: <HomePage />,
          properties: <PropertiesPage />,
          mortgage: <MortgagePage />,
          company: <CompanyPage />,
          careers: <CareersPage />,
          blog: <BlogPage />,
          contact: <ContactPage />,
        }}
      />
    </div>
  );
}

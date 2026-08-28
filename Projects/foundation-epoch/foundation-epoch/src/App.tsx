import { useEffect } from "react";
import { PresetHashRouter } from "../../_shared/components/PresetHashRouter";
import { applyPresetHashOnLoad } from "../../_shared/preset-site-routing";
import { FloatingNavbar } from "./components/FloatingNavbar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import DocsPage from "./pages/DocsPage";
import EcosystemPage from "./pages/EcosystemPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";

export default function App() {
  useEffect(() => {
    applyPresetHashOnLoad();
  }, []);

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      <PresetHashRouter
        routes={{
          "": <HomePage />,
          products: <ProductsPage />,
          ecosystem: <EcosystemPage />,
          docs: <DocsPage />,
          about: <AboutPage />,
          contact: <ContactPage />,
        }}
      />
      <FloatingNavbar />
    </div>
  );
}

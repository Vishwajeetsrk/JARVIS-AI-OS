import { useEffect } from "react";
import { PresetHashRouter } from "../../_shared/components/PresetHashRouter";
import { applyPresetHashOnLoad } from "../../_shared/preset-site-routing";
import ContactPage from "./pages/ContactPage";
import ExamplesPage from "./pages/ExamplesPage";
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import ProductPage from "./pages/ProductPage";
import ResourcesPage from "./pages/ResourcesPage";
import SolutionsPage from "./pages/SolutionsPage";

export default function App() {
  useEffect(() => {
    applyPresetHashOnLoad();
  }, []);

  return (
    <PresetHashRouter
      routes={{
        "": <HomePage />,
        product: <ProductPage />,
        solutions: <SolutionsPage />,
        resources: <ResourcesPage />,
        examples: <ExamplesPage />,
        pricing: <PricingPage />,
        contact: <ContactPage />,
      }}
    />
  );
}

import { AboutPage } from "./AboutPage";
import { ArtistsPage } from "./ArtistsPage";
import { CollectionPage } from "./CollectionPage";
import { DropsPage } from "./DropsPage";
import { FaqPage } from "./FaqPage";
import { ShopPage } from "./ShopPage";

export function HomePage() {
  return (
    <>
      <CollectionPage />
      <div id="shop" className="scroll-mt-8">
        <ShopPage />
      </div>
      <div id="about" className="scroll-mt-8">
        <AboutPage />
      </div>
      <div id="faq" className="scroll-mt-8">
        <FaqPage />
      </div>
      <div id="drops" className="scroll-mt-8">
        <DropsPage />
      </div>
      <div id="artists" className="scroll-mt-8">
        <ArtistsPage />
      </div>
    </>
  );
}

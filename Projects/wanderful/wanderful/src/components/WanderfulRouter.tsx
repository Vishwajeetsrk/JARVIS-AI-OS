import { usePresetHashRoute } from "../../../_shared/hooks/usePresetHashRoute";
import { DestinationsSection } from "../sections/DestinationsSection";
import { HeroSection } from "../sections/HeroSection";
import { TourDetailSection } from "../sections/TourDetailSection";
import { getTourById } from "../lib/tours";
import { NotFoundPage } from "../pages/NotFoundPage";
import { StubPage } from "../pages/StubPage";

const KNOWN_ROUTES = new Set(["", "home", "destinations", "booking", "faq", "account"]);

export function WanderfulRouter() {
  const path = usePresetHashRoute("");

  if (path.startsWith("destinations/")) {
    const id = path.slice("destinations/".length);
    const tour = getTourById(id);
    if (!tour) return <NotFoundPage />;
    return <TourDetailSection tour={tour} />;
  }

  switch (path) {
    case "":
    case "home":
      return <HeroSection />;
    case "destinations":
      return <DestinationsSection />;
    case "booking":
      return (
        <StubPage
          title="Booking"
          description="Reserve curated journeys with flexible dates and concierge support. This flow is a preview placeholder."
        />
      );
    case "faq":
      return (
        <StubPage
          title="FAQ"
          description="Answers about visas, cancellations, and trip preparation will live here. Replace with your support content before launch."
        />
      );
    case "account":
      return (
        <StubPage
          title="Account"
          description="Sign in to manage saved itineraries, payment methods, and travel preferences."
        />
      );
    default:
      if (!KNOWN_ROUTES.has(path)) return <NotFoundPage />;
      return <NotFoundPage />;
  }
}

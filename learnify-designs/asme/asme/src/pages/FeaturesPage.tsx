import { PageShell } from "../components/PageShell";
import ServicesSection from "../components/ServicesSection";

export function FeaturesPage() {
  return (
    <>
      <PageShell title="Features" eyebrow="Capabilities">
        <p>
          Curiosity-led research, liquid-glass product surfaces, and cinematic storytelling—built
          for teams who ship ideas that matter.
        </p>
      </PageShell>
      <ServicesSection />
    </>
  );
}

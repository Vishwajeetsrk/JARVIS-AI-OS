import { LegalSections } from "../components/LegalSections";
import { PageIntro } from "../components/PageIntro";

export function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Legal"
        title="Privacy & terms"
        description="Placeholder legal copy for the BIONOVA preset—replace before production launch."
      />
      <LegalSections />
    </>
  );
}

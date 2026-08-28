import { Phone } from "lucide-react";
import { PresetNavLink } from "../../../_shared/components/PresetNavLink";
import { CONTACT_ROUTE } from "../constants";

export function ConsultationCard() {
  return (
    <PresetNavLink
      target={CONTACT_ROUTE}
      className="glass-card clip-corner group inline-flex max-w-sm items-center gap-4 px-6 py-5 transition hover:bg-white/12"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/90 text-white transition group-hover:bg-brand">
        <Phone className="h-5 w-5" strokeWidth={2} aria-hidden />
      </span>
      <span className="text-base font-medium leading-snug text-white" data-editable>
        Book a Free Consultation
      </span>
    </PresetNavLink>
  );
}

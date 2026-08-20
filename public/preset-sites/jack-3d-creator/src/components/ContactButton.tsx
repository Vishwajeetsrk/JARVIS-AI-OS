import { navigateToSection } from "../../../_shared/preset-site-routing";

type ContactButtonProps = {
  className?: string;
};

export function ContactButton({ className = "" }: ContactButtonProps) {
  return (
    <button
      type="button"
      className={`rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white transition-transform hover:scale-[1.02] sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base ${className}`}
      style={{
        background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1",
        outline: "2px solid white",
        outlineOffset: "-3px",
      }}
      onClick={() => navigateToSection("contact")}
    >
      Contact Me
    </button>
  );
}

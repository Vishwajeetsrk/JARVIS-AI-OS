import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_SECTIONS } from "../constants";
import { scrollToSection } from "../lib/scroll";
import { AnimatedText } from "./AnimatedText";
import { MIcon } from "./MIcon";
import { PrimaryButton } from "./PrimaryButton";

function NavButton({
  label,
  sectionId,
  onNavigate,
}: {
  label: string;
  sectionId: string;
  onNavigate: () => void;
}) {
  return (
    <button
      type="button"
      onClick={() => {
        scrollToSection(sectionId);
        onNavigate();
      }}
      className="rounded-full px-4 py-2 text-sm font-medium text-white/75 transition hover:bg-white/5 hover:text-white"
      data-editable
    >
      <AnimatedText>{label}</AnimatedText>
    </button>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2.5 text-left"
          aria-label="UI Rocket home"
        >
          <span className="liquid-glass flex h-9 w-9 items-center justify-center rounded-xl">
            <MIcon name="rocket_launch" className="text-violet-300 text-[20px]" />
          </span>
          <span className="font-semibold tracking-tight text-white" data-editable>
            UI Rocket
          </span>
        </button>

        <nav
          className="liquid-glass hidden items-center gap-0.5 rounded-full px-1.5 py-1 md:flex"
          aria-label="Primary"
        >
          {NAV_SECTIONS.map((item) => (
            <NavButton key={item.id} label={item.label} sectionId={item.id} onNavigate={() => {}} />
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={() => scrollToSection("pricing")}
            className="text-sm font-medium text-white/60 transition hover:text-white"
            data-editable
          >
            Sign in
          </button>
          <PrimaryButton onClick={() => scrollToSection("pricing")}>Start free</PrimaryButton>
        </div>

        <button
          type="button"
          className="liquid-glass flex h-10 w-10 items-center justify-center rounded-full md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            aria-label="Close menu overlay"
            onClick={close}
          />
          <nav
            className="liquid-glass-strong fixed inset-x-4 top-[4.5rem] z-50 flex max-h-[min(70vh,420px)] flex-col gap-1 overflow-y-auto rounded-2xl p-3 md:hidden"
            aria-label="Mobile"
          >
            {NAV_SECTIONS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  scrollToSection(item.id);
                  close();
                }}
                className="rounded-xl px-4 py-3 text-left text-sm font-medium text-white/85 hover:bg-white/5"
                data-editable
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                scrollToSection("pricing");
                close();
              }}
              className="rounded-xl px-4 py-3 text-left text-sm font-medium text-white/60"
              data-editable
            >
              Sign in
            </button>
            <div className="mt-2 px-1">
              <PrimaryButton
                className="w-full"
                onClick={() => {
                  scrollToSection("pricing");
                  close();
                }}
              >
                Start free
              </PrimaryButton>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}

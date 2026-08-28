import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { navigateToRoute, routeHref } from "../../../_shared/preset-site-routing";
import { NAV_ITEMS } from "../routes";

function HamburgerButton({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 lg:hidden"
      style={{ backgroundColor: open ? "#1a1a1a" : "transparent" }}
      aria-label="Toggle menu"
    >
      <span
        className="absolute transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
        style={{
          opacity: open ? 0 : 1,
          transform: open ? "rotate(-90deg) scale(0.5)" : "rotate(0deg) scale(1)",
        }}
      >
        <Menu size={20} color="white" strokeWidth={1.5} />
      </span>
      <span
        className="absolute transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
        style={{
          opacity: open ? 1 : 0,
          transform: open ? "rotate(0deg) scale(1)" : "rotate(90deg) scale(0.5)",
        }}
      >
        <X size={20} color="white" strokeWidth={1.5} />
      </span>
    </button>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      <div
        className="fixed inset-0 z-30 transition-all duration-500 lg:hidden"
        style={{
          backdropFilter: open ? "blur(12px)" : "blur(0px)",
          backgroundColor: open ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0)",
          pointerEvents: open ? "auto" : "none",
        }}
        onClick={onClose}
        aria-hidden={!open}
      />
      <div
        className="fixed left-0 right-0 top-0 z-40 overflow-hidden lg:hidden"
        style={{
          maxHeight: open ? "420px" : "0px",
          transition: "max-height 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
        }}
      >
        <div
          className="px-5 pb-6 pt-20"
          style={{
            backgroundColor: "rgba(8,8,8,0.97)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="flex flex-col gap-1">
            <a
              href={routeHref("")}
              onClick={(e) => {
                e.preventDefault();
                navigateToRoute("");
                onClose();
              }}
              className="flex items-center justify-between rounded-xl px-3 py-3 text-base text-white/70 transition-all duration-200 hover:bg-white/5 hover:text-white"
            >
              Home
            </a>
            {NAV_ITEMS.map((item, i) => (
              <a
                key={item.route}
                href={routeHref(item.route)}
                onClick={(e) => {
                  e.preventDefault();
                  navigateToRoute(item.route);
                  onClose();
                }}
                className="flex items-center justify-between rounded-xl px-3 py-3 text-base text-white/70 transition-all duration-200 hover:bg-white/5 hover:text-white group"
                style={{
                  transitionDelay: open ? `${i * 50 + 80}ms` : "0ms",
                  opacity: open ? 1 : 0,
                  transform: open ? "translateY(0)" : "translateY(-8px)",
                  transition: `opacity 0.4s cubic-bezier(0.23,1,0.32,1) ${i * 50 + 80}ms, transform 0.4s cubic-bezier(0.23,1,0.32,1) ${i * 50 + 80}ms, color 0.2s, background 0.2s`,
                }}
              >
                {item.label}
                <ArrowRight
                  size={14}
                  className="-translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-40"
                />
              </a>
            ))}
          </div>
          <div
            className="mt-5 pt-5"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.07)",
              transitionDelay: open ? "360ms" : "0ms",
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(-8px)",
              transition:
                "opacity 0.4s cubic-bezier(0.23,1,0.32,1) 360ms, transform 0.4s cubic-bezier(0.23,1,0.32,1) 360ms",
            }}
          >
            <button
              type="button"
              className="w-full rounded-full py-3 text-sm font-medium text-black transition-all duration-300 hover:opacity-80"
              style={{ backgroundColor: "#ffffff" }}
              onClick={() => {
                navigateToRoute("contact");
                onClose();
              }}
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

type BabyTrackNavbarProps = {
  fixed?: boolean;
};

export default function BabyTrackNavbar({ fixed = false }: BabyTrackNavbarProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const navClick = (route: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigateToRoute(route);
    setOpen(false);
  };

  const position = fixed ? "fixed" : "absolute";

  return (
    <>
      <nav
        id="navbar"
        data-draftly-section-id="navbar"
        className={`${position} left-0 right-0 top-0 z-50 flex items-center justify-between px-5 py-4 lg:px-10 lg:py-6`}
      >
        <a
          href={routeHref("")}
          onClick={navClick("")}
          className="font-manrope text-xl font-semibold tracking-tight text-white"
          aria-label="Baby Track home"
        >
          baby track
        </a>
        <div
          className="hidden items-center gap-1 rounded-full px-2 py-1.5 lg:flex"
          style={{ backgroundColor: "#0C0C0C" }}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.route}
              href={routeHref(item.route)}
              onClick={navClick(item.route)}
              className="rounded-full px-4 py-1.5 text-sm text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <HamburgerButton open={open} onClick={() => setOpen((v) => !v)} />
          <button
            type="button"
            className="hidden rounded-full px-5 py-2 text-sm font-medium text-black transition-all duration-300 hover:opacity-80 lg:block"
            style={{ backgroundColor: "#ffffff" }}
            onClick={() => navigateToRoute("contact")}
          >
            Get started
          </button>
        </div>
      </nav>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}

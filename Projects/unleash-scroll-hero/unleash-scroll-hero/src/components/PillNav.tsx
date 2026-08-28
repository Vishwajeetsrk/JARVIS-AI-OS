import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./PillNav.css";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const NAV_ITEMS = [
  { label: "Home", id: "home" as const },
  { label: "About", id: "about" as const },
];

function scrollToHome() {
  gsap.to(window, { duration: 2.5, scrollTo: 0, ease: "power3.inOut" });
}

function scrollToAbout() {
  const about = document.getElementById("about");
  if (about) {
    gsap.to(window, {
      duration: 2.5,
      scrollTo: { y: about, offsetY: 80 },
      ease: "power3.inOut",
    });
  } else {
    gsap.to(window, {
      duration: 2.5,
      scrollTo: document.body.scrollHeight,
      ease: "power3.inOut",
    });
  }
}

function PillButton({
  label,
  target,
  active,
  onNavigate,
}: {
  label: string;
  target: "home" | "about";
  active: boolean;
  onNavigate: () => void;
}) {
  const pillRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const pill = pillRef.current;
    if (!pill) return;

    const circle = pill.querySelector(".hover-circle") as HTMLElement | null;
    const stack = pill.querySelector(".label-stack") as HTMLElement | null;
    if (!circle || !stack) return;

    const w = pill.offsetWidth;
    const h = stack.offsetHeight;
    const R = (w * w) / 4 + (h * h) / (2 * h);
    const D = 2 * R + 2;
    const delta = R - Math.sqrt(R * R - (w * w) / 4) + 1;
    circle.style.width = `${D}px`;
    circle.style.height = `${D}px`;
    circle.style.left = `${(w - D) / 2}px`;
    circle.style.bottom = `${-delta}px`;
    circle.style.transformOrigin = `50% ${D - delta}px`;

    const tl = gsap.timeline({ paused: true });
    tl.to(circle, { scale: 3, duration: 0.3, ease: "power2.out" }, 0);
    tl.to(
      stack.querySelector(".pill-label"),
      { yPercent: -100, duration: 0.3, ease: "power2.out" },
      0,
    );
    tl.to(
      stack.querySelector(".pill-label-hover"),
      { yPercent: -100, duration: 0.3, ease: "power2.out" },
      0,
    );

    const onEnter = () => tl.play();
    const onLeave = () => tl.reverse();
    pill.addEventListener("mouseenter", onEnter);
    pill.addEventListener("mouseleave", onLeave);
    return () => {
      pill.removeEventListener("mouseenter", onEnter);
      pill.removeEventListener("mouseleave", onLeave);
      tl.kill();
    };
  }, []);

  return (
    <li>
      <button
        ref={pillRef}
        type="button"
        className={`pill ${active ? "is-active" : ""}`}
        onClick={() => {
          if (target === "home") scrollToHome();
          else scrollToAbout();
          onNavigate();
        }}
      >
        <span className="hover-circle" aria-hidden />
        <span className="label-stack">
          <span className="pill-label">{label}</span>
          <span className="pill-label-hover">{label}</span>
        </span>
      </button>
    </li>
  );
}

export function PillNav() {
  const navItemsRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLButtonElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<"home" | "about">("home");

  useEffect(() => {
    if (logoRef.current) {
      gsap.fromTo(logoRef.current, { scale: 0 }, { scale: 1, duration: 0.6, ease: "power2.out" });
    }
    if (navItemsRef.current) {
      gsap.fromTo(
        navItemsRef.current,
        { width: 0, overflow: "hidden" },
        { width: "auto", duration: 0.6, ease: "power2.out" },
      );
    }
  }, []);

  useEffect(() => {
    const about = document.getElementById("about");
    if (!about) return;

    const st = ScrollTrigger.create({
      trigger: about,
      start: "top 80%",
      end: "bottom top",
      onEnter: () => setActiveSection("about"),
      onLeaveBack: () => setActiveSection("home"),
    });

    return () => st.kill();
  }, []);

  const logoHover = () => {
    const svg = logoRef.current?.querySelector(".logo-svg-container");
    if (svg) gsap.to(svg, { rotation: 360, duration: 0.2, ease: "power2.out" });
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className="pill-nav-container" aria-label="Primary">
      <div className="pill-nav">
        <button
          type="button"
          ref={logoRef}
          className="pill-logo"
          onMouseEnter={logoHover}
          onClick={() => {
            scrollToHome();
            closeMobile();
          }}
          aria-label="Home"
        >
          <span className="logo-svg-container">
            <svg viewBox="0 0 100 100" width={24} height={24} aria-hidden>
              <path
                fill="#fff"
                d="m50,50c0,18.2,14.77,32.98,32.97,32.98,0-18.2-14.77-32.98-32.97-32.98Z"
              />
              <path
                fill="#fff"
                d="m17.02,82.98c18.2,0,32.98-14.77,32.98-32.98-18.2,0-32.98,14.77-32.98,32.98Z"
              />
              <path
                fill="#fff"
                d="m82.98,17.02c-18.2,0-32.97,14.77-32.97,32.97,18.2,0,32.97-14.77,32.97-32.97Z"
              />
              <path
                fill="#fff"
                d="m17.02,17.02c0,18.2,14.77,32.97,32.98,32.97,0-18.2-14.77-32.97-32.98-32.97Z"
              />
            </svg>
          </span>
        </button>

        <div ref={navItemsRef} className="pill-nav-items desktop-only relative">
          <ul className="pill-list">
            {NAV_ITEMS.map(({ label, id }) => (
              <PillButton
                key={id}
                label={label}
                target={id}
                active={activeSection === id}
                onNavigate={closeMobile}
              />
            ))}
          </ul>
        </div>

        <button
          type="button"
          className="mobile-menu-button mobile-only"
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span
            className="hamburger-line"
            style={{
              transform: mobileOpen ? "rotate(45deg) translateY(3px)" : undefined,
            }}
          />
          <span
            className="hamburger-line"
            style={{
              transform: mobileOpen ? "rotate(-45deg) translateY(-3px)" : undefined,
            }}
          />
        </button>
      </div>

      <div className={`mobile-menu-popover mobile-only ${mobileOpen ? "is-open" : ""}`}>
        <ul className="mobile-menu-list">
          {NAV_ITEMS.map(({ label, id }) => (
            <li key={id}>
              <button
                type="button"
                className="mobile-menu-link w-full"
                onClick={() => {
                  if (id === "home") scrollToHome();
                  else scrollToAbout();
                  closeMobile();
                }}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

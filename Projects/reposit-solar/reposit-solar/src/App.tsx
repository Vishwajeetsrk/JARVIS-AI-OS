import { useCallback, useEffect, useRef, useState } from "react";
import { Zap } from "lucide-react";

const BASE = import.meta.env.BASE_URL;
const LIGHT_IMG = `${BASE}images/hero-light.webp`;
const DARK_IMG = `${BASE}images/hero-dark.webp`;

const NAV_LINKS = [
  "How It Works",
  "Our Cases",
  "About Us",
  "Careers",
  "Resources",
  "Customers",
] as const;

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const bgFrontRef = useRef<HTMLDivElement>(null);
  const bgBackRef = useRef<HTMLDivElement>(null);
  const animatingRef = useRef(false);

  useEffect(() => {
    document.body.classList.toggle("light-theme", !isDark);
  }, [isDark]);

  useEffect(() => {
    const darkUrl = `url(${DARK_IMG})`;
    if (bgFrontRef.current) bgFrontRef.current.style.backgroundImage = darkUrl;
    if (bgBackRef.current) bgBackRef.current.style.backgroundImage = darkUrl;
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const toggleTheme = useCallback(
    (toDark: boolean) => {
      if (toDark === isDark || animatingRef.current) return;

      animatingRef.current = true;
      const targetImg = toDark ? DARK_IMG : LIGHT_IMG;
      const bgBack = bgBackRef.current;
      const bgFront = bgFrontRef.current;

      if (bgBack) bgBack.style.backgroundImage = `url(${targetImg})`;
      if (bgFront) bgFront.classList.add("pull-down");

      window.setTimeout(() => {
        setIsDark(toDark);
        if (bgFront) bgFront.style.backgroundImage = `url(${targetImg})`;
      }, 300);

      window.setTimeout(() => {
        if (bgFront) bgFront.classList.remove("pull-down");
        animatingRef.current = false;
      }, 330);
    },
    [isDark],
  );

  const closeMenu = () => setMenuOpen(false);

  const handleCta = () => {
    closeMenu();
    document
      .querySelector(".theme-toggle")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="hero">
      <div className="blur-overlay blur-overlay-top" aria-hidden />
      <div className="blur-overlay blur-overlay-bottom" aria-hidden />

      <div className="hero-bg-wrapper">
        <div ref={bgBackRef} className="hero-bg bg-back" aria-hidden />
        <div ref={bgFrontRef} className="hero-bg bg-front" aria-hidden />
      </div>

      <nav className="navbar">
        <div className="logo-container">
          <Zap className="logo" size={32} strokeWidth={2} aria-hidden />
          <span className="brand-name" data-editable>
            reposit
          </span>
        </div>

        <div className={`nav-links${menuOpen ? " active" : ""}`}>
          {NAV_LINKS.map((label) => (
            <a
              key={label}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                closeMenu();
              }}
            >
              {label}
            </a>
          ))}
          <button type="button" className="cta-button drawer-cta" onClick={handleCta}>
            Get an Instant Quote
          </button>
        </div>

        <button type="button" className="cta-button nav-cta" onClick={handleCta}>
          Get an Instant Quote
        </button>

        <button
          type="button"
          className={`hamburger${menuOpen ? " active" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className="hero-content">
        <h1 className="hero-title">
          $0 Electricity Bills
          <br />
          <span className="title-accent">for the next</span> 7 years
        </h1>

        <div className="theme-toggle">
          <div
            className="toggle-indicator"
            style={{
              transform: isDark ? "translateX(calc(100% + 4px))" : "translateX(0)",
            }}
          />
          <button
            type="button"
            className={`toggle-btn${!isDark ? " active" : ""}`}
            onClick={() => toggleTheme(false)}
          >
            <span className="label">Morning</span>
            <span className="subtext">$0 for Electricity</span>
          </button>
          <button
            type="button"
            className={`toggle-btn${isDark ? " active" : ""}`}
            onClick={() => toggleTheme(true)}
          >
            <span className="label">Night</span>
            <span className="subtext">$0 for Electricity</span>
          </button>
        </div>

        <p className="hero-footer">
          Forget the energy market, weather conditions and seasons; our Smart Controller guarantees
          you get no electricity bill for seven years.
        </p>
      </div>
    </div>
  );
}

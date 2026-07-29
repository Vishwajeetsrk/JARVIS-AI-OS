import { Link } from "@tanstack/react-router";
import { JarvisWordmark } from "./logo";

export function MarketingNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="transition-opacity hover:opacity-80">
          <JarvisWordmark />
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <Link to="/how-it-works" className="transition-colors hover:text-foreground">
            How it works
          </Link>
          <Link to="/skills" className="transition-colors hover:text-foreground">
            Skills
          </Link>
          <Link to="/projects" className="transition-colors hover:text-foreground">
            Projects
          </Link>
        </nav>
        <Link
          to="/console"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary-hover hover:-translate-y-0.5"
        >
          Open Console
          <span aria-hidden>→</span>
        </Link>
      </div>
    </header>
  );
}

export function MarketingFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <JarvisWordmark />
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            One brain. Many shells. Every project, remembered.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <Link to="/how-it-works" className="hover:text-foreground">Docs</Link>
          <Link to="/skills" className="hover:text-foreground">Skills</Link>
          <Link to="/projects" className="hover:text-foreground">Projects</Link>
          <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase">
            <span className="status-dot status-ready" /> Memory synced
          </span>
        </div>
      </div>
    </footer>
  );
}

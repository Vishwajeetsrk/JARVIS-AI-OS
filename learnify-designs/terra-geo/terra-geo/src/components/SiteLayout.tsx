import type { ReactNode } from "react";
import Navbar from "./Navbar";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>{children}</main>
      <footer className="border-t border-border px-4 py-10 text-center text-sm text-muted-foreground sm:px-8">
        <p>© {new Date().getFullYear()} Terra · Geo map builder</p>
      </footer>
    </div>
  );
}

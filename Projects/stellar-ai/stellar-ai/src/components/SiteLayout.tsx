import type { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#060812] text-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

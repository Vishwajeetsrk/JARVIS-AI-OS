import { Search } from "lucide-react";
import { FEATURE_DROPDOWN } from "./Navbar";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  onNavigate: (id: string) => void;
}

export default function MobileMenu({ open, onClose, onNavigate }: MobileMenuProps) {
  if (!open) return null;

  const go = (id: string) => {
    onNavigate(id);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-40 bg-canvas/95 backdrop-blur-lg lg:hidden">
      <div className="flex h-full flex-col gap-6 px-6 pb-8 pt-20">
        <label className="liquid-glass flex items-center gap-2 rounded-full px-4 py-3">
          <Search className="h-4 w-4 text-white/50" />
          <input
            type="search"
            placeholder="Search datasets, jobs…"
            className="w-full border-0 bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
          />
        </label>

        <div className="flex flex-col gap-1 font-sans">
          <button
            type="button"
            onClick={() => go("platform")}
            className="rounded-xl px-3 py-3 text-left text-lg text-white"
          >
            Platform
          </button>
          <p className="px-3 pt-2 text-xs font-medium uppercase tracking-widest text-white/40">
            Features
          </p>
          {FEATURE_DROPDOWN.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => go(item.id)}
              className="rounded-xl px-5 py-2 text-left text-base text-white/80"
            >
              {item.label}
            </button>
          ))}
          {(["projects", "community", "contact"] as const).map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => go(id)}
              className="rounded-xl px-3 py-3 text-left text-lg capitalize text-white"
            >
              {id}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

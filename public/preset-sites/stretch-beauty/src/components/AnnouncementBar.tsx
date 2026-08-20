import { ChevronLeft, ChevronRight } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="absolute inset-x-0 top-0 z-30 bg-[#F9F4F0] py-2.5 text-black md:py-3">
      <div className="flex items-center justify-center gap-3 px-4 text-xs sm:text-sm">
        <ChevronLeft className="h-4 w-4 shrink-0 opacity-60" aria-hidden />
        <p>free shipping for orders over 50€</p>
        <ChevronRight className="h-4 w-4 shrink-0 opacity-60" aria-hidden />
      </div>
    </div>
  );
}

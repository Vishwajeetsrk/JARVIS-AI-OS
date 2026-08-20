import type { MouseEvent } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import {
  handlePresetNavClick,
  resolveNavTarget,
  routeHref,
} from "../../../_shared/preset-site-routing";
import { goldEase } from "../constants";
import type { Tour } from "../lib/tours";

type TourDetailSectionProps = {
  tour: Tour;
};

export function TourDetailSection({ tour }: TourDetailSectionProps) {
  const backClick = (e: MouseEvent<HTMLAnchorElement>) => {
    handlePresetNavClick(e, resolveNavTarget("", { route: "destinations" }));
  };

  return (
    <div
      id="tourcontainer"
      className="relative min-h-screen w-full flex items-end justify-end font-sans selection:bg-black selection:text-white overflow-hidden p-4 md:p-10"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="relative w-full h-full"
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: goldEase }}
        >
          {tour.video ? (
            <video
              src={tour.video}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <>
              <img
                src={tour.image}
                alt={tour.name}
                className="absolute inset-0 w-full h-full object-cover brightness-90"
              />
              <div className="absolute inset-0 bg-black/10 md:bg-transparent md:bg-gradient-to-r from-black/20 to-transparent" />
            </>
          )}
        </motion.div>
      </div>

      <motion.div
        id="infocard"
        className="relative z-10 w-full max-w-[400px] bg-[#f3ebe4] rounded-[20px] shadow-2xl overflow-y-auto max-h-[90vh] no-scrollbar sm:gap-6 gap-2 flex flex-col"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: goldEase }}
      >
        <div className="flex flex-col gap-[10px]">
          <a
            href={routeHref("destinations")}
            onClick={backClick}
            className="inline-flex items-center gap-2 text-sm text-black px-4 py-2 rounded-full transition-all"
          >
            <ArrowLeft size={15} />
            Back to explore
          </a>
          <h1 className="text-[20px] font-semibold text-[#1c1c1c] mb-4 tracking-tight">
            {tour.name}
          </h1>
        </div>

        <p className="sm:text-[15px] text-[12px] text-black/70 leading-relaxed mb-8">
          {tour.description}
        </p>

        <div className="flex items-center gap-4 mb-10">
          {tour.images.slice(0, 3).map((src, i) => (
            <div
              key={src}
              className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-[#f3ebe4] shadow-sm"
              style={{ marginLeft: i === 0 ? 0 : -12, zIndex: 3 - i }}
            >
              <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          ))}
          <div className="w-9 h-9 rounded-full bg-black text-white text-[11px] font-bold flex items-center justify-center border-2 border-[#f3ebe4]">
            +{tour.friends - 3}
          </div>
          <span className="text-[13px] font-medium text-black/60">
            {tour.friends} friends been there
          </span>
        </div>

        <div className="space-y-4 mb-10 gap-2 flex flex-col">
          {[
            ["Avg cost per trip", tour.priceDisplay],
            ["Best time to visit", tour.bestTime],
          ].map(([label, value]) => (
            <div
              key={label}
              className="flex justify-between items-center pb-4 border-b border-black/10"
            >
              <span className="text-[13px] text-black/40 font-medium uppercase tracking-wider">
                {label}
              </span>
              <span className="text-sm font-bold text-black/90">{value}</span>
            </div>
          ))}
          <div className="flex justify-between items-center pb-2">
            <span className="text-[13px] text-black/40 font-medium uppercase tracking-wider">
              Visa
            </span>
            <span className="text-sm font-bold text-black/90">
              <span className="text-blue-600">🇪🇺</span> {tour.visa}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-8">
          {tour.images.map((src) => (
            <div key={src} className="relative aspect-square rounded-[20px] overflow-hidden group">
              <img
                src={src}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        <motion.button
          id="bookbtn"
          type="button"
          whileHover={{ y: -2 }}
          className="w-full bg-[#0f1115] text-white rounded-[24px] text-[15px] font-bold tracking-tight hover:bg-black active:scale-[0.98] transition-all duration-300"
        >
          Book this tour
        </motion.button>
      </motion.div>
    </div>
  );
}

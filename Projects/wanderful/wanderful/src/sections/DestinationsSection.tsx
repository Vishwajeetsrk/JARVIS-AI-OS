import { useState, type MouseEvent } from "react";
import { motion } from "framer-motion";
import {
  handlePresetNavClick,
  resolveNavTarget,
  routeHref,
} from "../../../_shared/preset-site-routing";
import { goldEase } from "../constants";
import { tourDetailPath, tours } from "../lib/tours";

export function DestinationsSection() {
  const [query, setQuery] = useState("");
  const filtered = tours.filter((t) => t.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="destinations-page bg-[#f3ebe4] min-h-screen font-sans selection:bg-black selection:text-white">
      <div id="destcontainer" className="transition-all duration-500">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: goldEase }}
        >
          <input
            id="searchInput"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Find your tour"
            className="w-full max-w-2xl bg-transparent text-[clamp(24px,4vw,42px)] font-light tracking-[-0.02em] outline-none placeholder-black/20 caret-black/40 text-center block mx-auto"
          />
        </motion.div>
        <motion.p
          id="Popular"
          className="text-sm font-medium tracking-widest mb-[15px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.6, delay: 0.2, ease: goldEase }}
        >
          Popular
        </motion.p>
        <div className="flex gap-5 overflow-x-auto pb-6 no-scrollbar">
          {filtered.length === 0 ? (
            <p className="text-black/40 text-sm pt-4">No tours found for &quot;{query}&quot;</p>
          ) : (
            filtered.map((tour, i) => {
              const detailRoute = tourDetailPath(tour.id);
              const cardClick = (e: MouseEvent<HTMLAnchorElement>) => {
                handlePresetNavClick(e, resolveNavTarget("", { route: detailRoute }));
              };
              return (
                <motion.div
                  key={tour.id}
                  style={{ width: tour.w, flexShrink: 0 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.55, ease: goldEase }}
                >
                  <a
                    href={routeHref(detailRoute)}
                    onClick={cardClick}
                    className="flex flex-col gap-3 group"
                  >
                    <div
                      className="relative rounded-2xl overflow-hidden"
                      style={{ height: tour.imgH }}
                    >
                      {tour.video ? (
                        <video
                          src={`${tour.video}#t=0.1`}
                          muted
                          playsInline
                          preload="metadata"
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                      ) : (
                        <img
                          src={tour.image}
                          alt={tour.name}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                      )}
                    </div>
                    <h3 className="text-sm font-medium leading-tight">{tour.name}</h3>
                    <p className="text-sm text-black/45 mt-1">{tour.priceDisplay} / person</p>
                  </a>
                </motion.div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

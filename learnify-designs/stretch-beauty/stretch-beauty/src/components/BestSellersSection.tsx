import { useCallback, useEffect, useRef, useState } from "react";
import { PresetNavLink } from "../../../_shared/components/PresetNavLink";
import { PRODUCTS } from "../constants";
import { useInView } from "../hooks/useInView";

type Tab = "best-sellers" | "sets";

export function BestSellersSection() {
  const { ref, isVisible } = useInView(0.15);
  const [tab, setTab] = useState<Tab>("best-sellers");
  const [scrollProgress, setScrollProgress] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const visibleProducts = tab === "sets" ? PRODUCTS.filter((p) => p.isSet) : PRODUCTS;

  const updateProgress = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setScrollProgress(max > 0 ? el.scrollLeft / max : 0);
  }, []);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    updateProgress();
    el.addEventListener("scroll", updateProgress, { passive: true });
    return () => el.removeEventListener("scroll", updateProgress);
  }, [updateProgress, tab]);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const el = carouselRef.current;
    if (!el) return;
    if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
    e.preventDefault();
    el.scrollLeft += e.deltaY;
  };

  return (
    <section
      id="best-sellers"
      ref={ref as React.RefObject<HTMLElement>}
      className="scroll-mt-24 bg-[#F9F4F0] px-4 py-12 text-black sm:px-6 sm:py-16 lg:px-10"
    >
      <div
        className={`transition-all duration-[800ms] ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <div className="mb-8 flex flex-wrap items-end gap-6 sm:mb-10">
          <button
            type="button"
            className={`flex items-center gap-3 text-2xl font-medium capitalize sm:text-4xl md:text-5xl ${
              tab === "best-sellers" ? "text-[#1a1a1a]" : "text-gray-400 hover:text-gray-600"
            }`}
            onClick={() => setTab("best-sellers")}
          >
            best sellers
            {tab === "best-sellers" && (
              <span className="animate-scale-in h-5 w-5 rounded-full bg-[#1a1a1a] sm:h-6 sm:w-6" />
            )}
          </button>
          <button
            type="button"
            className={`flex items-center gap-3 text-2xl font-medium capitalize sm:text-4xl md:text-5xl ${
              tab === "sets" ? "text-[#1a1a1a]" : "text-gray-400 hover:text-gray-600"
            }`}
            onClick={() => setTab("sets")}
          >
            sets
            {tab === "sets" && (
              <span className="animate-scale-in h-5 w-5 rounded-full bg-[#1a1a1a] sm:h-6 sm:w-6" />
            )}
          </button>
        </div>

        <div
          ref={carouselRef}
          className="scrollbar-hide flex overflow-x-auto"
          onWheel={handleWheel}
        >
          {visibleProducts.map((product, index) => (
            <article
              key={product.name}
              className={`group -ml-px w-[260px] shrink-0 border border-gray-200 first:ml-0 transition-all duration-500 sm:w-[280px] md:w-[300px] lg:w-[calc(25%-1px)] ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              }`}
              style={{ transitionDelay: `${200 + index * 80}ms` }}
            >
              <div className="flex h-12 flex-col justify-center px-4">
                <p className="text-xs font-medium uppercase tracking-wider">{product.category}</p>
                {product.subcategory && (
                  <p className="mt-0.5 text-xs uppercase text-gray-500">{product.subcategory}</p>
                )}
              </div>

              <div className="mx-4 aspect-[3/4] overflow-hidden rounded-lg bg-[#F9F4F0]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="px-4 py-5 text-center">
                <h3 className="text-sm">{product.name}</h3>
                <div className="mt-2 flex items-center justify-center gap-2 text-sm">
                  <span>{product.price}</span>
                  {product.oldPrice && (
                    <span className="text-gray-400 line-through">{product.oldPrice}</span>
                  )}
                </div>
                <PresetNavLink
                  target={{ kind: "route", path: "shop" }}
                  className="mt-4 inline-block"
                >
                  <button
                    type="button"
                    className="btn-primary rounded-full bg-[#1a1a1a] px-6 py-2 text-xs text-white"
                  >
                    shop now
                  </button>
                </PresetNavLink>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-[280px] sm:mt-10">
          <div className="relative h-[2px] overflow-hidden rounded-full bg-gray-300">
            <div
              className="absolute left-0 top-0 h-full w-[30%] rounded-full bg-[#1a1a1a] transition-transform duration-150"
              style={{ transform: `translateX(${scrollProgress * (100 / 0.3)}%)` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

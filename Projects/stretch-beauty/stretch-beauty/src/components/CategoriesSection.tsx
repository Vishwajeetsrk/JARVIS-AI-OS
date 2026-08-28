import { PresetNavLink } from "../../../_shared/components/PresetNavLink";
import { CATEGORIES } from "../constants";
import { useInView } from "../hooks/useInView";

export function CategoriesSection() {
  const { ref, isVisible } = useInView(0.15);

  return (
    <section
      id="categories"
      ref={ref as React.RefObject<HTMLElement>}
      className="scroll-mt-24 bg-black text-white"
    >
      <div
        className={`grid grid-cols-1 md:grid-cols-3 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        } transition-all duration-1000`}
      >
        {CATEGORIES.map((category) => (
          <article
            key={category.slug}
            className="group relative min-h-[400px] overflow-hidden sm:min-h-[500px] md:min-h-[750px]"
          >
            <div className="absolute inset-0 overflow-hidden">
              <video
                src={category.video}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/20" />

            <div className="relative z-10 flex h-full min-h-[400px] flex-col justify-between p-6 sm:min-h-[500px] sm:p-8 md:min-h-[750px] md:p-12">
              <p
                className="text-5xl font-medium capitalize transition-transform duration-300 group-hover:-translate-y-0.5 sm:text-6xl md:text-7xl lg:text-8xl"
                style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }}
              >
                {category.name}
              </p>

              <PresetNavLink target={{ kind: "route", path: `shop/${category.slug}` }}>
                <button
                  type="button"
                  className="btn-primary w-fit rounded-full bg-white px-8 py-3 text-sm text-black"
                >
                  shop {category.name}
                </button>
              </PresetNavLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

import { SERVICES } from "../constants";
import { FadeIn } from "./FadeIn";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative z-10 rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <h2
        className="mb-16 text-center font-black uppercase text-canvas sm:mb-20 md:mb-28"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Services
      </h2>

      <ul className="mx-auto max-w-5xl">
        {SERVICES.map((item, i) => (
          <FadeIn
            key={item.num}
            as="li"
            className="border-t border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12"
            delay={i * 0.1}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8">
              <span
                className="shrink-0 font-black text-canvas"
                style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
              >
                {item.num}
              </span>
              <div className="flex flex-col gap-2">
                <h3
                  className="font-medium uppercase text-canvas"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                >
                  {item.name}
                </h3>
                <p
                  className="max-w-2xl font-light leading-relaxed text-canvas/60"
                  style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
        <li className="border-t border-[rgba(12,12,12,0.15)]" aria-hidden />
      </ul>
    </section>
  );
}

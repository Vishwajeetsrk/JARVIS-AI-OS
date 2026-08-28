import { useState } from "react";
import { HOW_IT_WORKS_IMAGE } from "../constants";

const MENU_ITEMS = [
  { id: "market", label: "Market Analysis" },
  { id: "collection", label: "Exclusive collection" },
  { id: "policy", label: "Policy Support" },
  { id: "closing", label: "Closing Deal" },
] as const;

export function HowItWorksSection() {
  const [active, setActive] = useState<(typeof MENU_ITEMS)[number]["id"]>("collection");

  return (
    <section id="how-it-works" className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-12">
          <h2
            className="text-3xl font-medium leading-[1.1] tracking-tight text-[#141414] md:col-span-8 md:text-5xl"
            data-editable
            data-preset-text="how-headline"
          >
            Explore our service and the process
          </h2>
          <p
            className="text-[14px] leading-relaxed text-[#A5A5A5] md:col-span-4 md:col-start-9"
            data-editable
            data-preset-text="how-subcopy"
          >
            Digital walk-throughs, select portfolios, and professional insight — all the tools to
            search and secure with ease.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="flex flex-col justify-between bg-white p-8 md:col-span-4 md:p-16">
            <div>
              <h3 className="text-xl font-medium tracking-tight text-[#141414]" data-editable>
                Exclusive collection
              </h3>
              <p className="mt-4 text-[14px] leading-relaxed text-[#A5A5A5]" data-editable>
                Consultants curate custom lists of vetted homes. Featuring media, VR walk-ins, and
                private physical tours.
              </p>
              <button
                type="button"
                className="mt-8 border border-black/15 px-6 py-3 text-[13px] font-medium transition-colors hover:bg-gray-50"
              >
                Free consult
              </button>
            </div>
            <nav className="mt-12 flex flex-col gap-3">
              {MENU_ITEMS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(item.id)}
                  className={`text-left text-[13px] font-medium transition-colors ${
                    active === item.id ? "text-[#141414]" : "text-[#A5A5A5] hover:text-[#141414]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
          <div className="aspect-video overflow-hidden md:col-span-8 md:aspect-square">
            <img
              src={HOW_IT_WORKS_IMAGE}
              alt="Zenith Realty service"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

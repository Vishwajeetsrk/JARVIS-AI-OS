import { ArrowRight } from "lucide-react";
import { navigateToRoute } from "../../../_shared/preset-site-routing";
import { TextRoll } from "./TextRoll";

export function ManifestoSection() {
  return (
    <section className="scroll-mt-24 bg-[#EFEFEF] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-6 flex items-center gap-3 sm:mb-8">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-[11px] font-semibold text-white sm:h-7 sm:w-7 sm:text-xs">
            —
          </span>
          <span className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-900 sm:px-4 sm:py-1.5 sm:text-[13px]">
            Manifesto
          </span>
        </div>
        <p className="max-w-3xl text-[clamp(1.25rem,3vw,2rem)] font-medium leading-[1.2] tracking-[-0.02em] text-gray-900">
          We partner with brands ready to dominate their category—strategy first, craft second,
          measurable outcomes always.
        </p>
        <p className="mt-6 max-w-2xl text-[15px] leading-[1.65] text-gray-700 sm:text-base">
          Axion Studio blends research, iteration, and WebGL-forward storytelling so every launch
          feels inevitable—not improvised.
        </p>
        <button
          type="button"
          onClick={() => navigateToRoute("studio")}
          className="group mt-10 flex w-fit items-center gap-2 rounded-full border border-gray-300 bg-white py-2 pl-5 pr-2 text-[13px] font-medium text-gray-900 transition-colors hover:border-gray-400 sm:text-sm"
        >
          <TextRoll text="Meet the studio" heightClass="h-[20px]" />
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-900 text-white transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45 sm:h-8 sm:w-8">
            <ArrowRight size={16} />
          </span>
        </button>
      </div>
    </section>
  );
}

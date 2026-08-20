import { ArrowRight } from "lucide-react";
import { TextRoll } from "./TextRoll";

const EMAIL = "hello@axion.studio";

export function ConnectSection() {
  return (
    <section
      id="connect"
      className="scroll-mt-24 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-6 flex items-center gap-3 sm:mb-8">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-[11px] font-semibold text-white sm:h-7 sm:w-7 sm:text-xs">
            3
          </span>
          <span className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-900 sm:px-4 sm:py-1.5 sm:text-[13px]">
            Connect
          </span>
        </div>
        <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900">
          Start a project
        </h2>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-gray-700">
          Share scope, timeline, and category ambition—we reply within two business days.
        </p>
        <p className="mt-6">
          <a
            href={`mailto:${EMAIL}`}
            className="text-[15px] font-medium text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900"
          >
            {EMAIL}
          </a>
        </p>
        <a
          href={`mailto:${EMAIL}?subject=Strategy%20call`}
          className="group mt-10 inline-flex items-center gap-2 rounded-full bg-[#F26522] py-2 pl-5 pr-2 text-[13px] font-medium text-white transition-colors hover:bg-[#e05a1a] sm:text-sm"
        >
          <TextRoll text="Book a strategy call" heightClass="h-[20px]" />
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45 sm:h-8 sm:w-8">
            <ArrowRight size={16} className="text-[#F26522]" />
          </span>
        </a>
      </div>
    </section>
  );
}

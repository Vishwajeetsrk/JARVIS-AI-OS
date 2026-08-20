import type { MouseEvent } from "react";
import { ArrowRight } from "lucide-react";
import { AboutSection } from "../components/AboutSection";
import { CaseStudiesSection } from "../components/CaseStudiesSection";
import { ConnectSection } from "../components/ConnectSection";
import { HeroShaderBackground } from "../components/HeroShaderBackground";
import { PartnerBadgeIcon } from "../components/PartnerBadgeIcon";
import { TextRoll } from "../components/TextRoll";
import {
  handlePresetNavClick,
  resolveNavTarget,
  sectionHref,
} from "../../../_shared/preset-site-routing";

export function HomePage() {
  const connectClick = (e: MouseEvent<HTMLAnchorElement>) => {
    handlePresetNavClick(e, resolveNavTarget("", { section: "connect" }));
  };

  return (
    <>
      <section id="hero" className="relative flex min-h-screen scroll-mt-24 flex-col bg-[#EFEFEF]">
        <HeroShaderBackground />

        <div className="relative z-20 flex flex-1 flex-col">
          <div className="flex-1" />
          <div className="mx-auto w-full max-w-[1440px] px-5 pb-14 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
            <p className="mb-5 text-[13px] tracking-wide text-gray-900 sm:mb-8 sm:text-sm">
              Axion Studio
            </p>
            <h1 className="max-w-4xl text-[clamp(1.75rem,7vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 sm:text-[clamp(2.5rem,5vw,4.2rem)]">
              We craft digital experiences
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              for brands ready to dominate
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              their category online.
            </h1>
            <div className="mt-8 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:items-center sm:gap-5">
              <a
                href={sectionHref("connect")}
                onClick={connectClick}
                className="group flex w-fit items-center gap-2 rounded-full bg-[#F26522] py-2 pl-5 pr-2 text-[13px] font-medium text-white transition-colors hover:bg-[#e05a1a] sm:pl-6 sm:text-sm"
              >
                <TextRoll text="Start a project" heightClass="h-[20px]" />
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45 sm:h-8 sm:w-8">
                  <ArrowRight size={16} className="text-[#F26522]" />
                </span>
              </a>
              <div className="flex items-center gap-3 rounded-[4px] bg-white px-3 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]">
                <PartnerBadgeIcon className="h-5 w-5 text-[#E8704E] sm:h-6 sm:w-6" />
                <span className="text-[13px] font-medium text-gray-900 sm:text-sm">
                  Certified Partner
                </span>
                <span className="rounded bg-gray-900 px-1.5 py-0.5 text-[10px] font-medium text-white sm:px-2 sm:text-[11px]">
                  Featured
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />

      <CaseStudiesSection />

      <ConnectSection />
    </>
  );
}

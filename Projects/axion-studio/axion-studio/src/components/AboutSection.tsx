import { ArrowRight } from "lucide-react";
import { TextRoll } from "./TextRoll";

const SMALL_IMAGE =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090123_74be96d4-9c1b-40cf-932a-96f4f4babed3.png&w=1280&q=85";
const LARGE_IMAGE =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090133_c157d30b-a99a-4477-bec1-a446149ec3f2.png&w=1280&q=85";

function OrangeButton() {
  return (
    <button
      type="button"
      className="group mt-6 flex w-fit items-center gap-2 rounded-full bg-[#F26522] py-2 pl-5 pr-2 text-[13px] text-white transition-colors duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:bg-[#e05a1a] sm:mt-8 sm:pl-6 sm:text-sm"
    >
      <TextRoll text="About our studio" />
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45 sm:h-8 sm:w-8">
        <ArrowRight size={16} className="text-[#F26522]" />
      </span>
    </button>
  );
}

export function AboutSection() {
  return (
    <section
      id="studio"
      className="scroll-mt-24 overflow-hidden bg-white pb-12 pt-16 sm:pb-16 sm:pt-20 lg:pb-24 lg:pt-32"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-6 flex items-center gap-3 px-5 sm:mb-8 sm:px-8 lg:px-12">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-[11px] font-semibold text-white sm:h-7 sm:w-7 sm:text-xs">
            1
          </span>
          <span className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-900 sm:px-4 sm:py-1.5 sm:text-[13px]">
            Introducing Axion
          </span>
        </div>

        <h2 className="mb-12 px-5 text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 sm:mb-16 sm:px-8 lg:mb-28 lg:px-12">
          Strategy-led creatives, delivering
          <br />
          results in digital and beyond.
        </h2>

        <div className="px-5 sm:px-8 lg:hidden lg:px-12">
          <p className="text-[15px] font-medium leading-[1.6] text-gray-900 sm:text-[17px]">
            Through research, creative thinking and iteration we help growing brands realize their
            digital full potential.
          </p>
          <OrangeButton />
          <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:gap-5">
            <img
              src={SMALL_IMAGE}
              alt=""
              className="aspect-[438/346] w-full rounded-xl object-cover sm:w-[45%] sm:rounded-2xl"
            />
            <img
              src={LARGE_IMAGE}
              alt=""
              className="aspect-[900/600] w-full rounded-xl object-cover sm:w-[55%] sm:rounded-2xl"
            />
          </div>
        </div>

        <div className="hidden grid-cols-[26%_1fr_48%] items-end gap-6 px-12 lg:grid xl:gap-8">
          <img
            src={SMALL_IMAGE}
            alt=""
            className="aspect-[438/346] w-full self-end rounded-2xl object-cover"
          />
          <div className="flex flex-col items-end self-start justify-end">
            <p className="whitespace-nowrap text-base font-medium leading-[1.65] text-gray-900 xl:text-lg">
              Through research, creative thinking
              <br />
              and iteration we help growing brands
              <br />
              realize their digital full potential.
            </p>
            <OrangeButton />
          </div>
          <img
            src={LARGE_IMAGE}
            alt=""
            className="aspect-[3/2] w-full self-end rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}

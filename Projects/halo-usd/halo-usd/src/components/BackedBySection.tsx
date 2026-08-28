import { BACKER_BRANDS } from "../constants";
import BrandMarquee from "./BrandMarquee";

export default function BackedBySection() {
  return (
    <section id="news" className="scroll-mt-24 bg-[#F5F5F5] px-6 py-16">
      <div className="mx-auto grid max-w-[88rem] grid-cols-1 items-center gap-8 md:grid-cols-4">
        <p
          className="text-base leading-relaxed text-black/70"
          data-editable
          data-preset-text="backers-kicker"
        >
          Funded by premier partners
          <br />
          and forward-thinking leaders.
        </p>
        <div className="overflow-hidden md:col-span-3">
          <BrandMarquee
            brands={BACKER_BRANDS}
            trackClass="backers-track"
            itemClassName="text-black/50"
          />
        </div>
      </div>
    </section>
  );
}

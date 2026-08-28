import { type FormEvent, useState } from "react";
import { ArrowRight, Globe, Instagram, Twitter } from "lucide-react";
import { navigateToRoute } from "../../../_shared/preset-site-routing";
import { HERO_VIDEO, INSTRUMENT_SERIF } from "../constants";
import FadingVideo from "./FadingVideo";
import Navbar from "./Navbar";

export default function HeroSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleEmailSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="hero" className="relative flex min-h-screen flex-col overflow-hidden bg-black">
      <div className="absolute inset-0">
        <FadingVideo src={HERO_VIDEO} shiftY className="h-full w-full object-cover" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />

        <div className="flex flex-1 flex-col items-center justify-center px-6 py-12 text-center -translate-y-[20%]">
          <h1
            className="mb-8 whitespace-nowrap text-5xl tracking-tight text-white md:text-6xl lg:text-7xl"
            style={{ fontFamily: INSTRUMENT_SERIF }}
          >
            Built for the curious
          </h1>

          <div className="w-full max-w-xl space-y-4">
            {submitted ? (
              <p
                className="liquid-glass rounded-full px-6 py-4 text-sm font-medium text-white"
                role="status"
              >
                You&apos;re on the list — we&apos;ll be in touch soon.
              </p>
            ) : (
              <form
                className="liquid-glass flex items-center gap-3 rounded-full py-2 pl-6 pr-2"
                onSubmit={handleEmailSubmit}
              >
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="min-w-0 flex-1 border-none bg-transparent text-base text-white placeholder:text-white/40 outline-none"
                />
                <button
                  type="submit"
                  className="rounded-full bg-white p-3 text-black transition-transform hover:translate-x-0.5"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            )}

            <p className="px-4 text-sm leading-relaxed text-white">
              Stay updated with the latest news and insights. Subscribe to our newsletter today and
              never miss out on exciting updates.
            </p>

            <button
              type="button"
              className="liquid-glass rounded-full px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
              onClick={() => navigateToRoute("manifesto")}
            >
              Manifesto
            </button>
          </div>
        </div>

        <div className="relative z-10 flex justify-center gap-4 pb-12">
          {[
            { Icon: Instagram, label: "Instagram" },
            { Icon: Twitter, label: "Twitter" },
            { Icon: Globe, label: "Website" },
          ].map(({ Icon, label }) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              className="liquid-glass rounded-full p-4 text-white/80 transition-all hover:bg-white/5 hover:text-white"
            >
              <Icon className="h-5 w-5" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

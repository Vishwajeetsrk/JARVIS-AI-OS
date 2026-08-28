import { useEffect, useState } from "react";
import { PresetHashRouter } from "../../_shared/components/PresetHashRouter";
import { applyPresetHashOnLoad, navigateToRoute } from "../../_shared/preset-site-routing";
import { useDraftlyGalleryAutoplay } from "../../_shared/hooks/useDraftlyGalleryAutoplay";
import BubbleMenu from "./components/BubbleMenu";
import { NikeSwoosh } from "./components/NikeSwoosh";
import SpotlightReveal from "./components/SpotlightReveal";
import { HERO_IMAGE_1, HERO_IMAGE_2, HERO_VIDEO_1, HERO_VIDEO_2 } from "./constants";
import { PILL_MENU_ITEMS } from "./routes";
import { CollectionsPage } from "./pages/CollectionsPage";
import { CommunityPage } from "./pages/CommunityPage";
import { ContactPage } from "./pages/ContactPage";
import { DropsPage } from "./pages/DropsPage";
import { InnovationPage } from "./pages/InnovationPage";

/** Dual sticky fullscreen hero — Nike × Acreage landing spec. */
function DualSectionHero() {
  const galleryAutoplay = useDraftlyGalleryAutoplay(false);
  const [isFirstVideoPlaying, setIsFirstVideoPlaying] = useState(false);
  const [isSecondVideoPlaying, setIsSecondVideoPlaying] = useState(false);
  const firstPlaying = galleryAutoplay || isFirstVideoPlaying;
  const secondPlaying = galleryAutoplay || isSecondVideoPlaying;

  return (
    <div id="hero" className="relative flex w-full flex-col bg-[#050505]">
      <section className="sticky top-0 z-0 flex h-[100dvh] w-full flex-col justify-between overflow-hidden pointer-events-auto">
        <SpotlightReveal imageSrc={HERO_IMAGE_1} videoSrc={HERO_VIDEO_1} isPlaying={firstPlaying} />

        <div
          className="absolute bottom-0 left-0 z-20 h-[75%] w-full"
          onMouseEnter={() => setIsFirstVideoPlaying(true)}
          onMouseLeave={() => setIsFirstVideoPlaying(false)}
          aria-hidden
        />

        <header className="relative z-50 flex w-full items-start justify-center pt-[150px]">
          <button
            type="button"
            onClick={() => navigateToRoute("")}
            className="text-white"
            aria-label="Acreage home"
          >
            <NikeSwoosh />
          </button>
          <BubbleMenu
            items={[...PILL_MENU_ITEMS]}
            className="absolute top-8 right-8 z-50"
            menuBg="#ffffff"
            menuContentColor="#111111"
          />
        </header>

        <main className="relative z-10 flex w-full flex-1 flex-col items-center justify-end px-4 pb-24 text-center text-white">
          <h1
            className="mx-auto w-full translate-y-[50px] font-sans font-medium leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(14px, 3vw, 51px)" }}
            data-editable
          >
            <span className="block">Pure Comfort For</span>
            <span className="block">
              Next-Generation Athletes.{" "}
              <span className="font-serif font-normal italic pr-1">We Craft</span>
            </span>
            <span className="block font-serif font-normal italic pr-1">
              The Ultimate Footwear For Elite Performance,
            </span>
            <span className="block font-serif font-normal italic pr-1">
              Urban Exploration, Everyday Style.
            </span>
          </h1>
        </main>
      </section>

      <section
        id="science"
        className="relative z-10 h-[100dvh] w-full overflow-hidden bg-black text-white"
        style={{ boxShadow: "0 -20px 50px rgba(0,0,0,0.5)" }}
      >
        <SpotlightReveal
          imageSrc={HERO_IMAGE_2}
          videoSrc={HERO_VIDEO_2}
          isPlaying={secondPlaying}
          baseRadius={520}
        />

        <div
          className="absolute right-[calc(8%+100px)] bottom-[12%] z-30 h-[calc(50%+230px)] w-[calc(50%-50px)]"
          onMouseEnter={() => setIsSecondVideoPlaying(true)}
          onMouseLeave={() => setIsSecondVideoPlaying(false)}
          aria-hidden
        />
        <div
          className="absolute left-[calc(8%+200px)] top-[calc(20%+190px)] z-30 h-[calc(22.5%+130px)] w-[calc(15%+250px)] -translate-y-full"
          onMouseEnter={() => setIsSecondVideoPlaying(true)}
          onMouseLeave={() => setIsSecondVideoPlaying(false)}
          aria-hidden
        />

        <div
          className="absolute left-[calc(8%+200px)] top-[20%] z-20 w-[320px] rounded-sm border border-white/10 px-8 py-6"
          style={{
            background: "rgba(0, 0, 0, 0.16)",
            backdropFilter: "blur(80px)",
            WebkitBackdropFilter: "blur(80px)",
          }}
        >
          <div className="mb-4 flex items-end gap-2">
            <span
              className="font-serif text-[72px] leading-[80px] tracking-tight text-[#DA3A16] italic"
              data-editable
            >
              78%
            </span>
            <div className="w-[11px]">
              <svg
                style={{ width: "160px", height: "80px" }}
                viewBox="0 0 289 138"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <g filter="url(#filter0_d_acreage)">
                  <path
                    d="M22.5 48.7306C39.7833 48.7306 49.34 54.94 63.1667 69.2965C76.9933 83.653 86.55 110.5 103.833 110.5C121.117 110.5 130.673 84.2876 144.5 59.2856C158.327 34.2837 167.883 19.5573 185.167 19.5573C202.45 19.5573 208.55 57.6673 225.833 57.6673C243.117 57.6673 249.217 19.5 266.5 19.5"
                    stroke="#DA3A16"
                    strokeWidth="2"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_acreage"
                    x="0"
                    y="0"
                    width="289"
                    height="138"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="11.25" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.854902 0 0 0 0 0.227451 0 0 0 0 0.0862745 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_acreage"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_acreage"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <h3
            className="mb-2 font-serif text-[15px] uppercase leading-tight tracking-[0.02em] text-white"
            data-editable
          >
            NEXT-GEN CUSHIONING ARCHITECTURE
          </h3>
          <p className="font-serif text-[13px] text-white/64" data-editable>
            Impact Absorption & Energy Return Dynamics
          </p>
        </div>

        <div className="absolute bottom-[12%] left-[8%] z-20 max-w-[500px] text-white">
          <h2 className="flex flex-col text-[44px] leading-[1.05] tracking-tight" data-editable>
            <span className="font-sans font-medium">Bringing Aerospace-</span>
            <span className="font-sans font-medium">Grade Infrastructure</span>
            <span className="pt-1 font-serif font-normal">
              <span className="not-italic">Directly To Your </span>
              <span className="italic">Everyday</span>
            </span>
            <span className="font-serif font-normal italic">Urban Exploration</span>
          </h2>
        </div>

        <div className="absolute right-[calc(8%+100px)] bottom-[12%] z-20 flex flex-col items-center">
          <div className="flex w-[180px] items-center justify-center bg-white py-[6px]">
            <span
              className="text-center font-serif text-[10px] font-bold uppercase leading-[16px] tracking-[0.08em] text-black"
              data-editable
            >
              THE SCIENCE OF IMPACT CONTROL
            </span>
          </div>
          <div className="flex h-[100px] w-[180px] items-center justify-center bg-[#DA3A16]">
            <NikeSwoosh width={86} className="text-white" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    applyPresetHashOnLoad();
  }, []);

  return (
    <PresetHashRouter
      routes={{
        "": <DualSectionHero />,
        drops: <DropsPage />,
        innovation: <InnovationPage />,
        collections: <CollectionsPage />,
        community: <CommunityPage />,
        contact: <ContactPage />,
      }}
    />
  );
}

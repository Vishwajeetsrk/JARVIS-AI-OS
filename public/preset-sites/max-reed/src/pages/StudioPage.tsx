import { IconMarquee } from "../components/IconMarquee";
import { VIDEO_DAILY_SOFTWARE } from "../constants";
import { BackgroundVideo } from "../components/BackgroundVideo";

export function StudioPage() {
  return (
    <section className="border-t border-white/10 px-4 py-20 md:px-14">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs uppercase tracking-[0.2em] text-white/40">Studio</p>
        <h2 className="mt-2 text-3xl font-normal tracking-tight">Daily software &amp; tools</h2>
        <p className="mt-4 text-sm text-white/60">
          Motion, 3D, and prototyping tools that power every engagement — from Figma systems to
          render farms.
        </p>
        <div className="relative mt-8 aspect-video overflow-hidden rounded-2xl">
          <BackgroundVideo src={VIDEO_DAILY_SOFTWARE} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
        <IconMarquee />
      </div>
    </section>
  );
}

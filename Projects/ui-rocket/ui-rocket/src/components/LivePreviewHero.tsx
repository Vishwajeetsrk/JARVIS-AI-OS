import { DASHBOARD_VIDEO } from "../constants";
import { FadingVideo } from "./FadingVideo";
import { MIcon } from "./MIcon";

export function LivePreviewHero() {
  return (
    <div className="relative flex h-full flex-1 flex-col overflow-hidden bg-[#12061f]">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        </span>
        <span className="ml-2 text-[11px] text-white/45" data-editable>
          preview.uirocket.app
        </span>
        <MIcon name="refresh" className="ml-auto text-[16px] text-white/35" />
      </div>
      <div className="relative flex-1">
        <FadingVideo
          src={DASHBOARD_VIDEO}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#12061f] via-transparent to-transparent" />
      </div>
    </div>
  );
}

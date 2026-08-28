import React from 'react';
import { Loader2, AlertTriangle } from 'lucide-react';

type AppState = 'IDLE' | 'GENERATING_ATMOSPHERE' | 'GENERATING_PROMPT' | 'GENERATING_VIDEO' | 'VIDEO_READY';
type LogType = 'info' | 'success' | 'warn' | 'error';
interface LogEntry { id: string; message: string; type: LogType; image?: string }

interface VideoOutputProps {
  appState: AppState;
  videoUrl: string | null;
  logs: LogEntry[];
}

const logColor = (type: LogType) =>
  type === 'error' ? 'text-red-500' :
  type === 'warn' ? 'text-yellow-500' :
  type === 'success' ? 'text-emerald-400' :
  'text-zinc-400';

// Errors often arrive as a raw API payload, e.g.
// `Error: 400 {"error":{"message":"...","code":"..."}}`. Pull out the
// human-readable message so we don't dump JSON at the user.
const readableError = (raw: string): string => {
  const match = raw.match(/\{[\s\S]*\}/);
  if (match) {
    try {
      const parsed = JSON.parse(match[0]);
      const message = parsed?.error?.message ?? parsed?.message;
      if (typeof message === 'string' && message.trim()) return message;
    } catch {
      // fall through to the raw string
    }
  }
  return raw.replace(/^Error:\s*/, '').trim();
};

export function VideoOutput({ appState, videoUrl, logs }: VideoOutputProps) {
  const generating = appState === 'GENERATING_ATMOSPHERE' || appState === 'GENERATING_PROMPT' || appState === 'GENERATING_VIDEO';
  const lastLog = logs[logs.length - 1];
  const recentLogs = logs.slice(-6);
  const hasError = lastLog?.type === 'error';

  return (
    <div className={`w-full relative flex items-center justify-center transition-all ${
      hasError 
        ? 'min-h-[220px] h-auto py-6 overflow-y-auto border border-zinc-800 bg-zinc-950/40 rounded-lg' 
        : 'aspect-video overflow-hidden'
    }`}>
      {appState === 'VIDEO_READY' && videoUrl ? (
        <video
          // Omni always returns audio and offers no way to disable it; mute on
          // playback. Set via ref too — React's `muted` prop alone is unreliable.
          ref={(el) => { if (el) el.muted = true; }}
          src={videoUrl}
          controls
          controlsList="nodownload"
          autoPlay
          loop
          playsInline
          muted
          className="w-full h-full object-contain bg-black"
        />
      ) : generating ? (
        // absolute inset-0 + justify-center keeps the spinner, label and ticker
        // together as one centered group (a flex *item* here collapses to ~0
        // width, clamping logs and the image). overflow-hidden clips gracefully
        // if a tall image + logs ever exceed a short frame.
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 py-6 overflow-hidden">
          <Loader2 className="w-9 h-9 text-zinc-500 animate-spin shrink-0" />
          <div className="font-mono text-sm uppercase tracking-widest text-white shrink-0">
            {appState === 'GENERATING_ATMOSPHERE' ? 'Generating atmosphere' : appState === 'GENERATING_PROMPT' ? 'Writing prompt' : 'Rendering'}
          </div>
          <div className="w-full max-w-md min-h-0 space-y-1.5 font-mono text-[11px] text-left">
            {recentLogs.map((log) => (
              <div key={log.id} className={logColor(log.type)}>
                <div className="truncate"><span className="text-zinc-600">›</span> {log.message}</div>
                {log.image && (
                  // The freshly generated atmosphere image, ticking past in the feed.
                  <img
                    src={log.image}
                    alt="Generated atmosphere"
                    className="mt-2 h-40 md:h-52 w-auto border border-zinc-800 bg-zinc-900"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center text-center px-6 w-full max-w-md">
          <div className="font-mono text-xs uppercase tracking-widest text-zinc-700">Awaiting render</div>
          {lastLog?.type === 'error' && (
            <div className="mt-4 w-full flex items-start gap-3 rounded-md border border-red-500/40 bg-red-500/10 px-4 py-3 text-left">
              <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0 text-red-400" />
              <p className="font-mono text-xs leading-relaxed text-red-200 break-words">
                {readableError(lastLog.message)}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
import { useState, useRef, useEffect } from "react";
import {
  RecordingStudioEngine,
  DEFAULT_DEMO_SCENES,
  type RecordingMode,
  type RecordingQuality,
  type RecordingState,
  type DemoScriptScene,
  type SavedRecordingItem
} from "@/lib/studio/recording-studio-engine";
import {
  Video, Mic, MicOff, Volume2, VolumeX, Camera, CameraOff,
  Play, Pause, Square, Download, FolderOpen, FileText, CheckCircle2,
  AlertCircle, ShieldCheck, Sparkles, Monitor, AppWindow, Globe,
  Sliders, Layers, Eye, RefreshCw, X
} from "lucide-react";
import { toast } from "sonner";

export function ScreenRecordingStudio() {
  const [activeMode, setActiveMode] = useState<RecordingMode>("demo_walkthrough");
  const [quality, setQuality] = useState<RecordingQuality>("1080p_60fps");
  const [includeMic, setIncludeMic] = useState(true);
  const [includeSystemAudio, setIncludeSystemAudio] = useState(true);
  const [includeWebcam, setIncludeWebcam] = useState(false);
  const [highlightClicks, setHighlightClicks] = useState(true);
  const [showTeleprompter, setShowTeleprompter] = useState(true);
  const [recordingCategory, setRecordingCategory] = useState<"Demos" | "Screen" | "Tutorials" | "JARVIS">("Demos");

  const [recordingState, setRecordingState] = useState<RecordingState>("idle");
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [recordedBlobUrl, setRecordedBlobUrl] = useState<string | null>(null);
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const webcamStreamRef = useRef<MediaStream | null>(null);
  const videoPreviewRef = useRef<HTMLVideoElement | null>(null);
  const timerIntervalRef = useRef<any>(null);
  const recordedChunksRef = useRef<Blob[]>([]);

  const [savedLibrary, setSavedLibrary] = useState<SavedRecordingItem[]>(RecordingStudioEngine.getSavedRecordings());
  const demoScenes = DEFAULT_DEMO_SCENES;

  // Timer loop
  useEffect(() => {
    if (recordingState === "recording") {
      timerIntervalRef.current = setInterval(() => {
        setRecordingSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    }
    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [recordingState]);

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleStartScreenRecording = async () => {
    try {
      recordedChunksRef.current = [];
      setRecordedBlobUrl(null);
      setRecordingSeconds(0);

      // Request Display Stream (Screen / Window / Tab)
      const displayStream = await navigator.mediaDevices.getDisplayMedia({
        video: {
          displaySurface: activeMode === "browser_tab" ? "browser" : activeMode === "window" ? "window" : "monitor",
          frameRate: quality.includes("60fps") ? 60 : 30
        },
        audio: includeSystemAudio
      });

      let finalStream = displayStream;

      // If Microphone is enabled, combine audio tracks
      if (includeMic) {
        try {
          const micStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
          micStream.getAudioTracks().forEach((track) => finalStream.addTrack(track));
        } catch (e) {
          toast.warning("Microphone access denied or unavailable; continuing with system audio.");
        }
      }

      // If Webcam PIP is enabled
      if (includeWebcam) {
        try {
          const camStream = await navigator.mediaDevices.getUserMedia({ video: { width: 320, height: 240 } });
          webcamStreamRef.current = camStream;
        } catch (e) {
          toast.warning("Webcam unavailable.");
        }
      }

      streamRef.current = finalStream;
      if (videoPreviewRef.current) {
        videoPreviewRef.current.srcObject = finalStream;
        videoPreviewRef.current.play();
      }

      // Set up MediaRecorder
      const mimeType = MediaRecorder.isTypeSupported("video/webm;codecs=vp9,opus")
        ? "video/webm;codecs=vp9,opus"
        : "video/webm";

      const recorder = new MediaRecorder(finalStream, { mimeType });
      recorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          recordedChunksRef.current.push(event.data);
        }
      };

      recorder.onstop = () => {
        const fullBlob = new Blob(recordedChunksRef.current, { type: "video/webm" });
        const url = URL.createObjectURL(fullBlob);
        setRecordedBlobUrl(url);
        setRecordingState("completed");

        const newItem: SavedRecordingItem = {
          id: `rec-${Date.now()}`,
          fileName: `${new Date().toISOString().slice(0, 10)}_JARVIS-${recordingCategory}_${Date.now().toString().slice(-4)}.webm`,
          category: recordingCategory,
          durationFormatted: formatTimer(recordingSeconds || 15),
          sizeMB: Number((fullBlob.size / (1024 * 1024)).toFixed(1)),
          resolution: quality.replace("_", " "),
          createdAt: new Date().toLocaleTimeString(),
          blobUrl: url,
          mimeType: "video/webm"
        };

        RecordingStudioEngine.addRecording(newItem);
        setSavedLibrary([...RecordingStudioEngine.getSavedRecordings()]);
        toast.success("Recording completed and saved to local studio library!");
      };

      // Handle user clicking native "Stop sharing" bar
      displayStream.getVideoTracks()[0].onended = () => {
        handleStopRecording();
      };

      recorder.start(1000);
      mediaRecorderRef.current = recorder;
      setRecordingState("recording");
      toast.success("Screen recording active! All actions captured.");
    } catch (err: any) {
      toast.error(`Recording cancelled or failed: ${err.message}`);
      setRecordingState("idle");
    }
  };

  const handlePauseResume = () => {
    if (!mediaRecorderRef.current) return;
    if (recordingState === "recording") {
      mediaRecorderRef.current.pause();
      setRecordingState("paused");
      toast.info("Recording paused.");
    } else if (recordingState === "paused") {
      mediaRecorderRef.current.resume();
      setRecordingState("recording");
      toast.info("Recording resumed.");
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }
    if (webcamStreamRef.current) {
      webcamStreamRef.current.getTracks().forEach((track) => track.stop());
    }
    setRecordingState("completed");
  };

  const handleDownloadVideo = (blobUrl: string, fileName: string) => {
    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    toast.success(`Downloading ${fileName}...`);
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-lg lg:p-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-500 shadow-sm">
            <Video className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display text-lg font-bold text-foreground">
                Screen Recording, Demo & Tutorial Studio
              </h3>
              <span
                className={`flex items-center gap-1 rounded-full px-2.5 py-0.5 font-mono text-[10px] font-bold ${
                  recordingState === "recording"
                    ? "bg-red-500/20 text-red-400 animate-pulse"
                    : "bg-emerald-500/10 text-emerald-400"
                }`}
              >
                {recordingState === "recording" ? "● LIVE RECORDING" : "STUDIO READY"}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              Full Screen, Window, Browser Tab, Product Demos & Teleprompter Workflow
            </p>
          </div>
        </div>

        {/* Floating Recording Timer & Controls */}
        {recordingState === "recording" || recordingState === "paused" ? (
          <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-950/20 px-3.5 py-1.5">
            <span className="font-mono text-sm font-bold text-red-400">● {formatTimer(recordingSeconds)}</span>
            <button
              onClick={handlePauseResume}
              className="flex items-center gap-1 rounded-lg bg-surface px-2 py-1 text-xs font-semibold text-white hover:bg-card"
            >
              {recordingState === "recording" ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
              {recordingState === "recording" ? "Pause" : "Resume"}
            </button>
            <button
              onClick={handleStopRecording}
              className="flex items-center gap-1 rounded-lg bg-red-500 px-2.5 py-1 text-xs font-bold text-white hover:bg-red-600 shadow-sm"
            >
              <Square className="h-3 w-3 fill-current" /> Stop & Save
            </button>
          </div>
        ) : (
          <button
            onClick={handleStartScreenRecording}
            className="flex items-center gap-2 rounded-xl bg-red-500 px-4 py-2 text-xs font-bold text-white hover:bg-red-600 transition-all shadow-md shadow-red-500/20"
          >
            <Play className="h-3.5 w-3.5 fill-current" /> Start Recording
          </button>
        )}
      </div>

      {/* Main Studio Grid */}
      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {/* Left Column: Recording Controls & Profile */}
        <div className="space-y-4 lg:col-span-1">
          {/* Mode Selector */}
          <div className="rounded-xl border border-border bg-surface p-3.5 space-y-2">
            <label className="font-mono text-xs font-bold text-muted-foreground uppercase">1. Select Recording Target</label>
            <div className="grid grid-cols-2 gap-1.5 text-xs">
              <button
                onClick={() => setActiveMode("full_screen")}
                className={`flex items-center gap-1.5 rounded-lg p-2 font-medium transition-all ${
                  activeMode === "full_screen"
                    ? "border border-primary bg-primary/20 text-primary font-bold"
                    : "border border-border bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                <Monitor className="h-3.5 w-3.5" /> Full Screen
              </button>
              <button
                onClick={() => setActiveMode("window")}
                className={`flex items-center gap-1.5 rounded-lg p-2 font-medium transition-all ${
                  activeMode === "window"
                    ? "border border-primary bg-primary/20 text-primary font-bold"
                    : "border border-border bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                <AppWindow className="h-3.5 w-3.5" /> App Window
              </button>
              <button
                onClick={() => setActiveMode("browser_tab")}
                className={`flex items-center gap-1.5 rounded-lg p-2 font-medium transition-all ${
                  activeMode === "browser_tab"
                    ? "border border-primary bg-primary/20 text-primary font-bold"
                    : "border border-border bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                <Globe className="h-3.5 w-3.5" /> Browser Tab
              </button>
              <button
                onClick={() => setActiveMode("demo_walkthrough")}
                className={`flex items-center gap-1.5 rounded-lg p-2 font-medium transition-all ${
                  activeMode === "demo_walkthrough"
                    ? "border border-primary bg-primary/20 text-primary font-bold"
                    : "border border-border bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                <Sparkles className="h-3.5 w-3.5" /> Demo Studio
              </button>
            </div>
          </div>

          {/* Audio & Video Source Toggles */}
          <div className="rounded-xl border border-border bg-surface p-3.5 space-y-2.5">
            <label className="font-mono text-xs font-bold text-muted-foreground uppercase">2. Audio & Video Inputs</label>
            <div className="space-y-2 text-xs">
              <button
                onClick={() => setIncludeMic(!includeMic)}
                className={`flex w-full items-center justify-between rounded-lg border p-2.5 transition-all ${
                  includeMic ? "border-emerald-500/40 bg-emerald-950/20 text-white" : "border-border bg-card text-muted-foreground"
                }`}
              >
                <span className="flex items-center gap-2">
                  {includeMic ? <Mic className="h-4 w-4 text-emerald-400" /> : <MicOff className="h-4 w-4" />}
                  Microphone Narration
                </span>
                <span className="font-mono text-[10px] font-bold text-emerald-400">{includeMic ? "ON" : "OFF"}</span>
              </button>

              <button
                onClick={() => setIncludeSystemAudio(!includeSystemAudio)}
                className={`flex w-full items-center justify-between rounded-lg border p-2.5 transition-all ${
                  includeSystemAudio ? "border-emerald-500/40 bg-emerald-950/20 text-white" : "border-border bg-card text-muted-foreground"
                }`}
              >
                <span className="flex items-center gap-2">
                  {includeSystemAudio ? <Volume2 className="h-4 w-4 text-emerald-400" /> : <VolumeX className="h-4 w-4" />}
                  System Audio / Sound
                </span>
                <span className="font-mono text-[10px] font-bold text-emerald-400">{includeSystemAudio ? "ON" : "OFF"}</span>
              </button>

              <button
                onClick={() => setIncludeWebcam(!includeWebcam)}
                className={`flex w-full items-center justify-between rounded-lg border p-2.5 transition-all ${
                  includeWebcam ? "border-purple-500/40 bg-purple-950/20 text-white" : "border-border bg-card text-muted-foreground"
                }`}
              >
                <span className="flex items-center gap-2">
                  {includeWebcam ? <Camera className="h-4 w-4 text-purple-400" /> : <CameraOff className="h-4 w-4" />}
                  Webcam Corner PIP Overlay
                </span>
                <span className="font-mono text-[10px] font-bold text-purple-400">{includeWebcam ? "ON" : "OFF"}</span>
              </button>
            </div>
          </div>

          {/* Quality & Category */}
          <div className="rounded-xl border border-border bg-surface p-3.5 space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-muted-foreground">Quality Profile:</span>
              <select
                value={quality}
                onChange={(e) => setQuality(e.target.value as any)}
                className="rounded-lg border border-border bg-card px-2 py-1 font-mono text-[11px] text-foreground"
              >
                <option value="1080p_60fps">1080p (60 FPS)</option>
                <option value="1080p_30fps">1080p (30 FPS)</option>
                <option value="720p_30fps">720p (Fast Bug Report)</option>
                <option value="4k_60fps">4K Ultra HD (60 FPS)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Right Column: Live Preview & Demo Teleprompter */}
        <div className="space-y-4 lg:col-span-2">
          {/* Live Video Preview / Completed Player */}
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-slate-950 shadow-inner flex items-center justify-center">
            {recordedBlobUrl ? (
              <video src={recordedBlobUrl} controls className="h-full w-full object-contain" />
            ) : (
              <video ref={videoPreviewRef} autoPlay muted className="h-full w-full object-contain" />
            )}

            {/* Standby Placeholder */}
            {recordingState === "idle" && !recordedBlobUrl && (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-slate-950/80">
                <Video className="h-12 w-12 text-slate-600 mb-2" />
                <h4 className="font-display text-sm font-bold text-white">Live Screen Preview Standby</h4>
                <p className="mt-1 max-w-sm text-xs text-slate-400">
                  Click <strong>"Start Recording"</strong> to select your monitor, application window, or browser tab.
                </p>
              </div>
            )}

            {/* Live Recording Badge */}
            {recordingState === "recording" && (
              <div className="absolute top-3 left-3 flex items-center gap-2 rounded-full bg-red-600/90 px-3 py-1 text-xs font-bold text-white shadow-lg">
                <span className="h-2 w-2 rounded-full bg-white animate-ping" />
                <span>REC {formatTimer(recordingSeconds)}</span>
              </div>
            )}
          </div>

          {/* Demo Script & Teleprompter Studio */}
          {activeMode === "demo_walkthrough" && (
            <div className="rounded-xl border border-border bg-surface p-4 space-y-3">
              <div className="flex items-center justify-between border-b border-border pb-2">
                <h4 className="font-display text-xs font-bold text-foreground flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-amber-400" /> Interactive Demo Script & Teleprompter
                </h4>
                <span className="font-mono text-[10px] text-muted-foreground">Scene {activeSceneIndex + 1} of {demoScenes.length}</span>
              </div>

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-5">
                {demoScenes.map((sc, idx) => (
                  <button
                    key={sc.sceneNumber}
                    onClick={() => setActiveSceneIndex(idx)}
                    className={`rounded-lg border p-2 text-left transition-all text-xs ${
                      activeSceneIndex === idx
                        ? "border-amber-500 bg-amber-500/10 text-white font-bold"
                        : "border-border bg-card text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span className="font-mono text-[9px] text-amber-400">Scene {sc.sceneNumber} ({sc.durationSec}s)</span>
                    <p className="mt-0.5 truncate text-[10px]">{sc.title.split(". ")[1]}</p>
                  </button>
                ))}
              </div>

              <div className="rounded-lg border border-amber-500/20 bg-card p-3 text-xs space-y-1.5">
                <p className="text-slate-300 font-semibold">🎬 <strong>Visual Action:</strong> {demoScenes[activeSceneIndex].visualAction}</p>
                <div className="rounded bg-slate-950 p-2.5 font-sans text-xs text-amber-300 italic">
                  🗣️ <strong>Teleprompter:</strong> "{demoScenes[activeSceneIndex].teleprompterSpeech}"
                </div>
              </div>
            </div>
          )}

          {/* Saved Recordings Library */}
          <div className="rounded-xl border border-border bg-surface p-4 space-y-3">
            <div className="flex items-center justify-between border-b border-border pb-2">
              <h4 className="font-mono text-xs font-bold text-foreground flex items-center gap-1.5">
                <FolderOpen className="h-3.5 w-3.5 text-primary" /> Saved Recordings Library
              </h4>
              <span className="font-mono text-[10px] text-muted-foreground">{savedLibrary.length} Items</span>
            </div>

            <div className="space-y-2">
              {savedLibrary.map((item) => (
                <div key={item.id} className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border bg-card p-2.5 text-xs">
                  <div>
                    <span className="font-semibold text-white">{item.fileName}</span>
                    <div className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground mt-0.5">
                      <span className="rounded bg-primary/10 px-1.5 py-0.2 text-primary">{item.category}</span>
                      <span>⏱️ {item.durationFormatted}</span>
                      <span>💾 {item.sizeMB} MB</span>
                      <span>📅 {item.createdAt}</span>
                    </div>
                  </div>

                  {item.blobUrl && (
                    <button
                      onClick={() => handleDownloadVideo(item.blobUrl!, item.fileName)}
                      className="flex items-center gap-1 rounded-lg bg-primary/20 px-2.5 py-1 text-xs font-semibold text-primary hover:bg-primary/30 transition-all"
                    >
                      <Download className="h-3 w-3" /> Download
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

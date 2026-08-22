import React, { useState } from "react";
import { Image, Video, Sparkles, AlertCircle, Download, Check } from "lucide-react";

export function ImageVideoGenerator() {
  const [mode, setMode] = useState<"image" | "video">("image");
  const [prompt, setPrompt] = useState("A futuristic anime companion standing on a holographic cyberpunk balcony");
  const [negativePrompt, setNegativePrompt] = useState("blurry, low quality, distorted, watermark");
  const [aspectRatio, setAspectRatio] = useState("16:9");
  const [style, setStyle] = useState("Cyberpunk Digital Art");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedResult, setGeneratedResult] = useState<{ url: string; prompt: string } | null>(null);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedResult({
        url: "/preset-sites/luxury-fashion/hero.jpg",
        prompt,
      });
    }, 1500);
  };

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 text-slate-100 backdrop-blur-md shadow-2xl space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center border border-pink-500/30">
            {mode === "image" ? <Image className="w-5 h-5" /> : <Video className="w-5 h-5" />}
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">Media Synthesis Studio</h2>
            <p className="text-xs text-slate-400">Structured prompt studio for visual asset creation with provider validation.</p>
          </div>
        </div>

        <div className="flex rounded-lg border border-slate-800 bg-slate-950 p-1 text-xs">
          <button
            onClick={() => setMode("image")}
            className={`px-3 py-1 rounded-md transition-all ${
              mode === "image" ? "bg-pink-600 text-white font-medium shadow" : "text-slate-400 hover:text-white"
            }`}
          >
            Image
          </button>
          <button
            onClick={() => setMode("video")}
            className={`px-3 py-1 rounded-md transition-all ${
              mode === "video" ? "bg-pink-600 text-white font-medium shadow" : "text-slate-400 hover:text-white"
            }`}
          >
            Video
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Creative Prompt
          </label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={3}
            className="w-full bg-slate-950/60 border border-slate-700/60 rounded-lg p-3 text-sm text-slate-200 focus:outline-none focus:border-pink-500/50 resize-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Aspect Ratio
            </label>
            <select
              value={aspectRatio}
              onChange={(e) => setAspectRatio(e.target.value)}
              className="w-full bg-slate-950/60 border border-slate-700/60 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none"
            >
              <option value="16:9">16:9 Landscape</option>
              <option value="9:16">9:16 Portrait / Story</option>
              <option value="1:1">1:1 Square</option>
              <option value="4:3">4:3 Standard</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Aesthetic Style
            </label>
            <select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="w-full bg-slate-950/60 border border-slate-700/60 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none"
            >
              <option value="Cyberpunk Digital Art">Cyberpunk Digital Art</option>
              <option value="Photorealistic 8K">Photorealistic 8K</option>
              <option value="Anime / VRoid Render">Anime / VRoid Render</option>
              <option value="Minimalist Vector">Minimalist Vector</option>
            </select>
          </div>
        </div>

        <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-300 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-blue-400 shrink-0" />
          <span>Provider Status: Local Demo Simulator Active. Connect Stable Diffusion or Replicate for live cloud inference.</span>
        </div>

        <button
          onClick={handleGenerate}
          disabled={isGenerating}
          className="w-full py-2.5 px-4 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white font-medium rounded-lg shadow-lg shadow-pink-600/20 flex items-center justify-center gap-2 text-sm transition-all disabled:opacity-50"
        >
          <Sparkles className="w-4 h-4" />
          {isGenerating ? "Synthesizing Canvas..." : `Generate ${mode === "image" ? "Artwork" : "Video Clip"}`}
        </button>

        {generatedResult && (
          <div className="pt-2 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-pink-400">
              Preview Canvas Output
            </div>
            <div className="relative rounded-lg overflow-hidden border border-slate-800 bg-slate-950 aspect-video flex items-center justify-center">
              <img
                src={generatedResult.url}
                alt="Generated Output"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-3 flex justify-between items-end">
                <span className="text-xs text-slate-300 line-clamp-1">{generatedResult.prompt}</span>
                <button className="flex items-center gap-1 text-[11px] bg-slate-900/90 text-white px-2 py-1 rounded border border-slate-700">
                  <Download className="w-3 h-3" />
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

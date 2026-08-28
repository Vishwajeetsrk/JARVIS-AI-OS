import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Loader2, ArrowRight, ChevronRight, Download } from 'lucide-react';
import { PRODUCTS, ATMOSPHERES, MediaSelection } from './data.js';
import { ImageUploader } from './components/ImageUploader.js';
import { VideoOutput } from './components/VideoOutput.js';
import { ScrollRow } from './components/ScrollRow.js';
import { toInlineImages, InlineImage } from './images.js';

type LogType = 'info' | 'success' | 'warn' | 'error';
type AppState = 'IDLE' | 'GENERATING_ATMOSPHERE' | 'GENERATING_PROMPT' | 'GENERATING_VIDEO' | 'VIDEO_READY';

interface VideoVersion {
  label: string;          // 'V1', 'V2', ...
  interactionId: string;  // Omni interaction id — chained from for edits
  videoUrl: string;
  prompt: string;         // the cinematic directive (V1) or the edit instructions
}

export default function App() {
  const [product, setProduct] = useState<MediaSelection | null>(null);
  const [atmosphere, setAtmosphere] = useState<MediaSelection | null>(null);
  const [appState, setAppState] = useState<AppState>('IDLE');
  const [submittedImages, setSubmittedImages] = useState<string[]>([]);

  // "Generate your own atmosphere": a setting the user types instead of picking
  // or uploading an atmosphere image. On submit it's expanded by Flash Lite and
  // rendered by gemini-3.1-flash-lite-image, then fed into the video pipeline as the reference.
  const [generateOpen, setGenerateOpen] = useState(false);
  const [generatePrompt, setGeneratePrompt] = useState('');

  const [versions, setVersions] = useState<VideoVersion[]>([]);
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);
  const versionCount = useRef(0);

  const [editOpen, setEditOpen] = useState(false);
  const [editText, setEditText] = useState('');
  const [promptOpen, setPromptOpen] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const [logs, setLogs] = useState<{ id: string; timestamp: string; message: string; type: LogType; image?: string }[]>([]);

  const addLog = (message: string, type: LogType = 'info', image?: string) => {
    setLogs(prev => [...prev, {
      id: Math.random().toString(36).substring(7),
      timestamp: new Date().toISOString().split('T')[1].substring(0, 12),
      message,
      type,
      image
    }]);
  };

  const describe = (sel: MediaSelection) => sel.description || `${sel.images.length} uploaded image${sel.images.length > 1 ? 's' : ''}`;

  // Typing a setting is an alternative to picking/uploading an atmosphere image.
  const usingGenerate = !atmosphere && generatePrompt.trim().length > 0;
  const hasAtmosphere = !!atmosphere || usingGenerate;

  // Choosing a suggestion or uploading supersedes a typed prompt — clear it so the
  // two paths never both feed submit. Updater-form calls only touch an existing
  // selection (by which point generate is already cleared), so ignore those.
  const selectAtmosphere: React.Dispatch<React.SetStateAction<MediaSelection | null>> = (value) => {
    setAtmosphere(value);
    if (typeof value !== 'function' && value) {
      setGenerateOpen(false);
      setGeneratePrompt('');
    }
  };

  const isGenerating = appState === 'GENERATING_ATMOSPHERE' || appState === 'GENERATING_PROMPT' || appState === 'GENERATING_VIDEO';
  const canSubmit = !!product && hasAtmosphere && !isGenerating;

  // Explains why the submit button is unavailable (shown as a tooltip).
  const submitHint = isGenerating
    ? 'Generating your video — please wait'
    : !product && !hasAtmosphere
    ? 'Add a product image and an atmosphere to start'
    : !product
    ? 'Add a product image to start'
    : !hasAtmosphere
    ? 'Add an atmosphere to start'
    : undefined;

  const selected = versions.find(v => v.label === selectedLabel) ?? null;
  const otherVersions = versions.filter(v => v.label !== selectedLabel);

  const addVersion = (interactionId: string, fileId: string, promptText: string) => {
    const label = `V${++versionCount.current}`;
    setVersions(prev => [...prev, { label, interactionId, videoUrl: `/api/video/${fileId}`, prompt: promptText }]);
    setSelectedLabel(label);
  };

  // Polls Omni until the render is ACTIVE, then records the version.
  const pollVideoStatus = (fileId: string, interactionId: string, promptText: string, isInitial: boolean) => {
    addLog('Polling Omni for render status...', 'warn');
    let lastState = '';

    const interval = setInterval(async () => {
      try {
        const res = await fetch(`/api/file-status/${fileId}`);
        const data = await res.json();

        if (data.state === 'ACTIVE') {
          clearInterval(interval);
          addLog('Render complete. Stream ready.', 'success');
          addVersion(interactionId, fileId, promptText);
          setAppState('VIDEO_READY');
          if (isInitial) {
            // Reset the upload sidebar for the next run.
            setProduct(null);
            setAtmosphere(null);
            setGenerateOpen(false);
            setGeneratePrompt('');
          }
        } else if (data.state === 'FAILED') {
          clearInterval(interval);
          addLog('Omni backend reported FAILED state.', 'error');
          setAppState(isInitial ? 'IDLE' : 'VIDEO_READY');
        } else if (data.state !== lastState) {
          lastState = data.state;
          addLog(`Render status: ${data.state}`);
        }
      } catch (e: any) {
        addLog(`Polling error: ${e.message}`, 'error');
      }
    }, 5000);
  };

  // Initial generation from the sidebar: optionally render an atmosphere image
  // first, then write the prompt and render V1.
  const handleSubmit = async () => {
    if (!product || !hasAtmosphere) {
      addLog('Please add a product and an atmosphere.', 'error');
      return;
    }
    const settingInput = generatePrompt.trim();

    versionCount.current = 0;
    setVersions([]);
    setSelectedLabel(null);
    setEditOpen(false);
    setPromptOpen(false);

    try {
      const productImages = await toInlineImages(product.images);
      const productLabel = product.source === 'suggestion' ? product.id : 'product';

      // The atmosphere can come from a selection/upload or be generated on the fly.
      let atmosphereImages: InlineImage[];
      let atmosphereDesc: string;
      let atmosphereSources: string[];   // surfaced later in the "sources" strip

      if (usingGenerate) {
        // Stage 0: Flash Lite writes an image prompt; gemini-3.1-flash-lite-image renders it.
        setAppState('GENERATING_ATMOSPHERE');
        addLog(`Generating atmosphere from: "${settingInput}"`, 'info');
        addLog('Writing image prompt (Gemini Flash Lite)…', 'warn');
        addLog('Rendering atmosphere with gemini-3.1-flash-lite-image…', 'warn');

        const atmoRes = await fetch('/api/generate-atmosphere', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ input: settingInput })
        });
        const atmoData = await atmoRes.json();
        if (!atmoRes.ok) throw new Error(atmoData.error || 'Failed to generate atmosphere');

        const atmoDataUrl = `data:${atmoData.image.mimeType};base64,${atmoData.image.data}`;
        addLog('Atmosphere image ready.', 'success', atmoDataUrl);
        atmosphereImages = [{ data: atmoData.image.data, mimeType: atmoData.image.mimeType }];
        atmosphereDesc = (atmoData.prompt as string) || settingInput;
        atmosphereSources = [atmoDataUrl];
      } else {
        setAppState('GENERATING_PROMPT');
        addLog('Analyzing images...');
        addLog(`Product: ${describe(product)}`, 'info');
        addLog(`Atmosphere: ${describe(atmosphere!)}`, 'info');
        addLog('Encoding images...', 'warn');
        atmosphereImages = await toInlineImages(atmosphere!.images);
        atmosphereDesc = atmosphere!.description.replace(/\{product_id\}/g, productLabel);
        atmosphereSources = atmosphere!.images;
      }

      // Hidden until now: the user first sees a generated atmosphere here.
      setSubmittedImages([...product.images, ...atmosphereSources]);

      setAppState('GENERATING_PROMPT');
      addLog('Requesting Gemini Flash prompt translation...', 'warn');
      const promptRes = await fetch('/api/generate-prompt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productDesc: product.description, atmosphereDesc, productImages, atmosphereImages })
      });
      const promptData = await promptRes.json();
      if (!promptRes.ok) throw new Error(promptData.error || 'Failed to generate prompt');

      const generatedPrompt = promptData.prompt as string;
      addLog('Prompt generation complete.', 'success');

      setAppState('GENERATING_VIDEO');
      addLog('Initializing Omni Video Generation pipeline...');
      addLog('Transmitting payloads to Omni...', 'warn');

      const videoRes = await fetch('/api/generate-video', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: generatedPrompt, productImages, atmosphereImages })
      });
      const videoData = await videoRes.json();
      if (!videoRes.ok) throw new Error(videoData.error || 'Failed to start video generation');

      addLog(`Interaction created successfully. ID: ${videoData.interactionId}`, 'success');
      pollVideoStatus(videoData.fileId, videoData.interactionId, generatedPrompt, true);
    } catch (e: any) {
      setAppState('IDLE');
      addLog(`Error: ${e.message}`, 'error');
    }
  };

  // Edit the selected version via Omni's stateful chaining → produces a new version.
  const handleEdit = async () => {
    if (!selected || !editText.trim() || isGenerating) return;
    const instructions = editText.trim();
    const fromLabel = selected.label;
    const fromInteractionId = selected.interactionId;

    setEditOpen(false);
    setEditText('');
    setAppState('GENERATING_VIDEO');
    addLog(`Editing ${fromLabel}: ${instructions}`, 'warn');
    addLog('Transmitting edit to Omni...', 'warn');

    try {
      const res = await fetch('/api/edit-video', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ previousInteractionId: fromInteractionId, instructions })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Edit failed');

      addLog(`Edit interaction created: ${data.interactionId}`, 'success');
      pollVideoStatus(data.fileId, data.interactionId, instructions, false);
    } catch (e: any) {
      setAppState('VIDEO_READY');
      addLog(`Edit failed: ${e.message}`, 'error');
    }
  };

  const selectVersion = (label: string) => {
    setSelectedLabel(label);
    setEditOpen(false);
  };

  // Fetch the video as a blob from within the authenticated app context, then save
  // it from a local object URL. The native player download triggers a navigational
  // request that AI Studio's auth proxy intercepts (returning its cookie-check page
  // instead of the video), so we download it ourselves.
  const downloadVideo = async (version: VideoVersion) => {
    setDownloading(true);
    try {
      const res = await fetch(version.videoUrl, { credentials: 'include' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `omni-${version.label.toLowerCase()}.mp4`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (e: any) {
      addLog(`Download failed: ${e.message}`, 'error');
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="md:h-screen w-full flex flex-col md:overflow-hidden bg-zinc-950 font-sans">

      {/* MAIN */}
      <div className="flex-1 flex flex-col md:flex-row md:overflow-hidden">

        {/* LEFT - BUILDER */}
        <div className="w-full md:w-[480px] md:shrink-0 md:overflow-y-auto p-6 md:p-10 border-b md:border-b-0 md:border-r border-zinc-800 flex flex-col">
          <header className="mb-10">
            <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white whitespace-nowrap mb-2">
              Omni <span className="text-zinc-500">Product Studio</span>
            </h1>
            <p className="font-mono text-xs uppercase tracking-widest text-zinc-400 leading-relaxed">
              Turn static product images into a cinematic product shot
            </p>
          </header>

          <ImageUploader
            title="Product Images"
            type="product"
            suggestions={PRODUCTS}
            selection={product}
            onSelect={setProduct}
            disabled={isGenerating}
          />

          <ImageUploader
            title="Atmospheres"
            type="atmosphere"
            suggestions={ATMOSPHERES}
            selection={atmosphere}
            onSelect={selectAtmosphere}
            disabled={isGenerating}
          />

          {/* Persistent submit — writes the prompt and renders in one go.
              Wrapper carries the tooltip: a disabled button emits no hover events. */}
          <div title={submitHint} className={submitHint ? 'cursor-not-allowed' : undefined}>
            <button
              onClick={handleSubmit}
              disabled={!canSubmit}
              className="group inline-flex items-center justify-center px-8 py-4 font-mono font-bold uppercase tracking-widest text-zinc-950 bg-white hover:bg-zinc-200 transition-colors w-full disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-3 w-5 h-5 animate-spin" />
                  Generating…
                </>
              ) : (
                <>
                  Submit
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* RIGHT - OUTPUT */}
        <div className="w-full md:flex-1 p-6 md:p-10 min-h-[50vh] md:min-h-0 md:overflow-y-auto">

          {/* Every row shares a left gutter so the version thumbnails, the main
              video, the input carousel and the prompt all line up on one edge —
              the version label + EDIT occupy the gutter only on the video row. */}

          {/* PREVIOUS VERSIONS — click to bring one back into the main view */}
          {otherVersions.length > 0 && (
            <div className="flex gap-3 md:gap-4 mb-8">
              <div className="flex-none w-12" />
              <ScrollRow className="flex-1 min-w-0" rowClassName="gap-4" deps={[otherVersions.length]}>
                {otherVersions.map(v => (
                  <button key={v.label} onClick={() => selectVersion(v.label)} className="group flex-none text-left">
                    <div className="font-mono text-xs uppercase tracking-widest text-zinc-400 group-hover:text-white mb-1.5 transition-colors">{v.label}</div>
                    <video
                      src={v.videoUrl}
                      muted
                      playsInline
                      preload="metadata"
                      className="w-40 aspect-video object-cover bg-black opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  </button>
                ))}
              </ScrollRow>
            </div>
          )}

          {/* MAIN: version label + EDIT in the gutter, video/loading aligned with the rest */}
          <div className="flex gap-3 md:gap-4">
            <div className="flex-none w-12 pt-1">
              {appState === 'VIDEO_READY' && selected && (
                <div className="flex flex-col gap-1.5">
                  <button
                    onClick={() => setEditOpen(o => !o)}
                    className="font-mono text-sm uppercase tracking-widest text-white text-left hover:text-zinc-300 transition-colors"
                  >
                    {selected.label}
                  </button>
                  <button
                    onClick={() => setEditOpen(o => !o)}
                    className={`font-mono text-xs uppercase tracking-widest text-left transition-colors ${editOpen ? 'text-white' : 'text-zinc-500 hover:text-white'}`}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => downloadVideo(selected)}
                    disabled={downloading}
                    aria-label={`Download ${selected.label}`}
                    title="Download video"
                    className="w-fit text-zinc-500 hover:text-white transition-colors disabled:opacity-50"
                  >
                    {downloading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
                  </button>
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <VideoOutput appState={appState} videoUrl={selected?.videoUrl ?? null} logs={logs} />
            </div>
          </div>

          {/* EDIT FORM */}
          <AnimatePresence initial={false}>
            {editOpen && appState === 'VIDEO_READY' && selected && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="flex gap-3 md:gap-4 mt-4">
                  <div className="flex-none w-12" />
                  <div className="flex-1 min-w-0">
                    <textarea
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      placeholder={`Describe your changes to ${selected.label} — e.g. "warmer lighting", "slow orbit", "swap the backdrop"…`}
                      className="w-full bg-zinc-900 border border-zinc-800 text-zinc-300 p-4 font-mono text-sm leading-relaxed focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent resize-y min-h-[100px]"
                    />
                    <button
                      onClick={handleEdit}
                      disabled={!editText.trim()}
                      className="group mt-3 inline-flex items-center justify-center px-8 py-3 font-mono font-bold uppercase tracking-widest text-zinc-950 bg-white hover:bg-zinc-200 transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white"
                    >
                      Submit Edit
                      <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* INPUT REFERENCE IMAGES (shared across versions) */}
          {appState === 'VIDEO_READY' && submittedImages.length > 0 && (
            <div className="flex gap-3 md:gap-4 mt-6">
              <div className="flex-none w-12" />
              <ScrollRow className="flex-1 min-w-0" rowClassName="gap-2" deps={[submittedImages.length]}>
                {submittedImages.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Input ${i + 1}`}
                    className="flex-none w-24 h-16 object-cover bg-zinc-900"
                  />
                ))}
              </ScrollRow>
            </div>
          )}

          {/* PROMPT for the selected version */}
          {appState === 'VIDEO_READY' && selected?.prompt && (
            <div className="flex gap-3 md:gap-4 mt-5">
              <div className="flex-none w-12" />
              <div className="flex-1 min-w-0">
                <button
                  onClick={() => setPromptOpen(o => !o)}
                  className="flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-widest text-white hover:text-zinc-300 transition-colors"
                >
                  <ChevronRight className={`w-4 h-4 transition-transform ${promptOpen ? 'rotate-90' : ''}`} />
                  Prompt
                </button>
                <AnimatePresence initial={false}>
                  {promptOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 bg-zinc-900 border border-zinc-800 p-4 font-mono text-sm leading-relaxed text-zinc-300 whitespace-pre-wrap">
                        {selected.prompt}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* FOOTER — usage disclaimer */}
      <footer className="shrink-0 border-t border-zinc-800/60 bg-zinc-950 px-6 md:px-10 py-3">
        <div className="max-w-5xl space-y-1.5 text-xs leading-relaxed text-zinc-500">
          <p>
            By using this feature, you confirm that you have the necessary rights to any content that you upload. Do not generate content that infringes on others’ intellectual property or privacy rights. Your use of this generative AI service is subject to our{' '}
            <a
              href="https://policies.google.com/terms/generative-ai/use-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-400 transition-colors"
            >
              Prohibited Use Policy
            </a>.
          </p>
          <p>
            Please note that uploads from Google Workspace may be used to develop and improve Google products and services in accordance with our terms.
          </p>
        </div>
      </footer>

    </div>
  );
}
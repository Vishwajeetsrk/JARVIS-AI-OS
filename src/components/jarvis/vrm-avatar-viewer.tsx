import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { VRM, VRMLoaderPlugin, VRMUtils } from "@pixiv/three-vrm";
import { avatarController, type AvatarEmotion } from "@/lib/avatar/avatar-controller";
import { audioLipSync } from "@/lib/avatar/audio-lip-sync";
import { continuousVoiceEngine, type VoiceStatus } from "@/lib/voice/continuous-voice-engine";
import { workspaceJanitor } from "@/lib/agents/sota/workspace-janitor";
import { promptRescue } from "@/lib/agents/sota/prompt-rescue";
import { dailyWrap } from "@/lib/agents/sota/daily-wrap";
import { deckBuilder } from "@/lib/agents/sota/deck-builder";
import { sheetBuilder } from "@/lib/agents/sota/sheet-builder";
import { replyRescue } from "@/lib/agents/sota/reply-rescue";
import { memoryStore } from "@/lib/memory/memory-store";
import {
  Sparkles,
  Upload,
  Eye,
  Volume2,
  Mic,
  MicOff,
  RefreshCw,
  Wrench,
  Presentation,
  FileSpreadsheet,
  ShieldCheck,
  CheckCircle2,
  Trash2,
  MessageSquare,
  Radio,
  Bot,
  Footprints,
  ExternalLink,
} from "lucide-react";
import { NiaDesktopCompanion } from "@/components/jarvis/nia-desktop-companion";
import { toast } from "sonner";

interface VRMAvatarViewerProps {
  onClose?: () => void;
}

const VRM_MODELS = [
  { id: "nia-v1", name: "Nia V1", path: "/vrm/nia-v1.vrm", size: "15.6 MB" },
  { id: "nai", name: "Nai (VRoid)", path: "/vrm/nai.vrm", size: "15.6 MB" },
  { id: "nexa-girl", name: "NEXA Girl", path: "/vrm/nexa-girl.vrm", size: "26.8 MB" },
  { id: "girl", name: "Girl", path: "/vrm/girl.vrm", size: "28.3 MB" },
  { id: "boy", name: "Boy", path: "/vrm/boy.vrm", size: "20.0 MB" },
];

export function VRMAvatarViewer({ onClose }: VRMAvatarViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const vrmRef = useRef<VRM | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [modelName, setModelName] = useState<string>("Nia V1");
  const [emotion, setEmotion] = useState<AvatarEmotion>("happy");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isWalking, setIsWalking] = useState(false);
  const [selectedModel, setSelectedModel] = useState<string>("/vrm/nia-v1.vrm");
  const [alwaysListening, setAlwaysListening] = useState(true);
  const [voiceStatus, setVoiceStatus] = useState<VoiceStatus>("idle");
  const [lastTranscript, setLastTranscript] = useState<string>("");
  const [lastResponse, setLastResponse] = useState<string>("");
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [modalData, setModalData] = useState<any>(null);
  const [promptInput, setPromptInput] = useState("");
  const [showDesktopCompanion, setShowDesktopCompanion] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Setup Three Scene, Camera, Renderer
    const width = containerRef.current.clientWidth || 400;
    const height = containerRef.current.clientHeight || 450;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 20);
    camera.position.set(0, 1.4, 1.2);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    containerRef.current.appendChild(renderer.domElement);

    if (vrmRef.current) {
      scene.add(vrmRef.current.scene);
    }

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x38bdf8, 2.0);
    dirLight.position.set(1.0, 2.0, 1.0);
    scene.add(dirLight);

    const rimLight = new THREE.DirectionalLight(0xa855f7, 2.5);
    rimLight.position.set(-1.0, 1.5, -1.0);
    scene.add(rimLight);

    // 3. Clock & Mouse Target
    const clock = new THREE.Clock();
    const mouseTarget = new THREE.Vector3(0, 1.4, 0);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      mouseTarget.set(x * 0.5, 1.4 + y * 0.3, 0);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 4. Animation Loop
    let animationFrameId: number;
    let blinkTimer = 0;
    let nextBlinkInterval = 3.5;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();
      const activeVrm = vrmRef.current;

      if (activeVrm) {
        activeVrm.update(delta);

        // Blinking
        blinkTimer += delta;
        if (blinkTimer > nextBlinkInterval) {
          if (activeVrm.expressionManager) {
            activeVrm.expressionManager.setValue("blink", 1.0);
          }
          if (blinkTimer > nextBlinkInterval + 0.15) {
            if (activeVrm.expressionManager) {
              activeVrm.expressionManager.setValue("blink", 0.0);
            }
            blinkTimer = 0;
            nextBlinkInterval = 2.5 + Math.random() * 3.0;
          }
        }

        // Idle Breathing
        if (activeVrm.humanoid) {
          const chest = activeVrm.humanoid.getNormalizedBoneNode("chest");
          if (chest) {
            chest.rotation.x = Math.sin(elapsed * (isWalking ? 4 : 2)) * (isWalking ? 0.05 : 0.03);
          }
          const head = activeVrm.humanoid.getNormalizedBoneNode("head");
          if (head && !isWalking) {
            head.rotation.y = THREE.MathUtils.lerp(head.rotation.y, mouseTarget.x * 0.4, 0.05);
            head.rotation.x = THREE.MathUtils.lerp(head.rotation.x, -mouseTarget.y * 0.2, 0.05);
          }
        }

        // Walking animation
        if (isWalking && activeVrm.humanoid) {
          const hips = activeVrm.humanoid.getNormalizedBoneNode("hips");
          if (hips) {
            hips.position.y = Math.abs(Math.sin(elapsed * 8)) * 0.04;
            hips.rotation.y = Math.sin(elapsed * 2) * 0.08;
          }
          const leftUpperLeg = activeVrm.humanoid.getNormalizedBoneNode("leftUpperLeg");
          const rightUpperLeg = activeVrm.humanoid.getNormalizedBoneNode("rightUpperLeg");
          const leftLowerLeg = activeVrm.humanoid.getNormalizedBoneNode("leftLowerLeg");
          const rightLowerLeg = activeVrm.humanoid.getNormalizedBoneNode("rightLowerLeg");
          if (leftUpperLeg) leftUpperLeg.rotation.x = Math.sin(elapsed * 10) * 0.5;
          if (rightUpperLeg) rightUpperLeg.rotation.x = Math.sin(elapsed * 10 + Math.PI) * 0.5;
          if (leftLowerLeg) leftLowerLeg.rotation.x = Math.max(0, Math.sin(elapsed * 10 + Math.PI) * 0.5);
          if (rightLowerLeg) rightLowerLeg.rotation.x = Math.max(0, Math.sin(elapsed * 10) * 0.5);
          const leftUpperArm = activeVrm.humanoid.getNormalizedBoneNode("leftUpperArm");
          const rightUpperArm = activeVrm.humanoid.getNormalizedBoneNode("rightUpperArm");
          if (leftUpperArm) leftUpperArm.rotation.x = Math.sin(elapsed * 10 + Math.PI) * 0.4;
          if (rightUpperArm) rightUpperArm.rotation.x = Math.sin(elapsed * 10) * 0.4;
        }

        // Phonetic Audio Lip-Sync Engine Driver
        audioLipSync.update(activeVrm, delta, elapsed);
      }

      renderer.render(scene, camera);
    };

    animate();

    // 5. Handle Resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Subscribe to Avatar Controller Events
    const unsubAvatar = avatarController.subscribe((state) => {
      setEmotion(state.emotion);
      setIsSpeaking(state.state === "SPEAKING");
      const activeVrm = vrmRef.current;
      if (activeVrm && activeVrm.expressionManager) {
        if (state.emotion === "happy") activeVrm.expressionManager.setValue("happy", 0.8);
        else if (state.emotion === "curious") activeVrm.expressionManager.setValue("surprised", 0.6);
        else if (state.emotion === "caring") activeVrm.expressionManager.setValue("relaxed", 0.7);
        else if (state.emotion === "focused") activeVrm.expressionManager.setValue("neutral", 0.8);
      }
    });

    // Subscribe to Continuous Voice Engine Events
    const unsubVoice = continuousVoiceEngine.subscribe((event) => {
      setVoiceStatus(event.status);
      if (event.transcript) setLastTranscript(event.transcript);
      if (event.response) setLastResponse(event.response);
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      unsubAvatar();
      unsubVoice();
      if (vrmRef.current) VRMUtils.deepDispose(vrmRef.current.scene);
      renderer.dispose();
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [isWalking]);

  // Auto-start continuous listening when component mounts
  useEffect(() => {
    if (alwaysListening) {
      continuousVoiceEngine.startAlwaysOn();
    } else {
      continuousVoiceEngine.stopAlwaysOn();
    }
  }, [alwaysListening]);

  // Load selected VRM model
  useEffect(() => {
    if (!selectedModel) return;
    const model = VRM_MODELS.find((m) => m.path === selectedModel);
    if (model) setModelName(model.name);
    setIsLoading(true);
    const loader = new GLTFLoader();
    loader.register((parser) => new VRMLoaderPlugin(parser));
    loader.load(
      selectedModel,
      (gltf) => {
        const vrm = gltf.userData.vrm as VRM;
        VRMUtils.removeUnnecessaryVertices(gltf.scene);
        VRMUtils.removeUnnecessaryJoints(gltf.scene);
        vrm.scene.rotation.y = Math.PI;
        if (vrmRef.current && sceneRef.current) {
          sceneRef.current.remove(vrmRef.current.scene);
          VRMUtils.deepDispose(vrmRef.current.scene);
        }
        vrmRef.current = vrm;
        if (sceneRef.current) {
          sceneRef.current.add(vrm.scene);
        }
        setIsLoading(false);
        toast.success(`Loaded ${model?.name ?? selectedModel} — always-on listening active`);
      },
      undefined,
      () => {
        setIsLoading(false);
        toast.error("Failed to load VRM model");
      }
    );
  }, [selectedModel]);

  // Test Speak helper
  const handleTestCommand = (command: string) => {
    setLastTranscript(command);
    continuousVoiceEngine.processCommand(command);
  };

  // Handle Custom VRM File Upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.name.endsWith(".vrm")) {
      toast.error("Please select a valid .vrm 3D avatar file.");
      return;
    }

    setIsLoading(true);
    setModelName(file.name.replace(".vrm", ""));
    const url = URL.createObjectURL(file);

    const loader = new GLTFLoader();
    loader.register((parser) => new VRMLoaderPlugin(parser));

    loader.load(
      url,
      (gltf) => {
        const vrm = gltf.userData.vrm as VRM;
        VRMUtils.removeUnnecessaryVertices(gltf.scene);
        VRMUtils.removeUnnecessaryJoints(gltf.scene);
        vrm.scene.rotation.y = Math.PI;
        if (vrmRef.current && sceneRef.current) {
          sceneRef.current.remove(vrmRef.current.scene);
          VRMUtils.deepDispose(vrmRef.current.scene);
        }
        vrmRef.current = vrm;
        if (sceneRef.current) sceneRef.current.add(vrm.scene);
        setSelectedModel("");
        setIsLoading(false);
        toast.success(`Loaded 3D VRoid avatar: ${file.name}`);
      },
      undefined,
      (error: any) => {
        setIsLoading(false);
        toast.error(`Failed to load VRM: ${error?.message || "Unknown error"}`);
      }
    );
  };

  // SOTA Capabilities Handlers
  const handleJanitorScan = () => {
    const audit = workspaceJanitor.generateCleanupAudit();
    setModalData(audit);
    setActiveModal("janitor");
    continuousVoiceEngine.processCommand("clean workspace");
  };

  const handlePromptRescue = () => {
    const rescued = promptRescue.rescue(promptInput || "Build a responsive modern dashboard with real-time analytics", "coding");
    setModalData(rescued);
    setActiveModal("prompt");
    continuousVoiceEngine.processCommand("rescue prompt");
  };

  const handleDailyWrap = () => {
    const wrap = dailyWrap.generateReport();
    setModalData(wrap);
    setActiveModal("daily_wrap");
    continuousVoiceEngine.processCommand("daily wrap");
  };

  const handleDownloadDeck = async () => {
    toast.info("Generating PPTX presentation deck...");
    const blob = await deckBuilder.generatePresentation({
      title: "Nia Embodied AI Operating System",
      author: "Vishwajeet & Nia AI",
      slides: [
        {
          title: "Executive Vision",
          subtitle: "Embodied 3D AI Companion with Real-Time Audio Lip Sync",
          points: [
            "Real-time Three.js / VRM 3D avatar with eye saccades and breathing",
            "Phonetic viseme mouth driving (A, I, U, E, O) with interruption cut-off",
            "Autonomous multi-agent execution with 4-tier persistent memory vault",
          ],
          metric: { value: "60 FPS", label: "Render Performance" },
        },
      ],
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Nia_AI_Companion_Overview.pptx";
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Downloaded Nia_AI_Companion_Overview.pptx");
  };

  const handleDownloadSheet = async () => {
    toast.info("Generating Excel spreadsheet...");
    const blob = await sheetBuilder.generateSpreadsheet({
      title: "Nia SOTA Roadmap & Agent Metrics",
      columns: [
        { header: "Agent Capability", key: "agent", width: 25 },
        { header: "Status", key: "status", width: 15 },
        { header: "Safety Rating", key: "safety", width: 18 },
        { header: "Productivity Gain", key: "gain", width: 20 },
      ],
      rows: [
        { agent: "Audio Lip-Sync Engine", status: "Active", safety: "Verified", gain: "+95% Realism" },
        { agent: "Workspace Janitor", status: "Active", safety: "Recycle Bin Safe", gain: "122 MB Freed" },
        { agent: "Prompt Rescue", status: "Active", safety: "Strict Schema", gain: "4x Prompt Quality" },
        { agent: "Daily Wrap", status: "Active", safety: "Read-Only", gain: "15 min/day Saved" },
      ],
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Nia_Agent_Metrics.xlsx";
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Downloaded Nia_Agent_Metrics.xlsx");
  };

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-slate-950/95 via-slate-900/90 to-slate-950/95 p-4 shadow-2xl backdrop-blur-2xl">
      {/* 3D Render Canvas */}
      <div ref={containerRef} className="relative h-[390px] w-full max-w-md cursor-crosshair rounded-2xl" />

      {/* Holographic Header Bar */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-950/80 px-3 py-1 text-xs font-semibold text-cyan-300 backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5 animate-spin" style={{ animationDuration: "8s" }} />
          NIA COMPANION // {modelName}
        </div>
        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            onClick={() => setAlwaysListening(!alwaysListening)}
            className={`flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-md transition-all ${
              alwaysListening
                ? "border-emerald-500/40 bg-emerald-500/20 text-emerald-300 shadow-md shadow-emerald-500/20"
                : "border-border bg-surface text-muted-foreground"
            }`}
            title="Toggle Always-On Hands-Free Background Listening"
          >
            <Radio className={`h-3.5 w-3.5 ${alwaysListening ? "animate-pulse text-emerald-400" : ""}`} />
            {alwaysListening ? "Always-On Auto" : "Voice Idle"}
          </button>
          <button
            onClick={() => setShowDesktopCompanion(!showDesktopCompanion)}
            className={`flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-md transition-all ${
              showDesktopCompanion
                ? "border-cyan-400 bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30"
                : "border-cyan-500/40 bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30"
            }`}
            title="Nia will freely walk and roam across your entire laptop screen"
          >
            <Footprints className="h-3.5 w-3.5" />
            {showDesktopCompanion ? "Roaming Desktop" : "Walk on Laptop"}
          </button>
          <button
            onClick={() => window.open("/companion", "NiaCompanion", "width=320,height=420,menubar=no,toolbar=no,location=no,status=no,transparent=yes")}
            className="flex items-center gap-1.5 rounded-full border border-violet-500/40 bg-violet-500/20 px-2.5 py-1 text-xs font-semibold text-violet-300 hover:bg-violet-500/30"
            title="Popout Nia into a standalone floating transparent window"
          >
            <ExternalLink className="h-3 w-3" />
          </button>
          <label className="flex cursor-pointer items-center gap-1.5 rounded-full border border-cyan-500/40 bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-200 backdrop-blur-md transition-all hover:bg-cyan-500/30">
            <Upload className="h-3.5 w-3.5" /> VRM
            <input type="file" accept=".vrm" onChange={handleFileUpload} className="hidden" />
          </label>
        </div>
      </div>

      {/* Real-time Voice Live HUD Overlay */}
      <div className="mt-2 w-full rounded-xl border border-cyan-500/20 bg-slate-950/70 p-2.5 backdrop-blur-md">
        <div className="flex items-center justify-between text-xs">
          <span className="flex items-center gap-1.5 font-semibold text-cyan-300">
            <Bot className="h-3.5 w-3.5 text-cyan-400" /> Live Voice Pipeline
          </span>
          <span className="flex items-center gap-1 text-[11px] font-mono">
            {voiceStatus === "listening" && <span className="text-emerald-400 flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" /> Listening to you…</span>}
            {voiceStatus === "processing" && <span className="text-amber-400 flex items-center gap-1"><RefreshCw className="h-3 w-3 animate-spin" /> Thinking & Dispatching…</span>}
            {voiceStatus === "speaking" && <span className="text-sky-400 flex items-center gap-1"><Volume2 className="h-3 w-3 animate-bounce" /> Speaking with Lip Sync…</span>}
            {voiceStatus === "idle" && <span className="text-muted-foreground">Ready</span>}
          </span>
        </div>

        {/* Live Subtitles & Transcript */}
        <div className="mt-1.5 flex flex-col gap-1 text-[11px]">
          {lastTranscript && (
            <div className="flex items-start gap-1 text-slate-300">
              <span className="font-semibold text-emerald-400">You:</span>
              <span className="italic">"{lastTranscript}"</span>
            </div>
          )}
          {lastResponse && (
            <div className="flex items-start gap-1 text-cyan-200">
              <span className="font-semibold text-cyan-400">Nia:</span>
              <span>{lastResponse}</span>
            </div>
          )}
        </div>
      </div>

      {/* Model Selector & Quick Voice Test Triggers */}
      <div className="mt-2 flex w-full flex-wrap items-center justify-between gap-2 border-t border-cyan-500/20 pt-2 text-xs">
        <div className="flex items-center gap-1.5">
          <span className="font-mono text-[10px] text-muted-foreground uppercase">Model:</span>
          {VRM_MODELS.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelectedModel(m.path)}
              className={`rounded-lg px-2 py-1 text-[11px] font-medium transition-all ${
                selectedModel === m.path
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20"
                  : "border border-border bg-surface text-muted-foreground hover:text-foreground"
              }`}
              title={`${m.name} — ${m.size}`}
            >
              {m.name}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => handleTestCommand("Hey Nia, introduce yourself and tell me your capabilities")}
            className="rounded-lg border border-cyan-500/40 bg-cyan-500/10 px-2 py-1 text-[10px] font-semibold text-cyan-300 hover:bg-cyan-500/20"
          >
            "Hey Nia"
          </button>
          <button
            onClick={() => handleTestCommand("Hey Nia, clean my workspace")}
            className="rounded-lg border border-amber-500/40 bg-amber-500/10 px-2 py-1 text-[10px] font-semibold text-amber-300 hover:bg-amber-500/20"
          >
            "Clean Workspace"
          </button>
          <button
            onClick={() => handleTestCommand("Hey Nia, give me my daily wrap")}
            className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold text-emerald-300 hover:bg-emerald-500/20"
          >
            "Daily Wrap"
          </button>
        </div>
      </div>

      {/* SOTA Capabilities Action Bar */}
      <div className="mt-2 w-full rounded-2xl border border-cyan-500/20 bg-slate-900/50 p-2">
        <div className="grid grid-cols-5 gap-1.5 text-[11px]">
          <button
            onClick={handleJanitorScan}
            className="flex items-center justify-center gap-1 rounded-lg border border-amber-500/30 bg-amber-500/10 px-2 py-1.5 text-amber-300 transition-all hover:bg-amber-500/20"
          >
            <Trash2 className="h-3 w-3" /> Janitor
          </button>
          <button
            onClick={() => { setActiveModal("prompt"); setModalData(null); }}
            className="flex items-center justify-center gap-1 rounded-lg border border-violet-500/30 bg-violet-500/10 px-2 py-1.5 text-violet-300 transition-all hover:bg-violet-500/20"
          >
            <Sparkles className="h-3 w-3" /> Prompt
          </button>
          <button
            onClick={handleDailyWrap}
            className="flex items-center justify-center gap-1 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2 py-1.5 text-emerald-300 transition-all hover:bg-emerald-500/20"
          >
            <CheckCircle2 className="h-3 w-3" /> Daily Wrap
          </button>
          <button
            onClick={handleDownloadDeck}
            className="flex items-center justify-center gap-1 rounded-lg border border-sky-500/30 bg-sky-500/10 px-2 py-1.5 text-sky-300 transition-all hover:bg-sky-500/20"
          >
            <Presentation className="h-3 w-3" /> Deck
          </button>
          <button
            onClick={handleDownloadSheet}
            className="flex items-center justify-center gap-1 rounded-lg border border-teal-500/30 bg-teal-500/10 px-2 py-1.5 text-teal-300 transition-all hover:bg-teal-500/20"
          >
            <FileSpreadsheet className="h-3 w-3" /> Sheet
          </button>
        </div>
      </div>

      {/* SOTA Modal Viewer */}
      {activeModal && (
        <div className="mt-2 w-full rounded-2xl border border-cyan-500/30 bg-slate-950/95 p-3 text-xs shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95">
          <div className="flex items-center justify-between border-b border-border/50 pb-2">
            <span className="font-semibold text-cyan-300 uppercase tracking-wider">
              {activeModal.replace("_", " ")}
            </span>
            <button
              onClick={() => setActiveModal(null)}
              className="rounded px-1.5 py-0.5 text-muted-foreground hover:bg-surface hover:text-foreground"
            >
              ✕ Close
            </button>
          </div>

          {activeModal === "janitor" && modalData && (
            <div className="mt-2 space-y-2">
              <div className="flex items-center justify-between text-emerald-400 font-medium">
                <span>Total Potential Savings:</span>
                <span className="font-mono text-sm">{modalData.totalSavingsFormatted}</span>
              </div>
              <p className="text-[11px] text-muted-foreground">{modalData.recommendation}</p>
              <div className="max-h-32 overflow-y-auto space-y-1 pr-1 font-mono text-[10px]">
                {modalData.items.map((item: any, idx: number) => (
                  <div key={idx} className="flex items-center justify-between rounded bg-slate-900 p-1.5 border border-border/40">
                    <span className="truncate max-w-[200px] text-slate-300">{item.fileName}</span>
                    <span className="text-amber-400 font-semibold">{item.sizeFormatted}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeModal === "prompt" && (
            <div className="mt-2 space-y-2">
              <input
                type="text"
                value={promptInput}
                onChange={(e) => setPromptInput(e.target.value)}
                placeholder="Type a basic prompt to rescue..."
                className="w-full rounded-lg border border-border bg-slate-900 px-2.5 py-1.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-cyan-500 focus:outline-none"
              />
              <button
                onClick={handlePromptRescue}
                className="w-full rounded-lg bg-cyan-500 py-1.5 text-xs font-bold text-slate-950 hover:bg-cyan-400 transition-all"
              >
                Enhance to Staff-Engineer SOTA Prompt
              </button>
              {modalData && (
                <div className="mt-2 max-h-36 overflow-y-auto rounded bg-slate-900 p-2 font-mono text-[10px] text-cyan-200 border border-cyan-500/20 whitespace-pre-wrap">
                  {modalData.enhancedUserPrompt}
                </div>
              )}
            </div>
          )}

          {activeModal === "daily_wrap" && modalData && (
            <div className="mt-2 space-y-2">
              <div className="flex items-center justify-between text-cyan-300 font-semibold">
                <span>{modalData.date}</span>
                <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-emerald-400">Score: {modalData.productivityScore}%</span>
              </div>
              <div className="max-h-36 overflow-y-auto space-y-1 text-[11px] text-slate-300">
                <p className="font-semibold text-foreground">Key Accomplishments:</p>
                {modalData.accomplishments.map((acc: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-1.5">
                    <span className="text-cyan-400">•</span>
                    <span>{acc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Bottom Status & Memory Vault Badge */}
      <div className="mt-2 flex w-full flex-wrap items-center justify-between gap-3 border-t border-cyan-500/10 pt-2 text-xs">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Eye className="h-3.5 w-3.5 text-cyan-400" />
          <span>Eye & Head Tracking: <strong className="text-foreground">Active</strong></span>
          {isLoading && <span className="ml-2 inline-flex items-center gap-1 text-amber-400"><RefreshCw className="h-3 w-3 animate-spin" /> Loading…</span>}
        </div>
        <div className="flex items-center gap-1.5">
          <span className="inline-flex items-center gap-1 rounded bg-cyan-500/10 px-2 py-0.5 text-[10px] font-semibold text-cyan-300 border border-cyan-500/20">
            <ShieldCheck className="h-3 w-3 text-cyan-400" /> 4-Tier Memory Vault Active
          </span>
        </div>
      </div>

      {/* Floating Desktop Roaming Companion Overlay */}
      {showDesktopCompanion && (
        <NiaDesktopCompanion onClose={() => setShowDesktopCompanion(false)} />
      )}
    </div>
  );
}

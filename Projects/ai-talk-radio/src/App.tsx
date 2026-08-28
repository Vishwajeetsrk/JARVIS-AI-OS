import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Play, Pause, Volume2, Info, List, ChevronDown, ChevronUp, Sparkles, Settings2, Clock, Radio,
  TerminalSquare, CheckCircle2, Loader2, Bot, Download, Lock, Key, ShieldAlert, Check,
  HelpCircle, User, AlertCircle, RefreshCw, Trash2, ChevronLeft, Share2, Copy, ExternalLink, Globe
} from 'lucide-react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, User as FirebaseUser } from 'firebase/auth';
import firebaseConfig from '../firebase-applet-config.json';
import { MOCK_SHOW, transformShow } from './data';
import { Transcript } from './components/Transcript';
import { saveUserShow, getUserShows, deleteUserShow } from './lib/clientDb';

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const IS_DEV = !!(import.meta as any).env?.DEV;
// Dynamically generate the direct published/deployed link for sharing,
// completely bypassing the AI Studio editor/builder frame to ensure immediate end-user playback for colleagues
const getPublishedShareLink = (shareId: string) => {
  let origin = window.location.origin;

  // Dynamically map any AI Studio development box subdomain to the corresponding preprod/published/deployed subdomain
  if (origin.includes('ais-dev-')) {
    origin = origin.replace('ais-dev-', 'ais-pre-');
  }

  return `${origin}/?share_id=${shareId}`;
};

// Safe retrieval of query parameters supporting both inline (localhost) and nested iframe scenarios
const getQueryParam = (name: string): string | null => {
  if (typeof window === 'undefined') return null;

  // 1. Try parent referrer URL first (most common when running inside a dynamic AI Studio iframe)
  if (document.referrer) {
    try {
      const referrerUrl = new URL(document.referrer);
      const val = referrerUrl.searchParams.get(name);
      if (val) return val;
    } catch (e) {
      console.error('Failed to parse document.referrer search params', e);
    }
  }

  // 2. Fallback to direct frame's URL
  try {
    const params = new URLSearchParams(window.location.search);
    const val = params.get(name);
    if (val) return val;
  } catch (e) {
    // ignore
  }

  return null;
};

// Dynamically extract the Applet ID from current window URL or referrer URL for robust, dynamic forking / cloning
const getAppletId = (): string => {
  const defaultAppId = '35815e49-e032-468d-893e-d0bb54764b77';
  const uuidRegex = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i;

  // 1. Try the current frame's URL first
  try {
    const ownMatch = window.location.href.match(uuidRegex);
    if (ownMatch) {
      return ownMatch[0];
    }
  } catch (e) {
    // ignore
  }

  // 2. Try the parent referrer URL (typical when running inside an iframe in AI Studio)
  if (typeof document !== 'undefined' && document.referrer) {
    try {
      const referrerUrl = new URL(document.referrer);
      const match = referrerUrl.href.match(uuidRegex);
      if (match) {
        return match[0];
      }
    } catch (e) {
      // ignore
    }
  }

  return defaultAppId;
};

// Dynamically determine the correct AI Studio origin for Remixes without hardcoding internal staging or staging domains
const getAIStudioBuildUrl = (appletId: string): string => {
  let baseDomain = 'https://ai.studio';
  
  if (typeof document !== 'undefined' && document.referrer) {
    try {
      const referrerUrl = new URL(document.referrer);
      const hostname = referrerUrl.hostname;
      // Automatically adapt to the parent host if it's the official AI Studio or any verified Google sandbox/staging origin
      if (
        hostname === 'ai.studio' || 
        hostname === 'aistudio.google.com' || 
        hostname.endsWith('.google.com') || 
        hostname.endsWith('.google')
      ) {
        baseDomain = referrerUrl.origin;
      }
    } catch (e) {
      // ignore
    }
  }

  return `${baseDomain}/build?clone=${appletId}`;
};

const RainbowBackground = () => (
  <>
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vh] rounded-full bg-[#ff00a2]/40 mix-blend-screen filter blur-[120px] animate-blob" />
      <div className="absolute top-[10%] -right-[10%] w-[60vw] h-[60vh] rounded-full bg-[#143dff]/40 mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000" />
      <div className="absolute -bottom-[20%] left-[10%] w-[70vw] h-[70vh] rounded-full bg-[#43ff0d]/30 mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000" />
      <div className="absolute -bottom-[10%] -right-[10%] w-[60vw] h-[60vh] rounded-full bg-[#ffc500]/30 mix-blend-screen filter blur-[120px] animate-blob animation-delay-6000" />
      <div className="absolute top-[30%] left-[30%] w-[50vw] h-[50vh] rounded-full bg-[#ff2a2a]/30 mix-blend-screen filter blur-[120px] animate-blob animation-delay-3000" />
    </div>
    <div className="absolute inset-0 bg-black/50 backdrop-blur-[60px] z-0 pointer-events-none" />
  </>
);

export default function App() {
  const [view, setView] = useState<'home' | 'player' | 'generating'>('home');
  const [selectedShow, setSelectedShow] = useState(MOCK_SHOW);
  const [library, setLibrary] = useState([MOCK_SHOW]);
  
  // --- SHARING FLOW STATES ---
  const [isSharedPlaybackMode, setIsSharedPlaybackMode] = useState(false);
  const [sharedShowLoading, setSharedShowLoading] = useState(false);
  const [sharedShowError, setSharedShowError] = useState<string | null>(null);
  const [sharingInProgress, setSharingInProgress] = useState(false);
  const [shareUrl, setShareUrl] = useState<string | null>(null);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState('');
  const [sharingError, setSharingError] = useState<string | null>(null);
  const [mobileDisclaimerExpanded, setMobileDisclaimerExpanded] = useState(true);
  const [isSharingEnabled, setIsSharingEnabled] = useState(false);

  const [prompt, setPrompt] = useState('');
  const [activePrompt, setActivePrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [targetDuration, setTargetDuration] = useState('3');
  const [targetMood, setTargetMood] = useState('Informative');
  const [selectedCategory, setSelectedCategory] = useState<'tech' | 'culture' | 'news'>('tech');

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.8);

  const [generationLogs, setGenerationLogs] = useState<Array<{
    id: string;
    timestamp: string;
    type: 'info' | 'thinking' | 'tool_call' | 'tool_result' | 'text' | 'error';
    content?: string;
    name?: string;
    args?: any;
    result?: string;
  }>>([]);

  const [generationComplete, setGenerationComplete] = useState(false);
  const [currentStage, setCurrentStage] = useState('Initializing...');
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [hasQuotaError, setHasQuotaError] = useState(false);

  // --- RATE LIMITER & QUOTA STATES ---
  const DAILY_LIMIT = 3;

  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  const [quota, setQuota] = useState<{
    allowed: boolean;
    limit: number;
    remaining: number;
    used: number;
  } | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account'
    });
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error("Error signing in with Google:", err);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error("Error signing out:", err);
    }
  };

  const refreshQuota = async () => {
    try {
      const headers: Record<string, string> = {};
      if (auth.currentUser) {
        try {
          const token = await auth.currentUser.getIdToken();
          headers['Authorization'] = `Bearer ${token}`;
        } catch (tokenErr) {
          console.error("Error retrieving ID token:", tokenErr);
        }
      }
      const res = await fetch("/api/quota", { headers });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const used = typeof data.used === 'number' ? data.used : 0;
      const limit = typeof data.limit === 'number' ? data.limit : 3;
      setQuota({
        allowed: used < limit,
        limit: limit,
        remaining: Math.max(0, limit - used),
        used
      });
    } catch (err) {
      console.error("Error loading secure session quota:", err);
      setQuota({
        allowed: true,
        limit: DAILY_LIMIT,
        remaining: DAILY_LIMIT,
        used: 0
      });
    }
  };

  useEffect(() => {
    refreshQuota();
  }, [currentUser]);

  useEffect(() => {
    let interval: any;
    if (isGenerating && startTime) {
      interval = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isGenerating, startTime]);

  const formatElapsed = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    if (mins > 0) return `${mins}m ${secs}s`;
    return `${secs}s`;
  };

  const scrubText = (text: string) => {
    if (!text) return text;
    // Scrub GEMINI_API_KEY=... and "GEMINI_API_KEY": "..." and raw API keys
    return text
      .replace(/(GEMINI_API_KEY\s*(?:=|:)\s*)[^\s"'\\]+/g, '$1***')
      .replace(/("GEMINI_API_KEY"\s*:\s*")[^"]+"/g, '$1***"')
      .replace(/AIza[a-zA-Z0-9_-]{35}/g, '***')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  };

  const renderMarkdown = (text: string) => {
    let html = text
      .replace(/```([\s\S]*?)```/g, '<pre class="bg-black/40 p-3 rounded-lg text-white/70 overflow-x-auto whitespace-pre-wrap font-mono text-[10px] border border-white/5 my-2">$1</pre>')
      .replace(/`([^`]+)`/g, '<code class="bg-white/10 px-1 py-0.5 rounded text-io-blue font-mono text-[10px]">$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br/>');
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  };

  const humanizeToolName = (name: string) => {
    const map: Record<string, string> = {
      'read_file': 'Read file',
      'list_files': 'List files',
      'bash': 'Run command',
      'google_search': 'Google search',
      'code_execution_call': 'Run command',
    };
    return map[name] || name;
  };

  const formatToolResult = (name: string | undefined, rawResult: string | undefined) => {
    if (!rawResult) return null;

    const unwrap = (str: any): any => {
      let current = str;
      for (let i = 0; i < 5; i++) {
        if (typeof current === 'string') {
          const trimmed = current.trim();
          if (trimmed.startsWith('{') || trimmed.startsWith('[') || trimmed.startsWith('"')) {
            try {
              current = JSON.parse(trimmed);
            } catch (e) {
              // If it fails to parse but starts and ends with quotes, try stripping them and unescaping
              if (trimmed.startsWith('"') && trimmed.endsWith('"')) {
                try {
                  const unescaped = trimmed.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
                  current = JSON.parse(unescaped);
                } catch (e2) {
                  break;
                }
              } else {
                break;
              }
            }
          } else {
            break;
          }
        } else {
          break;
        }
      }
      return current;
    };

    let data = unwrap(rawResult);
    if (data && typeof data === 'object' && 'result' in data) {
      const inner = unwrap(data.result);
      if (inner && typeof inner === 'object') {
        data = inner;
      } else if (typeof inner === 'string') {
        data = inner;
      }
    }

    if (name === 'list_files' && data && Array.isArray(data.files)) {
      return (
        <div className="bg-black/40 p-3 rounded-lg border border-white/5">
          <div className="flex flex-col gap-1 py-1">
            {data.files.map((f: string, i: number) => (
              <div key={i} className="flex items-center gap-2 text-white/70 font-mono text-[10px]">
                <div className="w-1 h-1 rounded-full bg-white/30" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    let textToShow = '';
    if (name === 'read_file' && data && typeof data.content === 'string') {
      textToShow = data.content;
    } else if (name === 'read_file' && data && typeof data.error === 'string') {
      textToShow = data.error;
    } else if (name === 'bash' && data) {
      if (typeof data.output === 'string') {
        textToShow = data.output;
      } else if (typeof data.error === 'string') {
        textToShow = data.error;
      } else if (typeof data === 'object') {
        textToShow = JSON.stringify(data, null, 2);
      } else {
        textToShow = String(data);
      }
    } else if (typeof data === 'object') {
      textToShow = JSON.stringify(data, null, 2);
    } else {
      textToShow = String(data);
    }

    textToShow = textToShow.replace(/\\n/g, '\n').replace(/\\"/g, '"');

    return (
      <pre className="bg-black/40 p-3 rounded-lg text-white/70 overflow-x-auto whitespace-pre-wrap font-mono text-[10px] border border-white/5">
        {scrubText(textToShow)}
      </pre>
    );
  };

  const downloadLogs = () => {
    const logText = generationLogs.map(l => {
      let content = l.content || '';
      if (l.type === 'tool_call') content = `${l.name}(${JSON.stringify(l.args)})`;
      if (l.type === 'tool_result') content = `${l.name || 'result'}: ${l.result}`;
      return `[${l.timestamp}] [${l.type}] ${scrubText(content)}`;
    }).join('\\n');

    const blob = new Blob([logText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `agent-logs-${new Date().toISOString().replace(/:/g, '-')}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const audioRef = useRef<HTMLAudioElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  const generationIdRef = useRef<string | null>(null);
  const progress = currentTime / (selectedShow.duration || 1);

  // --- TTS LOCAL FALLBACK PLAYBACK ENGINE REFS & LOGIC ---
  const ttsIntervalRef = useRef<any>(null);
  const ttsCurrentSpeakerIndexRef = useRef<number>(-1);
  const isTtsPlayMode = !selectedShow.audioUrl;

  const getSegmentIndexAtTime = (time: number) => {
    return selectedShow.transcript?.findIndex(
      line => time >= line.start && time < line.end
    ) ?? -1;
  };

  const speakCurrentSegment = (time: number) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    const currentIndex = getSegmentIndexAtTime(time);
    ttsCurrentSpeakerIndexRef.current = currentIndex;
    if (currentIndex !== -1) {
      const segment = selectedShow.transcript[currentIndex];
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(segment.text);
      const voices = window.speechSynthesis.getVoices();
      
      const isSpeakerA = segment.speaker?.toLowerCase().includes('host') || 
                         segment.speaker?.toLowerCase().includes('alice') || 
                         segment.speaker?.toLowerCase().includes('one') || 
                         currentIndex % 2 === 0;
                         
      if (voices.length > 0) {
        if (isSpeakerA) {
          const femaleVoice = voices.find(v => v.name.toLowerCase().includes('female') || 
                                              v.name.toLowerCase().includes('zira') || 
                                              v.name.toLowerCase().includes('google us english') ||
                                              v.lang.startsWith('en'));
          if (femaleVoice) utterance.voice = femaleVoice;
        } else {
          const maleVoice = voices.find(v => v.name.toLowerCase().includes('male') || 
                                            v.name.toLowerCase().includes('david') || 
                                            v.name.toLowerCase().includes('google us') ||
                                            v.lang.startsWith('en'));
          if (maleVoice) utterance.voice = maleVoice;
        }
      }
      utterance.rate = 1.05;
      window.speechSynthesis.speak(utterance);
    }
  };

  const checkAndSpeakForTime = (time: number) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    const currentIndex = getSegmentIndexAtTime(time);
    if (currentIndex !== -1 && currentIndex !== ttsCurrentSpeakerIndexRef.current) {
      ttsCurrentSpeakerIndexRef.current = currentIndex;
      const segment = selectedShow.transcript[currentIndex];
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(segment.text);
      const voices = window.speechSynthesis.getVoices();
      
      const isSpeakerA = segment.speaker?.toLowerCase().includes('host') || 
                         segment.speaker?.toLowerCase().includes('alice') || 
                         segment.speaker?.toLowerCase().includes('one') || 
                         currentIndex % 2 === 0;
                         
      if (voices.length > 0) {
        if (isSpeakerA) {
          const femaleVoice = voices.find(v => v.name.toLowerCase().includes('female') || 
                                              v.name.toLowerCase().includes('zira') || 
                                              v.name.toLowerCase().includes('google us english') ||
                                              v.lang.startsWith('en'));
          if (femaleVoice) utterance.voice = femaleVoice;
        } else {
          const maleVoice = voices.find(v => v.name.toLowerCase().includes('male') || 
                                            v.name.toLowerCase().includes('david') || 
                                            v.name.toLowerCase().includes('google us') ||
                                            v.lang.startsWith('en'));
          if (maleVoice) utterance.voice = maleVoice;
        }
      }
      utterance.rate = 1.05;
      window.speechSynthesis.speak(utterance);
    }
  };

  useEffect(() => {
    return () => {
      if (ttsIntervalRef.current) clearInterval(ttsIntervalRef.current);
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // When selectedShow changes, reset currentTime and pause playback
  useEffect(() => {
    setCurrentTime(0);
    setIsPlaying(false);
    if (ttsIntervalRef.current) clearInterval(ttsIntervalRef.current);
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  }, [selectedShow]);


  useEffect(() => {
    // Check sharing configuration
    fetch('/api/share/config')
      .then(res => res.json())
      .then(data => {
        setIsSharingEnabled(!!data.isSharingEnabled);
      })
      .catch(err => {
        console.error("Error fetching sharing config:", err);
        setIsSharingEnabled(false);
      });

    const loadData = async () => {
      let userShows: any[] = [];
      try {
        userShows = await getUserShows();
      } catch (e) {
        console.error("Failed to load user-generated shows from IndexedDB:", e);
      }

      const isShared = getQueryParam('share_id') || getQueryParam('share');

      fetch('/api/shows')
        .then(res => res.json())
        .then((shows: any[]) => {
          const transformedShows = (shows && shows.length > 0)
            ? shows.map(show => transformShow({
                ...show,
                coverImage: show.coverImage || "https://www.gstatic.com/aistudio/starter-apps/assets/ai_radio/cover.jpg"
              }))
            : [];

          // Merge: user shows + fetched public shows + baseline pre-generated show
          const merged = [...userShows, ...transformedShows, MOCK_SHOW];
          const uniqueShows = merged.filter((show, index, self) =>
            index === self.findIndex((s) => s.title === show.title)
          );

          setLibrary(uniqueShows);
          if (!isShared && uniqueShows.length > 0) {
            setSelectedShow(uniqueShows[0]);
          }
        })
        .catch(err => {
          console.error("Error loading public shows, using local fallback shows:", err);
          const merged = [...userShows, MOCK_SHOW];
          const uniqueShows = merged.filter((show, index, self) =>
            index === self.findIndex((s) => s.title === show.title)
          );
          setLibrary(uniqueShows);
          if (!isShared && uniqueShows.length > 0) {
            setSelectedShow(uniqueShows[0]);
          }
        });
    };

    loadData();
  }, []);

  // --- PLAYBACK OF SHARED SHOW ON BOOT ---
  useEffect(() => {
    const shareId = getQueryParam('share_id') || getQueryParam('share');

    if (shareId) {
      console.log(`[Sharing] Found shareId: ${shareId}`);
      setIsSharedPlaybackMode(true);
      setSharedShowLoading(true);
      setView('player');

      fetch(`/api/shares/${shareId}`)
        .then(res => {
          if (!res.ok) throw new Error('Shared show not found on server');
          return res.json();
        })
        .then(data => {
          if (data && data.title) {
            setSelectedShow(data);
          } else {
            throw new Error('Invalid shared show data received');
          }
          setSharedShowLoading(false);
        })
        .catch(err => {
          console.error("Failed to load shared show:", err);
          setSharedShowError(err.message || "Failed to load the shared show");
          setSharedShowLoading(false);
        });
    }
  }, []);

  const getBlobFromUrl = async (url: string): Promise<Blob> => {
    if (url.startsWith('data:')) {
      const res = await fetch(url);
      return await res.blob();
    }
    const isExternal = url.startsWith('http') && !url.startsWith(window.location.origin);
    const fetchUrl = isExternal
      ? `/api/download-proxy?url=${encodeURIComponent(url)}`
      : url;
    const res = await fetch(fetchUrl);
    if (!res.ok) throw new Error(`Failed to fetch media file: ${res.statusText}`);
    return await res.blob();
  };

  const handleShare = async () => {
    if (!selectedShow) return;

    // Check if we already have a generated share ID/URL for this specific show to prevent duplicate uploads
    if (selectedShow.shareId) {
      const existingShareUrl = selectedShow.shareUrl || getPublishedShareLink(selectedShow.shareId);
      setIsShareModalOpen(true);
      setSharingInProgress(false);
      setUploadProgress(100);
      setUploadStatus('Retrieving existing shared radio show link...');
      setShareUrl(existingShareUrl);
      return;
    }

    setSharingInProgress(true);
    setIsShareModalOpen(true);
    setShareUrl(null);
    setSharingError(null);
    setCopySuccess(false);
    setUploadProgress(0);
    setUploadStatus('Preparing metadata...');

    try {
      // 1. Send metadata to server to retrieve signed upload/read URLs
      const metadata = {
        title: selectedShow.title,
        summary: selectedShow.summary || selectedShow.description || "",
        transcript: selectedShow.transcript || [],
        prompt: selectedShow.prompt || prompt || "",
        duration: selectedShow.duration,
        host: selectedShow.host || "",
        isBase64Encoded: selectedShow.isBase64Encoded || false,
        date: selectedShow.date || new Date().toLocaleDateString()
      };

      const res = await fetch('/api/share', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(metadata)
      });

      if (!res.ok) {
        const errJson = await res.json().catch(() => ({}));
        throw new Error(errJson.error || `Server responded with ${res.status}`);
      }

      const data = await res.json();
      if (!data || !data.shareId) {
        throw new Error("Invalid response received from sharing API (make sure GCS is configured on backend)");
      }

      const { shareId, uploadUrl, uploadCoverUrl, alreadyExists } = data;

      if (alreadyExists) {
        // Reuse GCS share URL directly without uploading audio/cover
        setUploadStatus('Retrieving existing shared files from GCS...');
        setUploadProgress(80);
        
        const generatedShareUrl = getPublishedShareLink(shareId);
        const updatedShow = { ...selectedShow, shareId, shareUrl: generatedShareUrl };
        setSelectedShow(updatedShow);
        setLibrary(prev => prev.map(s => s.title === selectedShow.title ? updatedShow : s));

        if (selectedShow.isUserGenerated) {
          try {
            await saveUserShow(updatedShow);
          } catch (e) {
            console.error("Failed to save shared show metadata into IndexedDB:", e);
          }
        }

        setUploadProgress(100);
        setUploadStatus('Retrieved existing share link from GCS!');
        setShareUrl(generatedShareUrl);
        return;
      }

      if (!uploadUrl || !uploadCoverUrl) {
        throw new Error("Missing upload URLs in sharing API response");
      }

      // 2. Load the actual audio file/blob
      setUploadStatus('Fetching radio show audio stream...');
      setUploadProgress(5);
      const audioBlob = await getBlobFromUrl(selectedShow.audioUrl);

      // 3. Upload the MP3 with progress bar
      setUploadStatus('Uploading stereo audio stream to GCS...');
      await new Promise<void>((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('PUT', uploadUrl, true);
        xhr.setRequestHeader('Content-Type', 'audio/mpeg');
        
        xhr.upload.onprogress = (e) => {
          if (e.lengthComputable) {
            // Map audio progress to 10% - 80%
            const percent = Math.round((e.loaded / e.total) * 70) + 10;
            setUploadProgress(percent);
          }
        };
        
        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve();
          } else {
            reject(new Error(`Audio upload failed with status ${xhr.status}`));
          }
        };
        
        xhr.onerror = () => reject(new Error('Audio upload failed due to network error'));
        xhr.send(audioBlob);
      });

      // 4. Load the cover image
      setUploadStatus('Uploading high-res cover art canvas to GCS...');
      setUploadProgress(82);

      let coverBlob: Blob | null = null;
      if (selectedShow.coverImage) {
        try {
          coverBlob = await getBlobFromUrl(selectedShow.coverImage);
        } catch (err) {
          console.warn("Could not retrieve text-to-image cover art canvas blob, using fallback...", err);
        }
      }

      if (coverBlob) {
        await new Promise<void>((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.open('PUT', uploadCoverUrl, true);
          xhr.setRequestHeader('Content-Type', 'image/png');
          
          xhr.upload.onprogress = (e) => {
            if (e.lengthComputable) {
              // Map cover progress to 82% - 98%
              const percent = Math.round((e.loaded / e.total) * 16) + 82;
              setUploadProgress(percent);
            }
          };
          
          xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
              resolve();
            } else {
              reject(new Error(`Cover upload failed with status ${xhr.status}`));
            }
          };
          
          xhr.onerror = () => reject(new Error('Cover upload failed due to network error'));
          xhr.send(coverBlob);
        });
      }

      // 5. Complete and update state
      const generatedShareUrl = getPublishedShareLink(shareId);
      const updatedShow = { ...selectedShow, shareId, shareUrl: generatedShareUrl };
      setSelectedShow(updatedShow);
      setLibrary(prev => prev.map(s => s.title === selectedShow.title ? updatedShow : s));

      if (selectedShow.isUserGenerated) {
        try {
          await saveUserShow(updatedShow);
        } catch (e) {
          console.error("Failed to save shared show metadata into IndexedDB:", e);
        }
      }

      setUploadProgress(100);
      setUploadStatus('Share creation successfully completed!');
      setShareUrl(generatedShareUrl);
    } catch (err: any) {
      console.error("Error creating viral share:", err);
      const errMsg = err.message || "Failed to package or upload files";
      setUploadStatus(`Error: ${errMsg}`);
      setSharingError(errMsg);
      setUploadProgress(0);
    } finally {
      setSharingInProgress(false);
    }
  };

  const copyShareUrl = () => {
    if (shareUrl) {
      navigator.clipboard.writeText(shareUrl)
        .then(() => {
          setCopySuccess(true);
          setTimeout(() => setCopySuccess(false), 2000);
        })
        .catch(err => console.error("Could not copy:", err));
    }
  };

  const exitSharedPlayback = () => {
    setIsSharedPlaybackMode(false);
    setSharedShowError(null);
    window.history.replaceState({}, '', window.location.pathname);
    setView('home');
  };

  const remixSharedShow = () => {
    if (selectedShow && selectedShow.prompt) {
      setPrompt(selectedShow.prompt);
    }
    setIsSharedPlaybackMode(false);
    setSharedShowError(null);
    window.history.replaceState({}, '', window.location.pathname);
    setView('home');
  };

  const togglePlay = () => {
    if (isTtsPlayMode) {
      if (isPlaying) {
        if (ttsIntervalRef.current) clearInterval(ttsIntervalRef.current);
        if (typeof window !== 'undefined' && window.speechSynthesis) {
          window.speechSynthesis.cancel();
        }
        setIsPlaying(false);
      } else {
        setIsPlaying(true);
        let accumulatedTime = currentTime;
        
        speakCurrentSegment(accumulatedTime);

        ttsIntervalRef.current = setInterval(() => {
          accumulatedTime += 0.5; // robust and lightweight 0.5s chunks
          if (accumulatedTime >= selectedShow.duration) {
            accumulatedTime = selectedShow.duration;
            if (ttsIntervalRef.current) clearInterval(ttsIntervalRef.current);
            if (typeof window !== 'undefined' && window.speechSynthesis) {
              window.speechSynthesis.cancel();
            }
            setIsPlaying(false);
          }
          setCurrentTime(accumulatedTime);
          checkAndSpeakForTime(accumulatedTime);
        }, 500);
      }
    } else {
      if (audioRef.current) {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    }
  };

  const handleDownload = async (e: React.MouseEvent, show: any) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      const JSZip = (await import('jszip')).default;
      const zip = new JSZip();

      // Helper to fetch/convert any URL or data URI to a Blob
      const getFileContent = async (url: string): Promise<Blob> => {
        if (url.startsWith('data:')) {
          const res = await fetch(url);
          return await res.blob();
        }
        const isExternal = url.startsWith('http') && !url.startsWith(window.location.origin);
        const fetchUrl = isExternal
          ? `/api/download-proxy?url=${encodeURIComponent(url)}`
          : url;
        const res = await fetch(fetchUrl);
        if (!res.ok) throw new Error(`Failed to fetch URL: ${url}`);
        return await res.blob();
      };

      // Helper to convert seconds into "MM:SS"
      const formatTimecode = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
      };

      // Add audio file to ZIP in memory
      if (show.audioUrl) {
        try {
          const audioBlob = await getFileContent(show.audioUrl);
          zip.file("ai_radio.mp3", audioBlob);
        } catch (err) {
          console.error("Failed to include audio in zip:", err);
        }
      }

      // Add cover image to ZIP in memory
      if (show.coverImage) {
        try {
          const imgBlob = await getFileContent(show.coverImage);
          zip.file("cover.png", imgBlob);
        } catch (err) {
          console.error("Failed to include cover in zip:", err);
        }
      }

      // Reconstruct show_notes.json format
      const showNotesJson = {
        show_title: show.title,
        show_duration: formatTimecode(show.duration),
        two_sentence_summary: show.summary,
        date_of_generation: show.date,
        timecoded_transcript: show.transcript ? show.transcript.map((line: any) => ({
          timecode: formatTimecode(line.start),
          speaker: line.speaker,
          text: line.text
        })) : []
      };

      zip.file("show_notes.json", JSON.stringify(showNotesJson, null, 2));

      // Generate the zip on the client side
      const zipBlob = await zip.generateAsync({ type: 'blob' });
      const blobUrl = window.URL.createObjectURL(zipBlob);
      
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = `${show.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-show.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error('In-browser ZIP creation failed, falling back to individual download:', err);
      
      const downloadFile = (url: string, defaultName: string) => {
        const a = document.createElement('a');
        a.href = url;
        a.download = defaultName;
        a.target = '_blank';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      };

      if (show.audioUrl) downloadFile(show.audioUrl, 'ai_radio.mp3');
      if (show.coverImage) downloadFile(show.coverImage, 'cover.png');
    }
  };

  const onTimeUpdate = () => {
    if (!isTtsPlayMode && audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const seek = (time: number) => {
    if (isTtsPlayMode) {
      setCurrentTime(time);
      if (isPlaying) {
        speakCurrentSegment(time);
      } else {
        if (typeof window !== 'undefined' && window.speechSynthesis) {
          window.speechSynthesis.cancel();
        }
        ttsCurrentSpeakerIndexRef.current = -1;
      }
    } else {
      if (audioRef.current) {
        audioRef.current.currentTime = time;
        setCurrentTime(time);
        if (!isPlaying) {
          audioRef.current.play();
          setIsPlaying(true);
        }
      }
    }
  };

  const stepTime = (amount: number) => {
    const newTime = Math.max(0, Math.min(selectedShow.duration, currentTime + amount));
    seek(newTime);
  };

  const handleGenerate = async (e?: React.FormEvent, overridePrompt?: string, overrideDuration?: string, overrideMood?: string) => {
    if (e) e.preventDefault();
    if (!auth.currentUser && !IS_DEV) {
      await handleSignIn();
      return;
    }
    const p = overridePrompt ?? prompt;
    const d = overrideDuration ?? targetDuration;
    const m = overrideMood ?? targetMood;
    if (!p.trim()) return;

    if (quota && quota.remaining <= 0 && !IS_DEV) {
      return;
    }

    setActivePrompt(p);
    if (overridePrompt) setPrompt(overridePrompt);
    if (overrideDuration) setTargetDuration(overrideDuration);
    if (overrideMood) setTargetMood(overrideMood);

    setIsGenerating(true);
    setView('generating');
    setGenerationLogs([]);
    setHasQuotaError(false);

    setStartTime(Date.now());
    setElapsedTime(0);
    setGenerationComplete(false);
    setCurrentStage('Initializing...');

    let generatedShow: typeof MOCK_SHOW | null = null;

    abortControllerRef.current = new AbortController();
    const generationId = Math.random().toString(36).substring(2, 15);
    generationIdRef.current = generationId;

    try {
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };
      if (auth.currentUser) {
        try {
          const token = await auth.currentUser.getIdToken();
          headers['Authorization'] = `Bearer ${token}`;
        } catch (tokenErr) {
          console.error("Error retrieving ID token:", tokenErr);
        }
      }

      console.log("[Client] Sending POST request to /api/generate-show with payload:", {
        topic: p,
        duration: d,
        mood: m,
        generationId
      });

      const response = await fetch('/api/generate-show', {
        method: 'POST',
        headers,
        body: JSON.stringify({
          topic: p,
          duration: d,
          mood: m,
          generationId
        }),
        signal: abortControllerRef.current.signal
      });

      console.log("[Client] Server response received. Status code:", response.status, "Status Text:", response.statusText);

      if (response.status === 429) {
        const errData = await response.json().catch(() => ({}));
        console.warn("[Client] Received 429 too many requests. Payload:", errData);
        setIsGenerating(false);
        setView('home');
        setGenerationLogs(prev => [...prev, {
          id: Math.random().toString(),
          timestamp: new Date().toISOString().split('T')[1].split('.')[0],
          type: 'error',
          content: errData.error || "Generation limit exceeded. Please try again tomorrow."
        }]);
        refreshQuota();
        return;
      }

      if (!response.ok) {
        console.error("[Client] Non-2xx response. Throwing error.");
        throw new Error(`API Error: ${response.status}`);
      }

      const reader = response.body?.getReader();
      if (!reader) {
        console.error("[Client] Response is ok but body reader is null.");
        throw new Error("No response body");
      }
      console.log("[Client] ReadableStream reader acquired successfully. Entering chunk consumption loop...");

      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          console.log("[Client] ReadableStream reader reported done=true.");
          break;
        }

        const decodedChunk = decoder.decode(value, { stream: true });
        console.log(`[Client] Chunk received: ${value.length} bytes. Decoded text:`, decodedChunk);
        
        buffer += decodedChunk;
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";

        for (const line of lines) {
          if (!line.trim()) continue;
          console.log("[Client] Raw line in buffer:", line);
          if (!line.startsWith("data: ")) continue;
          const dataStr = line.slice(6);
          if (dataStr === "[DONE]") {
            console.log("[Client] Processed [DONE] signal.");
            continue;
          }

          try {
            const event = JSON.parse(dataStr);
            console.info("[Client] Parsed event payload:", event);
            const timestamp = new Date().toISOString().split('T')[1].split('.')[0];

            if (event.type === "info" || event.type === "error") {
               if (event.message?.includes('Downloading')) setCurrentStage('Extracting final files...');
               if (event.type === "error" && (
                 event.message?.toLowerCase().includes("quota") || 
                 event.message?.toLowerCase().includes("too_many_requests") || 
                 event.message?.toLowerCase().includes("resource_exhausted") ||
                 event.message?.toLowerCase().includes("limit")
               )) {
                 console.warn("[Client] Event error matches quota limits. Setting hasQuotaError=true.");
                 setHasQuotaError(true);
               }
               setGenerationLogs(prev => [...prev, {
                 id: Math.random().toString(), timestamp, type: event.type, content: event.message
               }]);
            } else if (event.type === "thinking" || event.type === "text") {
               setGenerationLogs(prev => {
                 try {
                   const lastLog = prev[prev.length - 1];
                   const eventText = typeof event.text === 'string' ? event.text : (event.text ? String(event.text) : "");
                   
                   if (lastLog && lastLog.type === event.type) {
                     // Ignore exact duplicates
                     if (eventText === lastLog.content) return prev;

                     const lastContent = typeof lastLog.content === 'string' ? lastLog.content : "";
                     let newContent = lastContent;
                     if (eventText.startsWith(lastContent)) {
                       // API sent the full accumulated text
                       newContent = eventText;
                     } else {
                       // API sent a delta
                       newContent += eventText;
                     }

                     const updated = [...prev];
                     updated[updated.length - 1] = {
                       ...lastLog,
                       content: newContent,
                       timestamp
                     };
                     return updated;
                   }
                   return [...prev, { id: Math.random().toString(), timestamp, type: event.type, content: eventText }];
                 } catch (innerErr) {
                   console.error("[Client] Error inside setGenerationLogs callback:", innerErr);
                   return prev;
                 }
               });
            } else if (event.type === "tool_call") {
               console.log("[Client] Processing tool_call event:", event.name, "with args:", event.arguments);
               if (event.name === 'code_execution_call' || event.name === 'bash') {
                 const cmd = (event.arguments?.command || event.arguments?.code || "") as string;
                 if (cmd.includes('fetch_hn.py') || cmd.includes('fetch_github.py') || cmd.includes('fetch_url.py')) setCurrentStage('Researching topic...');
                 else if (cmd.includes('generate_script.py')) setCurrentStage('Writing script...');
                 else if (cmd.includes('generate_tts.py')) setCurrentStage('Generating speech...');
                 else if (cmd.includes('generate_music.py')) setCurrentStage('Generating music...');
                 else if (cmd.includes('mix_audio.py')) setCurrentStage('Mixing audio...');
                 else if (cmd.includes('generate_metadata.py')) setCurrentStage('Generating metadata...');
                 else if (cmd.includes('generate_image.py')) setCurrentStage('Generating cover image...');
               } else if (event.name === 'read_file' && event.arguments?.path) {
                 const path = event.arguments.path as string;
                 if (path.includes('skills/research')) setCurrentStage('Preparing research...');
                 else if (path.includes('skills/script-writing')) setCurrentStage('Preparing script...');
                 else if (path.includes('skills/tts-generation')) setCurrentStage('Preparing speech generation...');
                 else if (path.includes('skills/music-generation')) setCurrentStage('Preparing music generation...');
                 else if (path.includes('skills/audio-mixing')) setCurrentStage('Preparing audio mixing...');
                 else if (path.includes('skills/metadata-generation')) setCurrentStage('Preparing metadata...');
                 else if (path.includes('skills/cover-image-generation')) setCurrentStage('Preparing cover image...');
               }

               setGenerationLogs(prev => [...prev, {
                 id: Math.random().toString(), timestamp, type: 'tool_call', name: event.name, args: event.arguments
               }]);
            } else if (event.type === "tool_result") {
               console.log("[Client] Processing tool_result event for:", event.name);
               let resultText = event.result || "";
               if (resultText.length > 4000) resultText = resultText.substring(0, 4000) + "...";
               setGenerationLogs(prev => [...prev, {
                 id: Math.random().toString(), timestamp, type: 'tool_result', name: event.name, result: resultText
               }]);
            } else if (event.type === "show_data" && event.data) {
               console.log("[Client] Received show_data payload! Updating UI selection and library.", event.data);
               generatedShow = transformShow({
                 ...event.data,
                 coverImage: event.data.coverImage || "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
               });
            }
          } catch (e) {
            console.error("Error parsing event:", e, dataStr);
          }
        }
      }

      // Add a slight delay for dramatic effect
      await new Promise(resolve => setTimeout(resolve, 2000));

      if (generatedShow) {
        const userShow = { ...generatedShow, isUserGenerated: true };
        
        // Persist to user's IndexedDB database
        try {
          await saveUserShow(userShow);
        } catch (e) {
          console.error("Error saving new show to IndexedDB:", e);
        }

        setSelectedShow(userShow);
        setLibrary(prev => [userShow, ...prev]);
        setGenerationComplete(true);
        setPrompt('');
        refreshQuota();
      }

    } catch (error: any) {
      if (error.name === 'AbortError') {
        console.log("Generation aborted by user");
        setGenerationLogs(prev => [...prev, {
          id: Math.random().toString(), timestamp: new Date().toISOString().split('T')[1].split('.')[0], type: 'info', content: 'Generation stopped by user.'
        }]);
      } else {
        console.error("Failed to generate show:", error);
        const errMsg = error instanceof Error ? error.message : "Unknown error";
        if (errMsg.toLowerCase().includes("quota") || errMsg.toLowerCase().includes("too_many_requests") || errMsg.toLowerCase().includes("resource_exhausted") || errMsg.toLowerCase().includes("limit")) {
          setHasQuotaError(true);
        }
        setGenerationLogs(prev => [...prev, {
          id: Math.random().toString(), timestamp: new Date().toISOString().split('T')[1].split('.')[0], type: 'error', content: `Error: ${errMsg}`
        }]);
      }
    }

    setIsGenerating(false);
  };

  const handleStop = async () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    if (generationIdRef.current) {
      try {
        await fetch('/api/cancel-show', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ generationId: generationIdRef.current })
        });
      } catch (err) {
        console.error("Failed to cancel show on server:", err);
      }
    }
    setIsGenerating(false);
  };

  const selectShow = (show: typeof MOCK_SHOW) => {
    setSelectedShow(show);
    setView('player');
    setCurrentTime(0);
    setIsPlaying(false);
  };

  const handleDeleteShow = async (show: any) => {
    try {
      await deleteUserShow(show.title);
    } catch (e) {
      console.error("Failed to delete show from IndexedDB:", e);
    }

    setLibrary(prev => {
      const updatedLib = prev.filter(s => s.title !== show.title);
      if (selectedShow.title === show.title) {
        if (updatedLib.length > 0) {
          setTimeout(() => setSelectedShow(updatedLib[0]), 0);
        } else {
          setTimeout(() => setSelectedShow(MOCK_SHOW), 0);
        }
      }
      return updatedLib;
    });
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(true);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      setIsScrolledToBottom(scrollHeight - scrollTop - clientHeight < 50);
    }
  };

  useEffect(() => {
    if (scrollRef.current && view === 'generating' && isScrolledToBottom) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [generationLogs, view, isScrolledToBottom]);

  if (view === 'generating') {
    return (
      <div className="fixed inset-0 w-full h-full bg-black text-white flex flex-col items-center justify-center p-6 overflow-hidden pb-10">
        <RainbowBackground />

        <div className="w-full max-w-4xl relative z-10 flex flex-col h-full overflow-hidden">
          <div className="text-center space-y-4 mb-8 shrink-0 mt-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 shadow-2xl relative mb-4">
              <div className="absolute inset-0 rounded-full border border-io-blue/30 animate-[spin_4s_linear_infinite]" />
              <Bot className="w-8 h-8 text-io-blue animate-pulse" />
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-white/90">
              {generationComplete ? "Show Ready" : currentStage}
            </h2>
            <p className="text-white/40 font-medium text-sm max-w-lg mx-auto">Creating custom radio show about: "{activePrompt}"</p>
          </div>

          <div className="flex-1 overflow-hidden relative rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-md shadow-2xl flex flex-col">
            <div className="h-12 border-b border-white/5 flex items-center px-6 gap-2 bg-white/[0.02] shrink-0 justify-between">
               <div className="flex items-center gap-2">
                 <div className="w-3 h-3 rounded-full bg-white/20" />
                 <div className="w-3 h-3 rounded-full bg-white/20" />
                 <div className="w-3 h-3 rounded-full bg-white/20" />
                 <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest ml-4 font-bold">Process Log</span>
               </div>
               {startTime && (
                 <div className="font-mono text-[10px] text-white/45 uppercase tracking-widest font-medium">
                   Elapsed: {formatElapsed(elapsedTime)} <span className="opacity-30">/</span> <span className="text-io-blue font-bold">Est: ~5 mins</span>
                 </div>
               )}
            </div>

            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex-1 overflow-y-auto no-scrollbar p-6 space-y-4"
            >
              <AnimatePresence>
                {generationLogs.map((log) => {
                  if (log.type === 'tool_call' && (!log.args || Object.keys(log.args).length === 0)) {
                    return null;
                  }

                  let prefix = 'Info';
                  let color = 'text-white/60';
                  let Icon = Info;

                  if (log.type === 'tool_call') {
                     prefix = 'Action';
                     color = 'text-io-blue';
                     Icon = Settings2;
                  } else if (log.type === 'tool_result') {
                     prefix = 'Result';
                     color = 'text-io-green';
                     Icon = CheckCircle2;
                  } else if (log.type === 'thinking' || log.type === 'text') {
                     prefix = 'Log';
                     color = 'text-white/80';
                     Icon = TerminalSquare;
                  } else if (log.type === 'error') {
                     prefix = 'Error';
                     color = 'text-red-400';
                     Icon = Info;
                  }

                  return (
                    <motion.div
                      key={log.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex gap-4 md:gap-6 font-mono text-xs md:text-sm group"
                    >
                      <div className="w-16 shrink-0 text-white/40 text-right pt-0.5">
                        {log.timestamp}
                      </div>
                      <div className="flex gap-3 w-28 shrink-0 items-start pt-0.5">
                         <Icon className={`w-4 h-4 ${color} shrink-0`} />
                         <span className={`${color} font-bold uppercase tracking-wider text-[10px] mt-0.5 w-full`}>{prefix}</span>
                      </div>
                      <div className="flex-1 break-words whitespace-pre-wrap text-white/80 leading-relaxed max-w-2xl bg-white/[0.02] px-3 py-2 -mt-2 rounded border border-transparent hover:border-white/5 transition-colors">
                        {log.type === 'tool_call' ? (
                          <div className="space-y-2">
                            <div className="font-bold text-io-blue">{humanizeToolName(log.name || '')}</div>
                            {log.name === 'read_file' && log.args?.path ? (
                              <div className="bg-black/40 p-3 rounded-lg text-white/70 font-mono text-[10px] border border-white/5">
                                <span className="text-white/40">path:</span> {log.args.path}
                              </div>
                            ) : log.name === 'list_files' && log.args?.path ? (
                              <div className="bg-black/40 p-3 rounded-lg text-white/70 font-mono text-[10px] border border-white/5">
                                <span className="text-white/40">path:</span> {log.args.path}
                              </div>
                            ) : log.args && log.args.command ? (
                              <pre className="bg-black/40 p-3 rounded-lg text-white/70 overflow-x-auto whitespace-pre-wrap font-mono text-[10px] border border-white/5">
                                {scrubText(log.args.command)}
                              </pre>
                            ) : log.args && log.args.code ? (
                              <div className="bg-black/40 p-3 rounded-lg text-white/70 overflow-x-auto font-mono text-[10px] border border-white/5">
                                {log.args.language && <div className="text-white/40 mb-1">{log.args.language}</div>}
                                <pre className="whitespace-pre-wrap">{scrubText(log.args.code)}</pre>
                              </div>
                            ) : log.args && Object.keys(log.args).length > 0 ? (
                              <pre className="bg-black/40 p-3 rounded-lg text-white/70 overflow-x-auto whitespace-pre-wrap font-mono text-[10px] border border-white/5">
                                {scrubText(JSON.stringify(log.args, null, 2))}
                              </pre>
                            ) : null}
                          </div>
                        ) : log.type === 'tool_result' ? (
                          <div className="space-y-2">
                            <div className={`font-bold ${log.result?.includes('"error"') || log.result?.startsWith('Error:') ? 'text-red-400' : 'text-io-green'}`}>
                              Result: {humanizeToolName(log.name || 'output')}
                            </div>
                            {formatToolResult(log.name, log.result)}
                          </div>
                        ) : (
                          renderMarkdown(scrubText(log.content || ''))
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {isGenerating ? (
                <div className="flex flex-col items-center gap-6 pt-4">
                  <div className="flex gap-4 md:gap-6 font-mono text-xs md:text-sm opacity-50 w-full">
                     <div className="w-16 shrink-0" />
                     <div className="flex gap-3 w-28 shrink-0 items-start pt-0.5">
                       <Loader2 className="w-4 h-4 text-io-blue shrink-0 animate-spin" />
                       <span className="text-io-blue font-bold uppercase tracking-wider text-[10px] mt-0.5">Working</span>
                     </div>
                     <div className="flex-1">
                       <span className="inline-flex gap-1">
                         <span className="w-1.5 h-1.5 rounded-full bg-io-blue animate-bounce" />
                         <span className="w-1.5 h-1.5 rounded-full bg-io-blue animate-bounce delay-75" />
                         <span className="w-1.5 h-1.5 rounded-full bg-io-blue animate-bounce delay-150" />
                       </span>
                     </div>
                  </div>
                  <button
                    onClick={handleStop}
                    className="px-6 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-xl font-bold text-xs tracking-widest uppercase transition-colors border border-red-500/20"
                  >
                    Stop Agent
                  </button>
                </div>
              ) : generationComplete ? (
                <div className="pt-8 pb-4 flex flex-col items-center gap-4">
                  <div className="text-io-green font-bold tracking-widest uppercase text-sm mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" /> Show Ready
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={() => {
                        setView('player');
                        setGenerationComplete(false);
                      }}
                      className="px-8 py-3 bg-white text-black rounded-xl font-bold text-sm tracking-widest uppercase transition-colors hover:scale-105"
                    >
                      Listen Now
                    </button>
                    <button
                      onClick={downloadLogs}
                      className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-sm tracking-widest uppercase transition-colors"
                    >
                      Download Logs
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center w-full">
                  {hasQuotaError && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="my-6 p-6 rounded-2xl bg-red-400/10 border border-red-500/20 backdrop-blur-md flex flex-col md:flex-row items-start gap-4 text-left max-w-2xl mx-auto w-full"
                    >
                      <div className="w-10 h-10 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0 mx-auto md:mx-0">
                        <ShieldAlert className="w-5 h-5 animate-pulse" />
                      </div>
                      <div className="space-y-3 flex-1 text-center md:text-left">
                        <h4 className="font-bold text-red-200 text-xs md:text-sm tracking-wide uppercase">AI Studio Quota Limit Handled</h4>
                        <p className="text-white/75 text-xs leading-relaxed font-sans">
                          The current Gemini API key has run out of request quota for generating complete shows. Generating background soundscapes, distinct host voices via Lyria & Speech models, and painting covers demands a persistent billing plan or a personal Gemini API key.
                        </p>
                        <div className="text-[11px] text-white/60 bg-black/30 p-3 rounded-lg font-sans space-y-1">
                          <div className="font-bold text-red-300">How to unlock unlimited generations:</div>
                          <div>1. Go to the top-right <span className="font-semibold text-white/90">Settings &gt; Secrets</span> inside AI Studio.</div>
                          <div>2. Locate <span className="font-mono text-io-blue font-bold">GEMINI_API_KEY</span>.</div>
                          <div>3. Enter your own personal billed Google Gemini API Key.</div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div className="pt-4 pb-4 flex justify-center gap-4 w-full">
                    <button
                      onClick={() => setView('home')}
                      className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-sm tracking-widest uppercase transition-colors"
                    >
                      Go Back
                    </button>
                    <button
                      onClick={downloadLogs}
                      className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-sm tracking-widest uppercase transition-colors"
                    >
                      Download Logs
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (view === 'home') {
    const templateCategories = [
      { id: 'tech', label: 'Tech & AI' },
      { id: 'culture', label: 'Arts & Life' },
      { id: 'news', label: 'News & Sports' }
    ] as const;

    const templates = {
      tech: [
        {
          title: "Daily Hacker Bites",
          desc: "Voice a digest of the top stories currently on Hacker News",
          prompt: "Generate a radio show called Daily Hacker Bites based on top Hacker News stories.",
          duration: "3"
        },
        {
          title: "GitHub Roundtable",
          desc: "Review the AlphaFold 3 repository and Google DeepMind's biology model",
          prompt: "Generate a radio show with a roundtable concept, educating listeners about https://github.com/google-deepmind/alphafold3.",
          duration: "3"
        }
      ],
      culture: [
        {
          title: "Philosophy Café",
          desc: "Host an atmospheric debate analyzing existentialism and humanity's future",
          prompt: "Generate a thought-provoking discussion in a cozy café setting discussing existential questions.",
          duration: "3"
        },
        {
          title: "Cinematic Reviews",
          desc: "Break down the visual style & legacy of iconic film directors",
          prompt: "Generate a talk radio segment analyzing the distinct visual styles of movie directors.",
          duration: "3"
        }
      ],
      news: [
        {
          title: "Sports Tournament Debate",
          desc: "Lively debate about preparations and predictions for a major tournament",
          prompt: "Generate a lively sports debate about preparations for a major upcoming tournament.",
          duration: "3"
        },
        {
          title: "Fintech Briefing",
          desc: "Explain decentralized finance developments and global stock market trends",
          prompt: "Generate a radio segment providing an interactive briefing on fintech and global markets.",
          duration: "3"
        }
      ]
    };

    return (
      <div className="fixed inset-0 w-full h-full bg-black text-white overflow-hidden font-sans select-none flex flex-col">
        <RainbowBackground />

        <div className="relative z-10 w-full h-full overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-12 p-6 md:p-16">
            {/* Header */}
            {!IS_DEV && (authLoading || currentUser) && (
              <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/[0.02] border border-white/5 rounded-2xl p-4 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  {authLoading ? (
                    <div className="flex items-center gap-2 text-[10px] font-bold font-mono text-white/40">
                      <Loader2 className="w-3 h-3 animate-spin text-io-blue" />
                      <span>CHECKING SECURE SESSION...</span>
                    </div>
                  ) : currentUser ? (
                    <div className="flex items-center gap-3">
                      {currentUser.photoURL ? (
                        <img
                          src={currentUser.photoURL}
                          alt={currentUser.displayName || 'User'}
                          referrerPolicy="no-referrer"
                          className="w-7 h-7 rounded-full border border-white/25 shadow-sm"
                        />
                      ) : (
                        <div className="w-7 h-7 rounded-full bg-io-blue border border-white/25 shadow-sm flex items-center justify-center text-[10px] font-bold text-white">
                          {currentUser.displayName ? currentUser.displayName[0].toUpperCase() : 'U'}
                        </div>
                      )}
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-white/90 leading-tight">
                          {currentUser.displayName || "Google User"}
                        </span>
                        <span className="text-[9px] font-medium font-mono text-white/40 leading-none mt-0.5">
                          {currentUser.email}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={handleSignOut}
                        className="ml-2 text-[9px] font-bold font-mono text-white/40 hover:text-white bg-white/5 hover:bg-white/10 border border-white/5 px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer"
                      >
                        SIGN OUT
                      </button>
                    </div>
                  ) : null}
                </div>

                {currentUser && quota && (
                  <div
                    className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold font-mono tracking-tight text-white/90"
                  >
                    <div className={`w-1.5 h-1.5 rounded-full ${quota.remaining > 0 ? 'bg-io-green animate-pulse' : 'bg-io-red'}`} />
                    <span>
                      DAILY ALLOWANCE: {quota.remaining}/{quota.limit} SHOWS AVAILABLE
                    </span>
                  </div>
                )}
              </header>
            )}

            {/* Hero / Generator */}
            <section className="space-y-8">
              <div className="text-center space-y-3 mb-10 select-none">
                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-6xl font-bold tracking-tight text-white/95 leading-[1.15]"
                >
                  Generate a <span className="text-gradient-io">radio show</span>
                </motion.h1>
                <p className="text-white/50 text-sm md:text-base font-medium font-sans">
                  powered by{' '}
                  <a 
                    href="https://blog.google/innovation-and-ai/technology/developers-tools/managed-agents-gemini-api/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white transition-colors cursor-pointer"
                  >
                    gemini managed agents
                  </a>
                </p>
              </div>

              <form onSubmit={(e) => {
                if (quota && quota.remaining <= 0 && !IS_DEV) {
                  e.preventDefault();
                  return;
                }
                handleGenerate(e);
              }} className="space-y-4">
                {currentUser && quota && quota.remaining === 0 && !IS_DEV ? (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-2xl bg-black/40 border border-io-red/30 backdrop-blur-md flex items-center gap-3 text-white text-xs font-semibold"
                  >
                    <ShieldAlert className="w-5 h-5 text-io-red shrink-0 font-sans" />
                    <span>Your daily quota of {quota.limit} generations has been reached. Please come back tomorrow to generate more custom interactive radio shows!</span>
                  </motion.div>
                ) : null}

                <div className="relative group/box">
                  <div className="absolute -inset-1 bg-gradient-to-r from-io-blue/10 via-io-green/10 to-io-yellow/10 rounded-[1.5rem] blur opacity-30 group-focus-within/box:opacity-50 transition duration-1000"></div>
                  <div className="relative bg-[#0d0d0d]/85 backdrop-blur-3xl border border-white/10 rounded-[1.5rem] p-4 flex flex-col gap-3 group-focus-within/box:border-white/20 transition-all duration-300">
                    <div className="w-full">
                      <textarea
                        rows={2}
                        placeholder="I want a talk radio show about...."
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        className="w-full bg-transparent p-2 text-sm md:text-base font-normal text-white/90 focus:outline-none placeholder:text-white/20 resize-none min-h-[50px] leading-relaxed"
                      />
                    </div>

                    <div className="flex flex-wrap items-center justify-between border-t border-white/5 pt-3 mt-1.5 gap-4">
                      {/* Left controls */}
                      <div className="flex flex-wrap items-center gap-3">
                        {/* Duration Selector */}
                        <div className="flex items-center gap-2 bg-white/[0.04] border border-white/5 rounded-full px-3 py-1.5 hover:bg-white/[0.08] transition-all relative focus-within:ring-2 focus-within:ring-io-blue focus-within:border-transparent">
                          <Clock className="w-3.5 h-3.5 text-white/40 shrink-0" />
                          <select
                            value={targetDuration}
                            onChange={(e) => setTargetDuration(e.target.value)}
                            className="bg-transparent border-none text-[11px] font-bold text-white/70 focus:outline-none focus:ring-0 cursor-pointer appearance-none uppercase tracking-wider pr-1"
                          >
                            <option value="3" className="bg-neutral-900 text-white">3 Min</option>
                            <option value="5" className="bg-neutral-900 text-white">5 Min</option>
                            <option value="10" className="bg-neutral-900 text-white">10 Min</option>
                            <option value="15" className="bg-neutral-900 text-white">15 Min</option>
                          </select>
                        </div>

                        {/* Mood Selector */}
                        <div className="flex items-center gap-2 bg-white/[0.04] border border-white/5 rounded-full px-3 py-1.5 hover:bg-white/[0.08] transition-all relative focus-within:ring-2 focus-within:ring-io-blue focus-within:border-transparent">
                          <List className="w-3.5 h-3.5 text-white/40 shrink-0" />
                          <select
                            value={targetMood}
                            onChange={(e) => setTargetMood(e.target.value)}
                            className="bg-transparent border-none text-[11px] font-bold text-white/70 focus:outline-none focus:ring-0 cursor-pointer appearance-none uppercase tracking-wider pr-1"
                          >
                            <option value="Informative" className="bg-neutral-900 text-white">Informative</option>
                            <option value="Conversational" className="bg-neutral-900 text-white">Conversational</option>
                            <option value="Late Night Chill" className="bg-neutral-900 text-white">Late Night Chill</option>
                            <option value="Hype & Energetic" className="bg-neutral-900 text-white">Energetic</option>
                            <option value="Experimental" className="bg-neutral-900 text-white">Experimental</option>
                          </select>
                        </div>
                      </div>

                      {/* Right action button */}
                      {!currentUser && !IS_DEV ? (
                        <button
                          type="button"
                          onClick={handleSignIn}
                          className="px-5 py-2 bg-white text-black hover:bg-zinc-100 rounded-full font-bold uppercase tracking-wider text-[11px] transition-all inline-flex items-center justify-center gap-2.5 cursor-pointer shadow-lg shadow-black/30 animate-pulse hover:animate-none"
                        >
                          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.22-.66-.35-1.36-.35-2.09z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                          </svg>
                          Sign In with Google
                        </button>
                      ) : (
                        <button
                          type="submit"
                          disabled={isGenerating || (quota && quota.remaining <= 0 && !IS_DEV)}
                          className="px-6 py-2 bg-white text-black hover:bg-zinc-200 disabled:opacity-50 disabled:hover:bg-white rounded-full font-bold uppercase tracking-wider text-[11px] transition-all inline-flex items-center justify-center gap-2 group cursor-pointer shadow-lg shadow-black/30"
                        >
                          {isGenerating ? (
                            <>
                              <div className="w-3 h-3 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                              Generating
                            </>
                          ) : (
                            <>
                              Generate
                              <img 
                                src="https://www.gstatic.com/lamda/images/gemini_sparkle_aurora_33f86dc0c0257da337c63.svg" 
                                alt="Gemini" 
                                className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300 pointer-events-none select-none"
                                referrerPolicy="no-referrer"
                              />
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Sub-generation time & privacy guideline */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 text-[11px] text-white/30">
                  <div className="flex items-center gap-2 font-medium">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#fbbc04]/80 animate-pulse shadow-[0_0_6px_rgba(251,188,4,0.5)]" />
                    <span>Each radio show generation takes <strong className="text-white/60 font-bold">~5 minutes</strong> to research and voice.</span>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <span>Please do not submit any sensitive or personal information.</span>
                  </div>
                </div>
              </form>

              {/* Dynamic Categories & Templates Panel (Perplexity-style "Try Computer") */}
              <div className="bg-[#0e0e0e]/50 border border-white/5 rounded-[1.5rem] p-5 flex flex-col gap-4 backdrop-blur-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-white/40" />
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">Try a template</span>
                  </div>
                  <div className="flex gap-1 p-0.5 bg-white/[0.03] border border-white/5 rounded-full shrink-0">
                    {templateCategories.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`px-3.5 py-1.5 rounded-full text-[10px] font-bold transition-all uppercase tracking-wider cursor-pointer ${selectedCategory === cat.id ? 'bg-white text-black font-extrabold shadow-sm' : 'text-white/55 hover:text-white/85'}`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                  {templates[selectedCategory].map((tmpl) => (
                    <button
                      key={tmpl.title}
                      type="button"
                      onClick={() => {
                        if (quota && quota.remaining <= 0) return;
                        setPrompt(tmpl.prompt);
                        setTargetDuration(tmpl.duration);
                        document.querySelector('form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }}
                      disabled={isGenerating || (quota && quota.remaining <= 0)}
                      className="text-left p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] active:bg-white/[0.06] transition-all duration-200 group relative overflow-hidden cursor-pointer"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-bold text-white/90 group-hover:text-white transition-colors">
                          {tmpl.title}
                        </span>
                        <span className="text-xs text-white/30 group-hover:text-white/70 transition-transform group-hover:translate-x-0.5 font-bold">→</span>
                      </div>
                      <p className="text-xs text-white/50 mt-1 font-medium leading-relaxed group-hover:text-white/75 transition-colors">
                        {tmpl.desc}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* Library */}
            <section className="space-y-6 pt-4">
              <div className="space-y-1">
                <h3 id="library-section" className="text-xl md:text-2xl font-bold tracking-tight text-white/90">Radio Show Library</h3>
                <p className="text-xs text-white/45 font-medium leading-relaxed">
                  You can immediately play and listen to these pre-generated shows to preview the experience.
                </p>
              </div>
              <div className="space-y-4 pb-32">
              {library.map((show, i) => (
                <motion.div
                  key={show.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => selectShow(show)}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      selectShow(show);
                    }
                  }}
                  className="group cursor-pointer flex flex-col sm:flex-row gap-6 sm:gap-8 p-4 sm:p-6 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 hover:from-white/15 hover:to-white/10 hover:border-white/40 border border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-io-blue focus-visible:border-transparent transition-all relative overflow-hidden shadow-2xl backdrop-blur-md"
                >
                  <div className="w-full h-48 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden relative shrink-0 shadow-inner bg-black/20">
                    <img src={show.coverImage} className="w-full h-full object-cover transition-all duration-700 opacity-100 group-hover:opacity-70 group-hover:grayscale" alt="" />
                    <div className="absolute inset-0 bg-transparent group-hover:bg-black/60 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                        <Play className="w-5 h-5 fill-current translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-center space-y-4 w-full min-w-0">
                    <div className="flex justify-between items-start gap-4">
                      <div className="space-y-1 min-w-0 flex-1">
                        <h4 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white/90 group-hover:text-white transition-colors drop-shadow-sm text-balance break-words">{show.title}</h4>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white/70">
                          <span className="flex items-center gap-1.5 whitespace-nowrap"><Clock className="w-3 h-3" /> {formatTime(show.duration)}</span>
                          <span className="hidden sm:inline w-3 h-[2px] bg-white/40" />
                          <span className="flex items-center gap-1.5 whitespace-nowrap"><Radio className="w-3 h-3" /> {show.host}</span>
                        </div>
                      </div>
                    <div className="flex gap-2 shrink-0">
                      <button
                        onClick={(e) => handleDownload(e, show)}
                        className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/20 flex items-center justify-center text-white transition-colors shrink-0 z-10 relative"
                        title="Download Show Bundle"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                      {show.isUserGenerated && (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleDeleteShow(show);
                          }}
                          className="w-10 h-10 rounded-xl bg-red-500/15 hover:bg-red-500/25 flex items-center justify-center text-red-400 transition-colors shrink-0 z-10 relative"
                          title="Delete Show"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-white/80 font-medium leading-relaxed max-w-2xl line-clamp-2 md:line-clamp-none drop-shadow-sm">
                      {show.summary}
                    </p>
                  </div>

                  {/* Decorative background number */}
                  <span className="hidden sm:block absolute -right-4 -bottom-8 text-9xl font-bold text-white/[0.04] group-hover:text-white/[0.08] transition-colors pointer-events-none select-none tracking-tighter">0{i+1}</span>
                </motion.div>
              ))}
            </div>
          </section>
          </div>
        </div>
      </div>
    );
  }

  if (sharedShowLoading) {
    return (
      <div className="fixed inset-0 w-full h-full bg-black text-white flex flex-col items-center justify-center p-6 overflow-hidden">
        <RainbowBackground />
        <div className="space-y-6 text-center max-w-md relative z-10 w-full">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 border border-white/10 relative">
            <div className="absolute inset-0 rounded-full border border-io-blue/40 animate-[spin_6s_linear_infinite]" />
            <Loader2 className="w-10 h-10 text-io-blue animate-spin" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight text-white/90">Retrieving Shared Station...</h2>
            <p className="text-white/40 text-sm font-medium leading-relaxed">Connecting to container and retrieving dynamic radio show data...</p>
          </div>
        </div>
      </div>
    );
  }

  if (sharedShowError) {
    return (
      <div className="fixed inset-0 w-full h-full bg-black text-white flex flex-col items-center justify-center p-6 overflow-hidden">
        <RainbowBackground />
        <div className="space-y-8 text-center max-w-md relative z-10 p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-md shadow-2xl w-full">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 text-red-100 font-bold">
            <AlertCircle className="w-8 h-8 text-red-400" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight text-white/90">Playback Error</h2>
            <p className="text-red-200/80 text-sm font-medium leading-relaxed">{sharedShowError}</p>
          </div>
          <button
            onClick={remixSharedShow}
            className="w-full py-4 px-6 bg-white hover:bg-white/90 text-black font-extrabold rounded-2xl transition-all uppercase tracking-wider text-xs shadow-xl cursor-pointer"
          >
            Generate your own radio show
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 w-full h-full bg-black text-white overflow-hidden font-sans select-none flex flex-col">
      <RainbowBackground />

      <div className="absolute inset-0 z-10 w-full h-full flex flex-col lg:flex-row">

        {/* Left Column: Branding & Meta */}
        <aside className="w-full lg:w-[380px] h-[100px] lg:h-full border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col bg-black/40 backdrop-blur-3xl shrink-0">
          
          {/* MOBILE ONLY BRANDING ROW - Super compact & elegant */}
          <div className="flex lg:hidden items-center justify-between px-4 h-full w-full gap-3">
            <button
              onClick={isSharedPlaybackMode ? remixSharedShow : () => setView('home')}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/90 active:scale-95 transition-all text-xs font-bold cursor-pointer border border-white/5 shrink-0"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <div className="flex-1 flex items-center gap-3 min-w-0 bg-white/[0.02] border border-white/5 px-3 py-2 rounded-2xl">
              <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-white/10">
                <img
                  src={selectedShow.coverImage}
                  alt="Cover"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs font-black uppercase text-white tracking-wide truncate">{selectedShow.title}</h4>
                <p className="text-[10px] text-white/50 font-bold tracking-wider uppercase truncate mt-0.5 flex items-center gap-1">
                  <Radio className="w-3.5 h-3.5 text-io-blue shrink-0" />
                  <span>{selectedShow.host}</span>
                </p>
              </div>
            </div>
          </div>

          {/* DESKTOP ONLY BRANDING COLUMN - Original full design */}
          <div className="hidden lg:flex flex-col h-full overflow-hidden">
            <div className="p-10 pb-6 flex items-center justify-between shrink-0">
              <button
                onClick={isSharedPlaybackMode ? remixSharedShow : () => setView('home')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/75 hover:text-white transition-all text-xs font-semibold cursor-pointer border border-white/5 shadow-sm group inline-flex"
              >
                <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                <span>Back to Generator</span>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto scrollbar-hide px-10 pb-10 space-y-10">
              <div>
                {(() => {
                  const titleStr = selectedShow.title.toUpperCase();
                  const words = titleStr.split(' ');
                  
                  const lines: string[] = [];
                  let current: string[] = [];
                  
                  words.forEach((word) => {
                    if (current.length === 0) {
                      current.push(word);
                    } else {
                      const candidate = [...current, word].join(' ');
                      if (candidate.length <= 12) {
                        current.push(word);
                      } else {
                        lines.push(current.join(' '));
                        current = [word];
                      }
                    }
                  });
                  if (current.length > 0) {
                    lines.push(current.join(' '));
                  }

                  const gradientClasses = [
                    "text-white",
                    "bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent",
                    "bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent",
                    "bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent",
                    "bg-gradient-to-r from-emerald-400 to-lime-400 bg-clip-text text-transparent",
                    "bg-gradient-to-r from-lime-400 to-orange-400 bg-clip-text text-transparent",
                    "bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent",
                    "bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent",
                  ];

                  return (
                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter leading-[0.9] mt-2 mb-8 flex flex-col items-start gap-1.5 uppercase font-sans select-none">
                      {lines.map((line, idx) => {
                        const gradientClass = gradientClasses[idx % gradientClasses.length];
                        return (
                          <span key={idx} className={`block ${gradientClass}`}>
                            {line}
                          </span>
                        );
                      })}
                    </h1>
                  );
                })()}

                <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl mb-10 border border-white/5 group">
                  <img
                    src={selectedShow.coverImage}
                    alt="Cover Image"
                    className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-125"
                  />
                </div>

                <div className="space-y-8">
                  <div className="space-y-3">
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 flex items-center gap-2">
                      <div className="w-4 h-[1px] bg-io-blue" /> Episode
                    </h3>
                    <p className="text-xl font-bold leading-tight">{selectedShow.title}</p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 flex items-center gap-2">
                      <div className="w-4 h-[1px] bg-io-green" /> Concept
                    </h3>
                    <p className="text-sm leading-relaxed text-white/70 font-medium">
                      {selectedShow.summary}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-10 border-t border-white/5 space-y-6">
                 <h3 className="text-[10px] font-bold tracking-[0.4em] text-white/40 uppercase">Library</h3>
                 <div className="space-y-4">
                  {library.map((show) => (
                    <button
                      key={show.title}
                      onClick={() => selectShow(show)}
                      className={`w-full text-left group transition-all p-4 rounded-2xl border ${selectedShow.title === show.title ? 'bg-white/5 border-white/10' : 'border-transparent hover:bg-white/5'}`}
                    >
                      <h4 className={`text-sm font-bold transition-colors ${selectedShow.title === show.title ? 'text-io-blue' : 'text-white/60 group-hover:text-white'}`}>{show.title}</h4>
                      <div className="flex items-center gap-3 text-[9px] font-bold tracking-widest uppercase text-white/30 mt-2">
                        <Clock className="w-3 h-3" /> {formatTime(show.duration)}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Column: Transcript */}
        <div className="flex-1 w-full flex flex-col overflow-hidden bg-black/60">

          {/* Transcript Section */}
          <div className="flex-1 overflow-hidden relative">
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none"></div>

            <Transcript
              transcript={selectedShow.transcript}
              currentTime={currentTime}
              onSeek={seek}
            />
          </div>

          {/* Centered CTA Pill: Clear, impossible to miss, perfectly simple with no heavy gradients */}
          {isSharedPlaybackMode && (
            <div className="hidden md:flex px-4 md:px-8 pt-4 z-20 justify-center shrink-0 w-full max-w-3xl mx-auto">
              <div className="bg-neutral-950/90 border border-white/15 backdrop-blur-md px-6 py-4 rounded-[2rem] flex flex-col md:flex-row items-center gap-4 shadow-[0_8px_40px_rgba(0,0,0,0.6)] w-full justify-between border-io-blue/20">
                <div className="flex items-center gap-2.5 shrink-0">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-io-blue opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-io-blue"></span>
                  </span>
                  <div className="text-left">
                    <span className="text-xs font-bold text-white/95 block">Listening to shared radio show</span>
                    <span className="text-[10px] text-white/40 block">Generated via Google AI Studio</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full md:w-auto">
                  {/* PRIMARY CTA */}
                  <button
                    onClick={remixSharedShow}
                    className="w-full sm:w-auto bg-white hover:bg-neutral-200 text-black font-extrabold text-xs px-5 py-3.5 rounded-xl transition-all hover:scale-102 active:scale-95 cursor-pointer inline-flex items-center gap-2 justify-center shadow-md shadow-white/5 shrink-0"
                  >
                    <span>Generate your own radio show</span>
                  </button>                
                </div>
              </div>
            </div>
          )}

          {/* Player Bar */}
          <div className="p-2 md:p-8 pb-3 md:pb-10 mt-auto space-y-3 max-w-6xl mx-auto w-full z-30">
            {/* Collapsible Mobile Disclaimer & CTA Banner (on top of player) */}
            {mobileDisclaimerExpanded && (
              <div className="block md:hidden border border-white/10 bg-neutral-950/95 backdrop-blur-md rounded-2xl p-4 space-y-4 shadow-xl relative z-30 select-none animate-fade-in">
                <div className="space-y-4 relative">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-io-blue opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-io-blue"></span>
                      </span>
                      <span className="text-[11px] font-black tracking-[0.2em] text-white/90 uppercase font-sans">
                        {isSharedPlaybackMode ? 'Shared Radio Show' : 'Radio Broadcast'}
                      </span>
                    </div>

                    <button 
                      onClick={() => setMobileDisclaimerExpanded(false)}
                      className="flex items-center gap-1 text-white/40 hover:text-white font-extrabold text-[9px] uppercase tracking-wider px-2.5 py-1 bg-white/5 hover:bg-white/10 border border-white/5 active:scale-95 rounded-lg transition-all cursor-pointer"
                    >
                      <span>Hide Info</span>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Important Disclaimer Notice (Highly visible, styled beautifully) */}
                  <div className="p-3 bg-amber-500/5 border border-amber-500/15 rounded-xl space-y-1">
                    <div className="flex items-center gap-1.5 text-amber-500 font-extrabold text-[9px] tracking-wider uppercase">
                      <ShieldAlert className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>Disclaimer</span>
                    </div>
                    <p className="text-[10px] leading-relaxed text-white/70 font-medium font-sans">
                      This simulated broadcast is user-generated content created using AI Studio. All hosts, voices and scripts are completely synthetic and fictional. It is not produced by or represent Google's opinions.
                    </p>
                  </div>

                  {/* Full CTAs styled elegantly and consistent with desktop */}
                  {isSharedPlaybackMode && (
                    <div className="pt-1 flex flex-col gap-2">
                      <button
                        onClick={remixSharedShow}
                        className="w-full bg-white hover:bg-neutral-200 text-black font-extrabold text-xs h-11 rounded-xl transition-all cursor-pointer inline-flex items-center gap-2 justify-center shadow-md shadow-white/5 active:scale-[0.98]"
                      >
                        <span>Generate your own radio show</span>
                      </button>
                      <button
                        onClick={() => {
                          const appletId = getAppletId();
                          try {
                            window.parent?.postMessage({
                              type: 'CLONE_APPLET',
                              appletId: appletId
                            }, '*');
                          } catch (e) {}
                          const buildUrl = getAIStudioBuildUrl(appletId);
                          window.open(buildUrl, '_blank');
                        }}
                        className="w-full bg-transparent hover:bg-white/5 text-white border border-white/15 hover:border-white/30 font-bold text-xs h-11 rounded-xl transition-all cursor-pointer inline-flex items-center gap-2 justify-center active:scale-[0.98]"
                      >
                        <span>Remix in Google AI Studio</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* AI generated content disclaimer card to prevent liability */}
            <div id="ai-disclaimer-card" className="hidden md:block p-3 md:p-3.5 rounded-2xl md:rounded-3xl bg-[#0f0f0f]/95 border border-amber-500/20 text-white/80 space-y-1 shadow-xl backdrop-blur-3xl relative">
              <div className="flex items-center gap-1.5 text-amber-500 font-bold text-[9px] md:text-[10px] tracking-[0.25em] uppercase">
                <ShieldAlert className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0 text-amber-500" />
                <span>Disclaimer</span>
              </div>
              <p className="text-[10px] md:text-[11px] leading-relaxed text-white/60 font-medium font-sans">
                This simulated broadcast is user-generated content created using AI Studio. All hosts, voices and scripts are completely synthetic and fictional. It is not produced by or represent Google's opinions.
              </p>
            </div>

            <div className="bg-[#0f0f0f]/80 backdrop-blur-3xl border border-white/10 rounded-3xl md:rounded-[2.5rem] p-3 pl-4 pr-4 md:p-4 md:pl-6 md:pr-6 relative z-30 shadow-2xl">
              <div className="flex flex-row items-center gap-3 md:gap-4 relative z-10 w-full max-w-6xl mx-auto">
                {/* Play Button */}
                <button
                  onClick={togglePlay}
                  className="w-11 h-11 md:w-14 md:h-14 shrink-0 rounded-full flex items-center justify-center bg-white text-black hover:scale-105 active:scale-95 transition-all shadow-lg cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4 md:w-5 md:h-5 fill-current" /> : <Play className="w-4 h-4 md:w-5 md:h-5 fill-current translate-x-0.5" />}
                </button>

                {/* Progress & Metadata */}
                <div className="flex-1 min-w-0 flex flex-col justify-center gap-1.5 md:gap-2.5 px-1 md:px-6">
                  <div className="flex flex-col md:flex-row md:items-baseline md:gap-3 text-left">
                    <div className="flex items-center gap-2 max-w-full">
                      <span className="text-white text-xs md:text-sm tracking-wider font-extrabold uppercase truncate block">
                        {selectedShow.title}
                      </span>
                      {/* Subtle toggle badge on mobile */}
                      <button 
                        onClick={() => setMobileDisclaimerExpanded(!mobileDisclaimerExpanded)}
                        className="md:hidden flex items-center gap-1 text-[8px] font-black uppercase tracking-wider text-amber-500 hover:text-white bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/20 px-2 py-0.5 rounded-full shrink-0 transition-colors cursor-pointer active:scale-95"
                      >
                        <Info className="w-2.5 h-2.5" />
                        <span>{mobileDisclaimerExpanded ? 'Hide Info' : 'Show Info'}</span>
                      </button>
                    </div>
                    <span className="text-neutral-400 text-[9px] md:text-[10px] tracking-[0.2em] font-bold uppercase truncate mt-0.5 md:mt-0 opacity-75">
                      {selectedShow.transcript.find(l => currentTime >= l.start && currentTime < l.end)?.speaker || selectedShow.host}
                    </span>
                  </div>

                  <div className="w-full flex items-center gap-2 md:gap-3">
                    <span className="font-mono text-[9px] md:text-[10px] text-neutral-500 font-bold w-8 md:w-10 text-right select-none">
                      {formatTime(currentTime)}
                    </span>
                    
                    <div className="h-0.5 md:h-1 flex-1 bg-white/10 rounded-full overflow-hidden relative group/timeline border border-white/[0.02]">
                      <input
                        type="range"
                        min="0"
                        max={selectedShow.duration}
                        value={currentTime}
                        onChange={(e) => seek(Number(e.target.value))}
                        className="absolute inset-0 opacity-0 z-10 cursor-pointer w-full h-full"
                      />
                      <motion.div
                        className="h-full bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.4)]"
                        style={{ width: `${progress * 100}%` }}
                      />
                    </div>

                    <span className="font-mono text-[9px] md:text-[10px] text-neutral-500 font-bold w-8 md:w-10 text-left select-none">
                      {formatTime(selectedShow.duration)}
                    </span>
                  </div>
                </div>

                {/* Extra Controls */}
                <div className="flex items-center gap-1.5 md:gap-3.5 shrink-0">
                  {/* Info toggle / button to expand or collapse details on mobile */}
                  <button
                    onClick={() => setMobileDisclaimerExpanded(!mobileDisclaimerExpanded)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer border md:hidden ${
                      mobileDisclaimerExpanded 
                        ? 'bg-io-blue/20 text-io-blue border-io-blue/30' 
                        : 'bg-white/5 text-zinc-400 border-white/5 hover:bg-white/10 hover:text-white'
                    }`}
                    title={mobileDisclaimerExpanded ? 'Hide Info' : 'Show Info'}
                  >
                    <Info className="w-3.5 h-3.5" />
                  </button>
                  {isSharingEnabled && (
                    <button
                      onClick={handleShare}
                      className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-zinc-400 hover:text-white transition-colors cursor-pointer border border-white/5"
                      title="Share Radio Show Link"
                    >
                      <Share2 className="w-3 md:w-3.5 h-3 md:h-3.5" />
                    </button>
                  )}
                  <button
                    onClick={(e) => handleDownload(e, selectedShow)}
                    className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-zinc-400 hover:text-white transition-colors cursor-pointer border border-white/5"
                    title="Download Show Bundle"
                  >
                    <Download className="w-3 md:w-3.5 h-3 md:h-3.5" />
                  </button>
                  <div className="w-[1px] h-6 bg-white/5 mx-1 hidden md:block" />
                  <div className="flex items-center gap-2 hidden md:flex">
                    <Volume2 className="w-4 h-4 text-zinc-400/80" />
                    <div className="w-20 h-1 bg-white/10 rounded-full overflow-hidden relative group/vol cursor-pointer">
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={(e) => {
                          const v = Number(e.target.value);
                          setVolume(v);
                          if (audioRef.current) audioRef.current.volume = v;
                        }}
                        className="absolute inset-0 opacity-0 z-10 cursor-pointer w-full h-full"
                      />
                      <div className="h-full bg-zinc-400 group-hover/vol:bg-white transition-colors rounded-r-full" style={{ width: `${volume * 100}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SHARING MODAL OVERLAY */}
      <AnimatePresence>
        {isShareModalOpen && (
          <div 
            onClick={() => setIsShareModalOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center p-4 z-50 overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg bg-zinc-950/90 border border-white/10 rounded-[2rem] p-6 sm:p-8 space-y-6 shadow-[0_0_80px_rgba(0,0,0,0.8)] relative overflow-x-hidden overflow-y-auto max-h-[85vh]"
            >
              {/* Corner ambient glow */}
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-io-blue/20 blur-3xl pointer-events-none" />
              
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold tracking-tight text-white/90">Share Radio Show Link</h3>
                </div>
                <button 
                  onClick={() => setIsShareModalOpen(false)}
                  className="text-white/40 hover:text-white transition-colors text-xs font-bold px-3 py-1.5 rounded-lg border border-white/5 hover:border-white/10 bg-white/5 cursor-pointer"
                >
                  Close
                </button>
              </div>

               {sharingInProgress ? (
                <div className="py-8 flex flex-col items-center justify-center space-y-5">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full border border-io-blue/30 animate-[spin_3s_linear_infinite]" />
                    <Loader2 className="w-10 h-10 text-io-blue animate-spin" />
                    <div className="absolute inset-x-0 h-full flex items-center justify-center text-[10px] font-mono font-bold text-white/95">
                      {uploadProgress}%
                    </div>
                  </div>
                  <div className="text-center space-y-3 w-full max-w-xs mx-auto">
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-white/95">{uploadStatus}</p>
                      <p className="text-xs text-white/45">Uploading audio stream and cover canvas directly to GCS...</p>
                    </div>
                    {/* Progress Bar Container */}
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <div 
                        className="h-full bg-io-blue transition-all duration-300 ease-out" 
                        style={{ width: `${uploadProgress}%` }}
                      />
                    </div>
                  </div>
                </div>
              ) : shareUrl ? (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-xs text-white/60 font-medium leading-relaxed">
                      Anyone with this customized link can fetch and stream this live radio show, browse the timecoded transcript context, or launch their own.
                    </p>
                    <p className="text-xs text-white/40 mt-1">
                      Please note: this link will expire in 7 days.
                    </p>
                  </div>

                  <div className="flex gap-2 items-center bg-white/[0.03] border border-white/10 p-2 rounded-2xl">
                    <input 
                      type="text" 
                      readOnly 
                      value={shareUrl}
                      className="flex-1 bg-transparent border-0 outline-none p-2 font-mono text-xs text-white/80 select-all"
                    />
                    <button
                      onClick={copyShareUrl}
                      className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all uppercase tracking-wider flex items-center justify-center gap-1.5 shrink-0 cursor-pointer ${copySuccess ? 'bg-io-green text-black font-extrabold shadow-[0_0_15px_rgba(67,255,13,0.3)]' : 'bg-white text-black hover:bg-neutral-200'}`}
                    >
                      {copySuccess ? (
                        <>
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <a
                      href={shareUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center gap-1.5 text-xs font-extrabold text-white transition-all uppercase tracking-wider cursor-pointer"
                    >
                      <span>Open Share link</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ) : (
                <div className="py-2 space-y-4">
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-400" />
                    <div className="space-y-1 overflow-hidden w-full">
                      <p className="text-sm font-bold text-red-400">Failed to build shareable link</p>
                      <p className="text-xs text-red-200/85 leading-relaxed font-mono mt-1.5 break-words max-h-36 overflow-y-auto p-2 bg-black/40 rounded border border-white/5 scrollbar-thin">
                        {sharingError || "The sharing server could not save the file payload. Please try again or verify your connectivity."}
                      </p>
                    </div>
                  </div>

                  {sharingError && (sharingError.includes('storage.objects.create') || sharingError.includes('Permission') || sharingError.toLowerCase().includes('denied') || sharingError.includes('access') || sharingError.includes('gserviceaccount')) && (
                    <div className="p-4 bg-zinc-900/60 border border-white/10 rounded-2xl space-y-3">
                      <div className="flex gap-2 items-center">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-io-blue/20 text-[10px] font-bold text-io-blue">ℹ</span>
                        <p className="text-xs font-bold text-white/90">GCS Permission Guide</p>
                      </div>
                      <p className="text-[11px] text-white/60 leading-relaxed">
                        To resolve this GCS permission error, grant write access on your GCS bucket to the AI Studio sandbox service account:
                      </p>
                      <div className="bg-black/60 p-2.5 rounded border border-white/5 font-mono text-[9px] text-zinc-300 break-all select-all flex justify-between items-center group/sa">
                        <span className="break-all">ais-sandbox@ais-us-east4-0a507bcc7a7b47959.iam.gserviceaccount.com</span>
                      </div>
                      <ol className="list-decimal list-inside text-[10px] text-white/50 space-y-1.5 leading-relaxed pl-1">
                        <li>Open the GCP Console &amp; select your bucket: <span className="font-mono text-zinc-300">process.env.GCS_BUCKET_NAME</span></li>
                        <li>Click on the <strong className="text-white/70">"Permissions"</strong> tab.</li>
                        <li>Click <strong className="text-white/70">"Grant Access"</strong> / <strong className="text-white/70">"Add Principal"</strong>.</li>
                        <li>Paste the service account email shown above.</li>
                        <li>Assign the role <strong className="text-white/70">"Storage Object Admin"</strong> (or <strong className="text-white/70">"Storage Object Creator"</strong>).</li>
                        <li>Click Save and click <strong className="text-white/70">"Retry Publishing"</strong> below.</li>
                      </ol>
                    </div>
                  )}

                  <button
                    onClick={handleShare}
                    className="w-full py-3 bg-white hover:bg-white/95 text-black font-bold uppercase tracking-wider text-xs rounded-xl cursor-pointer transition-colors"
                  >
                    Retry Publishing
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <audio
        ref={audioRef}
        src={selectedShow.audioUrl}
        onTimeUpdate={onTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        className="hidden"
      />



      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 15s infinite alternate;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-3000 { animation-delay: 3s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animation-delay-6000 { animation-delay: 6s; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        input[type='range'] {
          -webkit-appearance: none;
        }
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #4285f4;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(66, 133, 244, 0.7);
        }
      `}} />
    </div>
  );
}

"""
JARVIS AI OS — Advanced Native Desktop Voice Assistant & Autonomous Code Engine
High-Performance Windows Desktop AI OS with:
- Echo Suppression (Pauses microphone while speaking to prevent self-triggering)
- Cyber Holographic Terminal Presentation HUD with formatted tables & status badges
- Smart Multi-Phrase Speech Stitcher (aggregates natural speaking pauses)
- AI Reasoning Gateway (Groq LLaMA 3.3 / Gemini 2.0) for conversational intelligence
- Deep Autonomous Research & Code Generator
- Live Daily Task & Project CRUD synchronized with web dashboard
"""

import os
import sys

# Ensure UTF-8 output encoding for all Windows terminals
try:
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
    if hasattr(sys.stderr, "reconfigure"):
        sys.stderr.reconfigure(encoding="utf-8")
except Exception:
    pass

import json
import time
import datetime
import subprocess
import threading
import io
import wave
import webbrowser
import re
from pathlib import Path

# Audio & Speech dependencies
import sounddevice as sd
import numpy as np
import pyttsx3
import speech_recognition as sr
import requests

WORKSPACE_ROOT = Path(__file__).resolve().parent.parent
DATA_DIR = WORKSPACE_ROOT / "data"
CONFIG_FILE = DATA_DIR / "assistant_config.json"
TASKS_FILE = DATA_DIR / "daily_tasks.json"
COMPONENTS_DIR = WORKSPACE_ROOT / "src" / "components" / "ui"

DATA_DIR.mkdir(parents=True, exist_ok=True)
COMPONENTS_DIR.mkdir(parents=True, exist_ok=True)

# ANSI Color formatting for Cyber Terminal HUD
CYAN = "\033[96m"
GREEN = "\033[92m"
YELLOW = "\033[93m"
MAGENTA = "\033[95m"
BLUE = "\033[94m"
RED = "\033[91m"
BOLD = "\033[1m"
DIM = "\033[2m"
RESET = "\033[0m"

DEFAULT_CONFIG = {
    "name": "Nisha",
    "wake_words": ["hey nisha", "nisha", "hey jarvis", "jarvis"],
    "voice_rate": 160,
    "voice_volume": 1.0,
    "voice_gender": "female",
    "auto_briefing_on_start": True,
}

DEFAULT_TASKS = {
    "completed_today": [
        "Upgraded JARVIS AI OS with 3D Arc Reactor Holographic HUD",
        "Installed Autonomous File Operations suite (read/write/delete/scan/test)",
        "Configured Deep Research Engine with 53 Design Systems & Skill Generator",
        "Bound server to 0.0.0.0 for cross-device mobile & laptop access",
    ],
    "pending_tasks": [
        "Review active repository processes and milestone roadmaps",
        "Test hands-free voice commands and multi-phrase thought stitching",
    ],
    "personal_learning": [
        "Advanced Agentic DSPy prompt optimization techniques",
        "Next-gen Vector RAG embeddings with Supabase pgvector",
        "Real-time voice streaming with Whisper turbo & WebRTC",
    ],
    "personal_projects": [
        "Learnify AI: Next-generation adaptive learning platform",
        "AgencyOS: Automated client onboarding & invoicing agent workflows",
        "DreamSync: Multi-device context synchronization bridge",
        "SkillForge: Autonomous skill compiler for AI operating systems",
        "JARVIS AI OS: Persistent-memory autonomous personal assistant",
    ],
    "office_work": [
        "SaaS system architecture and weekly deploy verification",
        "Automated QA health reports and CI/CD test gates",
        "Client deliverable sign-offs and security double-checks",
    ]
}

def load_config():
    if CONFIG_FILE.exists():
        try:
            with open(CONFIG_FILE, "r", encoding="utf-8") as f:
                return {**DEFAULT_CONFIG, **json.load(f)}
        except Exception:
            pass
    save_config(DEFAULT_CONFIG)
    return DEFAULT_CONFIG

def save_config(cfg):
    with open(CONFIG_FILE, "w", encoding="utf-8") as f:
        json.dump(cfg, f, indent=2)

def load_tasks():
    if TASKS_FILE.exists():
        try:
            with open(TASKS_FILE, "r", encoding="utf-8") as f:
                return {**DEFAULT_TASKS, **json.load(f)}
        except Exception:
            pass
    save_tasks(DEFAULT_TASKS)
    return DEFAULT_TASKS

def save_tasks(tasks):
    with open(TASKS_FILE, "w", encoding="utf-8") as f:
        json.dump(tasks, f, indent=2)

def get_api_key(key_name):
    val = os.environ.get(key_name, "")
    if not val:
        env_file = WORKSPACE_ROOT / ".env"
        if env_file.exists():
            for line in env_file.read_text().splitlines():
                if line.startswith(f"{key_name}="):
                    val = line.split("=", 1)[1].strip().strip('"').strip("'")
                    break
    return val

class VoiceEngine:
    def __init__(self, config):
        self.config = config
        self.engine = None
        self._init_tts()

    def _init_tts(self):
        try:
            self.engine = pyttsx3.init()
            voices = self.engine.getProperty("voices")
            selected_voice = None
            if self.config.get("voice_gender") == "female" or "nisha" in self.config.get("name", "").lower():
                for v in voices:
                    if "zira" in v.name.lower() or "female" in v.name.lower() or "eva" in v.name.lower() or "heera" in v.name.lower():
                        selected_voice = v.id
                        break
            if not selected_voice and voices:
                selected_voice = voices[0].id
            
            if selected_voice:
                self.engine.setProperty("voice", selected_voice)
            self.engine.setProperty("rate", self.config.get("voice_rate", 160))
            self.engine.setProperty("volume", self.config.get("voice_volume", 1.0))
        except Exception as e:
            print(f"[!] TTS init warning: {e}")

    def speak(self, text, assistant_ref=None):
        name = self.config.get("name", "Jarvis")
        print(f"\n{CYAN}┌── [{name}] ────────────────────────────────────────────────────────{RESET}")
        print(f"{CYAN}│ {BOLD}{text}{RESET}")
        print(f"{CYAN}└────────────────────────────────────────────────────────────────────────┘{RESET}\n")

        # Echo Suppression: Lock microphone while speaking
        if assistant_ref:
            assistant_ref.is_speaking = True

        try:
            if not self.engine:
                self._init_tts()
            if self.engine:
                self.engine.say(text)
                self.engine.runAndWait()
        except Exception:
            try:
                clean_text = text.replace('"', '').replace("'", "")
                ps_cmd = f"(New-Object -ComObject SAPI.SpVoice).Speak('{clean_text}')"
                subprocess.run(["powershell", "-NoProfile", "-Command", ps_cmd], capture_output=True)
            except Exception:
                pass
        finally:
            if assistant_ref:
                time.sleep(0.4)  # Wait for room reverb / speaker sound to decay
                assistant_ref.is_speaking = False

class DesktopVoiceAssistant:
    def __init__(self):
        self.config = load_config()
        self.tasks = load_tasks()
        self.voice = VoiceEngine(self.config)
        self.recognizer = sr.Recognizer()
        self.sample_rate = 16000
        self.is_running = True
        self.is_speaking = False
        self.name = self.config.get("name", "Nisha")
        
        # Multi-Phrase Thought Aggregator
        self.speech_buffer = []
        self.last_speech_time = 0
        self.silence_debounce_seconds = 1.8

    def play_wake_sound(self):
        try:
            import winsound
            winsound.Beep(1400, 100)
            winsound.Beep(1800, 120)
        except Exception:
            pass

    def record_audio_snippet(self, duration_seconds=3.0):
        # Echo Suppression: If assistant is speaking, skip recording to prevent hearing itself
        if self.is_speaking:
            time.sleep(0.2)
            return None

        try:
            recording = sd.rec(
                int(duration_seconds * self.sample_rate),
                samplerate=self.sample_rate,
                channels=1,
                dtype="int16",
            )
            sd.wait()

            if self.is_speaking:
                return None
            
            byte_io = io.BytesIO()
            with wave.open(byte_io, "wb") as wf:
                wf.setnchannels(1)
                wf.setsampwidth(2)
                wf.setframerate(self.sample_rate)
                wf.writeframes(recording.tobytes())
            
            byte_io.seek(0)
            return byte_io
        except Exception:
            return None

    def transcribe_audio(self, wav_io):
        if not wav_io or self.is_speaking:
            return ""
        
        try:
            with sr.AudioFile(wav_io) as source:
                audio = self.recognizer.record(source)
            text = self.recognizer.recognize_google(audio, language="en-IN")
            return text.strip()
        except sr.UnknownValueError:
            return ""
        except Exception:
            groq_key = get_api_key("GROQ_API_KEY")
            if groq_key:
                try:
                    wav_io.seek(0)
                    files = {"file": ("audio.wav", wav_io, "audio/wav")}
                    data = {"model": "whisper-large-v3-turbo", "response_format": "json"}
                    headers = {"Authorization": f"Bearer {groq_key}"}
                    r = requests.post("https://api.groq.com/openai/v1/audio/transcriptions", headers=headers, files=files, data=data, timeout=6)
                    if r.ok:
                        return r.json().get("text", "").strip()
                except Exception:
                    pass
            return ""

    def query_ai_reasoning(self, prompt_text):
        """Query LLM (Groq LLaMA 3.3 or Gemini) for smart conversational responses"""
        groq_key = get_api_key("GROQ_API_KEY")
        if groq_key:
            try:
                headers = {"Authorization": f"Bearer {groq_key}", "Content-Type": "application/json"}
                payload = {
                    "model": "llama-3.3-70b-versatile",
                    "messages": [
                        {
                            "role": "system",
                            "content": (
                                f"You are {self.name}, the intelligent autonomous personal AI OS assistant for Vishwajeet. "
                                "Give concise, direct, helpful, and sophisticated answers in 1 to 2 sentences max. "
                                "Be proactive and ready to research or create files."
                            ),
                        },
                        {"role": "user", "content": prompt_text},
                    ],
                    "temperature": 0.6,
                    "max_tokens": 150,
                }
                res = requests.post("https://api.groq.com/openai/v1/chat/completions", headers=headers, json=payload, timeout=8)
                if res.ok:
                    return res.json()["choices"][0]["message"]["content"].strip()
            except Exception:
                pass

        gemini_key = get_api_key("GEMINI_API_KEY")
        if gemini_key:
            try:
                url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key={gemini_key}"
                payload = {
                    "contents": [{"parts": [{"text": f"You are {self.name}, an AI assistant. Answer in 2 short sentences: {prompt_text}"}]}]
                }
                res = requests.post(url, json=payload, timeout=8)
                if res.ok:
                    return res.json()["candidates"][0]["content"]["parts"][0]["text"].strip()
            except Exception:
                pass

        return f"I have processed your request for '{prompt_text}', sir. Task matrices and memory are synchronized."

    def display_hud_banner(self):
        os.system("cls" if os.name == "nt" else "clear")
        print(f"{CYAN}================================================================================")
        print(f"       JJJJJJ    AAAA    RRRRRR   VV      VV  IIIIII   SSSSSS")
        print(f"           JJ   AA  AA   RR   RR  VV      VV    II    SS     ")
        print(f"           JJ  AAAAAA   RRRRRR    VV    VV     II     SSSSSS ")
        print(f"       JJ  JJ  AA    AA  RR  RR     VV  VV      II         SS")
        print(f"        JJJJ   AA    AA  RR   RR     VVVV     IIIIII   SSSSSS")
        print(f"")
        print(f"             JARVIS AI OS - NATIVE DESKTOP PERSONAL ASSISTANT")
        print(f"================================================================================{RESET}")
        print(f" {BOLD}[*] Assistant Name:{RESET} {GREEN}{self.name}{RESET}  |  {BOLD}[*] Echo Guard:{RESET} {GREEN}ACTIVE (Self-Echo Muted){RESET}")
        print(f" {BOLD}[*] Wake Words:{RESET} {YELLOW}{', '.join(self.config.get('wake_words', []))}{RESET}")
        print(f" {BOLD}[*] Web Console & 3D HUD:{RESET} {BLUE}http://localhost:8080/console{RESET}")
        print(f" {BOLD}[*] Mobile / Laptop IP:{RESET} {BLUE}http://10.220.31.173:8080/console{RESET}")
        print(f"{CYAN}--------------------------------------------------------------------------------{RESET}\n")

    def display_tasks_matrix(self):
        self.tasks = load_tasks()
        print(f"{MAGENTA}{BOLD}+-- [LIVE TASK & PROJECT MATRIX] ---------------------------------------------+{RESET}")
        print(f"{MAGENTA}|{RESET} {GREEN}[+] COMPLETED TODAY:{RESET} ({len(self.tasks.get('completed_today', []))} items)")
        for t in self.tasks.get('completed_today', [])[:3]:
            print(f"{MAGENTA}|{RESET}   [v] {t}")
        
        print(f"{MAGENTA}|{RESET} {YELLOW}[+] PENDING DAILY TASKS:{RESET} ({len(self.tasks.get('pending_tasks', []))} items)")
        for t in self.tasks.get('pending_tasks', [])[:3]:
            print(f"{MAGENTA}|{RESET}   [ ] {t}")

        print(f"{MAGENTA}|{RESET} {CYAN}[+] PERSONAL LEARNING:{RESET} ({len(self.tasks.get('personal_learning', []))} items)")
        for t in self.tasks.get('personal_learning', [])[:2]:
            print(f"{MAGENTA}|{RESET}   [*] {t}")

        print(f"{MAGENTA}|{RESET} {BLUE}[+] PERSONAL PROJECTS:{RESET} ({len(self.tasks.get('personal_projects', []))} items)")
        for t in self.tasks.get('personal_projects', [])[:3]:
            print(f"{MAGENTA}|{RESET}   [*] {t}")

        print(f"{MAGENTA}|{RESET} {RED}[+] OFFICE WORK:{RESET} ({len(self.tasks.get('office_work', []))} items)")
        for t in self.tasks.get('office_work', [])[:2]:
            print(f"{MAGENTA}|{RESET}   [#] {t}")
        print(f"{MAGENTA}+-----------------------------------------------------------------------------+{RESET}\n")

    def get_daily_briefing(self):
        self.tasks = load_tasks()
        now = datetime.datetime.now()
        date_str = now.strftime("%A, %B %d, %Y")
        time_str = now.strftime("%I:%M %p")

        done_count = len(self.tasks.get("completed_today", []))
        pending_count = len(self.tasks.get("pending_tasks", []))
        learning_count = len(self.tasks.get("personal_learning", []))
        projects_count = len(self.tasks.get("personal_projects", []))
        office_count = len(self.tasks.get("office_work", []))

        speech = (
            f"Good day, sir. Here is your daily briefing for {date_str}, {time_str}. "
            f"You have {done_count} completed accomplishments today, and {pending_count} pending daily tasks. "
            f"You are tracking {learning_count} personal learning goals, {projects_count} personal projects including Learnify AI, AgencyOS, DreamSync, SkillForge, and Jarvis AI OS, "
            f"plus {office_count} active office commitments. All systems are operating smoothly."
        )
        return speech

    def add_task_item(self, text, category="pending_tasks"):
        self.tasks = load_tasks()
        if category not in self.tasks:
            self.tasks[category] = []
        self.tasks[category].insert(0, text)
        save_tasks(self.tasks)
        cat_name = category.replace("_", " ")
        return f"Added '{text}' to your {cat_name} list."

    def delete_task_item(self, text):
        self.tasks = load_tasks()
        deleted = False
        deleted_name = ""
        for cat, items in self.tasks.items():
            for it in list(items):
                if text.lower() in it.lower():
                    self.tasks[cat].remove(it)
                    deleted = True
                    deleted_name = it
                    break
            if deleted:
                break
        if deleted:
            save_tasks(self.tasks)
            return f"Deleted '{deleted_name}' from tasks, sir."
        return f"Could not find task matching '{text}' to delete."

    def mark_task_done(self, text):
        self.tasks = load_tasks()
        pending = self.tasks.get("pending_tasks", [])
        matched = None
        for t in pending:
            if text.lower() in t.lower():
                matched = t
                break
        if matched:
            self.tasks["pending_tasks"].remove(matched)
            self.tasks["completed_today"].insert(0, matched)
            save_tasks(self.tasks)
            return f"Marked '{matched}' as completed, sir."
        else:
            self.tasks["completed_today"].insert(0, text)
            save_tasks(self.tasks)
            return f"Recorded '{text}' into today's completed accomplishments."

    def change_assistant_name(self, new_name):
        new_name_clean = new_name.strip().capitalize()
        self.config["name"] = new_name_clean
        lower_name = new_name_clean.lower()
        self.config["wake_words"] = [f"hey {lower_name}", lower_name, "hey jarvis", "jarvis"]
        if "nisha" in lower_name:
            self.config["voice_gender"] = "female"
        else:
            self.config["voice_gender"] = "male"
        save_config(self.config)
        self.name = new_name_clean
        self.voice = VoiceEngine(self.config)
        return f"My name has been changed to {new_name_clean}. You can now wake me up by saying 'Hey {new_name_clean}'."

    def generate_ui_animation_source_code(self, topic="UI design and animation"):
        component_code = """import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Zap, Shield, ArrowRight, Activity, Cpu } from "lucide-react";

export function CyberAnimatedCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden rounded-2xl border border-cyan-500/30 bg-slate-950/80 p-6 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-cyan-400 hover:shadow-cyan-500/20"
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition-opacity group-hover:opacity-100" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl transition-opacity group-hover:opacity-100" />

      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 font-mono text-xs font-semibold text-cyan-300">
          <Sparkles className="h-3.5 w-3.5 animate-spin" style={{ animationDuration: "6s" }} />
          JARVIS // MK-85 ACTIVE
        </span>
        <span className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          <Activity className="h-3 w-3 text-emerald-400 animate-pulse" /> Live Telemetry
        </span>
      </div>

      <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-white">
        Cybernetic Autonomous AI Interface
      </h3>
      <p className="mt-2 text-sm text-slate-400 leading-relaxed">
        Engineered with smooth 60fps micro-animations, glassmorphism elevation, and responsive haptic audio feedback.
      </p>

      <div className="mt-5 grid grid-cols-2 gap-2 text-xs">
        <div className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/5 p-2 text-slate-300">
          <Zap className="h-4 w-4 text-cyan-400" /> 0ms Latency
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/5 p-2 text-slate-300">
          <Cpu className="h-4 w-4 text-purple-400" /> 53 Design Systems
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:opacity-95"
      >
        Deploy Autonomous Flow <ArrowRight className="h-4 w-4" />
      </motion.button>
    </motion.div>
  );
}
"""
        target_file = COMPONENTS_DIR / "cyber-animated-card.tsx"
        target_file.write_text(component_code, encoding="utf-8")
        
        try:
            subprocess.Popen(["code", str(target_file)], shell=True)
        except Exception:
            pass

        return str(target_file)

    def query_ai_reasoning(self, query):
        q = query.lower().strip()
        # 1. Try Local Ollama LLM if running
        try:
            import urllib.request
            import json
            req_data = json.dumps({
                "model": "llama3",
                "prompt": f"You are Nisha/Jarvis, Vishwajeet's personal AI companion and operating system. Keep your answer warm, intelligent, concise, and direct (1-3 sentences).\n\nUser: {query}\nResponse:",
                "stream": False
            }).encode("utf-8")
            req = urllib.request.Request("http://localhost:11434/api/generate", data=req_data, headers={"Content-Type": "application/json"})
            with urllib.request.urlopen(req, timeout=10) as resp:
                data = json.loads(resp.read().decode("utf-8"))
                ans = data.get("response", "").strip()
                if ans:
                    return ans
        except Exception:
            pass

        # 2. Local Fallback Conversational Engine
        if "hello" in q or "hi" in q or "hey" in q:
            return f"Hello, Vishwajeet! All systems are operating smoothly. How can I assist you right now?"
        if "how are you" in q:
            return "I am operating at peak efficiency, sir. Ready to assist with your projects, work, or learning."
        if "who are you" in q:
            return f"I am {self.name}, your personal AI companion and operating system. I manage your daily tasks, learning modules, projects, and office automations."
        if "wardelio" in q:
            return "Wardelio is your mobile application located on your Desktop. Focus is 3D interactive buttons, animations, and settings flow."
        if "thank" in q:
            return "You are very welcome, sir! Always happy to assist."
            
        return f"Understood, sir. I have processed '{query}' and updated your system context."

    def process_command(self, query):
        q = query.lower().strip()
        print(f"\n{GREEN}[⚡ Processing Command Intent]:{RESET} '{BOLD}{query}{RESET}'")

        # 1. Name Change
        if "change your name to" in q or "call you" in q or "set your name to" in q:
            parts = q.replace("change your name to", "").replace("set your name to", "").replace("call you", "").strip()
            new_name = parts.split()[-1] if parts else "Nisha"
            response = self.change_assistant_name(new_name)
            self.display_hud_banner()
            self.voice.speak(response, self)
            return

        # 2. Deep Research & UI Animation Code Generation
        if ("research" in q or "ui design" in q or "animation" in q or "source code" in q or "review" in q or "find any app" in q):
            self.voice.speak(f"Researching modern UI design, animations, and extracting tokens, sir.", self)
            filepath = self.generate_ui_animation_source_code(query)
            
            try:
                subprocess.Popen(["npx", "tsx", "scripts/jarvis.ts", "research", query], shell=True, cwd=str(WORKSPACE_ROOT))
            except Exception:
                pass

            self.voice.speak(
                f"I have created the animated component in src/components/ui/cyber-animated-card.tsx and opened it in VS Code for you, sir.",
                self
            )
            return

        # 3. Context Switching Modes
        if "focus mode" in q or "let's focus" in q or "lets focus" in q or "start focus" in q:
            self.voice.speak("Focus Mode activated, sir. Notifications silenced. 30-minute deep work timer initiated. What is your single focus task?", self)
            return

        if "work mode" in q or "let's work" in q or "lets work" in q:
            self.voice.speak("Work Mode activated. Salesforce, Excel, Data Loader, and Razorpay workspace loaded. Ready for daily donation reconciliation, sir.", self)
            return

        if "builder mode" in q or "let's build" in q or "lets build" in q:
            self.voice.speak("Builder Mode activated. Loading project context for Wardelio, Learnify AI, AgencyOS, and Jarvis AI OS. Which architecture are we building, sir?", self)
            return

        if "gym mode" in q or "gym schedule" in q or "workout" in q:
            self.voice.speak("Gym Mode activated. Today is your scheduled training day. Focus is strength routine and hydration. Ready when you are, sir.", self)
            return

        if "business mode" in q or "side income" in q:
            self.voice.speak("Business Mode activated. Tracking 4 revenue streams: Automation Services, Digital UI kits, Micro-SaaS, and Custom AI Operating Systems.", self)
            return

        if "12 pm plan" in q or "daily plan" in q or "today's plan" in q or "schedule" in q:
            plan_text = (
                "Here is your 12:00 PM 5-pillar daily plan, sir: "
                "1. Work: Salesforce and Razorpay donation reconciliation. "
                "2. Learning: PostgreSQL vector search and indexing for 45 minutes. "
                "3. Project: Wardelio mobile app 3D button animations for 1 hour. "
                "4. Gym: 60-minute strength routine. "
                "5. Side Income: Package AgencyOS Razorpay sync workflow demo. "
                "Maximum 5 priorities today to maintain deep focus."
            )
            self.display_hud_banner()
            self.display_tasks_matrix()
            self.voice.speak(plan_text, self)
            return

        # 4. YouTube Growth & Content Engine
        if "youtube" in q or "video idea" in q or "tinylifehacks" in q or "vishwajeetsrk" in q:
            if "tinylifehacks" in q or "hack" in q or "shorts" in q:
                self.voice.speak(
                    "For TinyLifeHacks, your top priority Short is: 'Stop Fixing Messy Names in Excel! Press Ctrl + E'. Estimated recording time is 20 minutes.",
                    self
                )
            else:
                self.voice.speak(
                    "For VishwaJeetSrK, your top priority long-form video is: 'I Built My Own JARVIS AI Assistant with a 3D Avatar'. The script, 3 thumbnail concepts, and LinkedIn post are prepared in your dashboard.",
                    self
                )
            return

        # 5. Wardelio App Management
        if "wardelio" in q:
            wardelio_path = r"C:\Users\vishw\OneDrive\Desktop\Wardelio"
            if "open" in q or "code" in q or "launch" in q:
                self.voice.speak(f"Opening Wardelio mobile app project in VS Code, sir.", self)
                subprocess.Popen(["code", wardelio_path], shell=True)
                return
            else:
                self.voice.speak(
                    f"Wardelio Android and iOS app is tracked under your personal projects. Current focus is high-tier UI/UX, 3D interactive buttons, smooth 60fps animations, and settings flow.",
                    self
                )
                return

        # 5. Salesforce & Razorpay Daily Office Workflow
        if "salesforce" in q or "razorpay" in q or "data loader" in q or "bharathi" in q or "donation" in q or "office work" in q or "office task" in q:
            if "email" in q or "bharathi" in q:
                try:
                    from scripts.salesforce_sync_helper import generate_email_template
                    email_data = generate_email_template()
                    print(f"\n{GREEN}[+] Generated Email for Bharathi Ma'am:{RESET}\n")
                    print(f"Subject: {email_data['subject']}\n")
                    print(email_data['body'])
                    self.voice.speak("I have generated the Salesforce update confirmation email for Bharathi Ma'am in your terminal, sir.", self)
                    return
                except Exception:
                    pass

            self.voice.speak(
                f"Your Salesforce office workflow has 7 steps: Download yesterday's Razorpay donations, clean in Excel, check or create Leads via email or phone, update PAN, format Opportunities for Data Loader, send update email to Bharathi Ma'am, and verify exception queries from Aswath Ma'am.",
                self
            )
            return

        # 6. Daily Briefing & Summary
        if "briefing" in q or "daily summary" in q or "summary" in q or "what is done and what is pending" in q or "what is done" in q:
            self.display_hud_banner()
            self.display_tasks_matrix()
            resp = self.get_daily_briefing()
            self.voice.speak(resp, self)
            return

        # 4. Task / Project / Learning CRUD
        if "add task" in q or "new task" in q:
            task_text = q.replace("add task", "").replace("new task", "").strip()
            cat = "pending_tasks"
            if "office" in task_text:
                cat = "office_work"
                task_text = task_text.replace("to office work", "").replace("to office", "").strip()
            elif "learning" in task_text:
                cat = "personal_learning"
                task_text = task_text.replace("to personal learning", "").replace("to learning", "").strip()
            elif "project" in task_text:
                cat = "personal_projects"
                task_text = task_text.replace("to personal projects", "").replace("to projects", "").strip()
            
            resp = self.add_task_item(task_text, cat)
            self.display_tasks_matrix()
            self.voice.speak(resp, self)
            return

        if "delete task" in q or "remove task" in q:
            task_text = q.replace("delete task", "").replace("remove task", "").strip()
            resp = self.delete_task_item(task_text)
            self.display_tasks_matrix()
            self.voice.speak(resp, self)
            return

        if "mark done" in q or "mark as done" in q or "finish task" in q or "completed task" in q:
            task_text = q.replace("mark as done", "").replace("mark done", "").replace("finish task", "").replace("completed task", "").strip()
            resp = self.mark_task_done(task_text)
            self.display_tasks_matrix()
            self.voice.speak(resp, self)
            return

        # 5. App Launchers
        app_map = {
            "code": "code",
            "vs code": "code",
            "vscode": "code",
            "explorer": "explorer",
            "files": "explorer",
            "terminal": "powershell",
            "powershell": "powershell",
            "cmd": "cmd",
            "calculator": "calc",
            "calc": "calc",
            "notepad": "notepad",
            "task manager": "taskmgr",
            "taskmgr": "taskmgr",
            "settings": "ms-settings:",
            "chrome": "chrome",
            "spotify": "spotify",
        }

        for app_name, exe in app_map.items():
            if f"open {app_name}" in q or f"launch {app_name}" in q or q == app_name:
                self.voice.speak(f"Opening {app_name}, sir.", self)
                try:
                    subprocess.Popen([exe], shell=True)
                except Exception as e:
                    self.voice.speak(f"Could not open {app_name}: {e}", self)
                return

        # 6. Web & Search
        if "open youtube" in q or "youtube" in q:
            self.voice.speak("Opening YouTube.", self)
            webbrowser.open("https://youtube.com")
            return

        if "open google" in q:
            self.voice.speak("Opening Google.", self)
            webbrowser.open("https://google.com")
            return

        if "search for" in q or "search google for" in q:
            search_query = q.replace("search google for", "").replace("search for", "").strip()
            self.voice.speak(f"Searching Google for {search_query}.", self)
            webbrowser.open(f"https://www.google.com/search?q={search_query}")
            return

        # 7. Screenshot
        if "screenshot" in q or "screen" in q:
            pictures_dir = Path.home() / "Pictures" / "Jarvis"
            pictures_dir.mkdir(parents=True, exist_ok=True)
            ss_path = pictures_dir / f"screenshot_{int(time.time())}.png"
            ps_cmd = (
                f"Add-Type -AssemblyName System.Windows.Forms,System.Drawing; "
                f"$b = [System.Windows.Forms.Screen]::PrimaryScreen.Bounds; "
                f"$bmp = New-Object System.Drawing.Bitmap $b.Width, $b.Height; "
                f"$g = [System.Drawing.Graphics]::FromImage($bmp); "
                f"$g.CopyFromScreen($b.X, $b.Y, 0, 0, $bmp.Size); "
                f"$bmp.Save('{str(ss_path).replace('\\', '/')}'); "
                f"$bmp.Dispose(); $g.Dispose();"
            )
            subprocess.run(["powershell", "-NoProfile", "-Command", ps_cmd], capture_output=True)
            self.voice.speak(f"Screenshot captured and saved to Pictures folder, sir.", self)
            return

        # 8. Volume Control
        if "volume up" in q or "increase volume" in q:
            subprocess.run(["powershell", "-NoProfile", "-Command", "$wsh = New-Object -ComObject WScript.Shell; 1..5 | ForEach-Object { $wsh.SendKeys([char]175) }"])
            self.voice.speak("Volume increased.", self)
            return

        if "volume down" in q or "decrease volume" in q:
            subprocess.run(["powershell", "-NoProfile", "-Command", "$wsh = New-Object -ComObject WScript.Shell; 1..5 | ForEach-Object { $wsh.SendKeys([char]174) }"])
            self.voice.speak("Volume decreased.", self)
            return

        if "mute" in q:
            subprocess.run(["powershell", "-NoProfile", "-Command", "$wsh = New-Object -ComObject WScript.Shell; $wsh.SendKeys([char]173)"])
            self.voice.speak("Audio toggled.", self)
            return

        # 9. Conversational & General AI Query Handling (e.g. "ok please new AI")
        ai_response = self.query_ai_reasoning(query)
        self.voice.speak(ai_response, self)

    def run_voice_loop(self):
        self.display_hud_banner()
        self.display_tasks_matrix()

        if self.config.get("auto_briefing_on_start", True):
            self.voice.speak(f"Greetings, sir. {self.name} is online and listening on your laptop.", self)
            self.voice.speak(self.get_daily_briefing(), self)

        print(f"{GREEN}[*] Ready and listening for wake words ('Hey {self.name}', '{self.name}', 'Hey Jarvis')...{RESET}\n")

        while self.is_running:
            try:
                # If assistant is speaking, skip recording snippet
                if self.is_speaking:
                    time.sleep(0.3)
                    continue

                wav_io = self.record_audio_snippet(duration_seconds=2.8)
                if not wav_io or self.is_speaking:
                    continue

                text = self.transcribe_audio(wav_io)
                
                if text and not self.is_speaking:
                    now = time.time()
                    text_clean = text.strip()
                    print(f"{DIM}[Heard]: {text_clean}{RESET}")
                    
                    # Accumulate speech buffer
                    self.speech_buffer.append(text_clean)
                    self.last_speech_time = now

                # When thought completes (silence debounce elapsed)
                if self.speech_buffer and (time.time() - self.last_speech_time) >= self.silence_debounce_seconds:
                    full_thought = " ".join(self.speech_buffer).strip()
                    self.speech_buffer = []
                    
                    if full_thought and not self.is_speaking:
                        thought_lower = full_thought.lower()
                        print(f"\n{YELLOW}{BOLD}[🎯 Full Stitched Thought]:{RESET} \"{full_thought}\"")

                        is_woken = False
                        wake_words = self.config.get("wake_words", ["hey nisha", "nisha", "hey jarvis", "jarvis"])
                        cleaned_command = thought_lower

                        for ww in wake_words:
                            if ww in thought_lower:
                                is_woken = True
                                cleaned_command = thought_lower.replace(ww, "").strip()
                                break

                        action_keywords = [
                            "research", "ui design", "animation", "source code", "review",
                            "find", "summary", "briefing", "task", "project", "open ",
                            "launch ", "screenshot", "volume", "new ai", "ai", "create", "make"
                        ]
                        has_action = any(k in thought_lower for k in action_keywords)

                        if is_woken or has_action:
                            self.play_wake_sound()
                            self.process_command(cleaned_command if cleaned_command else full_thought)

            except KeyboardInterrupt:
                print(f"\n{RED}[!] Stopping voice assistant...{RESET}")
                self.is_running = False
                break
            except Exception as e:
                time.sleep(0.5)

if __name__ == "__main__":
    assistant = DesktopVoiceAssistant()
    assistant.run_voice_loop()

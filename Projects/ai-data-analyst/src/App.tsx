import React, { useCallback, useMemo, useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import type {
  ActivityLog, AnalysisReport, ReportChart, ReportTable, UploadedFile,
} from './types';
import { LogIn, LogOut, User as UserIcon, Check, Sparkles, Presentation, Database } from 'lucide-react';

const PixelatedHeader: React.FC = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-col">
      <div className="h-12 sm:h-16 lg:h-24 w-full relative rounded-t-2xl sm:rounded-t-[1.5rem] overflow-hidden mt-2 mx-2 max-w-[calc(100%-16px)] lg:max-w-screen-2xl lg:mx-auto">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #e93822 0%, #a24db3 50%, #4a78ed 100%)',
          }}
        />
        {/* Horizontal bands for pixelated/layered effect */}
        <div className="absolute top-[35%] left-0 right-0 bottom-0 bg-white/15 backdrop-blur-[2px]" />
        <div className="absolute top-[65%] left-0 right-0 bottom-0 bg-white/30 backdrop-blur-[6px]" />
        
        {/* Light scanlines */}
        <div 
          className="absolute inset-0 mix-blend-overlay opacity-[0.12]"
          style={{
             backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.2) 3px, rgba(0,0,0,0.2) 6px)`
          }}
        />
      </div>
    </div>
  );
};

const UPLOAD_EXAMPLES = [
  'Summarize the key trends and the most important drivers in this data.',
  'What are the top segments by value, and how do they differ?',
  'Are there any anomalies or outliers I should investigate?',
];

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  status?: Status;
  logs?: ActivityLog[];
  report?: AnalysisReport | null;
  stage?: string;
  question?: string;
}

type Status = 'idle' | 'uploading' | 'running' | 'done' | 'error';

const nowStamp = () => new Date().toISOString().split('T')[1].split('.')[0];

function createUploadSessionId(): string {
  return typeof crypto.randomUUID === 'function'
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function waitForRetry(delayMs: number, signal: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    const timeoutId = window.setTimeout(() => {
      signal.removeEventListener('abort', handleAbort);
      resolve();
    }, delayMs);

    const handleAbort = () => {
      window.clearTimeout(timeoutId);
      reject(new DOMException('The request was cancelled.', 'AbortError'));
    };

    signal.addEventListener('abort', handleAbort, { once: true });
  });
}

function stageFromCommand(cmd: string): string | null {
  if (/curl|wget|gsutil|storage\.googleapis/.test(cmd)) return 'Loading dataset...';
  if (/profil(e|ing)|profile\.json/.test(cmd)) return 'Profiling tables...';
  if (cmd.includes('make_chart.py')) return 'Rendering charts...';
  if (cmd.includes('build_report.py')) return 'Compiling report...';
  if (/sklearn|RandomForest|KMeans|LinearRegression|LogisticRegression/.test(cmd)) return 'Modeling...';
  if (/groupby|merge|pivot|pd\.|pandas|resample/.test(cmd)) return 'Analyzing...';
  if (cmd.includes('pip install')) return 'Setting up environment...';
  return null;
}

function sanitizeAgentText(text: string): string {
  if (!text) return text;
  let sanitized = text;
  // Remove hallucinated tool calls like "call:default_api:bash{...}" or other "call:default_api:" blocks
  sanitized = sanitized.replace(/call:default_api:[a-zA-Z0-9_!:#-]+(?:\s*\{[\s\S]*?\})?/g, "");
  sanitized = sanitized.replace(/call:default_api:[^\s]+/g, "");
  sanitized = sanitized.replace(/\n{3,}/g, "\n\n");
  return sanitized.trim();
}

const FormattedMarkdown: React.FC<{ content: string; className?: string }> = ({ content, className = '' }) => {
  const cleaned = sanitizeAgentText(content);
  return (
    <div className={`prose prose-sm max-w-none text-neutral-800 ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          p({ children }) {
            return <p className="mb-2.5 last:mb-0 leading-relaxed text-neutral-800">{children}</p>;
          },
          h1({ children }) {
            return <h1 className="text-base font-bold mt-3 mb-1.5 text-neutral-900 border-b border-neutral-200 pb-1">{children}</h1>;
          },
          h2({ children }) {
            return <h2 className="text-sm font-bold mt-2.5 mb-1 text-neutral-900">{children}</h2>;
          },
          h3({ children }) {
            return <h3 className="text-xs font-bold mt-2 mb-1 text-neutral-800 uppercase tracking-wide">{children}</h3>;
          },
          strong({ children }) {
            return <strong className="font-semibold text-neutral-900">{children}</strong>;
          },
          ul({ children }) {
            return <ul className="list-disc list-outside ml-4 my-2 space-y-1 text-neutral-800">{children}</ul>;
          },
          ol({ children }) {
            return <ol className="list-decimal list-outside ml-4 my-2 space-y-1 text-neutral-800">{children}</ol>;
          },
          li({ children }) {
            return <li className="leading-relaxed pl-0.5">{children}</li>;
          },
          code({ node, inline, className: codeClassName, children, ...props }: any) {
            const isInline = inline || !String(children).includes('\n');
            if (isInline) {
              return (
                <code className="bg-neutral-100 font-mono text-[12px] px-1.5 py-0.5 rounded text-neutral-800 font-medium border border-neutral-200/60" {...props}>
                  {children}
                </code>
              );
            }
            return (
              <pre className="bg-neutral-900 text-neutral-100 p-3 rounded-xl font-mono text-[11px] leading-relaxed overflow-x-auto my-2.5 shadow-xs">
                <code {...props}>{children}</code>
              </pre>
            );
          },
          table({ children }) {
            return (
              <div className="overflow-x-auto my-3 rounded-xl border border-neutral-200 shadow-2xs">
                <table className="w-full text-xs text-left border-collapse">{children}</table>
              </div>
            );
          },
          thead({ children }) {
            return <thead className="bg-neutral-100/80 text-neutral-800 font-semibold border-b border-neutral-200">{children}</thead>;
          },
          tbody({ children }) {
            return <tbody className="divide-y divide-neutral-100 bg-white">{children}</tbody>;
          },
          tr({ children }) {
            return <tr className="hover:bg-neutral-50/50 transition">{children}</tr>;
          },
          th({ children }) {
            return <th className="p-2.5 font-semibold text-neutral-800">{children}</th>;
          },
          td({ children }) {
            return <td className="p-2.5 text-neutral-700">{children}</td>;
          },
          blockquote({ children }) {
            return (
              <blockquote className="border-l-3 border-io-blue bg-blue-50/40 px-3 py-2 text-neutral-700 italic my-2 rounded-r-lg text-xs">
                {children}
              </blockquote>
            );
          },
          a({ href, children }) {
            return (
              <a href={href} target="_blank" rel="noopener noreferrer" className="text-io-blue font-medium underline hover:text-blue-700">
                {children}
              </a>
            );
          }
        }}
      >
        {cleaned}
      </ReactMarkdown>
    </div>
  );
};

function environmentIdFromInteraction(interaction: any): string | null {
  if (!interaction || typeof interaction !== 'object') return null;
  const environment = interaction.environment;
  const candidates = [
    environment?.env_id,
    environment?.environment_id,
    environment?.id,
    environment?.name,
    interaction.environment_id,
    interaction.env_id,
  ];
  const value = candidates.find((candidate) => typeof candidate === 'string' && candidate.trim());
  if (typeof value !== 'string') return null;
  return value.replace(/^environments?\//, '').replace(/^environment-/, '');
}

const App: React.FC = () => {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [question, setQuestion] = useState('');

  const [status, setStatus] = useState<Status>('idle');
  const [stage, setStage] = useState('');
  const [logs, setLogs] = useState<ActivityLog[]>([]);
  const [report, setReport] = useState<AnalysisReport | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);

  const [environmentId, setEnvironmentId] = useState<string | null>(null);
  const [uploadSessionId, setUploadSessionId] = useState(createUploadSessionId);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [viewedMessageId, setViewedMessageId] = useState<string | null>(null);
  const activeMessageIdRef = useRef<string | null>(null);



  const abortRef = useRef<AbortController | null>(null);
  const generationIdRef = useRef<string | null>(null);

  const datasetName = files.length === 1
      ? files[0].name.replace(/\.csv$/i, '')
      : files.length > 1
        ? `${files.length} files`
        : 'Dataset';

  const examples = UPLOAD_EXAMPLES;
  const canRun = status !== 'running' && question.trim() !== '' && files.length > 0;

  const addFiles = useCallback(async (fileList: FileList | File[]) => {
    const csvs = Array.from(fileList).filter((f) => /\.csv$/i.test(f.name));
    if (csvs.length === 0) return;

    const MAX_INLINE_SIZE = 1 * 1024 * 1024; // 1MB limit for inline analysis
    const oversizedFiles = csvs.filter((f) => f.size > MAX_INLINE_SIZE);
    if (oversizedFiles.length > 0) {
      setErrorMsg(`File size exceeds 1MB inline limit: ${oversizedFiles.map(f => `${f.name} (${(f.size / (1024 * 1024)).toFixed(2)}MB)`).join(', ')}. For CSV files > 1MB, please use the "Paste a GCS URI" option!`);
      setStatus('error');
      return;
    }

    setStatus('uploading');
    try {
      const uploaded = await Promise.all(
        csvs.map(async (file) => {
          const formData = new FormData();
          formData.append('file', file);
          formData.append('sessionId', uploadSessionId);

          const maxAttempts = 5;
          const retryDelayMs = 2000;
          let res: Response | null = null;

          for (let attempt = 1; attempt <= maxAttempts; attempt++) {
            res = await fetch('/api/upload', {
              method: 'POST',
              body: formData,
              redirect: 'manual',
            });

            const wasRedirected =
              res.type === 'opaqueredirect' ||
              res.redirected ||
              (res.status >= 300 && res.status < 400);

            if (!wasRedirected) break;
            if (attempt === maxAttempts) {
              throw new Error('The upload service kept redirecting the request. Please try again.');
            }

            await new Promise(resolve => window.setTimeout(resolve, retryDelayMs));
          }

          if (!res) {
            throw new Error('The upload service did not return a response.');
          }

          const contentType = res.headers.get('content-type')?.toLowerCase() ?? '';
          if (!res.ok) {
            let backendErr = "";
            if (contentType.includes('application/json')) {
              const errData = await res.json().catch(() => ({}));
              if (errData.error) {
                try {
                   const parsed = JSON.parse(errData.error);
                   if (parsed.error && parsed.error.message) {
                     backendErr = parsed.error.message;
                   }
                } catch {
                   backendErr = errData.error;
                }
              }
            }
            throw new Error(backendErr || `Failed to upload ${file.name}`);
          }

          if (!contentType.includes('application/json')) {
            throw new Error('The upload service returned an unexpected response.');
          }

          const data = await res.json();
          return {
            name: file.name,
            content: data.content,
            size: file.size,
            gsUri: data.gsUri,
            localPath: data.localPath,
            isLocal: data.isLocal
          } as UploadedFile;
        })
      );
      setFiles((prev) => {
        const byName = new Map(prev.map((f) => [f.name, f]));
        for (const f of uploaded) byName.set(f.name, f);
        return Array.from(byName.values());
      });
      setStatus('idle');
      setErrorMsg(null);
    } catch (err: any) {
      setErrorMsg(err.message || 'Error uploading files');
      setStatus('error');
    }
  }, [uploadSessionId]);

  const addGcsUriFile = useCallback((uri: string) => {
    const trimmed = uri.trim();
    if (!trimmed.startsWith('gs://')) {
      setErrorMsg('GCS URI must start with gs:// (e.g. gs://bucket-name/large_dataset.csv)');
      setStatus('error');
      return;
    }
    const filename = trimmed.split('/').pop() || 'dataset.csv';
    const name = filename.toLowerCase().endsWith('.csv') ? filename : `${filename}.csv`;
    const gcsFile: UploadedFile = {
      name,
      gsUri: trimmed,
      isGcsUri: true
    };
    setFiles((prev) => {
      const byName = new Map(prev.map((f) => [f.name, f]));
      byName.set(gcsFile.name, gcsFile);
      return Array.from(byName.values());
    });
    setErrorMsg(null);
  }, []);

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      if (e.dataTransfer.files?.length) addFiles(e.dataTransfer.files);
    },
    [addFiles]
  );

  const removeFile = (name: string) => setFiles((prev) => prev.filter((f) => f.name !== name));

  const pushLog = (log: Omit<ActivityLog, 'id' | 'timestamp'>) => {
    const fullLog: ActivityLog = {
      ...log,
      id: Math.random().toString(36).slice(2),
      timestamp: nowStamp(),
    };
    setLogs((prev) => [...prev, fullLog]);

    setChatMessages((prevChat) => {
      const idx = prevChat.findIndex((m) => m.id === activeMessageIdRef.current);
      if (idx !== -1) {
        const nextChat = [...prevChat];
        const msg = nextChat[idx];
        const nextLogs = [...(msg.logs || []), fullLog];
        nextChat[idx] = { ...msg, logs: nextLogs, stage: log.content || msg.stage };
        return nextChat;
      }
      return prevChat;
    });
  };

  const appendStreamingText = (type: 'thinking' | 'text', chunk: string) => {
    setLogs((prev) => {
      const last = prev[prev.length - 1];
      if (last && last.type === type) {
        const prevContent = last.content ?? '';
        if (chunk === prevContent) return prev;
        const merged = chunk.startsWith(prevContent) ? chunk : prevContent + chunk;
        const copy = [...prev];
        copy[copy.length - 1] = { ...last, content: merged, timestamp: nowStamp() };
        return copy;
      }
      return [...prev, { id: Math.random().toString(36).slice(2), timestamp: nowStamp(), type, content: chunk }];
    });

    setChatMessages((prevChat) => {
      const idx = prevChat.findIndex((m) => m.id === activeMessageIdRef.current);
      if (idx !== -1) {
        const nextChat = [...prevChat];
        const msg = nextChat[idx];
        const nextLogs = [...(msg.logs || [])];

        if (nextLogs.length > 0 && nextLogs[nextLogs.length - 1].type === type) {
          const lastLog = nextLogs[nextLogs.length - 1];
          const prevContent = lastLog.content ?? '';
          const merged = chunk.startsWith(prevContent) ? chunk : prevContent + chunk;
          nextLogs[nextLogs.length - 1] = { ...lastLog, content: merged, timestamp: nowStamp() };
        } else {
          nextLogs.push({
            id: Math.random().toString(36).slice(2),
            timestamp: nowStamp(),
            type,
            content: chunk,
          });
        }

        let nextText = msg.text || '';
        if (type === 'text') {
          nextText += chunk;
        }

        nextChat[idx] = { ...msg, text: nextText, logs: nextLogs };
        return nextChat;
      }
      return prevChat;
    });
  };

  const stop = async () => {
    abortRef.current?.abort();
    if (generationIdRef.current) {
      try {
        await fetch('/api/cancel-show', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ generationId: generationIdRef.current }),
        });
      } catch {
        /* ignore */
      }
    }
    setStatus('idle');
    setStage('');
  };

  const runAnalysis = async (followUpTextArg?: unknown) => {
    const followUpText = typeof followUpTextArg === 'string' ? followUpTextArg : undefined;
    if (followUpText && status === 'running') return; // Prevent multiple concurrent runs
    if (!followUpText && !canRun) return;
    if (followUpText && !environmentId) {
      setErrorMsg('This analysis session is no longer available. Start a new analysis and upload the dataset again.');
      return;
    }

    setStatus('running');
    setStage('Initializing...');
    setErrorMsg(null);

    const controller = new AbortController();
    abortRef.current = controller;
    const generationId = Math.random().toString(36).slice(2);
    generationIdRef.current = generationId;

    const isFollowUp = !!followUpText && !!environmentId;
    const questionText = followUpText ? followUpText.trim() : question.trim();

    // Prepare message IDs
    const userMsgId = `user-${Math.random().toString(36).slice(2)}`;
    const assistantMsgId = `assistant-${Math.random().toString(36).slice(2)}`;
    activeMessageIdRef.current = assistantMsgId;

    // Build user and assistant message objects
    const userMsg: ChatMessage = {
      id: userMsgId,
      role: 'user',
      text: questionText,
    };
    const assistantMsg: ChatMessage = {
      id: assistantMsgId,
      role: 'assistant',
      text: '',
      status: 'running',
      logs: [],
      stage: 'Initializing...',
      question: questionText,
    };

    if (followUpText) {
      setChatMessages((prev) => [...prev, userMsg, assistantMsg]);
    } else {
      setLogs([]);
      setReport(null);
      setChatMessages([userMsg, assistantMsg]);
    }
    setViewedMessageId(assistantMsgId);

    const payload: Record<string, unknown> = {
      question: questionText,
      datasetName,
      generationId,
      environmentId: isFollowUp ? environmentId : undefined,
    };

    if (!isFollowUp) {
      payload.files = files;
    }

    try {
      const maxAttempts = 5;
      const retryDelayMs = 2000;
      let response: Response | null = null;

      for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        response = await fetch('/api/analyze', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          signal: controller.signal,
          redirect: 'manual',
        });

        const wasRedirected =
          response.type === 'opaqueredirect' ||
          response.redirected ||
          (response.status >= 300 && response.status < 400);

        if (!wasRedirected) break;
        if (attempt === maxAttempts) {
          throw new Error('The analysis service kept redirecting the request. Please try again.');
        }

        setStage(`Analysis service is not ready. Retrying in ${retryDelayMs / 1000} seconds...`);
        await waitForRetry(retryDelayMs, controller.signal);
      }

      if (!response) {
        throw new Error('The analysis service did not return a response.');
      }

      if (response.status === 429) {
        const err = await response.json().catch(() => ({}));
        setErrorMsg(err.error || 'Rate limit or quota exceeded. Please try again in a few moments.');
        setStatus('error');
        setChatMessages((prevChat) => {
          const idx = prevChat.findIndex((m) => m.id === assistantMsgId);
          if (idx !== -1) {
            const nextChat = [...prevChat];
            nextChat[idx] = { ...nextChat[idx], status: 'error', text: 'Rate limit or quota exceeded. Please try again shortly.' };
            return nextChat;
          }
          return prevChat;
        });
        return;
      }
      if (!response.ok || !response.body) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.error || `Request failed (${response.status})`);
      }
      const contentType = response.headers.get('content-type')?.toLowerCase() ?? '';
      if (!contentType.includes('text/event-stream')) {
        throw new Error('The analysis service returned an unexpected response instead of an event stream.');
      }

      if (isFollowUp) {
        setLogs([]);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      let receivedReport = false;
      let streamError: string | null = null;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() ?? '';

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed.startsWith('data: ')) continue;
          const dataStr = trimmed.slice(6);
          if (dataStr === '[DONE]') continue;

          let event: any;
          try {
            event = JSON.parse(dataStr);
          } catch (err) {
            console.error(`Failed to parse SSE frame (len ${dataStr.length}):`, dataStr.slice(0, 200), err);
            streamError = streamError || 'The connection dropped or message was truncated mid-report.';
            break;
          }

          switch (event.type) {
            case 'info':
              if (event.message) setStage(event.message);
              pushLog({ type: 'info', content: event.message });
              break;
            case 'thinking':
            case 'text':
              if (typeof event.text === 'string' && event.text) {
                appendStreamingText(event.type, event.text);
              }
              break;
            case 'tool_call': {
              const cmd = String(event.arguments?.command ?? event.arguments?.code ?? '');
              const s = stageFromCommand(cmd);
              if (s) setStage(s);
              pushLog({ type: 'tool_call', name: event.name, args: event.arguments });
              break;
            }
            case 'tool_result': {
              let result = String(event.result ?? '');
              if (result.length > 3000) result = result.slice(0, 3000) + '…';
              pushLog({ type: 'tool_result', name: event.name, result });
              break;
            }
            case 'report_data':
              if (event.data) {
                receivedReport = true;
                const reportData = event.data as AnalysisReport;
                setReport(reportData);
                setChatMessages((prevChat) => {
                  const idx = prevChat.findIndex((m) => m.id === assistantMsgId);
                  if (idx !== -1) {
                    const nextChat = [...prevChat];
                    nextChat[idx] = { ...nextChat[idx], report: reportData };
                    return nextChat;
                  }
                  return prevChat;
                });
              }
              break;
            case 'interaction':
            case 'complete':
              if (event.interaction) {
                const envId = environmentIdFromInteraction(event.interaction);
                if (envId) setEnvironmentId(envId);
              }
              break;
            case 'session':
              if (typeof event.environmentId === 'string' && event.environmentId) {
                setEnvironmentId(event.environmentId);
              }
              break;
            case 'error':
              streamError = event.message || 'The analysis failed.';
              setErrorMsg(streamError);
              setStatus('error');
              pushLog({ type: 'error', content: streamError });
              break;
            default:
              break;
          }
        }
        if (streamError) break;
      }

      if (!streamError && buffer.trim().startsWith('data: ')) {
        const dataStr = buffer.trim().slice(6);
        if (dataStr && dataStr !== '[DONE]') {
          console.error(`Incomplete SSE frame in buffer at stream end (len ${dataStr.length}):`, dataStr.slice(0, 200));
          streamError = 'The connection dropped or message was truncated mid-report.';
        }
      }

      setStage('');

      if (streamError || !receivedReport) {
        const finalError = streamError || 'The analysis stream ended before a dashboard report was produced.';
        setErrorMsg(finalError);
        setStatus('error');
        setChatMessages((prevChat) => {
          const idx = prevChat.findIndex((m) => m.id === assistantMsgId);
          if (idx !== -1) {
            const nextChat = [...prevChat];
            nextChat[idx] = {
              ...nextChat[idx],
              status: 'error',
              text: nextChat[idx].text || finalError,
            };
            return nextChat;
          }
          return prevChat;
        });
        return;
      }

      setStatus('done');
      setChatMessages((prevChat) => {
        const idx = prevChat.findIndex((m) => m.id === assistantMsgId);
        if (idx !== -1) {
          const nextChat = [...prevChat];
          nextChat[idx] = { ...nextChat[idx], status: 'done' };
          return nextChat;
        }
        return prevChat;
      });
    } catch (e: any) {
      if (e?.name === 'AbortError') return;
      setErrorMsg(e?.message || 'Unexpected error');
      setStatus('error');
      setChatMessages((prevChat) => {
        const idx = prevChat.findIndex((m) => m.id === assistantMsgId);
        if (idx !== -1) {
          const nextChat = [...prevChat];
          nextChat[idx] = { ...nextChat[idx], status: 'error', text: (nextChat[idx].text || '') + `\n\nError: ${e?.message || 'Unexpected error'}` };
          return nextChat;
        }
        return prevChat;
      });
    } finally {
      generationIdRef.current = null;
    }
  };

  const selectMessage = (msgId: string) => {
    const msg = chatMessages.find((m) => m.id === msgId);
    if (msg && msg.role === 'assistant') {
      setViewedMessageId(msgId);
      if (msg.report) {
        setReport(msg.report);
      }
      if (msg.logs) {
        setLogs(msg.logs);
      }
    }
  };

  const reset = () => {
    const sessionIdToClear = uploadSessionId;
    setStatus('idle');
    setReport(null);
    setLogs([]);
    setErrorMsg(null);
    setStage('');
    setEnvironmentId(null);
    setChatMessages([]);
    setViewedMessageId(null);
    activeMessageIdRef.current = null;
    setFiles([]); // Clear client-side uploaded files state
    setUploadSessionId(createUploadSessionId());

    // Delete only the GCS files belonging to the analysis being reset.
    fetch('/api/clear-files', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId: sessionIdToClear }),
    }).catch((err) => {
      console.error('Failed to clear uploaded files:', err);
    });
  };

  return (
    <div className="min-h-screen w-full bg-[#f6f5f3] text-neutral-900 font-sans flex flex-col pb-12">
      <PixelatedHeader />

      {/* Navigation / User Profile Header */}
      <header className="mx-auto max-w-screen-2xl w-full px-6 pt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-io-blue" />
          <span className="text-sm font-semibold tracking-wider uppercase text-neutral-500 font-mono">Data Analyst Workspace</span>
        </div>
        
        <div className="flex items-center gap-3">
        </div>
      </header>

      <main className="mx-auto max-w-screen-2xl w-full px-6 pt-6">
        <AnimatePresence mode="wait">
          {(status === 'idle' || status === 'uploading') && !report ? (
            <motion.div
              key="setup"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
            >
              <SetupPanel
                files={files}
                dragOver={dragOver}
                question={question}
                examples={examples}
                canRun={canRun}
                isUploading={status === 'uploading'}
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragOver(true);
                }}
                onDragLeave={() => setDragOver(false)}
                onDrop={onDrop}
                onPickFiles={(fl) => fl && addFiles(fl)}
                onAddGcsUri={addGcsUriFile}
                onRemoveFile={removeFile}
                onQuestionChange={setQuestion}
                onRun={runAnalysis}
              />
            </motion.div>
          ) : (
            <motion.div
              key="run"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <RunHeader
                datasetName={datasetName}
                question={question}
                status={status}
                stage={stage}
                onStop={stop}
                onReset={reset}
              />
              {errorMsg && <ErrorBanner message={errorMsg} />}
              <div className="flex flex-col lg:flex-row gap-6 items-start">
                <div className="w-full lg:w-[360px] xl:w-[420px] shrink-0 lg:sticky lg:top-6">
                  <AgentPanel
                    messages={chatMessages}
                    logs={logs}
                    status={status}
                    stage={stage}
                    viewedMessageId={viewedMessageId}
                    onSelectMessage={selectMessage}
                    onSendFollowUp={(text) => runAnalysis(text)}
                    report={report}
                    datasetName={datasetName}
                  />
                </div>
                <div className="flex-1 w-full min-w-0">
                  {report ? (
                    <ReportView report={report} />
                  ) : (
                    status === 'running' && (
                      <div className="flex h-[60vh] flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-neutral-50/50 p-8 text-center shadow-sm">
                        <p className="text-base font-medium text-neutral-700">Report will be generated here</p>
                        <p className="mt-1.5 max-w-sm text-sm text-neutral-500">
                          The agent is exploring the data and running your analysis in the background. Your final report and charts will appear in this space when complete.
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

/* ─────────────────────────── Setup ─────────────────────────── */

interface SetupProps {
  files: UploadedFile[];
  dragOver: boolean;
  question: string;
  examples: string[];
  canRun: boolean;
  isUploading?: boolean;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: () => void;
  onDrop: (e: React.DragEvent) => void;
  onPickFiles: (files: FileList | null) => void;
  onAddGcsUri: (uri: string) => void;
  onRemoveFile: (name: string) => void;
  onQuestionChange: (v: string) => void;
  onRun: () => void;
}

const SetupPanel: React.FC<SetupProps> = ({
  files, dragOver, question, examples, canRun, isUploading = false,
  onDragOver, onDragLeave, onDrop, onPickFiles, onAddGcsUri, onRemoveFile,
  onQuestionChange, onRun
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [gcsInput, setGcsInput] = useState('');

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="mb-6 mt-0 flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-8">
        <h1 className="text-4xl sm:text-4xl lg:text-[3.5rem] leading-[1.05] tracking-tight font-sans font-semibold text-neutral-900 w-full md:w-1/2">
          Ask anything <br className="hidden sm:block" />
          about your data
        </h1>
        <div className="md:w-1/3 md:pt-1 flex flex-col justify-start">
          <p className="text-sm leading-relaxed text-neutral-800 font-medium">
            AI Data Analyst delivers interactive data intelligence, analytics, and actionable insights.
          </p>
          <p className="mt-3 text-xs text-neutral-600">
            Upload one or more CSVs, ask a business question, and let the agent autonomously analyze it.
          </p>
        </div>
      </div>

      <div className="space-y-4">
          {/* Step 1: dataset */}
          <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
            <div className="mb-3 flex items-center gap-2 text-sm font-medium text-neutral-700">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-900 text-[11px] text-white">1</span>
              Choose a dataset
            </div>

            <div
              onDragOver={isUploading ? undefined : onDragOver}
              onDragLeave={isUploading ? undefined : onDragLeave}
              onDrop={isUploading ? undefined : onDrop}
              onClick={isUploading ? undefined : () => fileInputRef.current?.click()}
              className={`flex flex-col items-center justify-center rounded-xl border-2 border-dashed px-6 py-8 text-center transition ${
                isUploading 
                  ? 'border-neutral-200 bg-neutral-50/50 cursor-wait' 
                  : dragOver 
                    ? 'border-io-blue bg-blue-50 cursor-pointer' 
                    : 'border-neutral-300 hover:border-neutral-400 cursor-pointer'
              }`}
            >
              {isUploading ? (
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="h-6 w-6 animate-spin rounded-full border-2 border-neutral-800 border-t-transparent" />
                  <p className="text-sm font-medium text-neutral-700 animate-pulse">Uploading and preparing dataset...</p>
                </div>
              ) : (
                <>
                  <p className="text-sm font-medium text-neutral-700">Drop CSV file(s) here or click to browse (&le; 1MB)</p>
                  <p className="mt-1 text-xs text-neutral-400">Multiple related CSVs are supported for inline agent analysis</p>
                </>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept=".csv,text/csv"
                multiple
                className="hidden"
                disabled={isUploading}
                onChange={(e) => onPickFiles(e.target.files)}
              />
            </div>

            {/* GCS Link input for files larger than 1MB */}
            <div className="mt-4 border-t border-neutral-100 pt-4">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold text-neutral-700 flex items-center gap-1.5">
                  <Database className="h-3.5 w-3.5 text-io-blue" />
                  Paste a GCS URI for CSVs larger than 1MB
                </label>
                <span className="text-[11px] text-neutral-400">Bypasses inline 1MB limit</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="gs://bucket-name/path/to/large_dataset.csv"
                  value={gcsInput}
                  onChange={(e) => setGcsInput(e.target.value)}
                  disabled={isUploading}
                  className="flex-1 px-3.5 py-2 text-xs rounded-xl border border-neutral-300 focus:border-io-blue focus:ring-1 focus:ring-blue-100 outline-none transition disabled:opacity-50"
                />
                <button
                  type="button"
                  disabled={isUploading || !gcsInput.trim()}
                  onClick={() => {
                    if (!gcsInput.trim()) return;
                    onAddGcsUri(gcsInput.trim());
                    setGcsInput('');
                  }}
                  className="px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Add GCS File
                </button>
              </div>
            </div>

            {files.length > 0 && (
              <ul className="mt-3 space-y-2">
                {files.map((f) => (
                  <li
                     key={f.name}
                     className="flex items-center justify-between rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm"
                  >
                     <span className="flex items-center gap-2 truncate max-w-[80%]">
                       <span className="truncate font-medium text-neutral-800">{f.name}</span>
                       <span className="text-[11px] px-2 py-0.5 rounded-full bg-neutral-200/80 text-neutral-600 font-medium truncate">
                         {f.isGcsUri || (f.gsUri && !f.content)
                           ? `GCS • ${f.gsUri}`
                           : `Inline CSV • ${f.size ? (f.size / 1024).toFixed(1) : (f.content ? (f.content.length / 1024).toFixed(1) : '0')} KB`}
                       </span>
                     </span>
                     <button 
                       disabled={isUploading} 
                       onClick={(e) => { e.stopPropagation(); onRemoveFile(f.name); }} 
                       className="text-neutral-400 hover:text-io-red font-medium text-xs px-1.5 py-0.5 disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
                     >
                       Remove
                     </button>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-4 text-[11px] leading-relaxed text-neutral-500 border-t border-neutral-100 pt-3">
              By using this feature, you confirm that you have the necessary rights to any content that you upload. Do not generate content that infringes on others’ intellectual property or privacy rights. Your use of this generative AI service is subject to our{' '}
              <a 
                href="https://policies.google.com/terms/generative-ai/use-policy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-io-blue hover:underline font-medium"
              >
                Prohibited Use Policy
              </a>
              .
              <br className="mt-1" />
              Please note that uploads from Google Workspace may be used to develop and improve Google products and services in accordance with our{' '}
              <a 
                href="https://ai.google.dev/gemini-api/terms" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-io-blue hover:underline font-medium"
              >
                terms
              </a>
              .
            </div>
          </section>

          {/* Step 2: question */}
          <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
            <div className="mb-3 flex items-center gap-2 text-sm font-medium text-neutral-700">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-900 text-[11px] text-white">2</span>
              Ask a business question
            </div>
            <textarea
              value={question}
              onChange={(e) => onQuestionChange(e.target.value)}
              disabled={isUploading}
              rows={3}
              placeholder="e.g. Which product categories drive the most revenue, and how is it trending?"
              className="w-full resize-none rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none transition focus:border-io-blue focus:ring-2 focus:ring-blue-100 disabled:opacity-50"
            />
            <div className="mt-3 flex flex-wrap gap-2">
              {examples.map((ex) => (
                <button
                  key={ex}
                  disabled={isUploading}
                  onClick={() => onQuestionChange(ex)}
                  className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs text-neutral-600 transition hover:border-io-blue hover:text-io-blue cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {ex}
                </button>
              ))}
            </div>
          </section>

          <button
            onClick={onRun}
            disabled={!canRun || isUploading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 px-6 py-3.5 text-sm font-semibold text-white transition enabled:hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
          >
            Analyze
          </button>
      </div>
    </div>
  );
};

/* ─────────────────────────── Run header ─────────────────────────── */

const RunHeader: React.FC<{
  datasetName: string;
  question: string;
  status: Status;
  stage: string;
  onStop: () => void;
  onReset: () => void;
}> = ({ datasetName, question, status, stage, onStop, onReset }) => (
  <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
    <div className="flex items-start justify-between gap-4">
      <div className="min-w-0">
        <div className="flex items-center gap-2 text-xs font-medium text-neutral-500">
          Dataset: {datasetName}
        </div>
        <p className="mt-1 truncate text-base font-medium text-neutral-900">{question}</p>
      </div>
      {status === 'running' ? (
        <button
          onClick={onStop}
          className="flex shrink-0 items-center gap-1.5 rounded-lg border border-io-red/30 bg-red-50 px-3 py-2 text-sm font-medium text-io-red transition hover:bg-red-100"
        >
          Stop
        </button>
      ) : (
        <button
          onClick={onReset}
          className="flex shrink-0 items-center gap-1.5 rounded-lg border border-neutral-200 px-3 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50"
        >
          New analysis
        </button>
      )}
    </div>
    {status === 'running' && (
      <div className="mt-4 flex items-center gap-2 text-sm text-neutral-600">
        <span className="inline-block h-2 w-2 rounded-full bg-io-blue animate-pulse" />
        <span>{stage || 'Working...'}</span>
      </div>
    )}
  </div>
);

const ErrorBanner: React.FC<{ message: string }> = ({ message }) => (
  <div className="flex items-start gap-2 rounded-xl border border-io-red/30 bg-red-50 px-4 py-3 text-sm text-io-red">
    <span>{message}</span>
  </div>
);

/* ─────────────────────────── Agent Panel ─────────────────────────── */

const AgentPanel: React.FC<{
  messages: ChatMessage[];
  logs: ActivityLog[];
  status: Status;
  stage: string;
  viewedMessageId: string | null;
  onSelectMessage: (id: string) => void;
  onSendFollowUp: (text: string) => void;
  report?: AnalysisReport | null;
  datasetName?: string;
}> = ({ messages, logs, status, stage, viewedMessageId, onSelectMessage, onSendFollowUp, report, datasetName }) => {
  const [inputText, setInputText] = useState('');
  const [activeTab, setActiveTab] = useState<'chat' | 'activity'>('chat');
  const activityScrollRef = useRef<HTMLDivElement | null>(null);
  const shouldAutoScrollRef = useRef(true);

  useEffect(() => {
    if (status === 'running') {
      setActiveTab('activity');
    }
  }, [status]);

  useEffect(() => {
    const container = activityScrollRef.current;
    if (activeTab === 'activity' && container && shouldAutoScrollRef.current) {
      container.scrollTop = container.scrollHeight;
    }
  }, [logs, activeTab]);

  const handleActivityScroll = () => {
    if (activeTab !== 'activity') return;
    const container = activityScrollRef.current;
    if (!container) return;
    const distanceFromBottom = container.scrollHeight - container.scrollTop - container.clientHeight;
    shouldAutoScrollRef.current = distanceFromBottom < 80;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || status === 'running') return;
    onSendFollowUp(inputText.trim());
    setInputText('');
  };

  const suggestions = useMemo(() => {
    const name = (datasetName || report?.dataset_name || '').toLowerCase();
    
    // Try to find the primary table and its column names
    const firstTable = report?.tables?.[0];
    const columns = firstTable?.columns || [];
    const columnsLower = columns.map(c => c.toLowerCase());

    // 1. Cycling / Fitness / Athletic Data
    if (
      name.includes('cycling') || 
      name.includes('cycle') || 
      name.includes('ride') || 
      name.includes('ftp') || 
      name.includes('fitness') || 
      name.includes('heart') || 
      name.includes('power') || 
      columnsLower.includes('ftp') || 
      columnsLower.includes('power')
    ) {
      const suggestionsList = [];
      if (columnsLower.includes('ftp')) {
        suggestionsList.push("How has my FTP progressed over time?");
      } else {
        suggestionsList.push("Identify peak performance trends");
      }
      
      if (columnsLower.includes('power') || columnsLower.includes('watts')) {
        suggestionsList.push("Analyse my power zones and metrics");
      } else {
        suggestionsList.push("Find training volume anomalies");
      }

      if (columnsLower.includes('month') || columnsLower.includes('year')) {
        suggestionsList.push("Show seasonal patterns in my activities");
      } else {
        suggestionsList.push("Correlate intensity with training history");
      }
      return suggestionsList.slice(0, 3);
    }

    // 2. Sales / Business / Order Data
    if (
      name.includes('sales') || 
      name.includes('revenue') || 
      name.includes('order') || 
      name.includes('customer') || 
      name.includes('store') || 
      columnsLower.includes('sales') || 
      columnsLower.includes('revenue') || 
      columnsLower.includes('price')
    ) {
      return [
        "Predict next month's sales",
        "Identify outliers or anomalies",
        "Highlight top sales drivers",
      ];
    }

    // 3. User / App Usage / Web Traffic / Event Data
    if (
      name.includes('user') || 
      name.includes('traffic') || 
      name.includes('event') || 
      name.includes('click') || 
      name.includes('session') || 
      name.includes('log') || 
      columnsLower.includes('session_id') || 
      columnsLower.includes('event_type')
    ) {
      return [
        "Find user retention and churn trends",
        "Identify the busiest hours or days of traffic",
        "What are the main conversion or exit points?"
      ];
    }

    // 4. Financial / Stock / Crypto Data
    if (
      name.includes('stock') || 
      name.includes('price') || 
      name.includes('crypto') || 
      name.includes('finance') || 
      name.includes('budget') || 
      name.includes('portfolio') || 
      columnsLower.includes('close') || 
      columnsLower.includes('amount')
    ) {
      return [
        "Detect periods of highest volatility or expense spikes",
        "Forecast price trends for the next period",
        "Analyze category distribution or asset allocation"
      ];
    }

    // 5. Dynamic Fallback using column names if available!
    if (columns.length >= 2) {
      const numericCols = columns.filter((col, i) => {
        const sample = firstTable?.rows?.slice(0, 5).map(row => row[i]);
        return sample?.some(val => typeof val === 'number') || false;
      });

      const dateCols = columns.filter(col => {
        const c = col.toLowerCase();
        return c.includes('date') || c.includes('time') || c.includes('year') || c.includes('month') || c.includes('day');
      });

      if (dateCols.length > 0 && numericCols.length > 0) {
        return [
          `Analyze the trend of ${numericCols[0]} over ${dateCols[0]}`,
          `Identify anomalies or extreme values in ${numericCols[0]}`,
          `Are there any correlations between ${numericCols.slice(0, 2).join(' and ')}?`
        ];
      } else if (numericCols.length >= 2) {
        return [
          `Examine the relationship between ${numericCols[0]} and ${numericCols[1]}`,
          `Find outliers or anomalies in our numeric columns`,
          `Provide a descriptive statistics summary of the columns`
        ];
      }
    }

    // 6. Completely Generic Universal Fallbacks
    return [
      "Identify outliers or anomalies in the dataset",
      "What are the most significant correlations or patterns?",
      "Provide strategic recommendations based on this data"
    ];
  }, [report, datasetName]);

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white shadow-sm flex flex-col h-[75vh] relative overflow-hidden">
      {/* Panel Header */}
      <div className="flex items-center gap-2 border-b border-neutral-200 px-5 py-3 text-sm font-semibold text-neutral-800 bg-neutral-50/50">
        <span>Analytics Agent</span>
        {status === 'running' && (
          <span className="ml-auto flex items-center gap-1.5 text-xs text-neutral-500 font-normal">
            {stage || 'Working...'}
          </span>
        )}
      </div>

      {/* Segmented Tab Controls */}
      <div className="flex border-b border-neutral-200 bg-neutral-50/30 p-1">
        <button
          onClick={() => setActiveTab('chat')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
            activeTab === 'chat'
              ? 'bg-white text-neutral-800 shadow-sm border border-neutral-200/50'
              : 'text-neutral-500 hover:text-neutral-800'
          }`}
        >
          <span>Chat</span>
          {messages.length > 0 && (
            <span className="bg-neutral-100 text-neutral-600 text-[10px] px-1.5 py-0.5 rounded-full font-bold">
              {messages.filter(m => m.role === 'assistant').length}
            </span>
          )}
        </button>
        <button
          onClick={() => setActiveTab('activity')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
            activeTab === 'activity'
              ? 'bg-white text-neutral-800 shadow-sm border border-neutral-200/50'
              : 'text-neutral-500 hover:text-neutral-800'
          }`}
        >
          <span>Agent Activity</span>
          {status === 'running' && (
            <span className="h-2 w-2 rounded-full bg-io-blue animate-pulse" />
          )}
        </button>
      </div>

      {/* Tab Content */}
      <div
        ref={activityScrollRef}
        onScroll={handleActivityScroll}
        className="flex-1 overflow-y-auto p-4 space-y-4 flex flex-col no-scrollbar"
      >
        {activeTab === 'chat' ? (
          messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-6 text-neutral-400">
              <p className="text-sm font-medium">Agent Session</p>
              <p className="text-xs max-w-xs mt-1">Start your analysis to chat with the agent and drill down into insights.</p>
            </div>
          ) : (
            messages.map((msg) => {
              const isUser = msg.role === 'user';
              const isActive = viewedMessageId === msg.id;

              if (isUser) {
                return (
                  <div key={msg.id} className="self-end max-w-[85%] bg-neutral-100 border border-neutral-200/80 rounded-2xl rounded-tr-none px-4 py-2.5 text-sm text-neutral-800 shadow-2xs">
                    <p className="leading-relaxed font-medium break-words">{msg.text}</p>
                  </div>
                );
              }

              return (
                <div
                  key={msg.id}
                  onClick={() => msg.report && onSelectMessage(msg.id)}
                  className={`self-start max-w-[95%] w-full rounded-2xl rounded-tl-none p-4 border transition text-sm flex flex-col space-y-2.5 shadow-2xs ${
                    msg.report ? 'cursor-pointer' : ''
                  } ${
                    isActive
                      ? 'border-blue-200 bg-blue-50/20 ring-1 ring-blue-100/30'
                      : 'border-neutral-200 bg-white hover:border-neutral-300'
                  }`}
                >
                  {/* Assistant header indicator */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-400">
                      <span>AI DATA ANALYST</span>
                    </div>
                    {msg.report && (
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        isActive ? 'bg-blue-100 text-io-blue' : 'bg-neutral-100 text-neutral-500'
                      }`}>
                        {isActive ? 'Showing on Dashboard' : 'Click to view'}
                      </span>
                    )}
                  </div>

                  {/* Response Text / Streaming Text */}
                  {msg.text ? (
                    <div className="space-y-3">
                      <FormattedMarkdown content={msg.text} />
                      {msg.report && (
                        <div 
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectMessage(msg.id);
                          }}
                          className={`p-3 rounded-xl border transition-all space-y-2 text-xs text-left ${
                            isActive 
                              ? 'border-emerald-200 bg-emerald-50/40' 
                              : 'border-neutral-200 bg-neutral-50 hover:border-neutral-300 hover:bg-neutral-100/50'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className={`p-1.5 rounded-lg ${isActive ? 'bg-emerald-100 text-emerald-600' : 'bg-neutral-200/60 text-neutral-600'}`}>
                              <Presentation className="h-3.5 w-3.5" />
                            </span>
                            <div className="flex-1 min-w-0">
                              <p className="font-bold text-neutral-800 truncate">Proposed Dashboard Update</p>
                              <p className="text-[10px] text-neutral-500 truncate">
                                {isActive ? 'Currently active on dashboard and PDF' : 'Click to apply these new insights to the active report'}
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-1.5 pt-0.5">
                            {isActive ? (
                              <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-100/50 px-2 py-0.5 rounded-md">
                                <Check className="h-3 w-3" />
                                Active & Ready for PDF
                              </span>
                            ) : (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onSelectMessage(msg.id);
                                }}
                                className="text-[11px] font-bold text-white bg-neutral-900 hover:bg-neutral-800 px-2.5 py-1 rounded-md shadow-xs transition-all flex items-center gap-1 cursor-pointer"
                              >
                                <Sparkles className="h-2.5 w-2.5" />
                                Apply to Dashboard
                              </button>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    msg.status === 'running' && (
                      <div className="flex items-center gap-2 py-1">
                        <div className="flex space-x-1.5 items-center">
                          <span className="h-1.5 w-1.5 rounded-full bg-io-blue animate-bounce" style={{ animationDelay: '0ms' }} />
                          <span className="h-1.5 w-1.5 rounded-full bg-io-blue animate-bounce" style={{ animationDelay: '150ms' }} />
                          <span className="h-1.5 w-1.5 rounded-full bg-io-blue animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                        <span className="text-xs text-neutral-400 italic font-mono">{msg.stage || 'Analyzing data...'}</span>
                      </div>
                    )
                  )}

                  {/* Execution logs / steps */}
                  {msg.logs && msg.logs.length > 0 && (
                    <div className="pt-2 border-t border-neutral-100/70" onClick={(e) => e.stopPropagation()}>
                      <button
                        onClick={() => setActiveTab('activity')}
                        className="text-xs text-io-blue hover:underline font-semibold flex items-center gap-1.5 py-1 focus:outline-none cursor-pointer"
                      >
                        View full execution steps
                      </button>
                    </div>
                  )}
                </div>
              );
            })
          )
        ) : (
          <div className="w-full space-y-3">
            {logs.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center p-6 text-neutral-400">
                <p className="text-sm font-medium">Waiting for Agent Activity...</p>
                <p className="text-xs max-w-xs mt-1">When the analysis runs, all Python executions, data profiling tasks, and visual operations will show up here.</p>
              </div>
            ) : (
              <div className="space-y-3.5 pr-1">
                {logs.map((log) => (
                  <ActivityRow key={log.id} log={log} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Suggestions Pills */}
      {status !== 'running' && messages.length > 0 && (
        <div className="px-4 py-2 border-t border-neutral-100 flex flex-wrap gap-1.5 bg-neutral-50/30">
          {suggestions.map((sug) => (
            <button
              key={sug}
              onClick={() => onSendFollowUp(sug)}
              className="text-xs font-medium text-neutral-600 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200/80 px-2.5 py-1 rounded-full transition cursor-pointer"
            >
              {sug}
            </button>
          ))}
        </div>
      )}

      {/* Chat Input Bar */}
      <form onSubmit={handleSubmit} className="border-t border-neutral-200 p-3 bg-white">
        <div className="relative flex items-center">
          <input
            type="text"
            disabled={status === 'running'}
            placeholder={status === 'running' ? "AI is typing, please wait..." : "Ask a follow-up question..."}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="w-full pl-4 pr-16 py-3 text-sm rounded-xl border border-neutral-200 focus:border-io-blue/80 outline-none transition bg-neutral-50 focus:bg-white disabled:bg-neutral-100 disabled:text-neutral-400"
          />
          <button
            type="submit"
            disabled={status === 'running' || !inputText.trim()}
            className="absolute right-2 top-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 text-white text-xs font-semibold hover:bg-io-blue transition disabled:bg-neutral-200 disabled:text-neutral-400 cursor-pointer"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

const ActivityRow: React.FC<{ log: ActivityLog }> = ({ log }) => {
  const [open, setOpen] = useState(false);

  if (log.type === 'thinking' || log.type === 'text') {
    const isThinking = log.type === 'thinking';
    return (
      <div className="flex gap-2 text-sm">
        <span className="mt-0.5 shrink-0 text-neutral-400 font-bold">•</span>
        <div className={`flex-1 min-w-0 ${isThinking ? 'italic text-neutral-500' : 'text-neutral-700'}`}>
          <FormattedMarkdown content={log.content} />
        </div>
      </div>
    );
  }

  if (log.type === 'tool_call') {
    const args = (log.args || {}) as Record<string, any>;
    let cmd = args.command || args.code || args.content;
    let pathVal = args.path || args.file || args.TargetFile;
    
    if (!cmd && args.arguments && typeof args.arguments === 'object') {
      const subArgs = args.arguments as Record<string, any>;
      cmd = subArgs.command || subArgs.code || subArgs.content;
      pathVal = pathVal || subArgs.path || subArgs.file || subArgs.TargetFile;
    }
    
    cmd = cmd ? String(cmd) : '';
    const displayPath = pathVal ? String(pathVal) : '';
    const hasDetails = Boolean(cmd || Object.keys(args).length > 0);
    
    return (
      <div className="rounded-lg border border-neutral-200 bg-neutral-50 text-sm">
        <button onClick={() => setOpen((o) => !o)} className={`flex w-full items-center gap-2 px-3 py-2 text-left ${!hasDetails ? 'pointer-events-none' : ''}`}>
          <span className="font-mono text-[11px] text-neutral-600 break-all">
            {log.name || 'tool'} {displayPath ? <span className="text-neutral-400"> {displayPath}</span> : ''}
          </span>
          {hasDetails && <span className="ml-auto text-xs text-neutral-400 font-bold transition">{open ? '▲' : '▼'}</span>}
        </button>
        {open && hasDetails && (
          <pre className="overflow-x-auto max-h-60 border-t border-neutral-200 px-3 py-2 font-mono text-[10px] leading-relaxed text-neutral-700">
            {cmd || JSON.stringify(args, null, 2)}
          </pre>
        )}
      </div>
    );
  }

  if (log.type === 'tool_result') {
    return (
      <div className="rounded-lg border border-neutral-200 text-sm">
        <button onClick={() => setOpen((o) => !o)} className="flex w-full items-center gap-2 px-3 py-2 text-left">
          <span className="text-xs text-neutral-500 font-medium">Output{log.name ? ` · ${log.name}` : ''}</span>
          <span className="ml-auto text-xs text-neutral-400 font-bold transition">{open ? '▲' : '▼'}</span>
        </button>
        {open && (
          <pre className="max-h-60 overflow-auto border-t border-neutral-200 px-3 py-2 font-mono text-[11px] leading-relaxed text-neutral-600">
            {log.result}
          </pre>
        )}
      </div>
    );
  }

  if (log.type === 'error') {
    return (
      <div className="flex gap-2 text-sm text-io-red font-medium">
        <span>Error: {log.content}</span>
      </div>
    );
  }

  return (
    <div className="flex gap-2 text-sm text-neutral-500">
      <span className="mt-0.5 shrink-0">·</span>
      <div className="flex-1 min-w-0">
        <FormattedMarkdown content={log.content} />
      </div>
    </div>
  );
};

/* ─────────────────────────── Dashboard & Report view ─────────────────────────── */

type DashboardTab = 'overview' | 'charts' | 'tables' | 'recommendations' | 'print';

const ReportView: React.FC<{ report: AnalysisReport }> = ({ report }) => {
  const [activeTab, setActiveTab] = useState<DashboardTab>('overview');
  const [zoomedChart, setZoomedChart] = useState<ReportChart | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isExportingPdf, setIsExportingPdf] = useState(false);

  const validCharts = useMemo(() => {
    return report.charts?.filter((c) => c.image) || [];
  }, [report.charts]);

  const downloadJson = () => {
    const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${(report.dataset_name || 'report').replace(/[^a-z0-9]/gi, '_')}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportDashboardToPDF = async () => {
    setIsExportingPdf(true);
    try {
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const pageHeight = pdf.internal.pageSize.getHeight();
      const pageWidth = pdf.internal.pageSize.getWidth();
      const margin = 15;
      const contentWidth = pageWidth - margin * 2;
      let y = 15;

      const checkPageBreak = (neededHeight: number) => {
        if (y + neededHeight > pageHeight - 20) {
          pdf.addPage();
          y = 20;
          return true;
        }
        return false;
      };

      // Top accent bar
      pdf.setFillColor(66, 133, 244);
      pdf.rect(0, 0, pageWidth, 4, 'F');

      y = 15;
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(9);
      pdf.setTextColor(66, 133, 244);
      pdf.text(`${(report.dataset_name || 'DATASET').toUpperCase()} · EXECUTIVE INTELLIGENCE REPORT`, margin, y);

      y += 8;
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(20);
      pdf.setTextColor(31, 41, 55);
      const titleLines = pdf.splitTextToSize(report.title || 'Analysis Report', contentWidth);
      pdf.text(titleLines, margin, y);
      y += titleLines.length * 8 + 1;

      // Inquiry
      if (report.question) {
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(10.5);
        pdf.setTextColor(75, 85, 99);
        const qLines = pdf.splitTextToSize(`Business Inquiry: ${report.question}`, contentWidth);
        pdf.text(qLines, margin, y);
        y += qLines.length * 6 + 4;
      }

      // Divider
      pdf.setDrawColor(229, 231, 235);
      pdf.setLineWidth(0.5);
      pdf.line(margin, y, margin + contentWidth, y);
      y += 8;

      // Executive Summary Box
      if (report.executive_summary) {
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(13);
        pdf.setTextColor(31, 41, 55);
        pdf.text('Executive AI Takeaway', margin, y);
        y += 6;

        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(10);
        pdf.setTextColor(55, 65, 81);
        const execLines = pdf.splitTextToSize(report.executive_summary, contentWidth - 10);
        const boxHeight = execLines.length * 5 + 8;

        checkPageBreak(boxHeight + 5);

        pdf.setFillColor(243, 244, 246);
        pdf.setDrawColor(209, 213, 219);
        pdf.roundedRect(margin, y, contentWidth, boxHeight, 2, 2, 'FD');

        pdf.text(execLines, margin + 5, y + 7);
        y += boxHeight + 10;
      }

      // KPI Metrics
      if (report.insights && report.insights.length > 0) {
        checkPageBreak(35);
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(13);
        pdf.setTextColor(31, 41, 55);
        pdf.text('Key Performance Indicators', margin, y);
        y += 7;

        const kpis = report.insights.slice(0, 4);
        const colWidth = (contentWidth - 6) / 2;

        for (let i = 0; i < kpis.length; i += 2) {
          const rowKpis = kpis.slice(i, i + 2);
          const maxRowHeight = 26;

          checkPageBreak(maxRowHeight + 4);

          rowKpis.forEach((kpi, colIdx) => {
            const x = margin + colIdx * (colWidth + 6);
            pdf.setFillColor(255, 255, 255);
            pdf.setDrawColor(229, 231, 235);
            pdf.roundedRect(x, y, colWidth, maxRowHeight, 2, 2, 'FD');

            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(8);
            pdf.setTextColor(107, 114, 128);
            pdf.text((kpi.metric || kpi.title || '').toUpperCase().slice(0, 32), x + 4, y + 6);

            if (kpi.value) {
              pdf.setFont('helvetica', 'bold');
              pdf.setFontSize(11);
              pdf.setTextColor(66, 133, 244);
              pdf.text(String(kpi.value).slice(0, 25), x + 4, y + 13);
            }

            pdf.setFont('helvetica', 'normal');
            pdf.setFontSize(8.5);
            pdf.setTextColor(55, 65, 81);
            const detailLines = pdf.splitTextToSize(kpi.detail || kpi.title || '', colWidth - 8);
            pdf.text(detailLines.slice(0, 2), x + 4, y + (kpi.value ? 19 : 13));
          });

          y += maxRowHeight + 6;
        }
        y += 4;
      }

      // Charts
      const validCharts = report.charts?.filter((c) => c.image) || [];
      if (validCharts.length > 0) {
        checkPageBreak(30);
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(13);
        pdf.setTextColor(31, 41, 55);
        pdf.text('Visual Analytics', margin, y);
        y += 8;

        for (const chart of validCharts) {
          checkPageBreak(40);

          pdf.setFont('helvetica', 'bold');
          pdf.setFontSize(11);
          pdf.setTextColor(31, 41, 55);
          pdf.text(chart.title || 'Chart', margin, y);
          y += 5;

          if (chart.caption) {
            pdf.setFont('helvetica', 'normal');
            pdf.setFontSize(9);
            pdf.setTextColor(107, 114, 128);
            const capLines = pdf.splitTextToSize(chart.caption, contentWidth);
            pdf.text(capLines, margin, y);
            y += capLines.length * 4.5 + 3;
          }

          try {
            let imageSourceUrl = chart.image;
            if (imageSourceUrl.startsWith('/') || imageSourceUrl.startsWith('http')) {
              try {
                const res = await fetch(imageSourceUrl);
                if (res.ok) {
                  const blob = await res.blob();
                  imageSourceUrl = await new Promise<string>((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onloadend = () => resolve(reader.result as string);
                    reader.onerror = reject;
                    reader.readAsDataURL(blob);
                  });
                }
              } catch (fetchErr) {
                console.warn('Failed to fetch chart image as blob for PDF export:', fetchErr);
              }
            }

            const imgProps = await new Promise<{ dataUrl: string; width: number; height: number }>((resolve) => {
              const img = new Image();
              img.crossOrigin = 'anonymous';
              img.onload = () => {
                try {
                  const canvas = document.createElement('canvas');
                  canvas.width = img.naturalWidth || 600;
                  canvas.height = img.naturalHeight || 400;
                  const ctx = canvas.getContext('2d');
                  if (ctx) {
                    ctx.fillStyle = '#ffffff';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(img, 0, 0);
                  }
                  resolve({
                    dataUrl: canvas.toDataURL('image/png'),
                    width: canvas.width,
                    height: canvas.height
                  });
                } catch (e) {
                  resolve({
                    dataUrl: imageSourceUrl,
                    width: img.naturalWidth || 600,
                    height: img.naturalHeight || 400
                  });
                }
              };
              img.onerror = () => {
                resolve({
                  dataUrl: imageSourceUrl,
                  width: 600,
                  height: 400
                });
              };
              img.src = imageSourceUrl;
            });

            const maxImgW = contentWidth;
            const maxImgH = 100;
            let imgW = maxImgW;
            let imgH = (imgProps.height * imgW) / imgProps.width;

            if (imgH > maxImgH) {
              imgH = maxImgH;
              imgW = (imgProps.width * imgH) / imgProps.height;
            }

            checkPageBreak(imgH + 10);

            const imgX = margin + (contentWidth - imgW) / 2;
            pdf.setDrawColor(243, 244, 246);
            pdf.rect(imgX - 1, y - 1, imgW + 2, imgH + 2);
            pdf.addImage(imgProps.dataUrl, 'PNG', imgX, y, imgW, imgH);
            y += imgH + 10;
          } catch (err) {
            console.warn('Could not render chart in PDF', err);
          }
        }
      }

      // Tables
      if (report.tables && report.tables.length > 0) {
        checkPageBreak(25);
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(13);
        pdf.setTextColor(31, 41, 55);
        pdf.text('Supporting Data Tables', margin, y);
        y += 6;

        for (const table of report.tables) {
          checkPageBreak(20);

          autoTable(pdf, {
            startY: y,
            margin: { left: margin, right: margin },
            head: [table.columns],
            body: table.rows.slice(0, 40).map((row) =>
              row.map((cell) => (cell === null ? '—' : String(cell)))
            ),
            headStyles: {
              fillColor: [66, 133, 244],
              textColor: 255,
              fontStyle: 'bold',
              fontSize: 8.5
            },
            bodyStyles: {
              textColor: [55, 65, 81],
              fontSize: 8
            },
            alternateRowStyles: {
              fillColor: [249, 250, 251]
            }
          });

          y = (pdf as any).lastAutoTable?.finalY ? (pdf as any).lastAutoTable.finalY + 10 : y + 30;
        }
      }

      // Recommendations
      if (report.recommendations && report.recommendations.length > 0) {
        checkPageBreak(30);
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(13);
        pdf.setTextColor(31, 41, 55);
        pdf.text('Strategic Recommendations', margin, y);
        y += 7;

        report.recommendations.forEach((rec, idx) => {
          const recLines = pdf.splitTextToSize(`${idx + 1}.  ${rec}`, contentWidth - 6);
          const itemH = recLines.length * 5 + 3;
          checkPageBreak(itemH);

          pdf.setFont('helvetica', 'normal');
          pdf.setFontSize(9.5);
          pdf.setTextColor(55, 65, 81);
          pdf.text(recLines, margin + 2, y);
          y += itemH;
        });
        y += 6;
      }

      // Footer on all pages
      const totalPages = pdf.getNumberOfPages();
      for (let i = 1; i <= totalPages; i++) {
        pdf.setPage(i);
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(8);
        pdf.setTextColor(156, 163, 175);
        pdf.setDrawColor(243, 244, 246);
        pdf.line(margin, pageHeight - 12, margin + contentWidth, pageHeight - 12);

        pdf.text(`AI Data Analyst Autonomous BI · Generated ${report.generated_at || new Date().toLocaleDateString()}`, margin, pageHeight - 7);
        pdf.text(`Page ${i} of ${totalPages}`, margin + contentWidth - 18, pageHeight - 7);
      }

      const cleanName = (report.dataset_name || 'AI_Analysis').replace(/[^a-zA-Z0-9]/g, '_');
      pdf.save(`${cleanName}_Executive_Dashboard.pdf`);
    } catch (err) {
      console.error('PDF export failed:', err);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsExportingPdf(false);
    }
  };

  // Top KPI Metrics
  const kpiInsights = useMemo(() => {
    return report.insights?.slice(0, 4) || [];
  }, [report.insights]);

  return (
    <div className="space-y-6">
      {/* Dashboard Top Navigation & Header */}
      <section className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 gradient-io" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-1">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-io-blue flex items-center gap-1.5">
                {report.dataset_name}
              </span>
              {report.generated_at && (
                <span className="text-xs text-neutral-400 font-mono">
                  {report.generated_at}
                </span>
              )}
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 font-sans">
              {report.title}
            </h2>
            <p className="mt-1 text-sm text-neutral-600 line-clamp-2">
              <span className="font-semibold text-neutral-800">Inquiry: </span>
              {report.question}
            </p>
          </div>

          {/* Action Tools */}
          <div className="flex items-center gap-2.5 shrink-0 self-start md:self-center">
            <button
              onClick={exportDashboardToPDF}
              disabled={isExportingPdf}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-io-blue to-io-red px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 disabled:opacity-60 cursor-pointer"
            >
              {isExportingPdf ? 'Rendering PDF...' : 'Download PDF'}
            </button>
            <button
              onClick={downloadJson}
              className="flex items-center gap-1.5 rounded-xl border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100 cursor-pointer"
            >
              JSON
            </button>
          </div>
        </div>

        {/* Dashboard Tabs Bar */}
        <div className="mt-6 pt-4 border-t border-neutral-100 flex flex-wrap gap-1.5 overflow-x-auto no-scrollbar">
          <TabBtn
            active={activeTab === 'overview'}
            onClick={() => setActiveTab('overview')}
            label="Overview"
          />
          <TabBtn
            active={activeTab === 'charts'}
            onClick={() => setActiveTab('charts')}
            label="Visualizations"
            badge={validCharts.length}
          />
          <TabBtn
            active={activeTab === 'tables'}
            onClick={() => setActiveTab('tables')}
            label="Data Tables"
            badge={report.tables?.length || 0}
          />
          <TabBtn
            active={activeTab === 'recommendations'}
            onClick={() => setActiveTab('recommendations')}
            label="Insights & Actions"
          />
          <TabBtn
            active={activeTab === 'print'}
            onClick={() => setActiveTab('print')}
            label="Print Preview"
          />
        </div>
      </section>

      {/* Tab 1: Overview */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Executive KPI Bento Row */}
          {kpiInsights.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {kpiInsights.map((kpi, idx) => (
                <div key={idx} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm flex flex-col justify-between hover:border-io-blue/40 transition min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 truncate" title={kpi.metric || kpi.title}>
                      {kpi.metric || kpi.title}
                    </span>
                  </div>
                  <div className="mt-2 text-xl sm:text-2xl xl:text-3xl font-extrabold text-neutral-900 font-sans tracking-tight leading-tight break-words py-1">
                    {kpi.value || 'Key Trend'}
                  </div>
                  <p className="mt-1 text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                    {kpi.detail}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Executive Summary AI Box */}
          <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50/70 via-white to-purple-50/40 p-6 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 mb-2">
              Executive AI Takeaway
            </div>
            <FormattedMarkdown content={report.executive_summary} />
          </div>

          {/* Bento Split: Top Charts & Recommendations */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between">
                <SectionTitle title="Featured Visualizations" />
                {validCharts.length > 2 && (
                  <button onClick={() => setActiveTab('charts')} className="text-xs text-io-blue hover:underline font-semibold cursor-pointer">
                    View all {validCharts.length} charts →
                  </button>
                )}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {validCharts.slice(0, 2).map((c, i) => (
                  <ChartCard key={i} chart={c} onZoom={() => setZoomedChart(c)} />
                ))}
                {validCharts.length === 0 && (
                  <p className="col-span-2 p-8 text-center text-sm text-neutral-400 bg-white rounded-xl border border-neutral-200">
                    No visual charts generated for this query.
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <SectionTitle title="Priority Actions" />
              <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm space-y-3.5">
                {report.recommendations && report.recommendations.length > 0 ? (
                  report.recommendations.slice(0, 4).map((rec, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                      <span className="mt-1 h-2 w-2 rounded-full bg-io-green shrink-0" />
                      <span className="leading-snug">{rec}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-neutral-500 italic">No specific recommendations emitted.</p>
                )}
                {report.recommendations && report.recommendations.length > 4 && (
                  <button onClick={() => setActiveTab('recommendations')} className="pt-2 text-xs text-io-blue hover:underline font-semibold block cursor-pointer">
                    + {report.recommendations.length - 4} more recommendations →
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Visualizations */}
      {activeTab === 'charts' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <SectionTitle title={`All Visualizations (${validCharts.length})`} />
            <span className="text-xs text-neutral-500">Click any chart to inspect in full resolution</span>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {validCharts.map((c, i) => (
              <ChartCard key={i} chart={c} onZoom={() => setZoomedChart(c)} />
            ))}
            {validCharts.length === 0 && (
              <p className="col-span-2 p-12 text-center text-sm text-neutral-400 bg-white rounded-xl border border-neutral-200">
                No visual charts generated for this analysis.
              </p>
            )}
          </div>
        </div>
      )}

      {/* Tab 3: Tables */}
      {activeTab === 'tables' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-neutral-200">
            <SectionTitle title={`Supporting Data Tables (${report.tables?.length || 0})`} />
            <div className="relative w-full sm:w-72">
              <input
                type="text"
                placeholder="Search rows across tables..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-4 py-2 text-xs rounded-lg border border-neutral-300 focus:border-io-blue outline-none"
              />
            </div>
          </div>

          <div className="space-y-6">
            {report.tables?.map((t, i) => (
              <DataTable key={i} table={t} searchQuery={searchQuery} />
            ))}
            {(!report.tables || report.tables.length === 0) && (
              <p className="p-12 text-center text-sm text-neutral-400 bg-white rounded-xl border border-neutral-200">
                No tabular data structures returned.
              </p>
            )}
          </div>
        </div>
      )}

      {/* Tab 4: Recommendations & Insights */}
      {activeTab === 'recommendations' && (
        <div className="space-y-8">
          {report.recommendations && report.recommendations.length > 0 && (
            <section className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <SectionTitle title="Strategic Recommendations Roadmap" />
              <div className="grid gap-3 mt-4 sm:grid-cols-2">
                {report.recommendations.map((r, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-200/80">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-io-green text-white text-xs font-bold">
                      {i + 1}
                    </span>
                    <p className="text-sm text-neutral-800 leading-snug pt-0.5">{r}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {report.insights?.length > 0 && (
            <section>
              <SectionTitle title="Comprehensive AI Insights" />
              <div className="grid gap-4 sm:grid-cols-2 mt-3">
                {report.insights.map((ins, i) => (
                  <div key={i} className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-semibold text-neutral-900 text-base">{ins.title}</h3>
                      {ins.value && (
                        <span className="shrink-0 rounded-lg bg-blue-50 px-2.5 py-1 text-sm font-bold text-io-blue">
                          {ins.value}
                        </span>
                      )}
                    </div>
                    {ins.metric && <p className="mt-1 text-xs uppercase font-mono tracking-wider text-neutral-400">{ins.metric}</p>}
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">{ins.detail}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      )}

      {/* Tab 5: Print Preview OR Hidden Print Target */}
      <div 
        id="dashboard-printable-report" 
        className={
          activeTab === 'print'
            ? "space-y-8 bg-white p-8 sm:p-12 rounded-2xl border border-neutral-200 shadow-sm text-neutral-900 max-w-4xl mx-auto"
            : "fixed left-[-9999px] top-0 w-[1000px] bg-white p-12 text-neutral-900 pointer-events-none z-[-999] space-y-8"
        }
      >
        {/* Report Header Banner */}
        <div className="border-b border-neutral-200 pb-6">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-io-blue">
              {report.dataset_name} Executive Intelligence Dashboard
            </span>
            <span className="text-xs text-neutral-400 font-mono">
              {report.generated_at || new Date().toLocaleString()}
            </span>
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 font-sans">
            {report.title}
          </h1>
          <p className="mt-2 text-sm text-neutral-600">
            <span className="font-semibold text-neutral-800">Business Inquiry: </span>
            {report.question}
          </p>
        </div>

        {/* Executive Summary */}
        <div className="rounded-xl bg-neutral-50 p-6 border border-neutral-200">
          <h2 className="text-base font-bold text-neutral-900 flex items-center gap-2 mb-2 uppercase tracking-wide">
            Executive Summary
          </h2>
          <p className="text-sm leading-relaxed text-neutral-800">
            {report.executive_summary}
          </p>
        </div>

        {/* KPI Metrics */}
        {report.insights?.length > 0 && (
          <div>
            <h2 className="text-base font-bold text-neutral-900 mb-4 uppercase tracking-wide">Key Performance Indicators</h2>
            <div className="grid grid-cols-2 gap-4">
              {report.insights.map((ins, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-neutral-200 bg-white break-inside-avoid">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-xs uppercase font-semibold text-neutral-500">{ins.metric || ins.title}</span>
                    {ins.value && <span className="text-xs font-bold text-io-blue bg-blue-50 px-2 py-0.5 rounded">{ins.value}</span>}
                  </div>
                  <h3 className="text-sm font-semibold text-neutral-900 mb-1">{ins.title}</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">{ins.detail}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Charts */}
        {validCharts.length > 0 && (
          <div>
            <h2 className="text-base font-bold text-neutral-900 mb-4 uppercase tracking-wide">Visualizations & Analytics</h2>
            <div className="grid grid-cols-1 gap-8">
              {validCharts.map((c, idx) => (
                <div key={idx} className="border border-neutral-200 rounded-xl p-6 bg-white break-inside-avoid">
                  <h3 className="text-base font-bold text-neutral-800 mb-1">{c.title}</h3>
                  {c.caption && <p className="text-xs text-neutral-500 mb-4">{c.caption}</p>}
                  <ChartImage src={c.image} alt={c.title} className="w-full max-h-[480px] object-contain mx-auto" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Supporting Tables */}
        {report.tables?.length > 0 && (
          <div>
            <h2 className="text-base font-bold text-neutral-900 mb-4 uppercase tracking-wide">Supporting Data Tables</h2>
            <div className="space-y-6">
              {report.tables.map((t, idx) => (
                <div key={idx} className="border border-neutral-200 rounded-xl overflow-hidden break-inside-avoid">
                  <div className="bg-neutral-50 px-4 py-3 border-b border-neutral-200">
                    <h3 className="text-sm font-bold text-neutral-800">{t.title}</h3>
                    {t.caption && <p className="text-xs text-neutral-500">{t.caption}</p>}
                  </div>
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="bg-neutral-100 border-b border-neutral-200 text-left">
                        {t.columns.map((col, cIdx) => (
                          <th key={cIdx} className="px-3 py-2 font-semibold text-neutral-700">{col}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {t.rows.slice(0, 20).map((row, rIdx) => (
                        <tr key={rIdx} className="border-b border-neutral-100 last:border-0">
                          {row.map((cell, cellIdx) => (
                            <td key={cellIdx} className="px-3 py-1.5 text-neutral-700">{cell === null ? '—' : String(cell)}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {t.rows.length > 20 && (
                    <div className="px-3 py-2 bg-neutral-50 text-[11px] text-neutral-500 italic text-center">
                      Showing top 20 rows of {t.rows.length} total rows.
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recommendations */}
        {report.recommendations && report.recommendations.length > 0 && (
          <div className="rounded-xl bg-blue-50/60 p-6 border border-blue-100 break-inside-avoid">
            <h2 className="text-base font-bold text-neutral-900 mb-3 uppercase tracking-wide">
              Strategic Recommendations Roadmap
            </h2>
            <ul className="space-y-2.5">
              {report.recommendations.map((rec, idx) => (
                <li key={idx} className="text-sm text-neutral-800 flex items-start gap-2.5">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-io-green shrink-0" />
                  <span className="leading-snug">{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Methodology & Footer */}
        <div className="border-t border-neutral-200 pt-4 flex justify-between text-[11px] text-neutral-400 font-mono">
          <span>AI Data Analyst Autonomous Agent</span>
          <span>{report.methodology ? `Methodology: ${report.methodology}` : 'Confidential BI Dashboard'}</span>
        </div>
      </div>

      {/* Lightbox Zoom Modal */}
      <AnimatePresence>
        {zoomedChart && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedChart(null)}
            className="fixed inset-0 z-50 bg-neutral-900/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-5xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 bg-neutral-50">
                <div>
                  <h3 className="font-bold text-neutral-900 text-lg">{zoomedChart.title}</h3>
                  {zoomedChart.caption && <p className="text-xs text-neutral-500 mt-0.5">{zoomedChart.caption}</p>}
                </div>
                <button
                  onClick={() => setZoomedChart(null)}
                  className="rounded-xl px-3 py-1.5 text-xs font-semibold text-neutral-500 hover:bg-neutral-200 hover:text-neutral-700 transition cursor-pointer"
                >
                  Close
                </button>
              </div>
              <div className="p-6 overflow-auto flex-1 flex items-center justify-center bg-white">
                <ChartImage src={zoomedChart.image} alt={zoomedChart.title} className="max-h-[75vh] w-auto object-contain mx-auto" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const TabBtn: React.FC<{
  active: boolean;
  onClick: () => void;
  label: string;
  badge?: number;
}> = ({ active, onClick, label, badge }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
      active
        ? 'bg-neutral-900 text-white shadow-sm'
        : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
    }`}
  >
    <span>{label}</span>
    {typeof badge === 'number' && (
      <span className={`ml-0.5 px-1.5 py-0.5 rounded-md text-[10px] font-bold ${
        active ? 'bg-white/20 text-white' : 'bg-neutral-200 text-neutral-700'
      }`}>
        {badge}
      </span>
    )}
  </button>
);

const SectionTitle: React.FC<{ title: string }> = ({ title }) => (
  <div className="flex items-center gap-2 text-sm font-bold text-neutral-800">
    {title}
  </div>
);

const ChartImage: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className = '' }) => {
  const [error, setError] = useState(false);
  if (error) {
    return (
      <div className={`flex flex-col items-center justify-center p-6 bg-neutral-50 rounded-xl border border-dashed border-neutral-300 text-neutral-400 text-xs text-center min-h-[140px] w-full ${className}`}>
        <span>📈 Chart image expired or unavailable</span>
      </div>
    );
  }
  return <img src={src} alt={alt} className={className} onError={() => setError(true)} />;
};

const ChartCard: React.FC<{ chart: ReportChart; onZoom?: () => void }> = ({ chart, onZoom }) => (
  <figure className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm flex flex-col group transition hover:border-neutral-300">
    <div className="relative bg-white p-3 flex-1 flex items-center justify-center min-h-[220px]">
      <ChartImage src={chart.image} alt={chart.title} className="w-full h-auto max-h-72 object-contain mx-auto" />
      {onZoom && (
        <button
          onClick={onZoom}
          className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition bg-neutral-900/70 hover:bg-neutral-900 text-white px-2.5 py-1.5 rounded-xl text-xs flex items-center shadow-md cursor-pointer"
          title="Zoom Chart"
        >
          Zoom
        </button>
      )}
    </div>
    <figcaption className="border-t border-neutral-100 px-4 py-3 bg-neutral-50/50">
      <p className="text-sm font-bold text-neutral-800">{chart.title}</p>
      {chart.caption && <p className="mt-0.5 text-xs text-neutral-500 line-clamp-2">{chart.caption}</p>}
    </figcaption>
  </figure>
);

const DataTable: React.FC<{ table: ReportTable; searchQuery?: string }> = ({ table, searchQuery = '' }) => {
  const filteredRows = useMemo(() => {
    if (!searchQuery.trim()) return table.rows;
    const lower = searchQuery.toLowerCase();
    return table.rows.filter((row) =>
      row.some((cell) => cell !== null && String(cell).toLowerCase().includes(lower))
    );
  }, [table.rows, searchQuery]);

  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
      <div className="border-b border-neutral-100 px-5 py-3.5 flex items-center justify-between bg-neutral-50/50">
        <div>
          <p className="text-sm font-bold text-neutral-800">{table.title}</p>
          {table.caption && <p className="mt-0.5 text-xs text-neutral-500">{table.caption}</p>}
        </div>
        <span className="text-xs font-mono text-neutral-400 bg-neutral-100 px-2.5 py-1 rounded-lg">
          {filteredRows.length} {filteredRows.length === 1 ? 'row' : 'rows'}
        </span>
      </div>
      <div className="overflow-x-auto max-h-[500px]">
        <table className="w-full text-xs sm:text-sm">
          <thead className="sticky top-0 z-10 bg-neutral-100 shadow-xs">
            <tr className="border-b border-neutral-200 text-left">
              {table.columns.map((c, i) => (
                <th key={i} className="px-4 py-2.5 font-bold text-neutral-700 whitespace-nowrap">{c}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {filteredRows.map((row, ri) => (
              <tr key={ri} className="transition hover:bg-neutral-50/80">
                {row.map((cell, ci) => (
                  <td key={ci} className="px-4 py-2.5 text-neutral-700 whitespace-nowrap">
                    {cell === null ? <span className="text-neutral-300">—</span> : String(cell)}
                  </td>
                ))}
              </tr>
            ))}
            {filteredRows.length === 0 && (
              <tr>
                <td colSpan={table.columns.length} className="px-4 py-8 text-center text-xs text-neutral-400">
                  No matching rows found for "{searchQuery}".
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;



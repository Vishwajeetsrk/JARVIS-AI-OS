import React, { useRef, useState } from 'react';
import { Plus, X, Loader2 } from 'lucide-react';
import { SuggestionChip, MediaSelection } from '../data.js';
import { fileToDownscaledDataUrl } from '../images.js';

interface ImageUploaderProps {
  title: string;
  type: 'product' | 'atmosphere';
  suggestions: SuggestionChip[];
  selection: MediaSelection | null;
  onSelect: React.Dispatch<React.SetStateAction<MediaSelection | null>>;
  disabled?: boolean;
}

export function ImageUploader({
  title,
  type,
  suggestions,
  selection,
  onSelect,
  disabled = false,
}: ImageUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const [promptText, setPromptText] = useState('');
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChipClick = (suggestion: SuggestionChip) => {
    setPromptText(suggestion.prompt);
    setError(null);
  };

  const handleGenerate = async () => {
    const prompt = promptText.trim();
    if (!prompt) {
      setError('Please write or select a prompt first.');
      return;
    }

    setGenerating(true);
    setError(null);

    try {
      const res = await fetch('/api/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, type }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to generate image');
      }

      if (data.imageUrl) {
        onSelect({
          id: `generated-${Date.now()}`,
          source: 'upload',
          images: [data.imageUrl],
          description: prompt,
        });
      } else {
        throw new Error('Image URL not returned from backend');
      }
    } catch (err: any) {
      console.error('Error in image generation:', err);
      setError(err.message || 'Failed to generate image. Please try again.');
    } finally {
      setGenerating(false);
    }
  };

  const handleFiles = async (fileList: FileList | null) => {
    const picked = Array.from(fileList ?? []).filter((f) =>
      f.type.startsWith('image/')
    );
    if (picked.length === 0) return;

    try {
      const dataUrl = await fileToDownscaledDataUrl(picked[0]);
      onSelect({
        id: `upload-${Date.now()}`,
        source: 'upload',
        images: [dataUrl],
        description: `Uploaded reference photo`,
      });
      setError(null);
    } catch (err: any) {
      setError('Failed to process uploaded file.');
    } finally {
      if (inputRef.current) inputRef.current.value = '';
    }
  };

  const handleClear = () => {
    onSelect(null);
    setError(null);
  };

  const hasSelection = !!selection && selection.images.length > 0;

  return (
    <div className="mb-8 p-5 bg-zinc-900/40 rounded-xl border border-zinc-800/80">
      <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-300 mb-4 flex items-center justify-between">
        <span>{title}</span>
        {generating && (
          <span className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono normal-case">
            <Loader2 className="w-3.5 h-3.5 animate-spin text-zinc-400" />
            Generating...
          </span>
        )}
      </h2>

      {hasSelection ? (
        <div className="space-y-3">
          <div className="relative group w-full aspect-[4/3] rounded-lg overflow-hidden bg-zinc-950 border border-zinc-800/60">
            <img
              src={selection.images[0]}
              alt={selection.description}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {!disabled && (
              <button
                onClick={handleClear}
                className="absolute top-2 right-2 p-1.5 bg-black/80 hover:bg-black text-white rounded-full transition-colors border border-zinc-800"
                aria-label="Remove image"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 pt-6">
              <p className="text-xs font-mono text-zinc-300 line-clamp-2">
                {selection.description}
              </p>
            </div>
          </div>
          {!disabled && (
            <button
              onClick={handleClear}
              className="w-full py-2 font-mono text-xs uppercase tracking-wider text-zinc-400 hover:text-white transition-colors bg-zinc-900 border border-zinc-850 rounded-lg hover:bg-zinc-800"
            >
              Reset and Generate New
            </button>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          <div className="space-y-1">
            <textarea
              value={promptText}
              onChange={(e) => {
                setPromptText(e.target.value);
                setError(null);
              }}
              disabled={disabled || generating}
              placeholder={`Describe the desired ${type} (e.g. "a colorful ceramic mug on a table"...)`}
              rows={3}
              className="w-full bg-zinc-950 border border-zinc-800 text-zinc-200 p-3 font-mono text-xs leading-relaxed focus:outline-none focus:ring-1 focus:ring-zinc-600 focus:border-transparent rounded-lg resize-none placeholder-zinc-700"
            />
          </div>

          <div className="space-y-1.5">
            <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">Suggestions</p>
            <div className="flex flex-wrap gap-1.5">
              {suggestions.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleChipClick(item)}
                  disabled={disabled || generating}
                  className={`px-2.5 py-1 text-[11px] font-mono rounded-full border transition-all ${
                    promptText === item.prompt
                      ? 'bg-white text-zinc-950 border-white font-medium'
                      : 'bg-zinc-950 text-zinc-400 border-zinc-850 hover:border-zinc-700 hover:text-zinc-200'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={disabled || generating || !promptText.trim()}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white hover:bg-zinc-200 text-zinc-950 font-mono text-xs font-bold uppercase tracking-wider rounded-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {generating ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                Generate {type} image
              </>
            )}
          </button>

          <div className="relative flex py-1 items-center">
            <div className="flex-grow border-t border-zinc-800"></div>
            <span className="flex-shrink mx-3 text-[10px] font-mono uppercase text-zinc-600">or upload own image</span>
            <div className="flex-grow border-t border-zinc-800"></div>
          </div>

          <div
            onClick={() => !generating && inputRef.current?.click()}
            onDragOver={(e) => {
              e.preventDefault();
              if (!generating) setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragging(false);
              if (!generating) handleFiles(e.dataTransfer.files);
            }}
            role="button"
            tabIndex={0}
            className={`border border-dashed p-4 text-center rounded-lg transition-colors cursor-pointer ${
              dragging
                ? 'border-white bg-zinc-900/60'
                : 'border-zinc-800 hover:border-zinc-700 bg-zinc-950/20'
            }`}
          >
            <div className="flex flex-col items-center justify-center gap-1">
              <Plus className="w-4 h-4 text-zinc-500" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                Drop your reference photo or click to browse
              </span>
            </div>
          </div>

          {error && (
            <p className="text-xs font-mono text-red-500 bg-red-950/30 border border-red-900/50 p-2.5 rounded-lg">
              {error}
            </p>
          )}
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />
    </div>
  );
}

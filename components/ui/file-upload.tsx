"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface FileUploadProps {
  onChange?: (files: File[]) => void;
  className?: string;
}

export function FileUpload({ onChange, className }: FileUploadProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (newFiles: FileList | null) => {
    if (!newFiles) return;
    const arr = Array.from(newFiles);
    setFiles((prev) => [...prev, ...arr]);
    onChange?.(arr);
  };

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragOver(true);
      }}
      onDragLeave={() => setIsDragOver(false)}
      onDrop={(e) => {
        e.preventDefault();
        setIsDragOver(false);
        handleFiles(e.dataTransfer.files);
      }}
      onClick={() => inputRef.current?.click()}
      className={cn(
        "flex min-h-64 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-neutral-700 bg-neutral-900/60 p-8 text-center transition-all hover:border-cyan-400 hover:bg-neutral-900",
        isDragOver && "border-cyan-400 bg-cyan-500/10 shadow-lg shadow-cyan-500/20",
        className
      )}
    >
      <input
        ref={inputRef}
        type="file"
        multiple
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/20 text-2xl text-cyan-400">
        📁
      </div>
      <h4 className="text-lg font-bold text-white mb-1">
        Upload files or drag and drop
      </h4>
      <p className="text-xs text-neutral-400 max-w-sm mb-4">
        PDF, DOCX, PNG, MP4 up to 50MB. Auto-indexed into JARVIS Vector Memory.
      </p>

      {files.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {files.map((f, idx) => (
            <span
              key={idx}
              className="rounded-full border border-cyan-500/40 bg-cyan-500/20 px-3 py-1 text-xs font-medium text-cyan-300"
            >
              📄 {f.name} ({(f.size / 1024).toFixed(0)} KB)
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

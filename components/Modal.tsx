"use client";

import { useEffect } from "react";

export default function Modal({
  open,
  title,
  content,
  onClose,
}: {
  open: boolean;
  title: string;
  content: string;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [open, onClose]);

  if (!open) return null;

  const paragraphs = content.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm px-4 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl border border-brand bg-[#140533]/90 p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <button
            onClick={onClose}
            className="rounded-lg border border-brand bg-black/10 px-3 py-1 text-sm hover:bg-black/20"
            aria-label="Close"
          >
            Close
          </button>
        </div>

        <div className="mt-4 space-y-3 text-sm text-white/85 leading-relaxed">
          {paragraphs.map((p, i) => (
            <p key={i} className="whitespace-pre-line">{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

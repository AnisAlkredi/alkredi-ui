"use client";

import { usePathname, useSearchParams } from "next/navigation";
import type { Lang } from "@/lib/i18n";

export default function LanguageSwitcher({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const sp = useSearchParams();

  const setLang = (l: Lang) => {
    if (l === lang) return;
    const params = new URLSearchParams(sp.toString());
    params.set("lang", l);
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    window.location.assign(`${pathname}?${params.toString()}${hash}`);
  };

  return (
    <div className="inline-flex items-center rounded-full border border-brand bg-card backdrop-blur px-2 py-1 text-xs">
      <button
        onClick={() => setLang("en")}
        className={lang === "en" ? "px-2 py-1 font-semibold text-[var(--accent)]" : "px-2 py-1 text-white/80 hover:text-white"}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <span className="text-white/30">/</span>
      <button
        onClick={() => setLang("de")}
        className={lang === "de" ? "px-2 py-1 font-semibold text-[var(--accent)]" : "px-2 py-1 text-white/80 hover:text-white"}
        aria-pressed={lang === "de"}
      >
        DE
      </button>
    </div>
  );
}

import Link from "next/link";
import type { Lang } from "@/lib/i18n";

export default function LanguageSwitcher({ lang }: { lang: Lang }) {
  const isEn = lang === "en";

  // / = DE, /en = EN
  const hrefEn = "/en";
  const hrefDe = "/";

  return (
    <div className="inline-flex items-center rounded-full border border-brand bg-card backdrop-blur px-2 py-1 text-xs">
      <Link
        href={hrefEn}
        className={
          isEn
            ? "px-2 py-1 font-semibold text-[var(--accent)]"
            : "px-2 py-1 text-white/80 hover:text-white"
        }
        aria-current={isEn ? "page" : undefined}
      >
        EN
      </Link>
      <span className="text-white/30">/</span>
      <Link
        href={hrefDe}
        className={
          !isEn
            ? "px-2 py-1 font-semibold text-[var(--accent)]"
            : "px-2 py-1 text-white/80 hover:text-white"
        }
        aria-current={!isEn ? "page" : undefined}
      >
        DE
      </Link>
    </div>
  );
}

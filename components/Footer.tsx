"use client";

import { useState } from "react";
import Modal from "./Modal";
import { t, type Lang, dict } from "@/lib/i18n";

type ActiveDoc = "datenschutz" | "impressum" | null;

export default function Footer({ lang }: { lang: Lang }) {
  const [active, setActive] = useState<ActiveDoc>(null);
  const year = new Date().getFullYear();

  const title = active ? t(lang, `footer.${active}`) : "";
  const content = active ? (dict[lang].footer.content[active] as string) : "";

  return (
    <>
      <footer
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #12E5C2 0%, #0FDAB9 100%)",
        }}
      >
        {/* Wave – داخل الفوتر */}
        <svg
          className="absolute top-0 left-0 w-full h-[120px] block"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="#ffffff"
            d="M0,0 C240,80 520,80 760,55 C980,30 1200,25 1440,40 L1440,0 L0,0 Z"
          />
        </svg>

        {/* المحتوى */}
        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-white/90">
            <p className="text-sm">© {year} Alkredi</p>

            <div className="flex items-center gap-6 text-sm">
              <button
                onClick={() => setActive("datenschutz")}
                className="hover:opacity-100 opacity-80 transition"
              >
                {t(lang, "footer.datenschutz")}
              </button>
              <button
                onClick={() => setActive("impressum")}
                className="hover:opacity-100 opacity-80 transition"
              >
                {t(lang, "footer.impressum")}
              </button>
            </div>

            <a
              href="https://www.linkedin.com/in/anis-alkredi-868088166/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 hover:bg-white/25 transition"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm8 0h4.8v2.2h.1c.7-1.3 2.4-2.7 5-2.7 5.3 0 6.1 3.5 6.1 8v8.5h-5V16c0-2 0-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.4v8.2H8V8z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>

      {active && (
        <Modal
          open
          onClose={() => setActive(null)}
          title={title}
          content={content}
        />
      )}
    </>
  );
}

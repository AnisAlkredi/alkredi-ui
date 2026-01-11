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
      {/* Wave فوق الفوتر */}
      <div className="relative">
        <svg
          className="block w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="var(--teal-main)"
            d="M0,80 C240,40 520,40 760,65 C980,90 1200,95 1440,80 L1440,120 L0,120 Z"
          />
        </svg>

        <footer
          className="w-full"
          style={{ backgroundColor: "var(--teal-main)" }}
        >
          <div className="mx-auto max-w-6xl px-6 py-10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-white">
              <p className="text-sm opacity-90">© {year} Alkredi</p>

              <div className="flex items-center gap-6 text-sm">
                <button
                  onClick={() => setActive("datenschutz")}
                  className="hover:underline underline-offset-4"
                >
                  {t(lang, "footer.datenschutz")}
                </button>
                <button
                  onClick={() => setActive("impressum")}
                  className="hover:underline underline-offset-4"
                >
                  {t(lang, "footer.impressum")}
                </button>
              </div>

              <a
                href="https://www.linkedin.com/in/anis-alkredi-868088166/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="opacity-90 hover:opacity-100 transition"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm8 0h4.8v2.2h.1c.7-1.3 2.4-2.7 5-2.7 5.3 0 6.1 3.5 6.1 8v8.5h-5V16c0-2 0-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.4v8.2H8V8z"/>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>

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

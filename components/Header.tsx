"use client";

import Link from "next/link";
import { useState } from "react";
import type { Lang } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";
import { Menu, X } from "lucide-react";

export default function Header({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand bg-[rgba(18,6,60,0.55)] backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href={lang === "en" ? "/en" : "/"} className="flex items-center gap-3">
            <span className="text-2xl font-extrabold text-white">Alkredi</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/85">
            <a href="#services" className="hover:text-white">{t(lang, "nav.services")}</a>
            <a href="#about" className="hover:text-white">{t(lang, "nav.about")}</a>
            <a href="#contact" className="hover:text-white">{t(lang, "nav.contact")}</a>
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher lang={lang} />
            <a href="#contact" className="btn-primary text-sm">
              {t(lang, "cta.primary")}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden rounded-md p-2 text-white/90 hover:bg-white/10"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/45 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        >
          <div
            className="ml-auto h-full w-80 bg-[rgba(23,6,60,0.95)] border-l border-brand p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="text-xl font-extrabold text-white">Alkredi</span>
              <button
                className="rounded-md p-2 text-white/90 hover:bg-white/10"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-4">
              <LanguageSwitcher lang={lang} />
            </div>

            <nav className="mt-6 flex flex-col gap-4 text-base text-white/85">
              <a href="#services" onClick={() => setOpen(false)} className="hover:text-white">
                {t(lang, "nav.services")}
              </a>
              <a href="#about" onClick={() => setOpen(false)} className="hover:text-white">
                {t(lang, "nav.about")}
              </a>
              <a href="#contact" onClick={() => setOpen(false)} className="hover:text-white">
                {t(lang, "nav.contact")}
              </a>
            </nav>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex btn-primary text-sm"
            >
              {t(lang, "cta.primary")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

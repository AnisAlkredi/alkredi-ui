"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Lang } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";
import { Menu, X } from "lucide-react";

/** سويتشر لغة واضح للموبايل (EN | DE) */
function MobileLangSwitch({ lang, onPick }: { lang: Lang; onPick?: () => void }) {
  const isEN = lang === "en";
  return (
    <div className="rounded-2xl border border-brand bg-white/5 p-3">
      <div className="text-xs font-semibold tracking-[0.18em] text-white/70 uppercase px-1 pb-3">
        Language
      </div>

      <div className="grid grid-cols-2 gap-2">
        <Link
          href="/"
          onClick={onPick}
          className={[
            "inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-extrabold transition",
            !isEN
              ? "bg-white text-[#140533] shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
              : "bg-white/5 text-white/85 hover:bg-white/10 border border-white/10",
          ].join(" ")}
        >
          DE
        </Link>

        <Link
          href="/en"
          onClick={onPick}
          className={[
            "inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-extrabold transition",
            isEN
              ? "bg-white text-[#140533] shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
              : "bg-white/5 text-white/85 hover:bg-white/10 border border-white/10",
          ].join(" ")}
        >
          EN
        </Link>
      </div>
    </div>
  );
}

export default function Header({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // غمقان الهيدر عند السكول (يحل الشفافية/التصادم)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // منع سكرول الصفحة خلف قائمة الموبايل
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const headerClass = useMemo(() => {
    return [
      // isolate مهم: يمنع مشاكل stacking context مع blur على iOS
      "sticky top-0 z-50 isolate border-b border-brand transition-colors duration-200",
      "supports-[backdrop-filter]:backdrop-blur-md",
      scrolled
        ? "bg-[rgba(18,6,60,0.92)] shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
        : "bg-[rgba(18,6,60,0.62)]",
    ].join(" ");
  }, [scrolled]);

  return (
    <>
      <header className={headerClass}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex h-20 items-center justify-between">
            <Link href={lang === "en" ? "/en" : "/"} className="flex items-center gap-3">
              <span className="text-2xl font-extrabold text-white">Alkredi</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8 text-sm text-white/85">
              <a href="#services" className="hover:text-white">
                {t(lang, "nav.services")}
              </a>
              <a href="#about" className="hover:text-white">
                {t(lang, "nav.about")}
              </a>
              <a href="#contact" className="hover:text-white">
                {t(lang, "nav.contact")}
              </a>
            </nav>

            {/* Desktop actions */}
            <div className="hidden md:flex items-center gap-4">
              <LanguageSwitcher lang={lang} />
              <a href="#contact" className="btn-primary text-sm">
                {t(lang, "hero.cta")}
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
      </header>

      {/* ملاحظة مهمة: وضعنا الدرور خارج <header> بالكامل لتفادي iOS stacking bugs */}
      {open && (
        <div
          className="fixed inset-0 z-[999] md:hidden"
          aria-modal="true"
          role="dialog"
        >
          {/* الخلفية */}
          <div
            className="absolute inset-0 bg-black/60 supports-[backdrop-filter]:backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* اللوح */}
          <div
            className="absolute right-0 top-0 h-[100dvh] w-80 max-w-[85vw] border-l border-brand bg-[rgba(23,6,60,0.985)] px-5 pb-6 pt-[calc(env(safe-area-inset-top)+16px)] overflow-y-auto"
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

            {/* لغة واضحة ومستقلة */}
            <div className="mt-5">
              <MobileLangSwitch lang={lang} onPick={() => setOpen(false)} />
            </div>

            <nav className="mt-6 flex flex-col gap-2 text-base text-white/85">
              <a
                href="#services"
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 hover:bg-white/10 hover:text-white transition"
              >
                {t(lang, "nav.services")}
              </a>
              <a
                href="#about"
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 hover:bg-white/10 hover:text-white transition"
              >
                {t(lang, "nav.about")}
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 hover:bg-white/10 hover:text-white transition"
              >
                {t(lang, "nav.contact")}
              </a>
            </nav>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex btn-primary text-sm w-full justify-center"
            >
              {t(lang, "hero.cta")}
            </a>
          </div>
        </div>
      )}
    </>
  );
}

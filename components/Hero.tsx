"use client";

import { useEffect, useMemo, useState } from "react";
import type { Lang } from "@/lib/i18n";
import { servicesFor, t } from "@/lib/i18n";

function PhoneMock({ lang, active }: { lang: Lang; active: number }) {
  const services = servicesFor(lang);

  const accents = useMemo(
    () => [
      "rgba(18,229,194,0.95)",
      "rgba(53,183,255,0.95)",
      "rgba(167,139,250,0.95)",
    ],
    []
  );

  const activeTitle = services[active]?.title ?? "";
  const activeDesc = services[active]?.description ?? "";

  return (
    <div className="relative w-full max-w-[440px]" dir="ltr">
      <div
        className="pointer-events-none absolute -inset-10 rounded-[52px] blur-3xl opacity-70"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(18,229,194,0.18), transparent 55%)," +
            "radial-gradient(circle at 70% 40%, rgba(53,183,255,0.14), transparent 55%)," +
            "radial-gradient(circle at 55% 80%, rgba(255,255,255,0.08), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative rounded-[46px] border border-white/15 bg-white/5 backdrop-blur-md shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
        <div className="m-3 overflow-hidden rounded-[38px] border border-white/10 bg-[rgba(10,4,30,0.35)]">
          <div className="flex justify-center pt-4">
            <div className="h-6 w-32 rounded-full border border-white/10 bg-black/35" />
          </div>

          <div className="flex items-center justify-between px-5 pb-3 pt-4">
            <div className="flex gap-2">
              <div className="h-2.5 w-10 rounded-full bg-white/15" />
              <div className="h-2.5 w-8 rounded-full bg-white/10" />
            </div>
            <div className="h-2.5 w-24 rounded-full bg-white/10" />
            <div className="h-3 w-3 rounded-full" style={{ background: accents[active] }} />
          </div>

          <div className="px-5 pb-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between">
                <div className="h-2.5 w-24 rounded-full bg-white/10" />
                <div className="h-7 w-20 rounded-xl border border-white/10 bg-white/5" />
              </div>

              <div className="mt-4">
                <div
                  key={`title-${active}-${lang}`}
                  className="animate-fadeSlide text-lg font-extrabold text-white"
                  style={{ lineHeight: 1.2 }}
                >
                  {activeTitle}
                </div>

                <div
                  key={`desc-${active}-${lang}`}
                  className="animate-fadeSlide mt-2 text-sm leading-relaxed text-white/75"
                >
                  {activeDesc}
                </div>

                <div className="mt-4 flex gap-2">
                  <div
                    className="h-9 w-28 rounded-xl shadow-[0_14px_40px_rgba(0,0,0,0.25)]"
                    style={{ background: accents[active] }}
                  />
                  <div className="h-9 w-20 rounded-xl border border-white/10 bg-white/5" />
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <div className="h-2.5 w-16 rounded-full bg-white/10" />
                <div className="mt-3 h-8 rounded-xl border border-white/10 bg-white/5" />
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <div className="h-2.5 w-20 rounded-full bg-white/10" />
                <div className="mt-3 h-8 rounded-xl border border-white/10 bg-white/5" />
              </div>
            </div>

            <div className="mt-4">
              <div className="h-2 w-full rounded-full bg-white/10" />
              <div
                className="animate-progress mt-1 h-2 rounded-full"
                style={{ width: "70%", background: accents[active] }}
              />
            </div>

            <div className="mt-4 flex items-center justify-center gap-2">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="h-2.5 w-2.5 rounded-full transition"
                  style={{
                    background: i === active ? accents[i] : "rgba(255,255,255,0.18)",
                    transform: i === active ? "scale(1.1)" : "scale(1)",
                  }}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlide {
          0% { opacity: 0; transform: translateY(10px); filter: blur(2px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .animate-fadeSlide { animation: fadeSlide 420ms ease-out both; }

        @keyframes progress {
          0% { transform: translateX(-18%); opacity: 0.7; }
          100% { transform: translateX(0); opacity: 1; }
        }
        .animate-progress { animation: progress 700ms ease-out both; }
      `}</style>
    </div>
  );
}

export default function Hero({ lang }: { lang: Lang }) {
  const services = servicesFor(lang);
  const max = Math.max(1, Math.min(services.length, 3));
  const [active, setActive] = useState(0);

  // مهم: عند تغيير اللغة، رجّع المؤشر للبداية حتى ما يطلع عنوان/وصف “مقطوع” بين لغتين
  useEffect(() => {
    setActive(0);
  }, [lang]);

  useEffect(() => {
    if (max <= 1) return;
    const id = window.setInterval(() => setActive((p) => (p + 1) % max), 2600);
    return () => window.clearInterval(id);
  }, [max]);

  return (
    <section className="relative overflow-hidden" dir="ltr">
      <div className="relative bg-gradient-to-b from-[#2b0a5a] to-[#240a57]">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(circle at 20% 25%, rgba(18,229,194,0.18), transparent 55%)," +
              "radial-gradient(circle at 70% 35%, rgba(53,183,255,0.14), transparent 55%)",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-28">
          {/* ثابت: نص يسار + هاتف يمين */}
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* Text */}
            <div className="w-full text-left" dir="ltr">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold tracking-[0.22em] text-white/80 ring-1 ring-white/15 backdrop-blur">
                <span>{t(lang, "hero.kicker")}</span>
              </div>

              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
                {t(lang, "hero.title")}
              </h1>

              <p className="mt-6 max-w-xl text-base sm:text-lg text-white/85 leading-relaxed">
                {t(lang, "hero.subtitle")}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5 justify-start">
                <a href="#contact" className="btn-primary">
                  {t(lang, "hero.cta")}
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur hover:bg-white/10"
                >
                  {t(lang, "hero.secondary")}
                </a>
              </div>

              <p className="mt-6 max-w-xl text-xs sm:text-sm text-white/70">
                {t(lang, "hero.note")}
              </p>
            </div>

            {/* Phone */}
            <div className="w-full flex justify-center lg:justify-end">
              <PhoneMock lang={lang} active={active} />
            </div>
          </div>
        </div>

        <svg
          className="absolute -bottom-px left-0 w-full block"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="var(--teal-main)"
            d="M0,70 C240,110 520,110 760,85 C980,60 1200,55 1440,70 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
    </section>
  );
}

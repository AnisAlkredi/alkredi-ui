import type { Lang } from "@/lib/i18n";
import { t } from "@/lib/i18n";

export default function Hero({ lang }: { lang: Lang }) {
  return (
    <section className="relative overflow-hidden">
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
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold tracking-[0.22em] text-white/80 ring-1 ring-white/15 backdrop-blur">
                <span>WEB</span>
                <span className="h-px w-4 bg-white/30" />
                <span>AI</span>
                <span className="h-px w-4 bg-white/30" />
                <span>AUTOMATION</span>
              </div>

              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
                {t(lang, "hero.title")}
              </h1>

              <p className="mt-6 max-w-xl text-base sm:text-lg text-white/85 leading-relaxed">
                {t(lang, "hero.subtitle")}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5">
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

              <p className="mt-6 text-xs sm:text-sm text-white/70 max-w-xl">
                {lang === "de"
                  ? "Fokus auf Klarheit, saubere Umsetzung und Lösungen, die wirklich genutzt werden."
                  : "Focused on clarity, clean execution, and solutions that are actually used."}
              </p>
            </div>

            <div className="relative flex items-center justify-center">
              <div
                className="absolute h-72 w-72 rounded-full blur-3xl opacity-70"
                style={{
                  background:
                    "radial-gradient(circle, rgba(18,229,194,0.55), transparent 60%)",
                }}
                aria-hidden="true"
              />

              <div
                className="relative select-none text-[220px] sm:text-[260px] lg:text-[300px] font-extrabold leading-none"
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, var(--teal-main) 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 30px 80px rgba(0,0,0,0.35)",
                }}
                aria-hidden="true"
              >
                A
              </div>
            </div>
          </div>
        </div>

        {/* Wave (سطر واحد لتجنب hydration mismatch) */}
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

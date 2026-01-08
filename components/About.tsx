import type { Lang } from "@/lib/i18n";
import { t } from "@/lib/i18n";

export default function About({ lang }: { lang: Lang }) {
  return (
    <section id="about" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-[0_14px_50px_rgba(15,23,42,0.08)]">
          {/* accent corner */}
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(18,229,194,0.28), transparent 60%)",
            }}
            aria-hidden="true"
          />

          <p className="text-xs font-semibold tracking-[0.22em] text-slate-500 uppercase">
            {lang === "de" ? "ÜBER MICH" : "ABOUT"}
          </p>

          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[#0C8F7D]">
            {t(lang, "about.title")}
          </h2>

          <p className="mt-5 max-w-3xl text-slate-700 leading-relaxed">
            {t(lang, "about.body")}
          </p>

          <p className="mt-6 inline-flex rounded-full bg-[rgba(18,229,194,0.14)] px-4 py-2 text-sm font-semibold text-[#0C8F7D]">
            {t(lang, "about.tagline")}
          </p>
        </div>
      </div>
    </section>
  );
}

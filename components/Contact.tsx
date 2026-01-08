"use client";

import type { Lang } from "@/lib/i18n";
import { t } from "@/lib/i18n";

export default function Contact({ lang }: { lang: Lang }) {
  return (
    <section id="contact" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* نص */}
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-slate-500 uppercase">
              {lang === "de" ? "KONTAKT" : "CONTACT"}
            </p>

            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[#0C8F7D]">
              {t(lang, "contact.title")}
            </h2>

            <p className="mt-4 max-w-xl text-slate-700 leading-relaxed">
              {t(lang, "contact.body")}
            </p>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-[rgba(18,229,194,0.10)] p-5 text-sm text-slate-700">
              {lang === "de"
                ? "Kurz gesagt: Sie sagen mir Ziel & Kontext — ich liefere eine saubere Lösung und halte Sie transparent auf dem Laufenden."
                : "In short: you share the goal & context — I deliver a clean solution and keep you updated transparently."}
            </div>
          </div>

          {/* فورم */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-[0_14px_50px_rgba(15,23,42,0.08)]">
            <form
              className="grid gap-4"
              // TODO: لو تريد Formspree: ضع action + method
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-[var(--teal-main)] focus:ring-2 focus:ring-[rgba(18,229,194,0.25)]"
                placeholder={t(lang, "contact.name")}
                name="name"
              />

              <input
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-[var(--teal-main)] focus:ring-2 focus:ring-[rgba(18,229,194,0.25)]"
                placeholder={t(lang, "contact.email")}
                name="email"
                type="email"
              />

              <textarea
                className="min-h-[150px] w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-[var(--teal-main)] focus:ring-2 focus:ring-[rgba(18,229,194,0.25)]"
                placeholder={t(lang, "contact.message")}
                name="message"
              />

              <button type="submit" className="btn-primary w-fit">
                {t(lang, "contact.submit")}
              </button>

              <p className="text-xs text-slate-500">{t(lang, "contact.note")}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

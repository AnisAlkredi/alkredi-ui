"use client";

import { useRef, useState } from "react";
import type { Lang } from "@/lib/i18n";
import { t } from "@/lib/i18n";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact({ lang }: { lang: Lang }) {
  const endpoint = "https://formspree.io/f/xdkzzywd";

  const [status, setStatus] = useState<Status>("idle");
  const [errMsg, setErrMsg] = useState<string>("");
  const formRef = useRef<HTMLFormElement | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();

        // رجوع “للصفحة” عمليًا عبر التمرير لنفس القسم
        setTimeout(() => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        }, 50);

        return;
      }

      const data = await res.json().catch(() => null);
      setStatus("error");
      setErrMsg(
        (data && (data.error || data.message)) ||
          (lang === "de"
            ? "Senden fehlgeschlagen. Bitte versuchen Sie es erneut."
            : "Sending failed. Please try again.")
      );
    } catch {
      setStatus("error");
      setErrMsg(
        lang === "de"
          ? "Netzwerkfehler. Bitte prüfen Sie Ihre Verbindung."
          : "Network error. Please check your connection."
      );
    }
  }

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
            <form ref={formRef} className="grid gap-4" onSubmit={onSubmit}>
              {/* Honeypot ضد السبام */}
              <input
                type="text"
                name="_gotcha"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Subject في الإيميل */}
              <input
                type="hidden"
                name="_subject"
                value={
                  lang === "de"
                    ? "Neue Anfrage über alkredi.com"
                    : "New inquiry via alkredi.com"
                }
              />

              <input
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-[var(--teal-main)] focus:ring-2 focus:ring-[rgba(18,229,194,0.25)]"
                placeholder={t(lang, "contact.name")}
                name="name"
                required
              />

              <input
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-[var(--teal-main)] focus:ring-2 focus:ring-[rgba(18,229,194,0.25)]"
                placeholder={t(lang, "contact.email")}
                name="email"
                type="email"
                required
              />

              <textarea
                className="min-h-[150px] w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-[var(--teal-main)] focus:ring-2 focus:ring-[rgba(18,229,194,0.25)]"
                placeholder={t(lang, "contact.message")}
                name="message"
                required
              />

              <button
                type="submit"
                className="btn-primary w-fit disabled:opacity-60 disabled:cursor-not-allowed"
                disabled={status === "sending"}
              >
                {status === "sending"
                  ? lang === "de"
                    ? "Senden..."
                    : "Sending..."
                  : t(lang, "contact.submit")}
              </button>

              <p className="text-xs text-slate-500">{t(lang, "contact.note")}</p>

              {status === "success" && (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
                  {lang === "de"
                    ? "Danke! Ihre Nachricht wurde gesendet."
                    : "Thanks! Your message has been sent."}
                </div>
              )}

              {status === "error" && (
                <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">
                  {errMsg || (lang === "de" ? "Fehler beim Senden." : "Error while sending.")}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

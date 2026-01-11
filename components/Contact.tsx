"use client";

import { useMemo, useState } from "react";
import type { Lang } from "@/lib/i18n";
import { t } from "@/lib/i18n";

const FORMSPREE_ID = "xdkzzywd"; // <-- ضع Form ID هنا (مثل: xqkrabcd)

type Status = "idle" | "sending" | "success" | "error";

export default function Contact({ lang }: { lang: Lang }) {
  const endpoint = useMemo(() => `https://formspree.io/f/${FORMSPREE_ID}`, []);

  const [status, setStatus] = useState<Status>("idle");
  const [errMsg, setErrMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // لو نسيت تحط الفورم آي دي، خلّي الخطأ واضح بدل “صمت”
    if (!FORMSPREE_ID || FORMSPREE_ID === "REPLACE_ME") {
      setStatus("error");
      setErrMsg("Formspree Form ID is missing. Please set FORMSPREE_ID in Contact.tsx.");
      return;
    }

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
        return;
      }

      const data = await res.json().catch(() => null);
      setStatus("error");
      setErrMsg(
        (data && data.error) ||
          (lang === "de"
            ? "Senden fehlgeschlagen. Bitte versuchen Sie es erneut."
            : "Sending failed. Please try again.")
      );
    } catch (err) {
      setStatus("error");
      setErrMsg(
        lang === "de"
          ? "Netzwerkfehler. Bitte prüfen Sie Ihre Verbindung."
          : "Network error. Please check your connection."
      );
    }
  }

  const title = t(lang, "contact.title");
  const body = t(lang, "contact.body");

  return (
    <section id="contact" className="bg-white text-[#12063c]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold">{title}</h2>
          <p className="mt-3 text-[#12063c]/80">{body}</p>
        </div>

        <div className="mt-10 max-w-2xl rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <form
            onSubmit={onSubmit}
            action={endpoint}
            method="POST"
            className="space-y-4"
          >
            {/* Honeypot ضد السبام */}
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold">{t(lang, "contact.name")}</span>
                <input
                  name="name"
                  required
                  className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--accent)]"
                  placeholder={lang === "de" ? "Ihr Name" : "Your name"}
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold">{t(lang, "contact.email")}</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--accent)]"
                  placeholder={lang === "de" ? "Ihre E-Mail" : "Your email"}
                />
              </label>
            </div>

            <label className="block">
              <span className="text-sm font-semibold">{t(lang, "contact.message")}</span>
              <textarea
                name="message"
                required
                rows={6}
                className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--accent)]"
                placeholder={lang === "de" ? "Worum geht es?" : "How can I help?"}
              />
            </label>

            {/* Subject مفيد في البريد */}
            <input
              type="hidden"
              name="_subject"
              value={lang === "de" ? "Neue Anfrage über alkredi.com" : "New inquiry via alkredi.com"}
            />

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending"
                  ? (lang === "de" ? "Senden..." : "Sending...")
                  : t(lang, "contact.submit")}
              </button>

              <p className="text-xs text-[#12063c]/70">{t(lang, "contact.note")}</p>
            </div>

            {status === "success" && (
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
                {lang === "de"
                  ? "Danke! Ihre Nachricht wurde gesendet."
                  : "Thanks! Your message has been sent."}
              </div>
            )}

            {status === "error" && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">
                {errMsg || (lang === "de" ? "Fehler beim Senden." : "Error while sending.")}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

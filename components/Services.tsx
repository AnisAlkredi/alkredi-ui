import type { Lang } from "@/lib/i18n";
import { t, servicesFor } from "@/lib/i18n";

export default function Services({ lang }: { lang: Lang }) {
  const items = servicesFor(lang);

  return (
    <section id="services" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold tracking-[0.22em] text-slate-500 uppercase">
            WEB · AI · AUTOMATION
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0C8F7D]">
            {t(lang, "services.title")}
          </h2>
          <p className="max-w-2xl text-slate-600">
            {lang === "de"
              ? "Drei Bausteine, die sich kombinieren lassen – klar, schnell und sauber umgesetzt."
              : "Three building blocks you can mix and match — clear, fast, and cleanly delivered."}
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((it, idx) => (
            <article
              key={it.title}
              className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.10)]"
            >
              {/* accent bar */}
              <div
                className="absolute left-0 top-6 h-10 w-1.5 rounded-full"
                style={{
                  background:
                    idx === 0
                      ? "var(--teal-main)"
                      : idx === 1
                      ? "var(--teal-dark)"
                      : "linear-gradient(180deg,var(--teal-main),var(--teal-dark))",
                }}
                aria-hidden="true"
              />

              <h3 className="pl-4 text-lg font-extrabold text-slate-900">
                {it.title}
              </h3>

              <p className="mt-3 pl-4 text-sm leading-relaxed text-slate-600">
                {it.description}
              </p>

              <a
                href="#contact"
                className="mt-6 inline-flex pl-4 text-sm font-semibold text-[#0C8F7D] hover:underline"
              >
                {it.cta} →
              </a>

              {/* subtle glow */}
              <div
                className="pointer-events-none absolute -inset-1 rounded-2xl opacity-0 blur-2xl transition group-hover:opacity-40"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(18,229,194,0.25), transparent 55%)",
                }}
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

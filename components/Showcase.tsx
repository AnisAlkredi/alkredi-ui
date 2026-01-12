"use client";

import type { Lang } from "@/lib/i18n";
import { showcaseFor, t } from "@/lib/i18n";

function Pill({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold text-slate-700">
      {text}
    </span>
  );
}

/** دوائر ملوّنة بدل الأفاتارات */
function ColorDot({ color }: { color: string }) {
  return (
    <span
      className="h-8 w-8 rounded-full border-2 border-white shadow-[0_10px_28px_rgba(15,23,42,0.14)]"
      style={{ background: color }}
      aria-hidden="true"
    />
  );
}

function DotStack({ colors }: { colors: string[] }) {
  return (
    <div className="flex -space-x-2">
      {colors.slice(0, 3).map((c, i) => (
        <ColorDot key={`${c}-${i}`} color={c} />
      ))}
    </div>
  );
}

function contributorsLabel(lang: Lang) {
  if (lang === "de") return "+3 Mitwirkende";
  return "+3 contributors";
}

function MiniAppMock({ variant }: { variant: "web" | "mobile" | "jira" }) {
  // “شاشة” وهمية داخل البطاقة (بدون صور خارجية)

  if (variant === "mobile") {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-[rgba(18,229,194,0.10)]">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="h-2.5 w-16 rounded-full bg-slate-200/80" />
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-slate-200/80" />
            <div className="h-2.5 w-2.5 rounded-full bg-slate-200/80" />
            <div className="h-2.5 w-2.5 rounded-full bg-slate-200/80" />
          </div>
        </div>

        <div className="px-4 pb-4">
          <div className="rounded-xl bg-white/70 p-3">
            <div className="h-3 w-24 rounded-full bg-slate-200/80" />
            <div className="mt-3 space-y-2">
              <div className="h-2.5 w-full rounded-full bg-slate-200/70" />
              <div className="h-2.5 w-5/6 rounded-full bg-slate-200/70" />
              <div className="h-2.5 w-4/6 rounded-full bg-slate-200/70" />
            </div>
            <div className="mt-4 flex gap-2">
              <div className="h-8 w-24 rounded-xl bg-[var(--teal-main)]/80" />
              <div className="h-8 w-16 rounded-xl border border-slate-200 bg-white/90" />
            </div>
          </div>

          <div className="mt-3 flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[var(--teal-main)]/80" />
            <div className="h-2.5 w-40 rounded-full bg-white/60" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === "jira") {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-[rgba(18,229,194,0.10)]">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-xl border border-slate-200 bg-white/80" />
            <div>
              <div className="h-2.5 w-24 rounded-full bg-slate-200/80" />
              <div className="mt-1 h-2 w-14 rounded-full bg-slate-200/60" />
            </div>
          </div>
          <span className="rounded-full border border-slate-200 bg-white/70 px-2.5 py-1 text-[10px] font-bold text-slate-700">
            STORY
          </span>
        </div>

        <div className="px-4 pb-4">
          <div className="rounded-xl border border-slate-200/60 bg-white/70 p-3">
            <div className="flex items-center justify-between">
              <div className="h-3 w-40 rounded-full bg-slate-200/80" />
              <div className="h-6 w-16 rounded-full bg-[var(--teal-main)]/70" />
            </div>

            <div className="mt-3 space-y-2">
              <div className="h-2.5 w-full rounded-full bg-slate-200/70" />
              <div className="h-2.5 w-5/6 rounded-full bg-slate-200/70" />
              <div className="h-2.5 w-4/6 rounded-full bg-slate-200/70" />
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex -space-x-2">
                <div className="h-7 w-7 rounded-full border border-slate-200 bg-white" />
                <div className="h-7 w-7 rounded-full border border-slate-200 bg-white" />
                <div className="h-7 w-7 rounded-full border border-slate-200 bg-white" />
              </div>
              <div className="h-2.5 w-24 rounded-full bg-slate-200/70" />
            </div>
          </div>

          <div className="mt-3">
            <div className="h-2 w-full rounded-full bg-white/60" />
            <div className="mt-1 h-2 w-2/3 rounded-full bg-[var(--teal-main)]/70" />
          </div>
        </div>
      </div>
    );
  }

  // variant === "web"
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-[rgba(18,229,194,0.10)]">
      <div className="flex items-center gap-2 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-slate-200/80" />
        <div className="h-3 w-3 rounded-full bg-slate-200/80" />
        <div className="h-3 w-3 rounded-full bg-slate-200/80" />
        <div className="ml-2 h-8 flex-1 rounded-xl border border-slate-200 bg-white/70" />
      </div>

      <div className="px-4 pb-4">
        <div className="rounded-xl border border-slate-200/60 bg-white/70 p-3">
          <div className="h-3 w-28 rounded-full bg-slate-200/80" />
          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="h-10 rounded-xl border border-slate-200 bg-white/80" />
            <div className="h-10 rounded-xl border border-slate-200 bg-white/80" />
            <div className="h-10 rounded-xl border border-slate-200 bg-white/80" />
          </div>
          <div className="mt-3 space-y-2">
            <div className="h-2.5 w-full rounded-full bg-slate-200/70" />
            <div className="h-2.5 w-5/6 rounded-full bg-slate-200/70" />
            <div className="h-2.5 w-4/6 rounded-full bg-slate-200/70" />
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="h-8 w-28 rounded-xl bg-[var(--teal-main)]/80" />
          <div className="h-8 w-20 rounded-xl border border-slate-200 bg-white/80" />
        </div>
      </div>
    </div>
  );
}

export default function Showcase({ lang }: { lang: Lang }) {
  const items = showcaseFor(lang);
  const variants: Array<"web" | "mobile" | "jira"> = ["web", "mobile", "jira"];

  // ألوان ثابتة لطيفة ومتناسقة مع الواجهة
  const dotColors: string[][] = [
    ["#22C3A8", "#0EA5E9", "#A78BFA"], // web
    ["#34D399", "#F59E0B", "#60A5FA"], // mobile
    ["#2DD4BF", "#FB7185", "#94A3B8"], // jira
  ];

  return (
    <section id="showcase" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.22em] text-slate-500 uppercase">
            {t(lang, "showcase.kicker")}
          </p>

          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[#0C8F7D]">
            {t(lang, "showcase.title")}
          </h2>

          <p className="mt-4 mx-auto max-w-3xl text-slate-700 leading-relaxed">
            {t(lang, "showcase.subtitle")}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {items.slice(0, 3).map((it, idx) => (
            <article
              key={`${it.title}-${idx}`}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_14px_50px_rgba(15,23,42,0.06)] transition hover:shadow-[0_18px_70px_rgba(15,23,42,0.10)]"
            >
              <MiniAppMock variant={variants[idx] ?? "web"} />

              {/* العنوان + البادج */}
              <div className="mt-5 flex items-start justify-between gap-3">
                <h3 className="text-lg font-extrabold text-slate-900">{it.title}</h3>
                {it.badge ? <Pill text={it.badge} /> : null}
              </div>

              {/* سطر الدوائر */}
              <div className="mt-3 flex items-center gap-3">
                <DotStack colors={dotColors[idx] ?? dotColors[0]} />
                <span className="text-sm text-slate-600">{contributorsLabel(lang)}</span>
              </div>

              {/* الوصف */}
              <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                {it.description}
              </p>

              {/* CTA */}
              <div className="mt-4">
                <span className="text-sm font-semibold text-[#0C8F7D] opacity-90">
                  {t(lang, "showcase.cta")} →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

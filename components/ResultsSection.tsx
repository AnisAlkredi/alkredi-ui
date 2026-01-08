import type { Lang } from "@/lib/i18n";

export default function ResultsSection({ lang }: { lang: Lang }) {
  return (
    <section className="relative bg-[#f3f6f7]">
      {/* Wave علوي */}
      <svg
        className="absolute top-0 left-0 w-full -translate-y-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          fill="#f3f6f7"
          d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        />
      </svg>

      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* النص */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a8f7a]">
              {lang === "de"
                ? "Klare Ergebnisse – ohne Umwege"
                : "Clear results — without complexity"}
            </h2>

            <p className="mt-5 max-w-xl text-base sm:text-lg text-slate-700 leading-relaxed">
              {lang === "de"
                ? "Ich setze Projekte so um, dass Sie schnell ein vorzeigbares Ergebnis haben – technisch sauber, verständlich erklärt und ohne unnötige Schleifen."
                : "I deliver projects so you get visible results fast — technically clean, clearly explained, and without unnecessary loops."}
            </p>

            <p className="mt-4 max-w-xl text-slate-600 leading-relaxed">
              {lang === "de"
                ? "Ob Landing Page, Automatisierung oder Beratung: Sie behalten jederzeit den Überblick und wissen genau, was als Nächstes passiert."
                : "Whether it’s a landing page, automation, or consulting: you always know what’s happening and what the next step is."}
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex font-semibold text-[#4b2fcf] hover:underline"
            >
              {lang === "de"
                ? "Projekt unverbindlich besprechen →"
                : "Discuss your project →"}
            </a>
          </div>

          {/* Card / Übersicht */}
          <div className="relative">
            <div className="rounded-2xl bg-white shadow-[0_30px_80px_rgba(15,23,42,0.18)] ring-1 ring-black/5 p-4">
              <div className="rounded-xl bg-gradient-to-br from-[#6d68d6] to-[#5b57c8] p-4 text-white text-sm font-semibold">
                {lang === "de" ? "Projektübersicht" : "Project overview"}
              </div>

              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700">
                  <span>{lang === "de" ? "Ziel definiert" : "Goal defined"}</span>
                  <span className="font-semibold text-[#0a8f7a]">
                    ✓
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700">
                  <span>{lang === "de" ? "Umsetzung" : "Implementation"}</span>
                  <span className="font-semibold text-[#0a8f7a]">
                    In progress
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700">
                  <span>{lang === "de" ? "Livegang" : "Go live"}</span>
                  <span className="font-semibold text-slate-400">
                    Pending
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700">
                  <span>{lang === "de" ? "Optimierung" : "Optimisation"}</span>
                  <span className="font-semibold text-slate-400">
                    Planned
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

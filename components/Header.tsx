import LanguageSwitcher from "./LanguageSwitcher";
import type { Lang } from "@/lib/i18n";
import { t } from "@/lib/i18n";

export default function Header({ lang }: { lang: Lang }) {
  return (
    <header className="sticky top-0 z-50 border-b border-brand bg-black/10 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_0_4px_rgba(0,230,195,.18)]" />
          </span>
          <span className="text-lg font-extrabold tracking-tight">Alkredi</span>
        </a>

        <nav className="hidden sm:flex items-center gap-6 text-sm text-white/85">
          <a className="hover:text-white" href="#services">{t(lang, "nav.services")}</a>
          <a className="hover:text-white" href="#about">{t(lang, "nav.about")}</a>
          <a className="hover:text-white" href="#contact">{t(lang, "nav.contact")}</a>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher lang={lang} />
          <a href="#contact" className="btn-primary text-sm px-5 py-2">
            {t(lang, "hero.cta")}
          </a>
        </div>
      </div>
    </header>
  );
}

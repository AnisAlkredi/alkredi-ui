import type { Lang } from "@/lib/i18n";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Showcase from "@/components/ShowcaseNew"; // ✅ أضف هذا
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  const lang: Lang = "de";

  return (
    <>
      <Header lang={lang} />
      <Hero lang={lang} />
      <main>
        <Services lang={lang} />
        <Showcase lang={lang} /> {/* ✅ وأضف هذا */}
        <About lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}

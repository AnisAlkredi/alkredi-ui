import type { Lang } from "@/lib/i18n";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  const lang: Lang = "de"; // افتراضيًا

  return (
    <>
      <Header lang={lang} />
      <Hero lang={lang} />
      <Services lang={lang} />
      <About lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </>
  );
}

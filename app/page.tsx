"use client";

import { useSearchParams } from "next/navigation";
import type { Lang } from "@/lib/i18n";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  const sp = useSearchParams();
  const raw = sp.get("lang");

  const lang: Lang = raw === "en" ? "en" : "de";

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

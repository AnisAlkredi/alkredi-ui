export type Lang = "de" | "en";

function normalizeLang(l: string | Lang) {
  const s = String(l || "").toLowerCase();
  if (s.startsWith("en")) return "en" as Lang;
  return "de" as Lang;
}

type Dict = Record<string, any>;

export const dict: Record<Lang, Dict> = {
  de: {
    nav: { services: "Leistungen", about: "Über mich", contact: "Kontakt" },

    hero: {
      kicker: "WEB · KLAR · PERSÖNLICH",
      title: "Webdesign für Selbstständige – einfach & wirkungsvoll",
      subtitle:
        "Landing Pages und Websites, die Vertrauen schaffen und Kontaktanfragen erleichtern.",
      cta: "Kostenloses Erstgespräch (15 Min.)",
      secondary: "Beispiele ansehen",
      note: "Unverbindlich · Kein Verkaufsdruck · Persönlich betreut",
    },

    services: {
      title: "So unterstütze ich Sie",
      items: [
        {
          title: "Landing Pages",
          description:
            "Klare, schnelle Seiten für Selbstständige und kleine Unternehmen – mit Fokus auf Anfragen statt Spielereien.",
          cta: "Kostenlos anfragen",
        },
        {
          title: "Websites",
          description:
            "Moderne, übersichtliche Websites, die Ihr Angebot verständlich präsentieren und Vertrauen aufbauen.",
          cta: "Kostenlos anfragen",
        },
        {
          title: "Automatisierung (optional)",
          description:
            "Auf Wunsch unterstütze ich Sie mit einfachen Automatisierungen, z. B. für Kontaktanfragen oder interne Abläufe.",
          cta: "Kurz besprechen",
        },
      ],
    },

    showcase: {
      kicker: "OPTIONAL · ERWEITERBAR",
      title: "Individuelle Weblösungen bei Bedarf",
      subtitle:
        "Nach dem Start mit einer klaren Website können Lösungen schrittweise erweitert werden – strukturiert und nachvollziehbar.",
      cta: "Mehr erfahren",
      items: [
        {
          title: "Web-Anwendungen",
          description:
            "Individuelle Weblösungen, z. B. Kundenbereiche oder interne Tools – sauber umgesetzt und wartbar.",
          badge: "Next.js",
        },
        {
          title: "Integration & Abläufe",
          description:
            "Verknüpfung bestehender Tools und Prozesse, damit alles einfacher und effizienter läuft.",
          badge: "Automatisierung",
        },
        {
          title: "Projektumsetzung",
          description:
            "Klare Struktur, verständliche Schritte und persönliche Betreuung – von der Idee bis zur Umsetzung.",
          badge: "Strukturiert",
        },
      ],
    },

    about: {
      title: "Über mich",
      body:
        "Ich bin Anis Alkredi – IT-Berater mit langjähriger Erfahrung. Ich begleite Projekte persönlich und sorge für klare, funktionierende Lösungen ohne unnötige Komplexität.",
      tagline: "Klar. Persönlich. Verlässlich.",
    },

    contact: {
      title: "Kostenloses Erstgespräch",
      body:
        "Beschreiben Sie kurz Ihr Vorhaben. Wir klären gemeinsam, ob und wie ich Sie sinnvoll unterstützen kann.",
      name: "Name",
      email: "E-Mail",
      message: "Kurzbeschreibung Ihres Anliegens",
      submit: "Anfrage senden",
      note:
        "Unverbindlich · Ihre Anfrage wird vertraulich behandelt · Keine Weitergabe an Dritte.",
    },

    footer: {
      rights: "© {year} Alkredi. Alle Rechte vorbehalten.",
      impressum: "Impressum",
      datenschutz: "Datenschutz",
      content: {
        impressum: `Angaben gemäß § 5 TMG

Anis Alkredi
Sonnenstraße 11
83052 Brückmühl
Deutschland

Telefon: +49 176 57766182
E-Mail: anis.alkredi@gmail.com

Tätigkeit:
Freiberufliche IT-Beratung gemäß § 19 UStG
(Kleinunternehmerregelung, keine Umsatzsteuer).

Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
Anis Alkredi`,
        datenschutz: `Datenschutzerklärung

Der Schutz Ihrer persönlichen Daten ist uns wichtig.

Diese Website verwendet keine Cookies.

Wenn Sie das Kontaktformular nutzen, werden Ihre Angaben ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und direkt an die angegebene E-Mail-Adresse gesendet. Es erfolgt keine Weitergabe an Dritte.

Hosting erfolgt über Vercel (Vercel Inc., USA). Dabei können technische Server-Logs verarbeitet werden, ausschließlich zur Sicherstellung des Betriebs.

Ihre Rechte gemäß DSGVO bleiben unberührt.`,
      },
    },
  },

  en: {
    nav: { services: "Services", about: "About", contact: "Contact" },

    hero: {
      kicker: "WEB · CLEAR · PERSONAL",
      title: "Web design for freelancers – simple & effective",
      subtitle:
        "Landing pages and websites that build trust and make it easy for clients to contact you.",
      cta: "Free intro call (15 min)",
      secondary: "View examples",
      note: "No obligation · No sales pressure · Personally handled",
    },

    services: {
      title: "How I help",
      items: [
        {
          title: "Landing Pages",
          description:
            "Clear, fast pages for freelancers and small businesses – focused on inquiries, not complexity.",
          cta: "Request info",
        },
        {
          title: "Websites",
          description:
            "Modern, structured websites that present your offer clearly and build trust.",
          cta: "Request info",
        },
        {
          title: "Automation (optional)",
          description:
            "Optional support with simple automations, e.g. contact forms or internal workflows.",
          cta: "Discuss briefly",
        },
      ],
    },

    showcase: {
      kicker: "OPTIONAL · SCALABLE",
      title: "Custom web solutions if needed",
      subtitle:
        "After launching with a clear website, solutions can be extended step by step – structured and transparent.",
      cta: "Learn more",
      items: [
        {
          title: "Web Applications",
          description:
            "Custom web solutions such as client areas or internal tools – clean and maintainable.",
          badge: "Next.js",
        },
        {
          title: "Integrations",
          description:
            "Connecting existing tools and processes to simplify daily work.",
          badge: "Automation",
        },
        {
          title: "Project Delivery",
          description:
            "Clear structure, understandable steps, and personal responsibility from start to finish.",
          badge: "Structured",
        },
      ],
    },

    about: {
      title: "About",
      body:
        "I’m Anis Alkredi, an IT consultant with many years of experience. I personally guide projects and focus on clear, practical solutions.",
      tagline: "Clear. Personal. Reliable.",
    },

    contact: {
      title: "Free intro call",
      body:
        "Briefly describe your project. We’ll see together if and how I can support you.",
      name: "Name",
      email: "Email",
      message: "Short description",
      submit: "Send request",
      note: "No obligation · Your request is treated confidentially.",
    },

    footer: {
      rights: "© {year} Alkredi. All rights reserved.",
      impressum: "Imprint",
      datenschutz: "Privacy",
      content: {
        impressum: `Information according to § 5 TMG

Anis Alkredi
Sonnenstraße 11
83052 Brückmühl
Germany

Phone: +49 176 57766182
Email: anis.alkredi@gmail.com

Activity:
Freelance IT consulting under § 19 UStG
(Small business regulation, no VAT charged).

Responsible for content:
Anis Alkredi`,
        datenschutz: `Privacy Policy

This website does not use cookies.

If you use the contact form, your details are used solely to process your request and are sent directly by email. No data is shared with third parties.

Hosting is provided by Vercel (Vercel Inc., USA). Technical logs may be processed solely to ensure operation.

Your GDPR rights remain unaffected.`,
      },
    },
  },
};

export function t(lang: string | Lang, key: string): string {
  const l = normalizeLang(lang);
  const parts = key.split(".");
  let cur: any = dict[l];
  for (const p of parts) cur = cur?.[p];
  if (typeof cur === "string") return cur;
  return key;
}

export function servicesFor(lang: string | Lang) {
  const l = normalizeLang(lang);
  return dict[l].services.items as Array<{ title: string; description: string; cta: string }>;
}

export function showcaseFor(lang: string | Lang) {
  const l = normalizeLang(lang);
  return dict[l].showcase.items as Array<{ title: string; description: string; badge?: string }>;
}

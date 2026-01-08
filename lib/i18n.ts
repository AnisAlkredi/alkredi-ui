export type Lang = "de" | "en";

type Dict = Record<string, any>;

export const dict: Record<Lang, Dict> = {
  de: {
    nav: { services: "Services", about: "Über mich", contact: "Kontakt" },

    hero: {
      title: "Landing Page, Chatbot oder smarte Beratung?",
      subtitle:
        "Web- & KI-Lösungen, die Eindruck machen – ab 490 € für Selbstständige & kleine Unternehmen",
      cta: "Unverbindlich anfragen",
      secondary: "Arbeiten ansehen",
    },

    services: {
      title: "Wobei ich Sie unterstütze",
      items: [
        {
          title: "Webentwicklung",
          description:
            "Starten Sie mit einer schnellen, überzeugenden Landing Page, die aus Klicks Kunden macht.",
          cta: "Kostenlos anfragen",
        },
        {
          title: "Systemintegration",
          description: "Tools & Plattformen verbinden – schnell, zuverlässig & sicher.",
          cta: "Kostenlos anfragen",
        },
        {
          title: "KI & Automatisierung",
          description:
            "Automatisieren Sie Ihre Abläufe mit smarten Bots und Workflows – exakt auf Sie zugeschnitten.",
          cta: "Kostenlos anfragen",
        },
      ],
    },

    about: {
      title: "Über mich",
      body:
        "Ich bin Anis Alkredi – IT-Berater & Entwickler mit über 10 Jahren internationaler Erfahrung. Mein Fokus: smarte, elegante Lösungen, die einfach funktionieren.",
      tagline: "Lösungen mit Klarheit, Stil & Effizienz.",
    },

    contact: {
      title: "Lassen Sie uns starten",
      body: "Ich helfe Ihnen, Ihre Idee schnell & wirkungsvoll umzusetzen.",
      name: "Name",
      email: "E-Mail",
      message: "Nachricht",
      submit: "Nachricht senden",
      note:
        "Dieser Dienst wird von Formspree bereitgestellt. Es gelten deren Datenschutzrichtlinien.",
    },

    footer: {
      rights: "© {year} Alkredi. All rights reserved.",
      impressum: "Impressum",
      datenschutz: "Datenschutz",
      content: {
        impressum: `Anis Alkredi
Sonnenstraße 11
83052 Brückmühl
Email: info@alkredi.com
Verantwortlich für den Inhalt: Anis Alkredi`,
        datenschutz:
          "Diese Website speichert keine personenbezogenen Daten ohne Ihre ausdrückliche Zustimmung. Bei Nutzung des Kontaktformulars werden Ihre Angaben zur Bearbeitung gespeichert. Es erfolgt keine Weitergabe an Dritte. Ihre Rechte auf Auskunft, Berichtigung und Löschung Ihrer Daten bleiben unberührt.",
      },
    },
  },

  en: {
    nav: { services: "Services", about: "About", contact: "Contact" },

    hero: {
      title: "Landing page, chatbot, or smart consulting?",
      subtitle:
        "Web & AI solutions that make an impression — from €490 for freelancers and small businesses",
      cta: "Request a quote",
      secondary: "View work",
    },

    services: {
      title: "How I can help",
      items: [
        {
          title: "Web Development",
          description:
            "Launch a fast, convincing landing page that turns clicks into customers.",
          cta: "Request info",
        },
        {
          title: "System Integration",
          description: "Connect tools & platforms — fast, reliable & secure.",
          cta: "Request info",
        },
        {
          title: "AI & Automation",
          description:
            "Automate your workflows with smart bots and tailored automations — built for your business.",
          cta: "Request info",
        },
      ],
    },

    about: {
      title: "About",
      body:
        "I’m Anis Alkredi — IT consultant & developer with 10+ years of international experience. My focus: smart, elegant solutions that simply work.",
      tagline: "Clarity, style & efficiency.",
    },

    contact: {
      title: "Let’s get started",
      body: "I’ll help you turn your idea into something real — quickly and effectively.",
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send message",
      note:
        "This form is provided by Formspree. Their privacy policy applies.",
    },

    footer: {
      rights: "© {year} Alkredi. All rights reserved.",
      impressum: "Imprint",
      datenschutz: "Privacy",
      content: {
        impressum: `Anis Alkredi
Sonnenstraße 11
83052 Brückmühl
Email: info@alkredi.com
Responsible for content: Anis Alkredi`,
        datenschutz:
          "This website does not store personal data without your explicit consent. If you use the contact form, your details are stored to process your request. No data is shared with third parties. Your rights to access, correction, and deletion remain unaffected.",
      },
    },
  },
};

export function t(lang: Lang, key: string): string {
  const parts = key.split(".");
  let cur: any = dict[lang];
  for (const p of parts) cur = cur?.[p];
  if (typeof cur === "string") return cur;
  return key;
}

export function servicesFor(lang: Lang) {
  return dict[lang].services.items as Array<{ title: string; description: string; cta: string }>;
}

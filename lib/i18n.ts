export type Lang = "de" | "en";

function normalizeLang(l: string | Lang) {
  const s = String(l || "").toLowerCase();
  if (s.startsWith("en")) return "en" as Lang;
  return "de" as Lang;
}

type Dict = Record<string, any>;

export const dict: Record<Lang, Dict> = {
  de: {
    nav: { services: "Services", about: "Über mich", contact: "Kontakt" },

    hero: {
      kicker: "WEB — KI — AUTOMATION",
      title: "Landing Page, Chatbot oder smarte Beratung?",
      subtitle:
        "Web- & KI-Lösungen, die Eindruck machen – ab 490 € für Selbstständige & kleine Unternehmen",
      cta: "Unverbindlich anfragen",
      secondary: "Arbeiten ansehen",
      note: "Fokus auf Klarheit, saubere Umsetzung und Lösungen, die wirklich genutzt werden.",
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

    showcase: {
      kicker: "PRODUKTE · APPS · DELIVERY",
      title: "Web & Mobile — von Idee bis Release",
      subtitle:
        "Ich entwickle Web- und Mobile-Apps und führe Software-Projekte sauber durch — mit klaren User Stories, Jira-Boards und transparenter Umsetzung.",
      cta: "Details",
      items: [
        {
          title: "Web Applications",
          description:
            "Moderne Web-Apps mit Next.js — schnell, sauber, wartbar. Von Landing Page bis Dashboard mit Auth, APIs und Integrationen.",
          badge: "Next.js · UI",
        },
        {
          title: "Mobile Apps",
          description:
            "Mobile Experiences für Android (und bei Bedarf Cross-Platform). Fokus: klare Flows, stabile Performance, saubere Releases.",
          badge: "Android · UX",
        },
        {
          title: "Software Project Delivery",
          description:
            "Ich strukturiere Anforderungen in User Stories, priorisiere Backlogs und liefere iterativ — mit Jira, Scrum und klarer Kommunikation.",
          badge: "Jira · Agile",
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
Freiberufliche Nebentätigkeit als IT-Berater und Entwickler gemäß § 19 UStG
(Kleinunternehmerregelung, keine Umsatzsteuer).

Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
Anis Alkredi`,
        datenschutz: `Datenschutzerklärung

Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen.

Diese Website verwendet keine Cookies und speichert keine personenbezogenen Daten ohne Ihre ausdrückliche Zustimmung.

Wenn Sie das Kontaktformular nutzen, werden Ihre Angaben ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und direkt an die im Impressum genannte E-Mail-Adresse übermittelt. Es erfolgt keine Speicherung darüber hinaus und keine Weitergabe an Dritte.

Diese Website wird über die Plattform Vercel (Vercel Inc., USA) betrieben. Dabei können technische Server-Logs (z. B. IP-Adresse, Browsertyp, Zugriffszeitpunkt) verarbeitet werden, ausschließlich zur Sicherstellung des technischen Betriebs.

Für das Kontaktformular wird der Dienst Formspree genutzt. Die eingegebenen Daten werden ausschließlich zum Zweck der Kontaktaufnahme über deren Infrastruktur übertragen.

Ihre Rechte gemäß DSGVO (Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch) bleiben unberührt. Sie erreichen uns über die im Impressum angegebenen Kontaktdaten.`,
      },
    },
  },

  en: {
    nav: { services: "Services", about: "About", contact: "Contact" },

    hero: {
      kicker: "WEB — AI — AUTOMATION",
      title: "Landing page, chatbot, or smart consulting?",
      subtitle:
        "Web & AI solutions that make an impression — from €490 for freelancers and small businesses",
      cta: "Request a quote",
      secondary: "View work",
      note: "Focused on clarity, clean execution, and solutions that are actually used.",
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

    showcase: {
      kicker: "PRODUCTS · APPS · DELIVERY",
      title: "Web & Mobile — from idea to release",
      subtitle:
        "I build web and mobile apps, and I run software projects cleanly — with clear user stories, Jira boards, and transparent delivery.",
      cta: "Details",
      items: [
        {
          title: "Web Applications",
          description:
            "Modern Next.js web apps — fast, clean, maintainable. From landing pages to dashboards with auth, APIs, and integrations.",
          badge: "Next.js · UI",
        },
        {
          title: "Mobile Apps",
          description:
            "Mobile experiences for Android (and cross-platform if needed). Clear flows, stable performance, clean releases.",
          badge: "Android · UX",
        },
        {
          title: "Software Project Delivery",
          description:
            "I turn requirements into user stories, manage backlog priorities, and ship iteratively — using Jira, Scrum, and clear communication.",
          badge: "Jira · Agile",
        },
      ],
    },

    about: {
      title: "About",
      body:
        "I’m Anis Alkredi — IT consultant & developer with over 10 years of international experience. My focus: smart, elegant solutions that simply work.",
      tagline: "Clarity, style & efficiency.",
    },

    contact: {
      title: "Let’s get started",
      body: "I’ll help you turn your idea into something real — quickly and effectively.",
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send message",
      note: "This form is provided by Formspree. Their privacy policy applies.",
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
Freelance IT consultant and developer under § 19 UStG
(Small business regulation, no VAT charged).

Responsible for content according to § 55(2) RStV:
Anis Alkredi`,
        datenschutz: `Privacy Policy

Protecting your personal data is important to us.

This website does not use cookies and does not store personal data without your explicit consent.

When you use the contact form, your details are used solely to process your request and are sent directly to the email address listed in the imprint. No additional storage or sharing with third parties takes place.

This website is hosted on the Vercel platform (Vercel Inc., USA). Technical server logs (e.g. IP address, browser type, access time) may be processed solely to ensure technical operation.

The contact form uses the Formspree service. The data entered is transmitted only for the purpose of contacting you via their infrastructure.

Your rights under GDPR (access, rectification, deletion, restriction, data portability and objection) remain unaffected. You can contact us using the details provided in the imprint.`,
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

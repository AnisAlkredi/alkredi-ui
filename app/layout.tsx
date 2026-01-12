import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alkredi — Web & AI",
  description: "Bilingual landing page (DE/EN) — Next.js + Tailwind.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="antialiased">{children}</body>
    </html>
  );
}

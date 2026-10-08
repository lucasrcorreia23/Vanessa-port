import type { Metadata } from "next";
import { Geist, Herr_Von_Muellerhoff, Instrument_Serif } from "next/font/google";

import { GridOverlay } from "@/components/GridOverlay";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const signature = Herr_Von_Muellerhoff({
  variable: "--font-herr-von-muellerhoff",
  weight: "400",
  subsets: ["latin"],
});

const description = `${site.headline}. ${site.intro}`;

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
    title: `${site.name} — ${site.role}`,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${instrumentSerif.variable} ${signature.variable} antialiased`}
    >
      <body id="top" className="flex min-h-dvh flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        {process.env.NODE_ENV === "development" && <GridOverlay />}
      </body>
    </html>
  );
}

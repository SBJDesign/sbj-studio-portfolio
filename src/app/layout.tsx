import type { Metadata } from "next";
import "@fontsource-variable/instrument-sans";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "SBJ Studio | Brand, Design & Media Studio in Kano",
  description:
    "SBJ Studio is a Kano-based studio building brands, design systems, websites and media that help businesses, institutions and public-sector teams grow.",
  metadataBase: new URL("https://www.sbjstudio.xyz"),
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png", type: "image/png" }]
  },
  openGraph: {
    title: "SBJ Studio | Design that drives growth",
    description: "We build brands people trust, see and choose. Branding, design, media and strategy from Kano, Nigeria.",
    url: "https://www.sbjstudio.xyz",
    siteName: "SBJ Studio",
    type: "website",
    locale: "en_NG",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "SBJ Studio: brands people trust, see and choose" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "SBJ Studio | Design that drives growth",
    description: "We build brands people trust, see and choose. Branding, design, media and strategy from Kano, Nigeria.",
    images: ["/og.jpg"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-ink font-sans antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}

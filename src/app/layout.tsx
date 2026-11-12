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
  metadataBase: new URL("https://sbjstudio.com"),
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png", type: "image/png" }]
  },
  openGraph: {
    title: "SBJ Studio",
    description: "Design that drives growth.",
    type: "website"
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

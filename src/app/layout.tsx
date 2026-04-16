import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

const heading = Space_Grotesk({ subsets: ["latin"], variable: "--font-heading" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "SBJ Studio | Premium Creative Agency",
  description:
    "SBJ Studio helps businesses, startups, and institutions build strategic brands, high-impact design, and growth-focused media.",
  metadataBase: new URL("https://sbjstudio.com"),
  openGraph: {
    title: "SBJ Studio",
    description: "We Design Growth, Not Just Graphics",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} bg-background text-text antialiased`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}

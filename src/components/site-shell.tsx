"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { navLinks } from "@/data/site-data";

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-background text-text">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-background/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-black tracking-wide">
            SBJ<span className="text-accent">.</span>STUDIO
          </Link>
          <nav className="hidden gap-6 md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium transition ${
                    active ? "text-accent" : "text-text hover:text-accent"
                  }`}
                >
                  {link.label}
                  {active ? (
                    <motion.span
                      layoutId="active-link"
                      className="absolute -bottom-1 left-0 h-[2px] w-full bg-accent"
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>
          <Link
            href="/contact"
            className="rounded-full border border-accent/50 px-4 py-2 text-sm font-semibold text-accent transition hover:bg-accent hover:text-black"
          >
            Book Strategy Call
          </Link>
        </div>
      </header>

      <main className="pb-20 md:pb-0">{children}</main>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-background/95 p-4 backdrop-blur md:hidden">
        <Link
          href="/contact"
          className="block rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-black"
        >
          Book Strategy Call
        </Link>
      </div>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>SBJ Studio - Nigeria based, globally competitive creative partner.</p>
          <p>© {new Date().getFullYear()} SBJ Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

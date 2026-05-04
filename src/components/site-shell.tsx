"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/site-data";
import { cn } from "@/lib/cn";

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <div className="min-h-screen bg-background text-text">
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[4.25rem] w-full max-w-6xl items-center justify-between gap-4 px-6 sm:px-8">
          <Link
            href="/"
            className="text-lg font-black tracking-[0.12em] text-text transition hover:text-accent sm:text-xl"
          >
            SBJ<span className="text-accent">.</span>STUDIO
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-3 py-2 pb-2.5 text-sm font-medium transition",
                    active ? "text-accent" : "text-muted hover:text-text"
                  )}
                >
                  {link.label}
                  {active ? (
                    <motion.span
                      layoutId="active-link"
                      className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contact" className="btn-primary hidden text-xs sm:inline-flex sm:text-sm">
              Book Strategy Call
            </Link>
            <button
              type="button"
              className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 md:hidden"
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((open) => !open)}
            >
              <span
                className={cn(
                  "absolute left-2 top-[11px] h-0.5 w-5 rounded-full bg-text transition",
                  mobileOpen && "top-[19px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "absolute left-2 top-[19px] h-0.5 w-5 rounded-full bg-text transition",
                  mobileOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "absolute left-2 top-[27px] h-0.5 w-5 rounded-full bg-text transition",
                  mobileOpen && "top-[19px] -rotate-45"
                )}
              />
            </button>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col bg-background/98 px-6 pt-[4.25rem] md:hidden"
          >
            <nav className="flex flex-1 flex-col gap-1 py-8">
              {navLinks.map((link, i) => {
                const active = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.25 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "block rounded-xl px-4 py-3 text-lg font-semibold",
                        active ? "bg-accent/15 text-accent" : "text-text hover:bg-white/5"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
            <Link href="/contact" className="btn-primary mb-10 w-full justify-center py-3.5 text-base">
              Book Strategy Call
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <footer className="border-t border-white/[0.08] bg-surface/30 py-12">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 text-sm text-muted sm:px-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-md leading-relaxed">
            SBJ Studio — Nigeria based, globally competitive creative partner.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="https://www.instagram.com/sbjdesigns.ng?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="font-medium text-accent transition hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </Link>
            <p className="text-muted/80">© {new Date().getFullYear()} SBJ Studio</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/site-data";
import { cn } from "@/lib/cn";

function isNavLinkActive(href: string, pathname: string, hash: string) {
  if (href === "/") return pathname === "/" && hash !== "#testimonials";
  if (href === "/#testimonials") return pathname === "/" && hash === "#testimonials";
  return pathname === href;
}

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hash, setHash] = useState("");

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
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
      <header
        className={cn(
          "sticky top-0 border-b border-white/[0.06] bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70",
          mobileOpen ? "z-[120]" : "z-50"
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-8">
          <Link href="/" className="shrink-0 text-lg font-black tracking-tight text-text sm:text-xl">
            SBJ<span className="text-gradient">.</span>STUDIO
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const active = isNavLinkActive(link.href, pathname, hash);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition duration-300",
                    active
                      ? "relative text-accent after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:bg-accent"
                      : "relative text-muted transition duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:text-text hover:after:w-full"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <Link href="/contact" className="btn-primary hidden px-5 py-2.5 text-sm md:inline-flex">
              Let&apos;s Talk
            </Link>
            <button
              type="button"
              className="relative z-[130] flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] md:hidden"
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

      <main
        className={cn(mobileOpen && "max-md:pointer-events-none max-md:invisible")}
        aria-hidden={mobileOpen}
      >
        {children}
      </main>

      <AnimatePresence>
        {mobileOpen ? (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-0 bottom-0 top-16 z-[110] flex flex-col overflow-y-auto bg-background px-6 pb-10 pt-6 md:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <nav className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-xl px-4 py-4 text-xl font-semibold leading-none text-text transition hover:bg-white/[0.06]"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary mt-8 w-full justify-center py-3.5"
              >
                Let&apos;s Talk
              </Link>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>

      <footer
        className={cn(
          "relative overflow-hidden border-t border-white/[0.06] bg-black/50 py-14",
          mobileOpen && "max-md:hidden"
        )}
      >
        <div className="site-footer-mesh pointer-events-none absolute inset-0" aria-hidden />
        <div className="accent-divider absolute left-0 right-0 top-0" />
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-8">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div className="max-w-sm">
              <Link href="/" className="text-lg font-black tracking-tight text-text">
                SBJ<span className="text-gradient">.</span>STUDIO
              </Link>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Premium creative & growth partner. Nigeria based, globally competitive.
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted transition hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="accent-divider mt-10" />
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-sm">
            <Link
              href="https://www.instagram.com/sbjdesigns.ng?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="font-medium text-accent transition hover:brightness-125"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </Link>
            <p className="text-muted/70">© {new Date().getFullYear()} SBJ Studio</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

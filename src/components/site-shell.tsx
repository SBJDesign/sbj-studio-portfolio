"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { footerLinks, navLinks, socialLinks } from "@/data/site-data";
import { cn } from "@/lib/cn";

function Logo({ size = 44 }: { size?: number }) {
  return (
    <Image
      src="/logo.png"
      alt="SBJ Studio"
      width={size}
      height={Math.round((size * 150) / 159)}
      priority
    />
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const left = navLinks.slice(0, 2);
  const right = navLinks.slice(2);

  const linkClass = (href: string) =>
    cn("nav-link", pathname.startsWith(href) && "underline underline-offset-4");

  return (
    <>
      {/* Nav text sits in its own fixed layer with difference blending so it stays readable over dark and light sections */}
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 text-white mix-blend-difference">
        <div className="mx-auto hidden h-24 max-w-[1280px] items-center justify-center gap-10 px-8 md:flex">
          <nav className="pointer-events-auto flex w-56 justify-end gap-10">
            {left.map((l) => (
              <Link key={l.href} href={l.href} className={linkClass(l.href)}>
                {l.label}
              </Link>
            ))}
          </nav>
          <span className="w-14" aria-hidden />
          <nav className="pointer-events-auto flex w-56 gap-10">
            {right.map((l) => (
              <Link key={l.href} href={l.href} className={linkClass(l.href)}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex h-20 items-center justify-end px-5 md:hidden">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="pointer-events-auto nav-link"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            Menu
          </button>
        </div>
      </header>

      {/* Logo mark — kept outside the blend layer so its brand colour stays true */}
      <Link
        href="/"
        aria-label="SBJ Studio home"
        className="fixed left-5 top-5 z-50 transition-transform hover:rotate-[-8deg] md:left-1/2 md:top-6 md:-translate-x-1/2"
      >
        <Logo />
      </Link>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-[60] flex flex-col bg-ink px-5 pb-10 pt-24 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="nav-link absolute right-5 top-7"
            >
              Close
            </button>
            <nav className="flex flex-1 flex-col justify-center gap-2">
              {[{ href: "/", label: "Home" }, ...navLinks].map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link href={l.href} className="display-serif text-6xl">
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="flex gap-6 text-[13px] uppercase text-white/60">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <main>{children}</main>

      <footer className="bg-ink px-5 pb-10 pt-24 text-white md:px-10">
        <div className="mx-auto grid max-w-[1280px] gap-14 md:grid-cols-[1fr_auto] md:items-end">
          <div className="relative aspect-[5/3] w-full max-w-sm overflow-hidden rounded-2xl bg-ink-soft">
            <Image
              src="/portfolio/ambil-nigeria-website/about.png"
              alt="Website design by SBJ Studio"
              fill
              sizes="(min-width: 768px) 384px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-12 md:items-end">
            <div className="grid grid-cols-2 gap-x-16 gap-y-2 text-[14px] uppercase">
              <ul className="space-y-1.5">
                {footerLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="link-underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-1.5">
                {socialLinks.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="link-underline">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-[14px] text-line">© SBJ Studio {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>
    </>
  );
}

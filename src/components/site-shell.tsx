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
      src="/logo-white.png"
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


  const linkClass = (href: string) =>
    cn("nav-link", pathname.startsWith(href) && "underline underline-offset-4");

  return (
    <>
      {/* Nav text sits in its own fixed layer with difference blending so it stays readable over dark and light sections */}
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 text-white mix-blend-difference">
        <div className="mx-auto hidden h-24 max-w-[1440px] items-center justify-between px-10 md:flex">
          <Link
            href="/"
            aria-label="SBJ Studio home"
            className="pointer-events-auto flex items-center gap-3 transition-transform hover:rotate-[-4deg]"
          >
            <Logo size={40} />
          </Link>
          <nav className="pointer-events-auto flex gap-9">
            {navLinks.map((l, i) => (
              <Link key={l.href} href={l.href} className={linkClass(l.href)}>
                <span className="mr-1.5 opacity-50">0{i + 1}</span>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex h-20 items-center justify-between px-5 md:hidden">
          <Link href="/" aria-label="SBJ Studio home" className="pointer-events-auto">
            <Logo size={38} />
          </Link>
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
              src="/work/gta/in-photo-wall.jpg"
              alt="Global Tech Africa 2026 photo wall by SBJ Studio"
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

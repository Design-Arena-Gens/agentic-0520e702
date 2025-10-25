"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/content";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD = 24;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const closeOnRoute = () => setOpen(false);
    window.addEventListener("hashchange", closeOnRoute);
    return () => window.removeEventListener("hashchange", closeOnRoute);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 mx-auto flex max-w-5xl items-center justify-center px-6 transition-all duration-300 sm:px-8",
        scrolled ? "py-4" : "py-6"
      )}
    >
      <nav
        className={cn(
          "flex w-full items-center justify-between rounded-full border border-white/10 bg-slate-950/70 backdrop-blur-xl transition-colors",
          scrolled ? "shadow-xl shadow-teal-500/5" : "shadow-none"
        )}
        aria-label="Primary"
      >
        <Link
          href="#top"
          className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500/20 to-cyan-500/10 px-5 py-3 text-sm font-semibold uppercase tracking-widest text-teal-300 transition hover:from-teal-500/30 hover:to-cyan-500/20"
        >
          JM
        </Link>

        <div className="hidden items-center gap-3 rounded-full bg-white/5 px-3 py-2 text-sm font-medium text-slate-200 sm:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1 text-slate-300 hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-200 transition hover:border-teal-400 hover:text-teal-300 sm:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>

        <Link
          href="#contact"
          className="hidden rounded-full bg-teal-400/90 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-teal-500/25 transition hover:bg-teal-300 sm:inline-flex"
        >
          Let&apos;s talk
        </Link>
      </nav>

      {open ? (
        <div className="absolute left-6 right-6 top-full mt-4 flex flex-col rounded-3xl border border-white/10 bg-slate-950/95 p-6 text-sm text-slate-100 shadow-2xl shadow-teal-500/10 sm:hidden">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl px-3 py-2 hover:bg-white/10"
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}

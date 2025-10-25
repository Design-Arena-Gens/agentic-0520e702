import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { hero, navLinks, socialLinks } from "@/data/content";

export function Footer() {
  return (
    <footer className="mt-24 rounded-3xl border border-white/10 bg-slate-900/70 px-6 py-10 sm:px-12">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-200/80">
            Say hello
          </p>
          <h3 className="mt-4 text-2xl font-semibold text-white">
            Ready to build something together?
          </h3>
          <p className="mt-3 text-sm text-slate-300">
            {hero.availability} Drop me a line and we can explore what&apos;s
            next.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-sm text-slate-100">
          <Link
            href={`mailto:${hero.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-teal-400 px-5 py-3 text-slate-950 shadow-lg shadow-teal-500/20 transition hover:bg-teal-300"
          >
            {hero.email}
            <ArrowUpRight size={18} />
          </Link>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-200 hover:border-teal-400/50 hover:text-teal-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {hero.name}. Crafted in {hero.location}.
        </p>
        <div className="flex flex-wrap gap-3">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-transparent px-3 py-1 uppercase tracking-[0.3em] text-slate-400 hover:border-teal-400/40 hover:text-teal-200"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

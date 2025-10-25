import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Sparkles } from "lucide-react";
import { hero, socialLinks } from "@/data/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 px-6 pb-16 pt-28 sm:px-12 sm:pt-32"
    >
      <div className="pointer-events-none absolute inset-x-10 -top-32 h-64 rounded-full bg-teal-500/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 top-1/2 w-64 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="flex flex-col gap-10">
        <div className="flex flex-wrap items-center gap-4 text-sm text-teal-200/80">
          <span className="flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1">
            <Sparkles size={16} className="text-teal-300" />
            {hero.availability}
          </span>
          <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-200">
            <MapPin size={16} className="text-cyan-300" />
            {hero.location}
          </span>
        </div>

        <div className="max-w-3xl space-y-6">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {hero.headline}
          </h1>
          <p className="text-lg text-slate-300 sm:text-xl">{hero.subheadline}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-100">
          <Link
            href={`mailto:${hero.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-teal-400 px-5 py-3 text-slate-950 shadow-lg shadow-teal-500/30 transition hover:bg-teal-300"
          >
            <Mail size={18} />
            Email Jordan
          </Link>
          <Link
            href={hero.resumeUrl}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-slate-100 transition hover:border-teal-400/60 hover:text-white"
          >
            Résumé
            <ArrowUpRight size={18} />
          </Link>
          <div className="flex items-center gap-3 text-slate-400">
            {socialLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-transparent px-3 py-1 font-medium uppercase tracking-widest hover:border-teal-400/50 hover:text-teal-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

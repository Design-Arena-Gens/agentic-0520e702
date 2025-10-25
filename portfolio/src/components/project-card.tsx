import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  title: string;
  period: string;
  description: string;
  impact: string[];
  tech: string[];
  link: string;
  index: number;
};

const gradients = [
  "from-slate-900 via-slate-950 to-slate-900",
  "from-slate-900 via-cyan-950 to-slate-900",
  "from-slate-900 via-emerald-950 to-slate-900",
];

export function ProjectCard({
  title,
  period,
  description,
  impact,
  tech,
  link,
  index,
}: ProjectCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-950 p-6 sm:p-8">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 opacity-80 transition duration-500 group-hover:opacity-100",
          "bg-gradient-to-br",
          gradients[index % gradients.length]
        )}
      />

      <div className="relative flex flex-1 flex-col gap-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-teal-200/80">
              {period}
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-white">{title}</h3>
          </div>
          <Link
            href={link}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition hover:border-teal-300 hover:text-teal-200"
            aria-label={`View ${title}`}
          >
            <ArrowUpRight />
          </Link>
        </div>

        <p className="text-sm leading-relaxed text-slate-300">{description}</p>

        <ul className="space-y-3 text-sm text-slate-200">
          {impact.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 rounded-xl bg-black/40 px-3 py-2"
            >
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-300" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2 text-xs uppercase tracking-widest text-teal-200/80">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-teal-400/30 bg-teal-400/10 px-3 py-1"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

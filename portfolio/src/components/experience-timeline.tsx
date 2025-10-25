type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
};

type ExperienceTimelineProps = {
  entries: ExperienceItem[];
};

export function ExperienceTimeline({ entries }: ExperienceTimelineProps) {
  return (
    <ol className="relative border-l border-white/10 pl-6">
      {entries.map((item, index) => (
        <li key={item.company} className="mb-10 last:mb-0">
          <span className="absolute -left-3 mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-teal-300/60 bg-slate-950 text-xs font-semibold text-teal-200">
            {entries.length - index}
          </span>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-200/80">
            {item.period}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-slate-400">
            <span className="text-base font-semibold text-white">
              {item.role}
            </span>{" "}
            at{" "}
            <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-slate-200">
              {item.company}
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            {item.description}
          </p>
          <ul className="mt-4 space-y-3 text-sm text-slate-200">
            {item.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2 rounded-2xl bg-black/40 px-4 py-3"
              >
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-300" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

type SkillPillProps = {
  label: string;
};

export function SkillPill({ label }: SkillPillProps) {
  return (
    <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-teal-100">
      {label}
    </span>
  );
}

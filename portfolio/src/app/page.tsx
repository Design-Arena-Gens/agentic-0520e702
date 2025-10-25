import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { SkillPill } from "@/components/skill-pill";
import { Footer } from "@/components/footer";
import {
  experience,
  hero,
  projects,
  skillGroups,
  writing,
} from "@/data/content";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 pb-24 text-slate-100">
      <Navbar />

      <main className="mx-auto flex w-full max-w-5xl flex-col gap-20 px-6 pt-32 sm:px-8 lg:gap-28">
        <Hero />

        <section
          id="about"
          className="grid gap-12 rounded-3xl border border-white/10 bg-slate-900/60 px-6 py-12 sm:px-12 lg:grid-cols-[1.2fr,0.8fr]"
        >
          <SectionHeading
            eyebrow="About"
            title="Engineering with product intuition and a love for craft."
            className="max-w-xl"
          />
          <div className="space-y-6 text-sm leading-relaxed text-slate-300">
            <p>
              I help teams build thoughtful digital products that balance
              velocity with long-term maintainability. My background spans
              product strategy, design systems, and full-stack engineering. I
              thrive in ambiguous spaces—working closely with cross-functional
              partners to transform insight into shipped experiences.
            </p>
            <p>
              When I&apos;m not refining flows or digging into metrics, you can
              find me sketching interaction patterns, teaching workshops for
              early-stage teams, or exploring new soundscapes with modular
              synths.
            </p>
          </div>
        </section>

        <section id="projects" className="space-y-10">
          <SectionHeading
            eyebrow="Selected Work"
            title="Strategic projects that blend data, design, and execution."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </section>

        <section
          id="experience"
          className="rounded-3xl border border-white/10 bg-slate-900/60 px-6 py-12 sm:px-12"
        >
          <SectionHeading
            eyebrow="Experience"
            title="Leading teams and shipping product across fast-paced environments."
          />
          <div className="mt-10">
            <ExperienceTimeline entries={experience} />
          </div>
        </section>

        <section id="skills" className="space-y-10">
          <SectionHeading
            eyebrow="Ways I Work"
            title="A toolkit shaped by craft, outcomes, and curiosity."
          />
          <div className="grid gap-8 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-3xl border border-white/10 bg-slate-900/60 p-6"
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-200/80">
                  {group.title}
                </h3>
                <div className="mt-6 flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <SkillPill key={skill} label={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="writing"
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 px-6 py-12 sm:px-12"
        >
          <SectionHeading
            eyebrow="Writing"
            title="Insights on building resilient teams and products."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {writing.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group relative flex flex-col gap-4 rounded-2xl border border-white/10 bg-black/40 p-6 transition hover:border-teal-400/40 hover:text-white"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-200/80">
                  {post.published}
                </span>
                <h3 className="text-lg font-semibold text-white group-hover:text-teal-100">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-300">{post.summary}</p>
                <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-teal-200">
                  Read article <ArrowUpRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="rounded-3xl border border-white/10 bg-slate-900/70 px-6 py-12 sm:px-12"
        >
          <SectionHeading
            eyebrow="Contact"
            title="Let’s explore what we can build together."
          />
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
            <div className="space-y-5 text-sm leading-relaxed text-slate-300">
              <p>
                I collaborate with product, design, and engineering leaders to
                ship experiences that customers love. If you&apos;re exploring a
                new initiative, need technical leadership, or want a partner for
                advisory work, reach out.
              </p>
              <p>
                I respond quickly to thoughtful messages and especially enjoy
                hearing about problems that matter and teams that care about the
                craft of building.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-black/40 p-6 text-sm">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-200/80">
                  Email
                </p>
                <Link
                  href={`mailto:${hero.email}`}
                  className="mt-2 inline-flex items-center gap-2 text-base font-semibold text-white hover:text-teal-200"
                >
                  {hero.email}
                  <ArrowUpRight size={16} />
                </Link>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-200/80">
                  Location
                </p>
                <p className="mt-2 text-slate-200">{hero.location}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-200/80">
                  Availability
                </p>
                <p className="mt-2 text-slate-200">{hero.availability}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/site";
import { MetricsBar } from "@/components/MetricsBar";
import { ArrowIcon, BackIcon } from "@/components/icons";
import { ContactBar } from "@/components/ContactBar";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.problem.slice(0, 160),
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <article className="mx-auto max-w-3xl px-5 pt-16 pb-20 sm:px-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-ink"
        >
          <BackIcon className="h-3.5 w-3.5" /> All projects
        </Link>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="text-xs font-medium uppercase tracking-wide text-accent">
              {t}
            </span>
          ))}
        </div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-2 text-lg text-muted">{project.subtitle}</p>

        <div className="mt-8">
          <MetricsBar metrics={project.metrics} />
        </div>

        <section className="mt-10">
          <h2 className="text-sm font-medium uppercase tracking-wide text-faint">Problem</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink">{project.problem}</p>
        </section>

        <section className="mt-10">
          <h2 className="text-sm font-medium uppercase tracking-wide text-faint">Approach</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink">{project.approach}</p>
        </section>

        <section className="mt-10">
          <h2 className="text-sm font-medium uppercase tracking-wide text-faint">
            Results &amp; impact
          </h2>
          <ul className="mt-3 space-y-3">
            {project.results.map((r) => (
              <li key={r} className="flex gap-3 text-[17px] leading-relaxed text-ink">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {r}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-sm font-medium uppercase tracking-wide text-faint">Tech stack</h2>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-[15px] text-muted">
            {project.techStack.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </section>

        {project.links.length > 0 && (
          <section className="mt-10">
            <h2 className="text-sm font-medium uppercase tracking-wide text-faint">Links</h2>
            <div className="mt-3 flex flex-wrap gap-5">
              {project.links.map((l) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-accent"
                >
                  {l.label} <ArrowIcon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </section>
        )}
      </article>
      <ContactBar />
    </>
  );
}

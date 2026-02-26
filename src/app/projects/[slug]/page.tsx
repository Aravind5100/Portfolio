import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/site";
import { MetricsBar } from "@/components/MetricsBar";
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
    <article className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Back link */}
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center gap-1 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" /> All Projects
      </Link>

      {/* Header */}
      <div className="flex flex-wrap items-center gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
          >
            {t}
          </span>
        ))}
      </div>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
        {project.title}
      </h1>
      <p className="mt-2 text-lg text-neutral-500 dark:text-neutral-400">{project.subtitle}</p>

      {/* Metrics */}
      <div className="mt-8">
        <MetricsBar metrics={project.metrics} />
      </div>

      {/* Problem */}
      <section className="mt-12">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          Problem
        </h2>
        <p className="mt-3 leading-relaxed text-neutral-700 dark:text-neutral-300">
          {project.problem}
        </p>
      </section>

      {/* Approach */}
      <section className="mt-10">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          Approach
        </h2>
        <p className="mt-3 leading-relaxed text-neutral-700 dark:text-neutral-300">
          {project.approach}
        </p>
      </section>

      {/* Results / Impact */}
      <section className="mt-10">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          Results &amp; Impact
        </h2>
        <ul className="mt-3 space-y-2">
          {project.results.map((r) => (
            <li
              key={r}
              className="text-neutral-700 before:mr-2 before:content-['•'] dark:text-neutral-300"
            >
              {r}
            </li>
          ))}
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="mt-10">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          Tech Stack
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.techStack.map((t) => (
            <span
              key={t}
              className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Links */}
      {project.links.length > 0 && (
        <section className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Links
          </h2>
          <div className="mt-3 flex flex-wrap gap-3">
            {project.links.map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm transition-colors hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
              >
                {l.label} <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

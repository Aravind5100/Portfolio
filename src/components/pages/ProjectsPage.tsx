"use client";

import { useState } from "react";
import Link from "next/link";
import { projects, projectFilters, type Project } from "@/data/site";
import { ContactBar } from "@/components/ContactBar";
import { ArrowIcon } from "@/components/icons";

function ProjectRow({ project }: { project: Project }) {
  return (
    <article className="border-b border-border py-10">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="text-xl font-medium text-ink">
          <Link href={`/projects/${project.slug}`} className="hover:text-accent">
            {project.title}
          </Link>
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="text-xs font-medium uppercase tracking-wide text-faint">
              {t}
            </span>
          ))}
        </div>
      </div>
      <p className="mt-1 text-sm text-muted">{project.subtitle}</p>

      <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">{project.problem}</p>

      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-faint">
        {project.techStack.slice(0, 6).map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-5">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-accent"
        >
          Case study <ArrowIcon className="h-3.5 w-3.5" />
        </Link>
        {project.links.map((l) => (
          <a
            key={l.url}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent"
          >
            {l.label} <ArrowIcon className="h-3.5 w-3.5" />
          </a>
        ))}
      </div>
    </article>
  );
}

export function ProjectsPage() {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.tags.includes(active));

  return (
    <>
      <div className="mx-auto max-w-5xl px-5 pt-20 pb-10 sm:px-8">
        <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Projects
        </h1>
        <p className="mt-3 max-w-xl text-lg text-muted">
          RAG systems, data pipelines, and full-stack tools, each with real results.
        </p>

        <div
          role="group"
          aria-label="Filter projects by category"
          className="mt-8 flex flex-wrap gap-2"
        >
          {projectFilters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={active === f}
              onClick={() => setActive(f)}
              className={`rounded-[var(--radius)] border px-4 py-1.5 text-sm font-medium transition-colors ${
                active === f
                  ? "border-accent bg-accent text-accent-ink"
                  : "border-border text-muted hover:border-accent hover:text-ink"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        {filtered.length > 0 ? (
          <div className="border-t border-border">
            {filtered.map((p) => (
              <ProjectRow key={p.slug} project={p} />
            ))}
          </div>
        ) : (
          <p className="border-t border-border py-16 text-center text-muted">
            No projects match this filter.
          </p>
        )}
      </div>

      <div className="h-8" />
      <ContactBar />
    </>
  );
}

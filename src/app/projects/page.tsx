"use client";

import { useState } from "react";
import { projects, projectFilters } from "@/data/site";
import { ProjectCard } from "@/components/ProjectCard";

export default function ProjectsPage() {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.tags.includes(active));

  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
        Projects
      </h1>
      <p className="mt-2 text-neutral-500 dark:text-neutral-400">
        Explore my work across RAG systems, business intelligence, and data engineering.
      </p>

      {/* Filters */}
      <div className="mt-8 flex flex-wrap gap-2">
        {projectFilters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              active === f
                ? "bg-blue-600 text-white dark:bg-blue-500"
                : "border border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-neutral-500 dark:text-neutral-400">
          No projects match this filter.
        </p>
      )}
    </div>
  );
}

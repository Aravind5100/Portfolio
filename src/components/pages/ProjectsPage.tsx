"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { projects, projectFilters, type Project } from "@/data/site";
import { ContactBar } from "@/components/ContactBar";
import { AnimatedSection } from "@/components/AnimatedSection";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900"
    >
      {/* Color accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500" />

      <div className="flex flex-1 flex-col p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="mt-4 text-xl font-bold text-neutral-900 dark:text-white">
          <Link href={`/projects/${project.slug}`} className="hover:underline">
            {project.title}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
          {project.problem}
        </p>

        {/* Tech stack */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.techStack.map((t) => (
            <span
              key={t}
              className="rounded-md border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-[11px] font-medium text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Metrics highlight */}
        <div className="mt-5 grid grid-cols-2 gap-2">
          {project.metrics.slice(0, 2).map((m) => (
            <div
              key={m.label}
              className="rounded-lg bg-neutral-50 px-3 py-2 dark:bg-neutral-800/50"
            >
              <div className="text-sm font-bold text-blue-600 dark:text-blue-400">
                {m.value}
              </div>
              <div className="text-[11px] text-neutral-500 dark:text-neutral-400">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-auto flex items-center gap-3 pt-6">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
          >
            Case Study <ArrowUpRight className="h-3 w-3" />
          </Link>
          {project.links.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-3 py-2 text-xs font-medium text-neutral-600 transition-all hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:bg-neutral-800"
            >
              <Github className="h-3 w-3" /> {l.label}
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectsPage() {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.tags.includes(active));

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
              Projects
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-neutral-500 dark:text-neutral-400">
              Explore my work across RAG systems, business intelligence, and data engineering.
            </p>
          </div>
        </AnimatedSection>

        {/* Filters */}
        <AnimatedSection delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {projectFilters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  active === f
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25 dark:bg-blue-500"
                    : "border border-neutral-200 bg-white text-neutral-600 hover:border-blue-200 hover:bg-blue-50/50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:border-neutral-600"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-neutral-500 dark:text-neutral-400">
            No projects match this filter.
          </p>
        )}
      </div>

      <ContactBar />
    </>
  );
}

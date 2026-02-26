import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { type Project } from "@/data/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col rounded-xl border border-neutral-200 bg-white p-6 transition-all hover:border-blue-200 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700">
      {/* Tags */}
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

      {/* Title */}
      <h3 className="mt-3 text-lg font-semibold leading-snug text-neutral-900 dark:text-white">
        <Link href={`/projects/${project.slug}`} className="hover:underline">
          {project.title}
        </Link>
      </h3>
      <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{project.subtitle}</p>

      {/* Description */}
      <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
        {project.problem}
      </p>

      {/* Tech chips — compact, max 4 shown */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.techStack.slice(0, 4).map((t) => (
          <span
            key={t}
            className="rounded border border-neutral-200 px-2 py-0.5 text-[11px] font-medium text-neutral-500 dark:border-neutral-700 dark:text-neutral-400"
          >
            {t}
          </span>
        ))}
        {project.techStack.length > 4 && (
          <span className="rounded border border-neutral-200 px-2 py-0.5 text-[11px] font-medium text-neutral-400 dark:border-neutral-700 dark:text-neutral-500">
            +{project.techStack.length - 4}
          </span>
        )}
      </div>

      {/* Links */}
      <div className="mt-auto flex items-center gap-4 pt-5">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          View Details <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
        {project.links.map((l) => (
          <a
            key={l.url}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
          >
            {l.label} <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        ))}
      </div>
    </article>
  );
}

import Link from "next/link";
import { siteConfig, projects } from "@/data/site";
import { ContactBar } from "@/components/ContactBar";
import { ArrowIcon } from "@/components/icons";

const spotlightSlugs = [
  "arctic-policy-intelligence-engine",
  "career-intelligence-data-platform",
  "rag-document-chatbot",
];

const spotlight = spotlightSlugs
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter((p): p is (typeof projects)[number] => Boolean(p));

export function HeroPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-5 pt-20 pb-16 sm:px-8 sm:pt-28 sm:pb-24">
        <p className="text-sm font-medium text-accent">Open to full-time roles</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
          {siteConfig.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted sm:text-xl">
          {siteConfig.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-[var(--radius)] bg-accent px-5 py-2.5 text-sm font-medium text-accent-ink transition-opacity hover:opacity-90"
          >
            View Projects
          </Link>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 rounded-[var(--radius)] border border-border px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent"
          >
            Get in touch
          </a>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          <h2 className="text-sm font-medium uppercase tracking-wide text-faint">
            Selected work
          </h2>

          <div className="mt-6 divide-y divide-border border-t border-border">
            {spotlight.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <div className="min-w-0">
                  <h3 className="text-lg font-medium text-ink group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{project.subtitle}</p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 text-sm text-faint group-hover:text-accent">
                  {project.metrics[0]?.value} {project.metrics[0]?.label}
                  <ArrowIcon className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>

          <Link
            href="/projects"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-accent"
          >
            All projects <ArrowIcon className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      <ContactBar />
    </>
  );
}

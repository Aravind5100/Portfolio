import { MailIcon, LinkedInIcon, GitHubIcon } from "./icons";
import { siteConfig } from "@/data/site";

export function ContactBar() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-5 px-5 py-14 sm:px-8">
        <div>
          <h3 className="text-lg font-semibold text-ink">Let&apos;s talk</h3>
          <p className="mt-1 text-[15px] text-muted">
            Open to full-time roles in data engineering, analytics, and applied AI.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 rounded-[var(--radius)] bg-accent px-4 py-2 text-sm font-medium text-accent-ink transition-opacity hover:opacity-90"
          >
            <MailIcon className="h-4 w-4" /> Email me
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[var(--radius)] border border-border px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent"
          >
            <LinkedInIcon className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[var(--radius)] border border-border px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent"
          >
            <GitHubIcon className="h-4 w-4" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

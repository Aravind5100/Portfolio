import Link from "next/link";
import { MailIcon, LinkedInIcon, GitHubIcon } from "./icons";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-sm text-faint">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
          >
            <MailIcon className="h-3.5 w-3.5" /> Email
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
          >
            <LinkedInIcon className="h-3.5 w-3.5" /> LinkedIn
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
          >
            <GitHubIcon className="h-3.5 w-3.5" /> GitHub
          </a>
          <span className="hidden text-border sm:inline">|</span>
          <Link href="/privacy" className="text-sm text-faint transition-colors hover:text-ink">
            Privacy
          </Link>
          <Link href="/terms" className="text-sm text-faint transition-colors hover:text-ink">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}

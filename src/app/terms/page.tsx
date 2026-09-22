import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms for using this site.",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-2xl px-5 pt-20 pb-24 sm:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-ink">Terms of Use</h1>
      <p className="mt-2 text-sm text-faint">Draft, last reviewed September 2026.</p>

      <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-ink">
        <p>
          This site ({siteConfig.siteUrl}) is the personal portfolio of {siteConfig.name}.
          It exists to describe my work and experience and to let people get in
          touch with me. By using it, you agree to the terms below.
        </p>

        <section>
          <h2 className="text-base font-medium">Content and accuracy</h2>
          <p className="mt-3 text-muted">
            The project descriptions, metrics, and experience on this site describe
            real work to the best of my knowledge at the time of writing. Some
            figures come from earlier reports or logs and may be refined as
            projects evolve. If you notice something that looks wrong, please
            tell me.
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium">No professional advice</h2>
          <p className="mt-3 text-muted">
            Nothing on this site is professional, legal, or financial advice.
            Code and technical descriptions are shared for informational and
            portfolio purposes only.
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium">External links</h2>
          <p className="mt-3 text-muted">
            This site links to external services such as GitHub and LinkedIn.
            I do not control those sites and am not responsible for their
            content or availability.
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium">Intellectual property</h2>
          <p className="mt-3 text-muted">
            The text, design, and project write-ups on this site are mine unless
            otherwise noted. Code for the projects described here may be
            available separately under its own license in the linked
            repositories.
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium">No warranty</h2>
          <p className="mt-3 text-muted">
            This site is provided as is, without any warranty of uptime,
            accuracy, or fitness for a particular purpose.
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium">Changes</h2>
          <p className="mt-3 text-muted">
            These terms may be updated as the site changes. Continuing to use
            the site after an update means you accept the current version.
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium">Contact</h2>
          <p className="mt-3 text-muted">
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-ink underline hover:text-accent">
              {siteConfig.email}
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  );
}

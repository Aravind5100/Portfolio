import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How this site handles data.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-2xl px-5 pt-20 pb-24 sm:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-ink">Privacy Policy</h1>
      <p className="mt-2 text-sm text-faint">Draft, last reviewed September 2026.</p>

      <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-ink">
        <p>
          This site ({siteConfig.siteUrl}) is a personal portfolio belonging to{" "}
          {siteConfig.name}. It does not require an account, does not run advertising,
          and does not use third-party analytics or tracking scripts.
        </p>

        <section>
          <h2 className="text-base font-medium">What this site does not do</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-muted">
            <li>It does not set tracking or advertising cookies.</li>
            <li>It does not use Google Analytics, Meta Pixel, or any similar service.</li>
            <li>It does not collect or store your name, email, or any personal data through a form.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-medium">What this site does store</h2>
          <p className="mt-3 text-muted">
            Your light/dark theme choice is saved in your browser&apos;s local storage
            so the site remembers it on your next visit. That value never leaves your
            browser and is not visible to me.
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium">Contact links</h2>
          <p className="mt-3 text-muted">
            The &quot;Email me&quot; link opens your own email client and sends a message
            directly to {siteConfig.email}. It is not routed through this site or
            stored anywhere else. The LinkedIn and GitHub links simply navigate to
            those third-party sites, which have their own privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium">Hosting logs</h2>
          <p className="mt-3 text-muted">
            <strong>Draft, pending confirmation of the final hosting provider.</strong>{" "}
            Like almost any website, the infrastructure that serves these pages
            (for example Vercel or GitHub Pages) may automatically record standard
            technical logs, such as IP address, browser type, and request
            timestamps, for security and reliability purposes. This is the
            hosting provider&apos;s standard server behavior, not something this
            site configures or accesses directly. This section will be updated
            with the specific provider once the site&apos;s final hosting is confirmed.
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium">Changes to this policy</h2>
          <p className="mt-3 text-muted">
            If this site&apos;s data practices change, for example if analytics or a
            contact form are added later, this page will be updated to reflect
            that before the change goes live.
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium">Contact</h2>
          <p className="mt-3 text-muted">
            Questions about this policy can be sent to{" "}
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

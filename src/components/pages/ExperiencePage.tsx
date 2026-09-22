"use client";

import { useState } from "react";
import { experience } from "@/data/site";
import { ContactBar } from "@/components/ContactBar";

function ExperienceRow({ exp, defaultOpen }: { exp: (typeof experience)[number]; defaultOpen: boolean }) {
  const [expanded, setExpanded] = useState(defaultOpen);

  return (
    <article className="border-b border-border py-10">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-xl font-medium text-ink">{exp.role}</h3>
        <span className="font-mono text-sm text-faint">{exp.period}</span>
      </div>
      <p className="mt-1 text-sm text-muted">{exp.company}</p>
      <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">{exp.description}</p>

      <button
        type="button"
        aria-expanded={expanded}
        onClick={() => setExpanded((v) => !v)}
        className="mt-4 text-sm font-medium text-ink hover:text-accent"
      >
        {expanded ? "Hide details" : "Show details"}
      </button>

      {expanded && (
        <ul className="mt-4 max-w-2xl space-y-3">
          {exp.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-[15px] leading-relaxed text-ink">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {h}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export function ExperiencePage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-5 pt-20 pb-4 sm:px-8">
        <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Experience
        </h1>
        <p className="mt-3 text-lg text-muted">
          From enterprise telecom data migration to university facilities analytics.
        </p>
      </div>

      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="border-t border-border">
          {experience.map((exp, i) => (
            <ExperienceRow key={exp.company + exp.role} exp={exp} defaultOpen={i === 0} />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6 py-10 sm:grid-cols-4">
          {[
            { value: "11M+", label: "Customers migrated" },
            { value: "16h → 5h", label: "Migration time" },
            { value: "60h → 25h", label: "QA cycle time" },
            { value: "90%", label: "Liaison time saved" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-mono text-xl text-ink">{s.value}</p>
              <p className="mt-1 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <ContactBar />
    </>
  );
}

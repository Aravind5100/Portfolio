import { CheckCircle2 } from "lucide-react";
import { about } from "@/data/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          About
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
          {about.paragraph}
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {about.strengths.map((s) => (
            <li
              key={s}
              className="flex items-start gap-2 text-neutral-700 dark:text-neutral-300"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400" />
              <span className="text-sm">{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { Briefcase, GraduationCap } from "lucide-react";
import { experience, education } from "@/data/site";

export function Timeline() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-neutral-200 dark:border-neutral-800"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          Experience &amp; Education
        </h2>

        <div className="relative mt-10 ml-4 border-l-2 border-neutral-200 pl-8 dark:border-neutral-700">
          {/* Experience */}
          {experience.map((e) => (
            <div key={e.role + e.company} className="relative mb-10">
              <span className="absolute -left-[calc(2rem+5px)] top-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-600 bg-white dark:border-blue-400 dark:bg-neutral-900">
                <Briefcase className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </span>
              <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                {e.period}
              </p>
              <h3 className="mt-1 text-base font-semibold text-neutral-900 dark:text-white">
                {e.role}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">{e.company}</p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                {e.description}
              </p>
              <ul className="mt-2 space-y-1">
                {e.highlights.map((h) => (
                  <li
                    key={h}
                    className="text-sm text-neutral-600 before:mr-2 before:content-['•'] dark:text-neutral-300"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Education */}
          {education.map((e) => (
            <div key={e.degree + e.school} className="relative mb-10 last:mb-0">
              <span className="absolute -left-[calc(2rem+5px)] top-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-cyan-600 bg-white dark:border-cyan-400 dark:bg-neutral-900">
                <GraduationCap className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
              </span>
              <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                {e.period}
              </p>
              <h3 className="mt-1 text-base font-semibold text-neutral-900 dark:text-white">
                {e.degree}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">{e.school}</p>
              <ul className="mt-2 space-y-1">
                {e.details.map((d) => (
                  <li
                    key={d}
                    className="text-sm text-neutral-600 before:mr-2 before:content-['•'] dark:text-neutral-300"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

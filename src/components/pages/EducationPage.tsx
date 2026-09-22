import { education } from "@/data/site";
import { ContactBar } from "@/components/ContactBar";

export function EducationPage() {
  const edu = education[0];

  return (
    <>
      <div className="mx-auto max-w-3xl px-5 pt-20 pb-16 sm:px-8">
        <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Education
        </h1>

        <div className="mt-10 border-t border-border pt-8">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="text-xl font-medium text-ink">{edu.degree}</h2>
            <span className="font-mono text-sm text-faint">{edu.period}</span>
          </div>
          <p className="mt-1 text-sm text-muted">
            {edu.school} · GPA {edu.gpa} / 4.0
          </p>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
            {edu.details[0]}
          </p>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wide text-faint">
                Coursework
              </h3>
              <ul className="mt-3 space-y-1.5 text-[15px] text-ink">
                {edu.coursework.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium uppercase tracking-wide text-faint">
                Certifications
              </h3>
              <ul className="mt-3 space-y-1.5 text-[15px] text-ink">
                {edu.certifications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-medium uppercase tracking-wide text-faint">
              Achievements
            </h3>
            <ul className="mt-3 space-y-1.5 text-[15px] text-ink">
              {edu.achievements.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <ContactBar />
    </>
  );
}

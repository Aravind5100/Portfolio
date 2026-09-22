import { skillGroups } from "@/data/site";
import { ContactBar } from "@/components/ContactBar";

export function SkillsPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-5 pt-20 pb-16 sm:px-8">
        <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Skills
        </h1>
        <p className="mt-3 max-w-xl text-lg text-muted">
          Technologies I use, and the specific project or role where I applied each one.
        </p>

        <div className="mt-12 grid gap-10 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h2 className="text-sm font-medium uppercase tracking-wide text-faint">
                {group.category}
              </h2>
              <dl className="mt-4 space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <dt className="text-[15px] font-medium text-ink">{skill.name}</dt>
                    <dd className="mt-0.5 text-sm text-muted">{skill.usedIn}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>

      <ContactBar />
    </>
  );
}

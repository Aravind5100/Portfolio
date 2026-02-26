"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillGroups, type SkillGroup } from "@/data/site";
import { ContactBar } from "@/components/ContactBar";
import { AnimatedSection } from "@/components/AnimatedSection";

function SkillBar({ name, proficiency, usedIn, delay }: { name: string; proficiency: number; usedIn: string; delay: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {name}
        </span>
        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
          {proficiency}%
        </span>
      </div>
      <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
        />
      </div>
      <AnimatePresence>
        {hovered && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-1 overflow-hidden text-xs text-neutral-500 dark:text-neutral-400"
          >
            Used in: {usedIn}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

function CategoryCard({ group, index }: { group: SkillGroup; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">{group.icon}</span>
        <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
          {group.category}
        </h3>
      </div>

      <div className="mt-5 space-y-4">
        {group.skills.map((skill, i) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            proficiency={skill.proficiency}
            usedIn={skill.usedIn}
            delay={i * 0.08}
          />
        ))}
      </div>
    </motion.div>
  );
}

export function SkillsPage() {
  const totalSkills = skillGroups.reduce((sum, g) => sum + g.skills.length, 0);
  const avgProficiency = Math.round(
    skillGroups.reduce(
      (sum, g) => sum + g.skills.reduce((s, sk) => s + sk.proficiency, 0),
      0
    ) / totalSkills
  );

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
              Skills
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-neutral-500 dark:text-neutral-400">
              Technologies I use — and where I&apos;ve applied them.
            </p>
          </div>
        </AnimatedSection>

        {/* Summary stats */}
        <AnimatedSection delay={0.1} className="mt-10">
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { value: skillGroups.length, label: "Domains" },
              { value: totalSkills, label: "Technologies" },
              { value: `${avgProficiency}%`, label: "Avg Proficiency" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-neutral-200 bg-white px-6 py-4 text-center dark:border-neutral-800 dark:bg-neutral-900"
              >
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {s.value}
                </div>
                <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Skill cards grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <CategoryCard key={group.category} group={group} index={i} />
          ))}
        </div>
      </div>

      <ContactBar />
    </>
  );
}

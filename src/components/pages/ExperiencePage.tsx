"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, ChevronDown, ChevronUp, MapPin, Calendar } from "lucide-react";
import { experience } from "@/data/site";
import { ContactBar } from "@/components/ContactBar";
import { AnimatedSection } from "@/components/AnimatedSection";

function TimelineCard({
  exp,
  index,
}: {
  exp: (typeof experience)[number];
  index: number;
}) {
  const [expanded, setExpanded] = useState(index === 0);
  const isLeft = index % 2 === 0;

  return (
    <div className={`relative flex w-full items-start gap-6 md:gap-10 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
      {/* Timeline dot */}
      <div className="absolute left-4 top-0 z-10 hidden h-full md:left-1/2 md:block md:-translate-x-1/2">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.15 }}
          className="sticky top-24 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-blue-600 shadow-lg dark:border-neutral-950 dark:bg-blue-500"
        >
          <Briefcase className="h-4 w-4 text-white" />
        </motion.div>
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        className={`w-full rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900 md:w-[calc(50%-3rem)] ${isLeft ? "md:ml-0" : "md:mr-0"}`}
      >
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
              {exp.role}
            </h3>
            <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                {exp.company}
              </span>
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {exp.period}
              </span>
            </div>
          </div>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
          {exp.description}
        </p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          {expanded ? "Show Less" : "Key Achievements"}
          {expanded ? (
            <ChevronUp className="h-3.5 w-3.5" />
          ) : (
            <ChevronDown className="h-3.5 w-3.5" />
          )}
        </button>

        <motion.div
          initial={false}
          animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <ul className="mt-3 space-y-2">
            {exp.highlights.map((h, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={expanded ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-300"
              >
                <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                {h}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
}

export function ExperiencePage() {
  return (
    <>
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
              Experience
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-neutral-500 dark:text-neutral-400">
              From enterprise telecom data migration to university facilities analytics.
            </p>
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Center line */}
          <div className="absolute left-4 top-0 hidden h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-300 md:left-1/2 md:block md:-translate-x-1/2" />

          <div className="space-y-12">
            {experience.map((exp, i) => (
              <TimelineCard key={exp.company + exp.role} exp={exp} index={i} />
            ))}
          </div>
        </div>

        {/* Impact summary */}
        <AnimatedSection delay={0.3} className="mt-20">
          <div className="rounded-2xl border border-neutral-200 bg-gradient-to-r from-blue-50 to-purple-50 p-8 dark:border-neutral-800 dark:from-blue-950/20 dark:to-purple-950/20">
            <h2 className="text-center text-lg font-bold text-neutral-900 dark:text-white">
              Impact at a Glance
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { value: "25M+", label: "Records Migrated" },
                { value: "97.4%", label: "Data Integrity" },
                { value: "40h/mo", label: "Manual QA Saved" },
                { value: "30%", label: "Turnaround Reduced" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 sm:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs font-medium text-neutral-500 dark:text-neutral-400">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>

      <ContactBar />
    </>
  );
}

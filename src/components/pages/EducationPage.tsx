"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Trophy } from "lucide-react";
import { education } from "@/data/site";
import { ContactBar } from "@/components/ContactBar";
import { AnimatedSection } from "@/components/AnimatedSection";

function GpaRing({ gpa }: { gpa: string }) {
  const value = parseFloat(gpa);
  const percentage = (value / 4.0) * 100;
  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex h-36 w-36 items-center justify-center">
      <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          strokeWidth="8"
          className="stroke-neutral-200 dark:stroke-neutral-700"
        />
        <motion.circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          strokeWidth="8"
          strokeLinecap="round"
          className="stroke-blue-600 dark:stroke-blue-400"
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          strokeDasharray={circumference}
        />
      </svg>
      <div className="absolute text-center">
        <div className="text-2xl font-bold text-neutral-900 dark:text-white">{gpa}</div>
        <div className="text-[10px] font-medium text-neutral-500 dark:text-neutral-400">/ 4.0 GPA</div>
      </div>
    </div>
  );
}

export function EducationPage() {
  const edu = education[0];

  return (
    <>
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
              Education
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-neutral-500 dark:text-neutral-400">
              Building a strong analytical foundation at George Mason University.
            </p>
          </div>
        </AnimatedSection>

        {/* Main education card */}
        <AnimatedSection delay={0.15} className="mt-14">
          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-8 dark:from-blue-700 dark:to-purple-700">
              <div className="flex flex-col items-center gap-6 sm:flex-row">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <h2 className="text-2xl font-bold text-white">{edu.degree}</h2>
                  <p className="mt-1 text-blue-100">{edu.school}</p>
                  <p className="text-sm text-blue-200">{edu.period}</p>
                </div>
              </div>
            </div>

            <div className="px-8 py-8">
              <div className="grid gap-10 md:grid-cols-[1fr_auto]">
                {/* Left: details */}
                <div className="space-y-8">
                  {/* Description */}
                  <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                    {edu.details[0]}
                  </p>

                  {/* Coursework */}
                  <div>
                    <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-neutral-900 dark:text-white">
                      <BookOpen className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      Coursework
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {edu.coursework.map((c, i) => (
                        <motion.span
                          key={c}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.08 }}
                          className="rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-sm font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                        >
                          {c}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div>
                    <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-neutral-900 dark:text-white">
                      <Award className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      Certifications
                    </h3>
                    <div className="mt-3 space-y-2">
                      {edu.certifications.map((c, i) => (
                        <motion.div
                          key={c}
                          initial={{ opacity: 0, x: -15 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-3 rounded-lg bg-green-50 px-4 py-2.5 dark:bg-green-900/20"
                        >
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white">
                            <Award className="h-3 w-3" />
                          </div>
                          <span className="text-sm font-medium text-green-800 dark:text-green-300">
                            {c}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-neutral-900 dark:text-white">
                      <Trophy className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      Achievements
                    </h3>
                    <div className="mt-3 space-y-2">
                      {edu.achievements.map((a, i) => (
                        <motion.div
                          key={a}
                          initial={{ opacity: 0, x: -15 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300"
                        >
                          <span className="block h-1.5 w-1.5 rounded-full bg-blue-500" />
                          {a}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: GPA ring */}
                <div className="flex flex-col items-center justify-start">
                  <GpaRing gpa={edu.gpa} />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <ContactBar />
    </>
  );
}

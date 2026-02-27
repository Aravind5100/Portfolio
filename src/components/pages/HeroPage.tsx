"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { siteConfig, about } from "@/data/site";
import { ContactBar } from "@/components/ContactBar";

function TypingRole() {
  const roles = siteConfig.introRoles;
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    const speed = deleting ? 30 : 60;

    if (!deleting && text === current) {
      const pause = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(pause);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setText(
        deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, index, roles]);

  return (
    <span className="text-blue-600 dark:text-blue-400">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}

function FloatingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-blue-400/20 dark:bg-blue-400/10"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
            x: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

const stats = [
  { value: "25M+", label: "Records Migrated" },
  { value: "3.8", label: "GPA at GMU" },
  { value: "30%", label: "Turnaround Reduced" },
  { value: "97.4%", label: "Data Integrity" },
];

export function HeroPage() {
  return (
    <>
      <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden">
        <FloatingParticles />

        {/* Gradient bg */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-50/60 via-transparent to-purple-50/40 dark:from-blue-950/20 dark:to-purple-950/10" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-1.5 text-sm font-medium text-blue-700 backdrop-blur dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Open to Full-Time Opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
              {siteConfig.name.split(" ")[0]}
            </span>
          </motion.h1>

          {/* Typing role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-xl font-medium text-neutral-700 dark:text-neutral-300 sm:text-2xl lg:text-3xl"
          >
            I&apos;m a <TypingRole />
          </motion.div>

          {/* Hook */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400"
          >
            {siteConfig.introHook}{" "}
            <span className="text-neutral-500 dark:text-neutral-500">
              From migrating 25M+ billing records to building evaluated RAG systems
              with measurable retrieval quality, I build things that hold up in production.
            </span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 dark:bg-blue-500 dark:shadow-blue-500/25 dark:hover:bg-blue-400"
            >
              View My Work <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                className="rounded-xl border border-neutral-200/80 bg-white/60 px-4 py-4 text-center backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/60"
              >
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 sm:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <ContactBar />
    </>
  );
}

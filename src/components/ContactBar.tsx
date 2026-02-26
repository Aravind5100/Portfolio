"use client";

import { Mail, Linkedin, Github, Download } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";

export function ContactBar() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="border-t border-neutral-200 bg-gradient-to-r from-blue-50/50 via-white to-blue-50/50 dark:border-neutral-800 dark:from-neutral-900/50 dark:via-neutral-950 dark:to-neutral-900/50"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-12 sm:px-6 lg:px-8">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
          Let&apos;s Connect
        </h3>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Open to full-time roles in Data Engineering, Analytics & AI.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm transition-all hover:border-blue-300 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:border-blue-600"
          >
            <Mail className="h-4 w-4" /> Email
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm transition-all hover:border-blue-300 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:border-blue-600"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm transition-all hover:border-blue-300 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:border-blue-600"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href={siteConfig.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md dark:bg-blue-500 dark:hover:bg-blue-400"
          >
            <Download className="h-4 w-4" /> Resume
          </a>
        </div>
      </div>
    </motion.section>
  );
}

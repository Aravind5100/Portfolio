"use client";

import Link from "next/link";
import { useState } from "react";
import { MenuIcon, CloseIcon } from "./icons";
import { ThemeToggle } from "./ThemeToggle";
import { siteConfig } from "@/data/site";

const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Education", href: "/education" },
  { label: "Skills", href: "/skills" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-bg/95">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="text-[15px] font-semibold tracking-tight text-ink">
          {siteConfig.name}
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-[var(--radius)] px-3 py-2 text-sm text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
          <div className="ml-3">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius)] border border-border text-ink"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border px-5 pb-4 md:hidden">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-[var(--radius)] px-1 py-2.5 text-[15px] text-ink"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

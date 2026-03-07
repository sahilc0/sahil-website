"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Case studies", href: "/#case-studies" },
  { label: "Studio Twentyone", href: "/#freelance" },
  { label: "Newsletter", href: "/newsletter" },
  { label: "Podcast", href: "/podcast" },
  { label: "Talks", href: "/#talks" },
  {
    label: "Blog",
    href: "https://sahildesign.substack.com/",
    external: true,
  },
  { label: "Resume", href: "/#contact" },
];

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/50 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-[10px]">
          <div
            className="h-[23px] w-[23px] rounded-full"
            style={{
              background:
                "linear-gradient(214.081deg, rgb(164, 188, 253) 0%, rgb(45, 49, 166) 100%)",
            }}
          />
          <span className="font-nav text-[20px] font-extrabold tracking-[-0.3px] text-text">
            SAHIL
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-[30px] lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="font-nav text-[16px] font-semibold text-text transition-opacity hover:opacity-70"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="rounded-[10px] bg-primary px-5 py-[15px] font-nav text-[16px] font-bold text-white transition-opacity hover:opacity-90"
          >
            Contact me
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center lg:hidden"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-6 bg-text transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-text transition-opacity ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-text transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="flex flex-col gap-4 bg-white/95 px-6 pb-8 pt-4 backdrop-blur-md lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              onClick={() => setMenuOpen(false)}
              className="font-nav text-[16px] font-semibold text-text"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="inline-block rounded-[10px] bg-primary px-5 py-[15px] text-center font-nav text-[16px] font-bold text-white"
          >
            Contact me
          </Link>
        </div>
      )}
    </nav>
  );
}

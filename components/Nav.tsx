"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/constants";

const navLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#location", label: "Location" },
  { href: "#schools", label: "Schools & Amenities" },
  { href: "#faq", label: "FAQ" },
  { href: "#register", label: "Register" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-forest-mid/10 bg-white/95 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="relative block h-10 w-44 sm:h-12 sm:w-52">
          <Image
            src={IMAGES.logo}
            alt="Bronte Trails South Oakville"
            fill
            className="object-contain object-left"
            sizes="(max-width: 640px) 176px, 208px"
            priority
          />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-sm font-medium text-forest-dark transition-colors hover:text-forest-green"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#register"
          className="hidden btn-gold text-xs lg:inline-flex"
        >
          Get VIP Access
        </a>

        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center text-forest-dark lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-forest-mid/10 bg-white px-6 py-4 lg:hidden"
        >
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2 font-body text-sm font-medium text-forest-dark"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#register"
                className="btn-gold mt-2 w-full text-xs"
                onClick={() => setMenuOpen(false)}
              >
                Get VIP Access
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
}

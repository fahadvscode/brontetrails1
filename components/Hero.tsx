"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/constants";

const badges = [
  "🌿 Freehold — No Monthly Fees",
  "🏫 Top-Ranked Oakville Schools",
  "🚂 Minutes to Bronte GO",
  "🛣️ QEW · 403 · 407 Access",
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-forest-dark">
      <Image
        src={IMAGES.aerial}
        alt="Aerial view of Bronte Trails Oakville community"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-forest-dark/70" aria-hidden="true" />
      <div className="hero-noise pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-content px-6 py-32 lg:px-8 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="gold-divider-light mb-8" />
          <h1 className="font-display text-[44px] leading-tight text-white md:text-[72px]">
            Bronte Trails Oakville
          </h1>
          <h2 className="mt-4 font-body text-lg font-medium text-white/90">
            New Pre-Construction Freehold Townhomes by Caivan
          </h2>
          <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-white/85">
            Coming soon to Bronte Road &amp; Upper Middle Road West — where 350
            acres of Bronte Creek Provincial Park meets the prestige of Oakville
            living. Register now for Platinum VIP pricing, floor plans, and first
            access before the public launch.
          </p>

          <div className="mt-10">
            <a href="#register" className="btn-gold text-center">
              Get VIP Access — Register Now
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/20 pt-8">
            {badges.map((badge) => (
              <span
                key={badge}
                className="font-body text-[11px] font-semibold uppercase tracking-wider text-white/75"
              >
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

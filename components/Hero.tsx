"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/constants";
import RegisterForm from "./RegisterForm";

const badges = [
  "🌿 Freehold — No Monthly Fees",
  "🏫 Top-Ranked Oakville Schools",
  "🚂 Minutes to Bronte GO",
  "🛣️ QEW · 403 · 407 Access",
];

export default function Hero() {
  return (
    <section
      id="register"
      className="relative overflow-hidden bg-forest-dark pt-28 lg:pt-32"
    >
      <Image
        src={IMAGES.aerial}
        alt="Aerial view of Bronte Trails Oakville community"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-forest-dark/75" aria-hidden="true" />
      <div className="hero-noise pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-content px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="gold-divider-light mb-8" />
            <h1 className="font-display text-[40px] leading-tight text-white md:text-[64px]">
              Bronte Trails Oakville
            </h1>
            <h2 className="mt-4 font-body text-lg font-medium text-white/90">
              New Pre-Construction Freehold Townhomes by Caivan
            </h2>
            <p className="mt-6 font-body text-base leading-relaxed text-white/85">
              Coming soon to Bronte Road &amp; Upper Middle Road West — where 350
              acres of Bronte Creek Provincial Park meets the prestige of Oakville
              living. Register now for Platinum VIP pricing, floor plans, and first
              access before the public launch.
            </p>

            <div className="mt-10 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/20 pt-8">
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="gold-corners gold-corners-inner bg-white p-6 shadow-xl md:p-8"
          >
            <p className="section-label text-center">Register for VIP Access</p>
            <div className="gold-divider my-4" />
            <h2 className="mb-6 text-center font-display text-2xl text-forest-dark md:text-3xl">
              Get Priority Floor Plans &amp; Pricing
            </h2>
            <RegisterForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

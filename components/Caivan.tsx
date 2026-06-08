"use client";

import { motion } from "framer-motion";

const badges = [
  "✓ Active Ontario builder since multiple years",
  "✓ GTA + Ottawa Communities",
  "✓ Factory-built precision quality",
];

export default function Caivan() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <div className="gold-divider mb-6" />
        <h2 className="mb-8 text-center font-display text-3xl text-forest-dark md:text-4xl">
          Built by Caivan Communities
        </h2>
        <h3 className="sr-only">Who is the Builder of Bronte Trails?</h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl space-y-4 font-body text-[15px] leading-relaxed text-text-body"
        >
          <p>
            Caivan Communities is an Ontario-based developer and home builder
            with an established portfolio spanning the Greater Toronto Area and
            Ottawa. Known for their innovative factory-built construction method
            — which combines precision manufacturing with on-site assembly —
            Caivan delivers homes with high-quality finishes, faster build
            timelines, and modern open-concept layouts.
          </p>
          <p>
            In Oakville, Caivan has developed or is actively developing several
            communities, including The Saw Whet Condos, Riverview (Bronte
            Riverview), and now Bronte Trails — continuing their footprint in
            one of the GTA&apos;s most sought-after municipalities.
          </p>
          <p>
            Their Oakville homes are positioned for families and investors who
            want a combination of prestige location, quality craftsmanship, and
            long-term value appreciation.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-forest-green/30 pt-8">
          {badges.map((badge) => (
            <span
              key={badge}
              className="font-body text-xs font-semibold uppercase tracking-wide text-forest-mid"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

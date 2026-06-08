"use client";

import { motion } from "framer-motion";

const tiles = [
  {
    value: "Top 3",
    label:
      "Oakville ranked Top 3 'Best City to Live in Canada' by MoneySense",
  },
  {
    value: "300+ km",
    label: "of trails, parks, and forests surrounding the Bronte area",
  },
  {
    value: "$0",
    label: "Monthly condo fees — true freehold ownership",
  },
  {
    value: "Freehold",
    label:
      "Townhomes hold value and rental appeal in top Oakville corridors",
  },
];

export default function Investment() {
  return (
    <section className="bg-forest-dark py-20 text-white lg:py-28">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <div className="gold-divider-light mb-6" />
        <h2 className="mb-12 text-center font-display text-3xl md:text-4xl">
          Why Invest in Bronte Trails Oakville
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {tiles.map((tile, i) => (
            <motion.div
              key={tile.value}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-white/30 bg-white/10 p-8 text-center backdrop-blur-sm"
            >
              <p className="font-display text-3xl text-white">{tile.value}</p>
              <p className="mt-2 font-body text-sm leading-relaxed text-white/85">
                {tile.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-3xl text-center font-body text-[15px] leading-relaxed text-white/85"
        >
          South Oakville&apos;s Bronte corridor is one of the GTA&apos;s most
          land-constrained areas. With the QEW, GO Transit, top schools, and
          Bronte Creek Provincial Park all within minutes, Bronte Trails offers
          a rare configuration that appeals equally to families, downsizers, and
          investors seeking rental-ready freehold homes in a premium location.
        </motion.p>

        <div className="mt-10 text-center">
          <a href="#register" className="btn-gold">
            Register for VIP Access
          </a>
        </div>
      </div>
    </section>
  );
}

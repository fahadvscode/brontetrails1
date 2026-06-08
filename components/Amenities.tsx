"use client";

import { motion } from "framer-motion";

const columns = [
  {
    icon: "🌿",
    title: "Nature & Parks",
    items: [
      "Bronte Creek Provincial Park — 350+ acres, walking & cycling trails, river valley views, picnic areas, camping, seasonal swimming pool, play barn",
      "Bronte Waterfront & Harbour — Lake Ontario access, lighthouse, beach, boardwalk, picnic areas",
      "Coronation Park (Oakville) — Lake Ontario shoreline",
      "Bronte Heritage Waterfront Park",
    ],
  },
  {
    icon: "🛍️",
    title: "Shopping & Lifestyle",
    items: [
      "Walmart, Longo's, LCBO, Canadian Tire — all within 5 min (Oakville Uptown Core)",
      "South Oakville Centre (Hopedale Mall) — Rebecca St & Third Line",
      "Bronte Village boutiques & waterfront dining",
      "23 Michelin Guide restaurants within Oakville",
    ],
  },
  {
    icon: "❤️",
    title: "Recreation & Health",
    items: [
      "Deerfield Golf Club — adjacent to South Oakville corridor",
      "Glen Abbey Community Centre — tennis courts, arena, library",
      "Bronte Athletic Park",
      "Oakville Trafalgar Memorial Hospital — 12 min",
      "Oakville YMCA — 10 min",
    ],
  },
];

export default function Amenities() {
  return (
    <section id="amenities" className="bg-forest-dark py-20 text-white lg:py-28">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <div className="gold-divider-light mb-6" />
        <h2 className="mb-4 text-center font-display text-3xl md:text-4xl">
          Nature, Lifestyle &amp; Every Convenience
        </h2>
        <h3 className="sr-only">Parks and Trails Near Bronte Trails</h3>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {columns.map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="text-2xl" aria-hidden="true">
                  {col.icon}
                </span>
                <h3 className="font-body text-lg font-semibold text-white">
                  {col.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 font-body text-sm leading-relaxed text-white/85"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

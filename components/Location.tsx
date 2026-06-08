"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/constants";

const distances = [
  { icon: "🚂", label: "Bronte GO Station", time: "5–7 min drive" },
  { icon: "🛣️", label: "QEW On-Ramp", time: "4 min" },
  { icon: "🛣️", label: "Highway 403", time: "7 min" },
  { icon: "🛣️", label: "Highway 407 ETR", time: "10 min" },
  { icon: "🏢", label: "Mississauga City Centre", time: "20 min" },
  { icon: "🌆", label: "Downtown Toronto", time: "40 min via GO" },
  {
    icon: "🛒",
    label: "Oakville Uptown Core (Walmart, Longo's, LCBO, Canadian Tire)",
    time: "5 min",
  },
  {
    icon: "🍽️",
    label: "Oakville's Michelin Guide restaurants",
    time: "10–15 min",
  },
  { icon: "🏥", label: "Oakville Trafalgar Memorial Hospital", time: "12 min" },
  { icon: "🎓", label: "Sheridan College", time: "8 min" },
];

export default function Location() {
  return (
    <section id="location" className="bg-forest-dark py-20 text-white lg:py-28">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <div className="gold-divider-light mb-6" />
        <h2 className="mb-12 text-center font-display text-3xl md:text-4xl">
          Perfectly Positioned in South Oakville
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 overflow-hidden border border-white/20 bg-forest-mid"
        >
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={IMAGES.sitePlan}
              alt="Bronte Trails North community site plan illustration"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
          <p className="px-4 py-3 text-center font-body text-xs uppercase tracking-wide text-white/70">
            Bronte Trails North — Community Illustration
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] overflow-hidden border border-white/20 bg-forest-mid"
          >
            <iframe
              title="Bronte Trails location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2897.5!2d-79.745!3d43.435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDI2JzA2LjAiTiA3OcKwNDQnNDIuMCJX!5e0!3m2!1sen!2sca!4v1"
              className="h-full w-full border-0 grayscale-[30%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-forest-dark/90 p-4 text-center">
              <p className="font-body text-sm font-semibold">
                Bronte Road &amp; Upper Middle Road West, Oakville
              </p>
              <p className="mt-1 text-xs text-white/70">
                Near QEW · Bronte GO · Bronte Creek Provincial Park · Sheridan College
              </p>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {distances.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-3 border border-white/15 p-4"
              >
                <span className="text-xl" aria-hidden="true">
                  {item.icon}
                </span>
                <div>
                  <p className="font-body text-sm font-medium">{item.label}</p>
                  <p className="text-xs text-white/80">{item.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <h3 className="sr-only">Transit and Highway Access from Bronte Trails</h3>
      </div>
    </section>
  );
}

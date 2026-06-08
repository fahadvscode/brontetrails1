"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/constants";

const stats = [
  {
    value: "350+",
    label: "Acres of Bronte Creek Provincial Park at your door",
  },
  {
    value: "Freehold",
    label: "No monthly condo or maintenance fees",
  },
  {
    value: "Coming Soon",
    label: "VIP registration open — pricing gated, act early",
  },
];

const homeImages = [
  {
    src: IMAGES.detachedExterior,
    alt: "Detached home exterior at Bronte Trails Oakville",
    caption: "Detached Home Exterior",
  },
  {
    src: IMAGES.detachedPicture2,
    alt: "Detached home rendering at Bronte Trails",
    caption: "Modern Freehold Design",
  },
  {
    src: IMAGES.exteriorCommunity,
    alt: "Bronte Trails community exterior",
    caption: "Community Streetscape",
  },
];

export default function Overview() {
  return (
    <section id="overview" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <div className="gold-divider mb-6" />
        <h2 className="mb-12 text-center font-display text-3xl text-forest-dark md:text-4xl">
          What is Bronte Trails Oakville?
        </h2>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 font-body text-[15px] leading-relaxed text-text-body"
          >
            <p>
              Bronte Trails is a forthcoming collection of modern freehold
              townhomes by Caivan Communities, strategically positioned at the
              gateway to South Oakville&apos;s most coveted natural corridor.
              Located at the intersection of Bronte Road and Upper Middle Road
              West, this community borders 350+ acres of Bronte Creek
              Provincial Park — offering a lifestyle that blends genuine natural
              beauty with the prestige Oakville is known for.
            </p>
            <p>
              As freehold homes, Bronte Trails residents pay no monthly condo
              maintenance fees — a significant advantage compared to stacked
              townhomes and condo-style towns in the area.
            </p>
            <a href="#register" className="inline-block font-semibold text-forest-green underline-offset-4 hover:underline">
              Register for priority updates →
            </a>
          </motion.div>

          <div className="space-y-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-l-2 border-forest-green bg-white p-6"
              >
                <p className="font-display text-2xl text-forest-green">
                  {stat.value}
                </p>
                <p className="mt-1 font-body text-sm text-forest-mid">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {homeImages.map((image, i) => (
            <motion.figure
              key={image.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="overflow-hidden border border-forest-green/20 bg-white"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <figcaption className="px-4 py-3 text-center font-body text-xs font-semibold uppercase tracking-wide text-forest-mid">
                {image.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

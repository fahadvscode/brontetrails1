"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What is Bronte Trails Oakville?",
    a: "Bronte Trails is a new pre-construction freehold townhome development by Caivan Communities, coming soon to Bronte Road and Upper Middle Road West in Oakville, Ontario. The project is currently in its VIP registration phase, with pricing and floor plans available to registered buyers.",
  },
  {
    q: "Who is the builder of Bronte Trails?",
    a: "Bronte Trails is built by Caivan Communities (also known as Caivan Homes), an Ontario-based developer known for their precision factory-built construction method. Caivan has multiple active projects across Oakville, Brampton, Caledon, and Ottawa.",
  },
  {
    q: "Where exactly is Bronte Trails located?",
    a: "At the intersection of Bronte Road and Upper Middle Road West in South Oakville — directly adjacent to Bronte Creek Provincial Park and approximately 5–7 minutes from Bronte GO Station.",
  },
  {
    q: "What type of homes are at Bronte Trails?",
    a: "Bronte Trails offers freehold townhomes — meaning no monthly condo or maintenance fees. Full details on models, sizes, and configurations will be released to registered VIP buyers first.",
  },
  {
    q: "What is the price for Bronte Trails townhomes?",
    a: "Pricing has not been publicly released. Register on this page to receive the VIP price list and floor plan package before the public launch.",
  },
  {
    q: "What schools are near Bronte Trails?",
    a: "The area is served by Thomas A. Blakelock High School (Fraser 8.0/10), St. Ignatius of Loyola Catholic Secondary, and several top elementary schools including Gladys Speers PS, Eastview PS, and Brookdale PS. Abbey Park High School (Fraser 9.3/10, top 1% in Ontario) is within the broader Oakville area.",
  },
  {
    q: "How far is Bronte Trails from the highway?",
    a: "The QEW is approximately 4 minutes, Highway 403 is about 7 minutes, and Highway 407 is about 10 minutes away.",
  },
  {
    q: "Is Bronte Trails a good investment?",
    a: "South Oakville is one of the GTA's most supply-constrained and high-demand real estate markets. Freehold townhomes in this area historically hold value and attract strong rental demand from families and professionals.",
  },
  {
    q: "How do I get VIP pricing for Bronte Trails?",
    a: "Register on this page or call Fahad Javed directly at 647-898-1739. Fahad is a Platinum access broker who can provide floor plans, pricing, and incentive details before the public launch.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <p className="section-label text-center">FAQ</p>
        <div className="gold-divider my-4" />
        <h2 className="mb-12 text-center font-display text-3xl text-forest-dark md:text-4xl">
          Frequently Asked Questions — Bronte Trails Oakville
        </h2>

        <div className="mx-auto max-w-3xl divide-y divide-forest-mid/10 border border-forest-mid/10 bg-white">
          {faqs.map((faq, i) => (
            <div key={faq.q}>
              <button
                type="button"
                className="flex w-full min-h-12 items-center justify-between gap-4 px-6 py-5 text-left font-body text-sm font-semibold text-forest-dark transition-colors hover:text-forest-green"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                {faq.q}
                <span
                  className={`shrink-0 text-forest-green transition-transform ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 font-body text-sm leading-relaxed text-forest-mid">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

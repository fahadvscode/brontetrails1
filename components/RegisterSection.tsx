"use client";

import { motion } from "framer-motion";
import RegisterForm from "./RegisterForm";

export default function RegisterSection() {
  return (
    <section id="register" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="gold-corners gold-corners-inner mx-auto max-w-2xl bg-white p-8 shadow-sm md:p-12"
        >
          <p className="section-label text-center">Register for VIP Access</p>
          <div className="gold-divider my-4" />
          <h2 className="mb-8 text-center font-display text-3xl text-forest-dark md:text-4xl">
            Get Priority Floor Plans &amp; Platinum Pricing
          </h2>
          <RegisterForm />
        </motion.div>
      </div>
    </section>
  );
}

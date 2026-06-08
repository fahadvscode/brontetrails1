"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RegisterForm from "./RegisterForm";

export default function ExitIntent() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      if (dismissed) return;
      if (e.clientY <= 0 && window.innerWidth >= 1024) {
        setShow(true);
        setDismissed(true);
      }
    },
    [dismissed]
  );

  useEffect(() => {
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [handleMouseLeave]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] hidden items-center justify-center bg-black/60 p-6 lg:flex"
          onClick={() => setShow(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="exit-intent-title"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-md bg-forest-dark p-8 text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShow(false)}
              className="absolute right-4 top-4 text-white/60 hover:text-white"
              aria-label="Close"
            >
              ✕
            </button>
            <h2
              id="exit-intent-title"
              className="font-display text-2xl text-white"
            >
              Wait — get your VIP package before the public launch.
            </h2>
            <p className="mt-2 font-body text-sm text-white/80">
              Register now for floor plans, pricing, and platinum access.
            </p>
            <div className="mt-6">
              <RegisterForm
                variant="compact"
                onSuccess={() => setTimeout(() => setShow(false), 2000)}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

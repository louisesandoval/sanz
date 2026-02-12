"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const logos = [
  "Bloomberg",
  "Forbes",
  "TechCrunch",
  "Wall Street Journal",
  "CNBC",
  "Financial Times",
];

export default function SocialProof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 border-y border-border-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-sm text-text-muted uppercase tracking-widest mb-10"
        >
          Trusted by investors featured in
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6"
        >
          {logos.map((name) => (
            <span
              key={name}
              className="text-lg font-semibold text-text-muted/40 hover:text-text-muted/70 transition-colors select-none"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

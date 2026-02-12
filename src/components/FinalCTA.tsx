"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

const bullets = [
  "No minimum investment required",
  "Cancel anytime — zero penalties",
  "Bank-grade security & encryption",
  "Setup in under 2 minutes",
];

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cta" ref={ref} className="py-24 sm:py-32 gradient-mesh">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Stop Leaving Money
            <br />
            <span className="gradient-text">On the Table</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            Every day without WealthAgent is a day your portfolio isn&apos;t
            being optimized. Join the waitlist and be the first to access
            AI-powered wealth management that actually delivers.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-10">
            {bullets.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-2"
              >
                <CheckCircle size={16} className="text-success shrink-0" />
                <span className="text-sm text-text-secondary">{b}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a
              href="#"
              className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold text-lg px-10 py-5 rounded-full transition-all hover:shadow-2xl hover:shadow-accent/30 hover:scale-105"
            >
              Get Early Access — It&apos;s Free
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <p className="text-xs text-text-muted mt-4">
              No credit card required. Limited spots available.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

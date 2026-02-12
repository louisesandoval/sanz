"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "I was paying a financial advisor $8,000 a year and underperforming the S&P. WealthAgent outperformed my old advisor in the first 3 months — for a fraction of the cost.",
    name: "Marcus D.",
    role: "Software Engineer",
    result: "+31% in 6 months",
  },
  {
    quote:
      "The tax-loss harvesting alone saved me over $4,200 this year. It caught opportunities my CPA never would have. This thing pays for itself 100x over.",
    name: "Sarah K.",
    role: "Business Owner",
    result: "$4,200 in tax savings",
  },
  {
    quote:
      "I used to check my portfolio 20 times a day out of anxiety. Now WealthAgent handles everything and I just get a weekly summary. My stress is gone and my returns are up.",
    name: "James L.",
    role: "Physician",
    result: "23% avg annual return",
  },
];

export default function Results() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="results" ref={ref} className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent-light uppercase tracking-widest">
            Real Results
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-4 mb-6">
            Don&apos;t Take Our Word For It
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Our early-access members are already seeing life-changing results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="card-glow p-6 rounded-2xl bg-bg-card border border-border-subtle hover:border-accent/30 transition-all flex flex-col"
            >
              <Quote
                size={24}
                className="text-accent/30 mb-4 shrink-0"
              />
              <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center justify-between border-t border-border-subtle pt-4">
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-text-muted">{t.role}</p>
                </div>
                <span className="text-xs font-bold text-success bg-success/10 px-3 py-1 rounded-full">
                  {t.result}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

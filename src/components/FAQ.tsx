"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is my money safe with WealthAgent?",
    a: "Absolutely. WealthAgent never holds your funds directly. We integrate with SEC-regulated custodians (like Schwab, Fidelity, etc.) through read-only and trade-authorized connections. Your money stays in your brokerage account — we just make it work harder.",
  },
  {
    q: "How is this different from a robo-advisor like Betterment?",
    a: "Traditional robo-advisors use static models and rebalance quarterly. WealthAgent uses real-time AI that actively monitors markets 24/7, performs continuous tax-loss harvesting, and adapts to macroeconomic shifts instantly. Think of it as the difference between cruise control and a self-driving car.",
  },
  {
    q: "What kind of returns can I expect?",
    a: "While past performance doesn't guarantee future results, our AI has delivered an average 23.4% annual return during our beta period. The AI focuses on risk-adjusted returns — maximizing upside while protecting your downside through institutional-grade risk management.",
  },
  {
    q: "Do I need a minimum investment?",
    a: "No. One of our core missions is to democratize wealth management. Whether you're starting with $500 or $500,000, you get the same AI-powered strategies. No minimums, no gating.",
  },
  {
    q: "Can I still make my own trades?",
    a: "Of course. WealthAgent is your advisor, not your gatekeeper. You can override any recommendation, set custom constraints (like avoiding certain sectors), or use a hybrid approach where the AI manages part of your portfolio while you manage the rest.",
  },
  {
    q: "What happens if I want to cancel?",
    a: "Cancel anytime with zero penalties. Your portfolio stays exactly as-is in your brokerage account. We believe in earning your trust every month — not locking you into contracts.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border-subtle">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-medium text-text-primary group-hover:text-accent-light transition-colors pr-4">
          {q}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-text-muted transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-sm text-text-secondary leading-relaxed pb-5 pr-8">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" ref={ref} className="py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-accent-light uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4">
            Questions? We&apos;ve Got Answers.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

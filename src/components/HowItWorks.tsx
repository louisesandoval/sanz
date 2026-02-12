"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, LineChart, RefreshCw, Wallet } from "lucide-react";

const steps = [
  {
    icon: Wallet,
    title: "Connect Your Accounts",
    description:
      "Link your brokerage, retirement, and savings accounts in under 2 minutes. Bank-grade encryption keeps everything locked down.",
  },
  {
    icon: Brain,
    title: "AI Analyzes Your Situation",
    description:
      "Our agent evaluates your risk tolerance, goals, tax situation, and current holdings to build a personalized wealth strategy.",
  },
  {
    icon: LineChart,
    title: "Portfolio Gets Optimized",
    description:
      "WealthAgent rebalances, tax-loss harvests, and reallocates in real-time — capturing opportunities human advisors miss.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Compounding",
    description:
      "Your wealth compounds 24/7. The AI adapts to market shifts, life changes, and new opportunities without you lifting a finger.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" ref={ref} className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent-light uppercase tracking-widest">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-4 mb-6">
            From Signup to Wealth Growth
            <br />
            <span className="text-text-secondary">in Four Steps</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            No jargon. No complexity. Just connect, and let the AI handle
            the rest.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="relative group"
            >
              <div className="card-glow p-6 rounded-2xl bg-bg-card border border-border-subtle hover:border-accent/30 transition-all h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <step.icon size={20} className="text-accent-light" />
                  </div>
                  <span className="text-xs font-bold text-text-muted uppercase tracking-wider">
                    Step {i + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

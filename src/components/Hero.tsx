"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Shield, TrendingUp, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-mesh overflow-hidden">
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/8 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
          </span>
          <span className="text-sm text-accent-light font-medium">
            Now in Early Access — Limited Spots
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6"
        >
          Your Money Should Work
          <br />
          <span className="gradient-text">Harder Than You Do</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          WealthAgent is your AI-powered wealth advisor that monitors,
          optimizes, and grows your portfolio 24/7. Institutional-grade
          strategies that used to require $10M minimums — now accessible to
          everyone.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#cta"
            className="group flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-2xl hover:shadow-accent/30 hover:scale-105"
          >
            Start Growing Your Wealth
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#how-it-works"
            className="flex items-center gap-2 text-text-secondary hover:text-text-primary font-medium px-6 py-4 rounded-full border border-border-subtle hover:border-text-muted transition-all"
          >
            <Play size={16} />
            See How It Works
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            {
              icon: TrendingUp,
              stat: "23.4%",
              label: "Avg. Annual Return",
            },
            {
              icon: Shield,
              stat: "$2.1B+",
              label: "Assets Monitored",
            },
            { icon: Zap, stat: "< 50ms", label: "Decision Speed" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-bg-card/50 border border-border-subtle"
            >
              <item.icon size={20} className="text-accent-light" />
              <span className="text-2xl font-bold text-text-primary">
                {item.stat}
              </span>
              <span className="text-sm text-text-muted">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

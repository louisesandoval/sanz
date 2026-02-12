"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mic,
  FileText,
  BookOpen,
  Presentation,
  Users,
  Video,
} from "lucide-react";

const values = [
  {
    icon: Mic,
    qty: "1",
    title: "Elevator Speech",
    value: "$195",
    description:
      "A polished, ready-to-deliver elevator speech that instantly communicates your value and opens doors to new opportunities.",
  },
  {
    icon: FileText,
    qty: "16",
    title: "PDF Workshop Handouts / Email Attachments",
    value: "$1,200",
    description:
      "Professionally designed handouts you can use in workshops, seminars, or as high-value email attachments that position you as the expert.",
  },
  {
    icon: BookOpen,
    qty: "3",
    title: "PDF Print-on-Demand Customizable Booklets",
    value: "$495",
    description:
      "Brandable booklets ready for mailouts or workshop presentations — print on demand so you never waste a dollar on inventory.",
  },
  {
    icon: Presentation,
    qty: "50+",
    title: "PowerPoint Slide Library with Notes",
    value: "$2,500",
    description:
      "A massive slide library complete with speaker notes — plug and play for any presentation, webinar, or client meeting.",
  },
  {
    icon: Users,
    qty: "12",
    title: "Monthly Group Coaching Calls",
    value: "$2,495",
    description:
      "Live monthly calls highlighting Victory Moments, Best Practices, and What\u2019s Working — learn from the wins happening right now.",
  },
  {
    icon: Video,
    qty: "26",
    title: "Storyboard Video Content Ideas for Social Media",
    value: "$2,600",
    description:
      "Done-for-you storyboard ideas so you always know what to post — never stare at a blank screen again.",
  },
];

const totalValue = "$9,485";
const actualPrice = "$29/mo";

export default function ValueStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 sm:py-32 gradient-mesh">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <span className="text-sm font-medium text-accent-light uppercase tracking-widest">
            The Value Stack
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-4 mb-6">
            Everything You Get With
            <br />
            <span className="gradient-text">WealthAgent</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            We stacked every tool, strategy, and system you need to build
            serious wealth — into one AI agent.
          </p>
        </motion.div>

        <div className="space-y-4 max-w-3xl mx-auto mb-12">
          {values.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="card-glow group flex items-start gap-4 p-5 rounded-2xl bg-bg-card border border-border-subtle hover:border-accent/30 transition-all"
            >
              <div className="shrink-0 flex flex-col items-center gap-1 mt-0.5">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <item.icon size={20} className="text-accent-light" />
                </div>
                <span className="text-xs font-bold text-accent-light">
                  {item.qty}x
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-4 mb-1">
                  <h3 className="font-semibold text-text-primary">
                    {item.title}
                  </h3>
                  <span className="shrink-0 text-sm font-bold text-success line-through decoration-text-muted/50 opacity-70">
                    {item.value}
                  </span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-3xl mx-auto text-center p-8 rounded-3xl bg-bg-card border border-accent/30 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
          <div className="relative">
            <p className="text-text-muted text-sm mb-2">
              Total Value:
              <span className="line-through ml-1 text-text-secondary">
                {totalValue}
              </span>
            </p>
            <p className="text-4xl sm:text-5xl font-extrabold mb-2">
              Just{" "}
              <span className="gradient-text">{actualPrice}</span>
            </p>
            <p className="text-text-secondary mb-6">
              That&apos;s less than the cost of a single trade commission.
            </p>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-2xl hover:shadow-accent/30 hover:scale-105"
            >
              Claim Your Spot
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

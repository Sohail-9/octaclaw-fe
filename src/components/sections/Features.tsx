"use client";

import { motion } from "framer-motion";
import { Gauge, ShieldCheck, GitBranch } from "lucide-react";

const featureCards = [
  {
    icon: Gauge,
    title: "Ship agent flows in hours",
    description:
      "Go from idea to first execution quickly, so you can validate your use case before the week is gone. One command kicks off a full DAG. No boilerplate.",
  },
  {
    icon: ShieldCheck,
    title: "Catch failures before customers do",
    description:
      "Step-level traces show exactly where runs break, so your team fixes bad branches fast instead of guessing.",
  },
  {
    icon: GitBranch,
    title: "Scale experiments without chaos",
    description:
      "Run multiple DAG paths and compare outcomes in one place, so every launch uses evidence instead of intuition. Run `octa run` with any recipe and compare results side by side.",
  },
];

type FeaturesSectionProps = {
  light?: boolean;
};

export default function FeaturesSection({ light = false }: FeaturesSectionProps) {
  const sectionClasses = light
    ? "relative py-16 sm:py-20 px-6 surface-low"
    : "relative py-12 sm:py-16 px-6";
  const titleClass = "text-3xl sm:text-5xl font-semibold tracking-[-0.01em] text-white";
  const bodyClass = "mt-3 max-w-2xl mx-auto text-text-muted";
  const cardClass = "glass-card p-8";
  const cardTitleClass = "text-xl font-bold text-white font-heading";
  const cardBodyClass = "mt-4 text-text-muted leading-relaxed";

  return (
    <section id="features" className={sectionClasses}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`${titleClass} font-heading font-bold`}
          >
            Built for fast execution
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`${bodyClass} text-lg sm:text-xl`}
          >
            Plan, run, and improve your agent DAGs without rebuilding the same logic every sprint.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="glass-card p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon size={24} className="text-primary-light" />
                </div>
                <h3 className="text-xl font-bold text-white font-heading">{card.title}</h3>
                <p className="mt-4 text-text-muted leading-relaxed">{card.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

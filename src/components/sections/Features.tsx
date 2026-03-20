"use client";

import { motion } from "framer-motion";
import { Gauge, ShieldCheck, GitBranch } from "lucide-react";

const featureCards = [
  {
    icon: Gauge,
    title: "Ship agent flows in hours",
    description:
      "Go from idea to first execution quickly, so you can validate your use case before the week is gone.",
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
      "Run multiple DAG paths and compare outcomes in one place, so every launch uses evidence instead of intuition.",
  },
];

type FeaturesSectionProps = {
  light?: boolean;
};

export default function FeaturesSection({ light = false }: FeaturesSectionProps) {
  const sectionClasses = light
    ? "relative py-20 sm:py-24 px-6 bg-[#faf5ff]"
    : "relative py-20 sm:py-24 px-6 bg-[#120c21]";
  const titleClass = light ? "text-3xl sm:text-5xl font-extrabold text-[#1b1033]" : "text-3xl sm:text-5xl font-extrabold text-white";
  const bodyClass = light ? "mt-3 max-w-2xl mx-auto text-[#4b3a72]" : "mt-3 max-w-2xl mx-auto text-[#c9c2df]";
  const cardClass = light ? "oc-card-light p-7" : "oc-card p-7";
  const cardTitleClass = light ? "mt-4 text-xl font-extrabold text-[#1b1033]" : "mt-4 text-xl font-extrabold text-white";
  const cardBodyClass = light ? "mt-3 text-sm leading-relaxed text-[#4b3a72]" : "mt-3 text-sm leading-relaxed text-[#c9c2df]";

  return (
    <section id="features" className={sectionClasses}>
      {!light && <div className="glow-orb-3" />}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={titleClass}
          >
            Built for fast execution
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={bodyClass}
          >
            Plan, run, and improve your agent DAGs without rebuilding the same logic every sprint.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featureCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={cardClass}
              >
                <Icon size={28} className="text-[#7c3aff]" />
                <h3 className={cardTitleClass}>{card.title}</h3>
                <p className={cardBodyClass}>{card.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

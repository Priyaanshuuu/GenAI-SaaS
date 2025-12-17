"use client";

import { motion } from "framer-motion";

const features = [
  "PDFs",
  "YouTube / Video",
  "Audio Files",
  "Images",
  "Web Links",
  "Multi‑language",
  "Audio Summary",
  "Shareable Output",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.4,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function AnimatedFeatures() {
  return (
    <motion.section
      className="mt-16 max-w-4xl w-full"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {features.map((feature) => (
          <motion.div
            key={feature}
           // variants={item}
            whileHover={{
              y: -4,
              boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ duration: 0.2 }}
            className="rounded-xl border bg-background p-4 text-sm font-medium cursor-default"
          >
            {feature}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
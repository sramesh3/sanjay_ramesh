"use client";

import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "Sentiment Analysis",
    desc: "Built models on 34M+ Amazon reviews using TF‑IDF, Word2Vec, FastText, and BERT. Evaluated via F1, AUC‑ROC, and confusion matrices.",
  },
  {
    title: "Greenplate",
    desc: "Java/Android food‑tracking app (MVVM) with meal logging, shopping lists, Agile workflows, and UML‑driven design.",
  },
  {
    title: "SwapSpot",
    desc: "Co‑developed a SwiftUI subleasing app for students; optimized listing logic, reducing response times by 15%.",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen px-4 py-16 bg-white">
      <motion.h2
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold mb-6 text-center"
      >
        Projects
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {PROJECTS.map((p) => (
          <motion.div
            key={p.title}
            whileHover={{ y: -5 }}
            className="p-6 border rounded-lg shadow transition"
          >
            <h4 className="text-xl font-medium mb-2">{p.title}</h4>
            <p className="text-gray-700">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

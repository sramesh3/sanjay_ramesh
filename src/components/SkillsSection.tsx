"use client";

import { motion } from "framer-motion";

const SKILLS = [
  "Java","Python","JavaScript","Swift","SQL",
  "React","Redux","SwiftUI","Firebase","Tailwind CSS",
  "Scikit‑learn","NumPy","Pandas","Git","Figma"
];

export default function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen px-4 py-16 bg-gray-50">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold mb-6 text-center"
      >
        Skills
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
        {SKILLS.map((skill) => (
          <motion.span
            key={skill}
            whileHover={{ scale: 1.05 }}
            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}

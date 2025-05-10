"use client";

import { motion } from "framer-motion";

export default function EducationSection() {
  return (
    <section id="education" className="min-h-screen px-4 py-16 bg-white">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold mb-6 text-center"
      >
        Education
      </motion.h2>
      <div className="max-w-3xl mx-auto space-y-4">
        <div>
          <h3 className="text-xl font-medium">Georgia Institute of Technology</h3>
          <p className="text-gray-500">
            B.S. in Computer Science (Antic. May 2027) • GPA 4.0
          </p>
        </div>
        <div>
          <h4 className="font-medium">Relevant Coursework</h4>
          <p className="text-gray-700">
            Data Structures & Algorithms · OOP & Design · Perception & Robotics ·
            Database Management · Systems & Networks · Intro to AI · Machine Learning
          </p>
        </div>
      </div>
    </section>
  );
}

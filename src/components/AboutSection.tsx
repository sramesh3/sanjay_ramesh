"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-4 bg-white"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-4"
      >
        Hi, I’m Sanjay Ramesh
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="max-w-xl text-center text-lg text-gray-700"
      >
        I’m a second‑year Computer Science student at Georgia Tech (GPA 4.0),
        specializing in Intelligence & Information Internetworks. I build
        intuitive iOS apps with SwiftUI, scalable React front‑ends, and dive
        into ML models in my spare time.
      </motion.p>
    </section>
  );
}

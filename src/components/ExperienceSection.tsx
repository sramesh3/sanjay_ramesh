"use client";

import { motion } from "framer-motion";

export default function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen px-4 py-16 bg-gray-50">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold mb-6"
      >
        Experience
      </motion.h2>
      <div className="space-y-8 max-w-3xl mx-auto">
        <div>
          <h3 className="text-xl font-medium">iOS Developer / Researcher</h3>
          <p className="text-gray-500">
            AAC Team, BTAP @ Georgia Tech (Aug 2024–Present)
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Built an AAC iOS app in SwiftUI to help individuals with aphasia.</li>
            <li>Integrated Core Data & Firebase for seamless, secure data storage.</li>
            <li>Conducted user research and documented findings in a design notebook.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-medium">Frontend Intern</h3>
          <p className="text-gray-500">VDart (Jun 2024–Aug 2024)</p>
          <ul className="list-disc list-inside mt-2">
            <li>Engineered a responsive landing page with React, Tailwind & Aceternity UI.</li>
            <li>Prototyped UI in Figma; used Redux Toolkit & Axios for state/API calls.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

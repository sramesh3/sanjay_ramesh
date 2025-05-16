// components/ProjectsSection.tsx
"use client";

import { motion } from "framer-motion";
import { ExpandableCardDemo } from "./ui/ExpandableCard";
import { BackgroundBeamsWithCollision } from "./ui/Beams";
import { Cover } from "./ui/Cover";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-black border-t-2 border-t-blue-500 py-16"
    >
      <BackgroundBeamsWithCollision>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 flex flex-col md:flex-row items-start gap-8">
        {/* Left: Title & Instructions */}
        <div className="md:w-1/3">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white"
          >
            <Cover>Projects</Cover>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-2 text-gray-300 text-sm"
          >
            Click on each card to reveal more about the project.
          </motion.p>
        </div>

        {/* Right: Cards */}
        <div className="md:w-2/3">
          <ExpandableCardDemo />
        </div>
      </div>
      </BackgroundBeamsWithCollision>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Cover } from "./ui/Cover";

const SKILLS = [
  "Java", "Python", "JavaScript", "Swift", "SQL",
  "React", "Redux", "SwiftUI", "Firebase", "Tailwind CSS",
  "Scikit‑learn", "NumPy", "Pandas", "Git", "Figma"
];

const FRAMEWORKS = ["React", "Redux", "Redux Toolkit", "SwiftUI", "Next.js"];

const LIBRARIES = ["Axios", "Scikit-learn", "NumPy", "Pandas", "Matplotlib"];

const TOOLS = ["Git", "Firebase", "Figma", "VSCode", "Xcode", "Android Studio", "Jupyter Notebook"];

const METHODOLOGIES = ["Agile", "Scrum"];

const LANGUAGES = [
  "Java", "Python", "JavaScript", "Typescript", "Swift", "SQL", "HTML", "CSS", "Assembly"
];

const CERTIFICATIONS = [
  "AWS Certified Cloud Practitioner","Software Development Fundamentals (Microsoft)","Introduction to Programming Using Python (Microsoft)","Introduction to Programming Using Java (Microsoft)","General Management (NOCTI)"
];

import { CardSpotlight } from "./ui/CardSpotlight";

export default function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen px-4 py-16 bg-black border-t-2 border-t-blue-500">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold mb-6 text-center text-white"
      >
        <Cover>Skills</Cover>
      </motion.h2>
      <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
        <CardSpotlight className="h-96 w-96">
          <div className="text-neutral-200 mt-4 relative z-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl font-bold relative z-20 mb-10 text-white text-center"
            >
              Languages
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {LANGUAGES.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </CardSpotlight>

        <CardSpotlight className="h-96 w-96">
          <div className="text-neutral-200 mt-4 relative z-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl font-bold relative z-20 mb-10 text-white text-center"
            >
              Frameworks
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {FRAMEWORKS.map((framework) => (
                <motion.span
                  key={framework}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {framework}
                </motion.span>
              ))}
            </div>
          </div>
        </CardSpotlight>

        <CardSpotlight className="h-96 w-96">
          <div className="text-neutral-200 mt-4 relative z-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl font-bold relative z-20 mb-10 text-white text-center"
            >
              Libraries
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {LIBRARIES.map((library) => (
                <motion.span
                  key={library}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {library}
                </motion.span>
              ))}
            </div>
          </div>
        </CardSpotlight>

        <CardSpotlight className="h-96 w-96">
          <div className="text-neutral-200 mt-4 relative z-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl font-bold relative z-20 mb-10 text-white text-center"
            >
              Tools
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {TOOLS.map((tool) => (
                <motion.span
                  key={tool}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </CardSpotlight>

        <CardSpotlight className="h-96 w-96">
          <div className="text-neutral-200 mt-4 relative z-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl font-bold relative z-20 mb-10 text-white text-center"
            >
              Methodologies
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {METHODOLOGIES.map((methodology) => (
                <motion.span
                  key={methodology}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {methodology}
                </motion.span>
              ))}
            </div>
          </div>
        </CardSpotlight>

        <CardSpotlight className="h-96 w-96">
          <div className="text-neutral-200 mt-4 relative z-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl font-bold relative z-20 mb-10 text-white text-center"
            >
              Certifications
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {CERTIFICATIONS.map((certification) => (
                <motion.span
                  key={certification}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {certification}
                </motion.span>
              ))}
            </div>
          </div>
        </CardSpotlight>
      </div>
    </section>
  );
}

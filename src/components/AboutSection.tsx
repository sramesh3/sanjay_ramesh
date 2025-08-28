"use client";

import { motion } from "framer-motion";
import { TypewriterEffect } from "./ui/TypewriterEffect";
import { WavyBackground } from "./ui/WavyBackground";

export default function AboutSection() {
  const words = [
    {
      text: "Hi,",
      className: "text-white",
    },
    {
      text: "I'm",
      className: "text-white",
    },
    {
      text: "Sanjay",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Ramesh",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <WavyBackground>
      <section id="about" className="z-10 flex flex-col items-center justify-center px-4 text-center">
        {/* Typewriter Heading */}
        <TypewriterEffect 
          words={words} 
          className="text-white text-5xl font-bold mb-16"
          cursorClassName="w-[4px] h-10 mx-1"
        />

        {/* 3) Photo + Short Bio with animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-8">

          {/* Animated Image Container */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 3, duration: 0.6 }}
            viewport={{ once: true }}
            className="w-60 h-60 rounded-full overflow-hidden border-4 border-gray-200 mr-2">
            <img
              src="/images/profile.jpeg"
              alt="Sanjay Ramesh"
              className="object-cover object-top w-full h-full"
            />
          </motion.div>

          {/* Animated Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-md text-left text-white">
            <p className="max-w-xl text-lg text-white mb-6">
              I’m a Computer Science student at Georgia Tech who loves turning ideas into real experiences—whether that’s crafting sleek{" "}
              <span className="font-bold text-white">mobile apps</span>, building dynamic{" "}
              <span className="font-bold text-white">web interfaces</span>, or diving into{" "}
              <span className="font-bold text-white">AI & ML experiments</span>. I thrive on tackling tricky problems and writing clean, efficient code, and I’m always up for learning the next big thing in tech. When I’m not coding, you’ll find me playing sports or settling in for a great movie night.{" "}
            </p>
            <p className="mt-4 text-xl font-bold text-white">
              Let’s build something awesome together!
            </p>
          </motion.div>
        </motion.div>

        {/* Call-to-Action for Chatbot */}
        <div className="mt-12 text-center">
          <p className="text-lg text-white mb-4">
            Want to know more about me? Feel free to ask my chatbot!
          </p>
          <a
            href="#chat"
            className="inline-block px-6 py-3 text-lg font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Chat with Me
          </a>
        </div>
      </section>
    </WavyBackground>
  );
}

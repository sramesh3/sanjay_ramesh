"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen px-4 py-16 bg-gray-50">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold mb-6 text-center"
      >
        Contact
      </motion.h2>
      <div className="max-w-sm mx-auto space-y-2 text-center">
        <p>
          Email:{" "}
          <a
            href="mailto:sramesh319@gatech.edu"
            className="text-blue-600 hover:underline"
          >
            sramesh319@gatech.edu
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/sanjayramesh1"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            linkedin.com/in/sanjayramesh1
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/sramesh3"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            github.com/sramesh3
          </a>
        </p>
      </div>
    </section>
  );
}

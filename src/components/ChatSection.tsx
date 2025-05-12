"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const ChatWidget = dynamic(
  () => import("@/components/ChatWidget"),
  { ssr: false }
);

export default function ChatSection() {
  return (
    <section id="chat" className="min-h-screen px-4 py-16 bg-white">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold mb-6 text-center"
      >
        Chat with Me
      </motion.h2>
      <div className="max-w-xl mx-auto">
        <ChatWidget />
      </div>
    </section>
  );
}

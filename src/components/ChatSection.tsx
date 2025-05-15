"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Cover } from "./ui/Cover";

const ChatWidget = dynamic(
  () => import("@/components/ChatWidget"),
  { ssr: false }
);

export default function ChatSection() {
  return (
    <section id="chat" className="min-h-screen px-4 py-16 bg-black border-t border-blue-500">
      <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white"
            >
              <Cover>Chat With Me</Cover>
            </motion.h1>
      <div className="max-w-xl mx-auto">
        <ChatWidget />
      </div>
    </section>
  );
}

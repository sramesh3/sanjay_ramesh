"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ChatWidget() {
  const [q, setQ] = useState("");
  const [a, setA] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const ask = async () => {
    if (!q.trim()) return;
    setLoading(true);
    setA(null);
    const res = await fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: q }),
    });
    const { answer } = await res.json();
    setA(answer);
    setLoading(false);
  };

  return (
    <div className="space-y-3 max-w-xl mx-auto">
      <motion.textarea
        rows={3}
        className="w-full p-2 border rounded"
        placeholder="Ask me anything…"
        value={q}
        onChange={(e) => setQ(e.currentTarget.value)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      />
      <motion.button
        onClick={ask}
        disabled={loading}
        className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {loading ? "Thinking…" : "Send"}
      </motion.button>
      {a && (
        <motion.pre
          className="p-4 bg-gray-100 rounded whitespace-pre-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {a}
        </motion.pre>
      )}
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface Message {
  role: "user" | "bot";
  content: string;
}

export default function ChatWidget() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const handleSend = async () => {
    const question = input.trim();
    if (!question) return;

    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: question }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${apiUrl}/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const { answer } = await res.json();
      setMessages((prev) => [...prev, { role: "bot", content: answer }]);
    } catch (e) {
      setMessages((prev) => [...prev, { role: "bot", content: "Error: Unable to fetch response." }]);
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col max-w-xl mx-auto space-y-4 bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
      {/* Chat history */}
      <div className="flex-1 space-y-3 overflow-y-auto max-h-96 p-4 rounded-md bg-gray-800 border border-gray-700">
        {messages.map((msg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: msg.role === "bot" ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={
              msg.role === "user"
                ? "flex items-center justify-end space-x-2"
                : "flex items-center justify-start space-x-2"
            }
          >
            {msg.role === "bot" && (
              <img
                src="images/profile.jpeg"
                alt="Bot Profile"
                width={32}
                height={32}
                className="rounded-full border border-gray-600"
              />
            )}
            <span
              className={
                `inline-block px-4 py-2 rounded-lg whitespace-pre-wrap text-white shadow-md` +
                (msg.role === "user"
                  ? " bg-blue-500"
                  : " bg-gray-700")
              }
            >
              {msg.content}
            </span>
            {msg.role === "user" && (
              <img
                src="images/user.jpeg"
                alt="User Profile"
                width={32}
                height={32}
                className="rounded-full border border-gray-600"
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Input area */}
      <div className="flex items-center space-x-2">
        <motion.textarea
          rows={2}
          value={input}
          onChange={(e) => setInput(e.currentTarget.value)}
          className="flex-1 p-3 border rounded-md resize-none text-white bg-gray-800 border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Ask me anything…"
          disabled={loading}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.button
          onClick={handleSend}
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 disabled:opacity-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {loading ? "…" : "Send"}
        </motion.button>
      </div>
    </div>
  );
}
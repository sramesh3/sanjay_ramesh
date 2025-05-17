"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
  { id: "chat", label: "Chat" },
];

export default function Navbar() {
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (let sec of SECTIONS) {
        const el = document.getElementById(sec.id);
        if (el && el.offsetTop <= scrollPos) {
          setActive(sec.id);
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-800 via-gray-400 to-gray-800 text-white shadow-lg z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-6">
        <Link href="#about" className="text-2xl font-extrabold tracking-wide">
          Sanjay R.
        </Link>
        <ul className="hidden md:flex space-x-8">
          {SECTIONS.map((sec) => (
            <li key={sec.id}>
              <Link
                href={`#${sec.id}`}
                className={
                  "hover:underline transition " +
                  (active === sec.id ? "font-bold underline" : "")
                }
              >
                {sec.label}
              </Link>
            </li>
          ))}
        </ul>
        <MobileMenu />
      </div>
    </nav>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-white focus:outline-none"
      >
        {open ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      {open && (
        <ul className="absolute right-0 top-12 bg-gray-800 text-white shadow-lg rounded-lg w-48">
          {SECTIONS.map((sec) => (
            <li key={sec.id} className="border-b border-gray-700 last:border-none">
              <Link
                href={`#${sec.id}`}
                onClick={() => setOpen(false)}
                className="block px-4 py-2 hover:bg-gray-700"
              >
                {sec.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

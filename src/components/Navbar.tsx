"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const SECTIONS = [
  { id: "about",     label: "About"     },
  { id: "experience",label: "Experience"},
  { id: "projects",  label: "Projects"  },
  { id: "skills",    label: "Skills"    },
  { id: "education", label: "Education" },
  { id: "contact",   label: "Contact"   },
  { id: "chat",      label: "Chat"      },
];

export default function Navbar() {
  const [active, setActive] = useState<string>("about");

  // on scroll, update the “active” section
  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight/3;
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
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm shadow z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between py-3 px-6">
        <Link href="#about" className="text-xl font-bold">
          Sanjay R.
        </Link>
        <ul className="hidden md:flex space-x-6">
          {SECTIONS.map((sec) => (
            <li key={sec.id}>
              <Link
                href={`#${sec.id}`}
                className={
                  "text-gray-600 hover:text-gray-900 transition " +
                  (active === sec.id ? "font-semibold text-gray-900" : "")
                }
              >
                {sec.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile menu button */}
        <MobileMenu />
      </div>
    </nav>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button onClick={() => setOpen(!open)} className="p-2">
        ☰
      </button>
      {open && (
        <ul className="absolute right-6 top-16 bg-white shadow-lg rounded-lg w-40">
          {SECTIONS.map((sec) => (
            <li key={sec.id} className="border-b last:border-none">
              <Link
                href={`#${sec.id}`}
                onClick={() => setOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
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

"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Experience", href: "#experience" },
  { title: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 z-50 w-full"
    >
      <div
        className={`mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl px-8 py-5 transition-all duration-300 ${
          scrolled
            ? "border border-white/10 bg-black/60 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <a
          href="#"
          className="text-xl font-bold tracking-[0.35em] text-white"
        >
          DAMLA
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="relative text-sm text-zinc-400 transition hover:text-white"
            >
              {item.title}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="mx-4 mt-3 rounded-2xl border border-white/10 bg-black/90 p-6 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-zinc-300 transition hover:text-purple-400"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.header>
  );
}
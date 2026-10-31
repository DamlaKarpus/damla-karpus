"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: Props) {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={`rounded-2xl px-7 py-4 font-medium transition

      ${
        variant === "primary"
          ? "bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-500 text-white shadow-lg shadow-violet-700/30"
          : "glass border border-white/10"
      }`}
    >
      {children}
    </motion.button>
  );
}
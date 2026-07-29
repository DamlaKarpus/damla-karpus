"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "3+",
    title: "Internships",
  },
  {
    value: "8+",
    title: "Projects",
  },
  {
    value: "10+",
    title: "Technologies",
  },
  {
    value: "2026",
    title: "Graduate",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-20 lg:grid-cols-2">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
        >
          <p className="mb-3 uppercase tracking-[0.4em] text-purple-400">
            About Me
          </p>

          <h2 className="mb-8 text-5xl font-bold leading-tight">
            Building software that combines
            performance, usability and modern design.
          </h2>

          <p className="text-lg leading-8 text-zinc-400">
            I recently graduated with a Bachelor's degree in Computer Engineering.
            Throughout my internships and personal projects, I have developed
            backend systems, Android applications and AI-powered solutions.
          </p>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            My primary focus is building scalable software using Java, Spring Boot,
            Kotlin, PostgreSQL and modern web technologies while continuously
            improving my skills in Artificial Intelligence and cloud-based
            development.
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="grid grid-cols-2 gap-6"
        >
          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,.2)]"
            >
              <h3 className="text-5xl font-bold text-purple-400">
                {item.value}
              </h3>

              <p className="mt-4 text-lg text-zinc-300">
                {item.title}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
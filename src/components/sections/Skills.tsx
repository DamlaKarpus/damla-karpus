"use client";

import { motion } from "framer-motion";

const skills = [
  "Java",
  "Spring Boot",
  "React",
  "Next.js",
  "TypeScript",
  "Kotlin",
  "SwiftUI",
  "PostgreSQL",
  "Docker",
  "Git",
  "REST API",
  "Python",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section"
    >
      <motion.div
        initial={{ opacity:0, y:50 }}
        whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }}
      >
        <p className="text-purple-400 uppercase tracking-[0.35em]">
          Skills
        </p>

        <h2 className="mt-3 text-5xl font-bold">
          Technologies I Use
        </h2>

        <div className="mt-16 flex flex-wrap gap-4">

          {skills.map((skill)=>(
            <div
              key={skill}
              className="glass rounded-full px-6 py-4 transition hover:border-purple-500 hover:scale-105"
            >
              {skill}
            </div>
          ))}

        </div>
      </motion.div>
    </section>
  );
}
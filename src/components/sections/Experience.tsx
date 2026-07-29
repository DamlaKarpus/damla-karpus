"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "VakıfBank",
    role: "Backend Developer Intern",
    period: "Jul 2025 – Aug 2025",
    tech: "Java • Spring Boot • PostgreSQL • REST API • JWT",
    description:
      "Developed secure banking services using Spring Boot, JPA/Hibernate and PostgreSQL. Built REST APIs and implemented authentication with Spring Security and JWT.",
  },
  {
    company: "VakıfBank",
    role: "Android Developer Intern",
    period: "Aug 2025 – Sep 2025",
    tech: "Kotlin • MVVM • Retrofit • Hilt",
    description:
      "Developed Android banking features using MVVM architecture and integrated backend services through Retrofit and OkHttp.",
  },
  {
    company: "Ticimax",
    role: "Software Developer Intern",
    period: "Jul 2024 – Aug 2024",
    tech: ".NET • ASP.NET MVC • EF Core • SQL Server",
    description:
      "Worked on e-commerce software, database operations and backend development using ASP.NET MVC and Entity Framework Core.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section py-32"
    >
      <div className="mx-auto max-w-6xl">

        <p className="mb-3 uppercase tracking-[0.4em] text-purple-400">
          Experience
        </p>

        <h2 className="mb-20 text-5xl font-bold">
          Professional Journey
        </h2>

        <div className="relative border-l border-white/10 pl-10">

          {experiences.map((item, index) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
              className="relative mb-12"
            >
              <div className="absolute -left-[49px] top-5 h-5 w-5 rounded-full bg-purple-500 shadow-[0_0_30px_#9333ea]" />

              <div className="glass rounded-3xl border border-white/10 p-8 transition duration-300 hover:-translate-y-2 hover:border-purple-500/40">

                <div className="flex flex-wrap items-center justify-between gap-3">

                  <h3 className="text-2xl font-bold">
                    {item.company}
                  </h3>

                  <span className="text-sm text-zinc-500">
                    {item.period}
                  </span>

                </div>

                <p className="mt-2 text-lg font-medium text-purple-400">
                  {item.role}
                </p>

                <p className="mt-4 text-zinc-400">
                  {item.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">

                  {item.tech.split(" • ").map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
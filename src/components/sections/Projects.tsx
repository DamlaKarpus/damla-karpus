"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050816] py-28 px-6 lg:px-12"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* ================= TITLE ================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mb-20 text-center"
        >
          <p className="uppercase tracking-[.35em] text-cyan-400 text-sm font-semibold">
            Portfolio
          </p>

          <h2 className="mt-5 text-5xl lg:text-6xl font-bold text-white">
            Featured Projects
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-slate-400 leading-8 text-lg">
            A collection of projects showcasing my experience in backend
            development, Android development, AI-powered systems and modern
            software architecture.
          </p>
        </motion.div>

        {/* ================= ROUTELLA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          whileHover={{ y: -6 }}
          className="overflow-hidden rounded-[36px]
          border border-slate-800
          bg-gradient-to-br
          from-slate-900
          via-slate-950
          to-[#050816]"
        >
          <div className="grid lg:grid-cols-2">

            {/* LEFT */}

            <div className="flex flex-col justify-center p-12 lg:p-16">

              <div className="inline-flex items-center gap-2 text-cyan-400 font-semibold tracking-wide">
                <Sparkles size={18}/>
                FEATURED PROJECT
              </div>

              <h3 className="mt-6 text-5xl lg:text-6xl font-bold text-white">
                Routella
              </h3>

              <p className="mt-4 text-2xl text-cyan-400">
                AI-Powered Travel Assistant
              </p>

              <p className="mt-8 text-lg leading-8 text-slate-300">
                Graduation project developed by a team of three.
                I contributed primarily to the backend and Android
                development, while also implementing route optimization
                and GPS navigation features.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">

                {[
                  "Kotlin",
                  "Spring Boot",
                  "PostgreSQL",
                  "REST API",
                  "Android",
                  "MVVM",
                  "Route Optimization",
                  "GPS Navigation",
                ].map((item)=>(
                  <span
                    key={item}
                    className="rounded-full
                    border border-cyan-500/20
                    bg-cyan-500/10
                    px-4 py-2
                    text-sm
                    text-cyan-300"
                  >
                    {item}
                  </span>
                ))}

              </div>

              <button
                className="group mt-12 inline-flex w-fit items-center
                gap-3 rounded-full bg-cyan-500 px-7 py-4
                font-semibold text-black transition hover:bg-cyan-400"
              >
                View Case Study

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </button>
            </div>

            {/* RIGHT */}

            <div
              className="relative flex min-h-[650px]
              items-center justify-center
              bg-gradient-to-br
              from-cyan-500/10
              via-blue-500/5
              to-transparent"
            >

              <div className="absolute h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[120px]" />

              {/* LEFT PHONE */}

              <motion.div
                whileHover={{
                  rotate:-8,
                  y:-12
                }}
                className="absolute left-10 top-24
                h-[470px]
                w-[220px]
                overflow-hidden
                rounded-[36px]
                border border-white/10
                bg-slate-900
                shadow-2xl"
              >

                <Image
                  src="/projects/routella/home.png"
                  alt="Home"
                  fill
                  className="object-cover"
                />

              </motion.div>

              {/* CENTER PHONE */}

              <motion.div
                whileHover={{
                  scale:1.04,
                  y:-15
                }}
                className="relative z-10
                h-[560px]
                w-[260px]
                overflow-hidden
                rounded-[40px]
                border border-cyan-400/20
                bg-slate-900
                shadow-[0_0_60px_rgba(34,211,238,.25)]"
              >

                <Image
                  src="/projects/routella/navigation.png"
                  alt="Navigation"
                  fill
                  className="object-cover"
                />

              </motion.div>

              {/* RIGHT PHONE */}

              <motion.div
                whileHover={{
                  rotate:8,
                  y:-12
                }}
                className="absolute right-10 bottom-20
                h-[470px]
                w-[220px]
                overflow-hidden
                rounded-[36px]
                border border-white/10
                bg-slate-900
                shadow-2xl"
              >

                <Image
                  src="/projects/routella/ai-route.png"
                  alt="AI Route"
                  fill
                  className="object-cover"
                />

              </motion.div>

            </div>

          </div>
        </motion.div>

                {/* ================= BANK APP ================= */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          whileHover={{ y: -5 }}
          className="mt-10 overflow-hidden rounded-[32px]
          border border-slate-800
          bg-slate-900/60 backdrop-blur-xl"
        >
          <div className="grid lg:grid-cols-2">

            {/* LEFT */}

            <div className="p-12 lg:p-14 flex flex-col justify-center">

              <span className="text-cyan-400 uppercase tracking-[.3em] text-sm font-semibold">
                Mobile Application
              </span>

              <h3 className="mt-5 text-4xl font-bold text-white">
                BankApp
              </h3>

              <p className="mt-4 text-slate-300 leading-8">
                A modern Android banking application built with Kotlin and
                MVVM architecture, focusing on secure authentication,
                account management and intuitive user experience.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">

                {[
                  "Kotlin",
                  "MVVM",
                  "Firebase",
                  "Retrofit",
                  "Material Design"
                ].map((item)=>(
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full
                    bg-cyan-500/10
                    border border-cyan-500/20
                    text-cyan-300 text-sm"
                  >
                    {item}
                  </span>
                ))}

              </div>

              <button
                className="group mt-10 inline-flex w-fit items-center
                gap-3 rounded-full border border-cyan-400/30
                px-6 py-3 text-cyan-300 transition
                hover:bg-cyan-500/10"
              >
                View Details

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </button>

            </div>

            {/* RIGHT */}

            <div className="relative min-h-[520px] flex items-center justify-center">

              <div className="absolute h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]" />

              <motion.div
                whileHover={{ y: -10, rotate: -7 }}
                className="absolute left-10
                w-[180px] h-[380px]
                rounded-[32px]
                overflow-hidden
                border border-white/10"
              >
                <Image
                  src="/projects/bankapp/login.png"
                  alt="Login"
                  fill
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                whileHover={{ y: -15 }}
                className="relative z-10
                w-[210px] h-[430px]
                rounded-[34px]
                overflow-hidden
                border border-cyan-400/20"
              >
                <Image
                  src="/projects/bankapp/dashboard.png"
                  alt="Dashboard"
                  fill
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                whileHover={{ y: -10, rotate: 7 }}
                className="absolute right-10
                w-[180px] h-[380px]
                rounded-[32px]
                overflow-hidden
                border border-white/10"
              >
                <Image
                  src="/projects/bankapp/transfer.png"
                  alt="Transfer"
                  fill
                  className="object-cover"
                />
              </motion.div>

            </div>

          </div>
        </motion.div>

        {/* ================= SMALL PROJECTS ================= */}

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          {[
            {
              icon:"🐇",
              title:"RabbitMQ Score Tracker",
              tech:"Spring Boot • RabbitMQ",
              desc:"Real-time score tracking platform using asynchronous messaging architecture."
            },
            {
              icon:"🍎",
              title:"Rotten Fruit Detection",
              tech:"Python • OpenCV",
              desc:"Computer vision project for detecting rotten fruits using image processing techniques."
            },
            {
              icon:"🚌",
              title:"Bus Rental Management",
              tech:".NET • SQL Server",
              desc:"Management system with CRUD operations, authentication and database integration."
            }

          ].map((project)=>(

            <motion.div
              key={project.title}
              whileHover={{
                y:-8,
                scale:1.02
              }}
              transition={{duration:.25}}
              className="rounded-3xl
              border border-slate-800
              bg-slate-900/60
              p-8
              backdrop-blur-xl"
            >

              <div
                className="h-20 w-20
                rounded-2xl
                bg-cyan-500/10
                flex items-center justify-center
                text-4xl"
              >
                {project.icon}
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-4 text-slate-400 leading-7">
                {project.desc}
              </p>

              <p className="mt-6 text-cyan-400 text-sm">
                {project.tech}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );

}
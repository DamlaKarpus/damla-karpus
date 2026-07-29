"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Mail,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#050505]">

      {/* GRID */}
      <div
        className="
        absolute inset-0
        opacity-[0.06]
        [background-size:42px_42px]
        [background-image:
        linear-gradient(to_right,#ffffff10_1px,transparent_1px),
        linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]
      "
      />

      {/* GLOW */}
      <div className="absolute -left-40 top-0 h-[700px] w-[700px] rounded-full bg-purple-700/20 blur-[180px]" />

      <div className="absolute -right-40 bottom-0 h-[700px] w-[700px] rounded-full bg-fuchsia-700/20 blur-[180px]" />


      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-20 px-8 pt-28 lg:grid-cols-2">


        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="mb-5 uppercase tracking-[0.45em] text-purple-400">
            SOFTWARE ENGINEER
          </p>


          <h1 className="text-7xl font-black leading-none md:text-[8rem]">

            DAMLA

            <br />

            <span className="gradient-text">
              KARPUS
            </span>

          </h1>


          <p className="mt-10 max-w-xl text-xl leading-10 text-zinc-400">

            Building scalable backend systems, AI-powered applications,
            Android solutions and modern web experiences with Java,
            Spring Boot, React and Next.js.

          </p>


          <div className="mt-12 flex flex-wrap gap-5">

            <button className="rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-8 py-4 font-semibold transition hover:scale-105">

              Explore Projects

            </button>


            <button className="glass rounded-xl px-8 py-4 transition hover:scale-105">

              Download CV

            </button>

          </div>


          <div className="mt-16 flex gap-5">


            <div className="glass rounded-full p-4 transition hover:scale-110">

             <FaGithub size={20}/>

            </div>


            <div className="glass rounded-full p-4 transition hover:scale-110">

             <FaLinkedin size={20}/>

            </div>


            <div className="glass rounded-full p-4 transition hover:scale-110">

              <Mail size={20}/>

            </div>


          </div>


          <div className="mt-24 flex items-center gap-4">

            <ArrowDown className="animate-bounce text-purple-500"/>

            <p className="tracking-[0.35em] text-xs text-zinc-500">

              SCROLL TO EXPLORE

            </p>

          </div>


        </motion.div>



        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex items-center justify-center"
        >

          <div className="glass relative h-[520px] w-full max-w-[520px] overflow-hidden rounded-[40px] border border-white/10">


            <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[120px]" />


            <div className="absolute left-8 right-8 top-8 rounded-3xl border border-white/10 bg-[#0d0d0d]/90">


              <div className="flex items-center gap-2 border-b border-white/10 p-4">

                <div className="h-3 w-3 rounded-full bg-red-500"/>
                <div className="h-3 w-3 rounded-full bg-yellow-500"/>
                <div className="h-3 w-3 rounded-full bg-green-500"/>

                <span className="ml-4 text-xs text-zinc-500">
                  portfolio.ts
                </span>

              </div>



              <div className="space-y-2 p-6 font-mono text-sm">


                <p>
                  <span className="text-purple-400">
                    const
                  </span>{" "}
                  developer = {"{"}
                </p>


                <p className="pl-5">
                  name:
                  <span className="text-green-400">
                    "Damla Karpus"
                  </span>,
                </p>


                <p className="pl-5">
                  role:
                  <span className="text-green-400">
                    "Software Engineer"
                  </span>,
                </p>


                <p className="pl-5">
                  backend:
                  <span className="text-green-400">
                    "Java Spring Boot"
                  </span>,
                </p>


                <p className="pl-5">
                  frontend:
                  <span className="text-green-400">
                    "React / Next.js"
                  </span>,
                </p>


                <p className="pl-5">
                  mobile:
                  <span className="text-green-400">
                    "Android Kotlin"
                  </span>,
                </p>


                <p className="pl-5">
                  database:
                  <span className="text-green-400">
                    "PostgreSQL"
                  </span>,
                </p>


                <p>
                  {"}"}
                </p>


              </div>

            </div>



            <FloatingCard
              title="Backend"
              value="Java Spring Boot"
              position="left-0 top-40"
              delay={5}
              move={-15}
            />


            <FloatingCard
              title="Frontend"
              value="React + Next.js"
              position="right-0 top-56"
              delay={6}
              move={18}
            />


            <FloatingCard
              title="Mobile"
              value="Android Kotlin"
              position="bottom-24 left-6"
              delay={4}
              move={-20}
            />


            <FloatingCard
              title="Database"
              value="PostgreSQL"
              position="bottom-10 right-8"
              delay={5}
              move={15}
            />


          </div>


        </motion.div>


      </div>


    </section>
  );
}



function FloatingCard({
  title,
  value,
  position,
  delay,
  move,
}: {
  title:string;
  value:string;
  position:string;
  delay:number;
  move:number;
}) {

  return (

    <motion.div
      animate={{
        y:[0,move,0]
      }}
      transition={{
        duration:delay,
        repeat:Infinity
      }}
      className={`glass absolute ${position} rounded-3xl border border-white/10 px-6 py-4`}
    >

      <p className="text-xs text-zinc-500">
        {title}
      </p>

      <h3 className="mt-2 text-lg font-bold">
        {value}
      </h3>

    </motion.div>

  );
}
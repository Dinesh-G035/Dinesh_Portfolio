import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaLaptopCode,
  FaRocket,
  FaCogs,
  FaUserFriends,
} from "react-icons/fa";

import {
  SiLeetcode,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

import { FaJava } from "react-icons/fa6";

import profileImage from "../assets/611223104035_Dinesh_G_CSE.png";
import resumePdf from "../assets/Dinesh_G_Resume.pdf";

const TechIcon = ({ Icon, color, position, delay }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -7, 0],
      }}
      transition={{
        opacity: {
          delay: 0.8 + delay,
          duration: 0.4,
        },
        scale: {
          delay: 0.8 + delay,
          duration: 0.5,
          type: "spring",
        },
        y: {
          delay: 1 + delay,
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{
        scale: 1.15,
      }}
      className={`
        absolute
        ${position}
        z-40
        flex
        h-[62px]
        w-[62px]
        items-center
        justify-center
        rounded-2xl
        border
        border-white/10
        bg-[#151B29]/95
        shadow-[0_10px_35px_rgba(0,0,0,.45)]
        backdrop-blur-xl
        sm:h-[70px]
        sm:w-[70px]
      `}
      style={{ color }}
    >
      <Icon className="text-2xl sm:text-3xl" />
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#0B1120] font-['Poppins'] text-white"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-orange-500/[0.06] blur-[150px]" />

        <div className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-orange-500/[0.06] blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* ================= HERO CONTAINER ================= */}

      <div className="relative z-10 mx-auto grid min-h-screen max-w-[1400px] grid-cols-1 items-center gap-10 px-6 py-24 sm:px-10 md:grid-cols-2 md:gap-4 md:px-12 lg:px-16">
        {/* ==================================================
            LEFT SIDE
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="z-20 order-2 md:order-1"
        >
          {/* Greeting */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center rounded-full border border-orange-500/40 bg-white/[0.025] px-5 py-2.5 text-sm text-orange-400 backdrop-blur-xl"
          >
            👋 <span className="ml-2">Hi, I'm Dinesh G.</span>
          </motion.div>

          {/* Main Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mb-6 text-[48px] font-extrabold leading-[0.98] tracking-tight sm:text-[60px] md:text-[64px] lg:text-[78px]"
          >
            <span className="block text-white">Full Stack</span>

            <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-300 bg-clip-text text-transparent">
              Developer
            </span>
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mb-4 max-w-[570px] text-base leading-7 text-slate-300 sm:text-lg"
          >
            I build exceptional and responsive web applications that provide
            seamless user experiences.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-8 max-w-[570px] text-sm leading-6 text-slate-400 sm:text-base"
          >
            Passionate about clean code, problem solving and turning ideas into
            real-world solutions using Java, React, Node.js and modern database
            technologies.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mb-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group flex items-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 px-7 py-3.5 font-semibold text-black shadow-[0_10px_35px_rgba(249,115,22,.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(249,115,22,.4)]"
            >
              View My Work
              <span className="text-xl transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#contact"
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-7 py-3.5 font-semibold text-slate-200 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:text-orange-400"
            >
              Contact Me
              <FaEnvelope />
            </a>
          </motion.div>

          {/* Social Icons */}

          <div className="mb-8 flex gap-3">
            {[
              {
                Icon: FaGithub,
                href: "https://github.com/Dinesh-G035",
              },
              {
                Icon: FaLinkedin,
                href: "https://linkedin.com/in/dineshg09",
              },
              {
                Icon: FaEnvelope,
                href: "mailto:dineshcse3778@gmail.com",
              },
              {
                Icon: SiLeetcode,
                href: "https://leetcode.com/Dinesh_G05",
              },
            ].map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5 }}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-slate-400 transition hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-orange-400"
              >
                <Icon />
              </motion.a>
            ))}
          </div>

          {/* ================= STATS ================= */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="max-w-[650px] rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 backdrop-blur-xl"
          >
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <Stat Icon={FaLaptopCode} number="20+" label="Projects" />

              <Stat Icon={FaRocket} number="2+" label="Years Exp." />

              <Stat Icon={FaCogs} number="10+" label="Technologies" />

              <Stat Icon={FaUserFriends} number="5+" label="Happy Clients" />
            </div>
          </motion.div>
        </motion.div>

        {/* ==================================================
    RIGHT SIDE - PROFILE
================================================== */}

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="order-1 flex items-center justify-center md:order-2"
        >
          <div className="relative h-[560px] w-[560px] sm:h-[620px] sm:w-[620px]">
            {/* ================= OUTER DOTTED ORBIT ================= */}

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
        absolute
        left-1/2
        top-1/2
        h-[500px]
        w-[500px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        border
        border-dashed
        border-orange-500/35
        sm:h-[550px]
        sm:w-[550px]
      "
            />

            {/* ================= ORBIT DOTS ================= */}

            <span className="absolute left-[8%] top-[35%] z-20 h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_15px_#F97316]" />

            <span className="absolute right-[8%] top-[35%] z-20 h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_15px_#F97316]" />

            <span className="absolute left-[25%] top-[7%] z-20 h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_15px_#F97316]" />

            <span className="absolute right-[25%] top-[7%] z-20 h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_15px_#F97316]" />

            <span className="absolute bottom-[10%] left-[27%] z-20 h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_15px_#F97316]" />

            <span className="absolute bottom-[10%] right-[27%] z-20 h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_15px_#F97316]" />

            {/* ================= ORANGE GLOW ================= */}

            <div
              className="
        absolute
        left-1/2
        top-1/2
        h-[430px]
        w-[430px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-orange-500/10
        blur-[70px]
      "
            />

            {/* ================= OUTER ORANGE RING ================= */}

            <div
              className="
        absolute
        left-1/2
        top-1/2
        h-[430px]
        w-[430px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        border
        border-orange-500/70
        shadow-[0_0_40px_rgba(249,115,22,.18)]
        sm:h-[460px]
        sm:w-[460px]
      "
            />

            {/* ================= INNER ORANGE RING ================= */}

            <div
              className="
        absolute
        left-1/2
        top-1/2
        h-[410px]
        w-[410px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        border-2
        border-orange-500/80
        sm:h-[440px]
        sm:w-[440px]
      "
            />

            {/* ================= PROFILE IMAGE ================= */}

            <div
              className="
        absolute
        left-1/2
        top-1/2
        z-10
        h-[390px]
        w-[390px]
        -translate-x-1/2
        -translate-y-1/2
        overflow-hidden
        rounded-full
        border-4
        border-orange-500/70
        bg-[#ffffff]
        shadow-[0_0_70px_rgba(249,115,22,.25)]
        sm:h-[400px]
        sm:w-[400px]
      "
            >
              <img
                src={profileImage}
                alt="Dinesh G"
                className="h-full w-full absolute right-2"
              />

              {/* Soft image glow */}
              <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-orange-500/10 via-transparent to-transparent" />
            </div>

            {/* ==================================================
        TOP LEFT - REACT
    ================================================== */}

            <TechIcon
              Icon={SiReact}
              color="#61DAFB"
              position="left-[7%] top-[8%]"
              delay={0}
            />

            {/* ==================================================
        TOP RIGHT - JAVA
    ================================================== */}

            <TechIcon
              Icon={FaJava}
              color="#FF9800"
              position="right-[7%] top-[8%]"
              delay={0.2}
            />

            {/* ==================================================
        LEFT - JAVA / CODE
    ================================================== */}

            <TechIcon
              Icon={FaLaptopCode}
              color="#FF7300"
              position="left-[0%] top-[38%]"
              delay={0.4}
            />

            {/* ==================================================
        RIGHT - NODE
    ================================================== */}

            <TechIcon
              Icon={SiNodedotjs}
              color="#55C646"
              position="right-[0%] top-[38%]"
              delay={0.6}
            />

            {/* ==================================================
        BOTTOM LEFT - MONGODB
    ================================================== */}

            <TechIcon
              Icon={SiMongodb}
              color="#47A248"
              position="left-[12%] bottom-[10%]"
              delay={0.8}
            />

            {/* ==================================================
        BOTTOM RIGHT - POSTGRESQL
    ================================================== */}

            <TechIcon
              Icon={SiPostgresql}
              color="#4D91D9"
              position="right-[12%] bottom-[10%]"
              delay={1}
            />

            {/* ================= DEVELOPER BADGE ================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.5,
                duration: 0.6,
              }}
              className="
        absolute
        bottom-[-5px]
        left-1/2
        z-50
        -translate-x-1/2
        whitespace-nowrap
        rounded-full
        border
        border-orange-500
        bg-[#080D18]
        px-8
        py-3
        text-sm
        font-semibold
        text-orange-400
        shadow-[0_0_35px_rgba(249,115,22,.25)]
        backdrop-blur-xl
        sm:px-10
        sm:py-4
        sm:text-base
      "
            >
              🚀 Full Stack Developer
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* =========================================================
   STAT COMPONENT
========================================================= */

const Stat = ({ Icon, number, label }) => {
  return (
    <div className="group rounded-xl p-3 transition duration-300 hover:bg-orange-500/[0.04]">
      <Icon className="mb-2 text-xl text-orange-500" />

      <div className="text-xl font-bold text-white">{number}</div>

      <div className="text-xs text-slate-500">{label}</div>
    </div>
  );
};

export default Hero;

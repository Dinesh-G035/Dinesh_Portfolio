import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import { SiLeetcode, SiReact, SiNodedotjs, SiMongodb, SiPostgresql, SiGit, SiTailwindcss, SiFramer } from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';

/* ── Floating tech icons ─────────────────────────────────────── */
const floatingIcons = [
  { Icon: SiReact, color: '#61DAFB', x: -60, y: -80, delay: 0 },
  { Icon: FaJava, color: '#ED8B00', x: 80, y: -60, delay: 0.5 },
  { Icon: SiNodedotjs, color: '#339933', x: 100, y: 40, delay: 1 },
  { Icon: SiMongodb, color: '#47A248', x: -90, y: 60, delay: 1.5 },
  { Icon: SiPostgresql, color: '#4169E1', x: 60, y: 100, delay: 0.8 },
  { Icon: SiGit, color: '#F05032', x: -100, y: 0, delay: 1.2 },
  { Icon: SiTailwindcss, color: '#06B6D4', x: -50, y: 100, delay: 0.3 },
  { Icon: SiFramer, color: '#FF0055', x: 110, y: -20, delay: 1.8 },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0B1120] font-['Poppins']"
    >
      {/* ── Subtle background gradient blobs ── */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-[#F97316]/5 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-[#F97316]/5 blur-[120px]" />

      <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-0">
        {/* ═══════════════ LEFT COLUMN ═══════════════ */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="order-2 text-center md:order-1 md:text-left"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-2 text-lg text-[#CBD5E1]"
          >
            Hello <span className="inline-block animate-[wave_2s_ease-in-out_infinite] origin-[70%_70%]">👋</span>
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
          >
            I'm{' '}
            <span className="gradient-text">Dinesh G</span>
          </motion.h1>

          {/* Typing animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mb-6 text-xl font-medium text-[#F97316] md:text-2xl"
          >
            {(() => {
              const TypeAnimComp = typeof TypeAnimation === 'function' ? TypeAnimation : (TypeAnimation?.default || TypeAnimation);
              return (
                <TypeAnimComp
                  sequence={[
                    'Full Stack Developer', 2000,
                    'Java Developer', 2000,
                    'UI/UX Designer', 2000,
                  ]}
                  wrapper="span"
                  repeat={Infinity}
                  cursor
                />
              );
            })()}
          </motion.div>

          {/* Bio paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mb-6 text-[#CBD5E1] text-justify leading-relaxed mx-auto md:mx-0"
          >
            A passionate Computer Science Engineering student dedicated to building scalable,
            high-performance web applications. Proficient in Java, React, Node.js, and modern
            database systems. I thrive on solving real-world problems through elegant code and
            continuously evolving with the latest technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mb-8 flex flex-wrap items-center justify-center gap-4 md:justify-start"
          >
            <a href="#contact" className="btn-primary">
              Hire Me
            </a>
            <a href="#" className="btn-secondary">
              <FaDownload className="text-sm" /> Download Resume
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="flex items-center justify-center gap-4 md:justify-start"
          >
            {[
              { Icon: FaGithub, href: 'https://github.com/Dinesh-G035', label: 'GitHub' },
              { Icon: FaLinkedin, href: 'https://linkedin.com/in/dineshg09', label: 'LinkedIn' },
              { Icon: FaEnvelope, href: 'mailto:dineshcse3778@gmail.com', label: 'Email' },
              { Icon: SiLeetcode, href: 'https://leetcode.com/Dinesh_G05', label: 'LeetCode' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(255,255,255,.08)] text-[#94A3B8] transition-all duration-300 hover:border-[#F97316] hover:text-[#F97316] hover:shadow-[0_0_20px_rgba(249,115,22,.25)]"
              >
                <Icon className="text-lg" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* ═══════════════ RIGHT COLUMN ═══════════════ */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          className="order-1 flex items-center justify-center md:order-2"
        >
          <div className="relative">
            {/* Orange glowing ring */}
            <div className="absolute inset-0 m-auto h-[280px] w-[280px] rounded-full md:h-[340px] md:w-[340px] animate-spin-slow border-2 border-dashed border-[#F97316]/30" />

            {/* Gradient blur behind image */}
            <div className="absolute inset-0 m-auto h-[250px] w-[250px] rounded-full md:h-[300px] md:w-[300px] bg-[#F97316]/10 blur-[60px]" />

            {/* Profile image placeholder */}
            <div className="relative z-10 flex h-[240px] w-[240px] items-center justify-center rounded-full border-4 border-[#F97316]/40 bg-[#111827] shadow-[0_0_60px_rgba(249,115,22,.2)] md:h-[290px] md:w-[290px]">
              <span className="text-6xl font-bold gradient-text md:text-7xl select-none">DG</span>
            </div>

            {/* Floating tech icons */}
            {floatingIcons.map(({ Icon, color, x, y, delay }, i) => (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-xl glass-card"
                style={{ color }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x,
                  y,
                }}
                transition={{ delay: 1 + delay, duration: 0.5, type: 'spring' }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: delay }}
                >
                  <Icon className="text-lg" />
                </motion.div>
              </motion.div>
            ))}

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-8 left-2/4 z-20 -translate-x-1/2 whitespace-nowrap rounded-full glass-card px-6 py-2 text-xs font-semibold text-[#F97316] shadow-[0_0_20px_rgba(249,115,22,.15)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.5 }}
            >
              🚀 Full Stack Developer
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

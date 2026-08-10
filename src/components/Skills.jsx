import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/skills';
import {
  FaCode, FaReact, FaServer, FaDatabase, FaTools,
  FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub,
  FaUbuntu, FaFigma, FaPalette,
} from 'react-icons/fa';
import { FaJava } from 'react-icons/fa6';
import {
  SiTailwindcss, SiVite, SiReactrouter, SiFramer,
  SiExpress, SiJsonwebtokens, SiMongodb, SiMysql,
  SiPostgresql, SiSqlite, SiPostman,
} from 'react-icons/si';

/* ── Explicit, stable icon mapping ── */
const iconMap = {
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaReact,
  SiTailwindcss,
  SiVite,
  SiReactrouter,
  SiFramer,
  FaNodeJs,
  SiExpress,
  FaServer,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  FaGitAlt,
  FaGithub,
  FaCode,
  SiPostman,
  FaUbuntu,
  FaFigma,
  FaPalette,
  FaTools,
};

const categoryIcons = {
  Languages: FaCode,
  Frontend: FaReact,
  Backend: FaServer,
  Database: FaDatabase,
  Tools: FaTools,
};

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-20 bg-[#0B1120] font-['Poppins']">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* ── Section heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="inline-block relative text-3xl md:text-4xl font-bold text-white mb-4">
            Tech Stack
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#F97316] to-transparent rounded-full" />
          </h2>
          <p className="text-[#CBD5E1] text-lg">Technologies I work with</p>
        </motion.div>

        {/* ── Skill categories ── */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, catIdx) => {
            const CatIcon = categoryIcons[category.category] || FaCode;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIdx * 0.15 }}
                className="glass-card glass-card-hover rounded-2xl p-6"
              >
                {/* Category header */}
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F97316]/10 text-[#F97316]">
                    <CatIcon className="text-xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category.category}</h3>
                </div>

                {/* Skill items */}
                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill) => {
                    const SkillIcon = iconMap[skill.icon] || FaCode;
                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.08, y: -4 }}
                        className="flex items-center gap-2 rounded-lg bg-[#0B1120] px-3 py-2 text-sm text-[#CBD5E1] border border-[rgba(255,255,255,.06)] transition-colors hover:border-[rgba(249,115,22,.3)]"
                      >
                        <SkillIcon style={{ color: skill.color }} className="text-base" />
                        <span>{skill.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

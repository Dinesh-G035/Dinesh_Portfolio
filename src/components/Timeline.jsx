import React from 'react';
import { motion } from 'framer-motion';
import { timelineData } from '../data/timeline';
import { FaGraduationCap, FaBriefcase, FaTrophy, FaCode } from 'react-icons/fa';

/* ── Icon map for timeline event types ── */
const typeIcons = {
  education: FaGraduationCap,
  work: FaBriefcase,
  achievement: FaTrophy,
  project: FaCode,
};

const typeColors = {
  education: '#3B82F6',
  work: '#10B981',
  achievement: '#F59E0B',
  project: '#F97316',
};

const Timeline = () => {
  return (
    <section id="experience" className="py-20 bg-[#0B1120] font-['Poppins']">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* ── Section heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="inline-block relative text-3xl md:text-4xl font-bold text-white mb-4">
            Experience & Achievements
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#F97316] to-transparent rounded-full" />
          </h2>
          <p className="text-[#CBD5E1] text-lg">My journey so far</p>
        </motion.div>

        {/* ── Vertical timeline ── */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#F97316]/50 via-[rgba(255,255,255,.08)] to-transparent md:-translate-x-px" />

          {timelineData.map((item, i) => {
            const Icon = typeIcons[item.type] || FaCode;
            const color = typeColors[item.type] || '#F97316';
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative mb-10 flex items-start gap-6 md:gap-0 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Icon dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-[#0B1120]"
                  style={{ borderColor: color }}
                >
                  <Icon style={{ color }} className="text-lg" />
                </div>

                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                  <div className="glass-card glass-card-hover rounded-2xl p-4 text-center">
                    
                    <h3 className="mb-1 text-lg font-bold text-white">{item.title}</h3>
                    {item.subtitle && (
                      <p className="mb-2 text-sm font-medium text-[#CBD5E1]">{item.subtitle}</p>
                    )}
                    {item.period && (
                      <span
                        className="mb-2 inline-block rounded-full px-3 py-1 text-xs font-semibold"
                        style={{ backgroundColor: `${color}20`, color }}
                      >
                        {item.period}
                      </span>
                    )}
                    {item.organization && (
                      <p className="mb-2 text-sm text-[#94A3B8]">{item.organization}</p>
                    )}
                    {item.project && (
                      <p className="mb-2 text-sm text-[#94A3B8]">
                        <span className="font-medium text-[#CBD5E1]">Project:</span> {item.project}
                      </p>
                    )}
                    <p className="text-sm leading-relaxed text-[#94A3B8]">{item.description}</p>
                    {item.details?.length > 0 && (
                      <ul className="mt-3 list-disc space-y-1 pl-5 text-left text-sm leading-relaxed text-[#94A3B8]">
                        {item.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;

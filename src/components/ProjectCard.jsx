import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

/**
 * ProjectCard — renders a single project with image placeholder,
 * tech badges, description, and action buttons.
 */
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group glass-card glass-card-hover rounded-2xl overflow-hidden h-full flex flex-col"
    >
      {/* ── Image area ── */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#111827] to-[#0B1120]">
        {/* Placeholder gradient with project number */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="text-5xl font-bold gradient-text opacity-30">0{index + 1}</span>
            <p className="text-xs text-[#94A3B8] mt-1">{project.category || 'Project'}</p>
          </div>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#F97316]/0 group-hover:bg-[#F97316]/5 transition-all duration-500" />
        {/* Orange glow on hover */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-16 w-3/4 bg-[#F97316]/0 group-hover:bg-[#F97316]/10 blur-[30px] transition-all duration-500 rounded-full" />
      </div>

      {/* ── Content ── */}
      <div className="flex flex-1 flex-col p-6">
        {/* Title */}
        <h3 className="mb-2 text-xl font-bold text-white group-hover:text-[#F97316] transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mb-4 flex-1 text-sm text-[#94A3B8] leading-relaxed">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-[#F97316]/10 px-3 py-1 text-xs font-medium text-[#F97316]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg border border-[rgba(255,255,255,.08)] px-4 py-2 text-sm text-[#CBD5E1] transition-all hover:border-[#F97316] hover:text-[#F97316]"
            aria-label={`View ${project.title} on GitHub`}
          >
            <FaGithub /> GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg bg-[#F97316] px-4 py-2 text-sm font-medium text-white transition-all hover:shadow-[0_0_20px_rgba(249,115,22,.4)]"
            aria-label={`${project.liveLabel || 'Live Demo'} for ${project.title}`}
          >
            <FaExternalLinkAlt className="text-xs" /> {project.liveLabel || 'Live Demo'}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

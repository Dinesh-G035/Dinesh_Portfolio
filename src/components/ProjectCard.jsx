import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Modal from './Modal';

const ProjectCard = ({ project, index }) => {
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <>
      {/* Entire card clickable */}
      <motion.div
        whileHover={{ y: -8 }}
        onClick={openModal}
        className="group glass-card glass-card-hover rounded-2xl overflow-hidden h-full flex flex-col cursor-pointer"
      >
        {/* ── Image area ── */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#111827] to-[#0B1120]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <span className="text-5xl font-bold gradient-text opacity-30">
                0{index + 1}
              </span>
              <p className="text-xs text-[#94A3B8] mt-1">
                {project.category || 'Project'}
              </p>
            </div>
          </div>
          <div className="absolute inset-0 bg-[#F97316]/0 group-hover:bg-[#F97316]/5 transition-all duration-500" />
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-16 w-3/4 bg-[#F97316]/0 group-hover:bg-[#F97316]/10 blur-[30px] transition-all duration-500 rounded-full" />
        </div>

        {/* ── Content ── */}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="mb-2 text-xl font-bold text-white group-hover:text-[#F97316] transition-colors duration-300">
            {project.title}
          </h3>

          {project.category && (
            <p className="mb-4 text-sm text-[#94A3B8]">{project.category}</p>
          )}

          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()} // prevent modal when clicking link
              className="flex items-center gap-2 rounded-lg border border-[rgba(255,255,255,.08)] px-4 py-2 text-sm text-[#CBD5E1] transition-all hover:border-[#F97316] hover:text-[#F97316]"
              aria-label={`View ${project.title} on GitHub`}
            >
              <FaGithub /> GitHub
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 rounded-lg bg-[#F97316] px-4 py-2 text-sm font-medium text-white transition-all hover:shadow-[0_0_20px_rgba(249,115,22,.4)]"
              aria-label={`${project.liveLabel || 'Live Demo'} for ${project.title}`}
            >
              <FaExternalLinkAlt className="text-xs" /> {project.liveLabel || 'Live Demo'}
            </a>
          </div>
        </div>
      </motion.div>

      {/* ── Centered Modal ── */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <Modal project={project} onClose={closeModal} />
        </div>
      )}
    </>
  );
};

export default ProjectCard;

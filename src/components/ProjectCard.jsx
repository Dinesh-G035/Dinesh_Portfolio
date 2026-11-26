import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
          <h3 className="mb-2 min-h-[3.5rem] line-clamp-2 text-xl font-bold text-white group-hover:text-[#F97316] transition-colors duration-300">
            {project.title}
          </h3>

          {project.category && (
            <p className="mb-4 min-h-5 text-sm text-[#94A3B8]">{project.category}</p>
          )}

          <p className="mb-5 min-h-[4.5rem] line-clamp-3 text-sm leading-6 text-[#CBD5E1]">
            {project.description}
          </p>
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

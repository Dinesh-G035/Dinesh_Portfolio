import React from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const modalAnim = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.25 } }
};

const Modal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-center justify-center"
      variants={backdrop}
      initial="hidden"
      animate="visible"
    >
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <motion.div
        className="relative z-50 max-h-[90vh] w-[calc(100%-2rem)] max-w-3xl overflow-y-auto rounded-2xl border border-[rgba(255,255,255,.04)] bg-[#0B1220] p-6 shadow-xl sm:p-8"
        variants={modalAnim}
        initial="hidden"
        animate="visible"
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} details`}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            {project.category && (
              <p className="text-sm text-[#94A3B8]">{project.category}</p>
            )}
          </div>
          <button onClick={onClose} className="text-[#CBD5E1] hover:text-white">
            <FaTimes />
          </button>
        </div>

        <div className="mt-4 gap-6 ">
          <div className="md:col-span-2">
            <p className="text-sm text-[#CBD5E1] leading-relaxed">{project.description}</p>

            {(project.role || project.organization || project.duration) && (
              <dl className="mt-5 grid gap-3 sm:grid-cols-2">
                {project.role && (
                  <div>
                    <dt className="text-sm font-semibold text-white">Role</dt>
                    <dd className="text-sm text-[#CBD5E1]">{project.role}</dd>
                  </div>
                )}
                {project.organization && (
                  <div>
                    <dt className="text-sm font-semibold text-white">Organization</dt>
                    <dd className="text-sm text-[#CBD5E1]">{project.organization}</dd>
                  </div>
                )}
                {project.duration && (
                  <div>
                    <dt className="text-sm font-semibold text-white">Duration</dt>
                    <dd className="text-sm text-[#CBD5E1]">{project.duration}</dd>
                  </div>
                )}
              </dl>
            )}

            {project.highlights?.length > 0 && (
              <div className="mt-5">
                <h4 className="text-sm font-semibold text-white">Highlights</h4>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-[#CBD5E1]">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white pt-4">Tech Stack</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tech?.map((t) => (
                <span key={t} className="rounded-full bg-[#F97316]/10 px-3 py-1 text-xs font-medium text-[#F97316]">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-lg border border-[rgba(255,255,255,.06)] px-3 py-2 text-sm text-[#CBD5E1] hover:border-[#F97316]">
                  <FaGithub /> GitHub
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-lg bg-[#F97316] px-3 py-2 text-sm font-medium text-white">
                  <FaExternalLinkAlt /> {project.liveLabel || 'Live'}
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;

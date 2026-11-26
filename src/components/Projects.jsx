import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projectGroups = [
    { id: 'software', title: 'Software Projects', projects: projectsData.filter((project) => project.projectType === 'software') },
    { id: 'hardware', title: 'Hardware Projects', projects: projectsData.filter((project) => project.projectType === 'hardware') }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {  
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="projects" className="py-20 bg-[#0B1120] font-['Poppins']">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white inline-block relative mb-4">
            Projects
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#F97316] to-transparent rounded-full"></span>
          </h2>
          <p className="text-[#CBD5E1] text-lg">
            Projects that showcase my development skills
          </p>
        </div>

        <div className="space-y-14">
          {projectGroups.map((group) => (
            <section key={group.id} aria-labelledby={`${group.id}-projects-heading`}>
              <h3 id={`${group.id}-projects-heading`} className="mb-6 text-2xl font-semibold text-white">
                {group.title}
              </h3>
              <motion.div
                className="grid auto-rows-fr grid-cols-1 gap-8 md:grid-cols-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {group.projects.map((project, index) => (
                  <motion.div key={project.title} variants={itemVariants} className="h-full">
                    <ProjectCard project={project} index={index} />
                  </motion.div>
                ))} 
              </motion.div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

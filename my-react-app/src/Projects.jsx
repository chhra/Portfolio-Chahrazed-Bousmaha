import React, { useState } from "react";
import { motion } from "framer-motion";
import GnovexLogo from "../public/GNOVEX.png";

const projectsData = [
  {
    title: "AI-Powered Applicant Tracking System",
    description:
      "A short description of what this project does and the problem it solves.",
    image: "./public/Resume.jpg",
    tech: ["React", "Tailwind", "Framer Motion"],
    codeUrl: "https://ai-resume-analyzer-zeta-three.vercel.app/",
    codeLabel: "Live Demo",
  },
  {
    title: "Multi-Tenant Finance Platform",
    description:
      "A multi-tenant platform for managing client and company finances end to end: stock movements, contracts, and invoicing, with each company's data fully isolated.",
    image: GnovexLogo,
    tech: ["PHP", "Laravel", "Filament", "Spatie"],
    // Repository is private
    codeUrl: null,
  },
];

function ProjectCard({ project, index }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.2 },
    }),
  };
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl hover:border-white/50 transition-all duration-100"
      variants={cardVariants}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h2 className="text-xl font-bold text-white mb-2">{project.title}</h2>
        <p className="text-gray-200 text-sm mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs bg-pink-200 text-gray-400 px-2 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {project.codeUrl ? (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm border border-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              {project.codeLabel || "Code"}
            </a>
          ) : (
            <span className="text-sm text-gray-400 px-4 py-2">
              Private repository
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function Projects() {
  const containerVariants = {
    hidden: { opacity: 0, x: -100 },

    visible: {
      opacity: 1,
      x: 0,
      color: "#ffffff",
      textShadow: "0px 0px 8px rgb(255, 255, 255)",
      transition: { type: "spring", duration: 2, delay: 1.0 },
    },
  };
  return (
    <>
      <motion.h1
        className=" text-3xl flex justify-center items-center my-6 text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        Projects
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4 sm:px-8 w-full max-w-6xl mx-auto">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </>
  );
}
export default Projects;

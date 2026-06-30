import React, { useState } from "react";
import { motion } from "framer-motion";

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
      <div className="projects-cards"></div>;
    </>
  );
}
export default Projects;

"use client";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "HTML", level: 100, category: "Frontend" },
    { name: "CSS", level: 100, category: "Frontend" },
    { name: "REACT.JS", level: 80, category: "Frontend" },
    { name: "NEXT.JS", level: 60, category: "Frontend" },
    { name: "Python", level: 100, category: "Languages" },
    { name: "C++", level: 100, category: "Languages" },
    { name: "C", level: 80, category: "Languages" },
    { name: "C#", level: 80, category: "Languages" },
    { name: "Python-Flask", level: 80, category: "Backend" },
    { name: "Django", level: 80, category: "Backend" },
    { name: "PHP", level: 60, category: "Backend" },
    { name: "Unity Engine", level: 80, category: "Tools" },
    { name: "AR vuforia", level: 80, category: "Tools" },
    { name: "Git & Github", level: 80, category: "Tools" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredskills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);
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
    <section id="skills">
      {/* Fixed: "font bold" isn't a Tailwind class. Changed to "font-bold" */}
      <motion.h1
        className=" text-3xl flex justify-center items-center my-6 text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        Skills
      </motion.h1>

      {/* Filter Buttons */}
      <div className="flex justify-center items-center gap-2">
        <button
          onClick={() => setSelectedCategory("All")}
          className={`z-50 px-4 py-2 bg-transparent rounded-lg font-semibold transition ${
            selectedCategory === "All" ? "text-white" : "text-gray-400"
          }`}
        >
          All
        </button>

        <button
          onClick={() => setSelectedCategory("Frontend")}
          className={`px-4 py-2 bg-transparent rounded-lg font-semibold transition ${
            selectedCategory === "Frontend" ? "text-white" : "text-gray-400"
          }`}
        >
          Frontend
        </button>
        <button
          onClick={() => setSelectedCategory("Languages")}
          className={`px-4 py-2 bg-transparent rounded-lg font-semibold transition ${
            selectedCategory === "Languages" ? "text-white" : "text-gray-400"
          }`}
        >
          Languages
        </button>
        <button
          onClick={() => setSelectedCategory("Backend")}
          className={`px-4 py-2 bg-transparent rounded-lg font-semibold transition ${
            selectedCategory === "Backend" ? "text-white" : "text-gray-400"
          }`}
        >
          Backend
        </button>
        <button
          onClick={() => setSelectedCategory("Tools")}
          className={`px-4 py-2 bg-transparent rounded-lg font-semibold transition ${
            selectedCategory === "Tools" ? "text-white" : "text-gray-400"
          }`}
        >
          Tools
        </button>
      </div>

      {/* Grid Wrapper Container */}
      {/* FIXED: Changed semicolons to colons in "md:grid-cols-2" and "lg:grid-cols-3" */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[70%] mx-auto mt-10">
        {/* FIXED: Swapped parameter variable "skills" to singular "skill" */}
        {filteredskills.map((skill, key) => (
          <div
            key={key}
            className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-lg shadow-lg"
          >
            {" "}
            {/* Changed background to dark neutral so white text is readable */}
            <h2 className="text-xl font-semibold mb-2 text-white">
              {skill.name}
            </h2>
            {/* Progress Bar Container Background Track */}
            <div className="w-full bg-gray-500 rounded-full h-4 mb-2 overflow-hidden">
              {/* Dynamic Skill Level Progress Fill Layer */}
              {/* FIXED: Wrapped style property string in backticks so template evaluation works */}
              <div
                className="h-full rounded-full bg-pink-200 transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-400">{skill.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

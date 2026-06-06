import React from "react";
import { motion } from "framer-motion";

// Hover animation for logos
const imgVariant = {
  hover: {
    scale: 1.1,
    rotate: 3,
    boxShadow: "5px 5px 5px rgba(248, 248, 248, 0.11)",
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 200,
    },
  },
};

// Entrance animation for content text
const textVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    color: "#ffffff",
    transition: { type: "spring", duration: 2, delay: 1.5 },
    textShadow: "0px 0px 8px rgb(239, 233, 234)",
  },
};

function Experience({ cards, wrapperRef, cardsRef }) {
  return (
    <div ref={wrapperRef} className="stack-wrapper">
      {cards.map((card, index) => (
        <div
          key={card.id}
          ref={(el) => (cardsRef.current[index] = el)}
          className="stack-card"
          style={{ "--card-color": card.color }}
        >
          <div className="card-content experience-layout">
            <div className="profile">
              {card.url ? (
                <a
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block cursor-pointer"
                >
                  <motion.img
                    src={card.photo}
                    alt={`${card.title} logo`}
                    variants={imgVariant}
                    whileHover="hover"
                  />
                </a>
              ) : (
                <motion.img
                  src={card.photo}
                  alt={`${card.title} logo`}
                  variants={imgVariant}
                  whileHover="hover"
                />
              )}
            </div>

            <motion.div
              className="intro"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              <h2 className="card-title">{card.title}</h2>
              <h3 className="card-date">
                {card.startDate || ""} {card.endDate || ""}
              </h3>
              <p className="card-text">{card.text}</p>
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;

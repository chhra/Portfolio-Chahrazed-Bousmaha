import { motion } from "framer-motion";
import React from "react";

function Education(props) {
  const textVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      color: "#ffffff",
      transition: {
        type: "spring",
        duration: 2,
        delay: 1.5,
      },
      textShadow: "0px 0px 8px rgb(239, 233, 234)",
    },
  };

  const imgVariant = {
    hover: {
      scale: 1.1,
      rotate: 3,
      boxShadow: "5px 5px 5px rgba(232, 43, 175, 0.114)",
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      },
    },
  };
  return (
    <>
      <div className="wrapper">
        <div className="profile">
          <motion.img
            variants={imgVariant}
            whileHover="hover"
            src={props.photo}
            alt="UWE picture"
          />
        </div>
        <motion.div
          className="intro"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="card-title">{props.title}</h2>
          <h3 className="card-date">
            {props.start} - {props.end}
          </h3>
          <p className="class-text">{props.text}</p>
        </motion.div>
      </div>
    </>
  );
}

export default Education;

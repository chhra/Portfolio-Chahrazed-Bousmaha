import ProfilePic from "./assets/Chahrazed.jpeg";
import { motion } from "framer-motion";

const containerVariants = {
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
      delay: 1.0,
    },
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
  },
};
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
      delay: 1.0,
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

// the about me component
function AboutMe() {
  return (
    <>
      <motion.h1
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        Chahrazed Bousmaha
      </motion.h1>

      <div className="wrapper">
        <div className="profile">
          <motion.img
            variants={imgVariant}
            whileHover="hover"
            src={ProfilePic}
            alt="profile picture"
          />
        </div>
        <motion.div
          className="intro"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="card-title">
            {" "}
            Computer Science Student - UWE Bristol | AI Intern - GNOVEX | STEM
            Teacher
          </h2>
          <p className="card-text">
            I am a Computer Science student who loves building smart software
            and making data visual and interactive. Currently, I work as an AI
            intern creating predictive data models at GNOVEX, and I teach tech
            and coding skills to kids with ComputerXplorers. I blend software
            engineering with education to make a real-world impact.
          </p>
        </motion.div>
      </div>
    </>
  );
}
export default AboutMe;

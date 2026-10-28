import ProfilePic from "../public/Shahrazed.png";
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
            Computer Science Student - UWE Bristol | Developper Intern - GNOVEX | STEM
            Teacher
          </h2>
          <p className="card-text">
            Second-year Computer Science student at UWE Bristol who loves building
smart software and turning data into something visual, interactive, and
genuinely useful. As a Developer Intern at GNOVEX, I built the Laravel and
MySQL backend for a multi-tenant invoicing platform, including secure
per-company data isolation, role-based access, and automated payment
reminders. Alongside this, I teach coding to primary school pupils with
ComputerXplorers and help lead the UWE Computer Science Society as Vice
President, sparking curiosity in the next generation of problem-solvers.
I'm driven by the goal to blend software engineering with education and
create technology that makes a real-world impact.
          </p>
        </motion.div>
      </div>
    </>
  );
}
export default AboutMe;

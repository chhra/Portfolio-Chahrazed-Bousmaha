import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";

function Header() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "My Portoflio";
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDeleting) {
        setText(fullText.slice(0, text.length + 1));
        if (text.length === fullText.length) setIsDeleting(true);
      } else {
        // deleting
        setText(fullText.slice(0, text.length - 1));
        if (text.length === 0) setIsDeleting(false);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [text, isDeleting]);

  return (
    <motion.header
      initial={{ y: -250 }}
      animate={{ y: -10 }}
      transition={{ duration: 1 }}
    >
      <h1>
        <span>{text}</span>
        <span className="cursor">|</span>
      </h1>

      <nav>
        <ul>
          <motion.li
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(233, 69, 96)",
              color: "#e94560",
            }}
          >
            {" "}
            <a href="#about">About</a>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(233, 69, 96)",
              color: "#e94560",
            }}
          >
            <a href="#Education">Education</a>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.1,

              textShadow: "0px 0px 8px rgb(233, 69, 96)",
              color: "#e94560",
            }}
          >
            <a href="#Experience">Experience</a>
          </motion.li>

          <motion.li
            whileHover={{
              scale: 1.1,

              textShadow: "0px 0px 8px rgb(233, 69, 96)",
              color: "#e94560",
            }}
          >
            <a href="#skills">Skills</a>
          </motion.li>
        </ul>
      </nav>
      <hr></hr>
    </motion.header>
  );
}

export default Header;

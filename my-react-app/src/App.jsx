import React, { useRef, useEffect } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Aboutme from "./AboutMe.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import Skills from "./Skills.jsx";
import FloatingLines from "./FloatingLines";
import Photo1 from "../public/UWE_Bristol.png";
import Photo2 from "../public/Baccalaureate.png";
import Photo3 from "../public/CX.jpg";
import Photo5 from "../public/GNOVEX.png";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Projects from "./Projects.jsx";
gsap.registerPlugin(ScrollTrigger);

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

function App() {
  const wrapperRef = useRef(null);
  const cardsRef = useRef([]);

  const cards = [
    {
      id: 1,
      title: "Intern - GNOVEX",
      startDate: 2026,
      text: "Built a multi-company invoicing platform with Laravel and Filament, covering clients, stock, and the full document flow (quotes, invoices, credit notes, delivery notes) with automatic PDF generation and email delivery. Added role-based access, per-company data isolation, revenue dashboards, and automated payment reminders.",
      photo: Photo5,
      color: "#483253e1",
      url: "https://gnovex.com",
    },
    {
      id: 3,
      title: "STEM Instructor - ComputerXplorers",
      startDate: 2026,
      text: "Delivering interactive STEM sessions in block-based coding, game mechanics, and 3D design using Scratch, Minecraft Education, and TinkerCAD. I turn complex ideas into hands-on challenges that build computational thinking and problem-solving skills.",
      photo: Photo3,
      color: "#483253e1",
      url: "https://ComputerXplorers.com",
    },
    {
      id: 4,
      title: "Vice President - UWE Computer Science Society",
      startDate: "February 2026",
      text: "Plan and run a year-round programme of workshops, talks, hackathons, and conferences for the society's ~50 members, handling scheduling, content, and logistics. Build sponsor relationships across Bristol's tech industry to fund and resource events.",
      photo: Photo1,
      color: "#483253e1",
    },
  ];

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    const cardElements = cardsRef.current.filter(Boolean);

    if (cardElements.length === 0) return;
    const totalCards = cardElements.length;

    cardElements.forEach((card, i) => {
      if (i === 0) {
        gsap.set(card, { y: 0, scale: 1, opacity: 1 });
      } else {
        const targetScale = i === 1 ? 0.8 : i === 2 ? 0.9 : 0.9;
        // Cards waiting further down the queue start fully invisible so they
        // don't overlap/ghost behind the immediately-next card (which was
        // covering everything since it's last in DOM order).
        gsap.set(card, { y: "100%", scale: targetScale, opacity: 0 });
      }
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: `+=${(totalCards - 1) * 70}%`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      },
    });

    cardElements.forEach((card, i) => {
      if (i === 0) {
        tl.to(
          card,
          { scale: 0.8, opacity: 0.2, duration: 0.7, ease: "power2.inOut" },
          i * 0.7,
        );
      } else {
        const startTime = (i - 1) * 0.7;
        const targetScale = i === 1 ? 0.8 : i === 2 ? 0.9 : 0.9;
        tl.to(
          card,
          {
            y: "0%",
            scale: targetScale,
            opacity: 1,
            duration: 0.7,
            ease: "power2.inOut",
          },
          startTime,
        );

        if (i > 0) {
          const prevCard = cardElements[i - 1];
          const prevScale = i - 1 === 0 ? 0.8 : i - 1 === 1 ? 0.8 : 0.9;
          tl.to(
            prevCard,
            {
              scale: prevScale,
              opacity: i === 1 ? 0.2 : 0.1,
              duration: 0.7,
              ease: "power2.inOut",
            },
            startTime,
          );
        }
      }
    });

    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill(true);
      });

      ScrollTrigger.clearMatchMedia();

      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div className="light-pillar-bg">
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={8}
          lineDistance={8}
          bendRadius={8}
          bendStrength={-2}
          interactive
          parallax={true}
          animationSpeed={1}
          gradientStart="#e945f5"
          gradientMid="#6f6f6f"
          gradientEnd="#6a6a6a"
        />
      </div>
      <Header />

      <section id="about" className="full-screen-section1">
        <Aboutme />
      </section>

      <section id="Education" className="full-screen-section">
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          Education
        </motion.h1>
        <Education
          photo={Photo1}
          title="Bsc Computer Science - UWE Bristol"
          start={2025}
          end={2028}
          text="Completed First Year with a 90% overall average (First-Class)"
        />
        <Education
          photo={Photo2}
          title="Baccalaureat - Algiers"
          start={2020}
          end={2023}
          text="Graduated with honours"
        />
      </section>

      {/* THE COMPONENT CONSOLIDATION FIX */}
      <section id="Experience" className="full-screen-section">
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          Experience
        </motion.h1>
      </section>

      {/* Render the clean sub-component right under the section header */}
      <Experience cards={cards} wrapperRef={wrapperRef} cardsRef={cardsRef} />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
}

export default App;

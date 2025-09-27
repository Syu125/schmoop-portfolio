import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Drop } from "@phosphor-icons/react";

const Stage2 = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const dropVariants = {
    hidden: { y: -200, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  };

  const sproutVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 2, delay: 1 },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <section
      ref={ref}
      id="stage2"
      className="relative min-h-screen flex flex-col justify-center items-center bg-soil-100 overflow-hidden"
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={dropVariants}
        className="absolute top-0"
      >
        <Drop size={48} className="text-blue-300" />
      </motion.div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <motion.svg
          initial="hidden"
          animate={controls}
          variants={sproutVariants}
          width="64"
          height="64"
          viewBox="0 0 256 256"
        >
          <path
            d="M128,56C96,56,72,80,72,112c0,8.8,7.2,16,16,16s16-7.2,16-16c0-17.7,14.3-32,32-32s32,14.3,32,32c0,8.8,7.2,16,16,16s16-7.2,16-16C184,80,160,56,128,56Z"
            fill="none"
            stroke="#22c55e"
            strokeWidth="16"
          />
          <path d="M128,112v88" fill="none" stroke="#22c55e" strokeWidth="16" />
        </motion.svg>
      </div>
      <div className="relative z-10 text-center">
        <h2 className="text-3xl font-bold mb-2 text-soil-900">
          Germination & Sprouting
        </h2>
        <p className="text-lg text-soil-700">My Passions & Motivations</p>
      </div>
      <div className="relative z-10 mt-8 max-w-2xl text-center">
        <p className="mb-4 text-soil-800">
          The needs of others are the{" "}
          <span className="font-bold text-soil-900">soil</span> in which my
          passion for design grows. I'm particularly drawn to the challenges in
          healthcare and health-tech. My own experiences and insights are the{" "}
          <span className="font-bold text-blue-500">water</span> that nourishes
          my work, driving me to create solutions that are accessible,
          empathetic, and centered around the needs of patients.
        </p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#503628"
            fillOpacity="1"
            d="M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,181.3C672,203,768,213,864,202.7C960,192,1056,160,1152,138.7C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Stage2;

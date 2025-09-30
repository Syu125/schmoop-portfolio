import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface FloatingAvatarProps {
  activeSection: number;
}

const sectionDescriptions: { [key: number]: string; welcome: string } = {
  0: "A brief introduction about me - who I am in a nutshell.",
  1: "What helps me grow?",
  2: "Here are some projects where I've grown in understanding of HCI and design.",
  3: "These are all the skills I've cultivated along the way.",
  welcome:
    "Hello! Welcome to Sophia's portfolio. I'll be your guide. If you don't want to see my messages, press 'Escape' to toggle them. As you scroll, I'll share insights about each section.",
};

const FloatingAvatar: React.FC<FloatingAvatarProps> = ({ activeSection }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isBubbleOpen, setIsBubbleOpen] = useState(true);
  const [isMouseInactive, setIsMouseInactive] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(sectionDescriptions[0]);
  const [hasInitialMessageDisplayed, setHasInitialMessageDisplayed] =
    useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBubbleOpen(false);
      setHasInitialMessageDisplayed(true);
    }, 5000); // Close message after 5 seconds
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Only update message if the initial message has already been displayed
    if (hasInitialMessageDisplayed) {
      setCurrentMessage(sectionDescriptions[activeSection]);
    }
  }, [activeSection, hasInitialMessageDisplayed]);

  useEffect(() => {
    let mouseMoveTimer: NodeJS.Timeout;

    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
      setIsMouseInactive(false);
      clearTimeout(mouseMoveTimer);
      mouseMoveTimer = setTimeout(() => {
        setIsMouseInactive(true);
      }, 1000); // 1 second of inactivity
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsBubbleOpen((prev) => !prev);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(mouseMoveTimer);
    };
  }, []);

  const floatingAnimation = isMouseInactive
    ? {
        y: [0, -10, 0],
        transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
      }
    : {};

  return (
    <div className="absolute inset-0 pointer-events-none">
      <motion.div
        className="absolute flex items-end space-x-2 pointer-events-auto"
        style={{
          x: mousePosition.x + 20,
          y: mousePosition.y + 20 + window.scrollY,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 10, mass: 0.5 }}
      >
        <motion.div
          animate={floatingAnimation}
          className="flex items-end space-x-2"
        >
          {isBubbleOpen && (
            <motion.div
              className="absolute bg-white p-3 rounded-lg shadow-lg top-[-80px] left-full transform -translate-x-full whitespace-nowrap"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <p className="text-sm text-gray-800">{currentMessage}</p>
            </motion.div>
          )}
          <img
            src="/src/assets/avatar.png" // Placeholder for your avatar image
            alt="Avatar"
            className="w-16 h-16 rounded-full"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FloatingAvatar;

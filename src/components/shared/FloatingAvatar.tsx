import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface FloatingAvatarProps {
  activeSection: number;
}

const sectionDescriptions: { [key: number]: string } = {
  0: "Welcome! I'm your guide through this portfolio. Let's start with my roots.",
  1: "Here, we explore what drives my passion and design motivations.",
  2: "Discover my projects, where ideas bloom into impactful solutions.",
  3: "Finally, a look at my skills and what I enjoy outside of work.",
};

const FloatingAvatar: React.FC<FloatingAvatarProps> = ({ activeSection }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isBubbleOpen, setIsBubbleOpen] = useState(true);
  const [isMouseInactive, setIsMouseInactive] = useState(false);

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
      if (event.key === 'Escape') {
        setIsBubbleOpen((prev) => !prev);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleKeyDown);
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
        style={{ x: mousePosition.x + 20, y: mousePosition.y + 20 + window.scrollY }}
        transition={{ type: "spring", stiffness: 100, damping: 10, mass: 0.5 }}
      >
        <motion.div animate={floatingAnimation}>
          {isBubbleOpen && (
            <motion.div
              className="bg-white p-3 rounded-lg shadow-lg relative"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <p className="text-sm text-gray-800">{sectionDescriptions[activeSection]}</p>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white"></div>
            </motion.div>
          )}
          <img
            src="/src/assets/avatar.png" // Placeholder for your avatar image
            alt="Avatar"
            className="w-16 h-16 rounded-full shadow-lg border-2 border-blue-500 bg-blue-200"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FloatingAvatar;

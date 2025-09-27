import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Circle, Leaf, Flower, Plant } from '@phosphor-icons/react';

interface NavigationProps {
  activeSection: number;
  setActiveSection: (index: number) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  const sections = [
    { id: 'stage1', label: 'Seeds', icon: Circle },
    { id: 'stage2', label: 'Sprouting', icon: Leaf },
    { id: 'stage3', label: 'Flowering', icon: Flower },
    { id: 'stage4', label: 'Pods', icon: Plant },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sectionIndex = Math.floor(scrollPosition / windowHeight);
      setActiveSection(Math.min(sectionIndex, sections.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections.length, setActiveSection]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="relative flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100"
                >
                  <Icon size={20} />
                  <span className="text-sm font-medium">{section.label}</span>
                  {activeSection === index && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-green-100 rounded-lg"
                      style={{ zIndex: -1 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

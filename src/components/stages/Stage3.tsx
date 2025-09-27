import React, { useState } from "react";
import flower from "../../assets/flower.png";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "TriageMD",
    subtitle: "AI-Assisted Medical Self-Triage System",
    role: "Research Intern (UCSD Digital Health Lab)",
    timeline: "Spring 2025 – Present",
    tools:
      "Python (data analysis, visualization), manual error analysis, research writing",
    team: "Mentor – Nancy Liu",
    sections: [
      {
        type: "context",
        title: "Context & Problem",
        narrative:
          "Patients often face delays by needing in-person visits before understanding the severity of their condition. A chatbot could provide initial self-triage to help determine next steps. Challenge: ensuring accurate interpretation of patient input + empathetic, trustworthy responses.",
        visual: "patient-chatbot-flow.png",
      },
      {
        type: "process",
        title: "Process",
        narrative:
          "Joined after initial product development. Focused on evaluating the system’s accuracy + reliability. System architecture consists of 3 agents: 1. Retrieval Agent → finds condition relevant to symptoms. 2. Decision Agent → determines best next question. 3. Chat Agent → reframes response with empathy. Testing via synthetic datasets; manual error analysis.",
        visual: "system-architecture.png",
      },
      {
        type: "outcome",
        title: "Solution & Outcome",
        narrative:
          "Strong performance results: 95.29% top-3 accuracy in flowchart retrieval (N=2,000). 99.10% accuracy in flowchart navigation (N=37,200). Co-authored research paper advancing knowledge in AI-assisted medical decision-making.",
        visual: "stats-paper.png",
      },
      {
        type: "reflection",
        title: "Reflection",
        narrative:
          "Key learnings: designing evaluation metrics, balancing technical accuracy with user trust, interdisciplinary collaboration. Connection to health-tech and AI in HCI. Future exploration: usability testing with real patients, deepening empathetic design in AI systems.",
        visual: "sticky-notes.png",
      },
    ],
  },
  {
    title: "Smart Learning Hub",
    subtitle: "AI-Powered Learning Assistant for Higher Education",
    role: "Student Assistant (Developer, Designer, Researcher)",
    timeline: "2024 – Present",
    tools:
      "Figma (UI/UX design, prototyping), Node.js (frontend/backend development), component creation, usability testing",
    team: "UCSD Laboratory for Emerging Intelligence, mentored by Matthew Clegg",
    sections: [
      {
        type: "context",
        title: "Context & Problem",
        narrative:
          "Education is becoming more complex, with large classes and diverse student needs. Professors struggle to give personalized support at scale. Students may feel lost or unsupported in their coursework. Smart Learning Hub (SLH) aims to integrate LLMs and AI into the classroom to create personalized, interactive learning experiences for students while supporting instructors.",
        visual: "slh-context.png",
      },
      {
        type: "process",
        title: "Process",
        narrative:
          "Design: Created functional UI prototypes in Figma. Designed and implemented reusable components/features for the SLH interface. Focused on student–AI and professor–AI interactions for usability and clarity. Testing: Conducted weekly usability tests with real students. Iterated design based on feedback (navigation clarity, feature discoverability). Collaborated with backend developers to align design with system capabilities.",
        visual: "slh-process.png",
      },
      {
        type: "outcome",
        title: "Solution & Outcome",
        narrative:
          "SLH provides an AI course assistant integrated into UCSD classes. Students can ask questions, receive contextualized responses, and access course resources efficiently. Professors can use SLH to enhance course delivery and provide scalable support. Measurable Impact: SLH is currently being piloted in multiple UCSD courses. First version is live and actively supporting students. Ongoing development on a second SLH tool with extended features.",
        visual: "slh-outcome.png",
      },
      {
        type: "reflection",
        title: "Reflection",
        narrative:
          "What I Learned: Designing for both students and instructors requires balancing different needs. Usability testing is key for validating assumptions and guiding design. Bridging development and design skills strengthened my full-stack perspective. Connection to Interests: Reinforces my passion for HCI and interaction design in real-world contexts. Highlights how AI can be integrated into education to improve user experience. Next Steps: Broader usability testing across more courses. Explore adaptive learning models for even deeper personalization. Investigate opportunities to extend SLH beyond higher education.",
        visual: "slh-reflection.png",
      },
    ],
  },
];

const Stage3 = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="stage3"
      className="min-h-screen flex flex-col justify-center items-center"
    >
      <div className="text-center">
        <img src={flower} alt="flower" className="h-40 mx-auto mb-4" />{" "}
        <h2 className="text-3xl font-bold mb-2">My Work</h2>
        <p className="text-lg text-gray-600">Blooming</p>
      </div>
      <div className="mt-8 max-w-4xl w-full px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="mb-8 p-6 border border-accent-orange rounded-lg shadow-lg bg-white cursor-pointer hover:shadow-xl transition-shadow duration-200"
            onClick={() => setSelectedProject(project)}
          >
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.subtitle}</p>
            <p className="text-gray-700 line-clamp-3">
              {project.sections[0].narrative}
            </p>
            <button className="mt-4 text-accent-orange hover:underline">
              Read More
            </button>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={() => setSelectedProject(null)} // Close when clicking outside
          >
            <div
              className="bg-white p-8 rounded-lg shadow-lg max-w-3xl max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()} // Prevent click from propagating to background
            >
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
                onClick={() => setSelectedProject(null)}
              >
                &times;
              </button>
              <h3 className="text-3xl font-bold mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-xl text-gray-600 mb-4">
                {selectedProject.subtitle}
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  Role: {selectedProject.role}
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                  Timeline: {selectedProject.timeline}
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                  Tools: {selectedProject.tools}
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                  Team: {selectedProject.team}
                </span>
              </div>

              {selectedProject.sections.map((section, secIndex) => (
                <div key={secIndex} className="mb-8">
                  <h4 className="text-2xl font-bold mb-4 border-b pb-2">
                    {section.title}
                  </h4>
                  <p className="text-gray-700 mb-4">{section.narrative}</p>
                  {section.visual && (
                    <div className="flex justify-center mt-4">
                      <img
                        src={`/src/assets/${section.visual}`}
                        alt={section.title}
                        className="max-w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Stage3;

import React from "react";
import seeds from "../../assets/seeds.png";

const technicalSkills = [
  "Figma",
  "Adobe XD",
  "React",
  "Prototyping",
  "User Research",
];
const softSkills = [
  "Collaboration",
  "Empathy",
  "Storytelling",
  "Communication",
];
const hobbies = ["Gardening", "Photography", "Baking"];

const Stage4 = () => {
  return (
    <section
      id="stage4"
      className="min-h-screen flex flex-col justify-center items-center"
    >
      <div className="text-center">
        <img src={seeds} alt="seeds" className="h-40 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-2">
          Pod Fills & Seed Pods Mature
        </h2>
        <p className="text-lg text-gray-600">My Skills & Hobbies</p>
      </div>
      <div className="mt-8 max-w-4xl w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Technical Skills</h3>
            <ul className="space-y-2">
              {technicalSkills.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Soft Skills</h3>
            <ul className="space-y-2">
              {softSkills.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Hobbies</h3>
            <ul className="space-y-2">
              {hobbies.map((hobby, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  {hobby}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg">
            Like seeds, ideas grow — this is just one stage of my journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stage4;

import React from "react";
import { CoffeeBeanIcon } from "@phosphor-icons/react";

const Stage1 = () => {
  return (
    <section
      id="stage1"
      className="min-h-screen flex flex-col justify-center items-center"
    >
      <div className="text-center">
        <CoffeeBeanIcon size={64} className="mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-2">Hi, I'm Sophia</h1>
        <p className="text-lg text-gray-600">
          Grounded in Computer Science, growing in human-centered design.
        </p>
      </div>
      <div className="mt-8 max-w-2xl text-center">
        <p className="mb-4">
          Currently, I'm a [Your Position] where I focus on [Your
          Responsibilities]. I'm passionate about user experience, solving daily
          user needs, and exploring the intersection of health-tech and AI in
          healthcare. My goal is to create meaningful and impactful interaction
          designs.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <span className="bg-green-100 text-green-800 text-sm font-medium font-bold mr-2 px-2.5 py-0.5 rounded-full">
            User experience
          </span>
          <span className="bg-green-100 text-green-800 text-sm font-medium font-bold mr-2 px-2.5 py-0.5 rounded-full">
            solving user needs
          </span>
          <span className="bg-green-100 text-green-800 text-sm font-medium font-bold mr-2 px-2.5 py-0.5 rounded-full">
            health tech
          </span>
          <span className="bg-green-100 text-green-800 text-sm font-medium font-bold mr-2 px-2.5 py-0.5 rounded-full">
            AI in healthcare
          </span>
          <span className="bg-green-100 text-green-800 text-sm font-medium font-bold mr-2 px-2.5 py-0.5 rounded-full">
            interaction design
          </span>
        </div>
      </div>
    </section>
  );
};

export default Stage1;

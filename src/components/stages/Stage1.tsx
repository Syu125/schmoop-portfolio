import React from "react";
import seed from "../../assets/seed.png";

const Stage1 = () => {
  return (
    <section
      id="stage1"
      className="min-h-screen flex flex-col justify-center items-center"
    >
      <div className="text-center">
        <img src={seed} alt="seed" className="w-20 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-2">Hi, I'm Sophia</h1>
        <p className="text-lg text-gray-600">
          grounded in Computer Science, growing in Human-Centered Design.
        </p>
      </div>
      <div className="mt-8 max-w-2xl text-center">
        <p className="mb-4">
          Currently, I am a Master’s student in Computer Science at UC San
          Diego, specializing in Human–Computer Interaction and design. I work
          with the Digital Health Lab on AI-assisted medical decision-making and
          the Laboratory for Emerging Intelligence on designing interfaces for
          AI-powered learning tools. These experiences fuel my passion for user
          experience, health-tech, and the transformative potential of AI in
          healthcare. My goal is to design interactions that are not only
          functional, but also meaningful and impactful.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <span className="bg-health-100 text-health-900 text-sm font-medium font-bold mr-2 px-2.5 py-0.5 rounded-full">
            user experience
          </span>
          <span className="bg-health-100 text-health-900 text-sm font-medium font-bold mr-2 px-2.5 py-0.5 rounded-full">
            solving user needs
          </span>
          <span className="bg-health-100 text-health-900 text-sm font-medium font-bold mr-2 px-2.5 py-0.5 rounded-full">
            health tech
          </span>
          <span className="bg-health-100 text-health-900 text-sm font-medium font-bold mr-2 px-2.5 py-0.5 rounded-full">
            AI in healthcare
          </span>
          <span className="bg-health-100 text-health-900 text-sm font-medium font-bold mr-2 px-2.5 py-0.5 rounded-full">
            interaction design
          </span>
        </div>
      </div>
    </section>
  );
};

export default Stage1;

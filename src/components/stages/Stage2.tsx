import React from "react";
import germination from "../../assets/germination.png";

const Stage2 = () => {
  return (
    <section
      id="stage2"
      className="min-h-screen flex flex-col justify-center items-center"
    >
      <div className="text-center">
        <img
          src={germination}
          alt="germination"
          className="h-40 mx-auto mb-4"
        />
        <h2 className="text-3xl font-bold mb-2">Germination & Sprouting</h2>
        <p className="text-lg text-gray-600">My Passions & Motivations</p>
      </div>
      <div className="mt-8 max-w-2xl text-center">
        <p className="mb-4">
          The needs of others are the soil in which my passion for design grows.
          I'm particularly drawn to the challenges in healthcare and
          health-tech. My own experiences and insights are the water that
          nourishes my work, driving me to create solutions that are accessible,
          empathetic, and centered around the needs of patients.
        </p>
      </div>
    </section>
  );
};

export default Stage2;

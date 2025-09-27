import React from 'react';
import { Flower } from '@phosphor-icons/react';

const projects = [
  {
    title: 'Project One',
    challenge: 'The challenge was to...',
    approach: 'My approach involved...',
    outcome: 'The outcome was...',
    reflection: 'I learned that...',
  },
  {
    title: 'Project Two',
    challenge: 'The challenge was to...',
    approach: 'My approach involved...',
    outcome: 'The outcome was...',
    reflection: 'I learned that...',
  },
];

const Stage3 = () => {
  return (
    <section id="stage3" className="min-h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <Flower size={64} className="mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-2">Leaf Growth & Flowering</h2>
        <p className="text-lg text-gray-600">My Projects</p>
      </div>
      <div className="mt-8 max-w-4xl w-full px-4">
        {projects.map((project, index) => (
          <div key={index} className="mb-8 p-6 border rounded-lg">
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold">Challenge</h4>
                <p>{project.challenge}</p>
              </div>
              <div>
                <h4 className="font-bold">Approach</h4>
                <p>{project.approach}</p>
              </div>
              <div>
                <h4 className="font-bold">Outcome</h4>
                <p>{project.outcome}</p>
              </div>
              <div>
                <h4 className="font-bold">Reflection</h4>
                <p>{project.reflection}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stage3;

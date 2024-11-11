import React, { useEffect, useState } from 'react';
import './Skill.css'; // Import the CSS file

const Skill = () => {
  const skills = [
    { name: 'HTML', level: 80 },
    { name: 'CSS', level: 75 },
    { name: 'JavaScript', level: 90 },
    { name: 'Bootstrap', level: 70 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 60 },
    { name: 'Tailwind CSS', level: 75 },
    { name: 'Tally', level: 50 },
    { name: 'Excel', level: 65 },
    { name: 'Teaching', level: 85 }
  ];

  const [animated, setAnimated] = useState(false);

  // Trigger animation when the component mounts
  useEffect(() => {
    setTimeout(() => setAnimated(true), 100);
  }, []);

  return (
    <div className="w-full h-auto bg-black py-10 px-4">
      {/* Title and description */}
      <div className="text-center text-white mb-8">
        <h1 className="font-bold text-5xl text-red-600 mb-4">My <span className="text-red-600">Skills</span></h1>
        <p className="font-bold text-1xl max-w-2xl mx-auto">
          With a keen eye for aesthetics and a deep interest in technology, I began learning web development on freeCodeCamp. 
          I am always looking to improve my skills, and soon I’ll study to become a Web Design Specialist. Here is a list of my skills so far:
        </p>
      </div>

      {/* Skill Circles */}
      <div className={`grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 justify-items-center ${animated ? 'animate-slide' : ''}`}>
        {skills.map((skill, index) => (
          <div key={index} className="relative w-32 h-32 flex flex-col items-center justify-center">
            <div
              className="w-full h-full rounded-full border-4 flex items-center justify-center text-red-900 text-center font-bold skill-circle"
              style={{
                background: `conic-gradient(#38bdf8 ${animated ? skill.level : 0}%, #172554 ${animated ? skill.level : 0}% 100%)`,
                animation: animated ? 'spin 1s ease-in-out' : '',
              }}
            >
              <div className="w-28 h-28 bg-[rgb(226,40,55)] rounded-full flex items-center justify-center">
                <span className="text-xl text-white">{skill.level}%</span>
              </div>
            </div>
            <span className="text-white mt-2 text-sm font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;

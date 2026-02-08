"use client";

import React from "react";
import dynamic from "next/dynamic";
import {
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiAmazonwebservices,
  SiDocker,
  SiPython,
  SiTensorflow,
  SiPytorch,
} from "react-icons/si";

const Tilt = dynamic(() => import("react-parallax-tilt"), { ssr: false });

const skills = [
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React.js", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "SQL (MySQL)", icon: <SiMysql /> },
  { name: "AWS", icon: <SiAmazonwebservices /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "Python", icon: <SiPython /> },
  { name: "TensorFlow", icon: <SiTensorflow /> },
  { name: "PyTorch", icon: <SiPytorch /> },
];

const Skills = () => {
  const loopSkills = [...skills, ...skills]; // for smooth looping

  return (
    <div className="text-white pt-16 pb-16" id="skills">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        My <span className="text-cyan-300">Skills</span>
      </h1>

      {/* Auto-scrolling marquee (CSS in globals.css) */}
      <div className="mt-16 w-full overflow-hidden">
        <div className="flex w-max gap-6 px-4 skill-marquee-track">
          {loopSkills.map((skill, i) => (
            <Tilt key={`${skill.name}-${i}`} scale={1.15} transitionSpeed={400}>
              <div className="bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105 shrink-0">
                <div className="text-5xl mb-4 text-gray-300">{skill.icon}</div>
                <p className="text-purple-400 mt-1">{skill.name}</p>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

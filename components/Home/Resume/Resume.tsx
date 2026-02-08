import React from "react";
import ResumeCard from "./ResumeCard";
import { FaCodepen } from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";
import { BiBadge } from "react-icons/bi";

const Resume = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My Work <span className="text-cyan-200"> Experience</span>
          </h1>

          <div data-aos="zoom-in" data-aos-anchor-placement="top-center" className="mt-10">
            <ResumeCard
              Icon={FaCodepen}
              role="Machine Learning Engineer"
              date="Apr 2024 – May 2024"
              description="Built and optimized a DRL-based scheduling system for edge–cloud resource allocation, integrating an A3C optimization framework and running cloud simulations to improve efficiency, reduce latency, and scale performance."
            />

            <ResumeCard
              Icon={BsDatabase}
              role="Web Developer"
              date="Jun 2023 – Jul 2023"
              description="Developed responsive web pages and improved UX, integrated REST APIs to strengthen frontend–backend communication and performance, and used Git for version control and team collaboration."
            />
          </div>
        </div>

        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My<span className="text-cyan-200"> Education</span>
          </h1>

          <div
            data-aos="zoom-out"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
            className="mt-10"
          >
            <ResumeCard
              Icon={BiBadge}
              role="California State University Channel Islands"
              date="Aug 2024 - May 2026"
              description="Master’s program focused on software engineering and applied machine learning, with hands-on projects and coursework."
            />

            <ResumeCard
              Icon={BsDatabase}
              role="National Institute of Technology Raipur"
              date="Aug 2020 - May 2024"
              description="Bachelor’s degree with strong foundations in data structures, algorithms, databases, and software development."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

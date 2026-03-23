import Image from "next/image";
import React from "react";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        Recent <span className="text-cyan-300"> Projects </span>
      </h1>

      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {/* Project 1: CNN */}
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="0">
          <Image src="/images/p1.png" alt="CNN Project" width={800} height={650} className="rounded-lg" />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            CNN Image Classification Project
          </h1>
          <h1 className="pt-2 font-medium text-white/80">
            Deep Learning • CNN • TensorFlow/PyTorch • Model Training
          </h1>
        </div>

        {/* Project 2: Cueue */}
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="100">
          <Link href="https://cueue.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Image src="/images/p2.png" alt="Cueue Project" width={800} height={650} className="rounded-lg" />
          </Link>

          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            <Link href="https://cueue.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Cueue - Collaborative Music Queue Manager
            </Link>
          </h1>

          <h1 className="pt-2 font-medium text-white/80">
            Next.js • Real-time Collaboration • Sessions • UI/UX
          </h1>
        </div>
         {/* Project 3*/}

         <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="100">
          <Link href="https://job-portral.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Image src="/images/p2.png" alt="Job Project" width={800} height={650} className="rounded-lg" />
          </Link>

          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            <Link href="https://job-portral.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Job Portal Project
            </Link>
          </h1>

          <h1 className="pt-2 font-medium text-white/80">
            MERN Stack • Authentication • Job Posting • Application Tracking
          </h1>
        </div>

        
        

        {false && (
          <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
            <Image src="/images/p3.jpg" alt="img" width={800} height={650} className="rounded-lg" />
            <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">3rd Project description</h1>
            <h1 className="pt-2 font-medium text-white/80">tools used project description small</h1>
          </div>
        )}

        {false && (
          <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="300">
            <Image src="/images/p4.jpg" alt="img" width={800} height={650} className="rounded-lg" />
            <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">4th Project description</h1>
            <h1 className="pt-2 font-medium text-white/80">tools used project description small</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;

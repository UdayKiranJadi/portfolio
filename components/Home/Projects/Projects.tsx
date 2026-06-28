import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  live?: string;
  delay: number;
};

const projects: Project[] = [
  {
    title: "Kairos – AI Trading System",
    description:
      "Full-stack AI-powered trading platform with a 5-layer architecture. Combines Logistic Regression + PPO reinforcement learning ensemble with a real-time risk engine, live market data ingestion, and a React dashboard.",
    image: "/images/p3.jpg",
    tech: ["Python", "React", "FastAPI", "PPO", "Redis", "PostgreSQL"],
    github: "https://github.com/UdayKiranJadi/Kairos",
    delay: 0,
  },
  {
    title: "Real-Time Chat App",
    description:
      "Full-stack messaging platform with real-time communication, JWT authentication, and Redis-backed session management. Supports group and private chats with instant delivery.",
    image: "/images/imageCA.png",
    tech: ["MongoDB", "Express", "React", "Node.js", "Socket.IO", "Redis"],
    github: "https://github.com/UdayKiranJadi",
    live: "https://chatappchat.vercel.app/",
    delay: 100,
  },
  {
    title: "Job Portal",
    description:
      "End-to-end job portal where employers post listings and candidates apply and track applications. Built with the MERN stack with role-based auth and a clean, responsive UI.",
    image: "/images/image.png",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    github: "https://github.com/UdayKiranJadi",
    live: "https://job-portral.vercel.app/",
    delay: 200,
  },
  {
    title: "Cueue – Collaborative Music Queue",
    description:
      "Real-time collaborative music queue manager. Multiple users join a session and vote on the next song, with instant sync across all clients.",
    image: "/images/p2.png",
    tech: ["Next.js", "TypeScript", "Socket.IO", "Tailwind CSS"],
    github: "https://github.com/UdayKiranJadi",
    live: "https://cueue.vercel.app/",
    delay: 300,
  },
  {
    title: "CNN Image Classifier",
    description:
      "Deep learning image classification web app. Upload any image and the CNN model predicts its class with confidence scores, served through a clean inference API.",
    image: "/images/p1.png",
    tech: ["Python", "TensorFlow", "React", "FastAPI"],
    github: "https://github.com/UdayKiranJadi",
    live: "https://cnn-project-nine.vercel.app/",
    delay: 0,
  },
  {
    title: "DevTinder",
    description:
      "Developer networking app inspired by Tinder. Swipe to connect with other developers based on skills and interests, with real-time match notifications.",
    image: "/images/p4.jpg",
    tech: ["MongoDB", "Express", "React", "Node.js", "Socket.IO"],
    github: "https://github.com/UdayKiranJadi",
    delay: 100,
  },
];

const Projects = () => {
  return (
    <div className="pt-20 pb-20" id="works">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        Recent <span className="text-cyan-300">Projects</span>
      </h1>
      <p className="text-center text-gray-400 mt-4 text-base max-w-xl mx-auto px-4">
        A selection of things I&apos;ve built — spanning full-stack apps, real-time systems, and AI.
      </p>

      <div className="w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
        {projects.map((project) => (
          <div
            key={project.title}
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay={project.delay}
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col hover:border-cyan-400/30 transition-all duration-300 group"
          >
            <div className="relative overflow-hidden h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d1f] via-transparent to-transparent" />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-lg font-semibold text-white">{project.title}</h2>
              <p className="mt-3 text-sm text-gray-400 leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-5">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <FaGithub className="w-4 h-4" />
                    Code
                  </Link>
                )}
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-cyan-300 hover:text-cyan-200 transition-colors"
                  >
                    <FaExternalLinkAlt className="w-3.5 h-3.5" />
                    Live
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

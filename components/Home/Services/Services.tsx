"use client";
import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div className='pt-20 pb-20 px-8'>
      <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
        What I <span className='text-cyan-300'>Do</span>
      </h1>
      <p className='text-center text-gray-400 mt-4 text-base max-w-xl mx-auto'>
        I build products end-to-end — from clean UIs to scalable backends.
      </p>
      <div className='w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-16 items-start'>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <ServiceCard icon="/images/s1.png" name="Frontend Development" description="Responsive, accessible UIs with React and Next.js. Pixel-perfect layouts with Tailwind CSS and smooth animations."/>
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
          <ServiceCard icon="/images/s2.png" name="Backend & APIs" description="Robust REST APIs with Node.js and Express. Scalable databases, auth, and real-time features with Socket.IO and Redis."/>
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200">
          <ServiceCard icon="/images/s3.png" name="Full-Stack Systems" description="End-to-end product development — from schema design to deployment. MERN stack with clean architecture and CI/CD."/>
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300">
          <ServiceCard icon="/images/s4.png" name="AI / ML Integration" description="Integrating machine learning models into production apps — from training pipelines to real-time inference APIs."/>
        </div>
      </div>
    </div>
  )
}

export default Services
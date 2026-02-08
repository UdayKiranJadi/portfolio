"use client";
import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div className='pt-16 p-16'>
      <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
        Lets collborate and explore
      </h1>
      <div className='w-[90%] sm:[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center'>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <ServiceCard icon="/images/s1.png" name="UI/UX Design" description="Clean, responsive interfaces with TailwindCSS and React focused on usability, accessibility, and smooth user flows."/>
        </div>

        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
          <ServiceCard icon="/images/s2.png" name="Web Application Development" description="Modern web apps using React/Next.js with REST APIs fast performance, responsive layouts, and production-ready structure."/>

        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200">

          <ServiceCard icon="/images/s3.png" name="Product Design & Prototyping " description="From idea to clickable prototype wireframes, components, and polished UI that matches your brand and goals."/>


        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300">
          <ServiceCard icon="/images/s4.png" name="Development" description="End-to-end features with Node/Express, databases, and integrate machine learning models for intelligent capabilities like prediction, classification, or automation built for scalability and maintainability."/>
        </div>

      </div>



    </div>
  )
}

export default Services
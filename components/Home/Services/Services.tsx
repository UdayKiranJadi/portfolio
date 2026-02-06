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
          <ServiceCard icon="/images/s1.jpg" name="UI and UX" description="cvbnrxfvb"/>
        </div>

        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
          <ServiceCard icon="/images/s2.png" name="WEb app" description="ghbhj"/>

        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200">

          <ServiceCard icon="/images/s3.png" name="design and creativity " description="hgjh"/>


        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300">
          <ServiceCard icon="/images/s4.png" name="Developmnt" description="hjhjhjh"/>
        </div>

      </div>



    </div>
  )
}

export default Services
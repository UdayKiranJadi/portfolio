"use client";
import Image from 'next/image'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import Typewriter from 'typewriter-effect'
import ParticlesHero from './ParticleBackground';

const Hero = () => {
  return (
    <div className='relative h-screen flex items-center justify-center text-white overflow-hidden flex-col'>
        <ParticlesHero />
        <div className='relative z-10 flex flex-col items-center'>
            <Image src="/images/hi.png" alt="heroimage" width={160} height={160} className='rounded-Full border-8 border-[#0c0c48aa]' data-aos="fade-up" />
            <h1 data-aos="fade-up" data-aos-delay="200" className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide'>Software Engineer <br /><span className='text-cyan-200'> Uday Kiran Jadi </span></h1>
            <h2 data-aos="fade-up" data-aos-delay="400" className='mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center'>
                Hi I'am Uday - A Passionate 
                <span className='text-cyan-200 font-bold'>
                    <Typewriter options={{
                        strings:[
                            "Machine Learning Engineer",
                            "Backend Developer",
                            "Full Stack Developer",
                        ],
                        autoStart:true,
                        loop: true,
                        delay:75,
                        deleteSpeed:50,
                        wrapperClassName: 'pl-2',
                    }}/>

                </span>

            </h2>
            { /*
            <button data-aos="fade-up" data-aos-delay="600" className='mt-6 px-4 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium'><span>See my Work</span>
            <BsArrowRight className='w-5 h-5 ml-2 inline-block'/>
           </button>
           */
}
        
            

        </div>
    </div>
  )
}
 
export default Hero  
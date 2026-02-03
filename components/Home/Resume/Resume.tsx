import React from 'react'
import ResumeCard from './ResumeCard'
import { FaCodepen, FaReact } from 'react-icons/fa'
import { BsDatabase } from 'react-icons/bs'
import { BiBadge } from 'react-icons/bi'

const Resume = () => {
  return (
    <div className='pt-20 pb-16'>
      <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10'>
        <div>
          <h1 className='text-3xl sm:text-4xl font-bold text-white' >My Work <span className='text-cyan-200'> Experience</span>
          </h1>
          <div data-aos="zoom-in" data-aos-anchor-placement="top-center" className='mt-10'>
            <ResumeCard Icon={FaCodepen} role="Full-Stack Developer" />
            <ResumeCard Icon={FaReact} role="Front-End Developer" />
            <ResumeCard Icon={BsDatabase} role="Backend Developer" />


          </div>
        </div>
        <div>
          <h1 className='text-3xl sm:text-4xl font-bold text-white'> My<span className='text-cyan-200'> Education</span>
          </h1>
          <div data-aos="zoom-out" data-aos-anchor-placement="top-center" data-aos-delay="300" className='mt-10'>
            <ResumeCard Icon={BiBadge} role="California State University Channel Islands" date="Aug 2024 - May 2026" />
            <ResumeCard Icon={BsDatabase} role="National Institute of Technology Raipur" date="Aug 2020 - May 2024" />



          </div>

        </div>
      </div>
    </div>
  )
}

export default Resume
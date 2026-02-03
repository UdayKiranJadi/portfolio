import Image from 'next/image'
import React from 'react'

const Projects = () => {
    return (
        <div className=' pt-16 pb-16'>
            <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
                Recent <span className='text-cyan-300'> Projects </span>
            </h1>
            <div className='w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16'>
                <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="0">
                    <Image src="/images/p1.jpg" alt='img' width={800} height={650} className='rounded-lg'
                    />
                    <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>Project description </h1>
                    <h1 className='pt-2 font-medium text-white/80 '>apps , ui/ux</h1>
                </div>
                <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="100">
                    <Image src="/images/p2.jpg" alt='img' width={800} height={650} className='rounded-lg'
                    />
                    <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>2 nd Project description </h1>
                    <h1 className='pt-2 font-medium text-white/80 '>project descriptin small</h1>
                </div>
                <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
                    <Image src="/images/p3.jpg" alt='img' width={800} height={650} className='rounded-lg'
                    />
                    <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>3rd Project description </h1>
                    <h1 className='pt-2 font-medium text-white/80 '>tools used roject descriptin small</h1>
                </div>
                <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="300">
                    <Image src="/images/p4.jpg" alt='img' width={800} height={650} className='rounded-lg'
                    />
                    <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>4th Project description </h1>
                    <h1 className='pt-2 font-medium text-white/80 '>tools used roject descriptin small</h1>
                </div>

            </div>
        </div>
    )
}

export default Projects
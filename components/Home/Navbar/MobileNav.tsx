import { Navlinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'

const MobileNav = () => {
  return (

    <div>
        <div className='fixed inset-0 transform transition-all right-0 duration-500 z-[100002] bg-black opacity-70 w-full h-screen'>

        </div>
        <div className='text-white fixed justify-center flex-col h-full transform tranistion-all duration-500 delay-300 sm:w-[80%] sm:w[60%] bg-cyan-800 space-y-6 z-[100050] right-0'>
         {Navlinks.map((link)=>{
            return <Link key={link.id} href={link.url}>
                <p className='text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-wite sm:text-[30px]'>{link.label}</p>
            </Link>
         } )}

        </div>
    </div>
  )
}

export default MobileNav
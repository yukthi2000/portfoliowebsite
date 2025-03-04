import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'


function About() {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg '>Introduction</h4>
        <h2 className='text-center text-5xl'>About Me</h2>
        <div className='flex flex-col w-full lg:flex-row items-center gap-20 my-20'>
            <div>
                <Image src={assets.user_image} alt='user_image' className='w-full rounded-3xl' />

            </div>
            <div className='flex-1'>
                </div>
        </div>
      
    </div>
  )
}

export default About

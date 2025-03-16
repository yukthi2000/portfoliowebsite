import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg">What I offer</h4>
      <h2 className="text-center text-5xl">My Services </h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mmb-12 '>
        I am full stack developer with experience in both front-end and back-end
        development. I can help you with building a website from scratch, adding
        new features to your existing website, fixing bugs, and much more. I am a
        responsible team player with adaptability to new technologies, and focus on productive targets.
      </p>
      <div className='grid grid-cols-[var(--grid-autoo)] gap-6 my-10 '>
        {serviceData.map(({icon,title,description,link}, index) => (

            <div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500'>
                <Image src={icon} alt=' '  className='w-10'/>
                <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                <p className='text-sm text-gray-600 leading-5'>
                    {description}
                </p>
                <a href={link}  className='flex items-center gap-2 text-sm mt-5' >
                Read more <Image src={assets.right_arrow} alt='arrow' className='w-4'  />
                </a>
                </div>
        ))}
      </div>
      
    </div>
  )
}

export default Services

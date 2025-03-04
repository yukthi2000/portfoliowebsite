import React, { useEffect, useState } from 'react';
import { assets } from '@/assets/assets';
import Image from 'next/image'


function Header() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col justify-center gap-4 items-center'> 
      <div>
        <Image src={assets.profile_img} alt='header_bg_color' className='w-32 rounded-full' />
        
      </div>
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3'>
          Hi! I'm Yukthi Hettiarachchi
          <Image src={assets.hand_icon} alt='' className='w-6' />
        </h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-bold'>
            Full Stack Developer| Machine Learning Enthusiast
        </h1>
        <p className='max-w-2xl mx-auto '>
        A passionate, enthusiastic undergraduate who is excited to embrace new opportunities and overcome obstacles. I
        am a responsible team player with adaptability to new technologies, and focus on productive targets. 
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href='#contact' className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>Contact Me <Image src={assets.right_arrow_white} alt='' className='w-4'/> </a>
            <a href='/sample-resume.pdf' className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>My Resume <Image src={assets.download_icon} alt='' className='w-4'/> </a>

        </div>
    </div>
  );
}

export default Header;

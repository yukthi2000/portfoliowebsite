import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

function Navbar() {

    const menutoggleref = useRef()
    const[scroll,setScroll] = useState(false);

    const openMenu = () => {
        menutoggleref.current.style.transform='translateX(-16rem)'
    }

    const closeMenu = () => {
        menutoggleref.current.style.transform='translateX(16rem)'
    }

    useEffect(()=>{

        window.addEventListener('scroll',()=>{
            if(scrollY > 50){
                setScroll(true)
            }
            else{
                setScroll(false)
            }
        })

    },[])


  return (
   <>
   <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
    <Image src={assets.header_bg_color} alt='header_bg_color' className='w-full' />
   </div>
   <nav className={`w-full fixed flex items-center justify-between px-5 lg:px-8 xl:px-[8%] py-4 z-50 
    ${scroll ? "bg-white shadow-sm backdrop-blur-lg opacity-90": "" }`}>
    <a href='#top' >
        <Image src={assets.logo} alt='logo' className='w-28 cusrsor-pointer mr-14' />
    </a>
    <ul className={`hidden md:flex item-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${scroll ? "" : "bg-white shadow-sm opacity-50"} `}> 
        <li>
        <a href='#top' >Home</a>

        </li>
            <li><a href='#about' className='hover:bg-black'>About Me</a></li>
            <li><a href='#services' >Services</a></li>
            <li><a href='#work' >My Work</a></li>
            <li><a href='#contact' >Contact Me</a></li>

    </ul>
    <div className='flex items-center gap-4'> 
        <button><Image src={assets.moon_icon} alt='' className='w-6' /> </button>
       <a href='#contact' className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'>Contact <Image src={assets.arrow_icon} alt='arrow' className='w-3' /></a>
        <button className='lg:hidden'>
            <Image src={assets.menu_black} alt='menu' className='w-6' onClick={openMenu} />
        </button>
    </div>

    <ul ref={menutoggleref} className='flex md:hidden flex-col gap-4 top-0 bottom-0 w-64 z-50 py-20 px-10 h-screen fixed -right-64 bg-rose-50 transition duration-500  '> 
       
       <div className='absolute top-6 right-6'>
        <Image src={assets.close_black} alt='close' className='w-6 ' onClick={closeMenu} />
       </div>
        <li>
        <a href='#top' onClick={closeMenu}>Home</a>

        </li>
            <li><a href='#about' onClick={closeMenu}>About Me</a></li>
            <li><a href='#services' onClick={closeMenu}>Services</a></li>
            <li><a href='#work' onClick={closeMenu}>My Work</a></li>
            <li><a href='#contact' onClick={closeMenu}>Contact Me</a></li>

    </ul>
   </nav>
   
   </>
  )
}

export default Navbar

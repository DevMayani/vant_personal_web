"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '../../public/assets/vantlogo.svg'
import { IoIosArrowDown } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='bg-[#142528] px-6 py-4 md:py-6 md:px-10 lg:px-10 xl:px-32 lg:py-4 ' >
     <div className='flex items-center justify-between'>
     <Image src={Logo} 
      className='w-[20%] lg:w-[8%] h-auto'
      alt='vant_logo' />
      <ul className='hidden lg:flex items-center justify-between gap-4 xl:gap-12 font-inter cursor-pointer'>
        <li className='text-white text-sm hover:text-[#32AE4C]'>Home</li>
        <div className='text-white flex items-center gap-1 hover:text-[#32AE4C]'>
        <li className='text-sm'>Products
        </li>
        {/* <IoIosArrowDown /> */}
        </div>
        <div className='text-white flex items-center gap-1 hover:text-[#32AE4C]'>
        <li className='text-sm'>Developers
        </li>
        {/* <IoIosArrowDown /> */}
        </div>
        <div className='text-white flex items-center gap-1 hover:text-[#32AE4C]'>
        <li className='text-sm'>Resources
        </li>
        {/* <IoIosArrowDown /> */}
        </div>
        <div className='text-white flex items-center gap-1 hover:text-[#32AE4C]'>
        <li className='text-sm'>Company
        </li>
        {/* <IoIosArrowDown /> */}
        </div>
      </ul>
      <div className='hidden lg:flex items-center gap-3'>
      <button className='font-inter border-none outline-none text-white text-sm hover:text-[#32AE4C]'>Sign In</button>
        <button className='font-inter bg-[#32AE4C] text-white px-2 py-1 md:py-2 md:px-4 rounded-full text-sm hover:bg-white hover:text-[#142528]'>Sign Up for free</button>
      </div>

      <button 
      onClick={() => setIsOpen(!isOpen)}
      className='block lg:hidden'>
       {!isOpen ? (
         <HiMenuAlt3 className='text-white h-6 w-6 md:h-12 md:w-12' />
       ) :  <IoMdClose className='text-white h-6 w-6 md:h-12 md:w-12' />
       }
       
      </button>
     </div>
     {isOpen && (
      <div className='p-5'>
        <ul className='flex flex-col items-center justify-between gap-4 font-inter'>
        <li className='text-white text-text-sm md:text-2xl hover:text-[#32AE4C]'>Home</li>
        <div className='text-white flex items-center gap-1 hover:text-[#32AE4C]' >
        <li className='text-sm md:text-2xl'>Products
        </li>
        {/* <IoIosArrowDown className='h-4 w-4 md:h-8 md:w-8'/> */}
        </div>
        <div className='text-white flex items-center gap-1 hover:text-[#32AE4C]'>
        <li className='text-sm md:text-2xl'>Developers
        </li>
        {/* <IoIosArrowDown className='h-4 w-4 md:h-8 md:w-8'/> */}
        </div>
        <div className='text-white flex items-center gap-1 hover:text-[#32AE4C]'>
        <li className='text-sm md:text-2xl'>Resources
        </li>
        {/* <IoIosArrowDown className='h-4 w-4 md:h-8 md:w-8'/> */}
        </div>
        <div className='text-white flex items-center gap-1 hover:text-[#32AE4C]'>
        <li className='text-sm md:text-2xl'>Company
        </li>
        {/* <IoIosArrowDown className='h-4 w-4 md:h-8 md:w-8'/> */}
        
        </div>
        <button className='font-inter border text-white text-white px-8 py-2 md:py-2 md:px-20 rounded-full text-xs md:text-2xl '>Sign In</button>
        <button className='font-inter bg-[#32AE4C] text-white px-2 py-2 md:py-2 md:px-8 rounded-full text-xs md:text-2xl hover:bg-white hover:text-[#142528]'>Sign Up for free</button>
      </ul>
     
        </div>
     )}
    </div>
  )
}

export default Navbar

"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '../../public/assets/vantlogo.svg'
import Google from '../../public/assets/goggle.svg';
import App from '../../public/assets/app.svg';
import Store from '../../public/assets/storeimg.svg'
import In from '../../public/assets/in.svg'
import Ig from '../../public/assets/ig.svg'
import X from '../../public/assets/x.svg'
const Footer = () => {
  const [bgImage, setBgImage] = useState('/assets/footerimg.svg')

  return (
    <div
      className='relative px-6 py-8 md:py-10 md:px-16 lg:p-20 '
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundPosition: 'center 100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        transition: 'background-image 1s ease-out',
      }}
    >
      <div className='bg-white flex flex-col lg:flex-row p-5 md:p-10 xl:p-16 justify-between gap-10'>
       
        <div className='flex-1 flex flex-col gap-6'>
          <Image
            src={Logo}
            className='w-[20%] lg:w-[25%] h-auto'
            alt='vant_logo'
          />
          <p className='text-xs md:text-xl lg:text-sm  font-light w-[90%] xl:w-[70%] '>
            Vant is a leading African fintech platform that simplifies both personal and business finances.
          </p>
          <div className="flex justify-center lg:justify-start mt-2 md:mt-5 gap-4">
                    <Image
                      src={Google}
                      className="w-[50%] md:w-[30%] lg:w-[35%] xl:w-[30%] h-auto"
                      alt="playstore_img"
                    />
                    <Image
                      src={App}
                      className="w-[50%] md:w-[30%] lg:w-[35%] xl:w-[30%] h-auto"
                      alt="appstore_img"
                    />
                  </div>
        </div>

        {/* Right Side (Links) */}
        <div className='flex-2 flex flex-col lg:flex-row items-stretch justify-between w-full gap-y-3 gap-x-6'>
          {/* Column 1 */}
          <div className='flex-1 flex flex-col'>
            <p className='font-semibold text-sm md:text-xl lg:text-base'>Company</p>
            <ul className='text-xs md:text-lg lg:text-sm font-light flex flex-col gap-y-2 gap-x-4 py-2 lg:py-4'>
              <li className='cursor-pointer'>About Us</li>
              <li className='cursor-pointer'>Contact Us</li>
              <li className='cursor-pointer'>Blog</li>
              <li className='cursor-pointer'>FAQS</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className='flex-1 flex flex-col'>
            <p className='font-semibold text-sm md:text-xl lg:text-base'>Business</p>
            <ul className='text-xs md:text-lg lg:text-sm font-light flex flex-col gap-y-2 gap-x-4 py-2 lg:py-4'>
              <li className='cursor-pointer'>Business accounts</li>
              <li className='cursor-pointer'>CAC Registration</li>
              <li className='cursor-pointer'>Management tools</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className='flex-1 flex flex-col'>
            <p className='font-semibold text-sm md:text-xl lg:text-base'>Developers</p>
            <ul className='text-xs md:text-lg lg:text-sm font-light flex flex-col gap-y-2 gap-x-4 py-2 lg:py-4'>
              <li className='cursor-pointer'>API Documentation</li>
              <li className='cursor-pointer'>Integrations</li>
              <li className='cursor-pointer'>Status</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className='flex-1 flex flex-col'>
            <p className='font-semibold text-sm md:text-xl lg:text-base'>Legal</p>
            <ul className='text-xs md:text-lg lg:text-sm font-light flex flex-col gap-y-2 gap-x-4 py-2 lg:py-4'>
              <li className='cursor-pointer'>Privacy Policy</li>
              <li className='cursor-pointer'>Terms and Condition</li>
              <li className='cursor-pointer'>Security</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='border-b-1 text-[#CFCFCF]'></div>
      <div className='bg-white px-5 py-5 md:px-10 md:py-8 xl:px-16 xl:py-8 flex flex-col lg:flex-row lg:items-center justify-between gap-y-2'>
        <p className='text-black text-xs md:text-xl lg:text-sm  font-light'>©2025. Vant Inc.      All rights reserved</p>
        <div className='flex items-center gap-6'>
        <Image
            src={In}
            className='w-[5%] md:w-[4%] lg:w-[80%] h-auto'
            alt='linkedin_img'
          />
           <Image
            src={X}
            className='w-[5%] md:w-[4%] lg:w-[80%] h-auto'
            alt='linkedin_img'
          />
           <Image
            src={Ig}
            className='w-[5%] md:w-[4%] lg:w-[80%] h-auto'
            alt='linkedin_img'
          />
        </div>
      </div>
    </div>
  )
}

export default Footer

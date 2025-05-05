"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Store from '../../public/assets/storeimg.svg'
import Google from '../../public/assets/goggle.svg';
import App from '../../public/assets/app.svg';
import Bar from '../../public/assets/barimg.svg'

const SectionOne = () => {
  const [bgImage, setBgImage] = useState('/assets/bg.jpg')
  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundPosition: 'center 100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        transition: 'background-image 1s ease-out',
        // backgroundColor: '#142528',
      }}
    >
      {/* Main content */}
      <div className='flex flex-col gap-5 md:gap-8 lg:gap-7 xl:gap-8 justify-center items-center px-6 py-10 md:py-20 xl:py-32 z-0 '>
        <h1 className='text-center text-2xl md:text-6xl lg:text-6xl xl:text-7xl text-white font-bold leading-snug tracking-wider font-montserrat'>
          Empowering <span className='text-[#32AE4C]'>Growth</span> <br className='hidden md:block' /> for African Businesses
        </h1>
        <p className='text-center text-white text-xs md:text-2xl lg:text-base xl:text-lg font-inter'>
          Power your business growth with multi-currency business account, invoices, <br className='hidden lg:block' /> and bookkeeping
        </p>
        <div className="flex justify-center lg:justify-start mt-2 md:mt-5 gap-4">
                    <Image
                      src={Google}
                      className='w-[40%] md:w-[100%] lg:w-[45%] xl:w-[50%] h-auto'
                      alt="playstore_img"
                    />
                    <Image
                      src={App}
                      className='w-[40%] md:w-[100%] lg:w-[45%] xl:w-[50%] h-auto'
                      alt="appstore_img"
                    />
                  </div>
      </div>
  
      {/* Bottom logo */}
      <div className='flex justify-center items-center'>
        <Image
          src={Bar}
          className='w-[80%] h-auto'
          alt='vant_logo'
        />
      </div>
  
    
    </div>
  )
  
}

export default SectionOne

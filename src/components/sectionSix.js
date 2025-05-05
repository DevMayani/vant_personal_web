import React from 'react'
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import Circle from '../../public/assets/circular.svg'
import Tick from '../../public/assets/tick-circle.svg'
import Map from '../../public/assets/map.svg'
import { FaStar, FaQuoteRight } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import TestimonialCarousel from '../components/testomonialCarousel'


const SectionSix = () => {
  return (
    <div className=" bg-white">
      <div className="px-6 py-8 md:p-16 xl:px-32 xl:py-24 bg-[#FCFCFC]">
    <div className="flex-1 flex flex-col justify-center items-center gap-4 md:gap-6">
        <button className="flex items-center justify-center gap-1 text-[#32AE4C] border border-[#32AE4C] tracking-wider px-2 md:px-4 py-1 md:py-2 lg:py-1 rounded-full text-xs md:text-2xl lg:text-base xl:text-sm ">
          <GoDotFill className="w-3 h-3 md:w-6 md:h-6 lg:w-4 lg:h-4" />
          API Integration
        </button>
        <p className="text-[#202020] text-center font-bold text-sm md:text-3xl lg:text-2xl xl:text-2xl tracking-wider w-[100%] lg:w-[70%] xl:w-[65%]">
        Build custom payments experiences with our structured documented APIs
        </p>
        
      <div className='flex flex-col lg:flex-row items-center  '>
        <div className='flex-1 p-5 md:p-10 lg:p-10'>
        <Image
          src={Circle}
          alt="circular-img"
          className="w-full h-auto object-cover"
        />
        </div>
        <div className='flex-1 flex flex-col px-[4px] py-5 md:py-10 md:px-4 lg:p-10 gap-4 md:gap-8 lg:gap-4 '>
        <div className='flex flex-col gap-2 md:gap-4 lg:gap-4'>
        <Image
          src={Tick}
          alt="circular-img"
          className="w-5 h-5 md:w-8 md:h-8 lg:w-6 lg:h-6 "
        />
          <p className='text-sm md:text-3xl lg:text-lg xl:text-xl font-semibold'>Transfer API</p>
          <p className='text-xs md:text-2xl lg:text-sm w-[80%] font-light text-gray-500'>Automatically transfer money directly to your customers bank accounts.</p>
        </div>
        <div className='flex flex-col gap-2'>
        <Image
          src={Tick}
          alt="circular-img"
          className="w-5 h-5 md:w-8 md:h-8 lg:w-6 lg:h-6 "
        />
          <p className='text-sm md:text-3xl lg:text-lg xl:text-xl font-semibold'>Resolve Account No API</p>
          <p className='text-xs md:text-2xl lg:text-sm w-[80%] font-light text-gray-500'>Verify if the bank account details provided by customers are correct.</p>
        </div>
        <button className="bg-[#32AE4C] text-white px-2 py-2 md:py-4 rounded-full text-xs md:text-2xl lg:text-sm w-[70%] md:w-[50%] lg:w-[55%] xl:w-[45%] mt-4 md:mt-6 lg:mt-10">
      Read Our Documentation
    </button>
        </div>
      </div>
      </div>
    </div>


    <div className='flex flex-col lg:flex-row mt-8 md:mt-20 lg:mt-18 px-6 py-8 md:px-16 md:py-16 xl:px-32 xl:py-24 bg-[#FCFCFC] gap-4 md:gap-10'>
    <div className='flex-1 lg:flex-2 flex flex-col gap-6 '>
    <button className="flex items-center justify-center gap-1 text-[#32AE4C] border border-[#32AE4C] tracking-wider px-2 md:px-4 py-1 md:py-2 lg:py-1 rounded-full text-xs md:text-2xl lg:text-base xl:text-sm w-[35%] lg:w-[33%] xl:w-[25%]">
          <GoDotFill className="w-3 h-3 md:w-6 md:h-6 lg:w-4 lg:h-4" />
          Testimonies
        </button>
        <p className="text-[#202020] font-bold text-sm md:text-3xl lg:text-2xl xl:text-2xl tracking-wider ">
        Discover Why Vant is Their <br className='hidden lg:block' /> Go-To Choice
        </p>
       <div className='mt-4 md:mt-10'>
       <Image src={Map} alt='map-img' priority/>
       </div>
    </div>
    <div className='flex-1 '>
    <div className="bg-green-500 text-white rounded-lg px-6 py-4 md:px-10 md:py-8 lg:px-6 lg:py-8 w-[100%] relative">
          {/* Top bar with stars and quote icon */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-1 text-white text-sm">
              {Array(5).fill(0).map((_, i) => <FaStar key={i} />)}
            </div>
            <FaQuoteRight className="text-lg" />
          </div>
          <p className="text-xs md:text-2xl lg:text-sm">
            I started using Vant a short while ago and I must say saving in Dollars has never been more seamless and easy.
          </p>

         
        </div>
   <TestimonialCarousel />
    </div>
    </div>
   
    </div>
  )
}

export default SectionSix

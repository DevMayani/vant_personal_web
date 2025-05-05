"use client";
import React from 'react';
import Carousel from './carousel';
import Image from 'next/image';
import { GoDotFill } from "react-icons/go";
import Faqlist from '../components/faqlists'


const Faq = () => {
  return (
    <div className='px-6 pt-2 pb-6 md:px-16 md:pt-6 md:pb-12 lg:pt-8 lg:pb-12 xl:px-32 xl:pt-12 xl:pb-14 bg-white relative '>
      <div className='flex flex-col lg:flex-row py-10 lg:py-20 gap-y-6 md:gap-y-8'>
        <div className='flex-1 flex flex-col gap-4'>
        <button className="flex items-center justify-center gap-1 text-[#32AE4C] border border-[#32AE4C] tracking-wider px-2 lg:px-4 py-1 md:py-2 lg:py-1 rounded-full text-xs md:text-2xl lg:text-base xl:text-sm w-[40%] lg:w-[20%] xl:w-[18%]">
          <GoDotFill className="w-3 h-3 md:w-6 md:h-6 lg:w-4 lg:h-4" />
          FAQ
        </button>
          <p className="text-[#202020] text-start font-bold text-sm md:text-3xl lg:text-2xl xl:text-2xl tracking-wider">Frequently Asked <br className='hidden lg:block'/> Questions</p>
          <p className="font-inter text-xs md:text-2xl lg:text-base xl:text-sm text-start text-gray-400">Explore our frequently asked questions to learn more about Vant’s features, security, integration capabilities, and more</p>
        </div>
        <div className='flex-1'>
          <Faqlist />
        </div>
      </div>
     <Carousel />
    </div>
  );
};

export default Faq;

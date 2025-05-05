"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { GoDotFill } from "react-icons/go";
import Grouptwo from '../../public/assets/grouptwo.svg'
import Arrow from '../../public/assets/arrowhite.svg'
import Savetarget from '../../public/assets/savetarget.svg'
import Dollar from '../../public/assets/dollar.svg'
import Shane from '../../public/assets/shane.svg'
import Cam from '../../public/assets/cam.svg'
import Prof from '../../public/assets/prof.svg'
import FeatureCard from './featuredCard';

const SectionThree = () => {
  const [bgImageOne, setBgImageOne] = useState('/assets/dark.svg')
  const [bgImageTwo, setBgImageTwo] = useState('/assets/green.svg')
  const [bgImageThree, setBgImageThree] = useState('/assets/greenet.svg')
  return (
    <div className='px-6 py-8 md:px-16 md:py-28 lg:px-16 py-16 xl:px-32 xl:py-32'>
      <div className='flex flex-col items-center justify-center gap-4 md:gap-8 lg:gap-6'>
        <button className="flex items-center justify-center gap-1 text-[#32AE4C] border border-[#32AE4C]  tracking-wider px-2 md:px-4 py-1 md:py-2 lg:py-1 rounded-full text-xs md:text-2xl lg:text-base xl:text-sm">
          <GoDotFill className="w-3 h-3 md:w-6 md:h-6 lg:w-4 lg:h-4" />
          <p className='whitespace-now-rap'> Features & Services</p>
         
        </button>
        <p className="text-[#202020] text-center font-bold text-sm md:text-3xl lg:text-2xl xl:text-2xl tracking-wider">
          An All-in-One Finance Ecosystem Built <br /> for Individuals and Businesses
        </p>
        <p className="font-inter text-xs md:text-2xl lg:text-base xl:text-sm text-center text-gray-400">
          A Unified Platform for Personal and Business Success
        </p>
      </div>
      
      <div className='flex flex-col gap-y-4 md:gap-y-10 lg:gap-y-0'>


   
      <div className='flex flex-col lg:flex-row mt-8 py-0 lg:py-2  gap-4 md:gap-8 lg:gap-4'>
       
        <div className='flex-1 lg:flex-3 relative rounded-3xl py-5 px-[16px] md:p-10 lg:p-10 lg:px-6'  style={{
        backgroundImage: `url('${bgImageOne}')`,
        backgroundPosition: 'center 100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        transition: 'background-image 1s ease-out',
      }}>
        <div className='flex justify-center items-center '>
        <Image src={Cam} alt='group-img' className='w-[70%] lg:w-[50%] lg:h-[27vh] xl:h-[27vh]' />
        </div>

        <div className='text-white flex flex-col gap-4 lg:gap-0 pt-6 pb-2 md:pb-4 md:pt-10 lg:pt-8 lg:pb-0 '>
          <p className='text-xl md:text-3xl lg:text-2xl xl:text-3xl leading-tight md:leading-snug lg:h-[13vh] xl:h-[9vh] lg:w-[70%]'>Virtual Dollar & Naira Expense Cards</p>
          <p className='text-sm md:text-2xl lg:text-base xl:text-sm w-[100%] lg:h-[17vh] xl:h-[8vh] lg:w-[60%] '>Generate well-structured invoices that include tax, due dates, and payment details.</p>
         <div className='flex items-center gap-2 md:gap-4 lg:gap-3 lg:mt-4 xl:mt-1'>
         <button className='border-none text-xs md:text-2xl lg:text-base xl:text-sm font-bold '>Get Started Now</button>
          <Image src={Arrow} alt='arrow-img'  className="h-4 w-4 md:h-7 md:w-7 lg:h-6 lg:w-6"/>
         </div>
        </div>
        </div>

        
        <div className='flex-1 lg:flex-2 relative rounded-3xl py-8 md:py-18 lg:py-10'
         style={{
          backgroundImage: `url('${bgImageTwo}')`,
          backgroundPosition: 'center 100%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          transition: 'background-image 1s ease-out',
        }}>
          <div className='flex justify-end items-center lg:items-end '>
          <Image src={Savetarget} alt='group-img' className='w-[80%] lg:h-[27vh] xl:h-[27vh]' />
        </div>
        <div className='text-white flex flex-col gap-4 lg:gap-0 px-5 md:px-10 lg:px-6 pt-6 pb-0 md:pb-0 md:pt-10 pt-8 lg:pb-0'>
          <p className='text-xl md:text-3xl lg:text-2xl xl:text-3xl leading-tight md:leading-snug lg:h-[13vh] xl:h-[9vh]  lg:w-[80%] xl:w-[85%]'>Save, Transfer and Invest</p>
          <p className='text-sm md:text-2xl lg:text-base xl:text-sm w-[100%] lg:h-[17vh] xl:h-[8vh] lg:w-[90%] xl:w-[85%]'>Whether you prepare for the future or not, it doesn’t prevent the future from evolving. Get intentional about your personal finances</p>
          <div className='flex items-center gap-2 md:gap-4 lg:gap-3 lg:mt-4 xl:mt-1'>
         <button className='border-none text-xs md:text-2xl lg:text-base xl:text-sm font-bold '>Get Started Now</button>
          <Image src={Arrow} alt='arrow-img'  className="h-4 w-4 md:h-7 md:w-7 lg:h-6 lg:w-6"/>
         </div>
        </div>
         
        </div>
      </div>



 
      <div className='flex flex-col lg:flex-row-reverse mt-0 lg:mt-8 py-0 lg:py-2  gap-4 md:gap-8 lg:gap-4 '>
       
       <div className='flex-1 lg:flex-3 relative rounded-3xl py-5 px-[16px] md:p-10 lg:p-10 lg:px-6'  style={{
       backgroundImage: `url('${bgImageOne}')`,
       backgroundPosition: 'center 100%',
       backgroundSize: 'cover',
       backgroundRepeat: 'no-repeat',
       transition: 'background-image 1s ease-out',
     }}>
       <div className='flex justify-center items-center'>
       <Image src={Shane} alt='group-img' className='w-[70%] lg:w-[50%] lg:h-[27vh] xl:h-[27vh]' />
       </div>

       <div className='text-white flex flex-col gap-4 lg:gap-0 pt-6 pb-2 md:pb-4 md:pt-10 lg:pt-8 lg:pb-0 '>
         <p className=' text-xl md:text-3xl lg:text-2xl xl:text-3xl leading-tight md:leading-snug lg:h-[13vh] xl:h-[8vh] lg:w-[70%]'>Book Keeping</p>
         <p className='text-sm md:text-2xl lg:text-base xl:text-sm w-[100%] lg:w-[70%] lg:h-[20vh] xl:h-[8vh] lg:w-[60%] '> Keep track of cash flow, expenses, and profits effortlessly with smart bookkeeping built for growing businesses.</p>
        <div className='flex items-center gap-2 md:gap-4 lg:gap-3 lg:mt-2 xl:mt-1'>
        <button className='border-none text-xs md:text-2xl lg:text-base xl:text-sm font-bold '>Get Started Now</button>
         <Image src={Arrow} alt='arrow-img'  className="h-4 w-4 md:h-7 md:w-7 lg:h-6 lg:w-6"/>
        </div>
       </div>
       </div>

       
       <div className='flex-1 lg:flex-2 relative rounded-3xl py-8 md:py-18 lg:py-10'
        style={{
         backgroundImage: `url('${bgImageTwo}')`,
         backgroundPosition: 'center 100%',
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
         transition: 'background-image 1s ease-out',
       }}>
         <div className='flex justify-center items-center lg:items-end '>
         <Image src={Prof} alt='group-img' className='w-[80%] lg:h-[27vh] xl:h-[27vh]' />
       </div>
       <div className='text-white flex flex-col gap-4 lg:gap-0 px-5 md:px-10 lg:px-6 pt-6 pb-0 md:pb-0 md:pt-10 lg:pt-8 lg:pb-0'>
         <p className=' text-xl md:text-3xl lg:text-2xl xl:text-3xl leading-tight md:leading-snug lg:h-[13vh] xl:h-[8vh] lg:w-[80%] xl:w-[85%]'>Invoicing & Payments</p>
         <p className='text-sm md:text-2xl lg:text-base xl:text-sm w-[100%] lg:h-[20vh] xl:h-[8vh] llg:w-[90%] xl:w-[85%]'>Generate well-structured invoices that include tax, due dates, and payment details.</p>
        <div className='flex items-center gap-2 md:gap-4 lg:gap-3 lg:mt-2 xl:mt-1'>
        <button className='border-none text-xs md:text-2xl lg:text-base xl:text-sm font-bold '>Get Started Now</button>
         <Image src={Arrow} alt='arrow-img'  className="h-4 w-4 md:h-7 md:w-7 lg:h-6 lg:w-6"/>
        </div>
       </div>
        
       </div>
     </div>



      <div className='flex flex-col lg:flex-row mt-0 lg:mt-8 py-0 lg:py-2  gap-4 md:gap-8 lg:gap-4 '>
       
        <div className='flex-1 lg:flex-3 relative rounded-3xl py-5 px-[16px] md:p-10 lg:p-10 lg:px-6'  style={{
        backgroundImage: `url('${bgImageOne}')`,
        backgroundPosition: 'center 100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        transition: 'background-image 1s ease-out',
      }}>
        <div className='flex justify-center items-center  '>
        <Image src={Grouptwo} alt='group-img' className='w-[70%] lg:w-[50%] lg:h-[27vh] xl:h-[27vh]' />
        </div>

        <div className='text-white flex flex-col gap-4 lg:gap-0 pt-6 pb-2 md:pb-4 md:pt-10 lg:pt-8 lg:pb-0 '>
          <p className='text-xl md:text-3xl lg:text-2xl xl:text-3xl leading-tight md:leading-snug lg:h-[13vh] xl:h-[8vh] lg:w-[70%] xl:w-[50%]'>Bulk Payout Solutions</p>
          <p className='text-sm md:text-2xl lg:text-base xl:text-sm w-[100%] lg:w-[70%] lg:h-[20vh] xl:h-[8vh] lg:w-[60%] '>Send payments to multiple recipients at once with ease. Our bulk payout system is fast, secure, and perfect for payroll, vendor payments, and large disbursements..</p>
         <div className='flex items-center gap-2 md:gap-4 lg:gap-3 lg:mt-2 xl:mt-1'>
         <button className='border-none text-xs md:text-2xl lg:text-base xl:text-sm font-bold '>Get Started Now</button>
          <Image src={Arrow} alt='arrow-img'  className="h-4 w-4 md:h-7 md:w-7 lg:h-6 lg:w-6"/>
         </div>
        </div>
        </div>

        
        <div className='flex-1 lg:flex-2 relative rounded-3xl py-8 md:py-18 lg:py-10'
         style={{
          backgroundImage: `url('${bgImageTwo}')`,
          backgroundPosition: 'center 100%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          transition: 'background-image 1s ease-out',
        }}>
          <div className='flex justify-end items-center lg:items-end '>
          <Image src={Dollar} alt='group-img' className='w-[80%] lg:h-[27vh] xl:h-[27vh]' />
        </div>
        <div className='text-white flex flex-col gap-4 lg:gap-0 px-5 md:px-10 lg:px-6 pt-6 pb-0 md:pb-0 md:pt-10 lg:pt-8 lg:pb-0'>
          <p className=' text-xl md:text-3xl lg:text-2xl xl:text-3xl leading-tight md:leading-snug lg:h-[13vh] xl:h-[8vh] lg:w-[80%] xl:w-[85%] '>Store & Inventory</p>
          <p className='text-sm md:text-2xl lg:text-base xl:text-sm w-[100%] lg:h-[20vh] xl:h-[8vh] lg:w-[90%] xl:w-[90%]'>Take control of your inventory management and turn what was once a challenging task into a strategic advantage for your business. </p>
         <div className='flex items-center gap-2 md:gap-4 lg:gap-3 lg:mt-2 xl:mt-1'>
         <button className='border-none text-xs md:text-2xl lg:text-base xl:text-sm font-bold '>Get Started Now</button>
          <Image src={Arrow} alt='arrow-img'  className="h-4 w-4 md:h-7 md:w-7 lg:h-6 lg:w-6"/>
         </div>
        </div>
         
        </div>
      </div>

     
      </div>

    </div>
  );
}

export default SectionThree;

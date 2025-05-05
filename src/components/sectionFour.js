import React from 'react'
import Image from 'next/image'
import User from '../../public/assets/user.svg'
import Profile from '../../public/assets/profile.svg'
import Verify from '../../public/assets/verify.svg'
import Card from '../../public/assets/card-coin.svg'
import Status from '../../public/assets/status-up.svg'

const steps = [
  {
    pics:Profile,
    title: "Sign Up",
    description: "Create a business account in minutes.",
  },
  {
    pics:Verify,
    title: "Verify your Business",
    description: "Upload necessary details.",
  },
  {
    pics:Card,
    title: "Start Transacting",
    description: "Send invoices, make payments, and access financial tools.",
  },
  {
    pics:Status,
    title: "Grow Your Business",
    description: "Get insights, loans, and advanced payment solutions.",
  },
];

const SectionFour = () => {
  return (
    <div className='bg-[#FCFCFC] px-6 py-5 md:px-16 md:py-10 flex flex-col lg:flex-row gap-y-6 md:gap-y-10 lg:gap-x-10 xl:gap-x-0'>
      <div className='flex-1  flex lg:justify-center items-center '>
        <Image src={User} alt='user-image' className='w-full lg:w-auto' />
      </div>
      <div className='flex-1 lg:px-0'>
        <p className='text-sm md:text-3xl lg:text-2xl xl:text-2xl font-bold py-5 md:py-10 lg:py-10'>How it works</p>
        <div className='flex flex-col gap-2 md:gap-6`'>
          {steps.map((step, index) => (
            <div key={index} className='flex gap-4 '>
              <div className='flex flex-col items-center'>
                <Image src={step.pics} alt='profile-image' className='h-6 w-6 md:h-12 md:w-12 lg:h-8 lg:w-8' />
                {index !== steps.length - 1 && ( // Don't show line after the last step
                  <div className="border-l-1 border-[#32AE4C] h-12 md:h-20 lg:h-16"></div>
                )}
              </div>
              <div className='flex flex-col gap-1 md:gap-3 lg:gap-2'>
                <p className='text-sm md:text-3xl lg:text-xl font-semibold'>{step.title}</p>
                <p className='text-xs md:text-2xl lg:text-sm xl:text-base text-gray-500'>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SectionFour

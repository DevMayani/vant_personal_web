// components/FeatureCard.jsx
"use client"
import Image from 'next/image'
import Grouptwo from '../../public/assets/grouptwo.svg'
import Arrow from '../../public/assets/arrowhite.svg'
import Savetarget from '../../public/assets/savetarget.svg'
import Dollar from '../../public/assets/dollar.svg'

const FeatureCard = ({
  bgImage,
  image,
  heading,
  subtext,
  isLarge = false, // if true, uses lg:flex-3; else lg:flex-2
  align = 'center', // 'center' or 'end'
}) => {
  return (
    <div
      className={`flex-1 ${isLarge ? 'lg:flex-3' : 'lg:flex-2'} relative rounded-3xl py-8 md:py-18 lg:py-10`}
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundPosition: 'center 100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        transition: 'background-image 1s ease-out',
      }}
    >
      <div
        className={`bg-red-400 flex justify-${align} items-${
          align === 'center' ? 'center' : 'end'
        } ${!isLarge ? 'lg:h-[27vh] xl:h-[27vh]' : ''}`}
      >
        <Image
          src={image}
          alt='feature-img'
          className={`${
            !isLarge ? 'w-[80%]' : 'lg:h-[27vh] xl:h-[27vh] w-[70%] lg:w-[50%]'
          } h-auto`}
        />
      </div>

      <div className='text-white flex flex-col gap-4 lg:gap-0 px-5 md:px-10 lg:px-6 pt-6 md:pt-10 lg:pt-14 pb-0'>
        <p className='text-xl md:text-3xl lg:text-2xl xl:text-3xl leading-tight md:leading-snug lg:h-[13vh] xl:h-[12vh] lg:w-[70%]'>
          {heading}
        </p>
        <p className='text-sm md:text-2xl lg:text-base xl:text-sm w-full xl:w-[90%] lg:h-[17vh] xl:h-[8vh]'>
          {subtext}
        </p>
        <div className='flex items-center gap-2 md:gap-4 lg:gap-3'>
          <button className='border-none text-xs md:text-2xl lg:text-base xl:text-sm font-bold'>
            Get Started Now
          </button>
          <Image src={Arrow} alt='arrow-img' className='h-4 w-4 md:h-7 md:w-7 lg:h-6 lg:w-6' />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;

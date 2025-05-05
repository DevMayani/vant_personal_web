"use client";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import Google from '../../public/assets/goggle.svg';
import App from '../../public/assets/app.svg';
import iPhone from '../../public/assets/iphone.svg';

const slides = [
  
  {
    id: 1,
    title: "Download Vant for business today",
    bgImage: '/assets/bg.jpg',
  },
  {
    id: 2,
    title: "Manage Your Finance Seamlessly",
    bgImage: '/assets/bg.jpg',
  },
];

const Carousel = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{
          el: '.custom-pagination',
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} w-3 h-3 mx-1 rounded-full block bg-white opacity-70 swiper-pagination-bullet-active:bg-[#142528] swiper-pagination-bullet-active:opacity-100"></span>`;
          },
        }}
        className="rounded-4xl"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative rounded-4xl"
              style={{
                backgroundImage: `url('${slide.bgImage}')`,
                backgroundPosition: 'center 100%',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#142528',
              }}
            >
              <div className="flex flex-col lg:flex-row">
                <div className="flex-1 px-10 py-8 md:py-10 lg:p-20">
                  <p className="text-center lg:text-start text-xl md:text-5xl lg:text-2xl xl:text-4xl text-white font-bold leading-snug tracking-wider font-inter">
                    {slide.title}
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
                <div className="flex-1 lg:pt-10 flex justify-center">
                  <Image
                    src={iPhone}
                    className="w-[50%] h-auto"
                    alt="iphone_img"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination outside */}
      <div className="custom-pagination flex justify-center gap-2 mt-8"></div>
    </div>
  );
};

export default Carousel;

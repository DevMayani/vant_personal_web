"use client";
import Image from "next/image";
import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import Ladyframe from "../../public/assets/ladyframe.svg";
import Banknote from "../../public/assets/banknotes.svg";
import Circlestack from "../../public/assets/circle-stack.svg";
import ThreeD from "../../public/assets/3dcube.svg";
import profile1 from "../../public/assets/profileone.svg";
import profile2 from "../../public/assets/profiletwo.svg";
import profile3 from "../../public/assets/profilethree.svg";
import profile4 from "../../public/assets/profilefour.svg";
import profile5 from "../../public/assets/profilefive.svg";

const features = [
  {
    icon: Banknote,
    title: "Easy Integration",
    description:
      "Quickly send payment links via email, text, or social media—no website or shopping cart needed.",
  },
  {
    icon: Circlestack,
    title: "Invoicing Made Simple",
    description:
      "Easily generate links for recurring payments or one-time invoices, improving cash flow and reducing payment delays.",
  },
  {
    icon: ThreeD,
    title: "Secure Transactions",
    description:
      "Built-in fraud protection features ensure secure transactions and minimize chargebacks.",
  },
];

const SectionFive = () => {
  const [bgImage, setBgImage] = useState("/assets/bg.jpg");
  return (
    <div className="px-6 py-10 md:p-16 xl:p-32 bg-white">
      <div className="flex-1 flex flex-col justify-center items-center gap-4 md:gap-6">
        <button className="flex items-center justify-center gap-1 text-[#32AE4C] border border-[#32AE4C] tracking-wider px-2 md:px-4 py-1 md:py-2 lg:py-1 rounded-full text-xs md:text-2xl lg:text-base xl:text-sm ">
          <GoDotFill className="w-3 h-3 md:w-6 md:h-6 lg:w-4 lg:h-4" />
          Introducing
        </button>
        <p className="text-[#202020] text-center font-bold text-sm md:text-3xl lg:text-2xl xl:text-2xl tracking-wider">
          Introducing Payment Links & QR <br className="hidden lg:block" /> Code
          Payments
        </p>
        <p className="font-inter text-xs md:text-2xl lg:text-base xl:text-sm text-center text-gray-400 w-[100%] lg:w-[70%] xl:w-[60%]">
          Our Payment Links and QR Code Payment services empower businesses of
          all sizes to accept payments easily, securely, and cost-effectively.
        </p>
        <Image
          src={Ladyframe}
          alt="ladyframe-img"
          className="w-full h-auto object-cover rounded-xl md:rounded-3xl lg:rounded-xl"
        />
      </div>

      <div className="flex flex-col lg:flex-row py-5 md:py-10 gap-y-4 md:gap-y-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2 md:gap-4 lg:gap-3">
            <Image
              src={feature.icon}
              alt={`${feature.title}-icon`}
              className="w-4 h-4 md:h-8 md:w-8 lg:h-6 lg:w-6"
            />
            <div className="flex flex-col gap-1 md:gap-2">
              <p className="font-bold text-sm md:text-2xl lg:text-lg xl:text-xl">
                {feature.title}
              </p>
              <p className="text-gray-500 text-xs md:text-xl lg:text-sm lg:w-[80%]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
  className="relative h-[40vh] md:h-[60vh]  px-5 py-14 md:py-28 lg:p-20 rounded-2xl overflow-hidden mt-10"
  style={{
    backgroundImage: `url('${bgImage}')`,
    backgroundPosition: "center 100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    transition: "background-image 1s ease-out",
    backgroundColor: "#142528",
  }}
>
  {/* Floating Images on Half Circle */}
  <div className="absolute w-full h-full top-0 left-0 pointer-events-none">
    <div className="relative w-full h-full">
      {/* Leftmost */}
      <Image src={profile1} alt="Profile 1" className="absolute top-[8%]  md:top-[20%] left-[6%] md:left-[2%] w-6 h-6 md:w-14 md:h-14 rounded-full object-cover" />
      {/* Left-middle */}
      <Image src={profile2} alt="Profile 2" className="absolute top-[55%] left-[14%] w-6 h-6  md:w-14 md:h-14 rounded-full object-cover" />
      {/* Center */}
      <Image src={profile3} alt="Profile 3" className="absolute top-[85%] left-[46%] lg:left-[46%] transform-translate-x-1/2 w-6 h-6  md:w-14 md:h-14 md:h-8 rounded-full object-cover" />
      {/* Right-middle */}
      <Image src={profile4} alt="Profile 4" className="absolute top-[55%] right-[10%] w-6 h-6 md:w-14 md:h-14 rounded-full object-cover" />
      {/* Rightmost */}
      <Image src={profile5} alt="Profile 5" className="absolute top-[8%]  md:top-[20%] right-[7%] md:right-[2%] w-6 h-6  md:w-14 md:h-14 rounded-full object-cover" />
    </div>
  </div>

  {/* Center Content */}
  <div className="flex flex-col gap-6 items-center justify-center text-white relative z-10 ">
    <p className="text-white text-xl md:text-4xl lg:text-2xl xl:text-3xl text-center">
      Join our <span className="text-[#32AE4C]">Vant</span> community
    </p>
    <p className="text-xs md:text-xl lg:text-sm xl:text-base w-[90%] lg:w-[60%] xl:w-[50%] text-center">
      We have a whatsapp channel for our users to join for Updates, News, and latest from Vant...
    </p>
    <button className="bg-[#32AE4C] px-4 py-2 md:py-3 md:px-8 rounded-full text-xs md:text-xl lg:text-sm xl:text-base">
      Join Now
    </button>
  </div>
</div>



    </div>
  );
};

export default SectionFive;

"use client"
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import LagosLogo from "../../public/assets/lagos.svg";
import WemaLogo from "../../public/assets/wema.svg";
import ProvLogo from "../../public/assets/prov.svg";
import VfdLogo from "../../public/assets/vfd.svg";
import OrangeLogo from "../../public/assets/orange.svg";
import HngrLogo from "../../public/assets/hngr.svg";
import AwsLogo from "../../public/assets/aws.svg";
import SafaLogo from "../../public/assets/safa.svg";
import HubLogo from "../../public/assets/hub.svg";
import WipoLogo from "../../public/assets/wipo.svg";
import PaystackLogo from "../../public/assets/paystack.svg";
import OpenaiLogo from "../../public/assets/openai.svg";
import NitdaLogo from "../../public/assets/nitda.svg";
import LseLogo from "../../public/assets/lse.svg";
import AzureLogo from "../../public/assets/azure.svg";
import Chart from "../../public/assets/chart.svg";


const SectionTwo = () => {

  const scrollRef = useRef(null);
const [thumbTop, setThumbTop] = useState(0);
const [thumbHeight, setThumbHeight] = useState(0);

useEffect(() => {
  const container = scrollRef.current;
  if (!container) return;

  const handleScroll = () => {
    const scrollRatio =
      container.scrollTop / (container.scrollHeight - container.clientHeight);
    const newThumbHeight =
      container.clientHeight * (container.clientHeight / container.scrollHeight);
    setThumbHeight(newThumbHeight);
    setThumbTop(scrollRatio * (container.clientHeight - newThumbHeight));
  };

  handleScroll(); // Initialize thumb on mount
  container.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);

  return () => {
    container.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", handleScroll);
  };
}, []);
  
  const details = [
    {
      id: 1,
      label: "Seamless Invoicing & Payments",
      desc: "Our comprehensive selection of medications, supplements, and healthcare products.",
    },
    {
      id: 2,
      label: "Bulk Payment Solutions",
      desc: "From advanced imaging technology such as MRI and CT scanners to precision surgical tools.",
    },
    {
      id: 3,
      label: "Business Loans & Credit Facilities",
      desc: "We're committed to leveraging the latest innovations in medical technology.",
    },
    {
      id: 4,
      label: "Business Loans & Credit Facilities",
      desc: "We're committed to leveraging the latest innovations in medical technology.",
    },
    {
      id: 5,
      label: "Business Loans & Credit Facilities",
      desc: "We're committed to leveraging the latest innovations in medical technology.",
    },
  ];
  const patners = [
    {
      id: 1,
      img: LagosLogo,
    },
    {
      id: 2,
      img: WemaLogo,
    },
    {
      id: 3,
      img: ProvLogo,
    },
    {
      id: 4,
      img: VfdLogo,
    },
    {
      id: 5,
      img: OrangeLogo,
    },
    {
      id: 6,
      img: HngrLogo,
    },
    {
      id: 7,
      img: AwsLogo,
    },
    {
      id: 8,
      img: SafaLogo,
    },
    {
      id: 9,
      img: HubLogo,
    },
    {
      id: 10,
      img: WipoLogo,
    },
    {
      id: 11,
      img: PaystackLogo,
    },
    {
      id: 12,
      img: OpenaiLogo,
    },
    {
      id: 13,
      img: NitdaLogo,
    },
    {
      id: 14,
      img: LseLogo,
    },
    {
      id: 15,
      img: AzureLogo,
    },
  ];



  return (
    <div className="relative -mt-18 md:-mt-36 lg:-mt-50 xl:-mt-64 z-10 w-full px-[4px] py-5 lg:p-10 bg-white rounded-4xl shadow-lg">
      <div className="p-5 md:p-20 flex flex-col gap-4 md:gap-8">
        <p className="font-semibold text-lg md:text-4xl lg:text-3xl text-center">
          Our Recent Clients & Partners
        </p>
        <div className="grid grid-cols-4 lg:grid-cols-8 gap-2  xl:gap-4">
          {patners.map((datum, index) => (
            <div
              key={index}
              className="w-full aspect-square flex items-center justify-center"
            >
              <Image
                src={datum.img}
                alt="patrners-logo"
                className="w-[100%] h-full object-contain"
              />
            </div>
          ))}
        </div>

        <p className="text-xs md:text-2xl lg:text-base xl:text-lg text-center text-gray-400">
          Join 4,000+ companies already growing
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch gap-4 md:gap-12 lg:gap-4 px-5 py-2 md:px-16 lg:px-16 py-8 xl:px-32 xl:py-16">
        <div className="flex-1 lg:min-h-[60vh] flex">
          <Image
            src="/assets/chart.svg"
            width={1000}
            height={1000}
            alt="chart-logo"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex-1 lg:min-h-[60vh] flex flex-col p-4">
          <div className="flex items-center justify-center lg:justify-start ">
            <button className="flex items-center justify-center gap-1 text-[#32AE4C] border border-[#32AE4C]  tracking-wider px-2 md:px-4 py-1 md:py-2 lg:py-1 rounded-full text-xs md:text-2xl lg:text-base xl:text-sm">
              <GoDotFill className="w-3 h-3 md:w-6 md:h-6 lg:w-4 lg:h-4" />
              <p className="whitespace-now-rap">Key Features Overview</p>
            </button>
          </div>

          <p className="font-semibold text-center lg:text-start mt-2 md:mt-4 text-sm md:text-4xl lg:text-2xl xl:text-3xl">
            All your money needs in <br className="hidden lg:block" /> one app
          </p>

          <div className="flex gap-1 max-h-[250px] md:max-h-[400px] lg:max-h-[250px] xl:max-h-[400px] pt-5 md:pt-10 lg:pt-2">
{/* scroller */}
  <div className="relative w-2 md:w-3 lg:w-2 mr-2 my-4 bg-gray-300 rounded-xl overflow-hidden">
    <div
      className="absolute w-full bg-[#32AE4C] rounded-xl transition-all duration-100"
      style={{
        height: `${thumbHeight}px`,
        top: `${thumbTop}px`,
      }}
    ></div>
  </div>

  {/* Scrollable content */}
  <div
    ref={scrollRef}
    className="flex flex-col gap-2 md:gap-4 lg:gap-2 py-4 flex-1 overflow-y-scroll pr-2"
    style={{
      scrollbarWidth: "none", // Firefox
      msOverflowStyle: "none", // IE
    }}
  >
    <style jsx>{`
      div::-webkit-scrollbar {
        display: none;
      }
    `}</style>

    {details.map((item, index) => (
      <div
        key={item.id}
        className={`px-4 py-4 md:py-6 lg:py-4 rounded-xl flex flex-col gap-2 ${
          index === 0 ? "bg-[#EBF7ED]" : "border border-gray-400"
        }`}
      >
        <p className="text-xs md:text-2xl lg:text-base font-bold font-inter text-[#4B7453]">
          {item.label}
        </p>
        <p className="text-xs md:text-xl lg:text-sm xl:text-base text-[#4B7453] font-inter">
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</div>




        </div>
      </div>
    </div>
  );
};

export default SectionTwo;

import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import Founder from '../../public/assets/founder.svg';
import Calender from '../../public/assets/calender.svg';
import Clock from '../../public/assets/clock.svg';
import Arrow from '../../public/assets/arrow.svg';
import Fintech from '../../public/assets/fintech.svg';
import Lady from '../../public/assets/bloglady.svg';

const blogInfo = [
  {
    pics: Founder,
    label: "Innovation",
    title: "Vant Founder, Akolade Unveils Vision To Revolutionize Personal Finance In Nigeria",
    description: "Create a business account in minutes.",
    date: "April 26, 2025",
    minRead: "5 min read",
  },
  {
    pics: Fintech,
    label: "Innovation",
    title: "Vant Founder, Akolade Unveils Vision To Revolutionize Personal Finance In Nigeria",
    description: "Create a business account in minutes.",
    date: "April 25, 2025",
    minRead: "4 min read",
  },
  {
    pics: Lady,
    label: "Innovation",
    title: "Vant Founder, Akolade Unveils Vision To Revolutionize Personal Finance In Nigeria",
    description: "Create a business account in minutes.",
    date: "April 24, 2025",
    minRead: "6 min read",
  },
];

const Blog = () => {
  return (
    <div className="px-[4px] py-2 pb-8 pt-10 md:px-12 md:pb-12 md:pt-20 lg:pb-8 lg:pt-20 xl:px-32 xl:pt-24 xl:pt-12">
      {/* Header */}
      <div className="flex-1 flex flex-col justify-center items-center gap-4 md:gap-6 px-2">
        <button className="flex items-center justify-center gap-1 text-[#32AE4C] border border-[#32AE4C] tracking-wider px-2 md:px-4 py-1 md:py-2 lg:py-1 rounded-full text-xs md:text-2xl lg:text-base xl:text-sm ">
          <GoDotFill className="w-3 h-3 md:w-6 md:h-6 lg:w-4 lg:h-4" />
          News Update
        </button>
        <p className="text-[#202020] text-center font-bold text-sm md:text-3xl lg:text-2xl xl:text-2xl tracking-wider w-[100%] lg:w-[70%] xl:w-[65%]">
          Explore news from Vant Africa
        </p>
        <p className="font-inter text-xs md:text-2xl lg:text-base xl:text-sm text-center text-gray-400 w-[100%] lg:w-[70%] xl:w-[60%]">
          ​Vant Africa has been featured in several notable publications and initiatives, highlighting its impact and contributions across various sectors:​
        </p>
      </div>

      {/* Blog Cards */}
      <div className="mt-10 flex flex-col lg:flex-row gap-6">
        {blogInfo.map((item, index) => (
          <div key={index} className="flex-1 bg-white rounded-lg  p-5 flex flex-col gap-4 hover:shadow-2xl">
            <Image 
              src={item.pics} 
              alt={`${item.label} image`} 
              className="w-full h-auto object-cover rounded-md"
            />
            <div className="flex flex-col gap-2">
            <button className="bg-[#D5DAF9] px-3 py-1 text-[#2E47E3] font-semibold text-xs md:text-xl lg:text-sm rounded-md self-start">
  {item.label}
</button>


              <div className="flex items-center justify-between text-gray-400 text-xs md:text-sm mt-2">
                <div className="flex items-center gap-1 md:gap-2">
                  <Image src={Calender} alt="calendar-img"  className="h-3 w-3 md:h-5 md:w-5 lg:h-4 lg:w-4"/>
                <span className="text-xs md:text-xl lg:text-sm text-[#3F3F3F]">{item.date}</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <Image src={Clock} alt="clock-img"  className="h-3 w-3 md:h-6 md:w-6 lg:h-4 lg:w-4"/>
                  <span className="text-xs md:text-xl lg:text-sm text-[#3F3F3F]">{item.minRead}</span>
                </div>
               
              </div>
              <h2 className="text-[#202020] font-semibold text-sm md:text-2xl lg:text-lg xl:text-xl">
                {item.title}
              </h2>
              <div className="flex items-center gap-1 md:gap-2">
              <p className="text-[#32AE4C] text-xs md:text-2xl lg:text-sm">
              Read More
              </p>
                  <Image src={Arrow} alt="arrow-img"  className="h-3 w-3 md:h-6 md:w-6 lg:h-4 lg:w-4"/>
                </div>
              
            
            </div>
          </div>
        ))}
      </div>
      {/* View More Button */}
<div className="flex justify-center mt-10">
  <button className="font-inter font-semibold bg-[#32AE4C] hover:bg-[#27913c] transition-colors text-white px-6 py-3 rounded-full text-sm md:text-2xl lg:text-lg">
    View All Blog
  </button>
</div>
    </div>
  );
}

export default Blog;

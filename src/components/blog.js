"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import Calender from "../../public/assets/calender.svg";
import Clock from "../../public/assets/clock.svg";
import Arrow from "../../public/assets/arrow.svg";
import { fetchBlogs } from "../../sanity/lib/fetchBlog";
import Link from "next/link";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs()
      .then((data) => {
        console.log("Fetched blogs:", data);
        setBlogs(data);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  }, []);

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
    <div className="px-[4px] py-2 ...">
      <div className="mt-10 grid lg:grid-cols-3 gap-6 flex-wrap">
        {blogs?.slice(0,6).map((item, index) => (
          <div
            key={item?._id}
            className="flex-1 bg-white rounded-lg w-full flex flex-col gap-6 hover:shadow-2xl pb-18"
          >
            <Image
              src={item?.mainImage?.asset?.url}
              alt={`${item?.label} image`}
              width={400}
              height={250} // Set same width and height
              className="w-[100%] h-[250px] object-cover rounded-md"
              // className="w-[400px] h-[250px] object-cover rounded-md"
              priority // Optional: For faster loading above the fold
            />

            <div className="flex flex-col gap-3 px-3">
              <button className="bg-[#D5DAF9] px-3 py-1 text-[#2E47E3] font-semibold text-xs md:text-xl lg:text-sm rounded-md self-start">
                {item?.label}
              </button>
              <div className="flex items-center justify-between text-gray-400 text-xs md:text-sm mt-2">
                <div className="flex items-center gap-1 md:gap-2">
                  <Image src={Calender} alt="calendar-img" />
                  <span className="text-[#3F3F3F]">
                    {new Date(item?.publishedAt).toDateString()}
                  </span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <Image src={Clock} alt="clock-img" />
                   <span className="text-[#3F3F3F]">
                    {new Date(item?.publishedAt).toDateString()}
                  </span>
                  {/* <span className="text-[#3F3F3F]">{item?.readTime}</span> */}
                </div>
              </div>
              <h2 className="text-[#202020] font-semibold text-sm md:text-2xl lg:text-lg xl:text-xl">
                {item?.title}
              </h2>
              <div className="flex items-center gap-1 md:gap-2">
              <Link href={`/blog/${item._id}`}>
                  <p className="text-[#32AE4C] text-xs md:text-2xl lg:text-sm">
                    Read More
                  </p>
                </Link>
                <Image src={Arrow} alt="arrow-img" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <Link href="/blog">
      <div className="flex justify-center mt-10">
        <button className="font-inter font-semibold bg-[#32AE4C] hover:bg-[#27913c] transition-colors text-white px-6 py-3 rounded-full text-sm md:text-2xl lg:text-lg">
          View All Blog
        </button>
      </div>
      </Link>
    </div>
  
  </div>
);
}

export default Blog;

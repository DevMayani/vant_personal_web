// app/blog/page.js

import Image from "next/image";
import Calendar from "../../../public/assets/calender.svg"
import Clock from "../../../public/assets/clock.svg";
import Arrow from "../../../public/assets/arrow.svg";
import { fetchBlogs } from "../../../sanity/lib/fetchBlog";
import Link from  "next/link"

export const revalidate = 60; // Cache revalidation for faster fetch
export default async function BlogPage() {
  const blogs = await fetchBlogs();
  

  return (
    <div className="px-4 py-10 md:px-12 xl:px-32">
      <h1 className="text-3xl font-bold text-center mb-8">All Blog Posts</h1>

      <div className="grid lg:grid-cols-3 gap-6">
        {blogs.map((item) => (
          <div key={item._id} className="bg-white rounded-lg shadow-md p-4">
            <Image
              src={item?.mainImage?.asset?.url}
              alt={item?.label}
              width={400}
              height={250}
              className="w-full h-[250px] object-cover rounded-md"
            />
            <button className="bg-[#D5DAF9] text-[#2E47E3] px-2 py-1 mt-2 rounded text-xs font-semibold">
              {item.label}
            </button>
            <div className="flex justify-between text-gray-400 text-xs mt-2">
              <div className="flex items-center gap-2">
                <Image src={Calendar} alt="calendar" />
                <span>{new Date(item.publishedAt).toDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src={Clock} alt="clock" />
                <span>{item.readTime || "5 min read"}</span>
              </div>
            </div>
            <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
            <div className="flex items-center gap-2 mt-2 text-[#32AE4C] text-sm">
            <Link href={`/blog/${item._id}`}>
                      <p className="text-[#32AE4C] text-xs md:text-2xl lg:text-sm">
                        Read More
                      </p>
                    </Link>
              <Image src={Arrow} alt="arrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

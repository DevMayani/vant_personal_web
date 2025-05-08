"use client"
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchBlogById } from '../../../../sanity/lib/fetchBlog';
import Image from 'next/image';

const BlogDetail = () => {
  const params = useParams();
  const id = params?.id;  
  const [blog, setBlog] = useState(null);
  

  useEffect(() => {
    if (id) {
      fetchBlogById(id)  // Fetching the blog based on the ID
        .then((data) => {
          setBlog(data);
        })
        .catch((error) => {
          console.error("Error fetching blog:", error);
        });
    }
  }, [id]);

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <div className="px-8 py-16">
      <h1 className="text-4xl font-bold">{blog.title}</h1>
      <Image src={blog.mainImage?.asset?.url} alt={blog.title} width={600} height={400} />
      <p className="text-xl text-black">{blog.content}</p>
    </div>
  );
};

export default BlogDetail;

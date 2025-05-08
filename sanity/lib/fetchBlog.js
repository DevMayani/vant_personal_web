// lib/fetchBlogs.js
import { client } from './sanity'

export const fetchBlogs = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    slug,
    label,
    description,
    readTime,
    mainImage {
      asset->{
        url
      },
      alt
    },
    publishedAt,
    "author": author->name,
    "categories": categories[]->title
  } | order(publishedAt desc)`
  

  
  
  const blogs = await client.fetch(query)
  return blogs
}



// ✅ New function to fetch a single blog post by _id
export const fetchBlogById = async (id) => {
  const query = `*[_type == "post" && _id == $id][0]{
    _id,
    title,
    content,
    mainImage {
      asset->{
        url
      },
      alt
    },
    publishedAt,
    "author": author->name
  }`

  const blog = await client.fetch(query, { id })
  return blog
}
import React from 'react'
import { assets } from '../assets/assets'
import BlogCard from './BlogCard'

const AllBlogs = () => {
  return (
    <div className='bg-blue-100 grid grid-cols-3 gap-10 px-6 py-10'>
        {assets.blogs.map((blog)=>(
           <BlogCard blog={blog}/>
        ))}
    </div>
  )
}

export default AllBlogs
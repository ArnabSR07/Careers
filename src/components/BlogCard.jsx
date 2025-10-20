import React from 'react'
import { assets } from '../assets/assets'

const BlogCard = ({blog}) => {
  return (
    <div className='px-3 bg-white py-5 flex-flex-col justify-center items-center gap-4 shadow-md rounded-md drop-shadow-xl'>
        <img className='h-60 w-full' src={assets.blogCardbg} alt="" />
        <hr className='font-bold'/>
        <h4 className='text-xl py-4 text-center text-black font-bold'>{blog.title}</h4>
        <hr className='text-gray-500 px-2'/>
        <div className='text-center py-5'><span className='text-gray-600'>{blog.date} | {blog.topic}</span></div>
    </div>

  )
}

export default BlogCard
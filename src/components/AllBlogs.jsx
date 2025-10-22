import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { assets } from '../assets/assets'
import BlogCard from './BlogCard'

const AllBlogs = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : assets.blogs.length - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < assets.blogs.length - 1 ? prev + 1 : 0))
  }

  return (
    <div className='bg-blue-100 px-6 py-10'>
      {/* Desktop view: Grid with 3 columns */}
      <div className='hidden md:grid grid-cols-3 gap-10'>
        {assets.blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      {/* Mobile view: Single card with navigation */}
      <div className='md:hidden'>
        <div className='relative'>
          {/* Blog Card */}
          <div className='mb-6'>
            <BlogCard blog={assets.blogs[currentIndex]} />
          </div>

          {/* Navigation Buttons */}
          <div className='flex items-center justify-center gap-4'>
            <button
              onClick={handlePrev}
              className='bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-colors'
              aria-label='Previous blog'
            >
              <ChevronLeft className='w-6 h-6 text-gray-700' />
            </button>

            {/* Indicator dots */}
            <div className='flex gap-2'>
              {assets.blogs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-blue-600' 
                      : 'bg-gray-400'
                  }`}
                  aria-label={`Go to blog ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className='bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-colors'
              aria-label='Next blog'
            >
              <ChevronRight className='w-6 h-6 text-gray-700' />
            </button>
          </div>

          {/* Counter */}
          <div className='text-center mt-4 text-gray-600 text-sm'>
            {currentIndex + 1} / {assets.blogs.length}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllBlogs
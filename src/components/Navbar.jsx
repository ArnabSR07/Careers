import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null)

  const dropdownItems = [
    'Specialized Services',
    'Auditing',
    'Corporate Consultancy',
    'Tax Consultancy'
  ]

  const handleDropdownClick = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdownName)
    }
  }

  const closeAllDropdowns = () => {
    setActiveDropdown(null)
  }

  return (
    <div>
        <nav className='flex justify-between text-white text-lg gap-16 relative'>
            <Link to='/' onClick={closeAllDropdowns}>Home</Link>
            
            {/* Company Dropdown */}
            <div className='relative'>
              <button 
                className='flex items-center cursor-pointer gap-1'
                onClick={() => handleDropdownClick('company')}
              >
                Company
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'company' ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'company' && (
                <div className='absolute flex flex-col top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10'>
                 <Link to="/services/special"
                      className='px-4 py-2 text-black hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-200 first:rounded-t-md last:rounded-b-md'
                    >
                      Our Team
                    </Link>
                    <Link to="/services/auditing"
                      className='px-4 py-2 text-black hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-200 first:rounded-t-md last:rounded-b-md'
                    >
                      Achievements
                    </Link>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className='relative'>
              <button 
                className='flex items-center cursor-pointer gap-1'
                onClick={() => handleDropdownClick('services')}
              >
                Services
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'services' && (
                <div className='absolute flex flex-col top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10'>
                  <Link to="/services/special"
                      className='px-4 py-2 text-black hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-200 first:rounded-t-md last:rounded-b-md'
                    >
                      Specialized Services
                    </Link>
                    <Link to="/services/auditing"
                      className='px-4 py-2 text-black hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-200 first:rounded-t-md last:rounded-b-md'
                    >
                      Auditing
                    </Link>
                    <Link to="/services/corporate"
                      className='px-4 py-2 text-black hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-200 first:rounded-t-md last:rounded-b-md'
                    >
                      Corporate Compliance
                    </Link>
                    <Link to="/services/tax"
                      className='px-4 py-2 text-black hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-200 first:rounded-t-md last:rounded-b-md'
                    >
                      Tax Consultancy
                    </Link>
                </div>
              )}
            </div>

            {/* Publications Dropdown */}
            <div className='relative'>
              <button 
                className='flex items-center cursor-pointer gap-1'
                onClick={() => handleDropdownClick('publications')}
              >
                Publications
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'publications' ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'publications' && (
                <div className='absolute flex flex-col top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10'>
                  
                    <Link
                      className='px-4 py-2 text-black hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-200 first:rounded-t-md last:rounded-b-md'
                    >
                      Specialized Services
                    </Link>
                    <Link to="/services/auditing"
                      className='px-4 py-2 text-black hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-200 first:rounded-t-md last:rounded-b-md'
                    >
                      Auditing
                    </Link>
                    <Link
                      className='px-4 py-2 text-black hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-200 first:rounded-t-md last:rounded-b-md'
                    >
                      Corporate Compliance
                    </Link>
                    <Link
                      className='px-4 py-2 text-black hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-200 first:rounded-t-md last:rounded-b-md'
                    >
                      Tax Consultancy
                    </Link>
                  
                </div>
              )}
            </div>

            {/* Knowledge & Events Dropdown */}
            <div className='relative'>
              <button 
                className='flex items-center cursor-pointer gap-1'
                onClick={() => handleDropdownClick('knowledge')}
              >
                Knowledge & Events
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'knowledge' ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'knowledge' && (
                <div className='absolute flex flex-col top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10'>
                   <Link to="/services/special"
                      className='px-4 py-2 text-black hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-200 first:rounded-t-md last:rounded-b-md'
                    >
                      Event
                    </Link>
                    <Link to="/services/auditing"
                      className='px-4 py-2 text-black hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-200 first:rounded-t-md last:rounded-b-md'
                    >
                      Blogs
                    </Link>
                    <Link to="/knowledge/career"
                      className='px-4 py-2 text-black hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-200 first:rounded-t-md last:rounded-b-md'
                    >
                      Careers
                    </Link>
                </div>
              )}
            </div>

            <Link to='/contact' onClick={closeAllDropdowns}>Contact Us</Link>
        </nav>
    </div>
  )
}

export default Navbar
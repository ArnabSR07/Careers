// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   const [activeDropdown, setActiveDropdown] = useState(null)

//   const dropdownItems = [
//     'Specialized Services',
//     'Auditing',
//     'Corporate Consultancy',
//     'Tax Consultancy'
//   ]

//   const handleDropdownClick = (dropdownName) => {
//     if (activeDropdown === dropdownName) {
//       setActiveDropdown(null)
//     } else {
//       setActiveDropdown(dropdownName)
//     }
//   }

//   const closeAllDropdowns = () => {
//     setActiveDropdown(null)
//   }

//   return (
//     <div>
//         <nav className='flex justify-between text-white text-lg gap-16 relative'>
//             <Link to='/' onClick={closeAllDropdowns}>Home</Link>
            
//             {/* Company Dropdown */}
//             <div className='relative'>
//               <button 
//                 className='flex items-center cursor-pointer gap-1'
//                 onClick={() => handleDropdownClick('company')}
//               >
//                 Company
//                 <svg 
//                   className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'company' ? 'rotate-180' : ''}`}
//                   fill="none" 
//                   stroke="currentColor" 
//                   viewBox="0 0 24 24"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>
//               {activeDropdown === 'company' && (
//                 <div className='absolute flex flex-col top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10'>
//                  <Link to="/company/team"
//                       className='px-4 py-2 text-black hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-200 first:rounded-t-md last:rounded-b-md'
//                     >
//                       Our Team
//                     </Link>
//                     <Link to="/services/auditing"
//                       className='px-4 py-2 text-black hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-200 first:rounded-t-md last:rounded-b-md'
//                     >
//                       Achievements
//                     </Link>
//                 </div>
//               )}
//             </div>

//             {/* Services Dropdown */}
//             <div className='relative'>
//               <button 
//                 className='flex items-center cursor-pointer gap-1'
//                 onClick={() => handleDropdownClick('services')}
//               >
//                 Services
//                 <svg 
//                   className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`}
//                   fill="none" 
//                   stroke="currentColor" 
//                   viewBox="0 0 24 24"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>
//               {activeDropdown === 'services' && (
//                 <div className='absolute flex flex-col top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10'>
//                   <Link to="/services/special"
//                       className='px-4 py-2 text-black hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-200 first:rounded-t-md last:rounded-b-md'
//                     >
//                       Specialized Services
//                     </Link>
//                     <Link to="/services/auditing"
//                       className='px-4 py-2 text-black hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-200 first:rounded-t-md last:rounded-b-md'
//                     >
//                       Auditing
//                     </Link>
//                     <Link to="/services/corporate"
//                       className='px-4 py-2 text-black hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-200 first:rounded-t-md last:rounded-b-md'
//                     >
//                       Corporate Compliance
//                     </Link>
//                     <Link to="/services/tax"
//                       className='px-4 py-2 text-black hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-200 first:rounded-t-md last:rounded-b-md'
//                     >
//                       Tax Consultancy
//                     </Link>
//                 </div>
//               )}
//             </div>

//             {/* Publications Dropdown */}
//             <div className='relative'>
//               <button 
//                 className='flex items-center cursor-pointer gap-1'
//                 onClick={() => handleDropdownClick('publications')}
//               >
//                 Publications
//                 <svg 
//                   className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'publications' ? 'rotate-180' : ''}`}
//                   fill="none" 
//                   stroke="currentColor" 
//                   viewBox="0 0 24 24"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>
//               {activeDropdown === 'publications' && (
//                 <div className='absolute flex flex-col top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10'>
                  
//                     <Link to="/publications/budget"
//                       className='px-4 py-2 text-black hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-200 first:rounded-t-md last:rounded-b-md'
//                     >
//                       BUDGET Updates
//                     </Link>
//                     <Link to="/services/auditing"
//                       className='px-4 py-2 text-black hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-200 first:rounded-t-md last:rounded-b-md'
//                     >
//                       GST
//                     </Link>
//                     <Link
//                       className='px-4 py-2 text-black hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-200 first:rounded-t-md last:rounded-b-md'
//                     >
//                       Income TAX
//                     </Link>
                  
//                 </div>
//               )}
//             </div>

//             {/* Knowledge & Events Dropdown */}
//             <div className='relative'>
//               <button 
//                 className='flex items-center cursor-pointer gap-1'
//                 onClick={() => handleDropdownClick('knowledge')}
//               >
//                 Knowledge & Events
//                 <svg 
//                   className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'knowledge' ? 'rotate-180' : ''}`}
//                   fill="none" 
//                   stroke="currentColor" 
//                   viewBox="0 0 24 24"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>
//               {activeDropdown === 'knowledge' && (
//                 <div className='absolute flex flex-col top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10'>
//                    <Link to="/knowledge/events"
//                       className='px-4 py-2 text-black hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-200 first:rounded-t-md last:rounded-b-md'
//                     >
//                       Event
//                     </Link>
//                     <Link to="/knowledge/blogs"
//                       className='px-4 py-2 text-black hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-200 first:rounded-t-md last:rounded-b-md'
//                     >
//                       Blogs
//                     </Link>
//                     <Link to="/knowledge/career"
//                       className='px-4 py-2 text-black hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-200 first:rounded-t-md last:rounded-b-md'
//                     >
//                       Careers
//                     </Link>
//                 </div>
//               )}
//             </div>

//             <Link to='/contact' onClick={closeAllDropdowns}>Contact Us</Link>
//         </nav>
//     </div>
//   )
// }

// export default Navbar

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDropdownClick = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <div>
      {/* ✅ Desktop Navbar */}
      <nav className="hidden md:flex justify-between text-white text-lg gap-16 relative">
        <Link to="/" onClick={closeAllDropdowns}>
          Home
        </Link>

        {/* Company Dropdown */}
        <div className="relative">
          <button
            className="flex items-center cursor-pointer gap-1"
            onClick={() => handleDropdownClick("company")}
          >
            Company
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${
                activeDropdown === "company" ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {activeDropdown === "company" && (
            <div className="absolute flex flex-col top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <Link
                to="/company/team"
                className="px-4 py-2 text-black hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-200"
              >
                Our Team
              </Link>
              <Link
                to="/services/auditing"
                className="px-4 py-2 text-black hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-200"
              >
                Achievements
              </Link>
            </div>
          )}
        </div>

        {/* Services Dropdown */}
        <div className="relative">
          <button
            className="flex items-center cursor-pointer gap-1"
            onClick={() => handleDropdownClick("services")}
          >
            Services
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${
                activeDropdown === "services" ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {activeDropdown === "services" && (
            <div className="absolute flex flex-col top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <Link
                to="/services/special"
                className="px-4 py-2 text-black hover:bg-blue-600 hover:text-white"
              >
                Specialized Services
              </Link>
              <Link
                to="/services/auditing"
                className="px-4 py-2 text-black hover:bg-blue-600 hover:text-white"
              >
                Auditing
              </Link>
              <Link
                to="/services/corporate"
                className="px-4 py-2 text-black hover:bg-blue-600 hover:text-white"
              >
                Corporate Compliance
              </Link>
              <Link
                to="/services/tax"
                className="px-4 py-2 text-black hover:bg-blue-600 hover:text-white"
              >
                Tax Consultancy
              </Link>
            </div>
          )}
        </div>

        {/* Publications Dropdown */}
        <div className="relative">
          <button
            className="flex items-center cursor-pointer gap-1"
            onClick={() => handleDropdownClick("publications")}
          >
            Publications
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${
                activeDropdown === "publications" ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {activeDropdown === "publications" && (
            <div className="absolute flex flex-col top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <Link
                to="/publications/budget"
                className="px-4 py-2 text-black hover:bg-blue-600 hover:text-white"
              >
                BUDGET Updates
              </Link>
              <Link
                to="/services/auditing"
                className="px-4 py-2 text-black hover:bg-blue-600 hover:text-white"
              >
                GST
              </Link>
              <Link
                className="px-4 py-2 text-black hover:bg-blue-600 hover:text-white"
              >
                Income TAX
              </Link>
            </div>
          )}
        </div>

        {/* Knowledge Dropdown */}
        <div className="relative">
          <button
            className="flex items-center cursor-pointer gap-1"
            onClick={() => handleDropdownClick("knowledge")}
          >
            Knowledge & Events
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${
                activeDropdown === "knowledge" ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {activeDropdown === "knowledge" && (
            <div className="absolute flex flex-col top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <Link
                to="/knowledge/events"
                className="px-4 py-2 text-black hover:bg-blue-600 hover:text-white"
              >
                Event
              </Link>
              <Link
                to="/knowledge/blogs"
                className="px-4 py-2 text-black hover:bg-blue-600 hover:text-white"
              >
                Blogs
              </Link>
              <Link
                to="/knowledge/career"
                className="px-4 py-2 text-black hover:bg-blue-600 hover:text-white"
              >
                Careers
              </Link>
            </div>
          )}
        </div>

        <Link to="/contact" onClick={closeAllDropdowns}>
          Contact Us
        </Link>
      </nav>

      {/* ✅ Mobile Navbar */}
      <div className="md:hidden flex flex-col h-8 w-8 bg-black rounded-full items-center justify-center">
        {/* Top Bar */}
        <div className="flex justify-between items-center px-4 py-3">
          <Link to="/" className="text-xl font-bold" onClick={closeAllDropdowns}>
           
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="focus:outline-none"
          >
            {/* Hamburger Icon */}
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="flex flex-col px-6 py-3 space-y-2 bg-blue-800">
            <Link to="/" onClick={closeAllDropdowns}>
              Home
            </Link>

            {/* Mobile Dropdowns simplified */}
            {[
              { name: "Company", items: ["/company/team", "/services/auditing"] },
              { name: "Services", items: ["/services/special", "/services/auditing", "/services/corporate", "/services/tax"] },
              { name: "Publications", items: ["/publications/budget", "/services/auditing"] },
              { name: "Knowledge & Events", items: ["/knowledge/events", "/knowledge/blogs", "/knowledge/career"] },
            ].map((dropdown, index) => (
              <div key={index}>
                <button
                  className="flex justify-between items-center w-full"
                  onClick={() =>
                    handleDropdownClick(dropdown.name.toLowerCase())
                  }
                >
                  {dropdown.name}
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === dropdown.name.toLowerCase()
                        ? "rotate-180"
                        : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {activeDropdown === dropdown.name.toLowerCase() && (
                  <div className="flex flex-col pl-4 mt-2 space-y-1">
                    {dropdown.items.map((link, i) => (
                      <Link
                        key={i}
                        to={link}
                        onClick={closeAllDropdowns}
                        className="text-gray-200 hover:text-white"
                      >
                        {link.split("/").pop().replace("-", " ")}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link to="/contact" onClick={closeAllDropdowns}>
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

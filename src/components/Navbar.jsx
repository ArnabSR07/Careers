import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (name) =>
    activeDropdown === name ? setActiveDropdown(null) : setActiveDropdown(name);

  const closeAll = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };


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


  const navItems = [
    { title: "Home", path: "/" },
    {
      title: "Company",
      dropdown: [
        { title: "Our Team", path: "/company/team" },
        { title: "Achievements", path: "/company/achievements" },
      ],
    },
    {
      title: "Services",
      dropdown: [
        { title: "Specialized Services", path: "/services/special" },
        { title: "Auditing", path: "/services/auditing" },
        { title: "Corporate Compliance", path: "/services/corporate" },
        { title: "Tax Consultancy", path: "/services/tax" },
      ],
    },
    {
      title: "Publications",
      dropdown: [
        { title: "Budget Updates", path: "/publications/budget" },
        { title: "GST", path: "/publications/gst" },
        { title: "Income Tax", path: "/publications/income-tax" },
      ],
    },
    {
      title: "Knowledge & Events",
      dropdown: [
        { title: "Events", path: "/knowledge/events" },
        { title: "Blogs", path: "/knowledge/blogs" },
        { title: "Careers", path: "/knowledge/career" },
      ],
    },
    { title: "Contact Us", path: "/contact" },
  ];

  return (
    <div>
      {/* Desktop Navbar stays unchanged */}
      <nav className=" hidden md:flex justify-between text-white text-lg gap-16 relative">
        <Link to="/" onClick={closeAllDropdowns}>
          Home
        </Link>
        {/* Company Dropdown */}{" "}
        <div className="relative">
          {" "}
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
                className="px-4 py-2 text-black hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-200 first:rounded-t-md last:rounded-b-md"
              >
                Our Team
              </Link>
              <Link
                to="/company/team"
                className="px-4 py-2 text-black hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-200 first:rounded-t-md last:rounded-b-md"
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
                className="px-4 py-2 text-black hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-200 first:rounded-t-md last:rounded-b-md"
              >
                Specialized Services
              </Link>
              <Link
                to="/services/auditing"
                className="px-4 py-2 text-black hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-200 first:rounded-t-md last:rounded-b-md"
              >
                Auditing
              </Link>
              <Link
                to="/services/corporate"
                className="px-4 py-2 text-black hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-200 first:rounded-t-md last:rounded-b-md"
              >
                Corporate Compliance
              </Link>
              <Link
                to="/services/tax"
                className="px-4 py-2 text-black hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-200 first:rounded-t-md last:rounded-b-md"
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
                className="px-4 py-2 text-black hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-200 first:rounded-t-md last:rounded-b-md"
              >
                BUDGET Updates
              </Link>
              <Link
                to="/publications/budget"
                className="px-4 py-2 text-black hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-200 first:rounded-t-md last:rounded-b-md"
              >
                GST
              </Link>
              <Link to="/publications/budget" className="px-4 py-2 text-black hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-200 first:rounded-t-md last:rounded-b-md">
                Income TAX
              </Link>
            </div>
          )}
        </div>
        {/* Knowledge & Events Dropdown */}
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
                className="px-4 py-2 text-black hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-200 first:rounded-t-md last:rounded-b-md"
              >
                Event
              </Link>
              <Link
                to="/knowledge/blogs"
                className="px-4 py-2 text-black hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-200 first:rounded-t-md last:rounded-b-md"
              >
                Blogs
              </Link>
              <Link
                to="/knowledge/career"
                className="px-4 py-2 text-black hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-200 first:rounded-t-md last:rounded-b-md"
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

      {/* Mobile Navbar */}
      <div className="md:hidden bg-gray-700 text-white">
        <div className="flex justify-between items-center px-4 py-3">
          <Link to="/" className="font-bold text-xl" onClick={closeAll}>
          </Link>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="flex flex-col bg-white text-black px-4 py-4 space-y-2 shadow-md">
            {navItems.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.title)}
                      className="flex justify-between items-center w-full px-2 py-2 font-medium hover:bg-blue-100 rounded"
                    >
                      {item.title} <ChevronDown className="w-4 h-4" />
                    </button>
                    {activeDropdown === item.title && (
                      <div className="flex flex-col ml-4 mt-1 space-y-1">
                        {item.dropdown.map((sub, i) => (
                          <Link
                            key={i}
                            to={sub.path}
                            onClick={closeAll}
                            className="px-2 py-1 hover:bg-blue-600 hover:text-white rounded"
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    onClick={closeAll}
                    className="px-2 py-2 hover:bg-blue-100 rounded"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

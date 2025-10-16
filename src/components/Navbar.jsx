import React from 'react'
import { Link } from 'react-router-dom'
import { LucideAArrowDown } from 'lucide-react'

const Navbar = () => {
  return (
    <div>
        <nav className='flex justify-between text-white text-xl gap-6'>
            <Link to='/'>Home</Link>
            <Link to='/'>Company</Link>
            <Link to='/'>Services</Link>
            <Link to='/'>Publications</Link>
            <Link to='/'>Knowledge & Event</Link>
            <Link to='/'>Contact Us</Link>
        </nav>
    </div>
  )
}

export default Navbar
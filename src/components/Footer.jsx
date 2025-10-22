import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='grid grid-cols-3 bg-gray-300 mb-6 py-12'>

            <div className='text-center'>
                <h1 className='font-bold text-xl md:text-3xl mb-2'>Get In Touch</h1>
                <div className='text-xs md:text-sm text-gray-500 my-3'> The CRSP service provides best accountants</div>
                <div className='flex justify-center items-center gap-4'>
                  <img src={assets.facebook} alt="" /><img src={assets.twitter} alt="" /><img src={assets.instagram} alt="" />
                </div>
            </div>

            <div className='text-center'>
                <h1 className='font-bold text-xl md:text-3xl mb-2'>Company Info</h1>
                <ul className='flex-col'>
                    <li className='text-xs md:text-sm text-gray-500 my-3'>About Us</li>
                    <li className='text-xs md:text-sm text-gray-500 my-3'>How it works</li>
                    <li className='text-xs md:text-sm text-gray-500 my-3'>Register as Accountants</li>
                    <li className='ttext-xs md:ext-sm text-gray-500 my-3'>FAQ</li>
                </ul>
            </div>

            <div className='text-center'>
                <h1 className='font-bold text-xl md:text-3xl mb-2'>Features</h1>
                <ul className='flex-col'>
                    <li className='text-xs md:text-sm text-gray-500 my-3'>Best Accountants</li>
                    <li className='text-xs md:text-sm text-gray-500 my-3'>Get Instant Quotes</li>
                    <li className='text-xs md:text-sm text-gray-500 my-3'>Unlimited Support</li>
                </ul>
            </div>

        </div>
        <h2 className='flex justify-center text-gray-500 font-light'>Copyright@AccountCare</h2>
    </div>
  )
}

export default Footer
import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
        <Hero/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default MainLayout
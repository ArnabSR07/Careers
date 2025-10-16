import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import WhoWeAre from '../components/WhoWeAre'
import Services from '../components/Services'
import Capabilities from '../components/Capabilities'
import AboutUs from '../components/AboutUs'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Services/>
        <WhoWeAre/>
        <Capabilities/>
        <AboutUs/>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default Home
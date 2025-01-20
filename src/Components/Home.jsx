import React from 'react'
import Navbar from './Navbar'
import HeroSection from './Herosection'
import Tradesection from './Tradesection'
import Giftcardsection from './Giftcardsection'
import Accordion from './Accordion'
import Footerbee from './Footerbee'
import Signing from './signing'

const Home = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Tradesection/>
    <Giftcardsection/>
    <Accordion/>
    {/* <Signing/> */}
    <Footerbee/>
    </>
  )
}

export default Home
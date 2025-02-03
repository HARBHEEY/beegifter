import React from 'react'
import Navbar from './Navbar'
import HeroSection from './Herosection'
import Tradesection from './Tradesection'
import Giftcardsection from './Giftcardsection'
import Accordion from './Accordion'
import Footerbee from './Footerbee'
import Signing from './Signing'
import Nav from './Nav'

const Home = () => {
  return (
    <>
    <Navbar/>
    {/* <Nav/> */}
    <HeroSection/>
    <Tradesection/>
    <Giftcardsection/>
    <Accordion/>
    <Signing/>
    <Footerbee/>
    </>
  )
}

export default Home
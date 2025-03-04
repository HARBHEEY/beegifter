import React from 'react'
import './Herosection.css'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <>
      <div className="herosection">
        <div className='hero-flex'>
          <div data-aos="fade-right" data-aos-duration="1000" className='hero-column'>
            <h1>Instant cash for gift cards & crypto exchange</h1>
            <p>Enjoy fast & secure transactions
            with amazing rates</p>
            <Link className='link'>Get Started</Link>
            <div className="image-flex">
              <img src="/AppStore.png" alt="AppStore" />
              <img src="/GooglePlay.png" alt="GooglePlay" />
            </div>
          </div>
          <div className='relativeimg'>
            <img src="/Hero-Shape.png" alt="Hero-Shape" />
            <img src="/ShapeRight.png" alt="ShapeRight" />
          </div>  
          <div className='phoneimg'>
            <div className='a'>
            <img src="/HeroPhone2.png" alt="HeroPhone2" />
            </div>
            <div className="c">
              <img src="/HeroPhone.png" alt="HeroPhone" />
            </div>
          </div>
        </div>
        <div className="herobottom">
          <div  className="hero-row">
            <div className="trading-nos">
             <h2>$15+</h2>
             <span>P2P Volume</span>
            </div>
            <hr className='ila'/>
            <div className="trading-nos">
              <h2>20+</h2>
              <span>Employees and growing</span>
            </div>
            <hr className='ila'/>
            <div className="trading-nos">
              <h2>40+</h2>
              <span>Tradeable asset</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
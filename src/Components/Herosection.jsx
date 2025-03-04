import React from 'react'
import './Herosection.css'
import { Link } from 'react-router-dom'
import bee1 from '../assets/AppStore.png';
import bee2 from '../assets/GooglePlay.png';
import bee3 from '../assets/Hero-Shape.png';
import bee4 from '../assets/ShapeRight.png';
import bee5 from '../assets/HeroPhone2.png';
import bee6 from '../assets/HeroPhone.png'

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
              <img src={bee1} alt="" />
              <img src={bee2} alt="" />
            </div>
          </div>
          <div className='relativeimg'>
            <img src={bee3} alt="" />
            <img src={bee4} alt="" />
          </div>  
          <div className='phoneimg'>
            <div className='a'>
            <img src={bee5} alt="" />
            </div>
            <div className="c">
              <img src={bee6} alt="" />
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
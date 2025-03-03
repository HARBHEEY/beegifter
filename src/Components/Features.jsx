import React from 'react'
import Tradesection from './Tradesection'
import Signing from './Signing'
import Giftcardsection from './Giftcardsection'
import Navbar from './Navbar'
import coimage from '../assets/coinsimg.png'
import './Features.css'
import Footerbee from './Footerbee'

const Features = () => {
  return (
    <div>
      <Navbar/>

      <div className="cryptocurrency">
        <div className="crypt">
          <div className="cryp">
            <div data-aos="fade-down-right" data-aos-duration="1000" className="cryp1">
              <h1>Trade Gift Cards and Engage in Cryptocurrency Buying and Selling</h1>
              <p>Exchange gift cards and instantly engage in buying and selling cryptocurrencies using your peer-to-peer bank account.</p>
            </div>
            <div data-aos="fade-down-right" data-aos-duration="1300" className="cryp2">
              <img src={coimage} alt="" />
            </div>

          </div>
        </div>
      </div>
      <Tradesection/>
      <Giftcardsection/>
      <Signing/>
      <Footerbee/>
    </div>
  )
}

export default Features
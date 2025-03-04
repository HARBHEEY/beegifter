import React from 'react'
import './Giftcardsession.css'
import { FaCheck } from "react-icons/fa";


const Giftcardsection = () => {
  return (
    <div>
        <div className="seller">
            <div className="rate">
               <div className="rate1">
                    <img src="/LeftShape.png" alt="LeftShape" />
                  <div data-aos="fade-right" data-aos-duration="1000" className="rate-phone">
                     <img src="Step1Img.png" alt="Step1Img" />
                  </div>
               </div>
               <div data-aos="fade-up" data-aos-duration="1000" className="rate-note">
                <h1>We offer a range of gift cards at exceptional rates.</h1>
                <p>We purchase gift cards from a diverse array of brands and countries, including Apple iTunes, Google Play, Nordstrom, Steam, Sephora, Amazon, Walmart, Visa, American Express, and many others.</p>
               </div>
            </div>
            <div className="ratel">
                <div data-aos="fade-right" data-aos-duration="1000" className="rate-note2">
                    <h1>Effortless Peer-to-Peer Cryptocurrency Transactions</h1>
                    <p>We purchase gift cards from a diverse array of brands and countries, including Apple iTunes, Google Play, Nordstrom, Steam, Sephora, Amazon, Walmart, Visa, American Express, and many others.</p>
                </div>
                <div className='rate2'>
                    <img src="/ShapeRight.png" alt="ShapeRight" />
                    <div className="rate-phone2">
                        <img src="/ShapeLeft.png" alt="ShapeLeft" />
                    </div>
                </div>
            </div>
            <div className="fiatplug">
                <h1>BEEgifter provides a seamless P2P <span>transactions</span></h1>
                <div className="fiat-box">
                    <div className="fiat-flex">
                       <div data-aos="fade-up" data-aos-duration="1000" className="circle-div">
                           <div className="circle"><FaCheck color='blue'/>
                           </div>
                           <div className="circle-note">
                              <h3>Safe and secured</h3>
                              <p>Our platform ensures a seamless and secure trading experience for selling gift cards and cryptocurrencies.</p>
                           </div>
                       </div>
                       <div data-aos="fade-up" data-aos-duration="1000" className="circle-div">
                           <div className="circle"><FaCheck color='blue'/>
                           </div>
                           <div className="circle-note">
                              <h3>Extensive Gift Card Options</h3>
                              <p>Our platform ensures a seamless and secure trading experience for selling gift cards and cryptocurrencies.</p>
                           </div>
                       </div>
                       <div data-aos="fade-up" data-aos-duration="1000" className="circle-div">
                           <div className="circle"><FaCheck color='blue'/>
                           </div>
                           <div className="circle-note">
                              <h3>Sell Cryptocurrency</h3>
                              <p>Selling cryptocurrency on BEEgifter is a straightforward and secure process that allows you to convert your digital assets into BEEgifter currency with ease</p>
                           </div>
                       </div>
                       <div data-aos="fade-up" data-aos-duration="1000" className="circle-div">
                           <div className="circle"><FaCheck color='blue'/>
                           </div>
                           <div className="circle-note">
                              <h3>24 /7 Customer Support</h3>
                              <p>Our dedicated customer support team is always here to assist you with any questions, concerns, or issues you may encounter during your P2P trading journey.</p>
                           </div>
                       </div>
                    </div>
                      <img src="/ListImg (1).png" alt="" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Giftcardsection
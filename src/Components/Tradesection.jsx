import React from 'react'
import './Tradesection.css'
import card1 from '../assets/Creditcard.png';
import card2 from '../assets/bitcoinconvert_.png';
import card3 from '../assets/GivingRupiahcoin.png';
import card4 from '../assets/List.png'

const Tradesection = () => {
  return (
    <div>
        <div className="tradesection">
            <div data-aos="fade-up" data-aos-duration="1000" className="tradesection1">
                <h1>Trade made with <span>ease</span></h1>
                <p>Our platform ensures a seamless and secure trading experience for selling gift cards and cryptocurrencies, Our dedicated customer support team is always here to assist you with any questions, concerns, or issues you may encounter during your P2P trading journey.</p>
            </div>
            <div  data-aos="zoom-in" data-aos-duration="1300" className="giftcard">
                <div className="giftbox">
                    <div className="trade">
                        <img src={card1} alt="" />
                        <h3>Sell Giftcard</h3>
                        <span>P2P giftcard transactions with amazing rates</span>
                    </div>
                </div>
                <div className="giftbox">
                    <div className="trade">
                        <img src={card2} alt="" />
                        <h3>Buy & Sell crytpto</h3>
                        <span>P2P giftcard transactions with amazing rates</span>
                    </div>
                </div>
                <div className="giftbox">
                    <div className="trade">
                        <img src={card3} alt="" />
                        <h3>Airtime & Data</h3>
                        <span>Buy airtime and data with your earned BEEgifter coins for free, Coins can be earned from trading with the BEEgifter app.</span>
                    </div>
                </div>
                <div className="giftbox">
                    <div className="trade">
                        <img src={card4} alt="" />
                        <h3>Pay Bills</h3>
                        <span>Pay bills with bank transfers, USSD, or with your Beegifter coins. Payment with BEEgifter coins are free of charge</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tradesection
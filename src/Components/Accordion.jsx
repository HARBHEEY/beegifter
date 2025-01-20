import React, { useState } from 'react'
import './Accordion.css'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Accordion = () => {
  const accord =[
    {
      Question:'How does BEEgifter work for Crypto trading?',
      Answer:'BEEgifter allows users to create buy or sell offers for various cryptocurrencies. Buyers and sellers can connect, negotiate terms, and complete transactions directly with each other. The platform offers a secure escrow service to protect both parties during the trade.',
    },
    {
      Question:'Can i exchange giftcard on BEEgifter?',
      Answer:'Yes, BEEgifter also facilitates the exchange of gift cards for cryptocurrencies. Sellers can list their gift cards, and buyers can purchase them using cryptocurrency. This provides a convenient way to convert gift cards into digital assets.',
    },
    {
      Question:'Is BEEgifter a secure platform for p2p trading?',
      Answer:'Yes, BEEgifter takes security seriously. It employs various security measures, including an escrow service, user reviews and ratings, and a dispute resolution system to ensure safe and secure transactions. Always practice due diligence when trading.',
    },
    {
      Question:'Is BEEgifter a secure platform for p2p trading?',
      Answer:'Yes, BEEgifter takes security seriously. It employs various security measures, including an escrow service, user reviews and ratings, and a dispute resolution system to ensure safe and secure transactions. Always practice due diligence when trading.',
    },
    {
      Question:'Is BEEgifter a secure platform for p2p trading?',
      Answer:'Yes, BEEgifter takes security seriously. It employs various security measures, including an escrow service, user reviews and ratings, and a dispute resolution system to ensure safe and secure transactions. Always practice due diligence when trading.',
    },
    {
      Question:'Is BEEgifter a secure platform for p2p trading?',
      Answer:'Yes, BEEgifter takes security seriously. It employs various security measures, including an escrow service, user reviews and ratings, and a dispute resolution system to ensure safe and secure transactions. Always practice due diligence when trading.',
    },
    {
      Question:'Is BEEgifter a secure platform for p2p trading?',
      Answer:'Yes, BEEgifter takes security seriously. It employs various security measures, including an escrow service, user reviews and ratings, and a dispute resolution system to ensure safe and secure transactions. Always practice due diligence when trading.',
    },
    {
      Question:'Is BEEgifter a secure platform for p2p trading?',
      Answer:'Yes, BEEgifter takes security seriously. It employs various security measures, including an escrow service, user reviews and ratings, and a dispute resolution system to ensure safe and secure transactions. Always practice due diligence when trading.',
    },
    {
      Question:'What should i do if i suspect a fradulent activity on BEEgifter?',
      Answer:'If you suspect fraudulent activity or encounter a user who violates the platforms terms of service, its important to report it to BEEgifter customer support. They will investigate and take appropriate action.',
    },
    {
      Question:'Can i trade on BEEgifter 24/7?',
      Answer:'Yes, BEEgifter typically operates 24/7, allowing users to trade cryptocurrencies and exchange gift cards at any time that suits them. The availability of sellers and buyers may vary based on your location and the time of day.',
    },

  ]

  const[showIndex, setshowIndex]= useState(null)
  const Faque= (index)=>{
    setshowIndex(showIndex === index ? null: index);
  };
  return (
    <div>
      <div className="accordions">
        <div className="accordionflex">
           <h1>Frequently asked questions</h1>
        </div>
        <div className="faq-container">
          {accord.map((open,index)=>(
            <div
            key={index}
            className={`faq-item ${showIndex ===index? 'active': ''}`}
            onClick={()=> Faque(index)}
            >
              <div className="faq-question">
                {open.Question}
                <span className='faq-icon'>
                  {showIndex === index? <FaChevronUp /> 
                  : <FaChevronDown/> }
                </span>
              </div>
              {showIndex === index &&(
                <div className='faq-qnswer'>{open.Answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Accordion
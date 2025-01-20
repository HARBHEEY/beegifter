import React, { useState } from 'react'
import './Faque.css'

const Faque = () => {
    const faqs= [
        {
            Question:'What is your name',
            Answer:'My name is abiodun adeiye',
        },
        {
            Question:'What is your best food',
            Answer:'My best food is rice',
        },
        {
            Question:'What is your best colour',
            Answer:'My best colour is black',
        },
        {
            Question:'What do you do for fun',
            Answer:'Coding and watching movies',
        },
        {
            Question:'Do you love to swim?',
            Answer:'Yes',
        },
        {
            Question:'Are you married',
            Answer:'No'
        },
        {
            Question:'Who is your best female artist',
            Answer:'Tiwa savage',
        },
        {
            Question:'Who is your best male artist',
            Answer:'Wizkid',
        },
        {
            Question:'What do you do?',
            Answer:'I am a  Full stack Web developer',
        },
        {
            Question:'What is your religion',
            Answer:'Christian',
        }
    ]

    const[activeindex, setactivindex]= useState(null);
    const accordionFaq = (index) =>{
        setactivindex(activeindex === index ? null : index);
    };

  return (
    <>
    <div className="FAQBOX">
        <h1>Frequently ask Question</h1>
        <div className='faq-container'>
            {faqs.map((open, index)=>(
                <div
                key ={index}
                    className= {`faq-item ${activeindex === index? 'active':''}`}
                    onClick = {()=> accordionFaq(index)}
                >
                     <div className='faq-question'>
                        {open.Question}
                        <span className='faq-icon'>
                            {activeindex === index ? '-' :'+'}
                        </span>    
                    </div>
                    {activeindex === index &&(
                        <div className="faq-answer">{open.Answer}</div>
                    )}
                </div>
            ))}
          
        </div>
    </div>
    </>
  )
}

export default Faque
import React from 'react'
import Footerbee from './Footerbee'
import Navbar from './Navbar'
import './Contact.css'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <div className="reach-out">
        <div className="reachout-box">
          <div className="reachoutdetails">
            <h1>Contact Us</h1>
            <p>For any issues, questions, or assistance, our dedicated customer support team is here to help.</p>
            <input type="text"  placeholder='Name'/>
            <input type="text" placeholder='Email'/>
            <input type="text" placeholder='Message'/>
            <Link className='li'>submit</Link>
          </div>
        </div>
      </div>
      <Footerbee/>
    </div>
  )
}

export default Contact
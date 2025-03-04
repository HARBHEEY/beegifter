import React from 'react'
import './Signing.css'
import image1 from '../assets/AppStore.png'
import image2 from '../assets/GooglePlay.png'
import image3 from '../assets/StartPhone.png'

const Signing = () => {
  return (
    <div>
        <div className="sign">
            <div className="sign-flex">
                <div data-aos="fade-up" data-aos-duration="1300" className="sign1">
                    <h1>Lets get you
                    started</h1>
                    <p>Get the app today to start
                    enjoying trading fast and easy</p>
                    <div data-aos="fade-up" data-aos-duration="1300" className="image-row">
                        <img src={image1} alt="" />
                        <img src={image2} alt="" />
                    </div>
                </div>
                <img className='bee' src={image3} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Signing
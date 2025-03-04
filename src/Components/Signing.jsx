import React from 'react'
import './Signing.css'

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
                        <img src="/AppStore.png" alt="AppStore" />
                        <img src="/GooglePlay.png" alt="GooglePlay" />
                    </div>
                </div>
                <img className='bee' src='/StartPhone.png' alt="StartPhone" />
            </div>
        </div>
    </div>
  )
}

export default Signing
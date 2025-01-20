import React from 'react'
import './Footerbee.css'
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/footer-logo.png';
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";




const Footerbee = () => {
  return (
    <div>
        <footer>
            <div className="newspaper">
                <div className="newspaper1">
                    <h2>Join our Newsletter</h2>
                    <p>Never miss out on our promotion and updates</p>
                </div>
                <div className="subscribe">
                    <input type="text"  placeholder='Enter your email'/>
                    <Link className='lin'>Subscribe</Link>
                </div>
            </div>
            <div className="complimentary">
                <div className="logo">
                   <div className="logo1">
                   <h1>BEE<span>gifter</span></h1>
                    </div>
                    <div className="logo2">
                        <div className="message">
                            <MdOutlineMarkEmailUnread className='messager' />
                            <p>Abiodunadeiye1@gmail.com</p>
                        </div>
                        <div className="call">
                            <IoCallOutline className='caller' />
                            <p>+234 814 232 2526</p>
                        </div>
                    </div>
                </div>
                <div className="pro-flex">
                <div className="profile">
                    <h3>Company</h3>
                    <NavLink>About us</NavLink>
                    <NavLink>Contact</NavLink>
                    <NavLink>Privacy policy</NavLink>
                    <NavLink>Terms & Condition</NavLink>
                </div>
                <div className="socialmedia">
                    <h3>Social</h3>
                    <NavLink>Instagram</NavLink>
                    <NavLink>Twitter</NavLink>
                    <NavLink>Linkedin</NavLink>
                    <NavLink>Facebook</NavLink>
                </div>
                </div>
            </div>
            <hr />
            <div className="footerend">
                <div className="footerend1">
                  <h6>© 2024 All right Reserved</h6>
                  <h6>Cloned by <span>Harbheey.</span></h6>
                </div>
                <div className="socialimages">
                   <FaTwitter />
                   <AiFillInstagram />
                   <FaLinkedin />
                   <FaFacebook />
                </div>
                
            </div>
        </footer>
    </div>
  )
}

export default Footerbee
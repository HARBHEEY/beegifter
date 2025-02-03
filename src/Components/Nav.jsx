import React, { useState } from 'react'
import './Nav.css'
import { IoIosMenu } from 'react-icons/io'
const Nav = () => {
    const[menuOpen , setmenuOpen]= useState(false)

    const toggleMenu =() =>{
        setmenuOpen(!menuOpen)
    }
  return (
    <div>
        <div className="nav">
            <div className="logo"><h1>LOGO</h1></div>
            <ul className={`nav-links ${menuOpen ?'active': ''}`}>
                <li>
                    <a href="">Home</a>
                </li>
                <li> 
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Service</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
            <div className="menu-toggle" onClick={toggleMenu}>
                <IoIosMenu/>
            </div>
        </div>
    </div>
  )
}

export default Nav

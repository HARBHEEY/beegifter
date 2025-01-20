import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <div>
        <div className="Navbar">
         <h1>BEE<span>gifter</span></h1>
        <div className="Links">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/Features'>Features</NavLink>
            <NavLink to='/About us'>About us</NavLink>
            <NavLink to='/Contact'>Contact</NavLink>
            <NavLink to='/FAQ'>FAQ</NavLink>
        </div>
        <IoIosMenu className='menu' />

    </div>
    <div className="show-menu">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/Features'>Features</NavLink>
            <NavLink to='/About us'>About us</NavLink>
            <NavLink to='/Contact'>Contact</NavLink>
            <NavLink to='/FAQ'>FAQ</NavLink>
    </div>
    </div>
  )
}

export default Navbar
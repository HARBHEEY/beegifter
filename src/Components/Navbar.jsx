import React, { useState } from 'react'
import './Navbar.css'
import { NavLink, useLocation } from 'react-router-dom'
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  const[menuOpen,setmenuOpen]= useState(false)
    const location = useLocation();
  
      const toggleMenu =() =>{
          setmenuOpen(!menuOpen)
      }

      const isActive = (path) => location.pathname === path;
  return (
    <div>
        <div className="Nav">
         <h1>BEE<span>gifter</span></h1>
        <div className={`Links ${menuOpen ?'active': ''}`}>
            <NavLink to='/' className={isActive('/') ? 'active' : ''
            }>Home</NavLink>
            <NavLink to='/Features'>Features</NavLink>
            <NavLink to='/About us'>About us</NavLink>
            <NavLink to='/Contact'>Contact</NavLink>
            <NavLink to='/FAQ'>FAQ</NavLink>
        </div>
        <IoIosMenu className='menu' onClick={toggleMenu}/>
       </div>
   
    </div>

  )
}

export default Navbar


// import { useState } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import { IoIosMenu } from "react-icons/io";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation(); // Get the current location

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const isActive = (path) => location.pathname === path;

//   return (
//     <div>
//       <div className="Nav">
//         <h1>BEE<span>gifter</span></h1>
//         <div className={`Links ${menuOpen ? 'active' : ''}`}>
//           <NavLink to='/' className={isActive('/') ? 'active' : ''}>Home</NavLink>
//           <NavLink to='/Features' className={isActive('/Features') ? 'active' : ''}>Features</NavLink>
//           <NavLink to='/About us' className={isActive('/About us') ? 'active' : ''}>About us</NavLink>
//           <NavLink to='/Contact' className={isActive('/Contact') ? 'active' : ''}>Contact</NavLink>
//           <NavLink to='/FAQ' className={isActive('/FAQ') ? 'active' : ''}>FAQ</NavLink>
//         </div>
//         <IoIosMenu className='menu' onClick={toggleMenu} />
//       </div>
//     </div>
//   );
// };
// export default Navbar
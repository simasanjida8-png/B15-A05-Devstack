// import React from 'react';

import Logo from '../assets/logo-text.png'
import'./Nav.css'
// import { FontAwesomeIcone } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    return ( 
        <nav className="navbar" >
         
         {/* Logo */}
            <div className="logo">
                <a href="#">
             <img src= {Logo} alt="DevStack" />
             </a>
            </div>
            <div>
        <ul>
          <li>Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        </div>
       
        <div className='nav-buttons'>
            <button className='sign-in'>Sign In</button>
            <button className='sign-up'>Sign Up</button>

        </div>

        </nav>
        
        
    );
};

export default Nav;
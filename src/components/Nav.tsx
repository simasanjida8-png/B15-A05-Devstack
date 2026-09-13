// import React from 'react';
import Logo from '../assets/logo-text.png'

const Nav = () => {
    return (
        <nav className="navbar" >
            <div className="logo">
             <img src= {Logo} alt="" />
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
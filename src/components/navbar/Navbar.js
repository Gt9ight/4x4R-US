import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);




    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  return (
    <nav className="navbar">
    <div className="navbar-logo">4X4R-US</div>
    <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
    </ul>
    <div className="navbar-hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
    </div>
</nav>
  )
}

export default Navbar
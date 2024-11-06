import React, {useState, useRef} from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'

function Navbar() {

    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav')
    }
  return (
    <header>
        <Link className='logo' to='/'>4x4R-US</Link>
        <nav ref={navRef}>
            <Link to='/' onClick={showNavbar}>Home</Link>
            <Link to='/about' onClick={showNavbar}>About</Link>
            <Link to='/services' onClick={showNavbar}>Services</Link>
            <Link to='/contact' onClick={showNavbar}>Contact</Link>
            <buutton className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes/>
            </buutton>
        </nav>
        <button  className='nav-btn' onClick={showNavbar}>
            <FaBars/>
        </button>
    </header>
  )
}

export default Navbar
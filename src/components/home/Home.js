import React, { useState, useRef } from 'react';
import './home.css'; // Ensure this file includes the new styles
import Bilstein from './bilstein.png'
import Rockcrawler from './rockcrawler.png'
import Fox from './fox.png'
import RoughCountry from './roughcountry.png'
import suspension from './suspension.webp'
import gears from './gears.jpg'
import wheel from './wheel.webp'
import bumper from './bumper.png'


function Home() {
    const [isOpen, setIsOpen] = useState(false);




    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const mockBrands = [
        { name: 'Bilstein', imageSrc: Bilstein },
        { name: 'Rock Crawler', imageSrc: Rockcrawler },
        { name: 'Fox', imageSrc: Fox },
        { name: 'RoughCountry', imageSrc: RoughCountry },

    ];

    const service = [
        { name: 'SUSPENSION', imageSrc: suspension },
        { name: 'TIRES & WHEEL', imageSrc: wheel },
        { name: 'GEARS & DRIVETRAIN', imageSrc: gears },
        { name: 'BUMPERS, FENDERS, ETC.', imageSrc: bumper },

    ];

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-logo">4X4R-US</div>
                <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="navbar-hamburger" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>

            <div className="hero-container">
                <div className="hero-text">
                    <h1>Welcome to Our Adventure</h1>
                    <p>Discover the thrill of off-road exploration.</p>
                    <button className='hero-button'>Contact Us</button>
                </div>
            </div>
            <h2 className='brand-header'>Our Brands</h2>
            <div className="brands-container">
                
            <div className="brands-row">
                    {mockBrands.map((brand, index) => (
                        <div key={index} className="brand-item">
                            <img src={brand.imageSrc} alt={brand.name} className="brand-image" />
                            
                        </div>
                    ))}
                </div>
            </div>

            <div className="vision-container">
                <h2>Our Vision</h2>
                <p>
                    At our shop, our goal is to provide the best off-road modifications and unforgettable experiences for off-road enthusiasts. We are passionate about quality, performance, and helping you push the limits of your vehicle in any terrain. Whether you’re looking for expert advice, high-quality upgrades, or a community of like-minded adventurers, we’re here to make it happen!
                </p>
            </div>


            <h2 className='service-header'>Our Services</h2>
            <div className="service-container">
                
            <div className="service-row">
                    {service.map((services, index) => (
                        <div key={index} className="service-item">
                            <p>{services.name}</p>
                            <img src={services.imageSrc} alt={services.name} className="service-image" />
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
}

export default Home;

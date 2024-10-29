import React, { useState } from 'react';
import './home.css'; // Ensure this file includes the new styles

function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const mockBrands = ['Brand A', 'Brand B', 'Brand C', 'Brand D', 'Brand E', 'Brand F'];

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

            <div className="brands-container">
                <h2>Our Brands</h2>
                <div className="brands-row">
                    {mockBrands.map((brand, index) => (
                        <div key={index} className="brand-item">
                            {brand}
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
        </div>
    );
}

export default Home;

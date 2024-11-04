import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './home.css'; // Ensure this file includes the new styles
import Bilstein from './bilstein.png'
import Rockcrawler from './rockcrawler.png'
import Fox from './fox.png'
import RoughCountry from './roughcountry.png'
import suspension from './suspension.webp'
import gears from './gears.jpg'
import wheel from './wheel.webp'
import bumper from './bumper.png'
import Navbar from '../navbar/Navbar';


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
        { name: 'SUSPENSION', imageSrc: suspension, info: 'Upgrade your off-road ride with durable, high-performance suspensions for ultimate control, comfort, and precision on any terrain.' },
        { name: 'TIRES & WHEEL', imageSrc: wheel, info: 'Gear up with rugged tires and wheels built for off-road power, grip, and durability—ready to tackle any terrain with confidence and control.' },
        { name: 'GEARS & DRIVETRAIN', imageSrc: gears, info: 'Optimize your off-road performance with high-quality gears that deliver precision, durability, and efficiency for tackling any terrain with confidence.' },
        { name: 'BUMPERS, FENDERS, ETC.', imageSrc: bumper, info: 'Transform your off-road vehicle with robust bumpers and powerful lights designed for enhanced protection and visibility, ensuring safety and style on every adventure.' },

    ];

    return (
        <div>
            <div><Navbar/></div>

            <div className="hero-container">
                <div className="hero-text">
                    <h1>Welcome to Our Adventure</h1>
                    <p>Discover the thrill of off-road exploration.</p>
                    <Link className='hero-button' to='/contact'>Contact Us</Link>
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
                            <img src={services.imageSrc} alt={services.name} className="service-image" />
                            <p>{services.name}</p>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
}

export default Home;

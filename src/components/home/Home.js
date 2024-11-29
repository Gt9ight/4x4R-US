import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home.css'; // Ensure this file includes the new styles
import Bilstein from './bilstein.png'
import Rockcrawler from './rockcrawler.png'
import Fox from './fox.png'
import RoughCountry from './roughcountry.png'
import suspension from './suspension.webp'
import gears from './gears.jpg'
import wheel from './offtire.png'
import bumper from './bumper.png'
import bumpervid from './bumpervid.mp4'
import tirevid from './hometirevid.mp4'
import susvid from './suspension vid.mp4'
import drivetrain from './drivetrain.mp4'



function Home() {
   

    const mockBrands = [
        { name: 'Bilstein', imageSrc: Bilstein },
        { name: 'Rock Crawler', imageSrc: Rockcrawler },
        { name: 'Fox', imageSrc: Fox },
        { name: 'RoughCountry', imageSrc: RoughCountry },
    ];

    const homeservice = [
        {
            homename: 'SUSPENSION',
            imageSrc: suspension,
            vidSrc: susvid,
            homeinfo: 'Upgrade your off-road ride with durable, high-performance suspensions for ultimate control, comfort, and precision on any terrain.',
        },
        {
            homename: 'TIRES, WHEELS, BALANCE, ETC.',
            imageSrc: wheel,
            vidSrc: tirevid,
            homeinfo: 'Gear up with rugged tires and wheels built for off-road power, grip, and durability—ready to tackle any terrain with confidence and control.',
        },
        {
            homename: 'GEARS & DRIVETRAIN',
            imageSrc: gears,
            vidSrc: drivetrain,
            homeinfo: 'Optimize your off-road performance with high-quality gears that deliver precision, durability, and efficiency for tackling any terrain with confidence.',
        },
        {
            homename: 'BUMPERS, FENDERS, ETC.',
            imageSrc: bumper,
            vidSrc: bumpervid,
            homeinfo: 'Transform your off-road vehicle with robust bumpers and powerful lights designed for enhanced protection and visibility, ensuring safety and style on every adventure.',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? homeservice.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === homeservice.length - 1 ? 0 : prevIndex + 1));
    };

    const handleCardFlip = () => {
        setFlipped(!flipped); // Toggle the flipped state when the card is clicked
    };
    

    return (
        <div>
            <div className="hero-container">
                <div className="hero-text">
                    <h1>Welcome to Our Adventure</h1>
                    <p>Discover the thrill of off-road exploration.</p>
                    <Link className="hero-button" to="/contact">Contact Us</Link>
                </div>
            </div>

            <h2 className="brand-header">Our Brands</h2>
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

            <div>
            <h2 className='Homeservice-header'>Our Services</h2>
            {isMobile ? (
                <div className="carousel-container">
                    <div className="carousel-card" onClick={handleCardFlip}>
                        <div className="Homeservice-item">
                            <div className={`Homeservice-inner ${flipped ? 'flipped' : ''}`}>
                                <div className="Homeservice-front">
                                    <img src={homeservice[currentIndex].imageSrc} alt={homeservice[currentIndex].homename} />
                                    <p className="service-name">{homeservice[currentIndex].homename}</p>
                                </div>
                                <div className="Homeservice-back">
                                    <h2 className='backserviceTitle'>{homeservice[currentIndex].homename}</h2>
                                    {flipped && homeservice[currentIndex].vidSrc && (
                                        <video className="background-video" autoPlay loop muted>
                                            <source src={homeservice[currentIndex].vidSrc} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    )}
                                    <p>{homeservice[currentIndex].homeinfo}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-button prev" onClick={handlePrev}>‹</button>
                    <button className="carousel-button next" onClick={handleNext}>›</button>
                </div>
            ) : (
                <div className="Homeservice-row">
                    {homeservice.map((services, index) => (
                        <div key={index} className="Homeservice-item">
                            <div className="Homeservice-inner">
                                <div className="Homeservice-front">
                                    <img src={services.imageSrc} alt={services.homename} />
                                    <p className="service-name">{services.homename}</p>
                                </div>
                                <div className="Homeservice-back">
                                    <h2 className='backserviceTitle'>{services.homename}</h2>
                                    {services.vidSrc && (
                                        <video className="background-video" autoPlay loop muted>
                                            <source src={services.vidSrc} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    )}
                                    <p>{services.homeinfo}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
        </div>
    );
}

export default Home;
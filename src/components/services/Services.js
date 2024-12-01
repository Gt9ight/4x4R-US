import React, { useState, useEffect } from 'react';
import './service.css';
import wheel from '../home/wheel.webp';
import servicegears from './servicegears.webp';
import bumper from '../home/bumper.png';
import suspensionservices from './suspensionservices.png';
import ContactForm from '../contact/Contact';
import tiktok from './tiktok.webp'
import instagram from './instagram.png'

function Services() {
  const [isContactVisible, setIsContactVisible] = useState(false);

  useEffect(() => {
    // IntersectionObserver setup
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsContactVisible(true);
        }
      },
      {
        threshold: 0.5, // Trigger animation when 50% of the element is in view
      }
    );

    const contactElement = document.querySelector('.contact-container');
    if (contactElement) {
      observer.observe(contactElement);
    }

    return () => {
      if (contactElement) {
        observer.unobserve(contactElement);
      }
    };
  }, []);

  const servicesOffered = [
    { name: 'SUSPENSION', imageSrc: suspensionservices, info: 'Unlock the ultimate off-road performance with our expert suspension services at [Your Shop Name].' },
    { name: 'TIRES, WHEELS, BALANCE, ETC.', imageSrc: wheel, info: 'Experience the thrill of off-road adventures with confidence by upgrading your vehicle’s wheels and tires.' },
    { name: 'GEARS & DRIVETRAIN', imageSrc: servicegears, info: 'Power through any off-road challenge with precision and reliability by upgrading your gears and drivetrain.' },
    { name: 'BUMPERS, FENDERS, ETC.', imageSrc: bumper, info: 'Prepare your vehicle for the toughest off-road challenges with custom bumpers and fenders.' },
  ];

  return (
    <div>
      <div className="services-container">
        <h1 className="service-title">See some of our many services</h1>
        {servicesOffered.map((service, index) => (
          <div
            key={index}
            className={`services-items ${index % 2 === 0 ? 'normal-layout gradient-left slide-in-left' : 'reverse-layout gradient-right slide-in-right'}`}
          >
            <img src={service.imageSrc} alt={service.name} className="service-image" />
            <div className="service-info">
              <h2>{service.name}</h2>
              <p>{service.info}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={`contact-container ${isContactVisible ? 'fade-in' : ''}`}>
        <h1 className="servContactForm">INTERESTED?</h1>
        <div className="contactInfo">
          <ContactForm />
        </div>

        <div className="social-links">
          <h1>GET TO KNOW US BETTER</h1>
          <p>Check us out on Instagram and TikTok</p>
          <a href="https://www.tiktok.com/@jeep.group.advent?lang=en" target="_blank" rel="noopener noreferrer">
            <img src={tiktok} alt="TikTok" className="social-thumbnail" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" className="social-thumbnail" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Services;

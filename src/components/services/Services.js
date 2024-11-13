import React, { useState, useEffect } from 'react';
import './service.css'
import wheel from '../home/wheel.webp'
import servicegears from './servicegears.webp'
import bumper from '../home/bumper.png'
import suspensionservices from './suspensionservices.png'




function Services() {


  const servicesOffered = [
    { name: 'SUSPENSION', imageSrc: suspensionservices, info: 'Unlock the ultimate off-road performance with our expert suspension services at [Your Shop Name]. Whether you are tackling rough trails, rocky paths, or deep mud, we specialize in customizing and upgrading suspension systems to ensure your vehicle handles the toughest terrains with ease. Our team of professionals will help you choose the right shocks, struts, lift kits, and more to optimize your ride’s comfort, stability, and control. With [Your Shop Name], you will experience smoother rides and improved handling on any off-road adventure. Ready to take your off-road experience to the next level? Contact us today for your suspension upgrade! ' },

    { name: 'TIRES, WHEELS, BALANCE, ETC.', imageSrc: wheel, info: 'Experience the thrill of off-road adventures with confidence by upgrading your vehicle’s wheels and tires at [Your Shop Name]. Specializing in off-road modifications, we offer top-tier, rugged wheels and tires designed to handle any terrain. From rock-crawling trails to sandy dunes, our expert team will guide you in selecting the perfect combination to enhance your vehicle’s performance, traction, and durability. Trust [Your Shop Name] for customized solutions that not only boost your off-road capabilities but also elevate the style of your ride. Ready to gear up for your next off-road escapade? Contact us today!' },

    { name: 'GEARS & DRIVETRAIN', imageSrc: servicegears, info: 'Power through any off-road challenge with precision and reliability by upgrading your gears and drivetrain at [Your Shop Name]. Our expert team specializes in off-road drivetrain modifications, offering everything from gear ratios and differentials to driveshafts and axles. Whether you are looking for improved towing capacity, better traction on challenging terrain, or enhanced overall performance, we will help you select the best gear and drivetrain components for your specific needs. At [Your Shop Name], we ensure your vehicles powertrain is optimized for durability and performance on every adventure. Ready to conquer the trails? Contact us today to upgrade your gears and drivetrain!' },

    { name: 'BUMPERS, FENDERS, ETC.', imageSrc: bumper, info: 'Prepare your vehicle for the toughest off-road challenges with custom bumpers and fenders from [Your Shop Name]. Our rugged, high-quality bumpers are designed to provide maximum protection while enhancing the look and functionality of your ride. Whether you are looking for a heavy-duty front bumper, rear bumper, or custom fenders to shield your vehicle from rocks, mud, and debris, we have got you covered. Our expert team will help you choose the perfect combination to complement your off-road build and ensure your vehicle stays protected in any environment. Ready to upgrade your vehicle’s defense and style? Contact [Your Shop Name] today for the ultimate bumper and fender solutions!' },
    

];
return (
  <div className="services-container">
    <h1 className='service-title'>See some of our many services</h1>
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
);
}

export default Services
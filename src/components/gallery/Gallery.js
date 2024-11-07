import React from 'react'
import './gallery.css'
import construction from './construction.webp'

function Gallery() {
    return (
      <div className="gallery-container">
          <h1>WE ARE WORKING ON IT</h1>
          <img src={construction} alt="Construction" className="construction-image" />
      </div>
    );
  }

export default Gallery
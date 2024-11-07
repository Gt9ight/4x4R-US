import React, { useState } from 'react';
import construction from '../gallery/construction.webp'


function Services() {
  return (
    <div className="gallery-container">
        <h1>WE ARE WORKING ON IT</h1>
        <img src={construction} alt="Construction" className="construction-image" />
    </div>
  );
}

export default Services
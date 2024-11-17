import React from 'react'
import './footer.css'

function Footer() {
  return (
    <footer className="footer-container">
    <div className="footer-content">
      <p>© 2024 Your Company Name. All rights reserved.</p>
      <div className="footer-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
        <a href="/contact">Contact Us</a>
      </div>
    </div>
  </footer>
  )
}

export default Footer
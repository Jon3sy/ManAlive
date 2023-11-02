import React from 'react'
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>123 Main Street</p>
          <p>City, Country</p>
          <p>Email: info@manalive.org</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <Facebook className='icon'/>
           <Instagram className='icon'/>
            <Twitter className='icon'/>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Man Alive. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

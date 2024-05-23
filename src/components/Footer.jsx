import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@ecommerce_website.com</p>
          <p>Phone: +123-456-7890</p>
          <p>Address: 1234 Market St,Delhi, India</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Company Information</h4>
          <p>&copy; {new Date().getFullYear()} E-commerce Website Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;

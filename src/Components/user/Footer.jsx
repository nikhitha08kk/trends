import React from 'react';
import "./style.css" // Create a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 ShopMate. All rights reserved.</p>
        <ul className="social-links">
          <li><a href="https://www.facebook.com">Facebook</a></li>
          <li><a href="https://www.twitter.com">Twitter</a></li>
          <li><a href="https://www.instagram.com">Instagram</a></li>
        </ul>
      </div>
      <div className="footer-legal">
        <a href="/privacy-policy">Privacy Policy</a> | 
        <a href="/terms-of-service"> Terms of Service</a>
      </div>
    </footer>
  );
}

export default Footer;


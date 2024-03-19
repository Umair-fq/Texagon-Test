import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer-text">© 2023 IQTEST.AI</span>
      <div className="social-media">
        <a href="https://instagram.com" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://facebook.com" className="social-icon"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="https://twitter.com" className="social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="https://linkedin.com" className="social-icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook, FaTiktok, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-burgundy)', padding: '60px 0', color: 'var(--color-ivory)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '2rem', marginBottom: '30px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <a href="#" className="social-icon"><FaInstagram /></a>
          <a href="#" className="social-icon"><FaLinkedin /></a>
          <a href="#" className="social-icon"><FaYoutube /></a>
          <a href="#" className="social-icon"><FaFacebook /></a>
          <a href="#" className="social-icon"><FaTiktok /></a>
        </div>
        
        <div style={{ marginBottom: '20px', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          <FaEnvelope /> <a href="mailto:contact@cinebih.com">contact@cinebih.com</a>
        </div>

        <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} CINEBIH. All rights reserved.
        </p>
      </div>
      <style>{`
        .social-icon {
          color: var(--color-gold);
          transition: color 0.3s ease;
        }
        .social-icon:hover {
          color: var(--color-ivory);
        }
      `}</style>
    </footer>
  );
};

export default Footer;

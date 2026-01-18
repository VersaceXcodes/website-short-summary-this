import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      style={{
        backgroundColor: 'var(--color-forest-green)',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        padding: '20px 0',
        boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.3)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo" style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 'bold' }}>
          {isScrolled ? 'CINEBIH' : ''}
        </div>

        {/* Desktop Nav */}
        <nav style={{ display: 'none', gap: '30px', md: { display: 'flex' } }} className="desktop-nav">
          {['Home', 'About', 'Pricing', 'Contact Us'].map((item) => (
            <Link 
              key={item} 
              to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
              style={{ 
                color: 'var(--color-ivory)', 
                fontFamily: 'var(--font-heading)',
                textTransform: 'uppercase',
                fontSize: '1rem',
                letterSpacing: '1px'
              }}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ color: 'var(--color-gold)', cursor: 'pointer', fontSize: '1.5rem' }}>
           {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          backgroundColor: 'var(--color-forest-green)',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          borderTop: '1px solid rgba(255,255,255,0.1)'
        }}>
          {['Home', 'About', 'Pricing', 'Contact Us'].map((item) => (
            <Link 
              key={item} 
              to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
              onClick={() => setMobileMenuOpen(false)}
              style={{ 
                color: 'var(--color-ivory)', 
                fontFamily: 'var(--font-heading)',
                textTransform: 'uppercase'
              }}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
      
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [showLogo, setShowLogo] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Show logo in header when scrolled past a certain point (e.g., passed the hero logo)
      setShowLogo(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-forest py-4 px-6 border-b-2 border-gold/50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Navigation Left */}
        <nav className="flex items-center space-x-6 md:space-x-12">
          <Link to="/" className={`text-ivory font-smut text-xl md:text-2xl hover:text-gold transition-colors tracking-wide ${location.pathname === '/' ? 'text-gold' : ''}`}>HOME</Link>
          <Link to="/about" className={`text-ivory font-smut text-xl md:text-2xl hover:text-gold transition-colors tracking-wide ${location.pathname === '/about' ? 'text-gold' : ''}`}>ABOUT</Link>
        </nav>

        {/* Center Logo (visible on scroll) */}
        <div className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${showLogo ? 'opacity-100 translate-y-[-50%]' : 'opacity-0 translate-y-[-100%]'}`}>
           <Link to="/" className="text-gold font-smut text-3xl tracking-widest border-2 border-gold rounded-full px-4 py-2 bg-forest">CINEBIH</Link>
        </div>

        {/* Navigation Right */}
        <nav className="flex items-center space-x-6 md:space-x-12">
          <Link to="/pricing" className={`text-ivory font-smut text-xl md:text-2xl hover:text-gold transition-colors tracking-wide ${location.pathname === '/pricing' ? 'text-gold' : ''}`}>PRICING</Link>
          <Link to="/contact" className={`text-ivory font-smut text-xl md:text-2xl hover:text-gold transition-colors tracking-wide ${location.pathname === '/contact' ? 'text-gold' : ''}`}>CONTACT US</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

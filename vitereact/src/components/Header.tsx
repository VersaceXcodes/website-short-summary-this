import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

interface HeaderProps {
  showLogo: boolean;
}

const Header: React.FC<HeaderProps> = ({ showLogo }) => {
  const location = useLocation();

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 h-24 transition-all duration-300 ${
      showLogo 
        ? 'bg-forest border-b-2 border-gold/50 shadow-lg' 
        : 'bg-transparent border-b-0 border-transparent'
    }`}>
      <div className="container mx-auto flex justify-between items-center relative h-full">
        {/* Navigation Left */}
        <nav className="flex items-center space-x-6 md:space-x-12">
          <Link to="/" className={`text-ivory font-smut text-xl md:text-2xl hover:text-gold transition-colors tracking-wide ${location.pathname === '/' ? 'text-gold' : ''}`}>HOME</Link>
          <Link to="/about" className={`text-ivory font-smut text-xl md:text-2xl hover:text-gold transition-colors tracking-wide ${location.pathname === '/about' ? 'text-gold' : ''}`}>ABOUT</Link>
        </nav>

        {/* Center Logo (visible on scroll) */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
           {showLogo && (
             <Link to="/">
                <Logo isHeader={true} />
             </Link>
           )}
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

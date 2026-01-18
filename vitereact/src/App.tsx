import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';

const Home: React.FC<{ isScrolled: boolean }> = ({ isScrolled }) => (
  <main className="bg-ivory min-h-screen">
    <Hero showHeaderLogo={isScrolled} />
    {/* Other sections will be added here */}
    <div className="h-screen"></div> {/* Placeholder to allow scrolling */}
  </main>
);

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="font-sans antialiased text-forest bg-ivory min-h-screen flex flex-col">
        <Header showLogo={isScrolled} />
        <Routes>
          <Route path="/" element={<Home isScrolled={isScrolled} />} />
          <Route path="/about" element={<div className="pt-24 text-center">About Page Coming Soon</div>} />
          <Route path="/pricing" element={<div className="pt-24 text-center">Pricing Page Coming Soon</div>} />
          <Route path="/contact" element={<div className="pt-24 text-center">Contact Page Coming Soon</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';

const Home: React.FC<{ isScrolled: boolean }> = ({ isScrolled }) => (
  <main className="bg-ivory min-h-screen">
    <Hero showHeaderLogo={isScrolled} />
    <Services />
    <FAQ />
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
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home isScrolled={isScrolled} />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<div className="min-h-screen pt-32 text-center text-forest font-smut text-4xl flex items-center justify-center flex-col">
              <span className="text-8xl mb-4">404</span>
              <span>Page Not Found</span>
              <a href="/" className="mt-8 text-xl font-smut-full bg-rust text-ivory px-6 py-3 rounded hover:bg-gold transition-colors">Return Home</a>
            </div>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

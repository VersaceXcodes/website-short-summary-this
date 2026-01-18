import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
// Import other pages/components as we build them

const Home = () => (
  <main className="bg-ivory min-h-screen">
    <Hero />
    {/* Other sections will be added here */}
    <div className="h-screen"></div> {/* Placeholder to allow scrolling */}
  </main>
);

const App = () => {
  return (
    <Router>
      <div className="font-sans antialiased text-forest bg-ivory min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div className="pt-24 text-center">About Page Coming Soon</div>} />
          <Route path="/pricing" element={<div className="pt-24 text-center">Pricing Page Coming Soon</div>} />
          <Route path="/contact" element={<div className="pt-24 text-center">Contact Page Coming Soon</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

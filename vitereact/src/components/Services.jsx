import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaFileAlt, FaVideo, FaCloudUploadAlt } from 'react-icons/fa';

const ServiceItem = ({ icon, title, description }) => (
  <div style={{ textAlign: 'center', padding: '20px' }}>
    <div style={{ fontSize: '3rem', color: 'var(--color-gold)', marginBottom: '20px' }}>
      {icon}
    </div>
    <h3 style={{ color: 'var(--color-forest-green)', marginBottom: '15px' }}>{title}</h3>
    <p style={{ color: '#333', lineHeight: '1.6' }}>{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: <FaSearch />,
      title: '1. Research',
      description: 'We find the highest performing content creators and content within your niche/business on each social media platforms.'
    },
    {
      icon: <FaFileAlt />,
      title: '2. Script',
      description: 'Using the research and information on your business, we create you a full months worth of scripts.'
    },
    {
      icon: <FaVideo />,
      title: '3. Film & Edit',
      description: 'Using the scripts you film the videos. We edit the videos for you.'
    },
    {
      icon: <FaCloudUploadAlt />,
      title: '4. Upload',
      description: 'We upload the content on your chosen social media channels, in a manner that\'s optimized for each platform (Instagram, TikTok, Facebook, YouTube, LinkedIn).'
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-ivory)' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', color: 'var(--color-forest-green)', marginBottom: '60px', fontSize: '2.5rem' }}>
          How Our Services Work
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '40px',
          marginBottom: '60px'
        }}>
          {services.map((s, index) => (
            <ServiceItem key={index} {...s} />
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <Link to="/about" className="btn btn-primary">
            Learn more about what we do
          </Link>
          <Link to="/pricing" className="btn btn-primary" style={{ backgroundColor: 'var(--color-gold)' }}>
            Learn more about our pricing
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;

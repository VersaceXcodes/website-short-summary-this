import React from 'react';

const Hero = () => {
  return (
    <section style={{
      backgroundColor: 'var(--color-cognac-brown)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      padding: '100px 20px',
      overflow: 'hidden'
    }}>
      {/* Background Logo */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '15vw',
        fontFamily: 'var(--font-heading)',
        color: 'rgba(0,0,0,0.1)',
        zIndex: 0,
        pointerEvents: 'none',
        whiteSpace: 'nowrap'
      }}>
        CINEBIH
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Left Side: Description */}
        <div style={{ flex: '1 1 400px', padding: '20px', maxWidth: '600px' }}>
          <p style={{
            fontFamily: 'var(--font-heading)', // Approximating CA SMUT FULL
            fontSize: '1.5rem',
            lineHeight: '1.6',
            color: 'var(--color-ivory)',
            fontWeight: '300'
          }}>
            We help businesses grow faster by expanding their reach and attracting new clients through powerful social media strategies that connect brands with audiences worldwide. From strategy to execution, everything is handled by our team — so you can focus on scaling your business.
          </p>
        </div>

        {/* Right Side: Headline */}
        <div style={{ flex: '1 1 400px', padding: '20px', textAlign: 'right' }}>
          <h1 style={{
            fontFamily: 'var(--font-heading)', // Approximating CA SMUT
            fontSize: '4rem',
            lineHeight: '1.1',
            color: 'var(--color-gold)',
            textTransform: 'uppercase'
          }}>
            Taking Your<br />
            Business to<br />
            the Next Level
          </h1>
        </div>

      </div>
    </section>
  );
};

export default Hero;

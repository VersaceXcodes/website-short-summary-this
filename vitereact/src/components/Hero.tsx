import React from 'react';
import Logo from './Logo';

interface HeroProps {
  showHeaderLogo: boolean;
}

const Hero: React.FC<HeroProps> = ({ showHeaderLogo }) => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-forest overflow-hidden px-6 py-20 pt-32">
       {/* Background Texture/Grain could be added here for more retro feel */}
       
       <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-40 items-center relative z-10">
        {/* Left Side: Description */}
        <div className="order-2 lg:order-1 flex justify-start">
          <p className="text-ivory font-smut-full text-lg md:text-xl lg:text-2xl leading-relaxed max-w-lg text-left drop-shadow-md">
            We help businesses grow faster by expanding their reach and attracting new clients through powerful social media strategies that connect brands with audiences worldwide. From strategy to execution, everything is handled by our team — so you can focus on scaling your business.
          </p>
        </div>

        {/* Right Side: Tagline */}
        <div className="order-1 lg:order-2 flex justify-end">
          <h1 className="text-gold font-smut text-5xl md:text-7xl lg:text-8xl leading-[0.9] uppercase text-right drop-shadow-lg transform rotate-[-2deg]">
            Taking Your<br />
            Business to<br />
            the Next<br />
            Level
          </h1>
        </div>
      </div>

      {/* Center Logo - conditionally rendered based on scroll */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
        {!showHeaderLogo && (
           <Logo className="w-64 h-64 md:w-96 md:h-96 shadow-2xl" />
        )}
      </div>
    </section>
  );
};

export default Hero;

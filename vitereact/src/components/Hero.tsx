import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-cognac overflow-hidden px-6 py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side: Description */}
        <div className="order-2 md:order-1 pointer-events-none">
          <p className="text-ivory font-smut-full text-lg md:text-2xl lg:text-3xl leading-relaxed max-w-xl pointer-events-auto">
            We help businesses grow faster by expanding their reach and attracting new clients through powerful social media strategies that connect brands with audiences worldwide. From strategy to execution, everything is handled by our team — so you can focus on scaling your business.
          </p>
        </div>

        {/* Right Side: Tagline */}
        <div className="order-1 md:order-2 text-right pointer-events-none">
          <h1 className="text-gold font-smut text-6xl md:text-8xl lg:text-9xl leading-[0.9] uppercase pointer-events-auto">
            Taking Your<br />
            Business to<br />
            the Next<br />
            Level
          </h1>
        </div>
      </div>

      {/* Center Logo Placeholder - Positioned absolutely in center */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
         {/* This will be handled by the layout or scroll logic later, for now just static */}
         <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-forest/20 border-8 border-gold/10 flex items-center justify-center backdrop-blur-sm">
            <span className="text-gold/20 font-smut text-8xl">LOGO</span>
         </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  isHeader?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', isHeader = false }) => {
  return (
    <motion.div 
      className={`relative flex items-center justify-center border-2 border-gold rounded-full bg-forest text-gold font-smut tracking-widest ${className}`}
      layoutId="main-logo"
      initial={false}
      transition={{ 
        type: "spring", 
        stiffness: 200, 
        damping: 25,
        duration: 0.8
      }}
    >
      <span className={`${isHeader ? 'text-xl px-3 py-1' : 'text-5xl md:text-7xl px-8 py-4'} transition-all duration-500`}>
        CINEBIH
      </span>
      {/* Decorative stars/retro elements */}
      {!isHeader && (
        <>
          <span className="absolute -top-4 text-gold text-2xl">★</span>
          <span className="absolute -bottom-4 text-gold text-2xl">★</span>
        </>
      )}
    </motion.div>
  );
};

export default Logo;

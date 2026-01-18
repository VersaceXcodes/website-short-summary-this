import React from 'react';
import { Instagram, Facebook, Youtube, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-burgundy text-ivory py-16 px-6">
      <div className="container mx-auto flex flex-col items-center">
        {/* Contact Email */}
        <div className="mb-12 text-center">
            <h3 className="text-gold font-smut text-3xl mb-4 uppercase">Contact Us</h3>
            <a href="mailto:contact@cinebih.com" className="flex items-center justify-center text-2xl font-smut-full hover:text-gold transition-colors">
                <Mail className="w-6 h-6 mr-3" />
                contact@cinebih.com
            </a>
        </div>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a href="#" className="p-3 bg-gold/20 rounded-full border border-gold hover:bg-gold hover:text-burgundy transition-all duration-300 group">
                <Instagram className="w-6 h-6 md:w-8 md:h-8" />
            </a>
            {/* TikTok Icon */}
            <a href="#" className="p-3 bg-gold/20 rounded-full border border-gold hover:bg-gold hover:text-burgundy transition-all duration-300 group flex items-center justify-center">
                 <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
                 </svg>
            </a>
            <a href="#" className="p-3 bg-gold/20 rounded-full border border-gold hover:bg-gold hover:text-burgundy transition-all duration-300 group">
                <Facebook className="w-6 h-6 md:w-8 md:h-8" />
            </a>
            <a href="#" className="p-3 bg-gold/20 rounded-full border border-gold hover:bg-gold hover:text-burgundy transition-all duration-300 group">
                <Youtube className="w-6 h-6 md:w-8 md:h-8" />
            </a>
             <a href="#" className="p-3 bg-gold/20 rounded-full border border-gold hover:bg-gold hover:text-burgundy transition-all duration-300 group">
                <Linkedin className="w-6 h-6 md:w-8 md:h-8" />
            </a>
        </div>
        
        <div className="text-center font-smut-full opacity-60">
            &copy; {new Date().getFullYear()} Cinebih. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

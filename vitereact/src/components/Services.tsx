import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Scroll, Film, UploadCloud } from 'lucide-react';

const Services: React.FC = () => {
  const steps = [
    {
      icon: <Search className="w-12 h-12 text-forest" />,
      title: 'Research',
      description: 'We find the highest performing content creators and content within your niche/business on each social media platforms.'
    },
    {
      icon: <Scroll className="w-12 h-12 text-forest" />,
      title: 'Script',
      description: 'Using the research and information on your business, we create you a full months worth of scripts.'
    },
    {
      icon: <Film className="w-12 h-12 text-forest" />,
      title: 'Film & Edit',
      description: 'Using the scripts you film the videos. We edit the videos for you from subtitles to color grading.'
    },
    {
      icon: <UploadCloud className="w-12 h-12 text-forest" />,
      title: 'Upload',
      description: 'We upload the content on your chosen social media channels, optimized for each platform (Instagram, TikTok, Facebook, YouTube, LinkedIn).'
    }
  ];

  return (
    <section className="bg-ivory py-24 px-6 text-forest">
      <div className="container mx-auto">
        <h2 className="text-forest font-smut text-5xl md:text-6xl text-center mb-16 uppercase">How Our Services Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white/50 rounded-lg shadow-sm border border-gold/20 hover:border-gold transition-colors duration-300">
              <div className="mb-6 p-4 bg-gold/20 rounded-full border-2 border-gold">
                {step.icon}
              </div>
              <h3 className="text-2xl font-smut text-gold mb-4 uppercase">{step.title}</h3>
              <p className="font-smut-full text-forest/80 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
          <Link to="/about" className="inline-block px-8 py-4 bg-rust text-ivory font-smut text-xl uppercase tracking-wider hover:bg-forest transition-colors duration-300 shadow-lg text-center">
            Learn more about what we do
          </Link>
          <Link to="/pricing" className="inline-block px-8 py-4 bg-rust text-ivory font-smut text-xl uppercase tracking-wider hover:bg-forest transition-colors duration-300 shadow-lg text-center">
            Learn more about our pricing
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;

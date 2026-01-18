import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="bg-ivory min-h-screen pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Why Cost Section */}
        <section className="mb-20 text-center">
          <h1 className="text-forest font-smut text-5xl md:text-7xl mb-8 uppercase">Why Does Our Service Cost This Much?</h1>
          <p className="text-forest/80 font-smut-full text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-left md:text-center">
            Behind each content we create is an entire team of people ensuring it gets the job done. Our social media researchers dig into your industry, study your competition, and track trends so your strategy remains cutting-edge. Our scriptwriters craft ideas for content that will halt viewers dead in their tracks in seconds. Our editors transform your uncut footage into completed, scroll-stopping videos for TikTok, Instagram, YouTube Shorts, Facebook, and LinkedIn. Finally, our social media managers upload and schedule everything in the correct format, at the right time, to maximize its effect.
          </p>
          <p className="text-forest/80 font-smut-full text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mt-6 text-left md:text-center">
            When you invest with us, you're not just investing in video editing — you're investing in a full creative team dedicated to growing your business online. This level of expertise, attention, and detail is what our pricing covers and causes your content not only look great, but actually perform.
          </p>
        </section>

        {/* Pricing Package */}
        <section className="flex flex-col items-center">
          <h2 className="text-gold font-smut text-4xl md:text-6xl mb-12 uppercase">Our Services</h2>
          
          <div className="bg-forest text-ivory p-8 md:p-12 rounded-lg border-4 border-gold shadow-2xl max-w-2xl w-full relative overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
             {/* Retro decorative elements */}
             <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <span className="text-9xl font-smut text-gold">★</span>
             </div>

            <h3 className="text-gold font-smut text-4xl md:text-5xl mb-2 uppercase">1. STARTER</h3>
            <p className="text-xl font-smut-full mb-8 text-gold/80 tracking-widest">15 SHORTS/MONTH</p>
            
            <ul className="space-y-4 mb-12 font-smut-full text-lg">
              {['Onboarding/Review Calls', 'Research', 'Scripting', 'Editing', 'Uploading', '7 Sales Focused Instagram Stories', '24/7 Weekday Email Support', 'Monthly Reports'].map((item) => (
                <li key={item} className="flex items-start">
                  <Check className="w-6 h-6 text-gold mr-3 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
               <li className="flex items-start pt-4 border-t border-gold/30 mt-4">
                  <Check className="w-6 h-6 text-gold mr-3 flex-shrink-0" />
                  <span className="font-bold text-gold">BONUS: Optimize Your Profile Checklist</span>
                </li>
            </ul>

            <div className="text-center mt-8">
              <p className="text-3xl md:text-4xl font-smut text-gold mb-6">€ 1950/MONTH</p>
              <button className="bg-rust text-ivory font-smut text-2xl px-10 py-4 uppercase tracking-widest hover:bg-cognac transition-colors shadow-lg w-full md:w-auto cursor-pointer">
                Book Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pricing;

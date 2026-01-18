import React from 'react';

const Contact = () => {
  return (
    <div className="bg-ivory min-h-screen pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
         <h1 className="text-forest font-smut text-6xl md:text-8xl mb-8 uppercase text-center">Contact Us</h1>
         <p className="text-center text-forest/80 font-smut-full text-xl mb-12">
            Have questions? Ready to start? Send us a message or email us directly at <a href="mailto:contact@cinebih.com" className="text-gold underline hover:text-rust">contact@cinebih.com</a>
         </p>

         <div className="bg-forest p-8 md:p-12 rounded-lg shadow-2xl border-2 border-gold max-w-2xl mx-auto">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label htmlFor="name" className="block text-gold font-smut text-xl uppercase mb-2">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        className="w-full bg-ivory/10 border border-gold/30 rounded p-4 text-ivory placeholder-ivory/30 focus:outline-none focus:border-gold transition-colors font-smut-full"
                        placeholder="Your Name"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-gold font-smut text-xl uppercase mb-2">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="w-full bg-ivory/10 border border-gold/30 rounded p-4 text-ivory placeholder-ivory/30 focus:outline-none focus:border-gold transition-colors font-smut-full"
                        placeholder="your@email.com"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-gold font-smut text-xl uppercase mb-2">Message</label>
                    <textarea 
                        id="message" 
                        rows={5}
                        className="w-full bg-ivory/10 border border-gold/30 rounded p-4 text-ivory placeholder-ivory/30 focus:outline-none focus:border-gold transition-colors font-smut-full"
                        placeholder="How can we help you?"
                    ></textarea>
                </div>
                <button type="submit" className="w-full bg-rust text-ivory font-smut text-2xl py-4 uppercase tracking-widest hover:bg-gold hover:text-forest transition-colors shadow-lg mt-4 cursor-pointer">
                    Send Message
                </button>
            </form>
         </div>
      </div>
    </div>
  );
};

export default Contact;

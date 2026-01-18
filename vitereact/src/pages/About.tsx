
const About = () => {
  return (
    <div className="bg-ivory min-h-screen pt-32 pb-20 px-6">
       {/* Our Story */}
       <section className="container mx-auto max-w-4xl mb-32">
          <h1 className="text-forest font-smut text-6xl md:text-8xl mb-12 uppercase text-center">Our Story</h1>
          <div className="text-forest/80 font-smut-full text-lg md:text-xl leading-relaxed space-y-6">
              <p>We started this agency with one key principle:</p>
              <p className="text-2xl font-smut text-forest">There's a story worth telling for every business — it just needs the right content to be told. We identified a gap.</p>
              <p>So many great businesses — from gyms and restaurants to online coaches and e-commerce businesses — were struggling, not growing online. We realized social media was where to get seen, but creating content that actually works was scary:</p>
              <ul className="list-disc pl-6 space-y-2">
                  <li>What do we share?</li>
                  <li>How do we make it stand out?</li>
                  <li>How do we find the time?</li>
              </ul>
              <h3 className="text-3xl font-smut text-forest mt-8 mb-4">That's where we stepped in.</h3>
              <p>We founded Cinebih to take the guesswork out of content creation. By discovering what performs best in every industry, we script a month, guide you through simple filming, then handle the editing, optimizing, and posting on TikTok, Instagram, YouTube Shorts, Facebook, and LinkedIn.</p>
              <p>Our strategy rests upon one simple fact: each industry has differences.</p>
              <ul className="list-disc pl-6 space-y-2">
                  <li>Restaurants need content that brings local consumers to their front door.</li>
                  <li>E-commerce businesses need global exposure to be seen above the crowd.</li>
                  <li>Coaches and educators need personal branding in order to build trust.</li>
                  <li>Service professionals need credibility and consistency to gain clients.</li>
              </ul>
              <p>We don't believe in generic thought. We believe in tailored content to suit your industry and goals.</p>
              <p>What started as an idea to help a few local businesses has grown into an arena where brands from everywhere can leverage social media into their biggest growth engine.</p>
              <p>Because at the end of the day, content isn't about views.</p>
              <p className="text-2xl font-smut text-forest">It's about creating relationships, fostering trust, and building your business.</p>
          </div>
       </section>

       {/* Detailed Services */}
       <section className="container mx-auto max-w-5xl">
           <h2 className="text-forest font-smut text-5xl md:text-7xl mb-16 uppercase text-center">Our Process</h2>
           
           <div className="space-y-20">
               {/* Research */}
               <div className="bg-white/50 p-8 rounded-lg border border-gold/20">
                   <h3 className="text-gold font-smut text-4xl mb-6 uppercase">Research</h3>
                   <h4 className="text-forest font-smut text-2xl mb-4">Why & What do we research?</h4>
                   <div className="text-forest/80 font-smut-full text-lg space-y-4">
                       <p className="font-bold">On average social media users watch for 3-4 seconds before scrolling away.</p>
                       <p>We look for patterns and what keeps viewers engaged.</p>
                       <p>we ensure to spend 10 -15 hours for your brand in research. Patterns constantly change so we ensure to stay up to date by researching roughly every 2-4 weeks to keep your business up to date with all other social media users.</p>
                       <p>What we look for are hooks that are used and created results for multiple businesses or niches similar to your business model.</p>
                   </div>
               </div>

               {/* Script */}
               <div className="bg-white/50 p-8 rounded-lg border border-gold/20">
                   <h3 className="text-gold font-smut text-4xl mb-6 uppercase">Script</h3>
                   <h4 className="text-forest font-smut text-2xl mb-4">Why & What is that we script?</h4>
                   <div className="text-forest/80 font-smut-full text-lg space-y-4">
                       <p>We script a whole month of videos because consistency is the best method for social media growth. It does not build momentum if you post here and there, but frequent appearances keep you in front of your audience and signal sites that your content is valuable.</p>
                       <p>Planning 30 days' content in advance, we remove the stress of "what do I post today?" and give you a definite roadmap. Each script is tailored to your business, written to capture attention quickly, and designed to engage — turning views into followers and followers into customers.</p>
                   </div>
               </div>

               {/* Film & Edit */}
               <div className="bg-white/50 p-8 rounded-lg border border-gold/20">
                   <h3 className="text-gold font-smut text-4xl mb-6 uppercase">Film & Edit</h3>
                   <h4 className="text-forest font-smut text-2xl mb-4">What & Why do you film & we Edit?</h4>
                   <div className="text-forest/80 font-smut-full text-lg space-y-4">
                       <p>Hiring a filmmaking team can cost a lot and not all business can afford it.</p>
                       <p>Most phones can film good enough footage since social media only supports 1080p at 30fps</p>
                       <p>we also can help you learn how to use your own cameras for the best results and videos don't need to be cinematic as all they need is to be high quality and tell a story or relay a message.</p>
                       <p>we do the editing from, subtitle, colour-grading to putting all the videos together to ensure a quality video as result, also editing is the hardest part of filming as its the most time consuming, that way we save you time to focus on your business.</p>
                   </div>
               </div>

               {/* Upload */}
               <div className="bg-white/50 p-8 rounded-lg border border-gold/20">
                   <h3 className="text-gold font-smut text-4xl mb-6 uppercase">Upload</h3>
                   <h4 className="text-forest font-smut text-2xl mb-4">Why do we Upload?</h4>
                   <div className="text-forest/80 font-smut-full text-lg space-y-4">
                       <p>Each platform (TikTok, Instagram, yt shorts, etc) has they're own algorithm ( how social media understands who to show your content too).</p>
                       <p>That is why we ensure to post each content based off each platform from TikTok, Instagram, yt shorts & LinkedIn. Too ensure best results from each and every platform.</p>
                   </div>
               </div>
           </div>

           <div className="text-center mt-20">
                <a href="/pricing" className="inline-block bg-rust text-ivory font-smut text-2xl px-12 py-5 uppercase tracking-widest hover:bg-forest transition-colors shadow-lg">
                    Book Now
                </a>
           </div>
       </section>
    </div>
  );
};

export default About;

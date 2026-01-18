import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggle }) => (
  <div className="border-b border-gold/30 last:border-0">
    <button 
      className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
      onClick={toggle}
    >
      <h3 className="text-xl md:text-2xl font-smut text-forest pr-8 uppercase group-hover:text-gold transition-colors">{question}</h3>
      {isOpen ? <ChevronUp className="w-6 h-6 text-gold flex-shrink-0" /> : <ChevronDown className="w-6 h-6 text-gold flex-shrink-0" />}
    </button>
    <div 
      className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[2000px] opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
    >
      <div className="text-forest/80 font-smut-full text-lg leading-relaxed whitespace-pre-wrap">
        {answer}
      </div>
    </div>
  </div>
);

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I know I need this service?",
      answer: "If you're a business owner wanting to scale and sell on social media and are willing to put money into a system that does work then book a call. If your not quiet ready to book any any other question please feel free to contact us about anything."
    },
    {
      question: "Why should my business be on social media?",
      answer: (
        <>
          There are 4.26 billion social media users.
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>There are 4.26 billion social media users</li>
            <li>54% of people use social media to research products</li>
            <li>71% of purchase decisions are made on social media</li>
          </ul>
        </>
      )
    },
    {
        question: "What is the point of building up your personal brand?",
        answer: (
            <>
                What do all these people and their businesses have in common?
                
                <h4 className="font-bold mt-4 text-forest">Gary Vaynerchuk (GaryVee) – Entrepreneurship & Marketing</h4>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Built his brand by documenting his journey growing his family wine business.</li>
                    <li>Uses short-form content to share advice, motivation, and real-life experiences.</li>
                    <li>His personal brand powers his media agency (VaynerMedia) and investments.</li>
                </ul>

                <h4 className="font-bold mt-4 text-forest">MrBeast (Jimmy Donaldson) – Entertainment</h4>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Started with small, quirky challenge videos.</li>
                    <li>His personal style of generosity, big challenges, and storytelling created a cult-like following.</li>
                    <li>Now runs multiple businesses (MrBeast Burger, Feastables) fueled by his brand.</li>
                </ul>

                <h4 className="font-bold mt-4 text-forest">Logan Paul & KSI – Entertainment / Boxing / Business</h4>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Built audiences through YouTube personalities.</li>
                    <li>Personal brands now power massive ventures (Prime Hydration, boxing events).</li>
                </ul>

                <h4 className="font-bold mt-4 text-forest">Alex Hormozi – Business & Fitness</h4>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Shares straightforward, no-BS advice on business growth.</li>
                    <li>His personal brand (known for simplicity, transparency, and value-first content) drove his book sales and business consulting.</li>
                </ul>

                <p className="mt-4">They all created their own personal brands through performing, singing, TV, or social media. When they created companies due to the fact that they had such GIANT personal brands their companies thrived. Their own personal brand was literally their marketing. Social media is the ultimate solution for your daily individual to be able to do this without becoming an actor, singer, or athletic personality. An average businessman can establish themselves and their business through social media like never before. It is a tremendous opportunity, if you don't take it your competition will and take all of your customers with them.</p>
            </>
        )
    },
    {
      question: "I’m not comfortable on camera — can this still work for me?",
      answer: "Absolutely. Many businesses use voiceovers, product shots, animations, or behind-the-scenes footage instead of being on camera. We’ll design a strategy that works for you. But there's no better time to tackle your fears, than now. Customers will be more comfortable when they know who the face of the business is or the staff, but we can always find a solution around faceless content."
    },
    {
      question: "Do I need to record the videos myself?",
      answer: (
        <>
            <p>Yes — you'll film the videos (To keep the price as low as possible).</p>
            <p className="mt-2">We handle the rest: scripting, editing, branding, and upload.</p>
            <p className="mt-2">we do offer a videographer at an additional cost.</p>
        </>
      )
    },
    {
      question: "How much time does it take?",
      answer: "We do as much of the work as is feasible. We will research, script, edit and upload for you. Your task is only to shoot as it is your own brand. Time to shoot depends from individual to individual but for all practical purposes 4-12 hours a month is sufficient. But no guarantee of the time is possible as for all it is not the same."
    },
    {
      question: "What are the outcomes that I can experience?",
      answer: (
        <>
            <p>Results vary for each person. Your niche, target, posts per month all determine how fast that is going to grow!</p>
            <p className="mt-2">we created strong personal brands, 10xed the company, and loyal followers that just so happen to be our target audience.</p>
            <p className="mt-2">Unlike paid advertising avenues social media seems to be far less favourable. But the compensations that you'll actually be reaping are so much higher in value even if it takes longer to reap. I'm glad it's tough because otherwise everyone would be doing it.</p>
        </>
      )
    },
    {
      question: "Do you also respond to messages and comments?",
      answer: "yes we do, we also help integrate AI which automatically responds to basic comments, like questions about your business and respond to DM (messages), for more in depth questions we answer them directly."
    },
    {
      question: "What makes our agency different from other marketing companies?",
      answer: "Fewer yet focus solely on ads or marketing in general. We deal specifically with short-form content — today's fastest-growing method of reaching loyal consumers. And all of our strategies are industry-specific rather than generic."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-ivory py-24 px-6 text-forest">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-forest font-smut text-5xl md:text-6xl text-center mb-16 uppercase">Frequently Asked Questions</h2>
        <div className="bg-white/50 rounded-lg p-6 md:p-10 shadow-sm border border-gold/20">
            {faqs.map((faq, index) => (
                <FAQItem 
                    key={index} 
                    question={faq.question} 
                    answer={faq.answer} 
                    isOpen={openIndex === index} 
                    toggle={() => handleToggle(index)} 
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

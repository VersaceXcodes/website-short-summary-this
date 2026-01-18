import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ 
      borderBottom: '1px solid var(--color-gold)', 
      marginBottom: '10px' 
    }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          textAlign: 'left',
          background: 'none',
          border: 'none',
          padding: '20px 0',
          color: 'var(--color-gold)',
          fontSize: '1.2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: 'var(--font-heading)'
        }}
      >
        {question}
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && (
        <div style={{ 
          paddingBottom: '20px', 
          color: 'var(--color-ivory)', 
          lineHeight: '1.6',
          whiteSpace: 'pre-wrap'
        }}>
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "How do I know I need this service?",
      answer: "If you're a business owner wanting to scale and sell on social media and are willing to put money into a system that does work then book a call. If you're not quite ready to book or have any other questions please feel free to contact us about anything."
    },
    {
      question: "Why should my business be on social media?",
      answer: `There are 4.26 billion social media users.
• 54% of people use social media to research products
• 71% of purchase decisions are made on social media`
    },
    {
      question: "What is the point of building up your personal brand?",
      answer: `They all created their own personal brands through performing, singing, TV, or social media. When they created companies due to the fact that they had such GIANT personal brands their companies thrived. Their own personal brand was literally their marketing. Social media is the ultimate solution for your daily individual to be able to do this without becoming an actor, singer, or athletic personality. An average businessman can establish themselves and their business through social media like never before. It is a tremendous opportunity, if you don't take it your competition will and take all of your customers with them.`
    },
    {
      question: "I’m not comfortable on camera — can this still work for me?",
      answer: "Absolutely. Many businesses use voiceovers, product shots, animations, or behind-the-scenes footage instead of being on camera. We’ll design a strategy that works for you. But there's no better time to tackle your fears, than now. Customers will be more comfortable when they know who the face of the business is or the staff, but we can always find a solution around faceless content."
    },
    {
      question: "Do I need to record the videos myself?",
      answer: "Yes — you'll film the videos (To keep the price as low as possible).\n\nWe handle the rest: scripting, editing, branding, and upload.\n\nWe do offer a videographer at an additional cost."
    },
    {
      question: "How much time does it take?",
      answer: "We do as much of the work as is feasible. We will research, script, edit and upload for you. Your task is only to shoot as it is your own brand. Time to shoot depends from individual to individual but for all practical purposes 4-12 hours a month is sufficient. But no guarantee of the time is possible as for all it is not the same."
    },
    {
      question: "What are the outcomes that I can experience?",
      answer: "Results vary for each person. Your niche, target, posts per month all determine how fast that is going to grow!\n\nWe created strong personal brands, 10xed the company, and loyal followers that just so happen to be our target audience.\n\nUnlike paid advertising avenues social media seems to be far less favourable. But the compensations that you'll actually be reaping are so much higher in value even if it takes longer to reap. I'm glad it's tough because otherwise everyone would be doing it."
    },
    {
      question: "Do you also respond to messages and comments?",
      answer: "Yes we do, we also help integrate AI which automatically responds to basic comments, like questions about your business and respond to DM (messages), for more in depth questions we answer them directly."
    },
    {
      question: "What makes our agency different from other marketing companies?",
      answer: "Fewer yet focus solely on ads or marketing in general. We deal specifically with short-form content — today's fastest-growing method of reaching loyal consumers. And all of our strategies are industry-specific rather than generic."
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-forest-green)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2.5rem' }}>FAQ</h2>
        {faqs.map((faq, index) => (
          <FAQItem key={index} {...faq} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;

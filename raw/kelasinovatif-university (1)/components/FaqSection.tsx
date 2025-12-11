import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from '../types';

const faqs: FaqItem[] = [
  { question: "Does it work well on mobile?", answer: "Yes, the entire platform is fully responsive and optimized for mobile devices, tablets, and desktops." },
  { question: "Is the navigation simple and clear?", answer: "We prioritize user experience with intuitive navigation structures designed for clarity." },
  { question: "Is there an effective search bar?", answer: "Our advanced search functionality allows you to find courses, faculty, and resources instantly." },
  { question: "Is contact/support information visible?", answer: "Support contacts are available in the header, footer, and dedicated contact page." },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 border border-gray-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4">FAQ & Answer</span>
          <h2 id="faq-heading" className="text-4xl font-medium">Answers to your questions, every<br/>step of the way.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="h-[500px] overflow-hidden rounded-lg">
             <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2669&auto=format&fit=crop" className="w-full h-full object-cover" alt="Student thinking" />
          </div>

          <div className="divide-y divide-gray-200" role="presentation">
             {faqs.map((faq, index) => {
               const isOpen = openIndex === index;
               const buttonId = `faq-button-${index}`;
               const panelId = `faq-panel-${index}`;

               return (
                 <div key={index} className="py-6">
                   <h3>
                     <button 
                       id={buttonId}
                       className="w-full flex justify-between items-center text-left focus:outline-none group focus-visible:ring-2 focus-visible:ring-eduzin-dark focus-visible:ring-offset-2 rounded"
                       onClick={() => setOpenIndex(isOpen ? null : index)}
                       aria-expanded={isOpen}
                       aria-controls={panelId}
                     >
                       <span className="font-bold text-lg text-gray-800 group-hover:text-eduzin-dark">{faq.question}</span>
                       {isOpen ? <Minus size={20} aria-hidden="true" /> : <Plus size={20} aria-hidden="true" />}
                     </button>
                   </h3>
                   <div 
                     id={panelId}
                     role="region"
                     aria-labelledby={buttonId}
                     className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 mt-4' : 'max-h-0'}`}
                   >
                     <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                   </div>
                 </div>
               );
             })}
          </div>
        </div>
      </div>
    </section>
  );
};
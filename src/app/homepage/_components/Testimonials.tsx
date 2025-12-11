"use client";

import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface TestimonialData {
  id: number;
  title: string;
  quote: string;
  author: string;
  role: string;
  image: string;
}

const testimonialData: TestimonialData[] = [
  {
    id: 1,
    title: "A Transformative Journey",
    quote: "Studying at Eduzin has been a life-changing experience. The faculty are incredibly supportive, and the courses are both challenging and inspiring. I've grown not just academically, but also personally, thanks to the vibrant campus life.",
    author: "Natalia T. Morgan",
    role: "Science Student",
    image: "https://i.pravatar.cc/100?img=32"
  },
  {
    id: 2,
    title: "Unlocking Potential",
    quote: "The research facilities here are world-class. I was able to participate in groundbreaking projects starting from my second year. It truly bridged the gap between theoretical knowledge and practical application.",
    author: "James Wilson",
    role: "Engineering Major",
    image: "https://i.pravatar.cc/100?img=11"
  },
  {
    id: 3,
    title: "Community & Growth",
    quote: "What stands out most is the sense of community. The diverse student body has broadened my perspective, and the networking opportunities have opened doors I never imagined possible.",
    author: "Sarah Jenkins",
    role: "Business Administration",
    image: "https://i.pravatar.cc/100?img=5"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialData.length) % testimonialData.length);
  };

  const current = testimonialData[currentIndex];

  return (
    <section className="py-20 bg-eduzin-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div className="space-y-6">
            <span className="inline-block px-3 py-1 border border-gray-300 rounded-full text-xs font-bold uppercase tracking-wider">Testimonials</span>
            <h2 className="text-4xl font-medium max-w-xs">Our exclusive happy student saying.</h2>
            
            <div className="flex gap-4 pt-4">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-eduzin-dark hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={16} />
              </button>
              <button 
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-eduzin-dark text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
                aria-label="Next testimonial"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-white flex flex-col justify-between h-full min-h-[300px] transition-all duration-300">
             <div>
                <span className="text-xs font-bold text-eduzin-dark mb-4 block">{current.title}</span>
                <p className="text-lg md:text-xl font-medium leading-relaxed mb-8">
                  &quot;{current.quote}&quot;
                </p>
             </div>

             <div className="flex items-center gap-4">
               <img 
                 src={current.image} 
                 alt={current.author} 
                 className="w-12 h-12 rounded-full grayscale object-cover" 
               />
               <div>
                 <p className="font-bold text-sm">{current.author}</p>
                 <p className="text-xs text-gray-500">{current.role}</p>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}


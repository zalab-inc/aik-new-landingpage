import React, { useState } from 'react';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const AnimatedGlobe = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradGlobe" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    {/* Rotating Outer Ring */}
    <g transform="translate(100 100)">
      <circle r="85" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3">
        <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="30s" repeatCount="indefinite" />
      </circle>
      <circle r="92" fill="none" stroke="white" strokeWidth="0.2" opacity="0.1">
         <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="40s" repeatCount="indefinite" />
      </circle>
    </g>

    {/* Main Globe Body */}
    <circle cx="100" cy="100" r="70" fill="url(#gradGlobe)" stroke="white" strokeWidth="0.5" opacity="0.2" />

    {/* Rotating Meridians (Simulated 3D) */}
    <g>
      <ellipse cx="100" cy="100" rx="70" ry="70" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2" />
      {/* Dynamic Ellipses */}
      <ellipse cx="100" cy="100" rx="30" ry="70" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3">
         <animate attributeName="rx" values="30;0;30" dur="4s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="100" cy="100" rx="10" ry="70" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3">
         <animate attributeName="rx" values="10;50;10" dur="4s" begin="1s" repeatCount="indefinite" />
      </ellipse>
       <ellipse cx="100" cy="100" rx="50" ry="70" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3">
         <animate attributeName="rx" values="50;10;50" dur="4s" begin="2s" repeatCount="indefinite" />
      </ellipse>
    </g>
    
    {/* Latitude Lines */}
    <line x1="35" y1="50" x2="165" y2="50" stroke="white" strokeWidth="0.5" opacity="0.1" />
    <line x1="30" y1="100" x2="170" y2="100" stroke="white" strokeWidth="0.5" opacity="0.2" />
    <line x1="35" y1="150" x2="165" y2="150" stroke="white" strokeWidth="0.5" opacity="0.1" />

    {/* Orbiting Dots */}
    <circle r="3" fill="white" filter="url(#glow)">
       <animateMotion dur="8s" repeatCount="indefinite" path="M100,100 m-90,0 a90,25 0 1,0 180,0 a90,25 0 1,0 -180,0" />
    </circle>
    
    <circle r="2" fill="white" opacity="0.6">
       <animateMotion dur="12s" repeatCount="indefinite" path="M100,100 m0,-90 a25,90 0 1,0 0,180 a25,90 0 1,0 0,-180" />
    </circle>
  </svg>
);

const testimonials = [
  {
    id: 1,
    quote: "The curriculum here is challenging but incredibly rewarding. I've gained skills that I use daily in my career as a software engineer.",
    author: "Sarah Jenkins",
    role: "Alumni, Class of 2022",
    avatar: "https://i.pravatar.cc/150?img=5"
  },
  {
    id: 2,
    quote: "Professors truly care about your success. The mentorship program opened doors for me that I didn't even know existed.",
    author: "Michael Chen",
    role: "Senior Student, Physics",
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    id: 3,
    quote: "Campus life is vibrant and inclusive. I found my second family here and memories that will last a lifetime.",
    author: "Emily Watson",
    role: "Student Council President",
    avatar: "https://i.pravatar.cc/150?img=32"
  },
  {
    id: 4,
    quote: "The research facilities are world-class. Being able to participate in groundbreaking studies as an undergraduate was a highlight.",
    author: "David Okonjo",
    role: "PhD Candidate",
    avatar: "https://i.pravatar.cc/150?img=8"
  },
  {
    id: 5,
    quote: "KelasInovatif isn't just a university; it's a launchpad for dreams. The career support service is exceptional.",
    author: "Jessica Lee",
    role: "Marketing Director at TechCo",
    avatar: "https://i.pravatar.cc/150?img=9"
  }
];

export const StatsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="bg-eduzin-dark text-white pt-16 pb-20 px-4 md:px-8 overflow-hidden relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Stats & Globe */}
          <div className="space-y-12 relative">
            <div className="mb-8 relative z-10">
              <div className="flex -space-x-4 mb-4">
                {[15, 33, 45, 52, 60].map((i) => (
                  <img 
                    key={i} 
                    src={`https://i.pravatar.cc/150?img=${i}`} 
                    alt="Student" 
                    className="w-14 h-14 rounded-full border-2 border-eduzin-dark object-cover"
                  />
                ))}
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 font-bold text-white">5.0</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10 relative z-10">
               <div>
                 <h3 className="text-5xl font-serif mb-2">92%</h3>
                 <p className="text-sm text-white/60">They are in a job related to their field of study</p>
               </div>
               <div>
                 <h3 className="text-5xl font-serif mb-2">25%</h3>
                 <p className="text-sm text-white/60">Daily growing students are still grinding</p>
               </div>
            </div>

            {/* Animated Globe Section */}
            <div className="pt-4 flex justify-center md:justify-start md:-ml-12 relative z-0">
               <div className="w-80 h-80 md:w-[600px] md:h-[600px] relative opacity-40 md:opacity-80">
                  <AnimatedGlobe />
               </div>
            </div>
          </div>

          {/* Right Column: Testimonial Slider (Replacing Text + Image) */}
          <div className="relative z-10 lg:pl-10">
             
             {/* Student Ratings Overlay (Positioned to match screenshot) */}
             <div className="absolute -top-32 left-0 hidden md:flex bg-white/10 backdrop-blur-md p-4 rounded-xl items-center gap-4 z-20 border border-white/10 mb-8">
                 <div className="flex -space-x-2">
                   <img src="https://i.pravatar.cc/100?img=1" className="w-8 h-8 rounded-full border-2 border-transparent" alt="student"/>
                   <img src="https://i.pravatar.cc/100?img=5" className="w-8 h-8 rounded-full border-2 border-transparent" alt="student"/>
                   <img src="https://i.pravatar.cc/100?img=8" className="w-8 h-8 rounded-full border-2 border-transparent" alt="student"/>
                 </div>
                 <div>
                   <p className="font-bold text-sm text-white">5000</p>
                   <p className="text-[10px] uppercase tracking-wide text-white/80">Student ratings</p>
                 </div>
              </div>

             {/* Header Badge */}
             <div className="mb-8 pt-16 md:pt-0">
                <span className="inline-block px-3 py-1 border border-white/20 rounded-full text-xs font-bold uppercase tracking-wider text-white/90">
                  Student Stories
                </span>
             </div>

             {/* Testimonial Content */}
             <div className="mb-10 min-h-[200px]">
                <Quote className="text-white/20 w-10 h-10 mb-6" />
                
                <div key={current.id} className="animate-fadeIn">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium leading-tight mb-8">
                    "{current.quote}"
                  </h2>
                  
                  <div className="flex items-center gap-4">
                     <img 
                       src={current.avatar} 
                       alt={current.author} 
                       className="w-14 h-14 rounded-full border-2 border-white/20 object-cover"
                     />
                     <div>
                        <p className="font-bold text-lg">{current.author}</p>
                        <p className="text-xs font-bold text-white/50 uppercase tracking-widest">{current.role}</p>
                     </div>
                  </div>
                </div>
             </div>

             {/* Navigation Arrows */}
             <div className="flex gap-4">
                <button 
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-eduzin-dark transition-all duration-300 group"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full bg-white text-eduzin-dark flex items-center justify-center hover:bg-white/90 transition-all duration-300 shadow-lg group"
                  aria-label="Next testimonial"
                >
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
             </div>

          </div>

        </div>
      </div>
    </section>
  );
};
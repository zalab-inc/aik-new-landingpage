import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  // Graduation hat background pattern
  const bgPattern = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='none' stroke='%231F3D35' stroke-width='0.5' stroke-linecap='round' stroke-linejoin='round' opacity='0.08'%3E%3Cpath d='M22 10v6M2 10l10-5 10 5-10 5z'/%3E%3Cpath d='M6 12v5c3 3 9 3 12 0v-5'/%3E%3C/svg%3E")`;

  return (
    <footer className="bg-white pt-10 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
           
           <div className="relative">
              {/* Background Pattern for Quote */}
              <div className="absolute -top-10 -left-10 w-[calc(100%+80px)] h-[calc(100%+40px)] opacity-50 pointer-events-none" style={{ backgroundImage: bgPattern }}></div>

              <h2 className="text-3xl font-medium leading-tight mb-8 relative z-10">
                "It's about shaping a perspective, fostering critical thinking, and preparing for a lifetime of learning and growth."
              </h2>
              <div className="flex items-center gap-3 mb-12 relative z-10">
                 <img src="https://i.pravatar.cc/100?img=32" alt="Founder" className="w-10 h-10 rounded-full" />
                 <div>
                   <p className="font-bold text-sm">Natalia T. Morgan</p>
                   <p className="text-xs text-gray-500">Founder</p>
                 </div>
              </div>

               {/* Decorative Line Art */}
               <svg className="absolute top-full left-0 w-64 h-32 opacity-10 pointer-events-none" viewBox="0 0 100 50">
                   <path d="M0,25 Q50,0 100,25 T200,25" fill="none" stroke="black" strokeWidth="1" />
               </svg>

               <div className="flex gap-8 text-xs font-bold tracking-widest text-gray-500 mt-12 relative z-10">
                 <a href="#" className="hover:text-black">ABOUT</a>
                 <a href="#" className="hover:text-black">FAQ</a>
                 <a href="#" className="hover:text-black">CAREERS</a>
                 <a href="#" className="hover:text-black">CONTACT</a>
               </div>
           </div>

           <div>
             <img src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2586&auto=format&fit=crop" className="w-full h-[400px] object-cover rounded-sm" alt="Building" />
           </div>

        </div>

        {/* Blog Section */}
        <div className="mb-16 pt-12 border-t border-gray-100">
           <div className="flex justify-between items-end mb-8">
              <h4 className="text-xs font-bold tracking-widest uppercase text-gray-500">Latest from the Blog</h4>
              <a href="#" className="text-xs font-bold underline decoration-1 underline-offset-4 hover:text-eduzin-dark">VIEW ALL</a>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Blog 1 */}
              <a href="#" className="group block">
                 <div className="overflow-hidden rounded-sm mb-4">
                   <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2670&auto=format&fit=crop" 
                        alt="Blog 1" 
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" 
                   />
                 </div>
                 <div className="flex items-center gap-3 mb-2">
                    <span className="w-2 h-2 rounded-full bg-eduzin-dark"></span>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Academic</p>
                    <p className="text-[10px] font-bold text-gray-300">JUNE 25, 2025</p>
                 </div>
                 <h3 className="font-serif font-medium text-lg leading-snug group-hover:text-eduzin-dark transition-colors">
                   Redefining the university experience for the modern era.
                 </h3>
              </a>

              {/* Blog 2 */}
              <a href="#" className="group block">
                 <div className="overflow-hidden rounded-sm mb-4">
                   <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop" 
                        alt="Blog 2" 
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" 
                   />
                 </div>
                 <div className="flex items-center gap-3 mb-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Campus Life</p>
                    <p className="text-[10px] font-bold text-gray-300">JULY 02, 2025</p>
                 </div>
                 <h3 className="font-serif font-medium text-lg leading-snug group-hover:text-eduzin-dark transition-colors">
                   5 tips for balancing study and social life on campus.
                 </h3>
              </a>

              {/* Blog 3 */}
              <a href="#" className="group block">
                 <div className="overflow-hidden rounded-sm mb-4">
                   <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=2574&auto=format&fit=crop" 
                        alt="Blog 3" 
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" 
                   />
                 </div>
                 <div className="flex items-center gap-3 mb-2">
                    <span className="w-2 h-2 rounded-full bg-red-400"></span>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Research</p>
                    <p className="text-[10px] font-bold text-gray-300">JULY 10, 2025</p>
                 </div>
                 <h3 className="font-serif font-medium text-lg leading-snug group-hover:text-eduzin-dark transition-colors">
                   New research lab opens for sustainable energy studies.
                 </h3>
              </a>
           </div>
        </div>

        {/* Newsletter Section */}
        <div className="mb-12 p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 flex flex-col lg:flex-row justify-between items-center gap-8 relative overflow-hidden" style={{ backgroundColor: '#F9FAFB' }}>
           <div className="absolute inset-0 opacity-100" style={{ backgroundImage: bgPattern }}></div>
           
           <div className="relative z-10 flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-eduzin-dark flex items-center justify-center text-white font-serif font-bold italic text-xl shadow-lg shadow-eduzin-dark/20">K</div>
               <div className="flex flex-col">
                 <span className="text-xl font-bold tracking-tight text-eduzin-dark leading-none">KelasInovatif</span>
                 <span className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">University</span>
               </div>
           </div>

           <div className="relative z-10 text-center lg:text-left">
               <h3 className="text-2xl font-serif font-medium text-gray-900">Join our newsletter</h3>
           </div>
           
           <div className="relative z-10 flex w-full max-w-md bg-white border border-gray-200 rounded-full p-1.5 pl-5 focus-within:ring-2 focus-within:ring-eduzin-dark/20 focus-within:border-eduzin-dark transition-all">
              <input type="email" placeholder="Business email..." className="flex-1 outline-none text-sm bg-transparent placeholder-gray-400 text-gray-800" />
              <button className="bg-eduzin-dark text-white text-[10px] font-bold px-8 py-3 rounded-full flex items-center gap-2 hover:bg-opacity-90 transition-all shadow-md">
                SUBSCRIBE
              </button>
           </div>
        </div>

        {/* Bottom Navigation Links */}
        <div className="flex justify-center items-center gap-8 mb-8">
            <a href="#" className="text-xs font-bold tracking-widest text-gray-500 hover:text-eduzin-dark uppercase">Home +</a>
            <a href="#about" className="text-xs font-bold tracking-widest text-gray-500 hover:text-eduzin-dark uppercase">About</a>
            <a href="#pages" className="text-xs font-bold tracking-widest text-gray-500 hover:text-eduzin-dark uppercase">Pages +</a>
            <a href="#contact" className="text-xs font-bold tracking-widest text-gray-500 hover:text-eduzin-dark uppercase">Contact</a>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 font-bold uppercase tracking-wider pt-8 border-t border-gray-100">
           <p>COPYRIGHT & DESIGN BY @REDDEVS - 2025</p>
           <div className="flex gap-4 mt-4 md:mt-0">
             <Facebook size={14} className="hover:text-black cursor-pointer" />
             <Twitter size={14} className="hover:text-black cursor-pointer" />
             <Linkedin size={14} className="hover:text-black cursor-pointer" />
             <Instagram size={14} className="hover:text-black cursor-pointer" />
           </div>
        </div>

      </div>
    </footer>
  );
};